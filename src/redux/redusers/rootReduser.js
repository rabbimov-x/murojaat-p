import { combineReducers } from "redux"
import { budgetReduser } from "./budgetReduser"



export  const rootReduser = combineReducers({
    budget: budgetReduser,
 
})