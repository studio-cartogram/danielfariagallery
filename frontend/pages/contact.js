import React from 'react';
import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import withLayout from '../decorators/withLayout';
import {endpoints} from '../config';
import Column from '../components/Column';

class Contact extends React.Component {
  static async getInitialProps(context) {
    const res = await fetch(endpoints.contactInfo);
    const contactInfo = await res.json();
    return {contactInfo};
  }

  render() {
    const {
      hours,
      address,
      phone,
      email,
      note,
      staff,
    } = this.props.contactInfo.acf;
    return (
      <React.Fragment>
        <Column>
          <h3>Hours</h3>
          <p>{hours}</p>
          <h3>Address</h3>
          <p>{address}</p>
        </Column>
        <Column>
          <h3>Phone</h3>
          <p>{phone}</p>
          <h3>Email</h3>
          <p>{email}</p>
        </Column>
        <Column>
          <h3>Note</h3>
          <p>{note}</p>
        </Column>
      </React.Fragment>
    );
  }
}

export default withLayout(Contact);
