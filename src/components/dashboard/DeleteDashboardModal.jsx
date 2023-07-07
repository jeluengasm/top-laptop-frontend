import React from "react"
import { useForm } from 'react-hook-form'
import { deleteDashboard } from '../../api/dashboard/DashboardCRUD'

function DeleteDashboardModal ({ dashboard }) {
  async function removeDashboard({ id }) {
    await deleteDashboard(id)
      .then((result) => {
        window.location.href = '/dashboard-manager'
      })
      .catch((err) => {
        window.location.href = '/dashboard-manager'
      })
  }
  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit(data => {
    console.log(data)
    removeDashboard(data)
  })

  return (
      <div>
        <button type="button" class="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target={`#deleteDashboard${dashboard.id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg> Delete
        </button>

        <div class="modal fade" id={`deleteDashboard${dashboard.id}`} tabIndex="-1" aria-labelledby={`deleteDashboard${dashboard.id}Label`} aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id={`deleteDashboard${dashboard.id}Label`}>Delete dashboard ({dashboard.title})</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body justify-content-center text-center">
                <h5>Are you sure that you want to delete the dashboard &rdquo;{dashboard.title}&rdquo;? </h5>
                <br />
                <h4> <strong>This option cannot be undone.</strong></h4>
              </div>
              <form onSubmit={onSubmit}>
                <input
                  type="hidden"
                  name="id"
                  value={dashboard.id}
                  {...register('id', { required: true })}
                />
              <div class="modal-footer">
                <button type="submit" class="btn btn-danger">Delete</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default DeleteDashboardModal
