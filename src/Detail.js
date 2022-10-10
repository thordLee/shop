import { useParams } from "react-router-dom";

{
    /* 
    현재 url 파라미터를 사용한다.
    */
}
function Detail(props) {

    let {id} = useParams();
    console.log(id);

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <img src={props.shoes[id].img} width="100%" />
            </div>
            <div className="col-md-6">
                <h4 className="pt-5">{props.shoes[id].title}</h4>
                <p>{props.shoes[id].content}</p>
                <p>{props.shoes[id].price}원</p>
                <button className="btn btn-danger">주문하기</button> 
            </div>
            </div>
        </div> 
    )
}

export default Detail;