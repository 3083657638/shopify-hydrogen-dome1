import React from 'react'

const NewSection3 = ()=>{
    return(
        <div>
            第三块
        </div>

    )
}

export default NewSection3;

const FEATURED_COLLECTION_QUERY= `#graphal
    fragment NewSection3 on Product {
       id
       title
        
    }`;
