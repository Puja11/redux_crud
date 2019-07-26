import React, {Component} from 'react'
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
class AddDetails extends Component {
    showModal(){
        console.log("here");
        document.getElementById("xyz").style.display="block !important";
        console.log("here1");
    }
    render() {
        
        return (
            <div>
                <div> <Button variant="secondary" onClick={this.showModal}>Add</Button></div>
                <Modal.Dialog id="xyz" >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { detail: state.details }
}

export default connect(mapStateToProps)(AddDetails)
