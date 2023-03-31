export default function NumerosMegaSena(props){
    return (
        <span style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70px",
            width: "70px",
            borderRadius: "35px",
            backgroundColor: "#222",
            color: "#fff",
            fontSize: "2rem",
            margin: "20px"
        }}>
            {props.numero}
        </span>
    )
}