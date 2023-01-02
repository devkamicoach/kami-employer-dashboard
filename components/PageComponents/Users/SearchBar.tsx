import { Add, Search } from '@mui/icons-material';
import { Box, Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';

const SearchBar = () => {
  return (
    <>
      <Typography component="h2" className="font-body text-xl font-bold mb-5">
        User Management
      </Typography>
      <Box className="flex items-stretch gap-3">
        <TextField
          id="input-with-icon-textfield"
          className="basis-[70%]"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />
        <Button variant="contained" className="bg-kami-blue basis-[10%]">
          Add User
          <Add className="ml-3" />
        </Button>
        <FormControl className="basis-[10%]">
          <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={undefined}
            label="Sort By"
          >
            <MenuItem value={10}>Alphabetical [A-Z]</MenuItem>
            <MenuItem value={20}>Alphabetical [Z-A]</MenuItem>
            <MenuItem value={30}>Date Added</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default SearchBar;
