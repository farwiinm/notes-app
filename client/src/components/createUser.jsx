import React from 'react';

const CreateUser = () => {
    return ( 
        <>
        <input type="text" name="email" placeholder='E-mail' className="emailInput" required />
        <input type="password" name='password' className="password" placeholder='Password'/>
        <input type='submit' value='Create user'></input>
        </>
    );
}
 
export default CreateUser;