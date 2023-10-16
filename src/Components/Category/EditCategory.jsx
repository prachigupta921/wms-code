import React, { Fragment, useRef, useState, useEffect } from 'react'
import { Form, Col, Card, CardBody, Label, FormGroup, Input } from 'reactstrap'
import HeaderCard from "../../Common/Components/HeaderCard";
import { option8 } from "../AddProductForm/OptionData";
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import CKEditors from 'react-ckeditor-component';
import { Btn, Image } from '../../AbstractElements';
import Files from 'react-files';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import GetDetailsByHooks from '../AddProductForm/getDataByHooks'
import { EditCategoryAction, UpdateApi } from "../../redux/Action/CategoryAction";
import { useNavigate } from "react-router-dom";

const EditCategory = () => {
    //     const { EDIT_CATEGORY: editdata } = useSelector((store) => store.CategogyUser)
    // console.log(editdata,"rd")

    const id = sessionStorage.getItem("ide")
    console.log(id, "idee")
    const [formValues, setFormValues] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState([])
    const [banner, setbanner] = useState([])
    const [status,setStatus]=useState(null)
    const [files, setFiles] = useState([]);
    const [bannerFiles, setBannerFiles] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [detailById] = GetDetailsByHooks(id);
    console.log("details------", detailById)
    // console.log(detailById.category.thumbnail,"img")

    const [content, setContent] = useState('');
    const onChange = (evt) => {
        const newContent = evt.editor.getData();
        console.log(newContent, "cn")
        setContent(newContent);
    };

    const style = {
        height: "150px",
        width: "300px",
    }

    function deleteFile(e) {
        setImage([]);
        return image

    }
    function deleteBannerFile(e) {
        setbanner([]);
        return banner

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

    useEffect(() => {
        const data = () => {
            if (detailById.category) {
                setName(detailById.category.name)
                setDescription(detailById.category.description)
                setContent(detailById.category.long_description)
                setImage(detailById.category.thumbnail)
                setbanner(detailById.category.banner)
                setStatus(detailById.category.status)
            }
        }
        data();
    }, [detailById.category])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, description, "value")
        handleUpdateSubmitData();
    }

    const optionData = option8.map(function (data) {
        return { value: data.id, label: data.name }
    })

    const handleUpdateSubmitData = () => {
        const userObj = {
            "category_id": sessionStorage.getItem('ide'),
            "name": name,
            "description": description,
            "long_description": content,
            "thumbnail": image,
            "banner": banner,
            "status": "0"
        }
        dispatch(UpdateApi(userObj, navigate));
    }

    const handleThumbnailImage = (e) => {
        const file = e.target.files[0]
        setImage(URL.createObjectURL(file))
    }
    console.log(status, "iiiii")
    const handleBannerImage = (e) => {
        const bannerfile = e.target.files[0]
        setbanner(URL.createObjectURL(bannerfile))
    }

    return (
        <Fragment>
            <Form className="needs-validation theme-form mega-form" noValidate="" onSubmit={handleSubmit}>
                <Col sm="12">
                    <Card>
                        <HeaderCard title="Category Details" />
                        <CardBody>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Parent ID</Label>
                                <Col className="col-md-8">
                                    <Select />
                                    {/* <Controller
                                        render={({ field }) => (
                                            <Select
                                                {...field}
                                                options={preloadedvalue.parent_id}
                                            />
                                        )}
                                        control={control}
                                        rules={{ required: 'Please select an option' }}
                                        name="parent_id"
                                        register={register}
                                    />
                                    <span style={{ color: "#d22d3d" }}> {errors.parent_id && errors.parent_id.type === 'required' && "Required"}</span> */}
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Name</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="text" placeholder="New Category" defaultValue={name} onChange={(e) => setName(e.target.value)} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Description</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="text" placeholder="New Category" defaultValue={description} onChange={(e) => setDescription(e.target.value)} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Long Description</Label>
                                <Col className="col-md-8">
                                    <CKEditors
                                        activeclassName="p10"
                                        content={content}
                                        events={{
                                            'change': onChange
                                        }}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Status</Label>
                                <Col className="col-md-8">
                                    <Select options={option8} 
                                    defaultValue={status}
                                    onChange={setStatus}
                                    />
                                    {/* <Controller
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
                                    /> */}
                                    {/* <span style={{ color: "#d22d3d" }}> {errors.status && errors.status.type === 'required' && "Required"}</span> */}
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
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label">Banner Image</Label>
                                <Col sm="9">
                                    {
                                        banner.length > 0
                                            ? <div className='files-gallery d-flex justify-content-center'>
                                                <img style={{ height: "200", width: "200px" }} src={banner} alt='' />
                                            </div>
                                            : <Input className="form-control" type="file" onChange={handleBannerImage} />
                                    }
                                    {banner.length > 0 ?
                                        <div className="d-flex justify-content-center">
                                            <Btn attrBtn={{ className: "mt-2", color: 'primary', type: "button", onClick: () => deleteBannerFile(banner) }} >
                                                Delete
                                            </Btn></div> : ''}
                                    {/* <input type="file" onChange={handleBannerImage} name='banner' /> */}
                                </Col>
                            </FormGroup>

                            <Btn attrBtn={{ className: 'btn-block pull-right', color: 'primary', type: 'submit' }}>Update</Btn>

                            {/* <button type='submit'>Submit</button> */}
                        </CardBody>
                    </Card>
                </Col>
            </Form>
        </Fragment>
    )
}

export default EditCategory

