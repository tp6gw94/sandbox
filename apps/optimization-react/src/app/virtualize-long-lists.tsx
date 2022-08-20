import WithReactWindowList from '../components/WithReactWindowList';
import NormalList from '../components/NormalList';
import mockUser from '../../user_mock_data.json';
import { User } from '../../types/User';
import { useState } from 'react';

export type ListProps = {
  users: Array<User>;
};

function genMockData(size: number): Array<User> {
  return new Array(size)
    .fill(undefined)
    .map((_, idx) => ({ ...mockUser[idx % 1000], id: idx }));
}

export default function VirtualizeLongLists() {
  const users = genMockData(100000);
  const [showReactWindowList, setShowReactWindowList] = useState(false);
  const [showNormalList, setShowNormalList] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          className="px-2 py-1 bg-blue-400 text-white"
          onClick={() => setShowReactWindowList((prevState) => !prevState)}
        >
          Trigger React Window List
        </button>
        <button
          className="px-2 py-1 bg-blue-400 text-white"
          onClick={() => setShowNormalList((prevState) => !prevState)}
        >
          Trigger Normal List
        </button>
      </div>

      <div className="flex w-full h-screen">
        <div className="w-1/2">
          {showReactWindowList && <WithReactWindowList users={users} />}
        </div>
        <div className="w-1/2">
          {showNormalList && <NormalList users={users} />}
        </div>
      </div>
    </>
  );
}
