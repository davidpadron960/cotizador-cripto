import React from 'react'
import styled from '@emotion/styled'

const Div = styled.div`
    background-color: #B7322C;
    color: white;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Lato',sans-serif;
    font-weight: bold;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Div>{children}</Div>
  )
}

export default Error