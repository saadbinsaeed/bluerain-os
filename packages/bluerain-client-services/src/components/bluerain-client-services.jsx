import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/bluerain-client-services.css";
import messages from "../lang/default-messages";

export default class BluerainClientServices extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        Hello from bluerain-client-services compponent
      </div>
    );
  }
}

BluerainClientServices.displayName = "BluerainClientServices";

BluerainClientServices.propTypes = { };

BluerainClientServices.defaultProps = { };
