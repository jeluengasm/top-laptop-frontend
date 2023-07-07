import { useEffect, useState } from 'react'
import {getAllManagerDashboards} from '../api/dashboard/DashboardCRUD'
import DashboardManagerTable from '../components/dashboard/DashboardManagerTable'

export function DashboardManagerPage() {
  const [dashboards, setDashboards] = useState([])

  useEffect(() => {
    async function getDashboards() {
      await getAllManagerDashboards()
        .then((result) => {
          setDashboards(result.data)
        })
    }
    getDashboards()
  }, [])

  return (
    <div>
      <br />
      <h1>Dashboard Manager</h1>
      <br />
      <div>
        <DashboardManagerTable dashboards={dashboards} />
      </div>
    </div>
  )
}
