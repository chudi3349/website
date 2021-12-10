import React from 'react'
import Summary from '../layout/hompage/Summary'


export default function ProductsSummary(props) {
    const textcontent = `Every hotel wants to provide better services for their guests and help them have a good 
    experience during their stay. It can always get better, Why should you take whatever hotel management system 
    they gave you? We believe you should have a say in the design of the product you are using. That is why we 
    first conduct a survey of your business to learn about your challenges, listen to understand your problems 
    because we care. We believe in fact-based decision-making to provide you with unique features of the hotel 
    management system a differentiated product that satisfies your needs.
    We are the feature of hotel management systems`
    return (
        <div style={{
            marginBottom:'20px'
        }}>
            <Summary 
             title = 'The future is Now'
             content = {textcontent}
            />
        </div>
    )
}
