


import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Input } from '@chakra-ui/react';
import {useState} from 'react';

  
  import { CarList } from "../components/entities/CarList"

  
  import { DeptList } from "../components/entities/DeptList"

  
  import { UserList } from "../components/entities/UserList"


function Entities(){
  const [expandForm, setExpandForm] = useState(false)
  return (
      <Tabs> 
        <TabList>
          
            <Tab>Car</Tab>
          
            <Tab>Dept</Tab>
          
            <Tab>User</Tab>
          
        </TabList>

        <TabPanels>
          
            
            <TabPanel>
            <CarList/>
            </TabPanel>
          
            
            <TabPanel>
            <DeptList/>
            </TabPanel>
          
            
            <TabPanel>
            <UserList/>
            </TabPanel>
          

        </TabPanels>
      </Tabs>
  )
}

function Form({expand}){
  if (!expand){
    return null;
  }
  return(
  <>
    <Input placeholder='name'/>
    <Button>Submit</Button>
  </>
  )
}

export {
  Entities,
}
