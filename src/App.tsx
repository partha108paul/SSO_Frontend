import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Button, Flex } from "@chakra-ui/react";
import Cookies from "js-cookie";

const App = () => {
  const [data, setData] = useState<any>();
  const ViewResult = async () => {
    console.log("Token", data && data.result.token);
    Cookies.set("token", data?.result?.token);
  };

  const RandomColor = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      flag: false,
      sessionID: "9d1cff3e-7f6f-437c-9a57-c94e2655151e",
      otp: "21470",
      phone: "+913698521470",
    });

    const response = await fetch("http://127.0.0.1:17001/v1/auth/login", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    })
      .then((r) => r.json())
      .catch((error) => console.log("error", error));
    setData(response);
  };

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Button
        /* flex={1} */
        px={4}
        fontSize={"sm"}
        rounded={"full"}
        bg={"blue.400"}
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "blue.500",
        }}
        _focus={{
          bg: "blue.500",
        }}
        onClick={() => RandomColor()}
      >
        Sign In
      </Button>
      <Button
        /* flex={1} */
        px={4}
        ml={10}
        fontSize={"sm"}
        rounded={"full"}
        bg={"blue.400"}
        color={"white"}
        boxShadow={
          "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
        }
        _hover={{
          bg: "blue.500",
        }}
        _focus={{
          bg: "blue.500",
        }}
        onClick={() => ViewResult()}
      >
        SSO Login
      </Button>
    </Flex>
  );
};

export default App;
