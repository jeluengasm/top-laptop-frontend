import React from 'react'
import DashboardModal from './ShowDashboardModal'
import EditDashboardModal from './EditDashboardModal'
import DeleteDashboardModal from './DeleteDashboardModal'

function DashboardManager({dashboard:{ id, title, description, embed_url, created_at, updated_at, last_modified_by, is_published } }) {
  return (
        <tr key={id}>
            <td>{title}</td>
            <td>{description}</td>
            <td><DashboardModal embed_url={embed_url} title={title} id={id}></DashboardModal></td>
            <td>{created_at}</td>
            <td>{updated_at}</td>
            <td>{last_modified_by?last_modified_by:'-'}</td>
            <td class="text-center">{is_published?
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>
            :  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" class="bi bi-x-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/></svg>
            }</td>
            <td><EditDashboardModal dashboard={{id, title, description, embed_url, is_published}}></EditDashboardModal></td>
            <td><DeleteDashboardModal dashboard={{id, title}}></DeleteDashboardModal></td>
        </tr>
  )
}
export default DashboardManager
