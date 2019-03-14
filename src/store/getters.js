const getters = {
  name: state => state.user.name,
  language: state => state.user.language,
  config: state => state.app.config,
  palette: state => state.app.config.palette,
  isLoading: state => state.app.isLoading
}
export default getters
