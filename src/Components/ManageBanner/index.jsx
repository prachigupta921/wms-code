import React, { Fragment,useEffect } from "react";
import { ManageBannerAction } from "../../redux/Action/ManagerBannerAction";
import { useSelector, useDispatch } from "react-redux";
import { Col, FormGroup, Label, Row, Table } from 'reactstrap';
import { Btn, H5 } from '../../AbstractElements';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

const ManageBanner=()=>{
    const {manageBannerList:list}=useSelector((store)=>store.manageList)
    console.log(list,"list");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
        dispatch(ManageBannerAction())
    },[])

    const handleEdit=(id)=>{
      sessionStorage.setItem("manage_id",id)
      let path = `${process.env.PUBLIC_URL}/edit-manage-banner`;
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
          selector: (row) => row.banner_url
          ,
          sortable: true,
          center: true,
        },
        
        {
          name: "Brand Image",
          selector: (row) => <img height="30px" width="50px" src={row.banner_image} alt="" />,
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
        let path=`${process.env.PUBLIC_URL}/add-manage-banner`;
        navigate(path)
      }
    return(
        <Fragment>
             <Row>
                <Col sm="6">
                    <H5>Manage Banner</H5>
                </Col>
                <Col sm="6">
                    <Btn attrBtn={{ className: 'btn-block pull-right', color: 'primary', type: 'submit',onClick:handleClick }}>New Manage Banner</Btn>
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

export default ManageBanner