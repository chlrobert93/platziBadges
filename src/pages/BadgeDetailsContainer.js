import React from 'react';

import BadgeDetails from './BadgeDetails';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';

import api from '../api';


class BadgeDetailsContainer extends React.Component {
  //Inicializar estado
  state = {
    loading: true,
    error: null,
    data: undefined,
  };


  //Cuando el comonente ya esta listo traer datos
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null })

    //Acceder al id
    try {
       
      const data = await api.badges.read(
       
        this.props.match.params.badgeId
      );
      //Guardar los datos
      this.setState({ loading: false, data: data });
      //Trabajar con el error
    } catch (error) {
        this.setState({ loading: false, error:error })
    }
  };

  render() {
      if(this.state.loading){
          return <PageLoading />
      }

      if(this.state.error) {
          return <PageError  error={this.state.error} />
      }

      
    return (
      <BadgeDetails badge={this.state.data} />
    );
  }
}

export default BadgeDetailsContainer;