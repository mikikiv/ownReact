import React, { useState } from 'react'
import PropTypes from 'prop-types'
import WrapperForm from './WrapperForm'
import History from './History'
import StoredData from '../data/StoredData'

function Wrapper() {
  const [endpoints, setEndpoints] = useState(StoredData)
  endpoints.sort((a, b) => a[0] - b[0])
  const makeEndpoint = ([key, value]) => {
    // const wrapperEndpoint = `https://zl6t6xxpc2.execute-api.us-west-2.amazonaws.com/wrappers/wrapper-v2?site=`
    // const key = localStorage.length + 1
    localStorage.setItem(key, value)
    StoredData.push([key, value])
    setEndpoints((endpoints) => [...endpoints, StoredData])
  }

  return (
    <div>
      <WrapperForm handleSubmit={makeEndpoint} />
      <History>{endpoints}</History>
    </div>
  )
}

Wrapper.propTypes = {}

export default Wrapper
