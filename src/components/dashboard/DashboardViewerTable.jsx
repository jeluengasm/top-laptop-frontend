import React from 'react'
import DashboardViewer from './DashboardViewer'

function DashboardViewerTable({dashboards}) {

  return (
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Show dashboard</th>
              <th>Created at</th>
              <th>Updated at</th>
            </tr>
          </thead>
          <tbody>
            { dashboards.map(dashboard => <DashboardViewer key={dashboard.id} dashboard={dashboard} />) }
          </tbody>
        </table>
  )
}

export default DashboardViewerTable
