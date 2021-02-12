import React, { useState, useEffect } from 'react'

const SampleApiUnit = ({item}) => {
  const [unit, setUnit] = useState({})

  useEffect(() => {
    setUnit(item)
  }, [item])

  console.log(item)

  return (
    <>
      <h3>
        <a href={unit.url}>{unit.description}</a>
      </h3>
    </>
  )
}

export default SampleApiUnit