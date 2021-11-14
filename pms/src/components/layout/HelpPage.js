import React, { Component, Fragment } from "react";
import {Link} from "react-router-dom";

class HelpPage extends Component {
  constructor(props){
    super(props);
    this.state = { feedback:{
      name: '',
      email: '',
      subject: '',
      comment: ''
    }
  };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const feedbackchange = this.state.feedback;
    feedbackchange[event.target.name] = event.target.value;
    this.setState({feedback: feedbackchange});
  };


  handleSubmit (event) {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/api/feeback/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state.feedback),
      }).then(
        data => {
          console.log(data);
        }
      ).catch(error => console.error(error))
  }
  
  render() { 
    return ( 
    <Fragment>
      <form onSubmit={this.handleSubmit}>
        <div className="container p-3 my-3 bg-gold">
          FEEDBACK
        </div>

        <br/>

        <div className="container">
          <label htmlFor="name" className="btn bg-gold rounded-pill text-light mt-4">
            Name 
            <input name="name" id="name" type="text" value={this.state.feedback.name} onChange={this.handleChange}/>
          </label>
          <br/>
          <label htmlFor="email" className="btn bg-gold rounded-pill text-light mt-4">
            Email 
            <input name="email" id="email" type="email" value={this.state.feedback.email} onChange={this.handleChange}/>
          </label>
          <br/>
          <label htmlFor="subject" className="btn bg-gold rounded-pill text-light mt-4">
            Subject 
            <input name="subject" id="subject" type="text" value={this.state.feedback.subject} onChange={this.handleChange}/>
          </label>
          <br/>

          <label htmlFor="comment">
          Comment:
          <textarea name="comment" id="comment" value={this.state.feedback.comment} onChange={this.handleChange} />
          </label>
          <br/>


          <input className="btn bg-gold rounded-pill text-light mt-4" type="submit" value="Submit"/>
          <Link to="/dashboard">
          <button className="btn bg-gold rounded-pill text-light mt-4">Back</button>
          </Link>
        </div>
      </form>
    </Fragment>  
    );
  }
}
 
export default HelpPage;
