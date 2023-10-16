import React, { Fragment,useEffect,useState } from "react";
import { Form, Col, Card, CardBody, Label, FormGroup, Input } from "reactstrap";
import HeaderCard from "../../Common/Components/HeaderCard";
import { option8 } from "../AddProductForm/OptionData";
import { Btn, Image } from '../../AbstractElements';
import Select from 'react-select';
import Files from 'react-files';
import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddNewCatalog } from "../../redux/Action/CatlogBannerAction";

const AddCatalogBanner = () => {
    const [files, setFiles] = useState([]);
    const style = {
        height: "150px",
        width: "300px",
    }

    const {newBannerList:banner}=useSelector((store)=>store.catlogList)
    const {errorMessage:error}=useSelector((store)=>store.catlogList)
    console.log(banner,"banner",error,"err");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleCreate=()=>{
        const userObj={
            catalog_name:getValues("name"),
            status:"1",
            banner_image:files[0]
        }
        dispatch(AddNewCatalog(userObj,navigate))
    }

    const { register, handleSubmit, formState: { errors }, control,getValues } = useForm();

    function deleteFile(e) {
        setFiles([]);
        return files
    }
    const onFilesChange = (files) => {
        console.log(getValues("status"),"gggg")
        setFiles(files)
    }
    const onFilesError = (error, file) => {
        setFiles(file)
    }
console.log(files,"files");
    const onSubmit=()=>{
        console.log("submit");
        handleCreate();
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
                                    <span className="text-danger">{error.catalog_name}</span>
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
                                                    <input className="form-control" type="file" name='thumbnail' {...register('thumbnail')} />
                                                    <span className="text-danger">{error.banner_image}</span>
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
                            <Btn attrBtn={{ className: 'btn-block', color: 'primary' }}>Create</Btn>
                        </CardBody>
                    </Card>
                </Col>
            </Form>
        </Fragment>
    )
}

export default AddCatalogBanner