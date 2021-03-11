import React from 'react'
import Layout from './../components/Layout';
import styled from "styled-components"

const Title = styled.h1`
  color: #FFF;
  text-align: center;
  &::first-letter {
    color: #00FFA3;
  }
`

const IndexPage = () => {
  return <Layout>
    <Title>Tobiasz Ciesielski</Title>
  </Layout>
}

export default IndexPage
