import React, {Component} from 'react'
import commonModule from '../modules/commonModule'

class C extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 0,
      text: commonModule
    }
  }

  render(){
    const {counter, text} = this.state
    return (
      <div>
        {counter}
        <pre>
          {text}
        </pre>
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
