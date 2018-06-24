import React, { Component } from "react";

import Link from "next/link";

function CurrentExhibition({ url, image, title }) {
  return (
    <Link href={url}>
      <a>
        <img key={title} alt={title} src={image} />
      </a>
    </Link>
  );
}

export default CurrentExhibition;
