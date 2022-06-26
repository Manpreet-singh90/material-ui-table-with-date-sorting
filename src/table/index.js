import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TableBody from '@mui/material/TableBody';
import Paper from "@mui/material/Paper";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableBody from "./EnhancedTableBody";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MomentHelper from './../helpers/MomentHelper'

const headCells = [
    {
      id: "name",
      numeric: false,
      disablePadding: true,
      label: "Column 1",
    },
    {
      id: "calories",
      numeric: true,
      disablePadding: false,
      label: "Column 2",
    },
    {
      id: "cdate",
      numeric: true,
      disablePadding: false,
      label: "date",
    },
    {
      id: "fat",
      numeric: true,
      disablePadding: false,
      label: "Column 3",
    },
    {
      id: "carbs",
      numeric: true,
      disablePadding: false,
      label: "Column 4",
    },
    {
      id: "protein",
      numeric: true,
      disablePadding: false,
      label: "Column 5",
    },
    {
      id: "status",
      numeric: true,
      disablePadding: false,
      label: "Status",
    },
  ];

const rows = [
    {name:"Marielia", calories: 1, cdate: "2021-04-16T16:00:00.000Z", fat: 10, carbs: 233, protein: 45 },
    {name:"Devin", calories: 93, cdate: "3020-04-18T16:00:00.000Z", fat: 0, carbs: 3.3, protein: 5 },
    {name:"TAmara", calories: 15, cdate: "1920-09-22T16:00:00.000Z", fat: 1.0, carbs: 56, protein: 0.5 },
    {name:"Uchenna", calories: 18, cdate: "2000-04-25T16:00:00.000Z", fat: 25, carbs: 96.0, protein: 15.45 },
    {name:"Ethan", calories: 51, cdate: "2022-04-12T16:00:00.000Z", fat: 31, carbs: 355, protein: 45.5 },
    {name:"Moshe", calories: 21, cdate: "2020-04-12T16:00:00.000Z", fat: 33.2, carbs: 33, protein: 454 },
    {name:"Cathenna", calories: 81, cdate: "2003-04-12T16:00:00.000Z", fat: 0.5, carbs: 0.2, protein: 25 },
  ]

function descendingComparator(a, b, orderBy) {
  if (orderBy === "cdate") {
      var a1 = new Date(a[orderBy]).getTime();
      var b1 = new Date(b[orderBy]).getTime();
    if(a1<b1)
    return 1;
    else if(a1>b1)
    return -1;
    else
    return 0;
     
}

  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

// const headCells = [
//   {
//     id: "name",
//     numeric: false,
//     disablePadding: true,
//     label: "Dessert (100g serving)",
//   },
//   {
//     id: "calories",
//     numeric: true,
//     disablePadding: false,
//     label: "Calories",
//   },
//   {
//     id: "fat",
//     numeric: true,
//     disablePadding: false,
//     label: "Fat (g)",
//   },
//   {
//     id: "carbs",
//     numeric: true,
//     disablePadding: false,
//     label: "Carbs (g)",
//   },
//   {
//     id: "protein",
//     numeric: true,
//     disablePadding: false,
//     label: "Protein (g)",
//   },
// ];

export default function EnhancedTable(props) {
  const { columns } = props;

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const onRouteChange = () => {
      alert();
  }

  const renderList = (listData) => {
    return (
      <>
        {stableSort(listData, getComparator(order, orderBy))
          .map((row, index) => {
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.name}
                className={labelId}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell><MomentHelper date={row.cdate} /></TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell><RemoveRedEyeIcon onClick={() => onRouteChange()}/></TableCell>
              </TableRow>
            );
          })}
      </>
    );
  };


  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <EnhancedTableHead
              order="asc"
              onRequestSort={handleRequestSort}
              headCells={headCells}
            />
            <TableBody>
            <EnhancedTableBody>{renderList(rows)}</EnhancedTableBody>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
