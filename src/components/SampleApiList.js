import React, { useState, useEffect } from 'react'
import SampleApiUnit from './SampleApiUnit'

const SampleApiList = ({ item }) => {
  const [listItem, setListItem] = useState({})

  useEffect(() => {
    setListItem(item)
  }, [item])

  return (
    <>
      <SampleApiUnit key={listItem.id} item={listItem} />
    </>
  )
}

export default SampleApiList