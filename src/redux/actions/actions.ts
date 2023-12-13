export const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  }
}

export const lightMode = () => ({
  type: "DARK_MODE",
})

export const darkMode = () => ({
  type: "LIGHT_MODE",
})
