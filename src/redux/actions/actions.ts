export const toggleTheme = () => {
  return {
    type: "TOGGLE_THEME",
  }
}

export const lightMode = () => ({
  type: "LIGHT_MODE",
})

export const darkMode = () => ({
  type: "DARK_MODE",
})
