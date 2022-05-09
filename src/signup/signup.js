import React from 'react'



function Main(){
    return(
        <form className='signup' >
            <div className='user'>
                <label htmlFor='name'>USERNAME</label>
                <input placeholder='Username' type="text" id="name"/>
            </div>

            <div className='email'>
                <label htmlFor='name'>EMAIL</label>
                <input  placeholder='Email' type="text" id="name"/>
            </div>

            <div className='pass'>
                <label htmlFor='name'>PASSWORD</label>
                <input  placeholder='Password' type="password" id="name"/>
            </div>

            <div className='pass'>
                <label htmlFor='name'>CONFIRM PASSWORD</label>
                <input placeholder='Password' type="text" id="name"/>
            </div>

            <div className='form-actions'>
                <button type='submit' >Sign Up</button>
            </div>
        </form>

        
    )
}

export default Main;