import React, { Component } from 'react';
import breadLogo from '../../images/bread_logo.svg';

export default class SalePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="sale-page">
        <div className="layer">
          <div className="left">
            <div className="logo">
              <img src={breadLogo} alt="bread" />
            </div>
            <div className="name">Bread</div>
            <div className="description">
              Send and receive any amount of bitcoin, anywhere in the world, instantly.
              No banking hours, no hidden fees. BRD gives you the freedom to participate
              in the global economy, 24/7. With no logins or passwords to remember, BRD
              is the simplest way to get started with bitcoin. Just choose a PIN, write
              down your Paper Key for safe keeping, and you’re ready to go!
              BRD allows you to hold your bitcoin in your own hands. By connecting
              directly to the bitcoin network, you don’t have to rely on us to access
              your bitcoin. We can not monitor your financial activity or control what you
              do with your money.
            </div>
          </div>
          <div className="right">
            <div className="presentation">
              <iframe
                title="bread_video"
                width="508"
                height="300"
                src="https://www.youtube.com/embed/kHYrn-ks7ys"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <div className="social-media-links">
              <a
                href="https://telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ion-paper-airplane" />
              </a>
              <a
                href="https://www.linkedin.com/company/breadwallet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ion-social-linkedin" />
              </a>
              <a
                href="https://twitter.com/breadapp?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ion-social-twitter" />
              </a>
            </div>
          </div>
        </div>
        <div className="layer">
          <div className="left sale-status">
            <div className="funding-stats">
              <div className="amount-container">
                <span className="amount">1305</span>
                <span className="currency">ETH</span>
                <span className="raised">raised</span>
              </div>
              <div className="percentage">31%</div>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" />
            </div>
            <div className="under-progress-bar">
              <div className="time-remaining">
                <i className="ion-android-time" />
                <span className="amount">16</span>
                <span className="unit">days</span>
                <span className="remaining">remaining</span>
              </div>
              <div className="links">
                <a href="http://bit.ly/2FoIWRU" target="_blank" rel="noopener noreferrer">
                  <i className="whitepaper ion-ios-copy-outline" />
                </a>
                <a href="https://token.breadapp.com/en/" target="_blank" rel="noopener noreferrer">
                  <i className="website ion-laptop" />
                </a>
              </div>
            </div>
          </div>
          <div className="right investment-terms">
            <div>Investment Terms</div>
            {
              [
                { label: 'Eligibility', value: 'US Resident' },
                { label: 'Price per token', value: '0.58 USD' },
                { label: 'Hard cap', value: '15,000,000 USD' },
                { label: 'Minimum buy-in', value: '0.1 ETH' },
              ].map(({ label, value }, idx) => (
                <div className="term" key={`term_${idx + 1}`}>
                  <span className="label">{label}:</span>
                  <span className="value">{value}</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className="section">
          <div className="title">Updates</div>
          <div className="content">
            <span role="img" aria-label="peace">✌🏼</span>
          </div>
        </div>

        <div className="section">
          <div className="title">Company Highlights</div>
          <div className="content">
            <ul>
              <li>Banking reinvented! The way it should be!</li>
              <li>Direct deposit. Receive payments. Buy tokens right in the app.</li>
              <li>Lock away your tokens. No fees. No limits.</li>
              <li>Peer-to-peer lending. Crypto escrow. Portfolio manaagement.</li>
            </ul>
          </div>
        </div>

        <div className="section">
          <div className="title">Product</div>
          <div className="content">
            Send and receive any amount of bitcoin,
            anywhere in the world, instantly.
            No banking hours, no hidden fees.
            BRD gives you the freedom to participate
            in the global economy, 24/7.

            With no logins or passwords to remember,
            BRD is the simplest way to get started
            with bitcoin. Just choose a PIN, write
            down your Paper Key for safe keeping,
            and you’re ready to go!

            BRD allows you to hold your bitcoin in
            your own hands. By connecting directly
            to the bitcoin network, you don’t have
            to rely on us to access your bitcoin.
            We can not monitor your financial activity
            or control what you do with your money.

            We are security experts, so you don not
            have to be. We leverage the industry-leading
            security features found in modern smartphones
            to ensure your bitcoin is safe, even if your
            phone is stolen. And if you ever do lose your
            phone, you can simply recover your wallet on
            another device using your Paper Key.
          </div>
        </div>

        <div className="section">
          <div className="title">Business Model</div>
          <div className="content">
            Send and receive any amount of bitcoin,
            anywhere in the world, instantly.
            No banking hours, no hidden fees.
            BRD gives you the freedom to participate
            in the global economy, 24/7.

            With no logins or passwords to remember,
            BRD is the simplest way to get started
            with bitcoin. Just choose a PIN, write
            down your Paper Key for safe keeping,
            and you’re ready to go!

            BRD allows you to hold your bitcoin in
            your own hands. By connecting directly
            to the bitcoin network, you don’t have
            to rely on us to access your bitcoin.
            We can not monitor your financial activity
            or control what you do with your money.

            We are security experts, so you don not
            have to be. We leverage the industry-leading
            security features found in modern smartphones
            to ensure your bitcoin is safe, even if your
            phone is stolen. And if you ever do lose your
            phone, you can simply recover your wallet on
            another device using your Paper Key.
          </div>
        </div>

        <div className="section">
          <div className="title">Market Analysis</div>
          <div className="content">
            Send and receive any amount of bitcoin,
            anywhere in the world, instantly.
            No banking hours, no hidden fees.
            BRD gives you the freedom to participate
            in the global economy, 24/7.

            With no logins or passwords to remember,
            BRD is the simplest way to get started
            with bitcoin. Just choose a PIN, write
            down your Paper Key for safe keeping,
            and you’re ready to go!
          </div>
        </div>

        <div className="section">
          <div className="title">Team</div>
          <div className="content">
            TODO
          </div>
        </div>

        <div className="section">
          <div className="title">Media</div>
          <div className="content">
            {
              [
                { label: 'Fortune', value: 'Bitcoin Wallet \'Bread\' to Add Support for Ethereum, ICO Tokens', url: 'https://for.tn/2F22kPx' },
                { label: 'Bitcoin.com', value: 'Breadwallet Becomes Bread, Updates iOS Aesthetics and Adds New Features', url: 'https://bit.ly/2JY2ye6' },
                { label: 'Coindesk', value: '$7 Million: Bitcoin Wallet Startup Breadwallet Raises New Funding', url: 'https://bit.ly/2uTa02t' },
              ].map(({ label, value, url }, idx) => (
                <div className="term" key={`term_${idx + 1}`}>
                  <span className="label">{label}:</span>
                  <a href={url} target="_blank"><span className="value">{value}</span></a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}
