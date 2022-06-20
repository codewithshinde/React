import React from 'react';
import { HourBox, DayBox } from './styled';

const TimeBar:React.FC<{}> = () => {

  const [selectedHours, setSelectedHoursHours] = React.useState<number>(0);

  const clearHoursSelection = () => {
    !selectedHours && setSelectedHoursHours(0);
  }

  const selectHoursOfADay=(hoursPerday: number) => {
    setSelectedHoursHours(hoursPerday);
  }
  
  const onHoursHover =(hoursPerday: number) => {
    if(selectedHours < hoursPerday) {
      selectHoursOfADay(hoursPerday);
    }
  }

  const getTotalHoursInADay = (totalHours: number):JSX.Element[] => {
    const hourBoxes:JSX.Element[] = [];
    const tempTotalHoursArr = Array.from(Array(totalHours).keys()).reverse();
    tempTotalHoursArr.map(eachHour => {
      const hours:number =+ eachHour;
      hourBoxes.push(
      <HourBox
      key={hours}
      onMouseLeave={clearHoursSelection}
      onMouseOver={() => onHoursHover(hours)}
      onClick={() => selectHoursOfADay(hours)} 
      selected={ hours <= selectedHours}
      />);
    });
    return hourBoxes;
  }

    return (
        <div>
          <DayBox>
            {getTotalHoursInADay(10)}
          </DayBox>
        </div>     
     )
}

export default TimeBar;