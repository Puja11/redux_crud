import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

class ShowDetails extends Component {
    renderList() {
        return this.props.details.map( (detail,index) => {
            return (
                <tr key={index} >
                    <td>{detail.name}</td>
                    <td>{detail.lastName}</td>
                    <td>{detail.rollNo}</td>
                    <td>{detail.email}</td>
                    
                    <td><Button type="submit">Edit</Button> <Button type="submit">Delete</Button></td>
                  
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
            <Table responsive>
              <thead>
                <tr key="0">
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Roll No</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {this.renderList()}
            </tbody>
            </Table>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    //return bindActionCreators({ selectBook: selectBookAction }, dispatch)
}

function mapStateToProps(state) {
    return { details: state.details }
}

export default connect(mapStateToProps, null)(ShowDetails)