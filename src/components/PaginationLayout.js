import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationLayout = () => {
  return (
    <Stack spacing={3}>
      {/* <Pagination count={10} shape="rounded" /> */}
      <Pagination count={100} variant="outlined" shape="rounded" />
    </Stack>
  );
};

export default PaginationLayout;
