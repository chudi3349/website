import React from 'react'
import ProductCard from '../../common/ProductCard'
import Service from '../images/service.jpg'

function Listitem(){
    return(
        <div>
            <ul>
              <li>Tracking of guests’ accounts and generation of various guest reports.</li>
              <li>Monitoring of room status and generation of a host of room reports.</li>
              <li>Printing of receipts for guest payments at the front office and other points of sales.</li>
              <li>Generation of guest bills (Transaction Details) on checkout.</li>
              <li>Generation of total sales made on a daily, weekly, monthly, and yearly basis.</li>
              <li>Generation of various history reports.</li>
              <li>Generation of company invoices and statements.</li>
              <li>Generation of cashier’s shift report (Front Office).</li>
              <li>Generation of outlet summaries or control sheet (Restaurant).</li>
              <li>Generation of profit and loss report.</li>
              <li>Generation of many other management reports.</li>
            </ul>
        </div>
    )
}


export default function TaskSummary(props) {
   
    return (
        <div>
            <ProductCard
                src={Service} 
                title={"SOME TASKS OUR SOFTWARE CATERS FOR"} 
                text={<Listitem />} 
                cardStyle={{
                  maxWidth: "80%",
                  marginLeft: '10%'
              }} 
                style={{
                  width:'100%',
                  height: '100%'
                }}
                />
                
        </div>
    )
}
