import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrandAction,EditBrandAction } from "../../redux/Action/BrandAction";
import { Col, FormGroup, Label, Row, Table } from 'reactstrap';
import { Btn, H5 } from '../../AbstractElements';
import DataTable from 'react-data-table-component';
import { useNavigate } from "react-router-dom";

const Brand = () => {

    const dispatch = useDispatch();
    const navigate=useNavigate();
    const { brandList } = useSelector((store) => store.brand)
   // const { editBrandList } = useSelector((store) => store.brand)
    console.log(brandList, "li")
    // console.log(editBrandList, "editBrandList")

    useEffect(() => {
        dispatch(BrandAction())
    }, [])

    const handleBrand=()=>{
      console.log("click")
      let path=`${process.env.PUBLIC_URL}/new-brand`
      navigate(path)
    }

    const handleClik=(id)=>{
      console.log(id,"ii");
      sessionStorage.setItem('brand_id',id)
      let path=`${process.env.PUBLIC_URL}/edit-brand`
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
          selector: (row) => row.name,
          sortable: true,
          center: true,
        },
        
        {
          name: "Brand Image",
          selector: (row) => <img height="30px" width="50px" src={row.thumbnail} alt="" />,
          sortable: true,
          center: true,
        },
        {
          name: "Status",
          selector: (row) => row.status,
          sortable: true,
          center: true,
        },
        // {
        //   cell:row=> <Link to={`${process.env.PUBLIC_URL}/edit/${row.id}`}><Btn attrBtn={{ className: 'btn-block pull-right', color: 'primary' }}>Edit</Btn></Link>
        // },
        {
          cell:row=> <Btn attrBtn={{ className: 'btn-block pull-right', color: 'primary', onClick:()=>{handleClik(row.id)} }}>Edit</Btn>
        }
      ]
    
    return (
        <Fragment>
            <Row>
                <Col sm="6">
                    <H5>Brand</H5>
                </Col>
                <Col sm="6">
                    <Btn attrBtn={{ className: 'btn-block pull-right', color: 'primary', type: 'submit', onClick:handleBrand }}>New Brand</Btn>
                </Col>
            </Row>

            <div>
                <input type="text" placeholder="search" />
            </div>

            <div style={{ marginTop: "30px" }}>
        <DataTable
          data={brandList.data}
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

export default Brand