import './App.css';
import MainPage from './component/page/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

function App() {
  return (
	<BrowserRouter>
		<h1>Mini Blog</h1>
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='post-write' element={<PostWritePage />} />
			<Route path='post/:postId' element={<PostViewPage />} />
		</Routes>
	</BrowserRouter>
  );
}

export default App;
