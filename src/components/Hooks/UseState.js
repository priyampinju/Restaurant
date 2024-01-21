import React, { useEffect, useState } from 'react'
import './style.css'

const UseState = () => {

    // const initialData = 10;
    const [myNum, setMyNum] = useState(10);

    useEffect(() => {
        document.title =  'Chats(' + myNum +')';
    });

    console.log(myNum)

  return (
    <>
      <div className="center_div">
        <p> {myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Hover Me
        </div>
        <div className="button2" onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Hover Me
        </div>
      </div>
    </>
  )
}

export default UseState
