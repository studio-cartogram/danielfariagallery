import React from 'react';
import fetch from 'isomorphic-unfetch';
import withLayout from '../decorators/withLayout';
import {endpoints} from '../config';
import Column from '../components/Column';
import GridItem from '../components/GridItem';
import GridSpace from '../components/GridSpace';
import Link from '../components/Link';

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
      map,
    } = this.props.contactInfo.acf;

    const stafflistMarkup = staff.map((staff) => {
      return (
        <ul key={staff.name}>
          <li key={staff.name}>
            <p>
              <Link variant="secondary" href={`mailto:${staff.email}`}>
                {staff.name}
              </Link>
              <br />
              <em>{staff.role}</em>
            </p>
          </li>
        </ul>
      );
    });
    const hourslistMarkup = hours.map((hours) => {
      return (
        <ul>
          <li key={hours.day}>
            <p>
              {hours.day}
              <br />
              {hours.time}
            </p>
          </li>
        </ul>
      );
    });
    return (
      <React.Fragment>
        <GridSpace />
        <Column>
          <GridItem>
            <h3>Hours</h3>
            {hourslistMarkup}
          </GridItem>
          <GridItem>
            <h3>Address</h3>
            <p>{address}</p>
            <Link variant="hybrid" target="_blank" href={map}>
              Directions
            </Link>
          </GridItem>
        </Column>
        <Column>
          <GridItem>
            <h3>Phone</h3>
            <p>{phone}</p>
          </GridItem>
          <GridItem>
            <h3>Email</h3>
            <p>
              <Link variant="hybrid" href={`mailto:${email}`}>
                {email}
              </Link>
            </p>
          </GridItem>
          <GridItem>
            <p>{note}</p>
          </GridItem>
        </Column>
        <Column>
          <GridItem>
            <h3>Staff</h3>
            {stafflistMarkup}
          </GridItem>
        </Column>
      </React.Fragment>
    );
  }
}

export default withLayout(Contact);
