import React from "react";
import { useState } from "react";

export default function FormbAPI() {
  const [formBData, setFormBData] = useState({});
  const [isBFilled, setBFilled] = useState(false);

  return {
    formBData: [formBData, setFormBData],
    isBFilled: [isBFilled, setBFilled],
  };
}