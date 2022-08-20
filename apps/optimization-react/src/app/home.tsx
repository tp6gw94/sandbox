import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col w-screen h-screen">
      <h1 className="text-3xl">Optimization React</h1>
      <ul className="flex list-none mt-4 gap-4">
        <li>
          <Link className="text-blue-400 underline" to="virtualize-long-lists">
            Virtualize Long Lists
          </Link>
        </li>
      </ul>
    </div>
  );
}
