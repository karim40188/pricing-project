import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Home() {

  const [open, setOpen] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [customerList] = useState([
    { id: "1", name: "Customer A" },
    { id: "2", name: "Customer B" },
    { id: "3", name: "Customer C" },
    { id: "4", name: "Customer D" },
    { id: "5", name: "Customer E" },
    { id: "6", name: "Customer F" },
    { id: "7", name: "Customer G" },
    // أضف المزيد من العملاء حسب الحاجة
  ]);

  const handleTextFieldClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSearchTerm(""); // إعادة تعيين قيمة البحث عند الإغلاق
  };

  const handleCustomerSelect = (customer) => {
    setCustomerId(customer.id);
    setCustomerName(customer.name);
    handleClose();
  };

  // تصفية العملاء بناءً على قيمة البحث
  const filteredCustomers = customerList.filter((customer) =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  const [data, setData] = useState({
    supplier: "",
    grams: "",
    paperType: "",
    pricePerUnit: "",
    totalGrams: 0,
    totalPrice: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
      totalGrams: name === "grams" ? value : data.grams, // Update total grams if grams field changes
      totalPrice: name === "pricePerUnit" ? value : data.pricePerUnit, // Update total price if price field changes
    });
  };

  return (
    <Box>
      <Grid2 container sx={{  gap: "50px" }}>
        <Grid2
          size={{ xs: 4 }}
          sx={{ display: "flex", flexDirection: "column", gap: "30px" }}
        >
          {/* First Box */}
          <Box sx={{ border: "1px solid #ccc", p: "10px" }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  width: "45%",
                }}
              >
                <TextField label="Statement Number" fullWidth />
                <TextField label="Statement Date" fullWidth />
                <TextField
                  label="Box Type"
                  fullWidth
                  select // يجعل TextField قائمة منسدلة
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
                <TextField label="Waste Percentage" fullWidth />
                <TextField label="Operating Expenses" fullWidth />
                <TextField label="Profit Margin" fullWidth />
                <TextField label="Annual Factor C" fullWidth />
                <TextField label="Annual Factor B" fullWidth />
              </Box>
              <Box>
                <Box>
                  <TextField
                    sx={{ width: "100%", my: "5px" }}
                    label="Customer Name"
                    value={customerName}
                    onClick={handleTextFieldClick}
                    readOnly
                  />

                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>بحث عن بيانات عميل</DialogTitle>
                    <DialogContent>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        اختر عميل من القائمة أدناه:
                      </Typography>

                      {/* خانة البحث */}
                      <TextField
                        label="بحث عن عميل"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                            <ListItemText primary="لا توجد نتائج مطابقة" />
                          </ListItem>
                        )}
                      </List>

                      <TextField
                        label="رقم العميل"
                        value={customerId}
                        fullWidth
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                      <TextField
                        label="اسم العميل"
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
                        إغلاق
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
                <TextField sx={{ width: "100%" }} label="Box Name" />
              </Box>
            </Box>
          </Box>

          {/* Second Box - Table 1 */}
          <Box sx={{ border: "1px solid #ccc", p: "20px", width: "100%" }}>
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

          {/* Third Box - Table 2 */}
          <Box
            sx={{
              border: "1px solid #ccc",
              p: "20px",
              width: "100%",
              mt: "30px",
              borderRadius: "5px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Cost and Profit Summary
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
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
                onChange={handleInputChange}
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

        <Grid2 size={{ xs: 4 }}>
          <Box sx={{ border: "1px solid #ccc", p: "20px", width: "100%" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Surface Dimensions
            </Typography>
            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
                  <TableRow>
                    <TableCell>Dimension</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Length</TableCell>
                    <TableCell>
                      <TextField name="length" fullWidth />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Width</TableCell>
                    <TableCell>
                      <TextField name="width" fullWidth />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box
            sx={{
              border: "1px solid #ccc",
              p: "20px",
              width: "100%",
              mt: "30px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Cost and Profit Summary
            </Typography>

            {/* جعل الحقول تحت بعضها */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <TextField
                name="averagePaperCost"
                fullWidth
                label="Average Paper Cost"
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  maxLength: 7,
                }}
              />

              <TextField
                name="averageOperatingCost"
                fullWidth
                label="Average Operating Cost"
              />

              <TextField name="profit" fullWidth label="Profit" />

              <TextField
                name="profitPercentage"
                fullWidth
                label="Profit Percentage"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />

              <TextField
                name="totalPriceExcludingVAT"
                fullWidth
                label="Total Price (Excluding VAT)"
              />

              <TextField
                name="totalPriceIncludingVAT"
                fullWidth
                label="Total Price (Including VAT)"
              />
            </Box>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 2 }}>
          <Box
            sx={{
              border: "1px solid #ccc",
              p: "20px",
              width: "100%",
              //   mt: "20px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              User Information
            </Typography>

            {/* بيانات المستخدم */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <TextField label="Created By" variant="outlined" fullWidth />
              <TextField
                label="Creation Date"
                type="date"
                variant="outlined"
                fullWidth
                slotProps={{
                  inputLabel: {
                    style: {
                      transform: "translate(2px,-8px)",
                    },
                  },
                }}
              />
              <TextField label="Modified By" variant="outlined" fullWidth />
              <TextField
                label="Modification Date"
                type="date"
                variant="outlined"
                fullWidth
                slotProps={{
                  inputLabel: {
                    style: {
                      transform: "translate(2px,-8px)",
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default Home;
