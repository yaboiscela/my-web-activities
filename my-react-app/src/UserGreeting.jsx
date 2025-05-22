import PropTypes from 'prop-types';

function UserGreeting({username = "default", isLoggedin = false}){

    const welcomeMessage = <h2 className="welcome-message">Welcome, {username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log-in to continue</h2>

    return isLoggedin ?  welcomeMessage : loginPrompt;
}
UserGreeting.propTypes = {
    isLoggedin: PropTypes.bool,
    username: PropTypes.string,
};
export default UserGreeting;