import React, { useState} from 'react';
import './App.css';
function App() {
  const defaultList  = []

  const [list, updateList] = useState(defaultList );
  const [todoText,updateTodo] = useState("");
  const [count,updateCount] = useState(1);


  /**
   * This function is used to remove todo task
   * @param {number} idx  index
   */
      const handleRemoveItem = idx => {
        // assigning the list to temp variable
        const temp = [...list];
        // removing the element using splice
        temp.splice(idx, 1);
        // updating the list
        updateList(temp);
       }

  /**
   * this function is used to add todo task
   */     
 const addTodo=()=>{
  updateCount(count+1);
   let delId = "del-"+ count;
   let para = "para-" + count;

   const temp = [...list,{name:todoText,del:delId,paraId:para}];
  updateList(temp);
  updateTodo("");
     console.log(todoText)
}
  return (
    <div>
        <header>
          <h1 className="header">React Todos</h1>
        </header>
        <input type="text" id="input" maxLength={80} className="inputText" value={todoText} onChange={e => updateTodo(e.target.value)} ></input>
        <button id="add-btn" className="add" onClick={addTodo}>Add</button>
    {       list.map((item, idx) => {
                            return(
                              <div key={idx} className="todoText" >
                              <button onClick={() =>handleRemoveItem(idx)} id={item.del}> Remove </button>
                              <p id={item.paraId}>{item.name}</p>
                              </div>
                            )  
            })
    }
    </div>
  );
}

export default App;
