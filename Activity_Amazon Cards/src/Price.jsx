export default function Price({oldPrice, newPrice}) {
    let oldStyle = {
        textDecorationLine: 'line-through',
    };
    let newStyle = {
        fontWeight: 'bold',
    };
    let styles={
        backgroundColor: '#35af4eff',
        height:"30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
    }
    return (
        <div style={styles}>
            <span style={oldStyle}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style={newStyle}>{newPrice}</span>
        </div>
    );
}