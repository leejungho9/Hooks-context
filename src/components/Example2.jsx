import React from "react";

export default function Example2() {

    const [count, setCount] = React.useState(0);
    //, [count, 함수이름]

    return ( 
        <div>
            <p>You cliked {count} times</p>
            <button onClick={click}>Click me</button>
        </div>
        );
        function click() {
            setCount(count + 1); 
        }
}