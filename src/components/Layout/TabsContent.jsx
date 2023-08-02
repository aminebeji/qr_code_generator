import {
  Alert,
  AlertIcon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import {
  FcWiFiLogo,
  FcOldTimeCamera,
  FcLink,
  FcAddressBook,
  FcMissedCall,
} from "react-icons/fc";
import Wifi from "../Froms/Wifi";
import Image from "../Froms/Image";
import Link from "../Froms/Link";

function TabsContent() {
  return (
    <Tabs w="75%" isFitted variant="enclosed">
      <TabList className="tabs_container">
        <Tab className="tabs_content">
          <FcWiFiLogo className="tabs_icons" /> Wifi
        </Tab>
        <Tab  className="tabs_content">
          <FcLink className="tabs_icons" /> Link
        </Tab>
        <Tab  className="tabs_content">
          {" "}
          <FcAddressBook className="tabs_icons" /> V-Card
        </Tab>
        <Tab  className="tabs_content">
          <FcMissedCall className="tabs_icons" /> Call
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel className="connected-tab-panel">
          <Wifi />
        </TabPanel>
        <TabPanel className="connected-tab-panel">
          <Link />{" "}
        </TabPanel>
        <TabPanel className="connected-tab-panel">
          <Alert status="info">
            <AlertIcon />
            COMMING SOON
          </Alert>
        </TabPanel>
        <TabPanel className="connected-tab-panel">
          <Alert status="info">
            <AlertIcon />
            COMMING SOON
          </Alert>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabsContent;
