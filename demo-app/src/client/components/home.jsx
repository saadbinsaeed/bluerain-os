import {BluerainClientServices} from 'bluerain-client-services';
import React from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

import {BluerainOs} from 'bluerain-os';

const locale = 'en';

export class Home extends React.Component {
  render() {
    return (
      <IntlProvider locale={locale}>
        <div>
          <p>I am in demo Application</p>
        <BluerainOs />
<BluerainClientServices />
      </div>
      </IntlProvider>
    );
  }
}

export default connect((state) => state)(Home);
