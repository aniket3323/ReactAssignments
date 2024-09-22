
function Button(){
    const styles = {
        backgroundColor: "rgb(205, 121, 12)",
        textAlign: "center",
        marginLeft:"20px",
        marginTop: "10px",
        border:"none",
        color: "aliceblue",
        padding: "10px 20px",
        cursor: "pointer",
        borderRadius: "5px",
    }
    return (
    <button style={styles}>Click Me</button>
    );
}
export default Button