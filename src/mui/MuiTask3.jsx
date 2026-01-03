import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MuiTask3 = () => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f6fa" }}>
      {/* sidebar */}
      <Box
        sx={{
          width: 240,
          bgcolor: "#0f172a",
          color: "white",
          p: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 3 }}>
          Indian Traders
        </Typography>

        <List>
          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItem>

          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>

          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItem>

          <Divider sx={{ bgcolor: "#334155", my: 2 }} />

          <ListItem button>
            <ListItemIcon sx={{ color: "white" }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Box>

      <Box sx={{ flexGrow: 1, p: 3 }}>
        {/*top budget , total customer , task completed , monthly profit */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  BUDGET
                </Typography>
                <Typography variant="h4">₹18.5 Lakh</Typography>
                <Typography color="error">↓ 5% Since last month</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  TOTAL CUSTOMERS
                </Typography>
                <Typography variant="h4">2.4k</Typography>
                <Typography color="success.main">↑ 12% Since last month</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  TASKS COMPLETED
                </Typography>
                <Typography variant="h4">68%</Typography>
                <LinearProgress
                  variant="determinate"
                  value={68}
                  sx={{ mt: 2, height: 10, borderRadius: 5 }}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  MONTHLY PROFIT
                </Typography>
                <Typography variant="h4">₹15.2 Lakh</Typography>
                <Typography color="success.main">↑ 8% Since last month</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MuiTask3;
