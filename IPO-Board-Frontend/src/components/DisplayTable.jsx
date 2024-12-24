import React, { useState } from 'react'
import Banner from './Banner'
import api from './api';
import { useEffect } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";


function DisplayTable() {
  const [data, setData] = useState([]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/ipo');
        console.log(response.data); // Log fetched data to console
        setData(response.data); // Store fetched data in state
      } catch (error) {
        console.error('Error fetching data:', error); // Handle errors
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Banner text={"Welcome to IPO Board"} />

      <Table >
        <TableHeader>
          <TableColumn>Company Name</TableColumn>
          <TableColumn>Category</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Lot Size</TableColumn>
          <TableColumn>GMP</TableColumn>
          <TableColumn>GMP Percentage</TableColumn>
          <TableColumn>Estimated Listing</TableColumn>
          <TableColumn>IPO Size</TableColumn>
          <TableColumn>Open Date</TableColumn>
          <TableColumn>Close Date</TableColumn>
          <TableColumn>Listing Date</TableColumn>
          <TableColumn>Status</TableColumn>
        </TableHeader>
        <TableBody>
          {
            data.length > 0 ?
              (data.map((item) => (
                <TableRow key={item.companyName}>
                  <TableCell>{item.companyName}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.lotSize}</TableCell>
                  <TableCell>{item.gmp}</TableCell>
                  <TableCell>{item.gmpPercentage}</TableCell>
                  <TableCell>{item.estimatedListing}</TableCell>
                  <TableCell>{item.ipoSize}</TableCell>
                  <TableCell>{item.openDate}</TableCell>
                  <TableCell>{item.closeDate}</TableCell>
                  <TableCell>{item.listingDate}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
              <TableCell>NO DATA AVAILABLE</TableCell>
              <TableCell>NO DATA AVAILABLE</TableCell>
              <TableCell>NO DATA AVAILABLE</TableCell>
              <TableCell>NO DATA AVAILABLE</TableCell>
              <TableCell>NO DATA AVAILABLE</TableCell>
              <TableCell>NO DATA AVAILABLE</TableCell>
              <TableCell>NO DATA AVAILABLE</TableCell>
              <TableCell>NO DATA AVAILABLE</TableCell>
              <TableCell>NO DATA AVAILABLE</TableCell>
              <TableCell>NO DATA AVAILABLE</TableCell>
              <TableCell>NO DATA AVAILABLE</TableCell>
              <TableCell>NO DATA AVAILABLE</TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default DisplayTable