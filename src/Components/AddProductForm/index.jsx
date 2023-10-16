import React, { Fragment } from "react";
import FormDetails from "./FormDetails";
import { Container, Row, Col, Card, CardBody, Form } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { Breadcrumbs, P,Btn } from '../../AbstractElements';
import HeaderCard from "../../Common/Components/HeaderCard";
import SalesDiscount from "./SalesDiscount";
import PriceDetails from "./PriceDetails";
import UploadImage from "../ProductForm/UploadImage";
import UploadImage2 from "./UploadImage2";
import ProductAttribute from "./ProductAttribute";

const AddProduct = () => {
//   const { register, handleSubmit, formState: { errors }, control } = useForm();
//   const onSubmit = data => {
//     if (data !== '') {
//         alert('You submitted the form and stuff!');
//     } else {
//         errors.showMessages();
//     }
// };
  return (
    <Fragment>
      <Container fluid={true}>
      <Breadcrumbs parent="Dashboard" mainTitle='Add Products' title="AddProducts" />
      <FormDetails />
      {/* <ProductAttribute/> */}
      <PriceDetails/>
      <SalesDiscount/>
      <UploadImage/>
      <UploadImage2/>
      <Btn attrBtn={{ color: 'primary' }} >{'Submit form'}</Btn>
        {/* <Row>
          <Col sm="8" xl="10">
            <Row>
            <FormDetails />
            </Row>
          </Col>
        </Row> */}
      </Container>
      {/* <P>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}</P> */}
    </Fragment>
  )
}
export default AddProduct