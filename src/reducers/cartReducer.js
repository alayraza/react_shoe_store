const initialState ={
    cart:[]
}
export default (state=initialState,action)=>{
    console.log(state)
    switch(action.type){
        case "ADD_TO_CART":
            // let nestedState = state.nestedState
            // nestedState.nestedField = action.data
            let cart=[];
            // cart = state.cart.map((p) => {
            //     if (p.productId === action.payload.cart.productId) {
            //       p.items++;
            //     }
            //     return p;
            // });
            
            if(state.cart.some((p)=>p.productId===action.payload.cart.productId&&p.productName===action.payload.cart.productName)){
                cart = state.cart.map((p) => {
                    if (p.productId === action.payload.cart.productId) {
                      p.quantity+=1;
                    }
                    return p;
                });
                // state.count=+1

                // return{
                    // ...state,
                    // cart
                    // cart:state
                    // ...state.slice(0,action.payload)
                    
                    // cart:action.payload.cart
                    // id:action.payload.cart.productId,
                    // productName:action.payload.cart.productName,
                    // count:state.count+1
                // }
            }else{
                cart = [...state.cart, action.payload.cart];
                // return{
                    // ...state,
                    // cart:action.payload.cart
                    // ...state,
                    // id:action.payload.cart.productId,
                    // productName:action.payload.cart.productName,
                    // count:1
                // }
            }
            return {
                ...state,
                cart,
            };
            
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