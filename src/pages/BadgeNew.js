import React from 'react';

import './styles/BadgeNew.css'
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import api from '../api';

class BadgeNew extends React.Component{

   
    state = {  form: {
     firstName:'',
     lastName:'',
     email: '',
     jobTitle:'',
     twitter: '',

    }};

      
     //Necesario para que no se sobre esriba
    handleChange = e => {
      //const nextForm = this.state.form
      //nextForm[e.target.name] = e.target.value;

        this.setState({
            //form: nextForm,
            
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value,
               
            }
        });
    };

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null})

        try{
            await api.badges.create(this.state.form)
            this.setState({ loading: false})
        } catch (error){
            this.setState({ loading: false, error: error})
        }
    }

    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                   <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" /> 
                </div>


                <div className="container">
                    <div className="row">
                      <div className="col-6">
                         <Badge /*Para escribir en tiempo real*/
                         firstName={this.state.form.firstName || 'FIRST_NAME'}
                         lastName={this.state.form.lastName|| 'LAST_NAME'} 
                         twitter={this.state.form.twitter || 'TWITTER'}
                         jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                         email={this.state.form.email || 'EMAIL'}
                         avatarURL="https://assets.pokemon.com/assets//cms2-es-es/img/watch-pokemon-tv/_tiles/broadcaster/season23-boing-169.png"    />
                      </div>

                      <div className="col-6">
                         <BadgeForm  
                         onChange={this.handleChange}
                         onSubmit={this.handleSubmit}
                         formValues={this.state.form}
                          />
                      </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;