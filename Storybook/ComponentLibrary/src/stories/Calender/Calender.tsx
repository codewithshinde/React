import React from "react";
import CalenderDate from "./CalenderDate";
import { DateBox, EmptyBox, Grid } from "./styled";


const Calender: React.FC<{}> = () => {

    const getDateBoxes = () => {
        return [...Array(31)].map((e, i) => <CalenderDate dateNo={i} />)
    }

    const getColumns = () => {
        return ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(name => <p>{name}</p>)
    }

    return (
        <Grid>
            {getColumns()}
            <EmptyBox />
            <EmptyBox />
            <EmptyBox />
            {getDateBoxes()}
        </Grid>
    )
}

export default Calender;