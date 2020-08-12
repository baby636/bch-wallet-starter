import React from 'react'
import Wallet from 'gatsby-ipfs-web-wallet/src/components/admin-lte/wallet/index'
import TXHistory from 'gatsby-plugin-bch-tx-history/src/components/txhistory'

// import Info from 'gatsby-ipfs-web-wallet/src/components/admin-lte/wallet/info'

// console.log('Wallet: ', Wallet)
// console.log('Info: ', Info)

// let _this

class Wallet2 extends Wallet {
  // class Wallet2 extends React.Component {
  constructor (props) {
    super(props)
    console.log('Loading new example view.')

    // console.log('Wallet info: ', props.walletInfo)
  }

  render () {
    return (
      <>
        <Wallet {...this.props} importComponents={this.addCards()} />
      </>
    )
  }

  addCards () {
    return (
      <>
        <TXHistory walletInfo={this.props.walletInfo} />
      </>
    )
  }
}

export default Wallet2
