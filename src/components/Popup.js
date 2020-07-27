
import React,{Component} from 'react';
import './Popup.scss';
export default class Popup extends Component
{
    render(){

        return(
            <div className="menupop">
            <div className="z-depth-1">
            <table className="striped">
            
            <thead>
              <tr>
                  <th>Meals</th>
                  <th>Timing</th>
                  <th>Items</th>
              </tr>
            </thead>
    
            <tbody>
              <tr>
                <td>Breakfast</td>
                <td>8:00AM to 11AM</td>
                <td>Poha,Sandwiches,Paratha</td>
              </tr>
              <tr>
                <td>Lunch</td>
                <td>1:00PM to 3PM</td>
                <td>Rajma,Chappati,Potato-Beans Fry</td>
              </tr>
              <tr>
                <td>Dinner</td>
                <td>9:00PM to 11:30PM</td>
                <td>Rajma,Chappati,Potato-Beans Fry</td>
              </tr>
              </tbody>
              </table>
              </div>
            </div>
        )
    }

}