import Layout from "../components/Layout";
import React, { Component } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";
import withLayout from "../decorators/withLayout";

class Category extends Component {
  static async getInitialProps(context) {
    const { slug } = context.query;
    const categoriesRes = await fetch(
      `${Config.apiUrl}/wp-json/wp/v2/categories?slug=${slug}`
    );
    const categories = await categoriesRes.json();
    if (categories.length > 0) {
      const postsRes = await fetch(
        `${Config.apiUrl}/wp-json/wp/v2/posts?_embed&categories=${
          categories[0].id
        }`
      );
      const posts = await postsRes.json();
      return { categories, posts };
    }
    return { categories };
  }
  render() {
    if (this.props.categories.length == 0) return <Error statusCode={404} />;

    const postsMarkup = this.props.posts.map((post, index) => {
      return (
        <ul key={index}>
          <li>
            <Link
              as={`/post/${post.slug}`}
              href={`/post?slug=${post.slug}&apiRoute=post`}
            >
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        </ul>
      );
    });
    return (
      <Menu menu={this.props.headerMenu} />
      <h1>{this.props.categories[0].name} Posts</h1>
      <div>
        {postsMarkup}
      </div>
    );
  }
}

export default withLayout(Category);
