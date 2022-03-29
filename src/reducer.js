// import { ContactSupportOutlined } from "@material-ui/icons";

export const initialState = {
  user: null,
  RestuarantInfo: [],
  userName: "",
  Order: [],
  CurrentRestuarantId: "", // contains id of restuarant whose dishes are stored in Order array
  userUID: "000000000",  // because it will give error as string it empty when we use it as dic.id to fetch address of a particular user
  UserAddressArray: []
  };
  
  
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USERUID":
      console.log(action.userUID);
      return {
        
        ...state,
        userUID: action.userUID,
      };
      
    case "ADD_ITEM_IN_ORDER":
      var tempAddOrder = [...state.Order];
      const indexTempAddOrder = state.Order.findIndex((item) => item.id === action.item.id);
        
      // index1 >=0 that means the dish is already present in the Order, just increase the value count by 1
      // instead of appending the whole dish into the Order array.
      if (indexTempAddOrder >= 0) {
         console.log("before", tempAddOrder[indexTempAddOrder].Count); //4
        // const count = tempOrder1[index1].Count;
        tempAddOrder[indexTempAddOrder].Count +=  1;
        console.log("after", tempAddOrder[indexTempAddOrder].Count); //5
        
        console.log("after", tempAddOrder);
        console.log("after", tempAddOrder[indexTempAddOrder].Count); //5
        return { ...state, Order: tempAddOrder };
      }
      else {
        console.log("New item added");
        return {
          ...state,
          Order: [...state.Order, action.item]
        };
      }
      case "ADD_ITEM_IN_CART":
      var tempAddCart = [...state.Order];
      const indexTempAddCart = state.Order.findIndex((item) => item.id === action.item.id);
        
      // index1 >=0 that means the dish is already present in the Order, just increase the value count by 1
      // instead of appending the whole dish into the Order array.
      if (indexTempAddCart >= 0) {
        //  console.log("before", tempOrder2[index2].Count); //4
        let objectTempAddCart = { ...tempAddCart[indexTempAddCart]};
        objectTempAddCart.Count += 1;
        tempAddCart[indexTempAddCart] = objectTempAddCart;

        // tempOrder2[index2].Count +=  1;
        
        // console.log("after", tempOrder2);
        // console.log("after", tempOrder2[index2].Count); //5
        return { ...state, Order: tempAddCart };
      }
      else {
        console.log("New item added");
        return {
          ...state,
          Order: [...state.Order, action.item]
        };
      }
    
    case "REMOVE_ITEM_FROM_ORDER":
      // tempararily storing Order array in newsOrder
      var tempRemoveOrder = [...state.Order];
      // find the index of dish on which the user clicked
      const indexRemoveOrder = state.Order.findIndex((item) => item.id === action.item.id);
      // if present than remove that index from the array newOrder and replace it with Order array(see return statement)
      if (indexRemoveOrder >= 0) {
        if (tempRemoveOrder[indexRemoveOrder].Count > 1) {
          // newOrder[index].Count -= 1;
          let objectTempRemoveOrder = { ...tempRemoveOrder[indexRemoveOrder] };
          objectTempRemoveOrder.Count -= 1;
          tempRemoveOrder[indexRemoveOrder] = objectTempRemoveOrder;
        }
        else {
          tempRemoveOrder.splice(indexRemoveOrder, 1);
        }
      }
      else {
        console.warn("Id not present");
      }
      
      return { ...state, Order: tempRemoveOrder };
    
      case "REMOVE_ITEM_FROM_CART":
        // tempararily storing Order array in newsOrder
        var tempRemoveCart = [...state.Order];
        // find the index of dish on which the user clicked
        const indexRemoveCart = state.Order.findIndex((item) => item.id === action.item.id);
        // if present than remove that index from the array newOrder and replace it with Order array(see return statement)
        if (indexRemoveCart >= 0) {
          if (tempRemoveCart[indexRemoveCart].Count > 1) {
            let objectTempRemoveCart = { ...tempRemoveCart[indexRemoveCart]};
            objectTempRemoveCart.Count -= 1;
            tempRemoveCart[indexRemoveCart] = objectTempRemoveCart;
            // newOrder3[index4].Count -= 1;
          }
          else {
            tempRemoveCart.splice(indexRemoveCart, 1);
          }
        }
        else {
          console.warn("Id not present");
        }
        
        return { ...state, Order: tempRemoveCart};
      
    case "SET_USERNAME":
      return { ...state, userName: action.userName };
        
    case "UPDATE_RESTUARANTINFO":
      return { ...state, RestuarantInfo: action.items };
      
    // RestuarantBodyInfo.jsx
    case "UPDATE_RESTUARANT_ID":
      let tempO = [...state.Order];
      let tempR = state.CurrentRestuarantId;
      if (action.item.RestuarantId !== state.CurrentRestuarantId) {
        console.log("Inside update");
        tempO = [];
        tempR = action.item.RestuarantId;
        console.log(state);
      }
        
      return {...state, Order: tempO, CurrentRestuarantId: tempR};

      case "ORDER_PLACED":
        let tempO1 = [...state.Order];
        console.log("Order placed");
        tempO1 = [];
        let tempR1 = action.item.RestuarantId;
        console.log(state);
        
          
        return {...state, Order: tempO1, CurrentRestuarantId: tempR1};
    case "UPDATE_USERADDRESSESARRAY":
      return { ...state, UserAddressArray: action.items };
    
    
      default:
        return state;
    }
  };
  
  export default reducer;