import { FC } from 'react'

import { Rate, Typography } from 'antd'

import { rateDescriptions } from '../../constants'

import { StyledRateContainer } from './styles'

const { Text } = Typography

type LearnCardAnswerWithRateType = {
  answer?: string
  isShow: boolean
  rate: number
  setRate: (value: number | ((prevState: number) => number)) => void
}

export const LearnCardAnswerWithRate: FC<LearnCardAnswerWithRateType> = ({
  answer,
  isShow,
  rate,
  setRate,
}) => {
  if (isShow)
    return (
      <>
        <Text>{answer}</Text>
        <StyledRateContainer>
          <Text strong>Rate yourself: </Text>
          <Rate tooltips={rateDescriptions} onChange={setRate} value={rate} />
        </StyledRateContainer>
      </>
    )

  return null
}