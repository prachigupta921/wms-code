import React, { Fragment,useEffect } from "react";
import { Form, Col, Card, CardBody, Label, FormGroup, Input } from "reactstrap";
import HeaderCard from "../../Common/Components/HeaderCard";
import { option8 } from "../AddProductForm/OptionData";
import { Btn, Image } from '../../AbstractElements';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch,useSelector } from "react-redux";
import getDataByOption from "./getDataByOption";
import { useNavigate } from "react-router-dom";
import { UpdateOptionApi } from "../../redux/Action/OptionAction";

const EditOption=()=>{
    const id = sessionStorage.getItem("option_id")
    const { register, handleSubmit, formState: { errors }, control,getValues,setValue } = useForm();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [detailById] = getDataByOption(id);
    console.log("details------", detailById)

    useEffect(() => {
        const data = () => {
            if (detailById.option) {
                setValue("name",detailById.option[0].option_name)
                setValue("status",detailById.option[0].status)
            }
        }
        data();
    }, [detailById.option])

    const handleUpdate=()=>{
        const userObj={
            option_id:id,
            option_name:getValues("name"),
            status:"0"
        }
        dispatch(UpdateOptionApi(userObj,navigate))
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

export default EditOption