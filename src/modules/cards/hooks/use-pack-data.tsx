import { useState } from 'react'

import { useParams, useSearchParams } from 'react-router-dom'

import { useCardsPackQuery } from '../api'
import {
  ButtonsHandlersType,
  HandleSearchType,
  PackTableParamsType,
  TableDataType,
} from '../types'
import {
  getFormattedPackTableData,
  getPackTableColumns,
  getSortingParam,
} from '../utils'

import { usePackHandlers } from './use-pack-handlers'
import { usePackModals } from './use-pack-modals'
import { usePackMutations } from './use-pack-mutations'

type UsePackDataType = () => [
  {
    packName: string
    isEmptyPack: boolean
    isOwnPack: boolean
    buttonsHandlers: ButtonsHandlersType
  },
  { handleSearch: HandleSearchType },
  TableDataType
]

export const usePackData: UsePackDataType = () => {
  const { packId = '' } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const isOwnPack = searchParams.get('own') === 'true'
  const packName = searchParams.get('name') || ''

  const [tableParams, setTableParams] = useState<PackTableParamsType>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
    field: '',
    order: null,
    searchValue: '',
  })

  const {
    data: responseData,
    refetch: refetchPack,
    isLoading: isInitialLoading,
    isFetching,
    error: cardsPackQueryError,
  } = useCardsPackQuery({
    cardsPack_id: packId + '',
    page: tableParams.pagination?.current,
    pageCount: tableParams.pagination?.pageSize,
    sortCards: getSortingParam(tableParams),
    cardQuestion: tableParams.searchValue,
  })

  const [mutations, mutationsLoading, mutationsError] =
    usePackMutations(refetchPack)

  const { handleTableChange, handleSearch, buttonsHandlers } = usePackHandlers(
    setTableParams,
    mutations,
    packId,
    packName
  )

  const { deleteCardModal } = usePackModals(mutations)

  const isDataLoading = isInitialLoading || isFetching || mutationsLoading
  const serverError = cardsPackQueryError || mutationsError
  const elementsCount = responseData?.cardsTotalCount || 0
  const isEmptyPack = !elementsCount

  const tableColumns = getPackTableColumns(
    isOwnPack,
    deleteCardModal,
    mutations.updateCard.handler
  )

  const formattedTableData = getFormattedPackTableData(responseData)

  return [
    { packName, isEmptyPack, isOwnPack, buttonsHandlers },
    { handleSearch },
    {
      isDataLoading,
      handleTableChange,
      tableParams,
      formattedTableData,
      elementsCount,
      tableColumns,
      serverError,
    },
  ]
}
