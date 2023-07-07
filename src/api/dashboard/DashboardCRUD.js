import API from '../api'

export const createDashboard = ({ title, description, embed_url, is_published }) => {
  return API().post('dashboards/manager', { title, description, embed_url, is_published })
    .catch((error) => {
      alert(error.response.statusText)
    })
}

export const getAllManagerDashboards = () => {
  return API().get('dashboards/manager')
    .catch((error) => {
      alert(error.response.statusText)
    })
}

export const partialUpdateDashboard = ({ id, title, description, embed_url, is_published }) => {
  return API().patch(`dashboards/manager/${id}`, { title, description, embed_url, is_published })
  .catch((error) => {
    alert(error.response.statusText)
    })
}

export const deleteDashboard = (id) => {
  return API().delete(`dashboards/manager/${id}`)
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
