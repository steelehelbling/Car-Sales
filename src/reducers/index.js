import { combineReducers } from "redux";
import priceupdate from "./priceupdate";
import oncar from "./oncar";
import addlist from "./addlist";

export default combineReducers({ priceupdate, oncar, addlist });
