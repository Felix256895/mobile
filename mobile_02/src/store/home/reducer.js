import { SAVEFORMDATA, SAVEIMG ,CLEARDATA} from "./actionType";

//默认数据
let defaultState = {
  orderSum: "",
  name: "",
  phoneNo: "",
  imgPath: ""
};

//表单数据
export const formData = (state = defaultState, action = {}) => {
    switch(action.type){
        case SAVEFORMDATA :
            return {...state,...{[action.dataType]:action.value}};
        case SAVEIMG :
            return {...state,...{imgPath:action.path}};
        case CLEARDATA :
            return {...state,...defaultState};
        default :
            return state;
    }
};
