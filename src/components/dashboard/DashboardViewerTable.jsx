import React from 'react'
import DashboardViewer from './DashboardViewer'

function DashboardViewerTable({dashboards}) {

  return (
    <div>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th class="text-center">Title</th>
              <th class="text-center">Description</th>
              <th class="text-center">Show dashboard</th>
              <th class="text-center">Created at</th>
              <th class="text-center">Updated at</th>
            </tr>
          </thead>
          <tbody>
            { dashboards.map(dashboard => <DashboardViewer key={dashboard.id} dashboard={dashboard} />) }
          </tbody>
        </table>
    </div>

  )
}

export default DashboardViewerTable
