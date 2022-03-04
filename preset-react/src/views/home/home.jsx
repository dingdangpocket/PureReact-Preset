import React from "react";
import API from "../../http/api";
import { useEffect, useState,useContext } from "react";
import Child from "../../components/Child";
import WithRouterComponents from "../../components/WithRouterComponents";
import { StateContext } from "../../context/state";
import styles from "./home.module.scss";
export default function Home(props) {
  const { state,dispatch } = useContext(StateContext);
  useEffect(async () => {
    const res1 = await API.relicManage.getData();
    console.log("管理信息API模块中的数据结果", res1);
    const res2 = await API.user.userData();
    console.log("用户信息API模块中的数据结果", res2);
  }, []);
  useEffect(async () => {
    console.log("context中的默认值",state);
  }, [state]);

  const [params,setParams]=useState(null);

  const goToLoginPage = () => {
    props.history.push({pathname:'/login',state:{id:2190867637637}})
  };
  
  const sendValue=(value)=>{
      console.log("formChildValue",value);
      setParams(value)
  }
    //测试数据;
    const [data, setData] = useState([
        {
          id: 0,
          title: "React性能优化方案",
          content: "理论内容数据...",
          recordNum: "1076",
          solveNum: "786",
          spotNum: "684",
          commentNum: "692",
          publisher: "张海",
          createTime: "3天前",
          MainTag: "前端",
          ProgramingLanguage: "python",
          contentType: "theory",
        },
        {
          id: 1,
          title: "Promise.all()使用示例",
          content: "示例内容数据...",
          recordNum: "1076",
          solveNum: "786",
          spotNum: "684",
          commentNum: "692",
          publisher: "张海",
          createTime: "3天前",
          MainTag: "前端",
          ProgramingLanguage: "python",
          contentType: "example",
        },
        {
          id: 2,
          title: "Cannot read property blob of undefined?",
          content: "报错内容数据...",
          recordNum: "1076",
          solveNum: "786",
          spotNum: "684",
          commentNum: "692",
          publisher: "张海",
          createTime: "3天前",
          MainTag: "前端",
          ProgramingLanguage: "python",
          contentType: "error",
        },
        {
          id: 3,
          title: "Ajax中如何获得数据?",
          content: "问题数据...",
          recordNum: "1076",
          solveNum: "786",
          spotNum: "684",
          commentNum: "692",
          publisher: "张海",
          createTime: "3天前",
          MainTag: "前端",
          ProgramingLanguage: "python",
          contentType: "question",
        },
      ]);
    //测试数据;
  return (
    <div>
      <div className={styles.blockA}>
        <div className={styles.blockB}></div>
      </div>
      <h1>子组件传过来的参数:{params}</h1>
      <button
         style={{ width: 150, height: 100 }}
         onClick={() => {
          dispatch({ type:"changeToRed", color: "red" });
        }}
      >
       dispatchToChangeRed
      </button>
      <button
         style={{ width: 150, height: 100 }}
         onClick={() => {
          dispatch({ type:"changeToBlue", color: "blue" });
        }}
      >
        dispatchToChangeBlue
      </button>

      <button
         style={{ width: 230, height: 100 }}
         onClick={() => {
          dispatch({ type:"changeNumber", number: 19962131231231 });
        }}
      >
        dispatchToChangeNumber
      </button>

      <button onClick={goToLoginPage} style={{ width: 190, height: 100 }}>
        页面级别路由切换页面
      </button>
      <h1>列表渲染子组件</h1>
      {data.map((item)=>{
          return  <Child item={item} key={item.id} sendValue={sendValue}></Child>
      })}
      <WithRouterComponents></WithRouterComponents>
    </div>
  );
}
