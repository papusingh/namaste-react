import React from "react";
import ReactDOM from 'react-dom';

//rect element 1
const ele = <span>React element </span>

//react element 2
const heading = (
    <h1 className="head" tabIndex={5}>
        {ele}
        Namaste React using JSX 
    </h1>
);

//component 1
const Title = () => (
    <h1 className="title" tabIndex="5">
        Namaste React 
    </h1>
);

//React functional Component 2
const HeadingComponent = ()=> (
    <div>
        {heading}
        <Title />
        <h1 className="heaiding">Namaste React Functional Component</h1>
    </div>
    
);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent />);