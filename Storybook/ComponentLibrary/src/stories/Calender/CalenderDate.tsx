import React from "react";
import { DateBox, EmptyBox, Grid } from "./styled";

interface CalenderDateProps {
    dateNo: string | number;
}

const CalenderDate: React.FC<CalenderDateProps> = ({ dateNo }) => {

    return (
        <DateBox>
            <p>{dateNo}</p>
        </DateBox>
    )
}

export default CalenderDate;