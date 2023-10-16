import React, { Fragment, useEffect } from "react";
import { Form, Col, Card, CardBody, Label, FormGroup, Input } from "reactstrap";
import HeaderCard from "../../Common/Components/HeaderCard";
import { option8 } from "../AddProductForm/OptionData";
import { Btn, Image } from '../../AbstractElements';
import Select from 'react-select';
import Files from 'react-files';
import { useForm, Controller } from 'react-hook-form';
import { AddNewCustomer,AddNewCustomerData,AddNewCustomerState } from "../../redux/Action/CustomerAction";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const { register, handleSubmit, formState: { errors }, control, getValues } = useForm();
    const {addCustomer:add}=useSelector((store)=>store.customer)
    const {errorMessage:err}=useSelector((store)=>store.customer)
    const {customerData:data}=useSelector((store)=>store.customer)
    const {customerState:state}=useSelector((store)=>store.customer)
    console.log(err,"err",add,"data3");
    console.log(data,"data");
    console.log(state,"st");

    useEffect(()=>{
        dispatch(AddNewCustomerData())
    },[])

    useEffect(()=>{
        const userObj={
            country_id:"3"
        }
        dispatch(AddNewCustomerState(userObj))
    },[])

    const handleCreate=()=>{
        const userObj={
            customer_name:getValues("Company_Name"),
            contact_person:getValues("Contact_Person"),
            office_phone_no:getValues("Office_Phone_No"),
            fax_no:getValues("Fax_No"),
            email_id:getValues("Email_Id"),
            website:getValues("Website"),
            mobile_no:getValues("Mobile_No"),
            tax_id:getValues("Tax_Id"),
            skype:getValues("Skype_Id"),
            whatsapp_id:getValues("Whatsapp_Id"),
            facebook_url:getValues("Facebook_Url"),
            address:getValues("address"),
            country:"India",
            zipcode:getValues("Zip_Code"),
            is_wholesaler:"is",
            credit_days:getValues("Credit_Days"),
            shipping_address:"yess",
            customer_groups:"gro",
        }
        dispatch(AddNewCustomer(userObj,navigate))
    }

    // const optionData = data.country.map(function (data) {
    //     return { value: data.id, label: data.country }
    // })

    // const optionGroup = data.customer_group.map(function (data) {
    //     return { value: data.id, label: data.name }
    // })

    // const optionType = data.customer_type.map(function (data) {
    //     return { value: data.id, label: data.name }
    // })

   // console.log(optionData,"od");

    const onSubmit=()=>{
        console.log("submit");
        handleCreate();
    }

    return (
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Col>
                    <Card>
                        <HeaderCard title="Customer Details" />

                        <CardBody>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Customer Name</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Customer Name" name='Company_Name' {...register('Company_Name')} />
                                    <span className="text-danger">{err.customer_name}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Contact Person</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Contact Person" name='Contact_Person' {...register('Contact_Person')} />
                                    <span className="text-danger">{err.contact_person}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Office Phone No</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Office Phone No" name='Office_Phone_No' {...register('Office_Phone_No')} />
                                    <span className="text-danger">{err.office_phone_no}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Fax No</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Fax No" name='Fax_No' {...register('Fax_No')} />
                                    <span className="text-danger">{err.fax_no}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Is Wholesaler</Label>
                                <Col className="col-md-8">
                                    <Controller
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                               // options={optionType}
                                            />
                                        )}
                                        control={control}
                                        // rules={{ required: 'Please select an option' }}
                                        name="Is_Wholesaler"
                                        register={register}
                                    />
                                    {/* <span className="text-danger">{err.shipping_address}</span> */}
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Tax Id/UBI Number/Retail Number</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Tax Id" name='Tax_Id' {...register('Tax_Id')} />
                                    <span className="text-danger">{err.tax_id}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Email Id</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Email Id" name='Email_Id' {...register('Email_Id')} />
                                    <span className="text-danger">{err.email_id}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Website</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Website" name='Website' {...register('Website')} />
                                    <span className="text-danger">{err.website}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Mobile No</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Mobile No" name='Mobile_No' {...register('Mobile_No')} />
                                    <span className="text-danger">{err.mobile_no}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Skype Id</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Skype Id" name='Skype_Id' {...register('Skype_Id')} />
                                    <span className="text-danger">{err.skype}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Whatsapp Id</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Whatsapp Id" name='Whatsapp_Id' {...register('Whatsapp_Id')} />
                                    <span className="text-danger">{err.whatsapp_id}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Facebook Url</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Facebook Url" name='Facebook_Url' {...register('Facebook_Url')} />
                                    <span className="text-danger">{err.facebook_url}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Credit Days</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Credit Days" name='Credit_Days' {...register('Credit_Days')} />
                                    <span className="text-danger">{err.credit_days}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Address</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Address" name='address' {...register('address')} />
                                    {/* <span className="text-danger">{err.credit_days}</span> */}
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Zip Code</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Zip Code" name='Zip_Code' {...register('Zip_Code')} />
                                    {/* <span className="text-danger">{err.credit_days}</span> */}
                                </Col>
                            </FormGroup>
                            
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Country</Label>
                                <Col className="col-md-8">
                                    <Controller
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                //options={optionData}
                                            />
                                        )}
                                        control={control}
                                        // rules={{ required: 'Please select an option' }}
                                        name="Country"
                                        register={register}
                                    />
                                    <span className="text-danger">{err.country}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Shipping Address is same</Label>
                                <Col className="col-md-8">
                                    <Controller
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                             //   options={optionType}
                                            />
                                        )}
                                        control={control}
                                        // rules={{ required: 'Please select an option' }}
                                        name="Shipping_Address"
                                        register={register}
                                    />
                                    <span className="text-danger">{err.shipping_address}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Customer Groups</Label>
                                <Col className="col-md-8">
                                    <Controller
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                //options={optionGroup}
                                            />
                                        )}
                                        control={control}
                                        // rules={{ required: 'Please select an option' }}
                                        name="Customer_Groups"
                                        register={register}
                                    />
                                    <span className="text-danger">{err.customer_groups}</span>
                                </Col>
                            </FormGroup>
                            <Btn attrBtn={{ className: 'btn-block', color: 'primary' }}>Create</Btn>
                        </CardBody>
                    </Card>
                </Col>
            </Form>
        </Fragment>
    )
}

export default AddCustomer