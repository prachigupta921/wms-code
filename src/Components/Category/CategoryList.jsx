import React, { Fragment, useEffect, useMemo, useCallback, useState } from "react";
import { Col, FormGroup, Label, Row, Table } from 'reactstrap';
import { Btn, H5 } from '../../AbstractElements';
import { useNavigate } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { CategoryAction,AddNewCategory,EditCategoryAction  } from "../../redux/Action/CategoryAction";

const CategoryList = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const { CATEGORY_ACTION: add } = useSelector((store) => store.CategogyUser)
  console.log("data", add);
  const [search,setSearch]=useState("")
  const [editId,setEditId]=useState()
  const [page, setPage] = useState(1);
  const countPerPage = 10;

  useEffect(() => {
    dispatch(CategoryAction(page,countPerPage,search));
  }, [page,search]);

  // useEffect(() => {
  //   const userObj={
  //     "category_id":editId
  //   }
  //   dispatch(EditCategory(userObj));
  // }, [editId]);

  const handleClick = () => {
    let path = `${process.env.PUBLIC_URL}/addcategory`;
    navigate(path);
    dispatch(AddNewCategory());
  }

  const handleEdit=(row)=>{
   // setEditId(row.id)
   sessionStorage.setItem("ide",row)
    const userObj={
      "category_id":row
    }
    dispatch(EditCategoryAction (userObj));
    let path = `${process.env.PUBLIC_URL}/edit`;
    navigate(path);
  }
  const tablecolumns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      center: true,
    },
    {
      name: "Parent Category",
      selector: (row) => row.parent_category,
      sortable: true,
      center: true,
    },
    {
      name: "Thumbnail",
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
      cell:row=> <Btn attrBtn={{ className: 'btn-block pull-right', color: 'primary', onClick:()=>{handleEdit(row.id)} }}>Edit</Btn>
    }
  ]

  const handleSearch=(e)=>{
    setSearch(e.target.value)
    setPage(1)
  }

  return (
    <Fragment>
      <Row>
        <Col sm="6">
          <H5>Categories</H5>
        </Col>
        <Col sm="6">
          <Btn attrBtn={{ className: 'btn-block pull-right', color: 'primary', type: 'submit', onClick: handleClick }}>New Categories</Btn>
        </Col>
      </Row>

      <div>
        <input type="text" onChange={handleSearch} placeholder="search" />
      </div>

      <div style={{ marginTop: "30px" }}>
        <DataTable
          data={add.data}
          columns={tablecolumns}
          striped={true}
          center={true}
          selectableRows
          pagination
          paginationServer
          paginationTotalRows={add.recordsTotal}
          paginationPerPage={countPerPage}
          paginationComponentOptions={{
            noRowsPerPage: true
          }}
          onChangePage={page => setPage(page)}
        />
      </div>
    </Fragment>
  )
}

export default CategoryList