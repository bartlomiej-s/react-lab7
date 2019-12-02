import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      loaded: false
    }
  }

  getData() {
    let url= "http://localhost:3004/employees"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let employees = data.map((employee, index) => {
          let k = employee.isActive
          let col = "black"
          if (!k) col = "red"
          return (
            <div key={index}>
              <p style={{margin: "10px 0px 0px 100px", color: col}}>{employee.name} {employee.age}<br /></p>
            </div>
          )
        })
        this.setState({
          employees: employees,
          loaded: true
        });
      })
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const AppVar = (
     <div className="App">
        {this.state.loaded && <h1 style={{margin: "20px 0px 20px 50px"}}>Employees</h1>}
        {this.state.loaded ? this.state.employees : 'Loading...'}
     </div>
    )

    return AppVar
  }

}

export default App