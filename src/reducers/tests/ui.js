// @flow
declare var describe: (name: string, func: () => void) => void;
declare var it: (desc: string, func: () => void) => void;
declare var expect: (value: any) => any;

import { prefs } from "../../utils/prefs";
import update, { State } from "../ui";

describe("ui reducer", () => {
  it("toggle framework grouping to false", () => {
    const state = State();
    const value = false;
    const updatedState = update(state, {
      type: "TOGGLE_FRAMEWORK_GROUPING",
      value
    });
    expect(updatedState.frameworkGroupingOn).toBe(value);
    expect(prefs.frameworkGroupingOn).toBe(value);
  });

  it("toggle framework grouping to true", () => {
    const state = State();
    const value = true;
    const updatedState = update(state, {
      type: "TOGGLE_FRAMEWORK_GROUPING",
      value
    });
    expect(updatedState.frameworkGroupingOn).toBe(value);
    expect(prefs.frameworkGroupingOn).toBe(value);
  });
});
