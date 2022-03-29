//setup data layer 
// we need this to track the basket data

import React,{createContext,useContext,useReducer} from 'react';

export const StateContext  = createContext();

//Build Provider 
export const StateProvider = ({reducer,initialState,children}) =>
(
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

// import React,{createContext,useContext,useReducer} from 'react';

// export const StateContext  = createContext({ //Make sure to export this
//   Order:[], //Will be consuimg the state value from here
//   addItem:(arg)=>{} //This function will be hooked to a dispatch function below
// });

// //Build Provider 
// export const StateProvider = ({reducer,initialState,children}) =>
// {  
//     const [state,dispatchFn] = useReducer(reducer,initialState)
    
//     const addItemHandler = (item) => {
//          dispatchFn(item)
//     }
//     return(<StateContext.Provider value = {{Order:state.Order,addItem:addItemHandler}}>
//         {children}
//     </StateContext.Provider>)
// };