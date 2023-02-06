import UsersLayout from 'components/PageComponents/Users/UsersLayout';
import SearchBar from 'components/PageComponents/Users/SearchBar';
import Table from 'components/PageComponents/Users/Table';

const Users = () => {
  // const groups = [
  //   { name: 'Parents', number: 614 },
  //   { name: 'Careers', number: 124 },
  //   { name: 'Expecting', number: 12 },
  // ];
  const tableData = [
    {
      seat: '1',
      name: 'Victor Perez',
      email: 'vperez@gmail.com',
      department: 'Design',
      position: 'UX Designer',
      groups: 'Parent, Fathers, Probationary',
      date: 'Feb 6, 2023',
    },
    {
      seat: '1',
      name: 'Victor Perez',
      email: 'vperez@gmail.com',
      department: 'Design',
      position: 'UX Designer',
      groups: 'Parent, Fathers, Probationary',
      date: 'Feb 6, 2023',
    },
    {
      seat: '1',
      name: 'Victor Perez',
      email: 'vperez@gmail.com',
      department: 'Design',
      position: 'UX Designer',
      groups: 'Parent, Fathers, Probationary',
      date: 'Feb 6, 2023',
    },
    {
      seat: '1',
      name: 'Victor Perez',
      email: 'vperez@gmail.com',
      department: 'Design',
      position: 'UX Designer',
      groups: 'Parent, Fathers, Probationary',
      date: 'Feb 6, 2023',
    },
    {
      seat: '1',
      name: 'Victor Perez',
      email: 'vperez@gmail.com',
      department: 'Design',
      position: 'UX Designer',
      groups: 'Parent, Fathers, Probationary',
      date: 'Feb 6, 2023',
    },
    {
      seat: '1',
      name: 'Victor Perez',
      email: 'vperez@gmail.com',
      department: 'Design',
      position: 'UX Designer',
      groups: 'Parent, Fathers, Probationary',
      date: 'Feb 6, 2023',
    },
    {
      seat: '1',
      name: 'Victor Perez',
      email: 'vperez@gmail.com',
      department: 'Design',
      position: 'UX Designer',
      groups: 'Parent, Fathers, Probationary',
      date: 'Feb 6, 2023',
    },
    {
      seat: '1',
      name: 'Victor Perez',
      email: 'vperez@gmail.com',
      department: 'Design',
      position: 'UX Designer',
      groups: 'Parent, Fathers, Probationary',
      date: 'Feb 6, 2023',
    },
    {
      seat: '1',
      name: 'Victor Perez',
      email: 'vperez@gmail.com',
      department: 'Design',
      position: 'UX Designer',
      groups: 'Parent, Fathers, Probationary',
      date: 'Feb 6, 2023',
    },
    {
      seat: '1',
      name: 'Victor Perez',
      email: 'vperez@gmail.com',
      department: 'Design',
      position: 'UX Designer',
      groups: 'Parent, Fathers, Probationary',
      date: 'Feb 6, 2023',
    },
  ];

  return <UsersLayout search={<SearchBar />} table={<Table data={tableData} />} />;
};

export default Users;
