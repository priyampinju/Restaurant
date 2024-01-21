import React, { useEffect, useState } from 'react'
import './style.css'

//getting local data
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist")
    if(lists) {
        return JSON.parse(lists)
    }
    else {
        return []
    }
}

const ToDo = () => {

    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState([getLocalData()])
    const [EditItem, setEditItem] = useState("")
    const [toggleButton, setToggleButton] = useState(false);
    
    // Adding items
    const addItems = () => {
        if(!inputData) {
            alert('Please fill the form')
        }
        else{
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputData,
            }
            setItems([...items, myNewInputData])
        }
    }

    //edit item
    const editItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        })
        setInputData(item_todo_edited.name);
        setEditItem(index);
        setToggleButton(true);
    };

    // Delete item
    const deleteItem = (index) => {
        const updatedItem = items.filter((curElem) => {
            return curElem.id !== index;        
        })
        setItems(updatedItem)
    } 

    //removing all
    const removeAll = () => {
        setItems([])
    }

    //localstorage
    useEffect(() => {
        localStorage.setItem("mytodolist", JSON.stringify(items)) 
    }, [items]);


    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todo image" />
                        <figcaption>Add your list here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text"
                            className="form-control" placeholder='Add Items Here🤞' value={inputData} onChange={(event) => setInputData(event.target.value)} />
                
                        {toggleButton ? (
                            <i className="far fa-edit add-btn" onClick={addItems}></i>    
                        ) : (
                            <i className="fa fa-plus add-btn" onClick={addItems}></i>
                        )}
                        {/* <i className="fa fa-plus add-btn" onClick={addItems}></i> */}
                    </div>

                    <div className="showItems">
                        {items.map((curElem) => {
                            return(
                                <div className="eachItem" key = {curElem.id}>
                            <h3>{curElem.name}</h3>
                            <div className="todo-btn">
                                <i className="far fa-edit add-btn" onClick={() => editItem(curElem.id)}></i>
                                <i className="far fa-trash-alt add-btn" onClick={()=> deleteItem(curElem.id)}></i>
                            </div>
                        </div>
                            )
                        })}
                        
                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                            <span>CHECK LIST</span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ToDo
