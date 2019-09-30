import { ASIDE_TRUE,ASIDE_FALSE } from './actionTypes';

/**
 * 小屏菜单栏切换  asideTrue asideFalse
 */
export const asideTrue=()=>({
    type:ASIDE_TRUE,
});

export const asideFalse=()=>({
    type:ASIDE_FALSE,
})