import React, { Fragment,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, FormGroup, Label, Row, Table } from 'reactstrap';
import { Btn, H5 } from '../../AbstractElements';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";
import { AttributeAction } from "../../redux/Action/AttributeAction";

const Attribute=()=>{
    const {attributeAction:list}=useSelector((store)=>store.attribute)
    console.log(list,"list");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        dispatch(AttributeAction())
    },[])

    const handleEdit=(ide)=>{
      sessionStorage.setItem('attribute_id',ide)
      let path=`${process.env.PUBLIC_URL}/edit-attribute`;
      navigate(path)
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
          selector: (row) => row.attribute_name,
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

      const handleClick=()=>{
        let path=`${process.env.PUBLIC_URL}/add-attribute`;
        navigate(path)
      }

    return(
        <Fragment>
            <Row>
                <Col sm="6">
                    <H5>Attribute</H5>
                </Col>
                <Col sm="6">
                    <Btn attrBtn={{ className: 'btn-block pull-right', color: 'primary', type: 'submit',onClick:handleClick }}>New Attribute</Btn>
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

export default Attribute