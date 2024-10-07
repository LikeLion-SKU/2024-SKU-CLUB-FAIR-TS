import { timeTable } from '../../constant/timeTable';
import TimeTableCard from './ui/TimeTableCard';

/**
 * --Card는 ui만 그리는 데에 집중하고 Card가 없는 컴포넌트는 로직(데이터패칭 등)에 집중하고 그걸 ui에 넘기는 역할을 해
 * 처음에는 한 컴포넌트에서 ui와 로직을 모두 작성할탠데 처음에는 다 그래 나도 그랬고 그런데 이러면 어느 순간 관리가 어렵다라는 느낌을 받을꺼야
 * 그럴 때 ui와 로직을 분리하고 로직도 커스텀 훅으로 작성해서 좀 더 깔끔하게 작성을 하게 될꺼야
 * 핵심은 ui와 로직을 분리하는 거야 그리고 그거에만 집중하는 거야 섞이는 게 아니라 ui는 ui만 로직은 로직만 그리고 하나의 컴포넌트에서 로직을 수행하고 수행된 로직의 결과값을 ui에 전달해서 ui는 그 값을 받아
 * ui를 그리는 데에만 집중을 하는거야 리액트를 처음 공부하게 되면(legacy react 공식문서를 보면) 리액트는 Declarative(선언형)이라고 나오거든 선언형과 반대 되는 개념이 imperative(명령형)이야
 * 선언형은 말 그대로 what(무엇)에 집중하는 거야(함수형 프로그래밍도 나중에 공부해봐) 이것도 설명해주고 싶은데 너무 길어질까봐 구글에 검색해보면 나보다 자세히 잘 설명해주니 한번쯤 읽어보면 좋은 내용이야
 */
export default function TimeTable() {
  return (
    <TimeTableCard>
      <TimeTableCard.List>
        {timeTable.map((prod) => {
          return (
            <TimeTableCard.Item key={prod.id}>
              <TimeTableCard.Logo imageName={prod.img} dirName="timetable" imageFormat="png" />
              <TimeTableCard.TimeInfo time={prod.time} />
              <TimeTableCard.Content content={prod.content} />
            </TimeTableCard.Item>
          );
        })}
      </TimeTableCard.List>
    </TimeTableCard>
  );
}
