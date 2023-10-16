import React, { Fragment, useState } from "react";
import { Btn, H5, H6 } from '../../AbstractElements';
import HeaderCard from "../../Common/Components/HeaderCard";
import { Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, InputGroup, InputGroupText, Row } from 'reactstrap';

const SalesDiscount = () => {
    const [quantity, setQuantity] = useState("")
    const [discount, setDiscount] = useState("")
    const [salesDiscount, setSalesDiscount] = useState([]);

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
    return (
        // <Fragment>
        //     <H6>Sales Discount</H6>
        //     <hr className="mt-4 mb-4" />

        //     <table className="table table-bordered">
        //         <thead>
        //             <tr>
        //                 <td>
        //                     <b>(Qty)MOQ</b>
        //                     <br />
        //                     <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Sales Qty" />
        //                 </td>
        //                 <td>
        //                     <b>Fixed Amt Discount</b>
        //                     <br />
        //                     <input type="text" value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="Sales Qty" />
        //                 </td>
        //                 <td>
        //                     <button type="button" onClick={handleDiscount}>Add</button>
        //                 </td>
        //             </tr>
        //         </thead>
        //     </table>

        //     <table className="table table-bordered">
        //                         <thead>
        //                             <tr>
        //                                 <th></th>
        //                                 <th>S.No</th>
        //                                 <th>Qty</th>
        //                                 <th>Discount</th>
        //                             </tr>
        //                         </thead>
        //                         <tbody>
        //                             {
        //                                 salesDiscount.map((item, index) => {
        //                                     return (
        //                                         <tr>
        //                                             <td><a className="label label-danger" onClick={() => deleteSalesItem(index)}><i className="fa fa-times"></i></a></td>
        //                                             <td>{index + 1}</td>
        //                                             <td>{item.qty}</td>
        //                                             <td>{item.discount}</td>
        //                                         </tr>
        //                                     )
        //                                 })
        //                             }
        //                         </tbody>
        //                     </table>

        // </Fragment>

        <Fragment>
            <Col sm="12">
                <Card>
                    <HeaderCard title="Sales Discount" />
                    <CardBody>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <td>
                                        <b>(Qty)MOQ</b>
                                        <br />
                                        <input type="text" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Sales Qty" />
                                    </td>
                                    <td>
                                        <b>Fixed Amt Discount</b>
                                        <br />
                                        <input type="text" className="form-control" value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="Sales Qty" />
                                    </td>
                                    <td>
                                        <input className="btn btn-success" type="button" value="Add" onClick={handleDiscount}/>
                                        {/* <button type="button" onClick={handleDiscount}>Add</button> */}
                                    </td>
                                </tr>
                            </thead>
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

                    </CardBody>
                </Card>
            </Col>
        </Fragment>
    )
}
export default SalesDiscount