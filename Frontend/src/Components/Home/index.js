import {Component} from 'react'

import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {data: []}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const answer = await fetch('http://localhost:3001')
    if (answer.ok) {
      const data = await answer.json()
      this.setState({data})
    }
  }

  render() {
    const {data} = this.state

    return (
      <div>
        <Header />
        <img
          src="https://img.freepik.com/free-photo/beautiful-view-green-fields-sunrise-captured-canggu-bali_181624-14146.jpg"
          className="home-image"
        />
      </div>
    )
  }
}

export default Home
