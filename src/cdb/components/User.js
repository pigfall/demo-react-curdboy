


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
} from '@chakra-ui/react'

function User(){
  return (
      <TableContainer>
        <Table variant='simple'>
          <TableCaption>User</TableCaption>
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
  )
}

export { User }
