import {useSelector} from "react-redux";

const User = () => {
    const user = useSelector(state => state.user)
    return (
        <div style={{width:'200px', display:'flex', flexDirection:'column', gap:'20px', border:'4px solid black', padding:'20px'}}>
            <span>Name: {user.user.name}</span>
            <span>Age: {user.user.age}</span>
            <span>Gender: {user.user.gender}</span>
            <span>Profile: {user.user.profile}</span>
        </div>
    );
};

export default User;