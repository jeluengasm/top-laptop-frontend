import React from 'react'
import DashboardModal from './ShowDashboardModal'

function DashboardViewer({dashboard:{ id, title, description, embed_url, created_at, updated_at, last_modified_by, is_published } }) {
  return (
        <tr key={id}>
            <td>{title}</td>
            <td>{description}</td>
            <td data-url={embed_url}><DashboardModal url={embed_url}></DashboardModal></td>
        </tr>
  )
}
export default DashboardViewer
