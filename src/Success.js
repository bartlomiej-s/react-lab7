import React from 'react'

class Success extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const AppVar = (
      <div style={{position: "fixed", margin: " -23px 0px 0px -372px", width: "744px", height: "46px", top: "50%", left: "50%"}}>
        <h1 align="center">You have successfully submitted your form</h1>
      </div>
    )

    return AppVar
  }

}

export default Success