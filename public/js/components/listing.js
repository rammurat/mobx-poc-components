import React from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react"; 

@observer
export default class listing extends React.Component{

    render(){

        //get objects from store
        const {listingData} = this.props.store;

        //group item categories
        const listingTable = listingData ? listingData.map(item => (
            <tr key={item.id}>
                <td>{item.tradeType}</td>
                <td>{item.marketType}</td>
                <td>{item.direction}</td>
                <td>{item.price}</td>
                <td>{item.priceUOM}</td>
                <td>{item.quantity}</td>
                <td>{item.quantityUOM}</td>
                <td>{item.totalQuantity}</td>
                <td>{item.totalQuantityUOM}</td>
                <td>{item.tradedate}</td>
                <td>{item.startDate}</td>
                <td>{item.endDate}</td>
                <td>{item.productCode}</td>
                <td>{item.deliveryLocation}</td>
                <td>{item.paymetDays}</td>
                <td>{item.paymentTerms}</td>
                <td>{item.mOT}</td>
                <td>{item.dealStatus}</td>
            </tr>    
        )) : "";

        //render html
        return <div>
            <h2>Products Listing</h2>
            <table className="table table-striped table-responsive">
                <thead>
                    <tr>
                        <th>Trade Type</th>  
                        <th>Market Type</th>
                       <th> Direction  </th>
                      <th>  Price</th>  
                       <th> Price UOM</th>   
                      <th>  Quantity</th>   
                      <th>  Quantity UOM</th>
                      <th>  Total Quantity</th> 
                      <th>  Total QuantityUOM</th>   
                      <th>  Trade Date</th> 
                      <th>  Start Date</th> 
                      <th>  End Date   </th>
                      <th>  Product Code   </th>
                      <th>  Delivery Location</th>   
                       <th> Paymet Days</th>
                       <th> Payment Terms   </th>
                       <th> MOT</th>
                        <th>Deal Status</th>
                    </tr>
                </thead>
                <tbody>
                    {listingTable}
                </tbody>
            </table>
        </div>
    }
}