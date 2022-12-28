


import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  VStack,
} from '@chakra-ui/react'

function User(){
  return (
  <VStack>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>User Fields</TableCaption>
          <Thead>
            <Tr>
              <Th>Field Name</Th>
              <Th>Field Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            
              
              <Tr>
                <Td>name</Td>
                <Td>string</Td>
              </Tr>
            
              
              <Tr>
                <Td>age</Td>
                <Td>int</Td>
              </Tr>
            
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>User Edges</TableCaption>
          <Thead>
            <Tr>
              <Th>Relation</Th>
              <Th>Edge Name</Th>
              <Th>Edge Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            
              
              <Tr>
                <Td>O2M</Td>
                <Td>cars</Td>
                <Td>Car</Td>
              </Tr>
            
          </Tbody>
        </Table>
      </TableContainer>
  </VStack>
  )
}

export { User }
