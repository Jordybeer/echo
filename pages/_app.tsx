import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layout'
function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
        <Layout>
      <App />
      </Layout>
    </ChakraProvider>
  )
}
