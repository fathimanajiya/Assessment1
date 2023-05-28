import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
    const [setBlogs] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setBlogs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div>
        <h1>Blog Dashboard</h1>
        {/* Display the blogs in tabular, card, or list view */}
        {/* Use the "id" and "title" fields from the API response */}
      </div>
    );
  }
  
  export default Dashboard;
  