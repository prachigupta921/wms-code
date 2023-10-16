import React, { Fragment, useState, useEffect } from "react";
import { options6, options7 } from "./OptionData";
import { useForm, Controller } from 'react-hook-form';
import { Btn, H5, H6 } from '../../AbstractElements';
import HeaderCard from "../../Common/Components/HeaderCard";
import { Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, InputGroup, InputGroupText, Row } from 'reactstrap';
import Select from 'react-select';

const PriceDetails = () => {
    const [showValue, setShowValue] = useState("")
    const [prodDetailsValue, setProdDetailsValue] = useState([])
    const [showProdVal, setShowProdVal] = useState([])
    const [purchasePrice, setPurchasePrice] = useState("")
    const [salePrice, setSalePrice] = useState("")
    const [details, setDetails] = useState([])
    const [prodListValue, setProdListValue] = useState([])
    const [updateValue, setUpdateValue] = useState(-1)
    const [sPrice, setSPrice] = useState("")

    const { register, formState: { errors }, control } = useForm();

    const handleProductDetails = () => {
        if (prodDetailsValue.length == 0) {
            alert("Please enter attribute")
        } else {
            var newarr = []
            var res = ([...newarr, prodDetailsValue]);
            setShowProdVal(res[0])
            setProdDetailsValue([])
        }
    }
    const handleProdDetailsValue = (id) => {
        let del = showProdVal.filter((it, ind) => {
            return ind != id
        })
        setShowProdVal(del)
    }
    const handleProdId = (e) => {
        const { value, id } = e.target
        setDetails((prev) => {
            return { ...prev, [id]: value }
        })
    }
    // useEffect(()=>{
    //     handleCreateList()
    // },[])
    const handleCreateList = () => {
        setUpdateValue(-1)
        let newStates = {
            option: showProdVal,
            P_colour: Object.values(details),
            s_price: salePrice,
            p_price: purchasePrice,
            price: purchasePrice,
        }
        let updateSalseItem = [...prodListValue];
        updateSalseItem.push(newStates);
        setProdListValue(updateSalseItem)
        console.log(newStates, "ns")
        setPurchasePrice("")
        setSalePrice("")
    }

    const deleteListItem = (id) => {
        let del = prodListValue.filter((it, ind) => {
            return ind != id
        })
        setProdListValue(del)
    }

    const handleClose = () => {
        setShowValue("0")
    }
    const handlePrice = (e, id) => {
        let result = [...prodListValue]
        result = result.map((x, i) => {
            if (i === id) {
                setUpdateValue(id)
                x.p_price = e.target.value
                x.price = e.target.value
            }
            return x;
        })
        setProdListValue(result);
        console.log(result, "re")
    }
    console.log(prodListValue, "plv")

    function handleChange() {
        setUpdateValue(-1)
    }
    console.log(updateValue, "uv")
    return (
        <Fragment>
            <Col sm="12">
                <Card>
                    <HeaderCard title="Price Details" />
                    <CardBody>
                        <FormGroup className="row">
                            <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Purchase Price(USD)</Label>
                            <Col className="col-md-8">
                                <input className="form-control" placeholder="Purchase Price" name='price' {...register('price', { required: true })} />
                                <span>{errors.price && 'Last name is required'}</span>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Sales Price</Label>
                            <Col className="col-md-8">
                                <input className="form-control" placeholder="Sales Price" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Minimum Order Qty</Label>
                            <Col className="col-md-8">
                                <input className="form-control" placeholder="1" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Tax On ML?</Label>
                            <Col className="col-md-3">
                                <Select options={options7}/>
                            </Col>
                            <Col className="col-md-2">
                            </Col>
                            <Col className="col-md-3">
                                <input className="form-control" placeholder="ML" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Dimension(in cm)</Label>
                            <Col className="col-md-3">
                            <input className="form-control" placeholder="Height" />
                            </Col>
                            <Col className="col-md-2">
                            <input className="form-control" placeholder="Length" />
                            </Col>
                            <Col className="col-md-3">
                                <input className="form-control" placeholder="Breath" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Weight</Label>
                            <Col className="col-md-4">
                            <input className="form-control" placeholder="Weight" />
                            </Col>
                            <Col className="col-md-4">
                            <Select options={options7}/>
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Shipping Days</Label>
                            <Col className="col-md-8">
                                <input className="form-control" placeholder="Shipping Days" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Shipping Charges (Flat Rate)</Label>
                            <Col className="col-md-8">
                                <input className="form-control" placeholder="Shipping Charges" />
                            </Col>
                        </FormGroup>
                        <FormGroup className="row">
                            <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Product Varients</Label>
                            <Col className="col-md-8">
                                <Select className="custom-select" options={options7} onChange={(e) => setShowValue(e.value)} />
                            </Col>
                        </FormGroup>

                        <div>
                            {showValue == 1 ?
                                <div>
                                    <H6>Product Options</H6>
                                    <hr className="mt-4 mb-4" />
                                    <div>
                                        <FormGroup className="row">
                                            <Label className="col-sm-3 col-form-label" htmlFor="inputEmail3">Product Varients</Label>
                                            <Col className="col-md-6">
                                                <Select onChange={(e) => setProdDetailsValue(e)} options={options6} isMulti />
                                                {/* <Select onChange={(e) => setProdDetailsValue(e)} options={options6} isMulti />
                                                <button type="button" onClick={handleProductDetails}>Add</button> */}
                                            </Col>
                                            <Col className="col-md-3">
                                                <input className="btn btn-success" type="button" onClick={handleProductDetails} value="Add" />
                                            </Col>
                                        </FormGroup>

                                        <table className="table table-bordered">
                                            {
                                                showProdVal.length != 0 ?
                                                    <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Options</th>
                                                        </tr>
                                                    </thead> :
                                                    ""
                                            }
                                            <tbody>
                                                {
                                                    showProdVal.map((it, index) => {
                                                        return (
                                                            <tr>
                                                                <td><a className="label label-danger" onClick={() => handleProdDetailsValue(index)}><i className="fa fa-times"></i></a></td>
                                                                <td>{it.label}<br /> <input type="text" name="colour" id={index} onChange={handleProdId} /></td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                                {
                                                    showProdVal.length != 0 ?
                                                        <>
                                                            <tr></tr>
                                                            <tr>
                                                                <td></td>
                                                                <td>Purchase Price(USD)<br /><input value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} /></td>
                                                            </tr>
                                                            <tr>
                                                                <td></td>
                                                                <td>Add-On Sales Price<br /><input value={salePrice} onChange={(e) => setSalePrice(e.target.value)} /></td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan="2" align="center">
                                                                    <input type="button" className="btn btn-success" onClick={handleCreateList} value="Add to Product List" />
                                                                    <input type="button" className="btn" style={{ background: "#b64645", marginLeft: "15px", color: "#fff" }} onClick={handleClose} value="Close" />
                                                                </td>
                                                            </tr>
                                                        </>
                                                        : ""
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>S.No</th>
                                                <th>Options</th>
                                                <th>Purchase Price<br />(USD)</th>
                                                <th>Add-On Price<br />(Sales)</th>
                                                <th>Price<br />(Sales)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                prodListValue.map((it, index) =>
                                                (
                                                    updateValue == index ? <>
                                                        {
                                                            <tr>
                                                                <td><a className="label label-danger" onClick={() => deleteListItem(index)}><i className="fa fa-times"></i></a></td>
                                                                <td>{index + 1}</td>
                                                                <td>{it.option.map((res, i) => (
                                                                    <>
                                                                        {i !== 0 && (i == prodListValue.length ? "|" : "|")}{res.label}
                                                                    </>
                                                                ))}<br />{it.P_colour.map((res, i) => (
                                                                    <>
                                                                        {i !== 0 && (i == Object.values(details).length ? "" : "|")}{res}
                                                                    </>
                                                                ))}
                                                                </td>
                                                                <td><input type="text" value={it.s_price} /></td>
                                                                <td><input type="text" defaultValue={it.p_price} onBlur={handleChange} onChange={(e) => handlePrice(e, index)} /></td>
                                                                <td><input readOnly defaultValue={it.price} /></td>
                                                            </tr>
                                                        }
                                                    </> :
                                                        <tr>
                                                            <td><a className="label label-danger" onClick={() => deleteListItem(index)}><i className="fa fa-times"></i></a></td>
                                                            <td>{index + 1}</td>
                                                            <td>{it.option.map((res, i) => (
                                                                <>
                                                                    {i !== 0 && (i == prodListValue.length ? "|" : "|")}{res.label}
                                                                </>
                                                            ))}<br />{it.P_colour.map((res, i) => (
                                                                <>
                                                                    {i !== 0 && (i == Object.values(details).length ? "" : "|")}{res}
                                                                </>
                                                            ))}
                                                            </td>
                                                            <td><input type="text" defaultValue={it.s_price} /></td>
                                                            <td><input type="text" defaultValue={it.p_price} onBlur={handleChange} onChange={(e) => handlePrice(e, index)} /></td>
                                                            <td><input readOnly defaultValue={it.price} /></td>
                                                        </tr>
                                                )
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                : ""}
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}

export default PriceDetails