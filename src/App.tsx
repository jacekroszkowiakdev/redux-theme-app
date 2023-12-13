import * as React from "react"
import { useSelector, useDispatch } from "react-redux"
import { State } from "./redux/interfaces"
import { lightTheme, darkTheme } from "./redux/themes"
import { lightMode, darkMode, toggleTheme } from "./redux/actions/actions"
import "./App.css"

const App: React.FC = () => {
  const appState = useSelector((state: State) => state.theme)
  const dispatch = useDispatch()

  console.log("State: ", appState)

  let appTheme = appState === "light" ? darkTheme : lightTheme

  return (
    <div
      className="App"
      style={{
        color: `${appTheme.color}`,
        backgroundColor: `${appTheme.backgroundColor}`,
        height: "200px",
      }}
    >
      <button onClick={() => dispatch(darkMode())}>Dark Theme</button>
      <button onClick={() => dispatch(lightMode())}>Light Theme</button>
      <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
    </div>
  )
}

export default App
