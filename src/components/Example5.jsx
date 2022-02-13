import React from "react";

export default function Example5() {

    const [count, setCount] = React.useState(0); //, [count, 함수이름]

    React.useEffect(() => {
        console.log("componentDidMount");

            return () => {
                //cleanup
                //componentWillUnmount

            };
        }, []); //[]넣으면 최초에만 시작한다.
    
    React.useEffect(() => {
        console.log("componentDidMount & componentDidUpdate by count", count );

            return() => {
                // cleanup
                console.log('cleanup by count' , count);
            }
        }, [count]); //[]넣으면 최초에만 시작한다.
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