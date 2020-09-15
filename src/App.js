import React from 'react'

const MyContext = React.createContext();

class MyProvider extends React.Component{
  state = {
    name:"naveen nani",
    age:23
  }
  render(){
    return(
      <MyContext.Provider value={{
        Person: this.state,
        update: ()=> this.setState({
          age: this.state.age + 1})}}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

function App() {
 
  return (
      <MyProvider>
        <div>
          <Family />
        </div>
      </MyProvider>
  )
}

function Family(){
  return(
    <div>
      <Person />
    </div>
  )
}

function Person(){
  return(
      <MyContext.Consumer>
        {(context)=>(
        <React.Fragment>
          <h1>im inside {context.Person.name}</h1>
          <h1>{context.Person.age}</h1>
          <button onClick={context.update}>update</button>
        </React.Fragment>)}
      </MyContext.Consumer>
  )
}

export default App
