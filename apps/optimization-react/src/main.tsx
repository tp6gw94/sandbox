import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './app/app';
import VirtualizeLongLists from './app/virtualize-long-lists';
import Home from './app/home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="virtualize-long-lists" element={<VirtualizeLongLists />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
