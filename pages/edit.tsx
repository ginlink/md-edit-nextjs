import { Box, Card, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useEffect } from 'react'
import Page from '../src/components/Page'

const Edit: NextPage = () => {
  useEffect(() => {}, [])

  return (
    <Page title="Edit | host">
      <Box>
        <Typography>123</Typography>
      </Box>
    </Page>
  )
}

export default Edit
