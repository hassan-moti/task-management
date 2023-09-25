"use client";
// next imports
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import * as React from 'react';

// css file import
import "./login.css";

// material imports
import { Autocomplete, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

export default function Login() {
  const router = useRouter();

  const navigate = (name: string) => {
    router.push("/" + name);
  };
  const [date, setDate] = useState<Date | null | undefined>(null);
  return (
    <div>
      <Card className="login-card" variant="outlined">
        <CardContent>
          <div className="card-content">
            <Grid container spacing={1}>
              <Grid item md={1}></Grid>
              <Grid item md={10}>
                <h1 className="login-Heading">Login Page</h1>
              </Grid>
              <Grid item md={1}></Grid>
              <Grid item md={1}></Grid>
              <Grid item md={10}>
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  className="login-textfield"
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
                  className="login-textfield"
                  required
                />
              </Grid>
              <Grid item md={1}></Grid>

              <Grid item md={1}></Grid>
              <Grid item md={10}>
                <Button
                  variant="contained"
                  className="signup-textfield"
                  onClick={() => navigate("dashboard")}
                >
                  Login
                </Button>
              </Grid>
              <Grid item md={1}></Grid>
            </Grid>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
