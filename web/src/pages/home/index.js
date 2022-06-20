import { Container, TaskList, Task } from "./styles"
import { useState,useEffect } from 'react'
import { GoPlus,GoPencil,GoX } from "react-icons/go";

function Home(){

  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [ready,setReady] = useState()

  useEffect(() => {
    fetch('http://localhost:8080/task').then(response => {
      response.json().then(data => setTasks(data.tasks))
    })
  },[])  

  function handleEdit(id){
    console.log(ready,title)
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title, ready: ready })
    };
    fetch(`http://localhost:8080/task/${id}`, requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  }
  function handleDelete(id) {
    // Simple DELETE request with fetch   
    fetch(`http://localhost:8080/task/${id}`, { method: 'DELETE' })
       .then(() => this.setState({ status: 'Delete successful' }));
}

  function handleSubmit(event){
    event.preventDefault()

    const data = {ready}

   fetch('http://localhost:8080/task', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
   }).then(() => {
    console.log('Tarefa Inserida')
   })
  }

  return (
    <Container>
      <h1>Tasks Managers</h1>
      <form onSubmit={handleSubmit}>
        <p>Inserir Dados</p>
        <input id="txtInsert" type="text" onChange={e => setTitle(e.target.value)}/>
        <button type="submit" id='btnInsert'><GoPlus/></button>
      </form>

      <form>
        <p>Alterar Dados</p>
       <input id="ready" type="checkbox" onChange={e => setReady(e.target.checked)}/>     
       <input id="txtEdit" type="text" onChange={e => setTitle(e.target.value)}/>
        
      </form>
      <TaskList>
        {tasks.map(tasks =>{  
          
          return (
            <Task>
              {console.log(tasks)}
              <li key={tasks.id}>
                <input type="checkbox" name="ready" id="ready" checked={tasks.ready}/>
                <p>{tasks.title}</p> 
                <button type="submit" onClick={() => handleEdit(tasks._id)}><GoPencil/></button>
                <button type="submit" onClick={() => handleDelete(tasks._id)}><GoX/></button>
              </li>             
            </Task>
          )          
        })}
      </TaskList>     
      
    </Container>
  )
}

export default Home