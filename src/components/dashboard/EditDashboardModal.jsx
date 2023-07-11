import React from "react"
import { useForm } from 'react-hook-form'
import { partialUpdateDashboard } from '../../api/dashboard/DashboardCRUD'

function EditDashboardModal({ dashboard }) {
    async function updateDashboard({ id, title, description, embed_url, is_published }) {
      await partialUpdateDashboard({ id, title, description, embed_url, is_published })
        .then((result) => {
          window.location.href = '/dashboard-manager'
        })
        .catch((err) => {
          window.location.href = '/dashboard-manager'
        })
    }
    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit(data => {
      updateDashboard(data)
    })

    return (
      <div>
        <button type="button" class="btn btn-warning btn-lg" data-bs-toggle="modal" data-bs-target={`#editDashboard${dashboard.id}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
          </svg> Edit
        </button>

        <div class="modal fade" id={`editDashboard${dashboard.id}`} tabIndex="-1" aria-labelledby={`editDashboard${dashboard.id}Label`} aria-hidden="true">
          <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id={`editDashboard${dashboard.id}Label`}>Edit dashboard ({dashboard.title})</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body justify-content-center">
                <form onSubmit={onSubmit}>
                  <div class="mb-3">
                    <label for="title" class="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      class="form-control"
                      defaultValue={dashboard.title}
                      {...register('title', { required: true })}
                    />
                  </div>
                  <div class="mb-3">
                    <input
                    type="hidden"
                    name="id"
                    value={dashboard.id}
                    {...register('id', { required: true })}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="description" class="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      class="form-control"
                      rows="6"
                      defaultValue={dashboard.description}
                      {...register('description', { required: true })}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="iframe" class="form-label">
                      Inline frame
                    </label>
                    <textarea
                      type="text"
                      name="iframe"
                      class="form-control"
                      defaultValue={dashboard.embed_url}
                      {...register('embed_url', { required: true })}
                    />
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id={`flexSwitchCheck_${dashboard.id}}`}
                      defaultChecked={dashboard.is_published}
                      {...register('is_published', { required: false })}
                    />
                    <label class="form-check-label" for={`flexSwitchCheck_${dashboard.id}`}> Is published?</label>
                  </div>
                  <div class="mb-3">
                    <br />
                  <button type="submit" class="btn btn-primary">Edit dashboard</button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default EditDashboardModal
