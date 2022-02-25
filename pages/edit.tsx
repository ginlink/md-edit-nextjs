import { Box, Card, Container, Stack, Typography } from '@mui/material'
import { NextPage } from 'next'
import { useEffect } from 'react'
import Page from '../src/components/Page'

const Edit: NextPage = () => {
  useEffect(() => {}, [])

  return (
    <Page title="Edit | host">
      <Container>
        <Box>
          <Stack direction={'row'} spacing={2}>
            <Typography>123</Typography>
            <Typography>123</Typography>
          </Stack>
        </Box>
      </Container>
    </Page>
  )
}

export default Edit
