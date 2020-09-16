import React, { useState} from 'react';
import './App.css';



function App() {
  const defaultList  = [
    { name: "ItemOne" ,del:"del-1" ,paraId:"para-1" },
    { name: "ItemTwo",del:"del-2",paraId:"para-2"  },
    { name: "ItemThree" ,del:"del-3",paraId:"para-3" }

  ]
  const count = 0 ;
  const [list, updateList] = useState(defaultList );
  
  const handleRemoveItem = idx => {
    // assigning the list to temp variable
    const temp = [...list];

    // removing the element using splice
    temp.splice(idx, 1);

    // updating the list
    updateList(temp);
}
 const addTodo=()=>{
     
}


  return (
    <div>
        <header>
          <h1 className="header">React Todos</h1>
        </header>
        <input type="text" id="input" maxLength={80} className="inputText"></input>
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
