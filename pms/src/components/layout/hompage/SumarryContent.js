import React from 'react'
import Summary from './Summary'

export default function SumarryContent(props) {
    const contenttext = ` Eji Tech life services is a hotel management software provider with the mission to provide innovative 
    management web app with the latest technology for businesses. Our goal is to eliminate fraud in the hotel 
    business, this occurs when rooms, products, and other services are sold without being accounted for, which 
    leads to the failure of the hotel business. By providing a management solution we keep businesses in 
    existence and more importantly, help them thrive, the software is also designed to increase hotel revenue 
    by improving hoteliers’ customer service and giving a unique experience to guests. This results in creating 
    more employment and economic growth because we believe that “Our prosperity as a nation depends upon the personal 
    financial prosperity of each of us as  individuals.”`
    return (
        <>
            <Summary 
             title = 'Who are We?'
             content = {contenttext}
            />
        </>
    )
}
