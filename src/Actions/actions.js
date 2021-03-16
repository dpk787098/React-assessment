export const storeProductDataAction=(payload)=>({
    type: "STORE_PRODUCT_DATA_TO_STORE",
    payload,
})

export const storeSalesExecutiveDataAction=(payload)=>({
    type: "STORE_SALES_EXECUTIVE_DATA_TO_STORE",
    payload
})

export const storeOrdersDataAction=(payload)=>({
    type: "STORE_ORDERS_DATA_TO_STORE",
    payload
})

export const addProductDataAction=(payload)=>({
    type: "ADD_PRODUCT_DATA_TO_STORE",
    payload
})

export const addSalesExecutiveDataAction=(payload)=>({
    type: "ADD_SALES_EXECUTIVE_DATA_TO_STORE",
    payload
})

export const addOrderDataAction=(payload)=>({
    type: "ADD_ORDER_DATA_TO_STORE",
    payload
})

export const removeProductDataAction=(payload)=>({
    type: "REMOVE_PRODUCT_DATA",
    payload
})

export const removeSalesExecutiveDataAction=(payload)=>({
    type: "REMOVE_SALES_EXECUTIVE_DATA",
    payload
})

export const removeOrderDataAction=(payload)=>({
    type: "REMOVE_ORDER_DATA",
    payload
})