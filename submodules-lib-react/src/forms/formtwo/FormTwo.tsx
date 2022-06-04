import React from 'react';

interface FormTwoProps {
    name: string
}
export const FormTwo: React.FC<FormTwoProps> = ({name}) => {
    return (
        <h1>FormTwo: {name}</h1>
    )
}