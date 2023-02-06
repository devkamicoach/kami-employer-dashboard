import { Delete } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import {
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table as TableMUI,
  TableBody,
  TablePagination,
} from '@mui/material';
import { FunctionComponent, useState } from 'react';
import type { UsersType } from 'types/users';

type TableTypes = {
  data: Array<UsersType>;
};

const Table: FunctionComponent<TableTypes> = ({ data }) => {
  const headCells = [
    { id: 'seat', numeric: false, label: 'Seat', disablePadding: false },
    { id: 'name', numeric: false, label: 'Name', disablePadding: false },
    { id: 'email', numeric: false, label: 'Email', disablePadding: false },
    { id: 'department', numeric: false, label: 'Department', disablePadding: false },
    { id: 'position', numeric: false, label: 'Position', disablePadding: false },
    { id: 'groups', numeric: false, label: 'Groups', disablePadding: false },
    { id: 'date', numeric: false, label: 'Date Added', disablePadding: false },
    { id: 'action', numeric: false, label: 'Action', disablePadding: false },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(({ seat, name, email, department, position, groups, date }, index) => (
                <TableRow key={index}>
                  <TableCell>{seat}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{email}</TableCell>
                  <TableCell>{department}</TableCell>
                  <TableCell>{position}</TableCell>
                  <TableCell>{groups}</TableCell>
                  <TableCell>{date}</TableCell>
                  <TableCell>
                    <EditIcon className="text-[#B6B6B6]" />
                    <Delete className="text-[#B6B6B6]" />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </TableMUI>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="justify-center"
      />
    </>
  );
};

export default Table;
