import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      loaded: false,
      age: 18,
      badphone: false,
      bademail: false
    }
    this.ageChange = this.ageChange.bind(this)
    this.submit = this.submit.bind(this)
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

  ageChange(evt) {
    this.setState({
      age: evt.target.value,
      bademail: false,
      badphone: false
    })
  }

  submit() {
    var phoneregex = /^\d{9}$/
    var emailregex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var phoneinput = document.getElementsByName('parentphoneno')[0]
    var emailinput = document.getElementsByName('email')[0]
    if(phoneinput)
    {
      if(phoneinput.value.match(phoneregex))
      {
        this.setState({
          badphone: false
        })
      }
      else
      {
        this.setState({
         badphone: true
        })
      }
    }
    if(emailinput)
    {
      if(emailinput.value.match(emailregex))
      {
        this.setState({
          bademail: false
        })
      }
      else
      {
       this.setState({
          bademail: true
        })
      }
    }
  }

  render() {
    const underageForm = (
      <div>
          <label style={{margin: "0px 0px 0px 10%"}}>Age</label>
          <input style={{margin: "0px 0px 40px 107px", width: "60%"}} type="number" name="age" value={this.state.age} onChange={this.ageChange}/>
          <br />
          <label style={{margin: "0px 0px 0px 10%"}}>Parent Name</label>
          <input style={{margin: "0px 0px 40px 44px", width: "60%"}} type="text" name="parentname" />
          <br />
          <label style={{margin: "0px 0px 0px 10%"}}>Parent Phone No.</label>
          <input style={{margin: "0px 0px 0px 13px", width: "60%"}} type="text" name="parentphoneno" />
          <p align="center">{this.state.badphone && "Wrong phone no."}</p>
          <br />
      </div>
    )
    const normalForm = (
      <div>
          <label style={{margin: "0px 0px 0px 10%"}}>Age</label>
          <input style={{margin: "0px 0px 40px 107px", width: "60%"}} type="number" name="age" value={this.state.age} onChange={this.ageChange}/>
          <br />
          <label style={{margin: "0px 0px 0px 10%"}}>Name</label>
          <input style={{margin: "0px 0px 40px 93px", width: "60%"}} type="text" name="name" />
          <br />
          <label style={{margin: "0px 0px 0px 10%"}}>Email</label>
          <input style={{margin: "0px 0px 0px 98px", width: "60%"}} type="text" name="email" />
          <p align="center">{this.state.bademail && "Wrong email"}</p>
          <br />
      </div>
    )
    const AppVar = (
      <div>
        <div className="App">
          {this.state.loaded && <h1 style={{margin: "20px 0px 20px 50px"}}>Employees</h1>}
          {this.state.loaded ? this.state.employees : 'Loading...'}
        </div>
        <div className="Divider">
          <br /><br />
          <hr width = "95%" />
          <br /><br />
        </div>
        <div className="Form">
          <form>
            {this.state.age<18 ? underageForm : normalForm}
            <input style={{margin: "0px 50px 25px 0px", float: "right"}} onClick={this.submit} type="button" value="Submit" />
          </form>
        </div>
      </div>
    )

    return AppVar
  }

}

export default App