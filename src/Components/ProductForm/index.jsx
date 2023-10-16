import React, { Fragment, useState } from "react";
import { Btn, H5 } from '../../AbstractElements';
import Select from 'react-select';
import "./index.css"
import { options, options2, options3, options4, options6, options7 } from "./OptionsData"
import { Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, InputGroup, InputGroupText, Row } from 'reactstrap';
import UploadImage from "./UploadImage";

const ProductForm = () => {
    const [addvalue, setAddValue] = useState("")
    const [add, setAdd] = useState([])
    const [quantity, setQuantity] = useState("")
    const [discount, setDiscount] = useState("")
    const [salesDiscount, setSalesDiscount] = useState([]);
    const [showValue, setShowValue] = useState("")
    const [prodDetailsValue, setProdDetailsValue] = useState([])
    const [showProdVal,setShowProdVal]=useState([])
    const [purchasePrice,setPurchasePrice]=useState("")
    const [salePrice,setSalePrice]=useState("")
    const [details,setDetails]=useState([])
    const [prodListValue,setProdListValue]=useState([])
    const [focused,setFocused]=useState(false)
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

    const handleDiscount = () => {
        if (quantity.length == 0 || discount.length == 0) {
            alert("Please fill all the feilds");
        }
        let newSalesItem = {
            qty: quantity,
            discount: discount
        }
        let updateSalseItem = [...salesDiscount];
        updateSalseItem.push(newSalesItem);
        setSalesDiscount(updateSalseItem)
        setQuantity("")
        setDiscount("")
    }
    const deleteSalesItem = (id) => {
        let del = salesDiscount.filter((it, ind) => {
            return ind != id
        })
        setSalesDiscount(del)
    }

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
    const handleProdDetailsValue=(id)=>{
        let del = showProdVal.filter((it, ind) => {
            return ind != id
        })
        setShowProdVal(del)
    }
    const handleProdId=(e)=>{
        const { value, id }=e.target
        setDetails((prev)=>{
            return {...prev, [id]:value}
        })
    }
    const handleCreateList=()=>{
        console.log(details.length,"dl")
        let newStates={
            option:showProdVal,
            P_colour:details,
            s_price:salePrice,
            p_price:purchasePrice,
            price:purchasePrice,
        }
        let updateSalseItem = [...prodListValue];
        updateSalseItem.push(newStates);
        setProdListValue(updateSalseItem)
        console.log(newStates,"ns")
    }
    
    const deleteListItem=(id)=>{
        let del = prodListValue.filter((it, ind) => {
            return ind != id
        })
        setProdListValue(del)
    }

    const onFocus=()=>setFocused(true)
    const onBlur=()=>setFocused(false)
    const handleChangeSno=(e)=>{
        let value =e.target.value;
        let ide=e.target.id
        if(value.length==0){
            alert("Enter Number")
        }
       // console.log(value.length==0 || focused==false,"and")
        // console.log(value.length,"v")
        // console.log(value,"value")
        // console.log(ide,"i")
    }
   // console.log(focused,"ff")
   
    return (
        <Fragment>
            <Card>
                <CardHeader className="pb-0">
                    <H5>Product Details</H5>
                </CardHeader>
                <CardBody>
                    <Form>
                        <div className="form-control">
                            <Label className="col-md-3 control-label">Company</Label>
                            <Label className="col-md-1 control-label-star"><span>*</span></Label>

                            <Label className="col-md-8">
                                <Select
                                    options={options6}
                                    className="js-example-basic-single col-sm-12"
                                />
                            </Label>
                        </div>
                        <div className="form-control">
                            <Label className="col-md-3 control-label">Vendor</Label>
                            <Label className="col-md-1 control-label-star"><span>*</span></Label>

                            <Label className="col-md-8">
                                <Select
                                 options={options6}
                                    className="js-example-basic-single col-sm-12"
                                />
                            </Label>
                        </div>
                        <div className="form-control">
                            <Label className="col-md-3 control-label">Product Category</Label>
                            <Label className="col-md-1 control-label-star"><span>*</span></Label>

                            <Label className="col-md-8">
                                <Select
                                    options={options6}
                                    className="js-example-basic-single col-sm-12"
                                    isMulti />
                            </Label>
                        </div>
                        <div className="form-control">
                            <Label className="col-md-3 control-label">Product Category</Label>
                            <Label className="col-md-1 control-label-star"><span>*</span></Label>

                            <Label className="col-md-8">
                                <input style={{ width: "100%" }} />
                            </Label>
                        </div>

                        <div className="panel panel-success">
                            <div className="panel-heading ui-draggable-handle">
                                <h3 className="panel-title">Product Attribute</h3>
                            </div>
                        </div>
                        <div className="form-control input-group">
                            <Label className="col-md-3 control-label">Product Category</Label>
                            <Label className="col-md-1 control-label-star"><span> </span></Label>

                            <Label className="col-md-8">
                                <Select class="form-control select" onChange={(e) => setAddValue(Array.isArray(e) ? e.map(x => x.label) : [])} options={options6} isMulti>
                                </Select>
                                <span><button type="button" onClick={() => attibutButton()}>Add</button></span>
                            </Label>
                        </div>
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
                                                    <td><input style={{width:"20px"}} type="text" id={index+1} defaultValue={index+1} onChange={handleChangeSno}/></td>
                                                    <td>{value} <br /><textarea></textarea>  </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="panel panel-success" style={{ marginTop: "20px" }}>
                            <div className="panel-heading ui-draggable-handle">
                                <h3 className="panel-title">Price Details</h3>
                            </div>
                        </div>
                        <div className="form-control">
                            <Label className="col-md-3 control-label">Purchase Price(USD)</Label>
                            <Label className="col-md-1 control-label-star"><span>*</span></Label>

                            <Label className="col-md-8">
                                <input style={{ width: "100%" }} placeholder="Purchase Price" />
                            </Label>
                        </div>

                        <div className="form-control">
                            <Label className="col-md-3 control-label">Sales Price</Label>
                            <Label className="col-md-1 control-label-star"><span>*</span></Label>

                            <Label className="col-md-8">
                                <input style={{ width: "100%" }} placeholder="Sales Price" />
                            </Label>
                        </div>

                        <div className="form-control">
                            <Label className="col-md-3 control-label">Minimum Order Qty</Label>
                            <Label className="col-md-1 control-label-star"><span>*</span></Label>

                            <Label className="col-md-8">
                                <input style={{ width: "100%" }} placeholder="1" />
                            </Label>
                        </div>

                        <div className="form-control">
                            <Label className="col-md-3 control-label">Shipping Days</Label>
                            <Label className="col-md-1 control-label-star"><span>*</span></Label>

                            <Label className="col-md-8">
                                <input style={{ width: "100%" }} placeholder="Shipping Days" />
                            </Label>
                        </div>

                        <div className="form-control">
                            <Label className="col-md-3 control-label">Shipping Charges (Flat Rate)</Label>
                            <Label className="col-md-1 control-label-star"><span>*</span></Label>

                            <Label className="col-md-8">
                                <input style={{ width: "100%" }} placeholder="Shipping Charges" />
                            </Label>
                        </div>

                        <div className="form-control">
                            <Label className="col-md-3 control-label">Product Varients</Label>
                            <Label className="col-md-1 control-label-star"><span>*</span></Label>

                            <Label className="col-md-8">
                                <Select
                                    options={options7}
                                    onChange={(e) => setShowValue(e.value)}
                                    className="js-example-basic-single col-sm-12"
                                />
                            </Label>
                        </div>

                        <div>
                            {showValue == 1 ?
                                <div>
                                    <div className="panel panel-success" style={{ marginTop: "20px" }}>
                                        <div className="panel-heading ui-draggable-handle">
                                            <h3 className="panel-title">Product Options</h3>
                                        </div>
                                    </div>
                                    <div className="form-control input-group">
                                        <Label className="col-md-3 control-label">Product Category</Label>
                                        <Label className="col-md-1 control-label-star"><span> </span></Label>

                                        <Label className="col-md-8">
                                            <Select class="form-control select" onChange={(e) => setProdDetailsValue(e)} style={{ width: "94%" }} options={options6} isMulti />
                                            <span><button type="button" onClick={handleProductDetails}>Add</button></span>
                                        </Label>
                                        <table className="table table-bordered">
                                           {
                                            showProdVal.length!=0?
                                            <thead>
                                            <tr>
                                                <th></th>
                                                <th>Options</th>
                                            </tr>
                                        </thead>:
                                        ""
                                           }
                                            <tbody>
                                               {
                                                showProdVal.map((it,index)=>{
                                                    return(
                                                         <tr>
                                                        <td><a className="label label-danger" onClick={() => handleProdDetailsValue(index)}><i className="fa fa-times"></i></a></td>
                                                        <td>{it.label}<br/> <input type="text" name="colour" id={index} onChange={handleProdId}/></td>
                                                    </tr>
                                                    )
                                                })
                                               }
                                              {
                                                showProdVal.length!=0?
                                                <>
                                                 <tr></tr>
                                               <tr>
                                                <td></td>
                                                <td>Purchase Price(USD)<br/><input value={purchasePrice} onChange={(e)=>setPurchasePrice(e.target.value)}/></td>
                                               </tr>
                                               <tr>
                                                <td></td>
                                                <td>Add-On Sales Price<br/><input value={salePrice} onChange={(e)=>setSalePrice(e.target.value)}/></td>
                                               </tr>
                                               <tr>
                                                <td colSpan="2" align="center">
                                                    <input type="button" onClick={handleCreateList} value="Add to Product List" />
                                                    <input type="button" value="Close" />
                                                </td>
                                               </tr>
                                                </>
                                                :""
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
                                            <th>Purchase Price<br/>(USD)</th>
                                            <th>Add-On Price<br/>(Sales)</th>
                                            <th>Price<br/>(Sales)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {
                                        prodListValue.map((it,index)=>{
                                            console.log(prodListValue.length,"plv")
                                            return(
                                                <tr>
                                                <td><a className="label label-danger" onClick={() => deleteListItem(index)}><i className="fa fa-times"></i></a></td>
                                                <td>{index+1}</td>
                                                <td>{it.option.map((res,i)=>(
                                                   <>
                                                    {i!==0 && (i==prodListValue.length?"|":"|")}{res.label}
                                                   </>
                                                ))}<br/>{Object.keys(it.P_colour)!==0 && (Object.keys(it.P_colour)==prodListValue.length?"|":"|")}{Object.values(it.P_colour)}</td>
                                                <td>{it.s_price}</td>
                                                <td>{it.p_price}</td>
                                                <td>{it.price}</td>
                                            </tr>
                                            )
                                        })
                                       }
                                    </tbody>
                                </table>
                                </div>
                                : ""}
                        </div>

                        <div className="panel panel-success" style={{ marginTop: "20px" }}>
                            <div className="panel-heading ui-draggable-handle">
                                <h3 className="panel-title">Sales Discount</h3>
                            </div>
                        </div>
                        <div className="pannel-body">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>
                                            <b>(Qty)MOQ</b>
                                            <br />
                                            <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Sales Qty" />
                                        </td>
                                        <td>
                                            <b>Fixed Amt Discount</b>
                                            <br />
                                            <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="Sales Qty" />
                                        </td>
                                        <td>
                                            <button type="button" onClick={handleDiscount}>Add</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>S.No</th>
                                        <th>Qty</th>
                                        <th>Discount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        salesDiscount.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td><a className="label label-danger" onClick={() => deleteSalesItem(index)}><i className="fa fa-times"></i></a></td>
                                                    <td>{index + 1}</td>
                                                    <td>{item.qty}</td>
                                                    <td>{item.discount}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                       <UploadImage/>

                    </Form>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default ProductForm