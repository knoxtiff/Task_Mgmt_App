import React from "react";
import './tasks.css'


function TaskList({tasks, handleDelete, handleUpdate, tnameRef, tddRef, completeRef, handleAdd}) {
    
    return(
        <body>
            <form className="taskForm">
                <div>
                    <h2>Add Tasks to Your List</h2>
                    <div><input className="taskForm-input"  
                            type="text" 
                            placeholder="To-Do Task" 
                            ref={tnameRef} />
                    </div>   
                    <div><input className="taskForm-input" 
                            type="text" 
                            placeholder="Due Date" 
                            ref={tddRef} />
                    </div> 
                    <div>Complete?<input 
                            type="checkbox" 
                            ref={completeRef} />
                    </div>  
                    <div><button className="taskForm-btn"  
                            onClick={handleAdd}>Add</button>
                    </div>  
                </div>
            </form>
            <table className="TaskTable"> 
                <thead className="TaskTableHead" >
                    <tr><th>Name</th><th>Due Date</th><th>Completion Status</th><th>Action</th></tr>
                </thead>
                <tbody>
                    {
                    tasks.map( (task) => {
                    return ( 
                        <tr key={task.tname}><td>{task.tname}</td> 
                        <td>{task.tdd}</td> 
                        <td><input type="checkbox" id="complete" checked={task.complete} onChange={() => handleUpdate(task.tname)}/></td> 
                        <td><button onClick={()=> handleDelete(task.tname)}>Delete</button></td></tr> )
                    })
                    }
                </tbody>
            </table>
        </body>
    )
}
export default TaskList; 