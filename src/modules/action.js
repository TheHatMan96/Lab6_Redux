// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM",
    CHANGE_CODE: "CHANGE_CODE"
  };
  // actions
  const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });
  const changeCode=code=>({
    type: Types.CHANGE_CODE,
    payload: code
  })
  export default {
    createItem,
    deleteItem,
    changeCode,
    Types
  };