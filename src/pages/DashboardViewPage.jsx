import { useEffect, useState } from 'react'
import {getAllViewerDashboards} from '../api/dashboard/DashboardCRUD'
import DashboardViewerTable from '../components/dashboard/DashboardViewerTable'

export function DashboardViewPage() {
  const [dashboards, setDashboards] = useState([])

  useEffect(() => {
    async function getDashboards() {
      await getAllViewerDashboards()
        .then((result) => {
          setDashboards(result.data)
        })
    }
    getDashboards()
  }, [])

  return (
    <div>
      <br />
      <h1>Dashboard Viewer</h1>
      <br />
      <div>
        <DashboardViewerTable dashboards={dashboards} />
      </div>
    </div>
  )
}
