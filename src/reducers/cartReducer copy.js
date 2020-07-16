const initialState ={
    cart:[]
}

export default (state=initialState,action)=>{
    console.log(state);
    switch(action.type){
        case "ADD_TO_CART":
            // let nestedState = state.nestedState
            // nestedState.nestedField = action.data
            if(state.id===action.payload.cart.productId){
                // state.count=+1
                state = state.slice();
                state.push(action.payload.cart);

                return{
                    // cart:state
                    // ...state.slice(0,action.payload)
                    
                    // cart:action.payload.cart
                    // id:action.payload.cart.productId,
                    // productName:action.payload.cart.productName,
                    // count:state.count+1
                }
            }else{
                return{
                    // ...state,
                    // cart:action.payload.cart
                    // ...state,
                    id:action.payload.cart.productId,
                    productName:action.payload.cart.productName,
                    count:1
                }
            }
            
            // for (var i in state) {
            //     if (state[i].id === action.payload.cart.productId) {
            //         state[i].price = parseInt(price);
            //         // return;
            //     }
            // }
            // return state=action.payload
        default:
            return state;
    }
}