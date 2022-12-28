


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

function Car(){
  return (
  <VStack>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Car Fields</TableCaption>
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
            
          </Tbody>
        </Table>
      </TableContainer>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Car Edges</TableCaption>
          <Thead>
            <Tr>
              <Th>Relation</Th>
              <Th>Edge Name</Th>
              <Th>Edge Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            
              
              <Tr>
                <Td>M2O</Td>
                <Td>owner</Td>
                <Td>User</Td>
              </Tr>
            
          </Tbody>
        </Table>
      </TableContainer>
  </VStack>
  )
}

export { Car }
