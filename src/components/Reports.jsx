import { Box, Button, TextField, Typography, Grid2 } from '@mui/material';

const Reports = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Reports Screen
      </Typography>
      <Grid2 container spacing={3}>
        <Grid2 size={{xs:6}}>
          <TextField
            label="Start Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid2>
        <Grid2 size={{xs:6}}>
          <TextField
            label="End Date"
            type="date"
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid2>
        <Grid2 size={{xs:6}}>
          <TextField
            label="Item Code"
            fullWidth
          />
        </Grid2>
        <Grid2 size={{xs:6}}>
          <TextField
            label="Item Name"
            fullWidth
          />
        </Grid2>
        <Grid2 size={{xs:6}}>
          <TextField
            label="Customer Code"
            fullWidth
          />
        </Grid2>
        <Grid2 size={{xs:6}}>
          <TextField
            label="Customer Name"
            fullWidth
          />
        </Grid2>
      </Grid2>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Button Group
        </Typography>
        <Grid2 container spacing={2}>
          <Grid2 size={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Pricing Statement for Period
            </Button>
          </Grid2>
          <Grid2 size={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Pricing Statement for Period / Approved
            </Button>
          </Grid2>
          <Grid2 size={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Pricing Statement for Period / Not Approved
            </Button>
          </Grid2>
          <Grid2 size={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Pricing Statement for Period / Item
            </Button>
          </Grid2>
          <Grid2 size={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Pricing Statement for Period / Approved / Item
            </Button>
          </Grid2>
          <Grid2 size={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Pricing Statement for Period / Not Approved / Item
            </Button>
          </Grid2>
          <Grid2 size={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Pricing Statement for Period / Customer
            </Button>
          </Grid2>
          <Grid2 size={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Pricing Statement for Period / Approved / Customer
            </Button>
          </Grid2>
          <Grid2 size={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Pricing Statement for Period / Not Approved / Customer
            </Button>
          </Grid2>
          <Grid2 size={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Latest Prices List / By Customer
            </Button>
          </Grid2>
          <Grid2 size={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Latest Prices List / By Item
            </Button>
          </Grid2>
          <Grid2 size={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Latest Prices List / Customer
            </Button>
          </Grid2>
          <Grid2 isize={{xs:6}}>
            <Button variant="contained" color="primary" fullWidth>
              Latest Prices List / Item
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default Reports;
