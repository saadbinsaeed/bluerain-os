import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/bluerain-os.css";
import messages from "../lang/default-messages";

export default class BluerainOs extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        Hi i am from bluerain-os component
      </div>
    );
  }
}

BluerainOs.displayName = "BluerainOs";

BluerainOs.propTypes = { };

BluerainOs.defaultProps = { };
