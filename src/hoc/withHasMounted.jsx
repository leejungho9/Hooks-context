import React from "react";


export default function withHasMounted(Component) {
    class NewComponent extends React.Component{

        state = {
            hasMounted : false,
        };

        render() {
            const {hasMounted} = this.state;
            return  <Component {...this.props} hasMounted={hasMounted}/>;
        }
        componentDidMount() {
            this.setState({hasMounted : true});
        }
    }
    
    NewComponent.displayName = `withHasMounted(${Component.name})`;

    return NewComponent;
}

// 만들어진 hasMounted라는 것을 Props로 내려보내주는 것
