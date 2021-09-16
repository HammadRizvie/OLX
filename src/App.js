import { useState } from 'react';
import './App.css';
import  Add  from './views/Add'
function App() {
  const [pageChange,setPageChange] = useState(false)
  const click = () =>
  {
    setPageChange(true);
  }
  return (
    <div>
      {
        pageChange? <Add /> : 
        <div>
        <h1>OLX</h1>
        <button onClick = {click}>OLX</button>
        </div>
        }
    </div>
  );
}

export default App;
