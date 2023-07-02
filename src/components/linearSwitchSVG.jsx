import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import { Box } from "@chakra-ui/react";
// import hand from './testUpEvent'
import { KeyUpEvent } from './keyUpEvent';
import { KeyDownEvent } from './keyDownEvent';
import "../css/keyboard.css";

export default function LinearKeyBoardSVG() {
  const [svgLoaded, setSvgLoaded] = useState(false);

  useEffect(() => {
    const pressedKeys = new Set();

    const playSound = () => {
      const linearOnPushSound = new Audio("/audio/keysoundTest/linearOnPush.m4a");
      linearOnPushSound.play();
      linearOnPushSound.volume = Math.random();
    };

    const playSoundTwo = () => {
      const linearOnLeaveSound = new Audio("/audio/keysoundTest/linearOnLeave.m4a");
      linearOnLeaveSound.play();
      linearOnLeaveSound.volume = Math.random();
    };

    const handleKeyDown = (event) => {
      event.preventDefault();
      const pressedKey = event.key;

      if (pressedKeys.has(pressedKey)) {
        return; // 키가 이미 눌러져 있다면, 이벤트를 무시하고 반환
      }
      
      pressedKeys.add(pressedKey); // 키 추가
      KeyDownEvent(pressedKey, event.code,svgLoaded);
  
      console.log(pressedKey);
      playSound();
    };

    const handleKeyUp = (event) => {
      event.preventDefault();
      const pressedKey = event.key;
      pressedKeys.delete(pressedKey); // 키 뗌 이벤트 발생 시 키를 집합에서 삭제
      KeyUpEvent(pressedKey, event.code,svgLoaded);

      playSoundTwo();
    };

    // const handleSvgInjection = (event, code) => {
    //   if (svgLoaded) {
    //     const svgElement = document.querySelector("svg");
    //     const rectElement = svgElement.querySelector(`#${event}`);
    //     rectElement.style.fill = "#d90429";
    //     console.log("test", rectElement);
    //   }
    // };

    // 마운트 시 이벤트 리스너 등록
    if (svgLoaded) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
    }

    // 언마운트 시 이벤트 리스너 제거
    return () => {
      if (svgLoaded) {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      }
    };
  }, [svgLoaded]);

  return (
    <Box
      className="container"
      width={"100%"}
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box className="Keyboard" width={"50vw"}>
        <ReactSVG
          src="svg/linearSwitch.svg"
          afterInjection={() => setSvgLoaded(true)}
        />
      </Box>
    </Box>
  );
}
