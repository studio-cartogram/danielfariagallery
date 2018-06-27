// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';
// import React, {Component} from 'react';
// import {Config} from '../config';

// export default class ArtistIndex extends Component {
//   static defaultProps = {
//     limit: 2,
//   };

//   state = {
//     artists: [],
//   };

//   async componentWillMount() {
//     const {limit} = this.props;
//     const artistsRes = await fetch(
//       `${Config.apiUrl}/wp-json/wp/v2/artists?per_page=${limit}`,
//     );
//     const artists = await artistsRes.json();
//     this.setState({
//       artists,
//     });
//   }

//   render() {
//     const {artists} = this.state;
//     return (
//       <section>
//         <h3>Artist Archive</h3>
//         <ul>
//           {artists.map((post) => (
//             <li key={post.id}>
//               <Link
//                 href={`/post?slug=${post.slug}&apiRoute=post`}
//                 as={`/post/${post.slug}`}
//               >
//                 <a>{post.title.rendered}</a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </section>
//     );
//   }
// }
