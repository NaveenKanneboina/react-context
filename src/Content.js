import React from 'react'

const MyContext = React.createContext();

class MyProvider extends React.Component{
    state = {
        name:"naveen nani",
        age: 23,
    }
    render(){
    return(
        <MyContext.Provider value={this.state}>
            {this.props.children}
        </MyContext.Provider>
    )}
}

function Content() {
    return (
        <MyProvider>
            <div>
                <Family/>  
            </div>
        </MyProvider>
    )
}


function Family() {
    return (
        <div>
            <h1>im family</h1>
            <Person/>   
        </div>
    )
}

function Person(){
    return(
        <div>
            <MyContext.Consumer>
                {(content)=>(
                    <React.Fragment>
                        <h1>my name is {content.name}</h1>
                        <h1>age is {content.age}</h1>
                    </React.Fragment>
    )}
            </MyContext.Consumer>
        </div>
    )
}
    
export default Content