


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
  FormControl,
  FormLabel,
  Input,
  Divider,
  Text,
  Center,
  Box,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'

import { Field, Form , Formik } from 'formik';
import{ useState, useEffect } from 'react';
import {Client} from "cdb/client/Client";
import {Config} from "Config";
import { useToast } from '@chakra-ui/react'

function UserList(){
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(false)
  const dataLoaded = useToast()

  useEffect(
    ()=>{
      setLoading(true);
      (new Client()).User().list({page:0}).
        then((data)=>{
          return data.json()
        })
        .then((jsonBytes)=>{
          console.log(jsonBytes)
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
    },
    [],
  )

  return (
    <>
    <TableViewer records={records}/>

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

    </>
  )
}

function TableViewer({records=[]}){
  const [hideForm,setHideForm] = useState(true)
  const recordItems = records.map(record=>
    <Tr>
        
          <Td>record["name"]</Td>
        
          <Td>record["age"]</Td>
        
    </Tr>
  )

  return (
  <>
    <Button onClick={()=>{setHideForm(!hideForm)}}>Add a User</Button>
    <AddForm hidden={hideForm}/>

    <Divider />

    <Box mt='10'>
      <Center>
        <Text>User List</Text>
      </Center>
    </Box>

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

function AddForm({hidden}){
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
    
    
    age : "",
    
  }

    }
    onSubmit={
      (values,actions)=>{
        console.log(values);
        (new Client()).User().create(values)
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
          .finally(()=>{actions.setSubmitting(false)})
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
        
        
        <Field name='age' >
            {({ field, form }) => (
              <FormControl >
                <FormLabel>age</FormLabel>
                <Input {...field} placeholder='age' />
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
  UserList
}
