


import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


  
  import { Dept } from "../components/schemas/Dept"

  
  import { User } from "../components/schemas/User"


function Schemas(){
return (
      <Tabs> 
        <TabList>
          
            <Tab>Dept</Tab>
          
            <Tab>User</Tab>
          
        </TabList>

        <TabPanels>
          
            
            <TabPanel>
            <Dept/>
            </TabPanel>
          
            
            <TabPanel>
            <User/>
            </TabPanel>
          

        </TabPanels>
      </Tabs>
)
}


export {
  Schemas
}
