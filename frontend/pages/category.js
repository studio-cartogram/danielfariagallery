import React, {Component} from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Menu from '../components/Menu.js';
import {config} from '../config.js';
import withLayout from '../decorators/withLayout';

class Category extends Component {
  static async getInitialProps(context) {
    const {slug} = context.query;
    const categoriesRes = await fetch(
      `${config.apiUrl}/wp-json/wp/v2/categories?slug=${slug}`,
    );
    const categories = await categoriesRes.json();
    if (categories.length > 0) {
      const postsRes = await fetch(
        `${config.apiUrl}/wp-json/wp/v2/posts?_embed&categories=${
          categories[0].id
        }`,
      );
      const posts = await postsRes.json();
      return {categories, posts};
    }
    return {categories};
  }
  render() {
    if (this.props.categories.length == 0) return <Error statusCode={404} />;
    const {headerMenu, categories} = this.props;
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
      <div>
        <Menu menu={headerMenu} />
        <h1>{categories[0].name} Posts</h1>
        <div>{postsMarkup}</div>
      </div>
    );
  }
}

export default withLayout(Category);
