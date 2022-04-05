import React, { Component } from 'react'
import {FormattedNumber,IntlProvider} from 'react-intl';
export default class Price extends Component {
    render() {
        return (
            <div>
               {this.props.price.filter(p => p.currency === this.props.currn).map(price => (
                   <div>
            <IntlProvider locale={price.currency==="RUB"?"ru":"en"}>
             <FormattedNumber
              value={price.amount}
              style="currency"
              currency={price.currency} format={price.currency} />
              </IntlProvider>
                   </div>))} 
            </div>
        )
    }
}
