import { Helmet } from 'react-helmet'
import { Box, Container } from '@material-ui/core'
import AuthorListResults from '../components/authors/AuthorListResults'
import CompanyListToolbar from '../components/authors/AuthorListToolbar'

import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as actions from '../store/authors/actions'

const AuthorList = () => {
  const [filter, setFilter] = useState('')
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(10)

  let authorList = useSelector((state) => state.authors.list.data)
  let authorsCount = useSelector((state) => state.authors.countTotal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getAuthorMany())
  }, [authorList])

  useEffect(() => {
    dispatch(actions.getAuthorMany({
      page,
      limit
    }))
  }, [page, limit])


  const onFetchPage = ({ page, limit}) => {
    setPage(page)
    setLimit(limit)
  }

  return (
    <>
      <Helmet>
        <title>Code katas | Wundertax</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <CompanyListToolbar />
          <Box sx={{ pt: 3 }}>
            <AuthorListResults authors={authorList} countTotal={authorsCount} fetchPage={onFetchPage} />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default AuthorList
