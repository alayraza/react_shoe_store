export const Addtocart = (props) => {
    return(dispatch)=>{
        dispatch({
            type:"ADD_TO_CART",
            payload:props  
        })
    }
}
