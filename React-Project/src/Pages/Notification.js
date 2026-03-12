import React from 'react';
// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Notificationbar from '../Components/Notificationbar';
import Notificationleft from '../Components/Notificationleft';

const propTypes = {};

const defaultProps = {};

/**
 * 
 */
const Notification = ({ searchQuery }) => {
console.log("✅ Notification page rendered with searchQuery:", searchQuery);
    return(
    <div>
        
                <div className="container-fluid mt-4">
                    <div className="row">
                        <div className='col'>
                            <Notificationleft></Notificationleft>
                        </div>
                        <div className="col">
                            <Notificationbar searchQuery={searchQuery}  />
                        </div>
                        <div className='col' style={{ width: "100px" }}>
                            
                        </div>
                    </div>
           
       
    </div>
    </div>
    );
}

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;
// #endregion

export default Notification;