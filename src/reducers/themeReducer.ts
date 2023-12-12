interface InitialState {
  theme: Theme
}

interface Theme {
  name: "LIGHT" | "DARK"
  color: string
  backgroundColor: string
}

interface Action {
  type: string
}

const initialState: InitialState = {
  theme: { name: "LIGHT", color: "black", backgroundColor: "white" },
}

const themeReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action }
    default:
      return state
  }
}

export default themeReducer
