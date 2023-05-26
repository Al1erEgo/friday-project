import React, { FC } from 'react'

import { StyledUserName } from '../auth-widget/styles'

import {
  StyledEditOutlinedProfileName,
  StyledProfileNameWrapper,
} from '@/modules/auth/components/profile-name/styles'
import { ProfileNameBaseType } from '@/modules/auth/types/profile-name'

export const ProfileNameEditableSpan: FC<ProfileNameBaseType> = ({ userName, switchEdit }) => {
  return (
    <StyledProfileNameWrapper>
      <StyledUserName fontSize={'big'} onClick={switchEdit}>
        {userName}
      </StyledUserName>
      <StyledEditOutlinedProfileName onClick={switchEdit} />
    </StyledProfileNameWrapper>
  )
}