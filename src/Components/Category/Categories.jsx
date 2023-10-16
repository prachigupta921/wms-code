import React, { Fragment } from "react";
import AddCategory from "./AddCategory";
import { Breadcrumbs } from '../../AbstractElements';
import { Container } from 'reactstrap';
import CategoryList from "./CategoryList";
import { HeaderToken } from "../../Utils/headerToken";

const Category = () => {
    HeaderToken();
    return (
        <Fragment>
            <Container fluid={true}>
                <Breadcrumbs parent="Dashboard" title="AddCategory" />
                <CategoryList/>
                {/* <AddCategory /> */}
            </Container>
        </Fragment>
    )
}

export default Category