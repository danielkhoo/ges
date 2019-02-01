import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import DegreeAnalyzer from './containers/DegreeAnalyzer/DegreeAnalyzer'
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <DegreeAnalyzer />
        </Layout>
      </div>
    )
  }
}

export default App
