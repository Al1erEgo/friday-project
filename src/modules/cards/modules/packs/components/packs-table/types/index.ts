export type PacksTableDataType = {
  title: string
  dataIndex: string
  sorter?: boolean
  render?: (text: string, record: any) => JSX.Element
}

export type PackType = {
  _id: string
  name: string
  cardsCount: number
  updated: string
  user_name: string
  user_id: string
}

export type SorterType = {
  field?: string
  order?: 'ascend' | 'descend'
}
