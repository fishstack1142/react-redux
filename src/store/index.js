import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { tech: "React - Init" }

export const store = createStore(reducer, initialState);