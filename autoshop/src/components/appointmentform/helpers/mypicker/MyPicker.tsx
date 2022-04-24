import { FC } from 'react'
import {
    PickerOption,
    PickerGroup,
    MyCheckBox,
    PickerLabel,
} from './MyPickerElements';

export const MyPicker: React.FC<{}> = ({ children }) => {
    const services = [
        "Winter Prep Service",
        "Full Synthetic Oil Change",
        "Tire Replacement",
        "Brake Replacement",
        "12V Battery Replacement",
        "Coolant Fluid Change",
        "Transmission Fluid Change with Filter",
        "Drive Belt Replacement",
        "Cabin & Engine Filter Replacement",

    ]
    return (
        <>
            <PickerGroup>
                {services.map((service, key) =>(
                    <PickerOption key={key}>
                        <MyCheckBox value={service}/>
                        <PickerLabel>{service}</PickerLabel>
                    </PickerOption>
                ))}
            </PickerGroup>
        </>
    );
}