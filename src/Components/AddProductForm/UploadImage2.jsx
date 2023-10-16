import React, { Fragment, useState, useRef } from "react";
import { Btn, H5, H6, Image } from '../../AbstractElements';
import HeaderCard from "../../Common/Components/HeaderCard";
import Dropzone from 'react-dropzone-uploader';
import { ToastContainer, toast } from 'react-toastify';
import { Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, InputGroup, InputGroupText, Row } from 'reactstrap';

const UploadImage2 = () => {

    const [show, setShow] = useState(false)
    const [file, setFile] = useState([]);
    const uploadFileRef = useRef();

    const addFile = (e) => {
        e.preventDefault();

        if (e.target.files[0]) { // IF THERE ARE FILES TO BE UPLOADED
            var pendingFiles = [...file];

            // console.log(e.target.files);

            console.log(Array.from(e.target.files));

            for (let i = 0; i < e.target.files.length; i++) {
                console.log(e.target.files[i]); // DISPLAYS EACH FILE
                pendingFiles = [...file, URL.createObjectURL(e.target.files[i])];
                setFile(pendingFiles);
            }
        }
    };

    const removeFile = (i) => {
        setFile([...file.filter((_, index) => index !== i)]);
    };

    const BrowseFile = () => {
        return (
            <>
                <Col  className="col-md-11">
                    {/* <span className="btn btn-success pull-right">Browse</span> */}
                    <input
                    className="btn btn-success pull-right"
                        type="file"
                       // style={{opacity:"0"}}
                        onChange={(e) => addFile(e)}
                        accept=".jpeg, .png, .jpg, .pdf"
                        ref={uploadFileRef}
                        multiple />

                </Col>
            </>
        );
    };

    const handleImage = () => {
        setShow(true)
    }
    return (
        <Fragment>
            <Col sm='12'>
                <Card>
                    <HeaderCard title="Product Image" />
                    <CardBody>
                        <FormGroup className="row">
                            <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Image (500px380px)</Label>
                            <Col className="col-md-8">
                                <input className="btn btn-success pull-right" placeholder="Sales Price" onClick={handleImage} value="Upload Image" type="button" />
                            </Col>
                        </FormGroup>
                        {
                            show ?
                                <>
                                    <BrowseFile />

                                    <ul
                                        style={{ maxHeight: "20rem", minHeight: "10rem", display: "flex", justifyContent: "space-evenly" }}
                                    >
                                        {console.log(file, "ff")}
                                        {file.map((val, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                >
                                                    <div>
                                                        <img style={{ objectFit: "cover", height: "188px", width: "148px" }} src={val} alt="" />
                                                    </div>
                                                    <div className="d-flex justify-content-center">
                                                        <Btn attrBtn={{ className: "mt-2", color: 'primary', type: "button", onClick: () => removeFile(index) }} >
                                                            Delete
                                                        </Btn></div>

                                                </li>
                                            );
                                        })}
                                    </ul>

                                </> : ""
                        }
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default UploadImage2