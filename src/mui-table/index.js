import { useMemo } from "react";
// react-table components
import { useTable, usePagination, useGlobalFilter, useSortBy } from "react-table";

// @mui material components
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";


import Box from '@mui/material/Box';
//   example components
import DataTableHeadCell from "./DataTableHeadCell";
import DataTableBodyCell from "./DataTableBodyCell";

function DataTable({  
  tableHeading,
  tableData,
  table,
  isSorted,
  noEndBorder,
}) {
  const columns = useMemo(() => tableHeading, [tableHeading]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable({ columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   prepareRow,
  //   rows,
  //   page,
  //   pageOptions,
  // //  setPageSize,
  //   state: { pageIndex, pageSize },
  // } = tableInstance;
  
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  // A function that sets the sorted value for the table
  const setSortedValue = (column) => {
    console.log(" ************************************  ", column)
    let sortedValue;

    if (isSorted && column.isSorted ) {
      sortedValue = column.isSortedDesc ? "desc" : "asc";
    } else if (isSorted) {
      sortedValue = "none";
    } else {
      sortedValue = false;
    }

    return sortedValue;
  };

  // Setting the entries ending point
  // let entriesEnd;

  // if (pageIndex === 0) {
  //   entriesEnd = pageSize;
  // } else if (pageIndex === pageOptions.length - 1) {
  //   entriesEnd = rows.length;
  // } else {
  //  // entriesEnd = pageSize * (pageIndex + 1);
  // }

  return (
    <TableContainer sx={{ boxShadow: "none" }}>
      <Table {...getTableProps()}>
        <Box component="thead">
          {headerGroups.map((headerGroup, outterIndex) => (
            <TableRow {...headerGroup.getHeaderGroupProps()} key={`outter${outterIndex}`}>
              {headerGroup.headers.map((column, innerIndex) => (
                <DataTableHeadCell
                  {...column.getHeaderProps(isSorted && column.getSortByToggleProps())}
                  width={column.width ? column.width : "auto"}
                  align={column.align ? column.align : "left"}
                  sorted={setSortedValue(column)}
                  key={`inner${innerIndex}`}
                >
                  {column.render("Header")}
                </DataTableHeadCell>
              ))}
            </TableRow>
          ))}
        </Box>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row, key) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} key={`key${key}`}>
                {row.cells.map((cell,innerIndex) => (
                  <DataTableBodyCell
                    noBorder={noEndBorder && rows.length - 1 === key}
                    align={cell.column.align ? cell.column.align : "left"}
                    {...cell.getCellProps()}
                    key={`inner${innerIndex}`}
                  >
                    {cell.render("Cell")}
                  </DataTableBodyCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Setting default values for the props of DataTable
DataTable.defaultProps = {
  entriesPerPage: { defaultValue: 10, entries: [5, 10, 15, 20, 25] },
  canSearch: false,
  showTotalEntries: true,
  pagination: { variant: "gradient", color: "info" },
  isSorted: true,
  noEndBorder: false,
};


export default DataTable;
