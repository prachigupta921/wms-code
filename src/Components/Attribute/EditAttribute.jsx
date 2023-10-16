import React, { Fragment,useEffect } from "react";
import { Form, Col, Card, CardBody, Label, FormGroup, Input } from "reactstrap";
import HeaderCard from "../../Common/Components/HeaderCard";
import { option8 } from "../AddProductForm/OptionData";
import { Btn, Image } from '../../AbstractElements';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import getDataByAttribute from "./getDataByAttribute";
import { UpdateAttributeApi } from "../../redux/Action/AttributeAction";

const EditAttribute=()=>{
    const id = sessionStorage.getItem("attribute_id")
    const { register, handleSubmit, formState: { errors }, control,getValues,setValue } = useForm();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [detailById] = getDataByAttribute(id);
    console.log("details------", detailById)

    useEffect(() => {
        const data = () => {
            if (detailById.attribute) {
                setValue("name",detailById.attribute[0].attribute_name)
                setValue("status",detailById.attribute[0].status)
            }
        }
        data();
    }, [detailById.attribute])

    const handleUpdate=()=>{
        const userObj={
            attribute_id:id,
            attribute_name:getValues("name"),
            status:"0"
        }
        dispatch(UpdateAttributeApi(userObj,navigate))
    }

    const onSubmit=()=>{
        handleUpdate();
    }
    return(
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Col>
                    <Card>
                        <HeaderCard title="Option Details" />
                        <CardBody>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Name</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="New Catalog" name='name' {...register('name')} />
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

export default EditAttribute