import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';


import api from '../api';



class Badges extends React.Component{
  
 state = {
   loading:true,
   error:null,
   data: undefined,
 };

 //Comenzar una petición a una api
componentDidMount () {
  this.fetchData()

  //Cada sierto tiempo la función se va llamar
  this.interValId = setInterval(this.fetchData, 5000);
};


componentWillUnmount(){
   clearInterval(this.interValId)
}

fetchData = async () =>{
  this.setState({ loading: true, error: null});

  try {
    const data = await api.badges.list();
    this.setState({ loading: false, data: data});
  }catch(error){
     this.setState({ loading: false, error: error });
  }
};


 
    render(){
       if(this.state.loading === true && this.state.data === undefined){
           return <PageLoading />; 
       }
          
       if(this.state.error){
         return <PageError error={this.state.error} />;
       }

        return (
            <React.Fragment>
                 <div className="Badges">
                      <div className="Badges__hero">
                         <div className="Badges__container">
                         <img className="Badges_conf-logo" 
                         src={confLogo} alt="Conf Logo" />
                         </div>
                      </div>
                 </div>

              <div className="Badges__container__element">
                <div className="Badges__container">
                    <div className="Badges__buttons">
                      <Link to="/Badges/new" className="btn btn-primary btn_newBadges">
                       New Badge                        
                      </Link> 
                    </div>

                    <div className="Badges__list">
                     <div className="Badges__container">
                       <BadgesList badges={this.state.data} />
                       {this.state.loading && <MiniLoader />}                         
                       </div>
                     </div>                   
                </div>
              </div>
            </React.Fragment>
        );
    }
}

export default Badges;