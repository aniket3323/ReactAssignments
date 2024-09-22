import PropTypes from 'prop-types'
function UserGreating(props){
    // First Method(if else operator)

    // if(props.isLoggedIn){
    //     return <h2>Welcome {props.username} </h2>
    // }else{
    //     return <h2>Please Log in to Continue</h2>
    // }
    //with using else use directly return statment
    //    return <h2>Please Log in to Continue</h2>

    //Second Method(conditional operator)
    const Welcome = <h2 className="welcome">Welcome {props.username} </h2>
    const loginPrompt=<h2 className="logIn">Please Log in to Continue</h2>

    return(props.isLoggedIn ? Welcome : loginPrompt)


}
UserGreating.prototypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreating.defaultProps={
    isLoggedIn:false,
    username:"Guest",
}
export default UserGreating