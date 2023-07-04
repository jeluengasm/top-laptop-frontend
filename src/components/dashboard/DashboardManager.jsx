import React from 'react'
import DashboardModal from './ShowDashboardModal'
import EditDashboardModal from './EditDashboardModal'

function DashboardManager({dashboard:{ id, title, description, embed_url, created_at, updated_at, last_modified_by, is_published } }) {
  return (
        <tr key={id}>
            <td>{title}</td>
            <td>{description}</td>
            <td><DashboardModal embed_url={embed_url}></DashboardModal></td>
            <td>{created_at}</td>
            <td>{updated_at}</td>
            <td>{last_modified_by}</td>
            <td>{is_published?'Yes':'No'}</td>
            <td><EditDashboardModal dashboard={{id, title, description, embed_url, is_published}}></EditDashboardModal></td>
        </tr>
  )
}
export default DashboardManager
