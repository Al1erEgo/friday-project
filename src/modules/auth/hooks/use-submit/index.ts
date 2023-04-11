import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from '@reduxjs/toolkit/query'
import { useNavigate } from 'react-router-dom'

import { AuthApiResponseTypes } from '../../auth-api'

type CustomMutationTriggerType<T> = MutationTrigger<
  MutationDefinition<
    T,
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
    'authMe',
    AuthApiResponseTypes,
    'cards'
  >
>

//Hook get trigger from mutation hook and path to redirect after successful mutation.
export const useSubmit = <T>(trigger: CustomMutationTriggerType<T>, path?: string) => {
  const navigate = useNavigate()

  return async (data: T) => {
    try {
      await trigger(data).unwrap()
      if (path) navigate(path)
    } catch (e: unknown) {
      return
    }
  }
}
