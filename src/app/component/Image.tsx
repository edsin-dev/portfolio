import React from "react";
import NextImage, { ImageProps } from "next/image";
interface Props {
  src: any;
  alt?: string;
  className?: string;
}

export default function Image(props: Props) {
  return <NextImage {...props} alt={"image"} />;
}
