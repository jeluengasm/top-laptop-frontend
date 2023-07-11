import { useEffect, useState } from 'react'
import {getAllManagerDashboards} from '../api/dashboard/DashboardCRUD'
import DashboardManagerTable from '../components/dashboard/DashboardManagerTable'
import styles from './styles/LoginPage.module.css'

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
      <div className={styles["table-dashboard"]}>
        <br />
        <h1>Dashboard Manager</h1>
        <br />
        <DashboardManagerTable dashboards={dashboards} />
      </div>
    </div>
  )
}
