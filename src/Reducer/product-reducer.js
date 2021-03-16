const initialState = {
    productData: [],
    salesExecutiveData: [],
    ordersData: []
}

export const productReducer = (state = initialState, {type,payload}) =>{
    switch(type){
        case "STORE_PRODUCT_DATA_TO_STORE":
            return { ...state, productData: payload }
        case "STORE_SALES_EXECUTIVE_DATA_TO_STORE":
            return { ...state, salesExecutiveData: payload }
        case "STORE_ORDERS_DATA_TO_STORE":
            return { ...state, ordersData: payload }
        case "ADD_PRODUCT_DATA_TO_STORE":
            return { 
                ...state, 
                productData: [...state.productData, payload],
            }
        case "ADD_SALES_EXECUTIVE_DATA_TO_STORE":
            return {
                ...state,
                salesExecutiveData: [...state.salesExecutiveData, payload],
            }
        case "ADD_ORDER_DATA_TO_STORE":
            return {
                ...state,
                ordersData: [...state.ordersData, payload],
            }
        case "REMOVE_PRODUCT_DATA":
            return { 
                ...state, 
                productData: state.productData.filter(i => i.id !== payload.id  && i.product_code !== payload.product_code),
            }
        case "REMOVE_SALES_EXECUTIVE_DATA":
            return {
                ...state,
                salesExecutiveData: state.salesExecutiveData.filter(i=>i.id !== payload.id && i.emp_id !== payload.emp_id)
            }
        case "REMOVE_ORDER_DATA":
            return {
                ...state,
                ordersData: state.ordersData.filter(i=> i.id !== payload.id && i.order_id !== payload.order_id)
            }
        default:
            return state;
    }
}