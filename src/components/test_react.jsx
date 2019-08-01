import React, {Component} from 'react'

class C extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }
  }

  render(){
    const {counter} = this.state
    return (
      <div>
        {counter}
      </div>
    )
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      })
    }, 1000)
  }
}

export default C
