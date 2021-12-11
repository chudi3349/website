import React from 'react';
import ProductCard from '../common/ProductCard';
import Odoo from "../layout/images/Odoo.png";
import Hotelt from "../layout/images/hotelt.png";
import "./product.scss";
import ProductsSummary from './ProductsSummary';
import SmallResolution from './SmallResolution';


function debounce(fn, ms) {
    let timer;
    return _ => {
      clearTimeout(timer);
      timer = setTimeout(_ => {
        timer = null;
        fn.apply(this, arguments);
      }, ms);
    };
  }

export default function Products(props) {
    const [dimensions, setDimensions] = React.useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })
      React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        }, 1000)
  
        window.addEventListener('resize', debouncedHandleResize)
  
        return _ => {
          window.removeEventListener('resize', debouncedHandleResize)
        
    }
      })
    return (
        <>
        <SmallResolution 
            heading= 'Feel The Satisfaction'
            subheading = 'We Never go Back on Our Promise'
            className = 'products'
            alignobject= 'right_align'
        />
        
        <h3 style={{
          textAlign: 'center',
          justifyContent: 'center',
          marginTop: '20px'
        }}>We Have What You Need</h3>

        <div className="container">
            <div className="row">
                <div className="col-6">
                    <ProductCard
                      src={Odoo} 
                      title={"Odoo Hotel Management WebApp"} 
                      text={`Installation, configuration, customization, integration services and user training 
                      of ODOO Hotel management WebApp`}
                      cardStyle={{maxWidth: "540px"}} 
                      style={{
                        width:'100%',
                        height: '100%'
                    }}
                      />
                      
                </div>
                 <div className="col-6">
                    <ProductCard
                      src={Hotelt}
                      title={"Hotel360 WebApp"}
                      text={`Tailor made friendly user interface, Integration with hotel Electric locks, and 
                      many more customizations`}
                      cardStyle={{maxWidth: "540px"}} 
                      style={{
                        width:'100%',
                        height: '100%'
                    }}
                    ></ProductCard>
                </div>
            </div>
        </div>
        <ProductsSummary />
        </>
    );
}
