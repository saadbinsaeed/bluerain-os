/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import BluerainOs from "src/components/bluerain-os";

describe("components/bluerain-os", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<BluerainOs />);
      expect(component).to.not.be.null;
    });

  });

});
