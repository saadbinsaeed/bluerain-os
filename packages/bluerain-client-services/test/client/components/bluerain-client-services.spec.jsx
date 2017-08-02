/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import BluerainClientServices from "src/components/bluerain-client-services";

describe("components/bluerain-client-services", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<BluerainClientServices />);
      expect(component).to.not.be.null;
    });

  });

});
