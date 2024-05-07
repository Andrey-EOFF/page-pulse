import React from "react";
import { create } from "zustand";

import { RelatedBlock, CheckboxList, NestedCheckbox } from "./CheckBox.styled";

const useCheckboxStore = create((set) => ({
  nestedChecked: false,
  setNestedChecked: (isChecked) => set({ nestedChecked: isChecked }),
}));

const Checkbox = () => {
  const { nestedChecked, setNestedChecked } = useCheckboxStore();

  const handleNestedCheckboxChange = () => {
    setNestedChecked(!nestedChecked);
  };

  return (
    <RelatedBlock>
      <CheckboxList>
        <label>
          <input type="checkbox" />
          Checkbox 1
        </label>
        <label>
          <input type="checkbox" onChange={handleNestedCheckboxChange} />
          Checkbox 2
          {nestedChecked && (
            <NestedCheckbox>
              <label>
                <input type="checkbox" />
                Nested Checkbox 1
              </label>
              <label>
                <input type="checkbox" />
                Nested Checkbox 2
              </label>
            </NestedCheckbox>
          )}
        </label>
        <label>
          <input type="checkbox" />
          Checkbox 3
        </label>
        <label>
          <input type="checkbox" />
          Checkbox 4
        </label>
        <label>
          <input type="checkbox" />
          Checkbox 5
        </label>
        <label>
          <input type="checkbox" />
          Checkbox 6
        </label>
        <label>
          <input type="checkbox" />
          Checkbox 7
        </label>
        <label>
          <input type="checkbox" />
          Checkbox 8
        </label>
      </CheckboxList>
    </RelatedBlock>
  );
};

export default Checkbox;
