import React, { useState } from "react";
import './App.css'
const App = () => {
  const [items, setItems] = useState([]);
  const [added, setAdded] = useState("");
  const [editindex, setEditindex] = useState(-1);

  const additem = () => {
    if (added !== "") {
      setItems([...items, added]);
      setAdded("");
    }
  };

  const itemDelete = (index) => {
  

    const newitem = items.filter((item, i) => i !== index);
    setItems(newitem);
    setAdded("");
  };

  return (
    <div className="container">
      <div className="all">
        <div className="head">TODO APP</div>
        <div className="item">
          <input
            className="input"
            type="text"
            placeholder="enter a new item"
            value={added}
            onChange={(e) => setAdded(e.target.value)}
          ></input>
          <button className="btn1" onClick={additem}></button>

          <button className="btn2" onClick={() => setItems([])}></button>
        </div>

        <div>
          <ul className="ul">
            {items.map((item, index) => (
              <li className="list">
                {editindex === index ? (
                  <input
                    className="listinput"
                    type="text"
                    value={item}
                    onChange={(e) => {
                  
                      const updatedTaskList = [...items];
                      updatedTaskList[index] = e.target.value;
                      setItems(updatedTaskList);
                    }}
                  />
                ) : (
                  <div className="itemlist">{item}</div>
                )}
                {editindex === index ? (
                  <>
                    <button onClick={() => setEditindex(-1)}>save</button>
                  </>
                ) : (
                  <>
                    <button
                      className="editbtn"
                      onClick={() => setEditindex(index)}
                    ></button>
                 
                
                   <button className="editbtn1" onClick={() => itemDelete(index)}></button>
                   </>
                )}
               {" "}
                {/* argument pass cheyyanel arrow fuction il kodukkanam*/}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App
