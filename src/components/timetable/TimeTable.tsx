import { timeTable } from '../../constant/timeTable';
import TimeTableCard from './ui/TimeTableCard';

export default function TimeTable() {
  return (
    <TimeTableCard>
      <TimeTableCard.List>
        {timeTable.map((prod) => {
          return (
            <TimeTableCard.Item key={prod.id}>
              <TimeTableCard.Logo imageName={prod.img} />
              <TimeTableCard.TimeInfo time={prod.time} />
              <TimeTableCard.Content content={prod.content} />
            </TimeTableCard.Item>
          );
        })}
      </TimeTableCard.List>
    </TimeTableCard>
  );
}
