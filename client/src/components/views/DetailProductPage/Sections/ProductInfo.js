import { Button, Descriptions } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../_actions/user_actions";
function ProductInfo(props) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    //필요한 정보를 Cart 필드에다가 넣어준다
    // cart관련은 users 테이블하고 관련있음
    // redux을 이용할거다
    dispatch(addToCart(props.detail._id));
  };

  return (
    <div>
      <Descriptions title="상품 정보">
        <Descriptions.Item label="Price">
          {props.detail.price}
        </Descriptions.Item>
        <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
        <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {props.detail.description}
        </Descriptions.Item>
      </Descriptions>

      <br />
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button size="large" shape="round" type="danger" onClick={clickHandler}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
