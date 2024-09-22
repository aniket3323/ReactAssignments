import propTypes from  "prop-types"
function Student(props){
    return(
        <div className="std">
            <p>Name:{props.name} </p>
            <p>Age:{props.age} </p>
            <p>Student:{props.isStudent ? " Yes" : " No"} </p>
        </div>
    )
}
Student.propType={
name: propTypes.string,
age: propTypes.number,
isStudent: propTypes.bool
}
Student.defaultProps ={
    name:"Guest",
    age:100,
    isStudent:false

}
export default Student