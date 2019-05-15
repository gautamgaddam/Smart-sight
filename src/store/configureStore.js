import { combineReducers } from "redux";
import Reducer from "../Reducer/reducer";
import BuildingReducer from "../Reducer/Buildings"


const rootReducers =
        combineReducers({
            buildings: BuildingReducer,
            authorizeReducer: Reducer
        });
    
        export default rootReducers;
