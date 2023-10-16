import React, { Fragment, useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Btn, H5, H6 } from '../../AbstractElements';
import Select from 'react-select';
import HeaderCard from "../../Common/Components/HeaderCard";
import { options6, options3 } from "./OptionData"
import { Col, Card, CardBody, Form, FormGroup, Label, Table, Input } from 'reactstrap';
import PriceDetails from "./PriceDetails";
import SalesDiscount from "./SalesDiscount";
import UploadImage from "../ProductForm/UploadImage";
import ProductAttribute from "./ProductAttribute";

const FormDetails = (props) => {
    const [option, setOption] = useState([])
    const { register, handleSubmit, formState: { errors }, control } = useForm();
    const onSubmit = data => {
            if (data !== '') {
                alert('You submitted the form and stuff!');
            } else {
                errors.showMessages();
            }
        };

    return (
        <Fragment>
            <Form className="needs-validation theme-form mega-form" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                <Col sm="12">
                    <Card>
                        <HeaderCard title="Product Details" />
                        <CardBody>

                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Company</Label>
                                <Col className="col-md-8">
                                    <Controller
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={options6}
                                            />
                                        )}
                                        control={control}
                                        rules={{ required: 'Please select an option' }}
                                        name="company"
                                        register={register}
                                    />
                                   <span style={{color:"#d22d3d"}}> {errors.company && errors.company.type === 'required' && "Required"}</span>
                                </Col>

                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Vendor</Label>
                                <Col className="col-md-8">
                                    <Select options={options3} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Product Category</Label>
                                <Col className="col-md-8">
                                    <Select options={options6} isMulti />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Create New Category</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="text" placeholder="New Category" name='lName' {...register('lName', { required: true })} />
                                    <span>{errors.lName && 'Last name is required'}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Brand</Label>
                                <Col className="col-md-8">
                                    <Select options={options6} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Create New Brand</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="text" placeholder="New Brand" name='lName' {...register('lName', { required: true })} />
                                    <span>{errors.lName && 'Last name is required'}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Listing Category</Label>
                                <Col className="col-md-8">
                                <FormGroup className="m-t-15 m-checkbox-inline mb-0 custom-radio-ml">
                                    <div className="radio radio-primary">
                                        <Input id="radioinline1" type="radio" name="radio1" value="option1" />
                                        <Label className="mb-0" for="radioinline1"> Coming Soon<span className="digits"></span></Label>
                                    </div>
                                    <div className="radio radio-primary">
                                        <Input id="radioinline2" type="radio" name="radio1" value="option1" />
                                        <Label className="mb-0" for="radioinline2">Hot Deals<span className="digits"></span></Label>
                                    </div>
                                    <div className="radio radio-primary">
                                        <Input id="radioinline3" type="radio" name="radio1" value="option1" defaultChecked />
                                        <Label className="mb-0" for="radioinline3">New Arrivals<span className="digits"></span></Label>
                                    </div>
                                    <div className="radio radio-primary">
                                        <Input id="radioinline3" type="radio" name="radio1" value="option1" defaultChecked />
                                        <Label className="mb-0" for="radioinline3">Out Of Stack<span className="digits"></span></Label>
                                    </div>
                                </FormGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Group Type</Label>
                                <Col className="col-md-8">
                                    <Select options={options6} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Product Name</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="text" placeholder="Product Name" />
                                </Col>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>

                <Col sm="12">
                <Card>
                    <HeaderCard title="Product Attribute" />
                    <CardBody>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Product Category</Label>
                                <Col className="col-md-6">
                                    <Select className="js-example-basic-single col-sm-12"  options={options6} isMulti />
                                    {/* <Select onChange={(e) => setAddValue(Array.isArray(e) ? e.map(x => x.label) : [])} options={options6} isMulti />
                                <FormGroup>
                                    <button type="button" onClick={() => attibutButton()} attrBtn={{ color: "primary" }} >Add</button>
                                </FormGroup> */}
                                </Col>
                                <Col className="col-md-3">
                                    <input type="button" value="Add" className="btn btn-success" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Vendor</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="text" placeholder="Otto" name='attr' {...register('attr', { required: true })} />
                                    <span>{errors.attr && 'Last name is required'}</span>
                                </Col>

                            </FormGroup>
                            <button>submit</button>
                    </CardBody>
                </Card>
            </Col>
                {/* <ProductAttribute />
                <button>call</button> */}
                {/* <PriceDetails /> */}
            </Form>
            {/* <ProductAttribute onSubmit={onSubmit}/> */}
        </Fragment>
    )
}
export default FormDetails