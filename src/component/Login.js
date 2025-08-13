"use client";
import { Box, Button, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import { useState } from "react";

const LoginComp = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="h-full w-full flex">
      {/* Left Side */}
      <div className="h-full w-[35%] border "></div>

      {/* Right Side */}
      <div className="h-full w-[65%] border flex justify-center items-center">
        <Box
         sx={{
    width: 400,
    height: 400,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: "rgba(151, 121, 121, 0.2)", // light transparent gray
    backdropFilter: "blur(4px)",                  // optional slight blur
  }}
        >
          {/* Tabs */}
          <div className="h-[12%] relative flex justify-center items-center gap-24">
            
              <div
              className={`absolute bg- top-0 h-full w-1/2 bg-blue-200 rounded-t transition-all duration-300`}
              style={{ left: login ? "0%" : "50%",  background: "rgba(255, 255, 255, 0.25)", // semi-transparent white
    backdropFilter: "blur(10px)",            // blur effect
    WebkitBackdropFilter: "blur(10px)",      // for Safari
    border: "1px solid rgba(255, 255, 255, 0.3)",zIndex:0,color: login ? "black":"white" }}
            ></div>
            <button
              onClick={() => setLogin(true)}
              className={`text-lg font-medium ${
                login ? "text-blue-500" : "text-black"
              }`}
            >
              SignIn
            </button>
            <button
              onClick={() => setLogin(false)}
              className={`text-lg font-medium ${
                !login ? "text-blue-500" : "text-black"
              }`}
            >
              Signup
            </button>
          </div>

          {/* Form */}
          {login ? (
            // SignIn Form
            <div className="h-[88%] flex flex-col justify-center items-center gap-4 p-4">
              <TextField fullWidth label="User Name" variant="outlined" />
              <TextField fullWidth type="password" label="Password" variant="outlined" />
              <Button variant="contained" sx={{ width: 200 }}>
                SignIn
              </Button>
            </div>
          ) : (
            // SignUp Form  
            <div className="h-[88%] flex flex-col justify-center items-center gap-12 p-4">
              <div className="flex gap-2">
                <TextField fullWidth label="User Name" variant="outlined" />
                <TextField fullWidth type="password" label="Password" variant="outlined" />
              </div>
              <div className="flex gap-2">
                <TextField fullWidth label="Phone" variant="outlined" />
                <TextField fullWidth label="Email Id" variant="outlined" />
              </div>
              <div className="flex justify-center">
                <Button variant="contained" sx={{ width: "100%" }}>
                  SignUp
                </Button>
              </div>
            </div>
          )}
        </Box>
      </div>
    </div>
  );
};

export default LoginComp;
