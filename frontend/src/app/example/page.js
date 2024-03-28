// 'use client'
// import { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic to dynamically load components
// import { Chart, registerables } from 'chart.js';
// import axios from 'axios';
// import { key } from '../../key';

// // Dynamically import Scatter component to ensure it's only loaded on the client side
// const Scatter = dynamic(() => import('react-chartjs-2').then((mod) => mod.Scatter), { ssr: false });

// Chart.register(...registerables);

// const TrafficOptionsExample = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [boundingBox, setBoundingBox] = useState('');

//   const scatterData = {
//     datasets: [{
//       label: 'Scatter Dataset',
//       data: [
//         { x: 10, y: 20 },
//         { x: 15, y: 10 },
//         { x: 25, y: 30 },
//         { x: 35, y: 25 },
//         { x: 45, y: 15 },
//       ],
//       backgroundColor: 'rgba(255, 99, 132, 0.6)',
//     }]
//   };

//   const scatterOptions = {
//     scales: {
//       x: {
//         type: 'linear',
//         position: 'bottom',
//         title: {
//           display: true,
//           text: 'X-axis'
//         }
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Y-axis'
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     console.log('Component mounted on client side');
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const values = searchQuery.split(' ');
//     if (values.length === 4) {
//       const boundingBoxString = `${values[0]},${values[1]},${values[2]},${values[3]}`;
//       setBoundingBox(boundingBoxString);
//       try {
//         const response = await axios.get(`https://atlas.microsoft.com/traffic/incident/viewport/json?api-version=1.0&boundingbox=${boundingBoxString}&boundingzoom=10&overviewbox=${boundingBoxString}&overviewzoom=10&subscription-key=${key}`);
//         //console.log(response.data.viewpResp.trafficState.trafficModelId);
//         let trafficid=response.data.viewpResp.trafficState["@trafficModelId"];
//         //console.log(trafficid);
//         const response2 = await axios.get(`https://atlas.microsoft.com/traffic/incident/detail/json?api-version=1.0&style=s3&boundingbox=${boundingBoxString}&boundingZoom=11&trafficmodelid=${trafficid}&subscription-key=${key}`);
//         console.log(response2);
//         const incidents = response2.data.tm.poi.map(incident => ({
//           cs: incident.cs,
//           dl: incident.dl,
//           p: {
//             latitude: incident.p.y,
//             longitude: incident.p.x
//           }
//         }));
        
//         // Log the transformed data for demonstration purposes
//         incidents.forEach(incident => {
//           console.log(`Cluster Size: ${incident.cs}, Delay: ${incident.dl}, Coordinates: (${incident.p.latitude}, ${incident.p.longitude})`);
//           //scatterData.datasets.data[1].push(incident.cs);
//           //console.log(scatterData.datasets.data);    
//         });
//       } catch (error) {
//         console.error('Error fetching traffic incidents:', error);
//       }
//     } else {
//       alert('Please enter exactly four values separated by space.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '20px' }}>
//           <input
//             type="search"
//             name="search-form"
//             id="search-form"
//             className="search-input"
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Enter four values separated by space"
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <div className="dataCard revenueCard" style={{ padding: '20px' }}>
//         <Scatter data={scatterData} options={scatterOptions} />
//       </div>
//     </div>
//   );
// };

// export default TrafficOptionsExample;


// 'use client'
// import React, { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';
// import { Chart, registerables } from 'chart.js';
// import axios from 'axios';
// import { key } from '../../key';

// const Scatter = dynamic(() => import('react-chartjs-2').then((mod) => mod.Scatter), { ssr: false });

// Chart.register(...registerables);

// const TrafficOptionsExample = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [boundingBox, setBoundingBox] = useState('');
//   const [scatterData, setScatterData] = useState({
//     datasets: [{
//       label: 'Scatter Dataset',
//       data: [],
//       backgroundColor: 'rgba(255, 99, 132, 0.6)',
//     }]
//   });

//   const scatterOptions = {
//     scales: {
//       x: {
//         type: 'linear',
//         position: 'bottom',
//         title: {
//           display: true,
//           text: 'X-axis'
//         }
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Y-axis'
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     console.log('Component mounted on client side');
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const values = searchQuery.split(' ');
//     if (values.length === 4) {
//       const boundingBoxString = `${values[0]},${values[1]},${values[2]},${values[3]}`;
//       setBoundingBox(boundingBoxString);
//       try {
//         const response = await axios.get(`https://atlas.microsoft.com/traffic/incident/viewport/json?api-version=1.0&boundingbox=${boundingBoxString}&boundingzoom=10&overviewbox=${boundingBoxString}&overviewzoom=10&subscription-key=${key}`);
//         let trafficid = response.data.viewpResp.trafficState["@trafficModelId"];
//         const response2 = await axios.get(`https://atlas.microsoft.com/traffic/incident/detail/json?api-version=1.0&style=s3&boundingbox=${boundingBoxString}&boundingZoom=11&trafficmodelid=${trafficid}&subscription-key=${key}`);
//         const incidents = response2.data.tm.poi.map(incident => ({
//           cs: incident.cs,
//           dl: incident.dl,
//           p: {
//             latitude: incident.p.y,
//             longitude: incident.p.x
//           }
//         }));

