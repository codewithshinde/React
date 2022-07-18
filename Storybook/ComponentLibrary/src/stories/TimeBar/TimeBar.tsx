import React from 'react';
import { TimeBoxWrapper, HourBox, DayBox, StatusBar, HourBlockText, Container } from './styled';
import { Checkbox } from '@fluentui/react';

const TimeBar: React.FC<{}> = () => {

  const [loggedHours, setLoggedHours] = React.useState<number>(0);
  const [hoveredHours, setHoveredHours] = React.useState<number>(0);

  const clearOnHoveredHours = () => {
    setHoveredHours(0);
  }

  const logHours = (hoursPerday: number) => {
    setLoggedHours(hoursPerday);
  }

  const onHover = (hoveredHour: number) => {
    // if(loggedHours < hoveredHour) {
    setHoveredHours(hoveredHour);
    //}
  }

  const getTotalHoursInADay = (totalHours: number): JSX.Element[] => {
    const hourBoxes: JSX.Element[] = [];
    const tempTotalHoursArr = Array.from(Array(totalHours).keys()).reverse();
    tempTotalHoursArr.map(eachHour => {
      const hourNo: number = eachHour + 1;
      const isHovered = hourNo === hoveredHours;
      const isSelected = hourNo === loggedHours;
      const blockUnderSelected = hourNo <= loggedHours;
      const blockUnderHovered = hoveredHours > loggedHours ? hourNo > loggedHours && hourNo <= hoveredHours : hourNo <= hoveredHours;
      const otherHours = blockUnderHovered || blockUnderSelected ? "" : "1hr";
      hourBoxes.push(
        <HourBox
          key={hourNo}
          onMouseLeave={clearOnHoveredHours}
          onMouseOver={() => onHover(hourNo)}
          onClick={() => logHours(hourNo)}
          hovered={blockUnderHovered}
          selected={blockUnderSelected}
        >
          <HourBlockText>{isHovered ? hoveredHours : isSelected ? loggedHours : otherHours}</HourBlockText>
        </HourBox>);
    });
    return hourBoxes;
  }

  return (
    <Container>
      <p>13/07/2022</p>
      <TimeBoxWrapper>
        <StatusBar />
        <DayBox>
          {getTotalHoursInADay(10)}
        </DayBox>
      </TimeBoxWrapper>
      <p>Monday</p>
      <Checkbox label="Mark leave" />
    </Container>
  )
}

export default TimeBar;