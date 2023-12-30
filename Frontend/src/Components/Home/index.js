import {Component} from 'react'

import Header from '../Header'

class Home extends Component {
  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    try {
      const answer = await fetch('http://localhost:3001')
      if (!answer.ok) {
        throw new Error(`HTTP error! Status: ${answer.status}`)
      }
      const data = await answer.json()
      console.log(data.message)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default Home
