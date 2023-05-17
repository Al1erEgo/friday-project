import React, { FC } from 'react'

import { DeletedCardsPackRequestType } from '../../../../api'
import { ModalButtons } from '../../../../components'
import { StyledModalWrapper } from '../../../../styles'
import { PacksModalBaseType } from '../../types/packs-modals'

export type ModalDeleteType = PacksModalBaseType<
  DeletedCardsPackRequestType & { name?: string }
>
export const ModalsDelete: FC<ModalDeleteType> = ({
  payload,
  onSubmit,
  onCancel,
}) => {
  const handleDelete = () => {
    onSubmit(payload)
    onCancel()
  }

  return (
    <StyledModalWrapper>
      <p>
        Are you sure you want to delete the pack <strong>{payload.name}</strong>
        ?
      </p>

      <ModalButtons
        submitButtonName={'Delete'}
        onSubmit={handleDelete}
        onCancel={onCancel}
      />
    </StyledModalWrapper>
  )
}
