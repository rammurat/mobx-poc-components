import React from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react"; 

@observer
export default class matching extends React.Component{

    render(){

        //get objects from store
        const {matchingData} = this.props.store;

        //group item categories
        const matchingTable = matchingData ? matchingData.map(item => (
            <tr key={item.id}>
                <td>{item.productValue}</td>
                <td>{item.seller}</td>
                <td>{item.buyer}</td>
            </tr>    
        )) : "";

        //render html
        return <div>
            <h2>Deal Matching</h2>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th>Type</th>  
                        <th>Seller</th>
                        <th>Buyer</th>
                    </tr>
                </thead>
                <tbody>
                    {matchingTable}
                </tbody>
            </table>
        </div>
    }
}