import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../redux/actions/productAction";

const ProductDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.selectedItem);

  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="product-detail-card">
      <Row>
        <Col className="product-detail-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div className="product-info">{product?.title}</div>
          <div className="product-info">₩{product?.price}</div>
          <div className="choice">
            {product?.choice === true ? "Conscious Choice" : ""}
          </div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              Select Size
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size?.length > 0 &&
                product?.size.map((item) => (
                  <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            Add
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
