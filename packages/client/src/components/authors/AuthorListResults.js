import { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core'
import getInitials from '../../utils/getInitials'

const AuthorListResults = ({ authors, countTotal, fetchPage, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([])
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(0)

  const handleSelectAll = event => {
    let newSelectedCustomerIds

    if (event.target.checked) {
      newSelectedCustomerIds = authors.map(author => author._id)
    } else {
      newSelectedCustomerIds = []
    }

    setSelectedCustomerIds(newSelectedCustomerIds)
  }

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id)
    let newSelectedCustomerIds = []

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      )
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      )
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      )
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      )
    }

    setSelectedCustomerIds(newSelectedCustomerIds)
  }

  const handleLimitChange = event => {
    setLimit(event.target.value)
  }

  const handlePageChange = (event, newPage) => {
    setPage(newPage)
    fetchPage({
      page: newPage,
      limit
    })
  }

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding='checkbox'>
                  <Checkbox
                    checked={selectedCustomerIds.length === authors.length}
                    color='primary'
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < authors.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Initials</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Last update</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {authors.slice(0, limit).map(author => (
                <TableRow
                  hover
                  key={author._id}
                  selected={selectedCustomerIds.indexOf(author._id) !== -1}
                >
                  <TableCell padding='checkbox'>
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(author._id) !== -1}
                      onChange={event => handleSelectOne(event, author._id)}
                      value='true'
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar src={author.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(author.companyName)}
                      </Avatar>
                      <Typography color='textPrimary' variant='body1'>
                        {author.companyName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{author.email}</TableCell>
                  <TableCell>
                    {author.firstName}
                  </TableCell>
                  <TableCell>{author.lastName}</TableCell>
                  <TableCell>
                    {moment(author.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component='div'
        count={countTotal}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  )
}

AuthorListResults.propTypes = {
  author: PropTypes.array.isRequired
}

export default AuthorListResults
