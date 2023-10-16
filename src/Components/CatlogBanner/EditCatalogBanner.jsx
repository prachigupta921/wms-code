import React, { Fragment, useState, useEffect } from "react";
import { Form, Col, Card, CardBody, Label, FormGroup, Input } from "reactstrap";
import HeaderCard from "../../Common/Components/HeaderCard";
import { option8 } from "../AddProductForm/OptionData";
import { Btn, Image } from '../../AbstractElements';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import GetDetailsByHooksCatalog from "./getDataByHooks"
import { useNavigate } from "react-router-dom";
import { UpdateCaltlogBannerApi } from "../../redux/Action/CatlogBannerAction";
const EditCatalogBanner = () => {
    const [image, setImage] = useState([])
    const [upimg, setUpImg] = useState([])
    const id = sessionStorage.getItem("catalog_id")
    const style = {
        height: "150px",
        width: "300px",
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [detailById] = GetDetailsByHooksCatalog(id);
    const { register, handleSubmit, formState: { errors }, control, getValues, setValue } = useForm();
    // const [detailById] = GetDetailsByHooksCatalog(id);
    console.log("details------", detailById)

    function deleteFile(e) {
        setImage([]);
        return image
    }
    const handleThumbnailImage = (e) => {
        const file = e.target.files[0]
        setUpImg(file)
        console.log(e.target.files, "file")
        setImage(URL.createObjectURL(file))
    }
    console.log(image, "ii")

    useEffect(() => {
        const data = () => {
            if (detailById.catalog) {
                setValue("name", detailById.catalog.catalog_name)
                setValue("status", detailById.catalog.status)
                //  setValue("thumbnail",detailById.catalog.banner_image)
                setImage(detailById.catalog.banner_image)
                setUpImg(detailById.catalog.banner_image)
            }
        }
        data();
    }, [detailById.catalog])

    //console.log(setValue("thumbnail"),"thumb");

    const handleUpdate = () => {
        const useObj = {
            catalog_id: id,
            catalog_name: getValues("name"),
            status: "1",
            banner_image: upimg,
        }
        console.log(image, "iiiiiiii")
        dispatch(UpdateCaltlogBannerApi(useObj, navigate))
    }

    const onSubmit = () => {
        console.log("submit");
        console.log(upimg, "iiiiiiii")
        handleUpdate();
    }
    return (
        <Fragment>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Col>
                    <Card>
                        <HeaderCard title="Catalog Banner Details" />
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
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label">Thumbnail Image</Label>
                                <Col sm="9">
                                    {
                                        image.length > 0
                                            ? <div className='files-gallery d-flex justify-content-center'>
                                                <img style={{ height: "200", width: "200px" }} src={image} alt='' />
                                            </div>
                                            : <Input className="form-control" type="file" onChange={handleThumbnailImage} name='thumbnail' {...register('thumbnail')} />
                                    }

                                    {image.length > 0 ?
                                        <div className="d-flex justify-content-center">
                                            <Btn attrBtn={{ className: "mt-2", color: 'primary', type: "button", onClick: () => deleteFile(image) }} >
                                                Delete
                                            </Btn></div> : ''}
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

export default EditCatalogBanner