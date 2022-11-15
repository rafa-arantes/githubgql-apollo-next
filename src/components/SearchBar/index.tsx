import React, { ChangeEvent, FC } from 'react'
import FlexContainer from '../styled/FlexContainer'

interface IProps {
  searchByTerm: (e: ChangeEvent<HTMLInputElement>) => void
  searchByIssueState: (e: ChangeEvent<HTMLSelectElement>) => void
}

/**
* @author
* @function @SearchBar
**/

export const SearchBar:FC<IProps> = ({searchByTerm, searchByIssueState}) => {
  return (
    <FlexContainer flexWrap="wrap" justifyContent="center">
      <input onChange={searchByTerm} />
      <select onChange={searchByIssueState}>
        <option value="OPEN">OPEN</option>
        <option value="CLOSED">CLOSED</option>
      </select>
    </FlexContainer>
   )
 }
