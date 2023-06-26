import API from '../api'

export const getAllManagerDashboards = () => {
  return API().get('dashboards/manager')
    .catch((error) => {
      alert(error.response.statusText)
    })
}

export const getAllViewerDashboards = () => {
  return API().get('dashboards/viewer')
    .catch((error) => {
      alert(error.response.statusText)
    })
}
