import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {

  const [red, setRed] = useState(255)
  const [blue, setBlue] = useState(255)
  const [green, setGreen] = useState(255)

  

  return (
    <div className="!h-[100vh] !w-[100vw]" style={{backgroundColor:`rgb(${red},${green},${blue})`}}>
      <div className='p-3 rounded-full fixed bottom-6 left-[50%] transform -translate-x-1/2 bg-gray-200 flex gap-[4px] w-fit'>
        <input className='bg-red-500 p-2 flex-1 text-white rounded-full text-center' value={red} onChange={(e)=>setRed(e.target.value)}></input>
        <input className='bg-blue-500 p-2 flex-1 text-white rounded-full text-center' value={blue}onChange={(e)=>setBlue(e.target.value)}></input>
        <input className='bg-green-500 p-2 flex-1 text-white rounded-full text-center' value={green} onChange={(e)=>setGreen(e.target.value)}></input>
      </div>
    </div>
  );
}

export default App;
