


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

function Dept(){
  return (
  <VStack>
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>Dept Fields</TableCaption>
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
          <TableCaption>Dept Edges</TableCaption>
          <Thead>
            <Tr>
              <Th>Relation</Th>
              <Th>Edge Name</Th>
              <Th>Edge Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            
          </Tbody>
        </Table>
      </TableContainer>
  </VStack>
  )
}

export { Dept }
