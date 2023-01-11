import React from "react";
import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const Small = () => <Input size="small" placeholer="small size" />;
export const Medium = () => <Input size="medium" placeholer="medium size" />;
export const Large = () => <Input size="large" placeholer="large size" />;
