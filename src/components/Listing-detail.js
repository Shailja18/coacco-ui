import React,{Component} from 'react';
import './Listing-detail.scss';
import M from 'materialize-css'
//C:\Users\Swift3\Documents\React Projects\co-acco-ui-dev\src\Images\ApartmentOne.jpg


export default class ListingDetail extends Component
{

  componentDidMount()
  {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var options= { fullWidth:true,    indicators:true};
      var instances = M.Carousel.init(elems,options);
    });
       
  
  }
   render(){
    return  (
        <div className="listcontainer">
         
            <div  id="topsection"className="pgdetail-header">
              <div className="section1">
              <h6>Rent/Bed</h6>
              <h5>Rs 8500 onwards</h5>
              </div>
              <div  className="section2">
                
                  <h5>Home Stay Pg</h5>
                  <h6>Occupancy Type: Double </h6>
                  
              </div>

              </div>
              
             
             <div className="pgdetails_middle">
              
               <ul className="tabs ">
               <li className="tab"><a  class="active" href="#test1">Property Details</a></li>
               <li className="tab"><a  href="#test2">Occupancy Options</a></li>
               <li className="tab"><a href="#test3"> Amenities</a></li>
               <li className="tab"><a href="#test4">Food and kitchen</a></li>
               <li className="tab"><a  href="#test5">Other Charges</a></li>
              <li className="tab"><a  href="#test6">House Rules</a></li>
              </ul>
             </div> 

              
             
          
          
          <div className="container carousel-slider" id="test1">
          
           <div className="carousel carousel-slider">            
           <a className="carousel-item" href="#one!"><img src="images/ApartmentOne.jpg"/></a>
           <a className="carousel-item" href="#two!"><img src="images/Apartment2.jpg"/></a>
           <a className="carousel-item" href="#three!"><img src="images/Apartment3.jpg"/></a>
           <a className="carousel-item" href="#four!"><img src="images/Apartment9.jpg"/></a>
           <a className="carousel-item" href="#five!"><img src="images/Apartment10.jpg"/></a>
           </div>   
           <div>
             <ul className="detail-info-group">
             <li className="detail-info-grid">
               <span>Deposit Amount</span>
               <h6>Rs 3000</h6>
               </li>
               <li className="detail-info-grid">
               <span>Notice Period</span>
               <h6>2 months</h6>
               </li>
               <li className="detail-info-grid">
               <span>AC Rooms</span>
               <h6>Yes</h6>
               </li>
             </ul>
            
             
           </div>
           <div className="contact-view">
           <a className="waves-effect red lighten-2  btn">Contact Owner</a>
           </div>
        </div>
        
        

       
       <div id="test2" className="container">
       <div className="detail-section-title">
        Occupancy Options</div>
        <div class="row">
        <div class="col s10 m4">
        <div className="card ">
        <div className="card-image">
          <img src="images/Apartment2.jpg"/>
          
        </div>
        <div className="card-content">
          <h5>Single Room</h5>
          
          <ul classname="occupancy-detail">
            <li className="occupancy-list-item">Rent &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rs 5000</li>
            <li className="occupancy-list-item">Room Dimension &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       10ft x 12ft</li>
            <li className="occupancy-list-item">Rooms Available &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       2</li>
            
            
            </ul>

         <p>This is very near to Uttam nagar west metro station. It is a corner property.  </p>
        </div>

      
        </div>
        </div>
        </div>
       </div>
       <div id="test3" className="container">
       <div className="detail-section-title">
        Comman Area And Amenities
        </div>
        <ul className="amenties-list">
          <li className="amenties-list-item">
          <img src="images/wifi.png"></img>
             <h6>Wifi</h6>
          </li>
            
          
          <li className="amenties-list-item"> 
          <img src="images/Powerbackup.png"></img>
          <h6> Power Backup</h6>
          </li> 
          <li className="amenties-list-item">
          <img src="images/parking.png"></img>
          <h6>2 Wheeler Parking</h6>
          </li>
          <li className="amenties-list-item">
          <img src="images/drink.png"></img>
          <h6>No Drinks</h6>
          </li>
          <li className="amenties-list-item">
          <img src="images/kitchen.png"></img>
          <h6>Fridge</h6>
          </li>
        </ul>
       
       </div>
       
       <div id="test4" className="container">
       <div className="detail-section-title">
        Food And Kitchen
        </div>
        <ul className="kitchen-list">  
          <li className="kitchen-list-item">
          <img src="images/Food.png"></img>
          <h6>Food Availability</h6>
          </li>
          <li className="kitchen-list-item">
          <img src="images/Restaurant.png"></img>
            <h6>Veg Only</h6> 
          </li>
        </ul>
        

       
       </div>
       <div id="test5" className="container">
       <div className="detail-section-title">
        Other Charges
        </div>
        <ul className="kitchen-list">  
          <li className="kitchen-list-item">
          <img src="images/Deposit.png"></img>
          <h6>Deposit</h6>
          </li>
          <li className="kitchen-list-item">
          <img src="images/Maintenance.png"></img>
          <h6>Maintanence</h6>
          </li>

          </ul>
       </div>
       
       <div  id="test6" className="container">
       <div className="detail-section-title">
        House Rules
        </div>
        <ul className="kitchen-list">  
          <li className="kitchen-list-item">
          <img src="images/Music.png"></img>
          <h6>Loud Music-No</h6>
          </li>
          <li className="kitchen-list-item">
          <img src="images/Visitors.png"></img>
          <h6>Visitors Allowed-Yes</h6>
          </li>
          </ul>
       </div>
       
       </div>
    )
   }
}