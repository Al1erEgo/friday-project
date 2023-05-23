import React, { FC } from 'react'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import { useDebouncedSearchWithReset } from '../../hooks'
import { StyledCardsText } from '../../styles'
import { HandleSearchType } from '../../types'

import { CardsSearchWrapperProps, StyledCardsSearchWrapper } from './style'

type CardsSearchProps = CardsSearchWrapperProps & {
  searchValue: string
  onSearch: HandleSearchType
  placeholder: string
  disabled?: boolean
}
export const CardsSearch: FC<CardsSearchProps> = ({
  size = 'small',
  onSearch,
  searchValue,
  placeholder,
  disabled,
}) => {
  const { handleOnSearchChange, localSearchValue } =
    useDebouncedSearchWithReset(searchValue, onSearch)

  return (
    <StyledCardsSearchWrapper size={size}>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search
        disabled={disabled}
        placeholder={placeholder}
        enterButton={<SearchOutlined />}
        value={localSearchValue}
        onChange={handleOnSearchChange}
        onSearch={onSearch}
        allowClear={true}
        maxLength={50}
      />
    </StyledCardsSearchWrapper>
  )
}
