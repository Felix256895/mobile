import { SAVEFORMDATA, SAVEIMG ,CLEARDATA } from './actionType';

/**
 * 保存表单数据
 * @param {*} value 
 * @param {*} dataType 
 */
export const saveFormData=(value,dataType)=>{
    return {
        type:SAVEFORMDATA,
        value,
        dataType,
    }
}

/**
 * 保存图片地址
 * @param {*} path 
 */
export const saveImg=(path)=>{
    return {
        type:SAVEIMG,
        path,
    }
}

/**
 * 清空数据
 */
export const clearData=()=>{
    return {
        type:CLEARDATA,
    }
}