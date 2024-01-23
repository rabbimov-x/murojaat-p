import {  updateData} from "../type/types";
import budgetData from "../../utils/by-spheres.structure.json"



const initionalState = {
    meta: "maet",
    into: 100,  
    location: "",
    data: budgetData,



    error: "",
    dataState: false,

}


export const budgetReduser  = (state = initionalState , action)=>{
    if(action.type === updateData){
        // console.log(action.data)
     state.data = action.data   
    return state
   
    }else
    return state
}