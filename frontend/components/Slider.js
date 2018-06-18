import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import fetch from "isomorphic-unfetch";
import { Config } from '../config';
import Link from 'next/link'

export default class Slider extends Component {
  state = {
    exhibitions: []
  }

  async componentWillMount() {
    const exhibitionsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/exhibition?_embed`)
    const exhibitions = await exhibitionsRes.json();
    this.setState( {
      exhibitions
    });
  }

  render() {
    const {exhibitions } = this.state
    return (
      <div>
        <Carousel>
          {exhibitions.map(exhibition => 
            <Link 
            href={exhibition.acf.link}
            >
              <a>
                <img 
                style={{ width: '100%'}}
                key={exhibition.id} 
                alt={exhibition.title.rendered}
                src={exhibition._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} 
                />
              </a>
            </Link>
          )}
        </Carousel>
      </div>
    )
  }
}