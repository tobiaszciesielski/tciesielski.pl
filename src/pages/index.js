import React from 'react'
import styled from "styled-components"

const Title = styled.h1`
  color: #000;
  &::first-letter {
    color: #00FFA3;
  }
`

const IndexPage = () => {
  return <Title>Tobiasz Ciesielski</Title>
}

export default IndexPage
