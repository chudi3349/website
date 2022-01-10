import React from 'react'
import SecondProductCard from '../../common/SecondProductCard'
import Hotelweb from '../images/hotelweb.png'

export default function WebSummary(props) {
  const textcontent =`We help businesses and individuals succeed by developing websites and web applications 
  to promote their business and connect them to customers. The world is a global village and you need a strong 
  online presence to take your business to the next level. We work with you to develop a brand that stands out 
  from the rest.`
    return (
        <div>
            <SecondProductCard 
            src={Hotelweb}
            title={'LETS BUILD YOUR SUCCESS'}
            text={textcontent}
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
