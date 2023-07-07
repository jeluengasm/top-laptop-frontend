import React, { Component } from "react"
import Modal from "./DashboardModalContent.jsx"

function DashboardModal({id, title, embed_url}) {
    return (
      <div>
        <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target={`#dashboardModal${id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
        </svg> Open
        </button>

        <div class="modal fade" id={`dashboardModal${id}`} tabIndex="-1" aria-labelledby={`dashboardModal${id}Label`} aria-hidden="true">
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id={`dashboardModal${id}Label`}>View dashboard ({title})</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body d-flex justify-content-center">
                <div dangerouslySetInnerHTML={{__html: embed_url}}></div>
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

export default DashboardModal
