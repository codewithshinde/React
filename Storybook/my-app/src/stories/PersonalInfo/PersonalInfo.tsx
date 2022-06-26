import React from 'react';
import { Wrapper, TextInput, CustomDropdown } from './styled';

const PersonalInfo:React.FC<{}> = () => {
    const options = [
        { key: 'Male', text: 'Male' },
        { key: 'Female', text: 'Female' },
        { key: 'Other', text: 'Other'}
      ];

      const maritalStatusOptions = [
        { key: '0', text: 'Prefer Not to Disclose' },
        { key: '1', text: 'Married' },
        { key: '2', text: 'Unmarried'}
      ];

    return (
        <Wrapper>
            <TextInput label="First Name" required/>
            <TextInput label="Middle Name" />
            <TextInput label="Last Name" description="Make sure your name is as per your PAN card" required/>
            <TextInput label="Date of Birth" required />
            <CustomDropdown
                  label="Gender"
                  placeholder="Select"
                  options={options}
                  required
            />
            <TextInput label="PAN Number" required />
            <TextInput label="Father's Name" required />
            <CustomDropdown
                  label="Marital Status"
                  placeholder="Select"
                  options={maritalStatusOptions}
            />
        </Wrapper>
        
    )
}

export default PersonalInfo;