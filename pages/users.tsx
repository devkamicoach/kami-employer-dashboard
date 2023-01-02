import UsersLayout from 'components/PageComponents/Users/UsersLayout';
import Groups from 'components/PageComponents/Users/Groups';
import SearchBar from 'components/PageComponents/Users/SearchBar';
import Table from 'components/PageComponents/Users/Table';

const Users = () => {
  const groups = [
    { name: "Parents", number: 614 },
    { name: "Careers", number: 124 },
    { name: "Expecting", number: 12 },
  ]

  const tableData = [
    {
      name: "Victor Perez",
      userId: "KH-0232",
      userType: "Active",
      lastUpdated: "5h ago",
      groups: "Parent, Fathers, Probationary"
    },
    {
      name: "Lena Page",
      userId: "KH-0234",
      userType: "Active",
      lastUpdated: "3 days ago",
      groups: "Parent, Mother"
    },
    {
      name: "Jane Doe",
      userId: "KH-0234",
      userType: "Dormant",
      lastUpdated: "16 days ago",
      groups: "Expecting"
    },
    {
      name: "Rena Paul",
      userId: "KH-0235",
      userType: "Power User",
      lastUpdated: "2h ago",
      groups: "Probationary"
    },
    {
      name: "John Snow",
      userId: "KH-0235",
      userType: "Power User",
      lastUpdated: "2h ago",
      groups: "Veteran"
    },
    {
      name: "John Snow",
      userId: "KH-0235",
      userType: "Power User",
      lastUpdated: "2h ago",
      groups: "Veteran"
    },
    {
      name: "John Snow",
      userId: "KH-0235",
      userType: "Power User",
      lastUpdated: "2h ago",
      groups: "Veteran"
    }
  ]

  return <UsersLayout search={<SearchBar />} groups={<Groups groupList={groups} />} table={<Table data={tableData} />} />;
};

export default Users;
