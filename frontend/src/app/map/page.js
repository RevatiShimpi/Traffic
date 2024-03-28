"use client"
import React, { useState } from 'react';
import { AzureMap, AzureMapsProvider, IAzureMapOptions } from 'react-azure-maps';
import { AuthenticationType, TrafficOptions } from 'azure-maps-control';
import { key } from '../../key';





const option= {
  authOptions: {
    authType: AuthenticationType.subscriptionKey,
    subscriptionKey: key
  },
  center: [ 73.8567,18.5204],
  zoom: 10,
};

const TrafficOptionsExample= () => {
  const [trafficOptions, setTrafficOptions] = useState({
    incidents: true,
    flow: 'absolute',
  });

  return (
    <div style={{ padding: '20px' }}>     
      <div >
        <button 
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => {
            setTrafficOptions((value) => ({ ...value, flow: 'relative' }));
          }}
        >
          Flow: Relative Traffic
        </button>
        {/* <button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => {
            setTrafficOptions((value) => ({ ...value, flow: 'relative-delay' }));
          }}
        >
          Flow: Relative-delay
        </button> */}
        
        {/* <button
          size="small"
          variant="contained"
          color="secondary"
          onClick={() => {
            setTrafficOptions((value) => ({ ...value, flow: 'none' }));
          }}
        >
          Flow: None
        </button> */}
      </div>
      <div >
        <button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            setTrafficOptions((value) => ({ ...value, incidents: true }));
          }}
        >
          Incidents: TRUE
        </button>
        <button
          size="small"
          variant="contained"
          color="inherit"
          onClick={() => {
            setTrafficOptions((value) => ({ ...value, incidents: false }));
          }}
        >
          Incidents: FALSE
        </button>
      </div>
      <AzureMapsProvider>
        <div style={{ height: '600px', width: '1000px' }}>
          <AzureMap options={option} trafficOptions={trafficOptions} />
        </div>
      </AzureMapsProvider>
    </div>
    

  );
};

export default TrafficOptionsExample;