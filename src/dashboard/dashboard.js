import React, { Component } from 'react';
import './Dashboard.css'
import bus1 from './dashboard-assets/bus1.jpeg';
import bus2 from './dashboard-assets/bus2.jpg';
import bus4 from './dashboard-assets/bus3.jpg';

export default function Dashboard(){
    return(
        <div className='container'>
            <div className='row'>
                {/* <h1>hellow wold</h1> */}
                <div className='col-sm-4 sidebar'>
                <h1>item 1</h1>
                <h1>item 1</h1>
                <h1>item 1</h1>
                <h1>item 1</h1>
                </div>
                <div className='col sm-8 content'>
                    <img src={bus2} />
                    <div className='content-cards'>
                    <img src={bus1} />
                    <img src={bus4} />

                </div>
              
            </div>
            </div>
            <div className='row'>
                

            </div>
            
        </div>

                            

        


    )
}
