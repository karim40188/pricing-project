import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  //   Grid2,
  //   InputAdornment,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  //   Select,
  TextField,
  Typography,
} from "@mui/material";

import { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
// } from "@mui/material";

function Comparison() {
  // States for handling customer dialog and selection
  const [open, setOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  const [data, setData] = useState({
    supplier: "",
    grams: "",
    paperType: "",
    pricePerUnit: "",
    totalGrams: 0,
    totalPrice: 0,
  });
  const [data2, setData2] = useState({
    supplier: "",
    grams: "",
    paperType: "",
    pricePerUnit: "",
    totalGrams: 0,
    totalPrice: 0,
  });
  const [data3, setData3] = useState({
    supplier: "",
    grams: "",
    paperType: "",
    pricePerUnit: "",
    totalGrams: 0,
    totalPrice: 0,
  });

  const [pricingData1, setPricingData1] = useState({
    wastePercentage: "",
    operatingExpenses: "",
    profitMargin: "",
    annualFactorC: "",
    averagePaperCost: "",
    additionalOperatingExpenses: "",
    profit: "",
    profitPercentage: "",
    totalPricePerTon: "",
    boxWeight: "",
    exPrice: "",
  });

  const [pricingData2, setPricingData2] = useState({
    wastePercentage: "",
    operatingExpenses: "",
    profitMargin: "",
    annualFactorC: "",
    averagePaperCost: "",
    additionalOperatingExpenses: "",
    profit: "",
    profitPercentage: "",
    totalPricePerTon: "",
    boxWeight: "",
    exPrice: "",
  });
  const [pricingData3, setPricingData3] = useState({
    wastePercentage: "",
    operatingExpenses: "",
    profitMargin: "",
    annualFactorC: "",
    averagePaperCost: "",
    additionalOperatingExpenses: "",
    profit: "",
    profitPercentage: "",
    totalPricePerTon: "",
    boxWeight: "",
    exPrice: "",
  });

  const handlePricingChange = (e, setPricingData) => {
    const { name, value } = e.target;
    setPricingData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputChange2 = (e) => {
    const { name, value } = e.target;
    setData2((prev) => ({ ...prev, [name]: value }));
  };
  const handleInputChange3 = (e) => {
    const { name, value } = e.target;
    setData3((prev) => ({ ...prev, [name]: value }));
  };

  // Dummy customer data
  const customers = [
    { id: 1, name: "Customer A" },
    { id: 2, name: "Customer B" },
    { id: 3, name: "Customer C" },
  ];

  // Open and close dialog functions
  const handleTextFieldClick = () => {
    setOpen(true);
    setFilteredCustomers(customers);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handle customer selection
  const handleCustomerSelect = (customer) => {
    setCustomerName(customer.name);
    setCustomerId(customer.id);
    handleClose();
  };

  // Handle search functionality
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredCustomers(
      customers.filter((customer) => customer.name.toLowerCase().includes(term))
    );
  };

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Grid2 container justfiyContent="center" sx={{ gap: "30px" }}>
          <Grid2
            size={{ md: 5 }}
            sx={{
              border: "1px solid #ccc",
              p: "10px",
              width: "100%",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  width: "45%",
                }}
              >
                <TextField label="Movement Number" fullWidth />
                <TextField
                  label="Movement Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  label="Box Type"
                  fullWidth
                  select // Makes the TextField a dropdown
                >
                  <MenuItem value="type1">Type 1</MenuItem>
                  <MenuItem value="type2">Type 2</MenuItem>
                  <MenuItem value="type3">Type 3</MenuItem>
                </TextField>
                <TextField label="Tab" fullWidth />
              </Box>

              <Box
                sx={{
                  width: "45%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {/* Customer Name TextField with Dialog */}
                <TextField
                  sx={{ width: "100%", my: "5px" }}
                  label="Customer Name"
                  value={customerName}
                  onClick={handleTextFieldClick}
                  readOnly
                />

                <Dialog open={open} onClose={handleClose}>
                  <DialogTitle>Search for Customer</DialogTitle>
                  <DialogContent>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      Select a customer from the list below:
                    </Typography>

                    {/* Search Field */}
                    <TextField
                      label="Search Customer"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      fullWidth
                      margin="normal"
                    />

                    <List>
                      {filteredCustomers.length > 0 ? (
                        filteredCustomers.map((customer) => (
                          <ListItem
                            button
                            key={customer.id}
                            onClick={() => handleCustomerSelect(customer)}
                          >
                            <ListItemText primary={customer.name} />
                          </ListItem>
                        ))
                      ) : (
                        <ListItem>
                          <ListItemText primary="No matching results" />
                        </ListItem>
                      )}
                    </List>

                    <TextField
                      label="Customer ID"
                      value={customerId}
                      fullWidth
                      margin="normal"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                    <TextField
                      label="Customer Name"
                      value={customerName}
                      fullWidth
                      margin="normal"
                      InputProps={{
                        readOnly: true,
                      }}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Close
                    </Button>
                  </DialogActions>
                </Dialog>
              </Box>
            </Box>
          </Grid2>

          <Grid2 size={{ md: 5 }}>
            <Box
              sx={{
                border: "1px solid #ccc",
                p: "20px",
                width: "100%",
                borderRadius: "10px",
              }}
            >
              <TableContainer>
                <Table>
                  <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
                    <TableRow>
                      <TableCell>Box Name</TableCell>
                      <TableCell>LENGTH</TableCell>
                      <TableCell>WIDTH</TableCell>
                      <TableCell>HEIGHT</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Double Brown Simple Box</TableCell>
                      <TableCell>
                        <TextField
                          sx={{ width: "100%", backgroundColor: "white" }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          sx={{ width: "100%", backgroundColor: "white" }}
                        />
                      </TableCell>
                      <TableCell>
                        <TextField
                          sx={{ width: "100%", backgroundColor: "white" }}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Box Weight</TableCell>
                      <TableCell>
                        <TextField
                          sx={{ width: "100%", backgroundColor: "white" }}
                        />
                      </TableCell>
                      <TableCell colSpan={2}></TableCell>{" "}
                      {/* Empty cells to maintain structure */}
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid2>
        </Grid2>

        <Grid2 container sx={{ mt: "20px" }}>
          <Grid2
            size={{ xs: 4 }}
            sx={{
              border: "1px solid #ccc",
              p: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Pricing Table 1
            </Typography>
            <TableContainer sx={{ height: "auto" }} component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={11}>
                      <Box
                        sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                      >
                        {Object.keys(pricingData1).map((key) => (
                          <TextField
                            key={key}
                            name={key}
                            label={key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())} // Convert camelCase to readable format
                            value={pricingData1[key]}
                            onChange={(e) =>
                              handlePricingChange(e, setPricingData1)
                            }
                            fullWidth
                            variant="outlined"
                            sx={{ width: "45%" }}
                          />
                        ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box
              sx={{
                border: "1px solid #ccc",
                width: "100%",
                mt: "30px",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
              >
                <Select
                  name="supplier"
                  value={data.supplier}
                  onChange={handleInputChange}
                  fullWidth
                  displayEmpty
                  inputProps={{ "aria-label": "Select Supplier" }}
                >
                  <MenuItem value="" disabled>
                    Select Supplier
                  </MenuItem>
                  <MenuItem value="Supplier 1">Supplier 1</MenuItem>
                  <MenuItem value="Supplier 2">Supplier 2</MenuItem>
                  <MenuItem value="Supplier 3">Supplier 3</MenuItem>
                </Select>

                <TextField
                  name="grams"
                  type="number"
                  value={data.grams}
                  onChange={handleInputChange2}
                  fullWidth
                  label="Grams"
                />

                <Select
                  name="paperType"
                  value={data.paperType}
                  onChange={handleInputChange}
                  fullWidth
                  displayEmpty
                  inputProps={{ "aria-label": "Select Paper Type" }}
                >
                  <MenuItem value="" disabled>
                    Select Paper Type
                  </MenuItem>
                  <MenuItem value="Type A">Type A</MenuItem>
                  <MenuItem value="Type B">Type B</MenuItem>
                  <MenuItem value="Type C">Type C</MenuItem>
                </Select>

                <TextField
                  name="pricePerUnit"
                  type="number"
                  value={data.pricePerUnit}
                  onChange={handleInputChange}
                  fullWidth
                  label="Price per Unit (Excluding VAT)"
                />

                <TextField
                  name="totalGrams"
                  type="number"
                  value={data.totalGrams}
                  onChange={handleInputChange}
                  fullWidth
                  label="Total Grams"
                />
              </Box>
            </Box>
          </Grid2>





          <Grid2
            size={{ xs: 4 }}
            sx={{
              border: "1px solid #ccc",
              p: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Pricing Table 2
            </Typography>
            <TableContainer sx={{ height: "auto" }} component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={11}>
                      <Box
                        sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                      >
                        {Object.keys(pricingData2).map((key) => (
                          <TextField
                            key={key}
                            name={key}
                            label={key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())} // Convert camelCase to readable format
                            value={pricingData2[key]}
                            onChange={(e) =>
                              handlePricingChange(e, setPricingData2)
                            }
                            fullWidth
                            variant="outlined"
                            sx={{ width: "45%" }}
                          />
                        ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box
              sx={{
                border: "1px solid #ccc",
                width: "100%",
                mt: "30px",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
              >
                <Select
                  name="supplier"
                  value={data2.supplier}
                  onChange={handleInputChange2}
                  fullWidth
                  displayEmpty
                  inputProps={{ "aria-label": "Select Supplier" }}
                >
                  <MenuItem value="" disabled>
                    Select Supplier
                  </MenuItem>
                  <MenuItem value="Supplier 1">Supplier 1</MenuItem>
                  <MenuItem value="Supplier 2">Supplier 2</MenuItem>
                  <MenuItem value="Supplier 3">Supplier 3</MenuItem>
                </Select>

                <TextField
                  name="grams"
                  type="number"
                  value={data2.grams}
                  onChange={handleInputChange2}
                  fullWidth
                  label="Grams"
                />

                <Select
                  name="paperType"
                  value={data2.paperType}
                  onChange={handleInputChange2}
                  fullWidth
                  displayEmpty
                  inputProps={{ "aria-label": "Select Paper Type" }}
                >
                  <MenuItem value="" disabled>
                    Select Paper Type
                  </MenuItem>
                  <MenuItem value="Type A">Type A</MenuItem>
                  <MenuItem value="Type B">Type B</MenuItem>
                  <MenuItem value="Type C">Type C</MenuItem>
                </Select>

                <TextField
                  name="pricePerUnit"
                  type="number"
                  value={data2.pricePerUnit}
                  onChange={handleInputChange2}
                  fullWidth
                  label="Price per Unit (Excluding VAT)"
                />

                <TextField
                  name="totalGrams"
                  type="number"
                  value={data2.totalGrams}
                  onChange={handleInputChange2}
                  fullWidth
                  label="Total Grams"
                />
              </Box>
            </Box>
          </Grid2>





          <Grid2
            size={{ xs: 4 }}
            sx={{
              border: "1px solid #ccc",
              p: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Pricing Table 3
            </Typography>
            <TableContainer sx={{ height: "auto" }} component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={11}>
                      <Box
                        sx={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                      >
                        {Object.keys(pricingData3).map((key) => (
                          <TextField
                            key={key}
                            name={key}
                            label={key
                              .replace(/([A-Z])/g, " $1")
                              .replace(/^./, (str) => str.toUpperCase())} // Convert camelCase to readable format
                            value={pricingData3[key]}
                            onChange={(e) =>
                              handlePricingChange(e, setPricingData3)
                            }
                            fullWidth
                            variant="outlined"
                            sx={{ width: "45%" }}
                          />
                        ))}
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Box
              sx={{
                border: "1px solid #ccc",
                width: "100%",
                mt: "30px",
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
              >
                <Select
                  name="supplier"
                  value={data3.supplier}
                  onChange={handleInputChange3}
                  fullWidth
                  displayEmpty
                  inputProps={{ "aria-label": "Select Supplier" }}
                >
                  <MenuItem value="" disabled>
                    Select Supplier
                  </MenuItem>
                  <MenuItem value="Supplier 1">Supplier 1</MenuItem>
                  <MenuItem value="Supplier 2">Supplier 2</MenuItem>
                  <MenuItem value="Supplier 3">Supplier 3</MenuItem>
                </Select>

                <TextField
                  name="grams"
                  type="number"
                  value={data3.grams}
                  onChange={handleInputChange3}
                  fullWidth
                  label="Grams"
                />

                <Select
                  name="paperType"
                  value={data3.paperType}
                  onChange={handleInputChange3}
                  fullWidth
                  displayEmpty
                  inputProps={{ "aria-label": "Select Paper Type" }}
                >
                  <MenuItem value="" disabled>
                    Select Paper Type
                  </MenuItem>
                  <MenuItem value="Type A">Type A</MenuItem>
                  <MenuItem value="Type B">Type B</MenuItem>
                  <MenuItem value="Type C">Type C</MenuItem>
                </Select>

                <TextField
                  name="pricePerUnit"
                  type="number"
                  value={data3.pricePerUnit}
                  onChange={handleInputChange3}
                  fullWidth
                  label="Price per Unit (Excluding VAT)"
                />

                <TextField
                  name="totalGrams"
                  type="number"
                  value={data3.totalGrams}
                  onChange={handleInputChange3}
                  fullWidth
                  label="Total Grams"
                />
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}

export default Comparison;
