


import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

  
  import { CarList } from "../components/entities/CarList"

  
  import { DeptList } from "../components/entities/DeptList"

  
  import { UserList } from "../components/entities/UserList"


function Entities(){
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

export {
  Entities,
}
