// import React from 'react';
// import {
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Paper,
// } from '@mui/material';

// function DayTableTime({ loading, error, uniqueDate }) {
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error : {error.message}</p>;

//   return (
//     <TableContainer component={Paper} sx={tableStyling}>
//       <Table aria-label="simple table" stickyHeader>
//         <TableHead>
//           <TableRow>
//             <TableCell sx={headerStyling} scope="header">
//               Date
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody sx={rowStyle}>
//           {uniqueDate.map((date) => {
//             return (
//               <TableRow key={date}>
//                 <TableCell>
//                   <button>{date}</button>
//                 </TableCell>
//               </TableRow>
//             );
//           })}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }

// const headerStyling = {
//   backgroundColor: '#3c4c5c',
//   color: 'white',
//   fontWeight: 'bold',
// };

// const tableStyling = {
//   maxHeight: '600px',
//   width: '90%',
//   margin: 'auto',
//   marginTop: '2rem',
// };

// const rowStyle = {
//   '& tr:nth-of-type(2n+1)': {
//     backgroundColor: '#2196f3',
//   },
// };

// export default DayTableTime;
