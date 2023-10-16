import React, { Fragment, useState, useEffect } from "react";
import { option8, options3 } from "../AddProductForm/OptionData";
import Select from 'react-select';
import { Form, Col, Card, CardBody, Label, FormGroup, Input } from "reactstrap";
import { Btn, Image } from '../../AbstractElements';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Files from 'react-files';
import { AddNewBrand } from "../../redux/Action/BrandAction";
import { useForm, Controller } from 'react-hook-form';
import CKEditors from 'react-ckeditor-component';

const AddBrand = () => {
    const [files, setFiles] = useState([]);
    const [bannerFiles, setBannerFiles] = useState([]);
    const navigate = useNavigate();
    const { register, handleSubmit, getValues, control } = useForm();
    const dispatch = useDispatch();
    const { NewBrand } = useSelector((store) => store.brand)
    const { errorMessage } = useSelector((store) => store.brand)
    console.log(NewBrand, "NewBrand");
    console.log(errorMessage, "errorMessage");
    const style = {
        height: "150px",
        width: "300px",
    }

    function deleteFile(e) {
        setFiles([]);
        return files

    }
    function deleteBannerFile(e) {
        setBannerFiles([]);
        return bannerFiles

    }
    const onFilesChange = (files) => {
        setFiles(files)
    }
    const onFilesBannerChange = (bannerFiles) => {
        setBannerFiles(bannerFiles)
    }

    const onFilesError = (error, file) => {
        setFiles(file)
    }
    const onFilesBannerError = (error, file) => {
        setBannerFiles(file)
    }

    const [content, setContent] = useState('');
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        console.log(newContent, "cn")
        setContent(newContent);
    };

    const handleCreate = () => {
        const userObj = {
            name: getValues("brand_name"),
            description:getValues("description"),
            long_description:content,
            thumbnail: files[0],
            banner:bannerFiles[0],
            status: (getValues("status").value)
        }
        dispatch(AddNewBrand(userObj, navigate))
    }

    const onSubmit = data => {
        if (data !== '') {
            handleCreate();
            console.log("success", data)
        } else {
            console.log("create1")
            // errors.showMessages();
        }
    };
    return (
        <Fragment>
            <Form className="needs-validation theme-form mega-form" noValidate="" onSubmit={handleSubmit(onSubmit)}>
                
                <FormGroup className="row">
                    <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Brand Name</Label>
                    <Col className="col-md-8">
                        <input className="form-control" id="validationCustom02" type="textarea" placeholder="New Brand" name='brand_name' {...register('brand_name')} />
                        <span className="text-danger">{errorMessage.name}</span>
                    </Col>
                </FormGroup>
                <FormGroup className="row">
                    <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Description</Label>
                    <Col className="col-md-8">
                        <input className="form-control" id="validationCustom02" type="textarea" placeholder="New Category" name='description' {...register('description')} />
                        <span className="text-danger">{errorMessage.description}</span>
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
                                    <span className="text-danger">{errorMessage.long_description}</span>
                                </Col>
                            </FormGroup>
                <FormGroup className="row">
                    <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Status</Label>
                    <Col className="col-md-8">
                        {/* <Select options={option8} /> */}
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
                        <span className="text-danger">{errorMessage.status}</span>
                        {/* <span style={{ color: "#d22d3d" }}> {errors.status && errors.status.type === 'required' && "Required"}</span> */}
                    </Col>
                </FormGroup>

                <FormGroup className="row">
                    <Label className="col-sm-3 col-form-label">Thumbnail Image</Label>
                    <Col sm="8">
                        <Files
                            className='files-dropzone fileContainer'
                            onChange={onFilesChange}
                            onError={onFilesError}
                            accepts={['image/*']}
                            multiple={true}
                            maxFileSize={10000000}
                            minFileSize={0}
                            clickable
                        >
                            {
                                files.length > 0
                                    ? <div className='files-gallery d-flex justify-content-center'>
                                        {files.map((file, index) =>
                                            <div key={index}>
                                                <Image attrImage={{ className: 'files-gallery-item', alt: "img", style: style, src: `${file.preview.url}` }} />
                                            </div>
                                        )}
                                    </div>

                                    : <div>
                                        <input className="form-control" type="file" name='image' {...register('image')} />
                                        <span className="text-danger">{errorMessage.thumbnail}</span>
                                    </div>
                            }
                        </Files>
                        {files.length > 0 ?
                            <div className="d-flex justify-content-center">
                                <Btn attrBtn={{ className: "mt-2", color: 'primary', type: "button", onClick: () => deleteFile(files) }} >
                                    Delete
                                </Btn></div> : ''}

                    </Col>
                </FormGroup>

                <FormGroup className="row">
                    <Label className="col-sm-3 col-form-label">Banner Image</Label>
                    <Col sm="8">
                        <Files
                            className='files-dropzone fileContainer'
                            onChange={onFilesBannerChange}
                            onError={onFilesBannerError}
                            accepts={['image/*']}
                            multiple={true}
                            maxFileSize={10000000}
                            minFileSize={0}
                            clickable
                        >
                            {
                                bannerFiles.length > 0
                                    ? <div className='files-gallery d-flex justify-content-center'>
                                        {bannerFiles.map((file, index) =>
                                            <div key={index}>
                                                <Image attrImage={{ className: 'files-gallery-item', alt: "img", style: style, src: `${file.preview.url}` }} />
                                            </div>
                                        )}
                                    </div>

                                    : <div>
                                        <input className="form-control" type="file" name='image' {...register('image')} />
                                        <span className="text-danger">{errorMessage.banner}</span>
                                    </div>
                            }
                        </Files>
                        {bannerFiles.length > 0 ?
                            <div className="d-flex justify-content-center">
                                <Btn attrBtn={{ className: "mt-2", color: 'primary', type: "button", onClick: () => deleteBannerFile(bannerFiles) }} >
                                    Delete
                                </Btn></div> : ''}

                    </Col>
                </FormGroup>
                <Btn attrBtn={{ className: 'btn-block', color: 'primary' }}>Create</Btn>
            </Form>

        </Fragment>
    )
}

export default AddBrand