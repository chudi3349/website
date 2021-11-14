function SmallResolution(props){
    const windowSize = window.innerWidth;
    const { heading, subheading, className, alignobject } = props;
    if(windowSize > 820){
      return(
          <div className={className}>
              <div className={alignobject}>
              <h1>{heading}</h1>
              <h4>{subheading}</h4>
              </div>
          </div>
      )
    }else if (windowSize < 800 && windowSize > 400){
        return(
          <div className={className}>
              <div className='align_center'>
              <h1>{heading}</h1>
              <h4>{subheading}</h4>
              </div>
          </div>
        )
    }else{
      return(
        <div className={className}>
            <div className='align_center'>
            <h1>{heading}</h1>
            <h4>{subheading}</h4>
            </div>
        </div>
        )
    }
  }

  export default SmallResolution;