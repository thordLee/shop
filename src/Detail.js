import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

let Box = styled.div`
  padding : 20px;
  background : grey
`;
let YellowBtn = styled.button`
  background : ${ props=>props.bg };
  color : ${ props=>props.bg=='blue'?'white': 'black' };
  padding : 10px;
`;
{/**
background : yellow;
*/}
{
    /* 
    현재 url 파라미터를 사용한다.
    */
}
function Detail(props) {
    //컴포넌트가 실행될때 
    // useEffect는 실행 시점이 다름. 랜더링이 다 되고 나서 실행됨. 즉 document.ready와 비슷
    let [msg, setMsg] = useState(true);
    let [count, setCount] = useState(0);
    let [num, setNum] = useState('');

    useEffect(()=>{
        let a = setTimeout(()=>{
            setMsg(false);
        }, 2000);

        if (isNaN(num)==true && num!='') {
            alert('숫자만입력하세요');
            setNum('');
        }

        return ()=>{//useEffect가 동작전에 실행되는 곳 또는 unmount 될때 사용
            clearTimeout(a);
        }
    }, [num]);




    let {id} = useParams();
    console.log(id);

    let showShoes = props.shoes.find(function(data) {
        return data.id=id;
    })

    return (
        <div className="container">
            {msg==true ? 
                <div className="alert alert-warning">
                    2초이내 구매시 할인
                </div> : null
            }
       {/*
            <YellowBtn bg="gray">버튼임</YellowBtn>
            <YellowBtn bg="blue">버튼임</YellowBtn>
    */}
            <button onClick={()=>{setCount(count+1)}}>상태변경버튼 - {count}</button>

            <input value={num} onChange={(e)=>{setNum(e.target.value)}}></input>
            <div className="row">
                <div className="col-md-6">
                    <img src={showShoes.img} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{showShoes.title}</h4>
                    <p>{showShoes.content}</p>
                    <p>{showShoes.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

/*
class Detail2 extends React.Component {
    componentDidMount() {
        //컴포넌트가 로드될때
    }
    componentDidUpdate() {
        //컴포넌트가 업데이트될때
    }
    componentWillUnmount() {
        //컴포넌트가 삭제될때
    }
}
*/

export default Detail;