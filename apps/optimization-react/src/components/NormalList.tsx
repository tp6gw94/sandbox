import UserRow from './UserRow';
import { ListProps } from '../app/virtualize-long-lists';

export default function NormalList({ users }: ListProps) {
  return (
    <div className="w-100 h-[500px] overflow-y-scroll">
      {users.map((user) => (
        <UserRow
          key={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          message={user.message}
        />
      ))}
    </div>
  );
}
