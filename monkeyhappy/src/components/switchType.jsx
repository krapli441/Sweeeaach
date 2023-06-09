// 리액트 라이브러리
import React from "react";
import { Link } from "react-router-dom";
// 리액트 컴포넌트
import { Box, Image, Text } from "@chakra-ui/react";
import ClickSwitch from "./clickSwitch/clickSwitch";
import TactileSwitch from "./tactileSwitch/tactileSwitch";
import LinearSwitch from "./linearSwitch/linearSwitch";
import BlackSwitch from "./blackSwitch/blackSwitch";

import "@fontsource/staatliches";

export default function () {
  return (
    <>
      <Box
        className="switchBoxArea"
        width={"15%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          className="clickBox"
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          transition="0.2s ease"
          _hover={{
            transform: "scale(1.1)",
          }}
        >
          <Link to={"/clickSwitch"}>
            <ClickSwitch />
          </Link>
          <Text
            fontFamily={"Staatliches"}
            fontSize={35}
            fontWeight={900}
            color={"#00A6FB"}
          >
            CLICK
          </Text>
        </Box>
      </Box>
      <Box
        className="switchBoxArea"
        width={"15%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          className="tactileBox"
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          transition="0.2s ease"
          _hover={{
            transform: "scale(1.1)",
          }}
        >
          <Link to={"/tactileSwitch"}>
            <TactileSwitch></TactileSwitch>
          </Link>
          <Text
            fontFamily={"Staatliches"}
            fontSize={35}
            fontWeight={900}
            color={"#5E503F"}
          >
            TACTILE
          </Text>
        </Box>
      </Box>
      <Box
        className="switchBoxArea"
        width={"15%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          className="linearBox"
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          transition="0.2s ease"
          _hover={{
            transform: "scale(1.1)",
          }}
        >
          <Link to={"/linearSwitch"}>
            <LinearSwitch></LinearSwitch>
          </Link>
          <Text
            fontFamily={"Staatliches"}
            fontSize={35}
            fontWeight={900}
            color={"#DB3A34"}
          >
            LINEAR
          </Text>
        </Box>
      </Box>
      <Box
        className="switchBoxArea"
        width={"15%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box
          className="linearBox"
          display={"flex"}
          flexDirection={"column"}
          gap={"10px"}
          transition="0.2s ease"
          _hover={{
            transform: "scale(1.1)",
          }}
        >
          <Link to={"/blackSwitch"}>
            <BlackSwitch></BlackSwitch>
          </Link>
          <Text
            fontFamily={"Staatliches"}
            fontSize={35}
            fontWeight={900}
            color={"#101010"}
          >
            Black
          </Text>
        </Box>
      </Box>
    </>
  );
}
