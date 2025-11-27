function handleClick(){
    console.log("Radha Krishna");
}

function handleHover(){
    console.log("You hovered over the Paragraph");
}

function DoubleClick(){
    console.log("You double clicked the button");
}

export default function Button(){
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleHover} >This is random paragraph
                It changes on hover.
                It checks the hover event.
                if you hover over this text, you will see a message in console.
            </p>
            <button onDoubleClick={DoubleClick}>Double Click me!</button>
        </div>
        
    );
}