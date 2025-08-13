import React from 'react'
import { useParams } from 'react-router-dom'

function AboutDetail() {

  const {id} = useParams()

  return (
    <div>{id}번의 AboutDetail 페이지</div>
  )
}

export default AboutDetail