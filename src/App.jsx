import React from 'react';
import UserForm from "./components/UserForm/UserForm.jsx";
import User from "./components/user/User.jsx";

const App = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', gap:'30px'}}>
            <UserForm/>
            <User/>
        </div>
    );
};

export default App;