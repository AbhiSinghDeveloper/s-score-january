import React from "react";
import { useState } from "react";

export default function FormcAPI() {
  const [formAData, setFormAData] = useState({});
  const [isAFilled, setAFilled] = useState(false);

  return {
    formAData: [formAData, setFormAData],
    isAFilled: [isAFilled, setAFilled],
  };
}