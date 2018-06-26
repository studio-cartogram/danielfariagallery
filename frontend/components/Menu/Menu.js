import React, { Component } from "react";
import Link from "next/link";
import { StyledMenuText, StyledMenu } from "./styles";

function Menu({ items }) {
  const itemsMarkup = items.map((item, index) => {
    return item.object === "custom" ? (
      <Link href={item.url} key={item.ID}>
        <a>
          <StyledMenuText>{item.title}</StyledMenuText>
        </a>
      </Link>
    ) : (
      <Link
        as={`/${item.object}/${getSlug(item.url)}`}
        href={`/${
          item.object === "category" ? "category" : "post"
        }?slug=${getSlug(item.url)}&apiRoute=${item.object}`}
        key={item.ID}
      >
        <a>
          <StyledMenuText>{item.title}</StyledMenuText>
        </a>
      </Link>
    );
  });

  return <StyledMenu>{itemsMarkup}</StyledMenu>;
}

function getSlug(url) {
  const parts = url.split("/");
  return parts.length > 2 ? parts[parts.length - 2] : "";
}

export default Menu;
