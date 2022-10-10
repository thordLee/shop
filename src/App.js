import logo from './logo.svg';
import './App.css';
import {Button, Container, Navbar, Nav, NavDropdown, Row, Col} from  'react-bootstrap';

// 직접 이미지를 사용하고 싶을때는 import를 해서 사용해야 함.
// http를 포함한 전체 이미지 주소를 그냥 사용해도 됨.
// 또는 public 폴더에 이미지를 넣고 사용하면 됨. 이때는 절대경로 사용 process.env.PUBLIC_URL 로 시작 
//import MainBg from './img/main.jpg';

import { useState } from 'react';

//데이터 가져오기
import data from './data.js';

import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';

import Detail from './Detail.js';

function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DIDIMU SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
{/*
      navigate(1)->앞으로, navigate(-1)->뒤로

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>
  */}
      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg" style={{backgroundImage : 'url('+process.env.PUBLIC_URL+'/img/main.jpg)'}}></div>
            <div>
            <Container className="subList">
                <Row>
            {
            shoes.map((d, i)=>{
                return (
                <GoodDetail goodData={d} i={i}></GoodDetail>
                )
            })
            }
                </Row>
            </Container>
            </div>
          </>

        }></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}></Route>
        <Route path="/about" element={<About/>}> {/* nested routes*/}
          <Route path="member" element={<div>멤버임</div>} ></Route>
          <Route path="location" element={<About/>} ></Route>

        </Route>

        <Route path="/event" element={<Event></Event>}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>

        <Route path="*" element={<div>없는페이지입니다.</div>}></Route>{/*404 페이지*/}
      </Routes>



    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function GoodDetail(props) {
  return (
    <Col id={'goodNum'+props.i}>
      <img src={props.goodData.img}></img>
      <h4>{props.goodData.title}</h4>
      <p>{props.goodData.content}</p>
      <p>{props.goodData.price}</p>
    </Col>
  )
}

export default App;


{/*
      <Col key={i}>
        <img src={d.img}></img>
        <h4>{d.title}</h4>
        <p>{d.content}</p>
        <p>{d.price}</p>
      </Col>

      <Col>
        <img src="https://codingapple1.github.io/shop/shoes1.jpg"></img>
        <h4>{data[0].title}</h4>
        <p>설명</p>
      </Col>
      <Col>
        <img src="https://codingapple1.github.io/shop/shoes2.jpg"></img>
        <h4>상품명</h4>
        <p>설명</p>
      </Col>
      <Col>
        <img src="https://codingapple1.github.io/shop/shoes3.jpg"></img>
        <h4>상품명</h4>
        <p>설명</p>
      </Col>
*/}