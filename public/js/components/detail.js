import React from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react"; 

@observer
export default class matching extends React.Component{

    render(){

        //get objects from store
        const {detailData} = this.props.store;

        //group item categories
        const detailTable = detailData ? detailData.map(item => (
            <tr key={item.id}>
                <td>{item.productKey}</td>
                <td>{item.productValue}</td>
            </tr>    
        )) : "";

        //render html
        return <div>
            <h2>Product Detail</h2>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th>Product</th>  
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {detailTable}
                </tbody>
            </table>
        </div>
    }
}