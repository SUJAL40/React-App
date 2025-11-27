function sayRadha(){
    console.log("Radha Krishna");
}

export default function Button(){
    return (
        <div>
            <button onClick={sayRadha}>Click Me!</button>
        </div>
        
    );
}