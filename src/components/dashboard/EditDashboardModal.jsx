import React, { Component } from "react"
import { useForm } from 'react-hook-form'
import Modal from "./DashboardModalContent.jsx"

class DashboardModal extends Component {
  constructor() {
    super()
    this.state = {
      show: false
    }
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  showModal = () => {
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }
  render() {
    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div>
            <form>
              <div>
                <label htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                // {...register('email', { required: true })}
                />
              </div>
              <div>
                <label htmlFor="description">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                // {...register('email', { required: true })}
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  data-toggle="toggle"
                  data-onstyle="success" />
              </div>
              <div>
                <input type="submit" value="Save" />
              </div>
            </form>
          </div>
        </Modal>
        <button type="button" onClick={this.showModal}>Edit</button>
      </div>
    )
  }
}

export default DashboardModal
