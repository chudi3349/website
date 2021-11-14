import React from 'react';
import ProductCard from '../common/ProductCard';

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
            heading= 'love'
            subheading = 'We Never go Back on Our Promise'
            className = 'products'
            alignobject= 'right_align'
        />
        <h3 style={{
          textAlign: 'center',
          justifyContent: 'center',
          marginTop: '20px'
        }}>When You Love What You Do You are Not Working</h3>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <ProductCard title={"First Product"} text={"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."} />
                </div>
                 <div className="col-6">
                    <ProductCard></ProductCard>
                </div>
            </div>
        </div>
        <ProductsSummary />
        </>
    );
}
