import React,{useState} from 'react';
import './App.css';
import  Contents from './components/Contents';
import Lists from './components/Lists';
import { Data } from '../src/types/types'
 

 
const App: React.FC  = () => {

  const initialData = [
    {
      
      name: "",
      email: "",
       
    }
  ];


  const [data, setData] = useState(initialData);

  const addAvatar = (newData:Data) => {
    setData([...data, newData]);
  };


  return (

  <div className="App">
     
     <Contents addAvatar={addAvatar } />
      <Lists />
     

  </div>
  );
};

export default App;