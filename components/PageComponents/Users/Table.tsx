import { CheckCircle, Delete } from "@mui/icons-material"
import { TableCell, TableContainer, TableHead, TableRow, Table as TableMUI, TableBody, TablePagination } from "@mui/material"
import { FunctionComponent, useState } from "react"
import type { UsersType } from "types/users"

type TableTypes = {
  data: Array<UsersType>
}

const Table: FunctionComponent<TableTypes> = ({ data }) => {
  const headCells = [
    { id: "name", numeric: false, label: "Name", disablePadding: false },
    { id: "user_id", numeric: false, label: "User ID", disablePadding: false },
    { id: "user_type", numeric: false, label: "User Type", disablePadding: false },
    { id: "last_updated", numeric: false, label: "Last Updated", disablePadding: false },
    { id: "groups", numeric: false, label: "Groups", disablePadding: false },
    { id: "action", numeric: false, label: "Action", disablePadding: false },
  ]

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer>
        <TableMUI>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                  padding={headCell.disablePadding ? 'none' : 'normal'}
                  className="bg-[#F2EFEB]"
                // sortDirection={orderBy === headCell.id ? order : false}
                >
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ name, userId, userType, lastUpdated, groups }, index) => (
                <TableRow key={index}>
                  <TableCell>{name}</TableCell>
                  <TableCell>{userId}</TableCell>
                  <TableCell>{userType}</TableCell>
                  <TableCell>{lastUpdated}</TableCell>
                  <TableCell>{groups}</TableCell>
                  <TableCell>
                    <CheckCircle className="text-gray-100" />
                    <Delete className="text-gray-100" />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </TableMUI>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="justify-center"
      />
    </>
  )
}

export default Table