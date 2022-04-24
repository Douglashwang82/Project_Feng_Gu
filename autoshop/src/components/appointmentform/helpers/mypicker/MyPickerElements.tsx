import Card from '@mui/material/Card';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';

export const PickerOption = styled(Card)`
    width: 100%;
`


export const PickerGroup = styled.div`
    display:grid;
    grid-template: "auto auto auto";
    row-gap:10px;
    column-gap: 10px;
`


export const MyCheckBox = styled(Checkbox)``


export const PickerLabel = styled.label`
    font-weight:500;
`