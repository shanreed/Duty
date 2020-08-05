import React, { useState } from 'react';
import { axiosWithAuth } from '../auth/axiosAuth';






class AssignerHome extends React.Component {
    state = {
        tasks: []
    }
    


    componentDidMount() {
        this.getTasks();
      }

    getTasks = () => {
        const token = window.localStorage.getItem('token')
        
        axiosWithAuth()
      .get('/assignertasks/1/tasks', token)
      .then(res => {
          console.log(res)
        // res.data.data
        // this.setState({
        //   tasks: res.data.data.filter( task =>
        //       (price.location === 'US' ||
        //         price.location === 'State of Hawaii') &&
        //       price.type === 'Gasoline - Regular'
        //   )
        // });
        // this.setState({
        //   gasPrices: res.data.data
        //     .filter(
        //       price =>
        //         price.location === 'US' || price.location === 'State of Hawaii'
        //     )
        //     .filter(price => price.type === 'Gasoline - Regular')
        // });
      })
      .catch(err => console.log(err));
  };
    

    render() {
        return (
            <>
            <h1>Welcome, To the user's home</h1>
            </>
        )
}
}

export default AssignerHome;
