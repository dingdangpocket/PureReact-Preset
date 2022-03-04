import React from 'react';
import { useEffect} from "react";
import {
    withRouter
  } from "react-router-dom";
const Child = (props) => {
    useEffect(()=>{
      console.log("父组件传入的数据item",props.item);
    },[])
    const changeParentsData=()=>{
        props.sendValue(100000)
    }
    return (
        <div>
            hello,child!
            <button onClick={()=>changeParentsData()} style={{ width: 100, height: 100 }}>传值给父组件</button>
        </div>
    );
}
export default withRouter(Child);
