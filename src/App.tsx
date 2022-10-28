import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";

type ShowType={
    userId: number
    id: number
    title: string
    completed: boolean
}

function App() {

  const [show,setShow]=useState<ShowType[]>([])

    //автоматом при загрузки страницы
  /*useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setShow(json))
  }, [])*/

  const showUP=()=>{
      fetch('https://jsonplaceholder.typicode.com/todos')
          .then(response => response.json())
          .then(json => setShow(json))
  }

  const clean=()=>setShow([])

  return (
    <div className="App">
<Button name={'ShowMe'} callBack={showUP}/>
<Button name={'CleanMe'} callBack={clean}/>
      <ul>

        {show.map(el=>{
        return(
        <li key={el.id}>
            <span>{el.userId}</span>
            <span>{el.id}</span>
            <span>{el.title}</span>
            <input style={{marginRight:'50px'}} type={'checkbox'} checked={el.completed}/>

        </li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
