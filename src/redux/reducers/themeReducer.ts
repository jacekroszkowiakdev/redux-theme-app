import { State, Action } from "../interfaces"

const initialState: State = {
  theme: "LIGHT",
}

const themeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "LIGHT_MODE":
      return { ...state, theme: state.theme === "light" }
    case "DARK_MODE":
      return { ...state, theme: state.theme === "dark" }
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" }
    default:
      return state
  }
}

export default themeReducer
