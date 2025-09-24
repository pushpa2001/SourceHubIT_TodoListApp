import React, { useState } from "react";
import axios from "axios";

function Create({ setTodos }) {
  const [task, setTask] = useState("");

  const handleAdd = async () => {
    if (task.trim() === "") return;

    try {
      const res = await axios.post("http://localhost:3001/add", { task });
      // Update parent state
      setTodos(prev => [...prev, res.data]);
      setTask(""); // clear input
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Create;




/*LASTimport React, { useState } from "react";
import axios from "axios";

function Create() {
  const [task,setTask]=useState()
  const handleAdd=() =>{
    axios.post('http://localhost:3301/add',{task:task})
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='create_form'>
        <input type="text"  placeholder='Enter task' onChange={(e) => setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create*/








/*function Create({ setTodos }) {
  const [task, setTask] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault(); // Prevent form reload
    if (task.trim() === "") return;

    try {
      const res = await axios.post("http://localhost:3001/add", { task });
      // Add new task from backend to parent state
      setTodos((prev) => [...prev, res.data]);
      setTask(""); // Clear input
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="create_form" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Create;*/



/*import React, { useState } from "react";
import axios from "axios";

function Create({ setTodos }) {
  const [task, setTask] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault(); // prevent form reload
    if (task.trim() === "") return;

    try {
      const res = await axios.post("http://localhost:3001/add", { task });
      // Add new task from backend to parent state
      setTodos((prev) => [...prev, res.data]);
      setTask(""); // clear input
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="create_form" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Create;*/

/*import React, { useState } from "react";
import axios from 'axios'

function Create({ setTodos }) {
  const [task, setTask] = useState("");
  const handleAdd=() =>{
    axios.post('http://localhost:3001/add',{task:task})
    .then(result=>console.log(result))
    .catch(err => console.log(err))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    setTodos((prev) => [...prev, task]); // add task to parent state
    setTask(""); // clear input
  };

  return (
    <form className="create_form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" onClick={handleAdd}>Add</button>
    </form>
  );
}

export default Create;*/
/*import React from 'react'

function Create() {
  return (
    <div>
        <input type="text" name="" id="" />
        <button type="button">Add</button>
    </div>
  )
}

export default Create*/