//         // Update scatterData with new incident.cs values
//         const newData = incidents.map(incident => ({
//           x: incident.dl, // Using delay as the x-value
//           y: incident.cs, // Using cluster size as the y-value
//         }));

//         setScatterData({
//           datasets: [{
//             label: 'Scatter Dataset',
//             data: newData,
//             backgroundColor: 'rgba(255, 99, 132, 0.6)',
//           }]
//         });

//       } catch (error) {
//         console.error('Error fetching traffic incidents:', error);
//       }
//     } else {
//       alert('Please enter exactly four values separated by space.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '20px' }}>
//           <input
//             type="search"
//             name="search-form"
//             id="search-form"
//             className="search-input"
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Enter four values separated by space"
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       <div className="dataCard revenueCard" style={{ padding: '20px' }}>
//         <Scatter data={scatterData} options={scatterOptions} />
//       </div>
//     </div>
//   );
// };

// export default TrafficOptionsExample;



///UPDATES WITH TIME
'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';
import { key } from '../../key';

const Scatter = dynamic(() => import('react-chartjs-2').then((mod) => mod.Scatter), { ssr: false });

Chart.register(...registerables);

const TrafficOptionsExample = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [boundingBox, setBoundingBox] = useState('');
  const [scatterData, setScatterData] = useState({
    datasets: [{
      label: 'Scatter Dataset',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    }]
  });

  // Function to add a new value to the data array
const addNewValue = (newValue) => {
  setScatterData(prevState => ({
    ...prevState,
    datasets: [{
      ...prevState.datasets[0],
      data: [...prevState.datasets[0].data, newValue],
    }]
  }));
};



  const scatterOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Cluster Size'
        }
      }
    }
  };

  useEffect(() => {
    console.log('Component mounted on client side');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = searchQuery.split(' ');
    if (values.length === 4) {
      const boundingBoxString = `${values[0]},${values[1]},${values[2]},${values[3]}`;
      setBoundingBox(boundingBoxString);

      // Get the current system time as the x-axis value
      const now = new Date();
      const currentTime = now.getSeconds()  ;


      try {
        const response = await axios.get(`https://atlas.microsoft.com/traffic/incident/viewport/json?api-version=1.0&boundingbox=${boundingBoxString}&boundingzoom=10&overviewbox=${boundingBoxString}&overviewzoom=10&subscription-key=${key}`);
        let trafficid = response.data.viewpResp.trafficState["@trafficModelId"];
        const response2 = await axios.get(`https://atlas.microsoft.com/traffic/incident/detail/json?api-version=1.0&style=s3&boundingbox=${boundingBoxString}&boundingZoom=11&trafficmodelid=${trafficid}&subscription-key=${key}`);
        const incidents = response2.data.tm.poi.map(incident => ({
          cs: incident.cs,
          dl: incident.dl,
          p: {
            latitude: incident.p.y,
            longitude: incident.p.x
          }
        }));

        // Update scatterData with new incident.cs values and current time
        const newData = incidents.map(incident => ({
          x: currentTime, // Using current system time as x-axis value
          y: incident.dl, // Using cluster size as the y-value
        }));

        console.log(newData)
        // Filter out objects with y equal to undefined
        const filteredData = newData.filter(item => item.y !== undefined);

        // Get the last object from the filtered array
        const lastDefinedObject = filteredData[filteredData.length - 1];

        // Log the last object with y defined, or undefined if there are no such objects
        console.log(lastDefinedObject.y);

        addNewValue({ x: currentTime, y: lastDefinedObject.y })

        // setScatterData(
        //   scatterData.datasets.data.push(newData)
        // )

      } catch (error) {
        console.error('Error fetching traffic incidents:', error);
      }
    } else {
      alert('Please enter exactly four values separated by space.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="search"
            name="search-form"
            id="search-form"
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter four values separated by space"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="dataCard revenueCard" style={{ padding: '20px' }}>
        <Scatter data={scatterData} options={scatterOptions} />
      </div>
    </div>
  );
};

export default TrafficOptionsExample;
