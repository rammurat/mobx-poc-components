import {observable,computed} from 'mobx';
import {_} from "underscore";

class newProduct{
    //observer each product
    @observable id;
    @observable name;
    @observable price;
    @observable category;

    //initialize product
    constructor(product){
        this.id = parseInt(Date.now()) + "_" + Math.random(20)
        this.name = product.name
        this.price = product.price
        this.category = product.category
    }
}

export class AppStore{
    //observer product list and master categories
    @observable productList = [];
   
    //create item
    createProduct(product){
        this.productList.push( new newProduct(product));
    }

    @observable listingData = [{
      id : Date.now() + "_" + Math.random(), 
      tradeType:"SHLTR16TB0342:1",  
      marketType:"Chevron Products Company, a division of Chevron USA Inc.", 
      direction:"Chevron Products Company, a division of Chevron USA Inc.",   
      price:"90",   
      priceUOM:"USD/BBL",   
      quantity:"100000",    
      quantityUOM:"BBl",    
      totalQuantity:"10000",  
      totalQuantityUOM:"BBl",   
      tradedate:"15-3-2017",  
      startDate:"1-Apr",  
      endDate:"30-Apr",    
      productCode:"MARS",    
      deliveryLocation:"Clovelly",   
      paymetDays:"20", 
      paymentTerms:"",   
      mOT:"Pipeline", 
      dealStatus:"ACTIVE"
    },{
      id : Date.now() + "_" + Math.random(),
      tradeType:"SHLTR16TB0342:2",  
      marketType:"Chevron Products Company, ", 
      direction:"Chevron Products Company, a division of Chevron USA Inc.",   
      price:"90",   
      priceUOM:"USD/BBL",   
      quantity:"30000",    
      quantityUOM:"BBl",    
      totalQuantity:"30000",  
      totalQuantityUOM:"BBl",   
      tradedate:"15-3-2017",  
      startDate:"1-Apr",  
      endDate:"30-Apr",    
      productCode:"MARS",    
      deliveryLocation:"Clovelly",   
      paymetDays:"20", 
      paymentTerms:"",   
      mOT:"Pipeline", 
      dealStatus:"ACTIVE"
    }]

    @observable matchingData =[{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Trade Type",
        seller : "SHLTR16TB0342:1",
        buyer : "SHLTR16TB0342:2"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Market Type",
        seller : "Chevron Products Company, a division of Chevron USA Inc.",
        buyer : "Chevron Products Company"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Direction",
        seller : "SHLTR16TB0342:1",
        buyer : "SHLTR16TB0342:2"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Price",
        seller : "SHLTR16TB0342:1",
        buyer : "SHLTR16TB0342:2"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "PriceUOM",
        seller : "SHLTR16TB0342:1",
        buyer : "SHLTR16TB0342:2"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Quantity",
        seller : "33",
        buyer : "444"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Quantity UOM",
        seller : "22AA",
        buyer : "33BB"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Total Quantity",
        seller : "331",
        buyer : "3332"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Total QuantityUOM",
        seller : "BBl:1",
        buyer : "BBl:2"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Trade Date",
        seller : "8-March",
        buyer : "12-March"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Start Date",
        seller : "6-March",
        buyer : "12-March"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "End Date",
        seller : "4-March",
        buyer : "12-March"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Product Code",
        seller : "Mars",
        buyer : "Jupiter"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Delivery Location",
        seller : "Abu dhabi",
        buyer : "Australia"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Paymet Days",
        seller : "SHLTR16TB0342:1",
        buyer : "SHLTR16TB0342:2"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Payment Terms",
        seller : "NA",
        buyer : "NA"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "MOT",
        seller : "Pipeline",
        buyer : "Pipeline 2"
    },{
        id : Date.now() + "_" + Math.random(), 
        productValue :  "Deal Status",
        seller : "ACTIVE",
        buyer : "DEACTIVE"
    }]

    @observable detailData =[{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Trade Type",
        productValue : "SHLTR16TB0342:1",
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Market Type",
        productValue : "Chevron Products Company, a division of Chevron USA Inc.",
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Direction",
        productValue : "SHLTR16TB0342:1"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Price",
        productValue : "SHLTR16TB0342:1"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Price UOM",
        productValue : "SHLTR16TB0342:1"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Quantity",
        productValue : "33"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Quantity UOM",
        productValue : "22AA"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Total Quantity",
        productValue : "331"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Total QuantityUOM",
        productValue : "BBl:1"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Trade Date",
        productValue : "8-March"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Start Date",
        productValue : "6-March"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "End Date",
        productValue : "4-March"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Product Code",
        productValue : "Mars"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Delivery Location",
        productValue : "Abu dhabi"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Paymet Days",
        productValue : "SHLTR16TB0342:1"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Payment Terms",
        productValue : "NA"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "MOT",
        productValue : "Pipeline"
    },{
        id : Date.now() + "_" + Math.random(), 
        productKey :  "Deal Status",
        productValue : "ACTIVE"
    }]

    @observable formData =[{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Trade Type",
        formValue : "",
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Market Type",
        formValue : "",
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Direction",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Price",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Price UOM",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Quantity",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Quantity UOM",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Total Quantity",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Total QuantityUOM",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Trade Date",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Start Date",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "End Date",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Product Code",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Delivery Location",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Paymet Days",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Payment Terms",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "MOT",
        formValue : ""
    },{
        id : Date.now() + "_" + Math.random(), 
        formKey :  "Deal Status",
        formValue : ""
    }]
}

export default new AppStore;