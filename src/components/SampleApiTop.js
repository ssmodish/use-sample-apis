import React, { useState, useEffect } from 'react'
import SampleApiList from './SampleApiList'


const SampleApiTop = () => {
  const [apiTop, setApiTop] = useState([])


  useEffect(() => {
      const baseURL = 'https://api.sampleapis.com/codingresources/codingResources'

    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => setApiTop(data))
      .catch(error => console.log(error))
  }, [])


  return (
    <>
      <h1>SampleApiTop</h1>
      {apiTop && apiTop.map((item) => <SampleApiList key={item.id} item={item}/>)}
    </>
  )
}

export default SampleApiTop