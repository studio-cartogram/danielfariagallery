import React from 'react';
import fetch from 'isomorphic-unfetch';

class Fetcher extends React.Component {
  state = {
    data: null,
    loading: true,
    error: null,
  };

  cache = new Map();

  async componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.setState({
        loading: true,
      });
      this.fetchData(this.props.url);
    }
  }

  async fetchData() {
    let data;
    if (this.cache.get(this.props.url)) {
      this.setState({
        data: this.cache.get(this.props.url),
        loading: false,
      });

      return;
    }

    try {
      const res = await fetch(this.props.url);
      data = await res.json();
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false,
      });
    }

    this.setState({
      data,
      loading: false,
    });

    this.cache.set(this.props.url, data);
  }

  componentWillMount() {
    this.setState({
      loading: true,
    });
    this.fetchData(this.props.url);
  }

  render() {
    return this.props.children(this.state);
  }
}

export default Fetcher;
