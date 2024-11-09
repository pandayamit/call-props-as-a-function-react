import logo from './logo.svg';
import './App.css';
import User from './User'
import Member from './Member'

function App() {
  function getdata(){
    alert("call app")
  }
  return (
    <div className="App">
      <User data={getdata}></User>
      <div style={{float:'right'}}>
        <Member data={getdata}></Member>
      </div>
    </div>
  );
}

export default App;
