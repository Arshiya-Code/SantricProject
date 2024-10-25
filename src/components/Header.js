import React from 'react';
import { FaBars, FaBell } from 'react-icons/fa';

const Header = () => (
  <header style={styles.header}>
    <div style={styles.hamburgerWrapper}>
      <FaBars style={styles.hamburgerIcon} />
    </div>

    <div style={styles.logoWrapper}>
      <img
        src="/companylogo.jpg"
        alt="Company Logo"
        style={styles.logo}
      />
    </div>

    <div style={styles.rightIcons}>
      <div style={styles.notificationWrapper}>
        <FaBell style={styles.icon} />
        <span style={styles.notificationDot}></span>
      </div>
      <img
        src="women.jpeg"
        alt="Profile"
        style={styles.avatar}
      />
    </div>
  </header>
);

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 15px', // Reduced padding for mobile
    backgroundColor: '#fff',
  },
  hamburgerWrapper: {
    backgroundColor: 'orange',
    borderRadius: '8px',
    padding: '5px',
  },
  hamburgerIcon: {
    fontSize: '20px',
    color: 'black',
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '100px', // Reduced size for mobile
    height: '100px',
  },
  rightIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  notificationWrapper: {
    position: 'relative',
    marginRight: '10px',
  },
  icon: {
    fontSize: '20px',
    color: '#777',
  },
  notificationDot: {
    position: 'absolute',
    top: '-5px',
    right: '-2px',
    width: '8px',
    height: '8px',
    backgroundColor: 'red',
    borderRadius: '50%',
    border: '2px solid white',
  },
  avatar: {
    width: '40px',
    borderRadius: '50%',
  },
};

export default Header;
