import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

export default function Image(props: Props) {
  return <img {...props} />;
}
