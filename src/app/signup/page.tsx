"use client";
// next imports

import { useEffect, useState } from "react";
import {useRouter} from 'next/navigation'
// import * as React from 'react';

// material imports
import { Autocomplete, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./signup.css"; // Import your CSS file
import { DatePicker } from "@mui/x-date-pickers"; // Import DatePicker from @mui/lab
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function Signup() {

    const router = useRouter();
    
    const navigate = (name:string)=>{
        router.push("/"+name)
      }
  const [date, setDate] = useState<Date | null | undefined>(null);
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Card className="signup-card" variant="outlined">
          <CardContent>
            <div className="card-content">
              <Grid container spacing={1}>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                  <h1 className="signup">SignUp Page</h1>
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    className="signup-textfield"
                    required
                  />
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    className="signup-textfield"
                    required
                  />
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                  {/* <TextField
                  id="outlined-basic"
                  label="Date of birth"
                  variant="outlined"
                  className="signup-textfield"
                  required
                /> */}
                  <DatePicker
                    // selected={date}
                    // showYearDropdown
                    label="date of birth"
                    className="signup-textfield"
                    // showMonthDropdown
                    // placeholderText="MM-DD-YYYY"
                    // customInput={<CustomInput />}
                    // id="form-layouts-separator-date"
                    // onChange={(date: Date) => setDate(date)}
                  />
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    className="signup-textfield"
                    required
                  />
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                    className="signup-textfield"
                    required
                  />
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                  <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    className="signup-textfield"
                    options={Roles}
                    getOptionLabel={(option) => option.roleType}
                    renderInput={(params) => (
                      <TextField {...params} label="Role" />
                    )}
                  />
                </Grid>
                <Grid item md={1}></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                  <Button variant="contained" className="signup-textfield" onClick={()=>navigate("login")}>
                    Create Account
                  </Button>
                </Grid>
                <Grid item md={1}></Grid>
              </Grid>
            </div>
          </CardContent>
        </Card>
      </LocalizationProvider>
    </div>
  );
}
const Roles = [
  {
    roleType: "Dev",
    roleCode: "1",
  },
  {
    roleType: "QAT",
    roleCode: "2",
  },
  {
    roleType: "Team Lead",
    roleCode: "3",
  },
];
