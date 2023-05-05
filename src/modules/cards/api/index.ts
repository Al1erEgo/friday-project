import { rootApi } from '../../../store'

export const cardsApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    cardPacks: builder.query<CardPacksResponseType, CardPacksRequestType>({
      query: (params: CardPacksRequestType) => ({
        url: 'cards/pack',
        method: 'GET',
        params: {
          ...params,
          packName: params.packName || undefined,
        },
        cacheTime: 1,
      }),
      providesTags: ['packs'],
    }),
    newCardsPack: builder.mutation<{}, NewCardPacksRequestType>({
      query: (requestData: NewCardPacksRequestType) => ({
        url: 'cards/pack',
        method: 'POST',
        body: requestData,
      }),
      invalidatesTags: ['packs'],
    }),
    deleteCardsPack: builder.mutation<{}, DeletedCardsPackRequestType>({
      query: (params: DeletedCardsPackRequestType) => ({
        url: `cards/pack`,
        method: 'DELETE',
        params,
      }),
      invalidatesTags: ['packs', 'pack'],
    }),

    updateCardsPack: builder.mutation<{}, UpdateCardsPackRequestType>({
      query: (requestData: UpdateCardsPackRequestType) => ({
        url: 'cards/pack',
        method: 'PUT',
        body: requestData,
      }),
    }),
    cardsPack: builder.query<CardsResponseType, CardsRequestType>({
      query: (params: CardsRequestType) => ({
        url: 'cards/card',
        method: 'GET',
        params,
      }),
    }),
    newCard: builder.mutation<{}, NewCardRequestType>({
      query: (requestData: NewCardRequestType) => ({
        url: 'cards/card',
        method: 'POST',
        body: requestData,
      }),
      invalidatesTags: ['packs', 'pack'],
    }),
    deleteCard: builder.mutation<{}, DeleteCardRequestType>({
      query: (params: DeleteCardRequestType) => ({
        url: 'cards/card',
        method: 'DELETE',
        params,
      }),
      invalidatesTags: ['packs', 'pack'],
    }),
    updateCard: builder.mutation<{}, UpdateCardRequestType>({
      query: (requestData: UpdateCardRequestType) => ({
        url: 'cards/card',
        method: 'PUT',
        body: requestData,
      }),
      invalidatesTags: ['packs', 'pack'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useCardPacksQuery,
  useNewCardsPackMutation,
  useDeleteCardsPackMutation,
  useUpdateCardsPackMutation,
  useCardsPackQuery,
  useNewCardMutation,
  useDeleteCardMutation,
  useUpdateCardMutation,
} = cardsApi

export type CardsPackType = {
  _id: string
  user_id: string
  name: string
  cardsCount: number
  created: string
  updated: string
  user_name: string
}

export type CardPacksResponseType = {
  cardPacks: CardsPackType[]
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}
export type CardPacksRequestType = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string
  page?: number
  pageCount?: number
  user_id?: string
  block?: boolean
}

export type NewCardPacksRequestType = {
  cardsPack: {
    name?: string
    deckCover?: string
    private?: boolean
  }
}

export type DeletedCardsPackRequestType = {
  id?: string
}

export type UpdateCardsPackRequestType = {
  cardsPack: {
    _id: string
    name?: string
  }
}

export type CardType = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  shots: number
  user_id: string
  created: string
  updated: string
  _id: string
}

export type CardsResponseType = {
  cards: CardType[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
}
type CardsRequestType = {
  cardAnswer?: string
  cardQuestion?: string
  cardsPack_id: string
  min?: number
  max?: number
  sortCards?: string
  page?: number
  pageCount?: number
}

export type NewCardRequestType = {
  card: {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
  }
}

export type DeleteCardRequestType = {
  id: string
}

export type UpdateCardRequestType = {
  card: {
    _id: string
    question?: string
  }
}
