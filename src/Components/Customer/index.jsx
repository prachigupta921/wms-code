import React, { Fragment, useEffect } from "react";
import { Col, FormGroup, Label, Row, Table } from 'reactstrap';
import { Btn, H5 } from '../../AbstractElements';
import DataTable from 'react-data-table-component';
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CustomerAction } from "../../redux/Action/CustomerAction";

const Customer = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {customerList:list}=useSelector((store)=>store.customer)
    console.log(list,"list");

    useEffect(()=>{
        dispatch(CustomerAction())
    },[])

    const handleNextPage=()=>{
        let path=`${process.env.PUBLIC_URL}/add-customer`
        navigate(path)
    }

    const handleEdit=(row)=>{
        console.log(row,"roww");
        sessionStorage.setItem("customer_id",row)
        let path = `${process.env.PUBLIC_URL}/edit-customer`;
        navigate(path);
      }

    const tablecolumns = [
        {
            name: "ID",
            selector: (row) => row.DT_RowIndex,
            sortable: true,
            center: true,
          },
        {
          name: "Name",
          selector: (row) => row.customer_name
          ,
          sortable: true,
          center: true,
        },
        {
            name: "Address",
            selector: (row) => row.address
            ,
            sortable: true,
            center: true,
          },
        
        {
          name: "Status",
          selector: (row) => row.status,
          sortable: true,
          center: true,
        },
        {
          cell:row=> <Btn attrBtn={{ className: 'btn-block pull-right', color: 'primary',onClick:()=>handleEdit(row.id) }}>Edit</Btn>
        }
      ]
    return (
        <Fragment>
            <Row>
                <Col sm="6">
                    <H5>Customer</H5>
                </Col>
                <Col sm="6">
                    <Btn attrBtn={{ className: 'btn-block pull-right', color: 'primary', type: 'submit',onClick:handleNextPage }}>New Customer</Btn>
                </Col>
            </Row>

            <div>
                <input type="text" placeholder="search" />
            </div>

            <div style={{ marginTop: "30px" }}>
                <DataTable
                    data={list.data}
                    columns={tablecolumns}
                    striped={true}
                    center={true}
                    selectableRows
                    pagination
                //   paginationServer
                //   paginationTotalRows={add.recordsTotal}
                //   paginationPerPage={countPerPage}
                //   paginationComponentOptions={{
                //     noRowsPerPage: true
                //   }}
                //   onChangePage={page => setPage(page)}
                />
            </div>
        </Fragment>
    )
}

export default Customer