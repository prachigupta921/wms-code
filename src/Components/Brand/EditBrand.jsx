import React, { Fragment, useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { option8, options3 } from "../AddProductForm/OptionData";
import Select from 'react-select';
import { Form, Col, Card, CardBody, Label, FormGroup, Input } from "reactstrap";
import { Btn } from '../../AbstractElements';
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';
import CKEditors from 'react-ckeditor-component';
import getDataByBrand from "./getDataByBrand";
import { UpdateBrandApi } from "../../redux/Action/BrandAction";

const EditBrand = () => {
    
    const navigate = useNavigate();
    const { register, handleSubmit, getValues, control,setValue } = useForm();
    const dispatch = useDispatch();
    const id = sessionStorage.getItem("brand_id")
    const [image, setImage] = useState([])
    const [banner, setbanner] = useState([])
    const style = {
        height: "150px",
        width: "300px",
    }

    const [detailById] = getDataByBrand(id);
    console.log("details------", detailById)

    const [content, setContent] = useState('');
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        console.log(newContent, "cn")
        setContent(newContent);
    };

    useEffect(() => {
        const data = () => {
            if (detailById.brand) {
                setValue("name",detailById.brand.name)
                setValue("status",detailById.brand.status)
                setValue("description",detailById.brand.description)
                setContent(detailById.brand.long_description)
                setImage(detailById.brand.thumbnail)
                setbanner(detailById.brand.banner)
            }
        }
        data();
    }, [detailById.brand])


    const handleCreate = () => {
        const userObj = {
            name: getValues("name"),
            description:getValues("description"),
            long_description:content,
            thumbnail: image,
            banner:banner,
            status: (getValues("status").value)
        }
        dispatch(UpdateBrandApi(userObj, navigate))
    }

    function deleteFile(e) {
        setImage([]);
        return image

    }
    function deleteBannerFile(e) {
        setbanner([]);
        return banner

    }

    const handleThumbnailImage = (e) => {
        const file = e.target.files[0]
        setImage(URL.createObjectURL(file))
    }
    const handleBannerImage = (e) => {
        const bannerfile = e.target.files[0]
        setbanner(URL.createObjectURL(bannerfile))
    }

    const onSubmit = data => {
       handleCreate();
    };
    return (
        <Fragment>
            <Form className="needs-validation theme-form mega-form" noValidate="" onSubmit={handleSubmit(onSubmit)}>

                <FormGroup className="row">
                    <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Brand Name</Label>
                    <Col className="col-md-8">
                        <input className="form-control" id="validationCustom02" type="textarea" placeholder="New Brand"  name='name' {...register('name')}/>
                    </Col>
                </FormGroup>
                <FormGroup className="row">
                    <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Description</Label>
                    <Col className="col-md-8">
                        <input className="form-control" id="validationCustom02" type="textarea" placeholder="New Category"  name='description' {...register('description')}/>
                    </Col>
                </FormGroup>
                <FormGroup className="row">
                    <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Long Description</Label>
                    <Col className="col-md-8">
                        <CKEditors
                            activeclassName="p10"
                            content={content}
                            name="long_descp"
                            events={{
                                'change': onChange
                            }}
                        />
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
                            //  rules={{ required: 'Please select an option' }}
                            name="status"
                            register={register}
                        />
                    </Col>
                </FormGroup>
                <FormGroup className="row">
                    <Label className="col-sm-3 col-form-label">Thumbnail Image</Label>
                    <Col sm="8">
                        {
                            image.length > 0
                                ? <div className='files-gallery d-flex justify-content-center'>
                                    <img style={{ height: "200", width: "200px" }} src={image} alt='' />
                                </div>
                                : <input className="form-control" type="file" onChange={handleThumbnailImage} />
                        }

                        {image.length > 0 ?
                            <div className="d-flex justify-content-center">
                                <Btn attrBtn={{ className: "mt-2", color: 'primary', type: "button", onClick: () => deleteFile(image) }} >
                                    Delete
                                </Btn></div> : ''}
                    </Col>
                </FormGroup>
                <FormGroup className="row">
                    <Label className="col-sm-3 col-form-label">Banner Image</Label>
                    <Col sm="8">
                        {
                            banner.length > 0
                                ? <div className='files-gallery d-flex justify-content-center'>
                                    <img style={{ height: "200", width: "200px" }} src={banner} alt='' />
                                </div>
                                : <input className="form-control" type="file" onChange={handleBannerImage} />
                        }
                        {banner.length > 0 ?
                            <div className="d-flex justify-content-center">
                                <Btn attrBtn={{ className: "mt-2", color: 'primary', type: "button", onClick: () => deleteBannerFile(banner) }} >
                                    Delete
                                </Btn></div> : ''}
                    </Col>
                </FormGroup>

                <Btn attrBtn={{ className: 'btn-block', color: 'primary' }}>Update</Btn>
            </Form>
        </Fragment>
    )
}

export default EditBrand