 import React from 'react';

class BadgeForm extends React.Component{
    state = {
        firstName:"",
        jobTitle: 'Designer',
        email:'',
        lastName:'',
        twitter: '',
    };

    hanleChange =   e =>{
    /*  console.log({
          name: e.target.name,
          value: e.target.value});
    };*/

    //Le vamos a pasar un objecto con la información que queremos guardar
    this.setState({
        //firstName: e.target.value,s
        //Lo que va ser es que si es el imput del (name) quien llama esta función
        //Se va guardar la información dentro de la llave (name)
        [e.target.name]: e.target.value,
    });
};

    handleClick = e => {
        console.log("Button was clicked");
    };

    handleSubmit = e =>{
      e.preventDefault();
      console.log("Form was submitted");
      //Leer los valores
      console.log(this.state);
    };

    //Convertirlos a controlados 
    //Va despegar cada uno de los input
    //This.state ---para leer el stado 
    //value={this.state.firstName} />    

    render(){
        return (
            <div>
                <h1>New Attendant</h1>

                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label>First Name</label>
                    <input 
                    onChange={this.hanleChange} 
                    className="form-control"    
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={this.state.firstName} />              
                  </div>

                  <div className="form-group">
                      <label>Last Name</label>
                      <input
                      onChange={this.hanleChange}
                      className="form-control"
                      type="text"
                      placeholder="Enter your last name"
                      name="lastName" 
                      value={this.state.lastName}/>      
                  </div>

                  <div className="form-group">
                      <label>Email</label>
                      <input
                      onChange={this.hanleChange}
                      className="form-control"
                      type="email"
                      placeholder="Enter your email"
                      name="email" 
                      value={this.state.email}/>
                  </div>


                  <div className="form-group">
                      <label>JobTitle</label>
                      <input
                      onChange={this.hanleChange}
                      className="form-control"
                      type="text"
                      placeholder="Enter your jobTitle"
                      name="jobTitle" 
                      value={this.state.jobTitle}/>
                  </div>

                  <div className="form-group">
                      <label>Twitter</label>
                      <input
                      onChange={this.hanleChange}
                      className="form-control"
                      type="text"
                      placeholder="Enter your twitter"
                      name="twitter" 
                      value={this.state.twitter}/>
                  </div>

                  <button  onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;