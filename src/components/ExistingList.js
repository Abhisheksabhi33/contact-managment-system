import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Existing = props => (
    <tr>
      <td>{props.existing.username}</td>
      <td>{props.existing.phonenumber}</td>
      <td>{props.existing.email}</td>
    
      <td>
        <Link to={"/new/open/"+props.existing._id}>Open</Link> | <Link to={"/new/"+props.existing._id}>Update</Link> | <a href="#" onClick={() => { props.deleteExisting(props.existing._id) }}>Delete</a>
      </td>
    </tr>
  )

class Existinglist extends Component {
  
    constructor(props) {
        super(props);
    
        this.deleteExisting = this.deleteExisting.bind(this)
    
        this.state = {existing: []};
    }
    
    componentDidMount() {
        axios.get('http://localhost:8000/existing/')
          .then(response => {
            this.setState({ existing: response.data })
          })
          .catch((error) => {
            console.log(error);
        })
    }
    
    deleteExisting(id) {
        axios.delete('http://localhost:8000/existing/'+id)
          .then(response => { console.log(response.data)});

        alert('Deleted Successfully!!!');
    
        this.setState({
            existing: this.state.existing.filter(el => el._id !== id)
        })
    }
    
    existingList() {
        return this.state.existing.map(currentexisting => {
          return <Existing existing={currentexisting} deleteExisting={this.deleteExisting} key={currentexisting._id}/>;
        })
    }

    render() {
        return (
          <div className = "container">
            <h3>Contact List</h3>
            <table className="table mt-3">
              <thead className="thead-light">
                <tr>
                  <th>Username</th>
                  <th>PhoneNumber</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.existingList() }
              </tbody>
            </table>
          </div>
        )
    }
}

export default Existinglist;
