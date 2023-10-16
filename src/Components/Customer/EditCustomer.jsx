import React, { Fragment,useEffect } from "react";
import { Form, Col, Card, CardBody, Label, FormGroup, Input } from "reactstrap";
import HeaderCard from "../../Common/Components/HeaderCard";
import { option8 } from "../AddProductForm/OptionData";
import { Btn, Image } from '../../AbstractElements';
import Select from 'react-select';
import Files from 'react-files';
import { useForm, Controller } from 'react-hook-form';
import GetDetailsByHooksCustomer from './getDataByHooks'
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UpdateCustomerApi } from "../../redux/Action/CustomerAction";

const EditCustomer = () => {
    const id = sessionStorage.getItem("customer_id")
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const { register, handleSubmit, formState: { errors }, control, getValues,setValue } = useForm();
    const [detailById] = GetDetailsByHooksCustomer(id);
    console.log(detailById,"........dataa")

    useEffect(() => {
        const data = () => {
            if (detailById.customer) {
                setValue("address", detailById.customer.address)
                setValue("Contact_Person", detailById.customer.contact_person)
                setValue("Company_Name",detailById.customer.customer_name)
                setValue("Email_Id",detailById.customer.email_id)
                setValue("Mobile_No",detailById.customer.mobile_no)
                setValue("Tax_Id",detailById.customer.tax_id)
                setValue("Skype_Id",detailById.customer.skype)
                setValue("Whatsapp_Id",detailById.customer.whatsapp_id)
                setValue("Fax_No",detailById.customer.fax_no)
                setValue("Office_Phone_No",detailById.customer.office_phone_no)
                setValue("Credit_Days",detailById.customer.credit_days)
                setValue("Facebook_Url",detailById.customer.facebook_url)
                setValue("Website",detailById.customer.website)
                setValue("Zip_Code",detailById.customer.zipcode)
            }
        }
        data();
    }, [detailById.customer])
    console.log(getValues("Office_Phone_No"),"val")

    const handleUpdateCustomer=()=>{
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
            customer_id:id
        }
        dispatch(UpdateCustomerApi(userObj,navigate))
    }

    const onSubmit=()=>{
        console.log('submit');
        handleUpdateCustomer();
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
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Contact Person</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Contact Person" name='Contact_Person' {...register('Contact_Person')} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Office Phone No</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Office Phone No" name='Office_Phone_No' {...register('Office_Phone_No')} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Fax No</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Fax No" name='Fax_No' {...register('Fax_No')} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Is Wholesaler</Label>
                                <Col className="col-md-8">
                                    <Controller
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={option8}
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
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Email Id</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Email Id" name='Email_Id' {...register('Email_Id')} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Website</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Website" name='Website' {...register('Website')} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Mobile No</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Mobile No" name='Mobile_No' {...register('Mobile_No')} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Skype Id</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Skype Id" name='Skype_Id' {...register('Skype_Id')} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Whatsapp Id</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Whatsapp Id" name='Whatsapp_Id' {...register('Whatsapp_Id')} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Facebook Url</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Facebook Url" name='Facebook_Url' {...register('Facebook_Url')} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Credit Days</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="Credit Days" name='Credit_Days' {...register('Credit_Days')} />
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
                                                options={option8}
                                            />
                                        )}
                                        control={control}
                                        // rules={{ required: 'Please select an option' }}
                                        name="Country"
                                        register={register}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Shipping Address is same</Label>
                                <Col className="col-md-8">
                                    <Controller
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={option8}
                                            />
                                        )}
                                        control={control}
                                        // rules={{ required: 'Please select an option' }}
                                        name="Shipping_Address"
                                        register={register}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Customer Groups</Label>
                                <Col className="col-md-8">
                                    <Controller
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={option8}
                                            />
                                        )}
                                        control={control}
                                        // rules={{ required: 'Please select an option' }}
                                        name="Customer_Groups"
                                        register={register}
                                    />
                                </Col>
                            </FormGroup>
                            <Btn attrBtn={{ className: 'btn-block', color: 'primary' }}>Update</Btn>
                        </CardBody>
                    </Card>
                </Col>
            </Form>
        </Fragment>
    )
}

export default EditCustomer