import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Widget from '../components/Widget';

function Overview() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/overview')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overview">
      <Widget title="User Activity" type="line" data={data.userActivity} />
      <Widget title="Sales Data" type="bar" data={data.salesData} />
      <Widget title="User Demographics" type="pie" data={data.userDemographics} />
      <Widget title="Recent Activity" type="feed" data={data.recentActivity} />
    </div>
  );
}

export default Overview;