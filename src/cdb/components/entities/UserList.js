


import {
  Button,
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

import{ useState, useEffect } from 'react';

function UserList(){
  const [records, setRecords] = useState([])

  return (
    <TableViewer records={records}/>
  )
}

function TableViewer({records=[]}){
  const recordItems = records.map(record=>
    <Tr>
        
          <Td>record["name"]</Td>
        
          <Td>record["age"]</Td>
        
    </Tr>
  )

  return (
  <>
    <Button>Add a User</Button>
    <Form hidden={false}/>
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            
            
            <Th>name</Th>
            
            
            <Th>age</Th>
            
          </Tr>
        </Thead>

        <Tbody>
          {recordItems}
        </Tbody>
      </Table>
      
      
    </TableContainer>
  </>
  )
}

function Form({hidden}){
  if (hidden){
    return null
  }
  return (
    <Button>TODO</Button>
  )
}

export{
  UserList
}
