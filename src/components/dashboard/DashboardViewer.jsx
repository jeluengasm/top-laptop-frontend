import React from 'react'
import DashboardModal from './ShowDashboardModal'

function DashboardViewer({dashboard:{ id, title, description, embed_url, created_at, updated_at, last_modified_by, is_published } }) {
  return (
        <tr key={id}>
            <td>{title}</td>
            <td>{description}</td>
            <td><DashboardModal embed_url={embed_url} title={title} id={id}></DashboardModal></td>
            <td>{created_at}</td>
            <td>{updated_at}</td>
        </tr>
  )
}
export default DashboardViewer
