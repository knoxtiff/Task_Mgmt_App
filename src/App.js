import './App.css';
import{useState, useRef} from "react"; 
import NavBar from './Components/NavBar';
import TaskList from './pages/Tasks';
import FilterTask from './Components/Filter';


function App() {
  const t = []
  const [tasks, setTasks] = useState(t); 

  const [filterTextvalue, updateFilterText] = useState('all'); 

  let filteredTaskList = tasks.filter((tasks) => {
    if(filterTextvalue === 'complete'){
      return tasks.complete === true; 
    } else if(filterTextvalue === 'incomplete'){
      return tasks.complete === false; 
    } else {
      return tasks;
    }
  })

  const handleDelete = (tname) => {
      let tempTasks = [...tasks]
      let i = tempTasks.findIndex( (task) => (task.tname === tname) )
      tempTasks.splice(i, 1); 
      setTasks(tempTasks); 
  }

  let tnameRef = useRef(); 
  let tddRef = useRef(); 
  let completeRef = useRef(); 

  const handleAdd = (event) => {
    event.preventDefault(); 
    let task = {}
    task.tname = tnameRef.current.value; 
    task.tdd = tddRef.current.value; 
    task.complete = completeRef.current.checked; 
    const tempTasks = [...tasks, task]
    setTasks(tempTasks); 
  }

  const handleUpdate = (tname) => {
    let tempTasks = tasks.map( (task) => {
        if (task.tname !== tname) {
          return task;
        }
        task.complete = (task.complete) ? false : true; 
        return task;
        })
    setTasks(tempTasks); 
  }

  function onFilterValueSelect(filterValue){
    updateFilterText(filterValue); 
  }

  return (
      <div classname="App">
        <NavBar />
        <TaskList tasks={filteredTaskList} handleDelete={handleDelete} handleUpdate={handleUpdate} 
        tnameRef={tnameRef} tddRef={tddRef} completeRef={completeRef} handleAdd={handleAdd} />
        <FilterTask onFilterValueSelect={onFilterValueSelect} />
      </div>
  )
}

export default App;
