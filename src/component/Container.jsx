import React, { useState } from 'react'

const Container = () => {

    const [name, setName] = useState("");
    const [tasks, setTasks] = useState([]);
    
    function addTask(taskName) {
        const newTask = { id: Date.now(), name: taskName };
        setTasks([...tasks, newTask]);
        console.log(newTask);
        
    }

    return (
        <div>
            <h1 className='text-3xl font-bold'
            >TASK TRACKER</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => addTask(name)}>Add Task</button>
                <ul>
                    {tasks.map(task =>(
                    <li key={task.id}>
                        {task.name}
                    </li>
                    ))}
                </ul>
                
        </div>
    )
}

export default Container