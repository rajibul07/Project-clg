import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Table from './Table';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(false);
  const submit = ()=> {
    console.log(file);
    setResult(true);
  }
  return (
    <div className="App">
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Image Test</span>
        </div>
      </nav>
      <div className="incon">
      <div class="input-group">
        <input type="file" accept="image/png, image/jpg, image/jpeg" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" onChange={(e)=> setFile(e.target.files[0])}/>
        <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={submit} disabled={file === null || file === undefined}>Submit</button>
      </div>
      </div>
      {result && <Table />}
    </div>
  )
}

export default App
