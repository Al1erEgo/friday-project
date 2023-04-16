import { MAIN_PATH } from '../../../../../constants'
import {
  useAuthMeLogOutMutation,
  useAuthMeUpdateMutation,
  useLoginMutation,
  useRegisterMutation,
  useRequestPasswordResetMutation,
} from '../../../api'
import { ABSOLUTE_AUTH_PATH } from '../../../constants'

type mutationAndPathByFormType = {
  [key: string]: { mutation: any; path?: string }
}

export const mutationAndPathByForm: mutationAndPathByFormType = {
  login: {
    mutation: useLoginMutation,
    path: MAIN_PATH.Root,
  },
  logout: {
    mutation: useAuthMeLogOutMutation,
    path: ABSOLUTE_AUTH_PATH.SignIn,
  },
  signup: {
    mutation: useRegisterMutation,
    path: ABSOLUTE_AUTH_PATH.SignIn,
  },
  resetPassword: {
    mutation: useRequestPasswordResetMutation,
  },
  newPassword: {
    mutation: useRequestPasswordResetMutation,
  },
  updateUserName: {
    mutation: useAuthMeUpdateMutation,
  },
} as const
