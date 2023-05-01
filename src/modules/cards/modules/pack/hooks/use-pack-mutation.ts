import { TableErrorType } from '../../../types'
import { packMutations } from '../constants'
import { HandlerFunctionType } from '../types'

type UsePackMutationType = (
  mutationType: keyof typeof packMutations,
  refetch: () => void
) => {
  handler: HandlerFunctionType
  isLoading: boolean
  error: TableErrorType
}

export const usePackMutation: UsePackMutationType = (mutationType, refetch) => {
  const { mutation, isRefetch } = packMutations[mutationType]
  const [trigger, { isLoading, error }] = mutation()

  const handler: HandlerFunctionType = async data => {
    await trigger(data).unwrap()
    if (isRefetch) {
      refetch()
    }
  }

  return { handler, isLoading, error }
}