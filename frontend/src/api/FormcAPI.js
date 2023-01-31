import React from "react";
import { useState } from "react";

export default function FormcAPI() {
  const [formCData, setFormCData] = useState({});
  const [isCFilled, setCFilled] = useState(false);

  return {
    formCData: [formCData, setFormCData],
    isCFilled: [isCFilled, setCFilled],
  };
}