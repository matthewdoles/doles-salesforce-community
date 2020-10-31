import { createElement } from "lwc";
import Addition from "c/addition";

describe("c-addition", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("adds two numbers together", () => {
    const element = createElement("c-addition", {
      is: Addition
    });
    document.body.appendChild(element);

    // Gather all input elements
    const lightningInputEls = element.shadowRoot.querySelectorAll(
      "lightning-input"
    );

    // Verify default set to 0
    lightningInputEls.forEach((el) => {
      expect(el.value).toBe(0);
    });

    // Add two numbers, dispatch onchange event
    lightningInputEls[0].value = 4;
    lightningInputEls[0].dispatchEvent(new CustomEvent("change"));
    lightningInputEls[1].value = 3;
    lightningInputEls[1].dispatchEvent(new CustomEvent("change"));

    return Promise.resolve()
      .then(() => {
        // Verify numbers added correctly
        expect(lightningInputEls[2].value).toBe(7);

        // Dispatch Clear button click event
        element.shadowRoot.querySelector("lightning-button").click();
      })
      .then(() => {
        // Verify inputs set back to 0
        lightningInputEls.forEach((el) => {
          expect(el.value).toBe(0);
        });
      });
  });
});
