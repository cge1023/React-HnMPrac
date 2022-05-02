import React from 'react';
import ProductDetail from '../pages/ProductDetail';
import {Navigate} from "react-router-dom";

const PrivateRoute = ({authenticate}) => {
    return (
        <div>
            {authenticate === true ? <ProductDetail/> : <Navigate to='/login'/>}
        </div>
    );
};

export default PrivateRoute;