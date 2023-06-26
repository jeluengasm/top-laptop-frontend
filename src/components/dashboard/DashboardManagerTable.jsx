import React from 'react'
import DashboardManager from './DashboardManager'

function DashboardManagerTable({dashboards}) {

  return (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Embed link</th>
              <th>Created at</th>
              <th>Updated at</th>
              <th>Recently edited by</th>
              <th>Is published?</th>
              <th>Modify dashboard</th>
            </tr>
          </thead>
          <tbody>
            { dashboards.map(dashboard => <DashboardManager key={dashboard.id} dashboard={dashboard} />) }
          </tbody>
        </table>
  )
}

export default DashboardManagerTable
