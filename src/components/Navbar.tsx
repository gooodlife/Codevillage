import React, { Component } from 'react';
import copyright from '../icons/copyright.svg';
import bell from "../icons/bell.svg";
import direction from "../icons/direction.svg";
import avatar from "../icons/avatar.png";

export default class Dashboard extends Component {
    render() {
        return (
            <div className='dashBoardFlexContainer'>
              <nav className='navbar'>
                  <div className='headerDate'>
                
                            <h4 className='wednesday'>wednesday </h4> 
                        <h4 className='februrary'>
                            februrary 24,2021
                        </h4>
                  </div>
                  <div className='bell'>
                      <img src={bell} alt='bell'/>
                  </div>
                
                      <img src= {avatar} alt="Avatar" width='50px'  className='avatar'/>
                
                 
                   
                        <div className='fullName'>
                            <h1 className='name'>
                                Abdulsamii Ajala
                            </h1>
                            <h6 className='admin'>admin</h6>
                       
                        
                       </div>
                        <div className='direction'>
                                    <img src ={direction} alt ="direction"/>
                        </div>
              </nav>
            </div>
        )
    }
}