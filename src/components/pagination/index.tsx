import { useEffect, useState } from 'react';
import { Box } from '../box'
import { Icon } from '../icon';
import { Typography } from '../typography';
import * as Styles from './styles'
import { PaginationProps } from './types'
import { useDebounceCallback } from '@/hooks/useDebounceCallback';

export function Pagination (props: PaginationProps) {
  const {
    currentPage,
    totalPages,
    onPageChange
  } = props
  const forward2x = ">>"
  const forward = ">"
  const backward2x = "<<"
  const backward = "<"

  const [page, setPage] = useState(currentPage)
  
  const _totalPages = Math.floor(totalPages) - 1

  const handlePageChange = (value: number) => {
    const result = value + Number(currentPage)
    
    setPage(result)
    onPageChange(result)
  }

  const debouncePageChange = useDebounceCallback(value => {
    onPageChange(value)
  }, 500)

  useEffect(() => {
    setPage(prevState => currentPage === prevState ? prevState : currentPage)
  }, [currentPage])

  return (
    <Styles.Container>
      <Typography size="xsm">{`${currentPage} de ${_totalPages}`}</Typography>
      <Box gap={0.3}>
        <Styles.Bullet disabled={currentPage <= 2} active onClick={() => handlePageChange(-2)}>
          {backward2x}
        </Styles.Bullet>
        <Styles.Bullet disabled={currentPage <= 1} onClick={() => handlePageChange(-1)}>
          {backward}
        </Styles.Bullet>
        <Styles.CurrentPageInput
          min={1}
          max={_totalPages}
          defaultValue={currentPage}
          value={page}
          onChange={(event) => {
            const { value } = event.target

            const parsed = Number(value.replace(/\D/g, '') || '0')

            setPage(Number(parsed))
            debouncePageChange(Number(parsed))
          }}
        />
        <Styles.Bullet disabled={currentPage >= _totalPages} onClick={() => handlePageChange(1)}>
          {forward}
        </Styles.Bullet>
        <Styles.Bullet disabled={currentPage >= (_totalPages - 2)} active onClick={() => handlePageChange(2)}>
          {forward2x}
        </Styles.Bullet>
      </Box>
    </Styles.Container>
  )
}