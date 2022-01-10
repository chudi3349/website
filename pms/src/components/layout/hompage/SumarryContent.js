import React from 'react'
import Summary from './Summary'

export default function SumarryContent(props) {
    const contenttext = ` Eji Tech life services is a hotel management software provider with the mission to provide innovative 
    management systems with the latest technology for businesses. Our goal is to design a hotel management system to help make 
    your work easier, successful, and enjoyable. By providing a management solution that keep track of all transactions, 
    we keep businesses in existence and more importantly, help them thrive, the software is also designed to increase hotel revenue 
    by improving hoteliers’ customer service and giving a unique experience to guests. This results in creating 
    more employment and economic growth because we believe that “Our prosperity as a nation depends upon the personal 
    financial prosperity of each of us as  individuals.” Call Us 08138733881.`
    return (
        <>
            <Summary 
             title = 'Who are We?'
             content = {contenttext}
            />
        </>
    )
}
