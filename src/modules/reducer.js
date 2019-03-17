import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  code:"Bienvenido a Project Code Names",
  items: [
  { id:0, description: "Daniel"},
  { id:1, description: "Andrea"},
  { id:2, description: "Chris"},
  { id:3, description: "Pedro"},
  { id:4, description: "Diego"},
  { id:5, description: "Paola"},
  { id:6, description: "Victoria"},
  { id:7, description: "Alejandro"},
  { id:8, description: "Juan"},
  { id:9, description: "Miriam"},
  { id:10, description:"Lucas"}
]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {

    

    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.CHANGE_CODE:{
      console.log(action);
      let newState = _.cloneDeep(state);
      if(state.code==="Bienvenido a Project Code Names"){
      newState.code="813N83N1D0 4 PR0J3CT C0D3 N4M3";
      }
     else{
       newState.code="Bienvenido a Project Code Names";
  
      }
      return newState
  }

    
    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;