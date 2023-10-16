import React, { Fragment, useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { Btn, H5, H6 } from '../../AbstractElements';
import Select from 'react-select';
import HeaderCard from "../../Common/Components/HeaderCard";
import { options6, options7 } from "./OptionData"
import { Col, Card, CardBody, Form, FormGroup, Label, Table, Input } from 'reactstrap';

const ProductAttribute = (props) => {
    //console.log(props.onSubmit,"pp")

    const { register,handleSubmit, formState: { errors } } = useForm();
    const [addvalue, setAddValue] = useState("")
    const [add, setAdd] = useState([])
    var result;
    const attibutButton = () => {
        if (addvalue.length == 0 || addvalue.length == null) {
            alert("Please select attribute.")
        } else {
            for (var i = 0; i < addvalue.length; i++) {
                console.log(addvalue[i], "i")
                var newarr = []
                result = ([...newarr, addvalue]);
                setAdd(result[0])
                setAddValue("")
            }
        }
    }
    const deleteItem = (id) => {
        let del = add.filter((it, ind) => {
            return ind != id
        })
        setAdd(del)
    }

    // const onSubmit = data => {
    //     if (data !== '') {
    //         alert('You submitted the form and stuff!');
    //     } else {
    //         errors.showMessages();
    //     }
    // };

    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <HeaderCard title="Product Attribute" />
                    <CardBody>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Product Category</Label>
                                <Col className="col-md-6">
                                    <Select className="js-example-basic-single col-sm-12" onChange={(e) => setAddValue(Array.isArray(e) ? e.map(x => x.label) : [])} options={options6} isMulti />
                                    {/* <Select onChange={(e) => setAddValue(Array.isArray(e) ? e.map(x => x.label) : [])} options={options6} isMulti />
                                <FormGroup>
                                    <button type="button" onClick={() => attibutButton()} attrBtn={{ color: "primary" }} >Add</button>
                                </FormGroup> */}
                                </Col>
                                <Col className="col-md-3">
                                    <input type="button" value="Add" className="btn btn-success" onClick={() => attibutButton()} />
                                </Col>
                            </FormGroup>
                            <FormGroup className="row">
                                <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Vendor</Label>
                                <Col className="col-md-8">
                                    <input className="form-control" id="validationCustom02" type="text" placeholder="Otto" name='attr' {...register('attr', { required: true })} />
                                    <span>{errors.attr && 'Last name is required'}</span>
                                </Col>

                            </FormGroup>
                            <div>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>S.No</th>
                                            <th>Attribute</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            add.map((value, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <a className="label label-danger" onClick={() => deleteItem(index)}><i className="fa fa-times"></i></a>
                                                        </td>
                                                        <td><input style={{ width: "20px" }} type="text" id={index + 1} defaultValue={index + 1} /></td>
                                                        <td>{value} <br />
                                                            <Input type="textarea" className="form-control" rows="2" />
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <button>submit</button>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default ProductAttribute