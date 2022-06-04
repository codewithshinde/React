import React from 'react';

interface FormOneProps {
    name: string
}
export const FormOne: React.FC<FormOneProps> = ({name}) => {
    return (
        <h1>FormOne: {name}</h1>
    )
}