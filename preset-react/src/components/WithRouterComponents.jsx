import React from 'react';
import {
    withRouter
  } from "react-router-dom";
const WithRouterComponents = (props) => {
    const changeParentsData=()=>{
        props.history.push({pathname:'/login',state:{id:2190867637637}})
    }
    return (
        <div>
            <button onClick={()=>changeParentsData()} style={{ width: 178, height: 100 }}>非页面组件withRouter()跳转路由</button>
        </div>
    );
}
export default withRouter(WithRouterComponents);
