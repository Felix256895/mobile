import { GETPROUCTION,TOGGLESELECT,EDITPRODUCTION,CLEARSELECTED } from "./actionType";
import API from "@/api/api";


//初始化商品数据 保存redux
export const getProData=()=>{
    //返回函数， 异步dispatch
    return async dispatch=>{
        try{
            let result=await API.getProduction();
            result.map(item=>{
                item.selectStatus=true;
                item.selectNum=0;
                return item;
            });
            dispatch({
                type:GETPROUCTION,
                dataList:result,
            })
        }catch(error){
            console.log(error);
        }
    }
} 

//选择商品

export const togSelectPro=index=>{
    return {
        type:TOGGLESELECT,
        index,
    }
}

//编辑商品
export const editPro=(index,selectNum)=>{
    return {
        type:EDITPRODUCTION,
        index,
        selectNum,
    }
}

//清空商品

export const clearSelected=()=>{
    return {
        type:CLEARSELECTED,
    }
}