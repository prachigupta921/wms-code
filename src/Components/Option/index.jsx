import React, { Fragment,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, FormGroup, Label, Row, Table } from 'reactstrap';
import { Btn, H5 } from '../../AbstractElements';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";
import { OptionAction } from "../../redux/Action/OptionAction";
const Option=()=>{
    const {optionAction:list}=useSelector((store)=>store.option)
    console.log(list,"list");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        dispatch(OptionAction())
    },[])

    const handleEdit=(ide)=>{
      sessionStorage.setItem('option_id',ide)
      let path=`${process.env.PUBLIC_URL}/edit-option`
      navigate(path)
    }

    const tablecolumns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
            center: true,
          },
        {
          name: "Name",
          selector: (row) => row.option_name,
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
        let path=`${process.env.PUBLIC_URL}/add-option`;
        navigate(path)
      }
    return(
        <Fragment>
            <Row>
                <Col sm="6">
                    <H5>Option</H5>
                </Col>
                <Col sm="6">
                    <Btn attrBtn={{ className: 'btn-block pull-right', color: 'primary', type: 'submit',onClick:handleClick }}>New Option</Btn>
                </Col>
            </Row>

            <div>
                <input type="text" placeholder="search" />
            </div>

            <div style={{ marginTop: "30px" }}>
        <DataTable
          data={list.options}
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

export default Option