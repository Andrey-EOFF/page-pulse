import React from "react";
import { create } from "zustand";
import {
  CheckboxInput,
  CheckboxLabel,
  CheckboxLabelLock,
  CheckboxList,
  Checkmark,
  LabelLockText,
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

console.log(useCheckboxStore)

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
        <CheckboxLabelLock>
          <CheckboxInput type="checkbox" />
          <Checkmark className="checkmark" />
          {CHECBOX_FIVE}
          <LabelLockText>Coming Soon</LabelLockText>
        </CheckboxLabelLock>
        <CheckboxLabel>
          <CheckboxInput type="checkbox" />
          <Checkmark className="checkmark" />
          {CHECBOX_SIX}
        </CheckboxLabel>
        <CheckboxLabelLock>
          <CheckboxInput type="checkbox" />
          <Checkmark className="checkmark" />
          {CHECBOX_SEVEN}
          <LabelLockText>Coming Soon</LabelLockText>
        </CheckboxLabelLock>
        <CheckboxLabelLock>
          <CheckboxInput type="checkbox" />
          <Checkmark className="checkmark" />
          {CHECBOX_EIGHT}
          <LabelLockText>Coming Soon</LabelLockText>
        </CheckboxLabelLock>
      </CheckboxList>
    </RelatedBlock>
  );
};

export default Checkbox;
