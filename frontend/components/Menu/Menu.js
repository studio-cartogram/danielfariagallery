import React, { Component } from "react";
import Link from "next/link";
import { Config } from "../../config.js";
import { StyledMenuText } from './styles'

const linkStyle = {
    marginRight: 15
};

class Menu extends Component {
    constructor() {
        super();
    }

    getSlug(url) {
        const parts = url.split("/");
        return parts.length > 2 ? parts[parts.length - 2] : "";
    }

    render() {
        const menuItems = this.props.menu.items.map((item, index) => {
            if (item.object === "custom") {
                return (
                    <Link href={item.url} key={item.ID}>
                        <a><StyledMenuText>{item.title}</StyledMenuText></a>
                    </Link>
                );
            }
            const slug = this.getSlug(item.url);
            const actualPage = item.object === "category" ? "category" : "post";
            return (
                <Link
                    as={`/${item.object}/${slug}`}
                    href={`/${actualPage}?slug=${slug}&apiRoute=${item.object}`}
                    key={item.ID}
                >
                    <a><StyledMenuText>{item.title}</StyledMenuText></a>
                </Link>
            );
        });

        return (
            <div>
                {menuItems}
            </div>
        )
    }
}

export default Menu;
