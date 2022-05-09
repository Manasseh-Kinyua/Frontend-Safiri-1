
import React from 'react'



function Book(){
    return(

   
        <form onSubmit={this.handleSubmit}>
        <label>
          Vehicle
          <select>
            <option value="grapefruit">Bus</option>
            <option value="lime">Van</option>
            <option value="coconut">Matatu</option>
            
          </select>
        </label>
        <label>
          From
          <select>
            <option value="grapefruit">Nairobi</option>
            <option value="lime">Mombasa</option>
            <option value="coconut">Nakuru</option>
            <option value="mango">Kisumu</option>
          </select>
        </label>

        <label>
          To
          <select>
            <option value="grapefruit">Nairobi</option>
            <option value="lime">Nakuru</option>
            <option value="coconut">Mombasa</option>
            <option value="mango"></option>
          </select>
        </label>

        <label>
          Departure date
          <input placeholder='Username' type="date" id="name"/>
            
        </label>

        
        <input type="submit" value="Book a vehicle" />
      </form>

        
    )
}

export default Book;