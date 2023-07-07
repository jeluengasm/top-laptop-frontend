import React from 'react'
import DashboardManager from './DashboardManager'
import CreateDashboardModal from './CreateDashboardModal'

function DashboardManagerTable({dashboards}) {

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
            <th class="text-center">Recently edited by</th>
            <th class="text-center">Is published?</th>
            <th class="text-center">Modify</th>
            <th class="text-center">Delete</th>
          </tr>
        </thead>
        <tbody>
          { dashboards.map(dashboard => <DashboardManager key={dashboard.id} dashboard={dashboard} />) }
        </tbody>
      </table>
      <CreateDashboardModal></CreateDashboardModal>
    </div>
  )
}

export default DashboardManagerTable
