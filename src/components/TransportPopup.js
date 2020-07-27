import React,{Component} from 'react';
import './TransportPopup.scss';

export default class TransportPopup extends Component
{
    render(){

        return(
            <div className="menupop">
            <div className="z-depth-1">
            <table className="striped">
            
            <thead>
              <tr>
                  <th>Vechile  Type</th>
                  <th>Range</th>
                  
              </tr>
            </thead>
    
            <tbody>
              <tr>
                <td>4 Wheeler</td>
                <td>Upto 15km within city</td>
                
              </tr>
              </tbody>
              </table>
              </div>
            </div>
        )
    }

}