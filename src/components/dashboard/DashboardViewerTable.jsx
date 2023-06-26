import React from 'react'
import DashboardViewer from './DashboardViewer'

function DashboardViewerTable({dashboards}) {

  return (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Embed link</th>
            </tr>
          </thead>
          <tbody>
            { dashboards.map(dashboard => <DashboardViewer key={dashboard.id} dashboard={dashboard} />) }
          </tbody>
        </table>
  )
}

export default DashboardViewerTable
