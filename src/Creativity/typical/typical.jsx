import React, { useLayoutEffect, useRef } from "react";
import { type, type as loop } from "@camwiegert/typical";
import "../../Style/Creativity/typical/typical.css";
// 零依赖、仅 400 字节的输入动画库
// githubPath https://github.com/camwiegert/typical
function Typical() {
  const typical = useRef();
  const steps = [1000, "Hello", 1000, "", 1000, "Hello gayhub!", loop];
  useLayoutEffect(() => {
    type(typical.current, ...steps);
  }, [steps]);
  return <div ref={typical} className="typical"></div>;
}
export default Typical;
