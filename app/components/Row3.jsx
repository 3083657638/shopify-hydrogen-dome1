import React from 'react';
import {defer} from '@shopify/remix-oxygen';
import {Await,useLoaderData,Link} from '@remix-run/react';
import {Suspense} from 'react';

/**
 * 
 * @param{LoaderFunctionArgs} args
 */
export async function loader(args){
    const deferredData = loadDeferredData(args);

    const criticalData = await loadCriticalData(args);

    return defer({...deferredData, ...criticalData});
}

/**
 * @param {loadDeferredData}
 */
async function loadCriticalData({context}){
    const [{collections}] = await Promise.all([
        context.storefront.query(FEATURED_COLLECTION_QUERY),
    ])

    return {
        featuredCollection:collections.nodes[0],
    }
}

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
