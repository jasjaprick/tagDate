import React, { useState } from 'react';
import { Text, View } from 'react-native';
import RegisterPage from './RegisterPage';

function usePagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const numberPages = [1, 2];
 

// return (

// {(currentPage == 1) && (
//   <View>
//     <RegisterPage />;
//   </View>
// )}

// {(currentPage == 2) && (
//   <View>
//     <Location />;
//   </View>
// )}

// )}






export default usePagination;
