import React from 'react'

function DashboardManager({dashboard:{ id, title, description, embed_url, created_at, updated_at, last_modified_by, is_published } }) {
  return (
        <tr key={id}>
            <td>{title}</td>
            <td>{description}</td>
            <td data-url={embed_url}><button>View</button></td>
            <td>{created_at}</td>
            <td>{updated_at}</td>
            <td>{last_modified_by}</td>
            <td>{is_published?'Yes':'No'}</td>
            <td><button>Edit</button></td>
        </tr>
  )
}
export default DashboardManager
