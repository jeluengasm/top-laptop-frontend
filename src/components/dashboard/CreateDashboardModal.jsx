import React from "react"
import { useForm } from 'react-hook-form'
import { createDashboard } from '../../api/dashboard/DashboardCRUD'

function CreateDashboardModal(){
    async function newDashboard({ title, description, embed_url, is_published }) {
      await createDashboard({ title, description, embed_url, is_published })
        .then((result) => {
          window.location.href = '/dashboard-manager'
        })
        .catch((err) => {
          window.location.href = '/dashboard-manager'
        })
    }
    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit(data => {
      newDashboard(data)
    })

    return (
      <div>
        <button type="button" class="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target={`#CreateDashboard`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
        </svg> Create new dashboard
        </button>

        <div class="modal fade" id={`CreateDashboard`} tabIndex="-1" aria-labelledby={`CreateDashboardLabel`} aria-hidden="true">
          <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id={`CreateDashboardLabel`}>Create dashboard</h5>
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
                      {...register('title', { required: true })}
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
                      {...register('embed_url', { required: true })}
                    />
                  </div>
                  <div class="form-check form-switch">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheck"
                      {...register('is_published', { required: false })}
                    />
                    <label class="form-check-label" for="flexSwitchCheck"> Is published?</label>
                  </div>
                  <div class="mb-3">
                  <button type="submit" class="btn btn-success">Create dashboard</button>
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

export default CreateDashboardModal
