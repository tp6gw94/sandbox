import { FixedSizeList as List } from 'react-window';
import UserRow from './UserRow';
import { ListProps } from '../app/virtualize-long-lists';

export default function WithReactWindowList({ users }: ListProps) {
  return (
    <List
      width="100%"
      height={500}
      itemSize={50}
      itemCount={users.length}
      itemData={users}
    >
      {({ index, data, style }) => (
        <UserRow
          key={index}
          style={style}
          first_name={data[index].first_name}
          last_name={data[index].last_name}
          message={data[index].message}
        />
      )}
    </List>
  );
}
