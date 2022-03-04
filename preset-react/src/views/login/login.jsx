import React, { useEffect } from 'react'

export default function Login(props) {
    useEffect(()=>{
        console.log("路由参数",props.location.state.id);
    },[])
    return (
        <div>
            登陆页
        </div>
    )
}
