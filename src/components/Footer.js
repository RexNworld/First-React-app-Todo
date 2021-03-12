import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer
        className="footer py-3 bg-dark text-white fixed-bottom"
        style={{ display: 'block' }}
      >
        <center>
          Copyright &copy; 2021{' '}
          <a href="https://dcitsoft.com" target="_b">
            DCITsoft!
          </a>{' '}
          by Reshav & Sandip
        </center>
      </footer>
    );
  }
}

export default Footer;
