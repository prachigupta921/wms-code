import React, { Fragment, useRef, useState, useEffect } from "react";
import { Form, Col, Card, CardBody, Label, FormGroup, Input } from "reactstrap";
import { useForm, Controller } from 'react-hook-form';
import HeaderCard from "../../Common/Components/HeaderCard";
import { option8, options3 } from "../AddProductForm/OptionData";
import Select from 'react-select';
import { Btn, Image } from '../../AbstractElements';
import { useNavigate } from "react-router-dom";
import Files from 'react-files';
import CKEditors from 'react-ckeditor-component';
import { AddNewCategory } from "../../redux/Action/CategoryAction";
import { CreateCategory } from "../../redux/Action/CategoryAction";
import { useSelector, useDispatch } from "react-redux";

const AddCategory = () => {
    const [formValues, setFormValues] = useState("")
    // const [image, setImage] = useState(null)
    // const [banner, setbanner] = useState(null)
    const [files, setFiles] = useState([]);
    const [bannerFiles, setBannerFiles] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { errors }, control,getValues } = useForm();
    const onSubmit = data => {
        if (data !== '') {
           // console.log("data",getValues('parent_id').value)
            setFormValues(data)
            console.log("before")
            handleSubmitData();
            console.log("success")
        } else {
            errors.showMessages();
        }
    };
    console.log(register, "reg")
    const { ADD_NEW_CATEGORY: ne } = useSelector((store) => store.CategogyUser)
    const { CREATE_CATEGORY: create } = useSelector((store) => store.CategogyUser)
    console.log(ne, "nnnn")
    console.log(create, "create")

    console.log(files[0],"thumbanil",bannerFiles[0],"banner");

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

    const style = {
        height: "150px",
        width: "300px",
    }

    useEffect(() => {
        dispatch(AddNewCategory())
    }, [])

    const [content, setContent] = useState('content');
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        console.log(newContent, "cn")
        setContent(newContent);
    };
    console.log(content, "con")

    const handleSubmitData = () => {
        const userObj = {
            "parent_id": getValues('parent_id').value,
            "name": getValues('name'),
            "description": getValues('description'),
            "long_description": content,
            "thumbnail": files[0],
            "banner": bannerFiles[0],
            "status": (getValues('status').value)
        }
        dispatch(CreateCategory(userObj,navigate));
    }
    // const handleUpdateSubmitData=()=>{
    //     const userObj = {
    //         "create_id":,
    //         "parent_id":parent_id.value,
    //         "name":name,
    //         "description":description,
    //         "long_description":content,
    //         "thumbnail":image,
    //         "banner":banner,
    //         "status":status.value
    //     }
    //     dispatch(UpdateCategory(userObj));
    // }
    // useEffect(() => {
    //     const userObj = {
    //         "parent_id":parent,
    //         "name":name,
    //         "description":description,
    //         "long_description":content,
    //         "thumbnail":image,
    //         "banner":banner,
    //         "status":sta
    //     }
    //     dispatch(CreateCategory(userObj));
    //  },[parent,name,description,sta,content])

    const optionData = ne.map(function (data) {
        return { value: data.id, label: data.name }
    })

    return (
        <Fragment>
            <Form className="needs-validation theme-form mega-form" noValidate="" onSubmit={handleSubmit(onSubmit)} >
                <Col sm="12">
                    <Card>
                        <HeaderCard title="Category Details" />
                        <CardBody>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Parent ID</Label>
                                <Col className="col-md-8">
                                    {/* <Select options={optionData} /> */}
                                    <Controller
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={optionData}
                                            />
                                        )}
                                        control={control}
                                        name="parent_id"
                                        register={register}
                                    />
                                    {/* <span style={{ color: "#d22d3d" }}> {errors.parent_id && errors.parent_id.type === 'required' && "Required"}</span> */}
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Name</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="New Category" name='name' {...register('name', { required: true })} />
                                    <span>{errors.name && 'Name is required'}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Description</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="textarea" placeholder="New Category" name='description' {...register('description', { required: true })} />
                                    <span>{errors.description && 'Description is required'}</span>
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
                                    <span>{errors.long_descp && 'Name is required'}</span>
                                    {/* <textarea className="form-control" id="validationCustom02" type="textarea" placeholder="New Category" /> */}
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
                                        rules={{ required: 'Please select an option' }}
                                        name="status"
                                        register={register}
                                    />
                                    <span style={{ color: "#d22d3d" }}> {errors.status && errors.status.type === 'required' && "Required"}</span>
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label">Thumbnail Image</Label>
                                <Col sm="9">
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
                                                    <Input className="form-control" type="file" name='thumbnail' {...register('thumbnail', { required: true })} />
                                                    <span>{errors.thumbnail && 'Image is required'}</span>
                                                </div>
                                        }
                                    </Files>
                                    {files.length > 0 ?
                                        <div className="d-flex justify-content-center">
                                            <Btn attrBtn={{ className: "mt-2", color: 'primary', type: "button", onClick: () => deleteFile(files) }} >
                                                Delete
                                            </Btn></div> : ''}
                                    {/* <Input className="form-control" type="file" name='thumbnail' {...register('thumbnail', { required: true })}/>
                                        <span>{errors.thumbnail && 'Image is required'}</span> */}
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label">Banner Image</Label>
                                <Col sm="9">
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
                                                    <Input className="form-control" type="file" name='banner' {...register('banner', { required: true })} />
                                                    <span>{errors.banner && 'Image is required'}</span>
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

                            <Btn attrBtn={{ className: 'btn-block pull-right', color: 'primary' }}>Create</Btn>
                            {/* <button>Submit</button> */}

                        </CardBody>
                    </Card>
                </Col>
            </Form>
        </Fragment>
    )
}

export default AddCategory