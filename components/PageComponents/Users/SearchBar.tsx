import { Add, Search } from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

const SearchBar = () => {
  return (
    <>
      <Box className="flex items-stretch justify-between gap-3">
        <Typography component="h2" className="font-heading text-2xl font-bold mb-5">
          Manage your users
        </Typography>
        <TextField
          id="input-with-icon-textfield"
          className="basis-[40%] bg-[#F2EFEB]"
          placeholder="Search for a user"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <FormControl className="basis-[20%] bg-[#F2EFEB]">
          <InputLabel id="demo-simple-select-label">Filter by Department</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value="" label="Sort By">
            <MenuItem value={10}>Design</MenuItem>
            <MenuItem value={20}>Engineering</MenuItem>
            <MenuItem value={30}>Date Added</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" className="bg-kami-blue basis-[15%] normal-case text-lg">
          Add Users
          <Add className="ml-3" />
        </Button>
      </Box>
    </>
  );
};

export default SearchBar;
