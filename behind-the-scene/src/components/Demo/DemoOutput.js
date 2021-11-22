import React from "react";
import MyParagraph from "./MyParagraph";

export default React.memo(function DemoOutput({show}) {
  return <MyParagraph>{show ? 'This is new!' : ''}</MyParagraph>;
})
