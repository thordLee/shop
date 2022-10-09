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

function App() {

  let [shoes, setShoes] = useState(data);


  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">DIDIMU SHOP</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/*상단이미지*/}
      <div className="main-bg" style={{backgroundImage : 'url('+process.env.PUBLIC_URL+'/img/main.jpg)'}}></div>
      {/*상품목록*/}
      <div>
        <Container className="subList">
          <Row>
      {
        shoes.map(function(d, i) {
          return (
            <GoodDetail goodData={d} key={i}></GoodDetail>
          )
        })
      }
          </Row>
        </Container>
      </div>

    </div>
  );
}

function GoodDetail(props) {
  return (
    <Col id="goodNum">
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