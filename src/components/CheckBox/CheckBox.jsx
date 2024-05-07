import React from "react";
import { create } from "zustand";
import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxList,
  Checkmark,
  NestedCheckbox,
  RelatedBlock,
} from "./CheckBox.styled";
import {
  CHECBOX_EIGHT,
  CHECBOX_FIVE,
  CHECBOX_FOUR,
  CHECBOX_ONE,
  CHECBOX_SEVEN,
  CHECBOX_SIX,
  CHECBOX_THREE,
  CHECBOX_TWO,
} from "../../utils/texts";

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
        <CheckboxLabel>
          <CheckboxInput type="checkbox" />
          <Checkmark className="checkmark" />
          {CHECBOX_ONE}
        </CheckboxLabel>
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            onChange={handleNestedCheckboxChange}
          />
          <Checkmark className="checkmark" />
          {CHECBOX_TWO}
          {nestedChecked && (
            <NestedCheckbox>
              <CheckboxLabel>
                <CheckboxInput type="checkbox" />
                <Checkmark className="checkmark" />
                {CHECBOX_THREE}
              </CheckboxLabel>
              <CheckboxLabel>
                <CheckboxInput type="checkbox" />
                <Checkmark className="checkmark" />
                {CHECBOX_FOUR}
              </CheckboxLabel>
            </NestedCheckbox>
          )}
        </CheckboxLabel>
        <CheckboxLabel>
          <CheckboxInput type="checkbox" />
          <Checkmark className="checkmark" />
          {CHECBOX_FIVE}
        </CheckboxLabel>
        <CheckboxLabel>
          <CheckboxInput type="checkbox" />
          <Checkmark className="checkmark" />
          {CHECBOX_SIX}
        </CheckboxLabel>
        <CheckboxLabel>
          <CheckboxInput type="checkbox" />
          <Checkmark className="checkmark" />
          {CHECBOX_SEVEN}
        </CheckboxLabel>
        <CheckboxLabel>
          <CheckboxInput type="checkbox" />
          <Checkmark className="checkmark" />
          {CHECBOX_EIGHT}
        </CheckboxLabel>
      </CheckboxList>
    </RelatedBlock>
  );
};

export default Checkbox;
