import React, { Fragment } from "react";
import { Form, Col, Card, CardBody, Label, FormGroup, Input } from "reactstrap";
import HeaderCard from "../../Common/Components/HeaderCard";
import { option8 } from "../AddProductForm/OptionData";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Btn, Image } from '../../AbstractElements';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { AddAttributeAction } from "../../redux/Action/AttributeAction";

const AddAttribute=()=>{
    const { register, handleSubmit, formState: { errors }, control, getValues } = useForm();
    const {errorMessage:error}=useSelector((store)=>store.attribute)
    console.log(error,"errorMessage")
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleCreate=()=>{
        const userObj={
            attribute_name:getValues('name'),
            status:getValues('status').value
        }
        dispatch(AddAttributeAction(userObj,navigate))
    }
    const onSubmit=()=>{
        handleCreate();
    }
    return(
        <Fragment>
             <Form onSubmit={handleSubmit(onSubmit)}>
                <Col>
                    <Card>
                        <HeaderCard title="Attribute Details" />
                        <CardBody>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Name</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="New Attribute" name='name'{...register('name')} />
                                    <span className="text-danger">{error.attribute_name}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Status</Label>
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
                                        name="status"
                                        register={register}
                                    />
                                    <span className="text-danger">{error.status}</span>
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

export default AddAttribute