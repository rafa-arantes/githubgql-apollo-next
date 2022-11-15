import React, { ChangeEvent, FC } from 'react'
import Card from '../styled/Card'
import FlexContainer from '../styled/FlexContainer'
import { Spacer } from '../styled/Spacer'
import { Input, Select } from './styles'

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
      <Spacer verticalSpacing='large'/>
      <Card noPadding>
        <Input onChange={searchByTerm} placeholder="Search by term..."/>
        <Select onChange={searchByIssueState}>
          <option value="OPEN">Open</option>
          <option value="CLOSED">Closed</option>
        </Select>
      </Card>
    </FlexContainer>
   )
 }