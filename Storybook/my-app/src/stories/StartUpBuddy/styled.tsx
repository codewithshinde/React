import styled from "styled-components";
import { TextField } from '@fluentui/react/lib/TextField';
import { Dropdown } from '@fluentui/react/lib/Dropdown';



export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    height: auto;
`;

export const TextInput = styled(TextField)`
    margin-top: 10px;
`

export const CustomDropdown = styled(Dropdown)`
    margin-top: 10px;
    width: 200px;
`
