import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <div>
      <Link to="/home" title="Return to home page"> <h1>Top Laptop </h1> </Link>
      <Link to="/dashboard-manager"> Dashboards manager </Link>
      <Link to="/dashboard-viewer"> Dashboards viewer </Link>
      <Link to="/login"> Login </Link>
      <Link to="/logout"> Logout </Link>
    </div>
  )
}
