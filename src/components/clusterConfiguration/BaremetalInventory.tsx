import React from 'react';
import { Text, TextContent, Button } from '@patternfly/react-core';
import HostsTable from '../hosts/HostsTable';
import { Cluster } from '../../api/types';
import { DiscoveryImageModalButton } from './discoveryImageModal';
import HostsRolesField from '../hosts/HostsRolesField';

interface BareMetalInventoryProps {
  cluster: Cluster;
}

const BaremetalInventory: React.FC<BareMetalInventoryProps> = ({ cluster }) => {
  return (
    <>
      <TextContent>
        <Text component="h2">Bare Metal Inventory</Text>
        <Text component="p">
          <DiscoveryImageModalButton ButtonComponent={Button} imageInfo={cluster.imageInfo} />
        </Text>
        <Text component="p">
          Boot the discovery ISO on hardware that should become part of this bare metal cluster.
          Hosts connected to the internet will automatically appear below.
        </Text>
      </TextContent>
      <HostsRolesField>
        <HostsTable cluster={cluster} />
      </HostsRolesField>
    </>
  );
};

export default BaremetalInventory;
