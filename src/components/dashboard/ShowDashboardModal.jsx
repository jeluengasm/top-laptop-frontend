import React, { Component } from "react"
import Modal from "./DashboardModalContent.jsx"

class DashboardModal extends Component{
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
          <div dangerouslySetInnerHTML={{__html: this.props.embed_url}}></div>
        </Modal>
        <button type="button" onClick={this.showModal}>Open</button>
      </div>
    )
  }
}

export default DashboardModal
