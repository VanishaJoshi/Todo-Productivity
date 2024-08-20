import React from 'react';
import './styles.css'

const ProgressComponent = ({ completed }) => {
   
    
    
      return (
        <div>
          <div className="progress-bar">
            <div
              className="progress-bar__filler"
              style={{ width: `${completed}%` } }
            />
          </div>
          <span className="progress-bar__label">{`${completed}%`}</span>
          
        </div>
      );
    };
    
    
    


export default ProgressComponent;