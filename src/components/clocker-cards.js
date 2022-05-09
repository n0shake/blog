import React from "react"
import styled from 'styled-components'

const RowDiv = styled.div`
  margin: 0 -5px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`

const ColumnDiv = styled.div`
  float: left;
  width: 33%;
  padding: 0 10px;
  @media (max-width: 600px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`

const CardDiv = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin: 5px;
  text-align: center;
  background-color: #f5f7f9;
  &:hover {
    background-color: #ede4e0;
  }
`

const ClockerCards = () => {
  return (
    <RowDiv>
      <ColumnDiv>
        <CardDiv>
          <h3> 🚅 </h3>
          <p> No need to open an app or a website to see world times.</p>
        </CardDiv>
      </ColumnDiv>

      <ColumnDiv>
        <CardDiv>
          <h3> 🧠 </h3>
          <p> Plan meetings across timezones in the future with the <b>Time Scroller.</b></p>
        </CardDiv>
      </ColumnDiv>
      
      <ColumnDiv>
        <CardDiv>
          <h3>📆</h3>
          <p>View your upcoming events right in your menubar.</p>
        </CardDiv>
      </ColumnDiv>
  
    </RowDiv>
  )
}

export default ClockerCards