import React, { Fragment,useState,useEffect } from "react";
import { Form, Col, Card, CardBody, Label, FormGroup, Input } from "reactstrap";
import HeaderCard from "../../Common/Components/HeaderCard";
import { option8 } from "../AddProductForm/OptionData";
import { Btn, Image } from '../../AbstractElements';
import Select from 'react-select';
import Files from 'react-files';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import GetDataByManageBanner from "./getDataByManageBanner";
import { useDispatch } from "react-redux";
import { UpdateManageBannerApi } from "../../redux/Action/ManagerBannerAction";

const EditManageBanner=()=>{
    const [image, setImage] = useState([])
    const style = {
        height: "150px",
        width: "300px",
    }
    const id = sessionStorage.getItem("manage_id")
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const { register, handleSubmit, formState: { errors }, control,getValues,setValue } = useForm();
    const [detailById] = GetDataByManageBanner(id);
    console.log("details------", detailById)

    function deleteFile(e) {
        setImage([]);
        return image

    }

    const handleThumbnailImage = (e) => {
        const file = e.target.files[0]
        setImage(URL.createObjectURL(file))
    }

    useEffect(() => {
        const data = () => {
            if (detailById.banner) {
                setValue("name",detailById.banner.banner_url)
                setValue("status",detailById.banner.status)
                setImage(detailById.banner.banner_image)
            }
        }
        data();
    }, [detailById.banner])

    const handleUpdateSubmitData = () => {
        const userObj = {
            banner_id:id,
            banner_url:getValues("name"),
            status:"1",
            banner_image:"",
        }
        dispatch(UpdateManageBannerApi(userObj, navigate));
    }

    const onSubmit=()=>{
        console.log("submit");
        handleUpdateSubmitData();
    }
    return(
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Col>
                    <Card>
                        <HeaderCard title="Catalog Banner Details" />
                        <CardBody>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Name</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="New Category" name='name' {...register('name')} />
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
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label">Thumbnail Image</Label>
                                <Col sm="9">
                                    {
                                        image.length > 0
                                            ? <div className='files-gallery d-flex justify-content-center'>
                                                <img style={{ height: "200", width: "200px" }} src={image} alt='' />
                                            </div>
                                            : <Input className="form-control" type="file" onChange={handleThumbnailImage} />
                                    }

                                    {image.length > 0 ?
                                        <div className="d-flex justify-content-center">
                                            <Btn attrBtn={{ className: "mt-2", color: 'primary', type: "button", onClick: () => deleteFile(image) }} >
                                                Delete
                                            </Btn></div> : ''}
                                    {/* <Input className="form-control" type="file" onChange={handleThumbnailImage}/>
                                <img style={{height:"200",width:"200px"}} src={image} alt=''/> */}
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

export default EditManageBanner