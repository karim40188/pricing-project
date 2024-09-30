import { Box, Button, Grid2, TextField, Typography } from "@mui/material";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function SideBar() {
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
      {/* side bar */}
      <Box
        sx={{
          backgroundColor: "#000",
          width: "15%",
          height: "100vh",
          position: "fixed",
          left: "0",
          top: "0",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Typography>Dashboard</Typography>
        <Typography>Price List</Typography>
        <Typography>Transactions</Typography>
        <Typography>Profit Analysis</Typography>
        <Typography>Reports</Typography>
        <Typography>Settings</Typography>
      </Box>

      <Grid2 container sx={{ ml: "15%", gap: "50px" }}>
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
                <TextField label="Box Type" fullWidth />
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
                <TextField
                  sx={{ width: "100%", my: "5px" }}
                  label="Customer Name"
                />
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
              width: "100%",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
                  <TableRow>
                    <TableCell>Supplier</TableCell>
                    <TableCell>Grams</TableCell>
                    <TableCell>Paper Type</TableCell>
                    <TableCell>Price per Unit (Excluding VAT)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TextField
                        name="supplier"
                        value={data.supplier}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="grams"
                        type="number"
                        value={data.grams}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="paperType"
                        value={data.paperType}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="pricePerUnit"
                        type="number"
                        value={data.pricePerUnit}
                        onChange={handleInputChange}
                        fullWidth
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* Total Calculation */}
            <Box
              sx={{
                padding: "16px",
                borderTop: "1px solid black",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography>
                Total Price (Excluding VAT): {data.totalPrice}
              </Typography>
              <Typography>Total Grams: {data.totalGrams}</Typography>
            </Box>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 3 }}>
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
            <TableContainer>
              <Table>
                <TableHead sx={{ backgroundColor: "#f2f2f2" }}>
                  <TableRow>
                    <TableCell>Average Paper Cost</TableCell>
                    <TableCell>Average Operating Cost</TableCell>
                    <TableCell>Profit</TableCell>
                    <TableCell>Profit Percentage</TableCell>
                    <TableCell>Total Price (Excluding VAT)</TableCell>
                    <TableCell>Total Price (Including VAT)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TextField name="averagePaperCost" fullWidth />
                    </TableCell>
                    <TableCell>
                      <TextField name="averageOperatingCost" fullWidth />
                    </TableCell>
                    <TableCell>
                      <TextField name="profit" fullWidth />
                    </TableCell>
                    <TableCell>
                      <TextField name="profitPercentage" fullWidth />
                    </TableCell>
                    <TableCell>
                      <TextField name="totalPriceExcludingVAT" fullWidth />
                    </TableCell>
                    <TableCell>
                      <TextField name="totalPriceIncludingVAT" fullWidth />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box
            sx={{
              border: "1px solid #ccc",
              p: "10px",
              width: "100%",
              height: "200px", // ارتفاع محدود
              overflowY: "scroll", // التمرير العمودي
              backgroundColor: "#f9f9f9",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Companies List
            </Typography>

            {/* قائمة الشركات الوهمية */}
            {[
              "Company A",
              "Company B",
              "Company C",
              "Company D",
              "Company E",
              "Company F",
              "Company G",
              "Company H",
            ].map((company, index) => (
              <Box
                key={index}
                sx={{
                  padding: "10px",
                  marginBottom: "5px",
                  borderRadius: "4px",
                  backgroundColor: "#fff",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                {company}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              border: "1px solid #ccc",
              p: "20px",
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Search and Add New Items
            </Typography>

            {/* حقل البحث بالمقاس */}
            <TextField
              label="Search by Size"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />

            {/* حقل البحث برقم التسعير */}
            <TextField
              label="Search by Pricing Number"
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />

            {/* زر إلغاء البحث */}
            <Button variant="outlined" sx={{ mb: 2 }}>
              Cancel Search
            </Button>

            {/* زر إضافة مورد جديد */}
            <Button variant="contained" sx={{ mb: 1 }}>
              Add New Supplier
            </Button>

            {/* زر إضافة نوع ورق جديد */}
            <Button variant="contained" sx={{ mb: 1 }}>
              Add New Paper Type
            </Button>

            {/* زر إضافة عميل جديد */}
            <Button variant="contained" sx={{ mb: 1 }}>
              Add New Client
            </Button>

            {/* زر إضافة صنف جديد */}
            <Button variant="contained">Add New Item</Button>
          </Box>

          <Box
            sx={{
              border: "1px solid #ccc",
              p: "20px",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {/* أزرار التحكم */}
            <Button variant="outlined" sx={{ mb: 1 }}>
              First
            </Button>
            <Button variant="outlined" sx={{ mb: 1 }}>
              Second
            </Button>
            <Button variant="outlined" sx={{ mb: 1 }}>
              Undo
            </Button>
            <Button variant="contained" sx={{ mb: 1 }}>
              Save
            </Button>
            <Button variant="outlined" sx={{ mb: 1 }}>
              Print
            </Button>
            <Button variant="outlined" sx={{ mb: 1 }}>
              Previous
            </Button>
            <Button variant="outlined" sx={{ mb: 1 }}>
              Last
            </Button>
            <Button variant="outlined" sx={{ mb: 1 }}>
              Delete
            </Button>
            <Button variant="contained" sx={{ mb: 1 }}>
              Edit
            </Button>
            <Button variant="contained" sx={{ mb: 1 }}>
              Close
            </Button>
          </Box>
        </Grid2>

        <Grid2 size={{ xs: 3 }}>
          <Box
            sx={{
              border: "1px solid #ccc",
              p: "20px",
              width: "100%",
              height: "80vh",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Pricing Data
            </Typography>

            {/* قائمة الشركات الوهمية */}
            {[
              "Company A",
              "Company B",
              "Company C",
              "Company D",
              "Company E",
              "Company E",
              "Company E",
              "Company E",
              "Company E",
              "Company E",
            ].map((company, index) => (
              <Box
                key={index}
                sx={{
                  padding: "10px",
                  marginBottom: "5px",
                  borderRadius: "4px",
                  backgroundColor: "#f2f2f2",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                }}
              >
                {company}
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              border: "1px solid #ccc",
              p: "20px",
              width: "100%",
              mt: "20px",
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

export default SideBar;
