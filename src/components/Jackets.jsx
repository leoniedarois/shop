import React from 'react'
import fakeJackets from "../dumpData/articleData"
import styled from 'styled-components'

const WrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const JacketStyled = styled.div `
  background: #eeeeee;
  flex: 0 0 calc(33% - 60px);
  margin: 20px;
  padding: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
      flex: 0 0 calc(100% - 40px);
  }
`

const ImgStyled = styled.img `
  max-width: 100%;
`

const PriceStyled = styled.div `
  font-weight: bold;
`

const Jackets = () => {
  return (
    <WrapperStyled>
      {fakeJackets.map((jacket, index) => {
        return (
         <JacketStyled key={index}>
            <ImgStyled src={`${jacket.url}`} alt=''/>
            <div> {jacket.name} </div>
            <PriceStyled> {jacket.price} €</PriceStyled>
            <div>Color : {jacket.color} </div>
          </JacketStyled>

        )
      })
      }
    </WrapperStyled>
    )
}

export default Jackets