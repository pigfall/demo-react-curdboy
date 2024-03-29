


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
  HStack,
  FormControl,
  FormLabel,
  Input,
  Divider,
  Text,
  Center,
  Box,
  Alert,
  AlertIcon,
  NumberInput,
} from '@chakra-ui/react'

import { Field, Form , Formik } from 'formik';
import{ useState, useEffect } from 'react';
import {Client} from "cdb/client/Client";
import {Config} from "Config";
import { useToast } from '@chakra-ui/react'

function CarList(){
  const [records, setRecords] = useState([])
  const [page, setPage] = useState(0)
  const [pageNum, setPageNum] = useState(1)
  const [loading, setLoading] = useState(false)
  const dataLoaded = useToast()

  const pageSize = 3

  function refreshList({page=0}){
      setLoading(true);
      (new Client()).Car().list({page_index:page, page_size:pageSize}).
        then((res)=>{
          return res.json()
        })
        .then((resEntity)=>{
          console.log(resEntity)
          setRecords(resEntity.data)
          setPage(page)
          var pageNum = resEntity.meta.count / pageSize
          setPageNum(pageNum > 0 ? pageNum : 1)
          setLoading(false)
          dataLoaded(
            {
              title: 'Data loaded',
              status: 'success',
              duration: 2000,
              isClosable: true,
            }
          )
        });
  }

  useEffect(
    ()=>{
      refreshList(0)
    },
    [],
  )

  return (
    <>
    <TableViewer records={records} refreshList={refreshList}/>

    {
      loading ? 
      (
        <Alert status='warning'>
          <AlertIcon />
          Loading data... 
        </Alert>
      ) :
      null
    }

    <PageViewer pageIndex={page} pageNum={pageNum} pageSize={pageSize} jumpToPage={refreshList}/>

    </>
  )
}

function PageViewer({pageIndex, pageNum, pageSize, jumpToPage}){
console.log(pageNum)
  return (
    <HStack>
      <Box><Button onClick={()=>{jumpToPage({page:0})}}>First Page</Button></Box>
      <Box>{pageIndex+1}</Box>
      <Box><Button onClick={()=>{jumpToPage({page:pageNum-1})}}>Last Page</Button></Box>
      <Box>Total Page: {pageNum}</Box>
      <Box>Page Size: {pageSize}</Box>
    </HStack>
  )

}

function TableViewer({records=[],refreshList}){
  const [hideForm,setHideForm] = useState(true)
  const recordItems = records.map(record=>
    <Tr key={record.id}>
        
          <Td>{record["name"]}</Td>
        
    </Tr>
  )

  return (
  <>
    <Button onClick={()=>{setHideForm(!hideForm)}}>Add a Car</Button>
    <AddForm hidden={hideForm} refreshList={refreshList}/>

    <Divider />

    <Box mt='10'>
      <Center>
        <Text>Car List</Text>
      </Center>
    </Box>

    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            
            
            <Th>name</Th>
            
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

function AddForm({hidden,refreshList}){
  const toast = useToast()

  if (hidden){
    return null
  }
  return (
<>
  <Formik
    initialValues={
      
  
  {
    
    
    name : "",
    
  }

    }
    onSubmit={
      (values,actions)=>{
        console.log(values);
        (new Client()).Car().create(values)
          .then((res)=>{
            if (!res.ok){
              res.text().then((message)=>{
                toast(
                  {
                    title: 'create error',
                    description: `status: ${res.status}, message: ${message}`,
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  }
                )
              })
            }
          })
          .catch((err)=>{
          console.log(err)
          toast(
            {
              title: 'create error',
              status: 'error',
              duration: 2000,
              isClosable: true,
            }
          )
          })
          .finally(()=>{
            refreshList(0)
            actions.setSubmitting(false)
          })
      }
    }
  >
  {
    (props)=>{
      return (<Form>

        
  

  
  
  
  <Field name='name' >
      {({ field, form }) => (
        <FormControl >
          <FormLabel>name</FormLabel>
          <Input {...field} placeholder='name' />
        </FormControl>
      )}
  </Field>
  
  


        <Button
        mt={4}
        colorScheme='teal'
        isLoading={props.isSubmitting}
        type='submit'
        >
        Submit
        </Button>
      </Form>
      )
    }
  }
  </Formik>
</>
  )
}





export{
  CarList
}
