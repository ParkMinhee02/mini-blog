import './App.css';
import {useState} from 'react';
import bg from './img/bg.jpg';
import data from './data.js';
import {Route, Routes, Link, Outlet} from 'react-router-dom';
import Detail from './routes/Detail.js';

function App() {
	let [datas] = useState(data);
  return (
    <div className="App">

		<Routes>
			<Route path='/' element={<div>
				<nav className='name'>
					<h1 className="logo"><Link to='/'>Blog</Link></h1>
					<ul className='menu'>
						<li><Link  to='/'>Home</Link></li>
						<li><Link  to='/detail'>Detail</Link></li>
						<li><Link  to='/about'>Best</Link></li>
					</ul>
				</nav>
				
				<div className="main-bg" style={{backgroundImage:'url('+bg+')'}}></div>
				{/* <img src={process.env.PUBLIC_URL+'/bg.jpg'} alt="" /> */}
				
				<container className="mt20">
					<h2 className="mb20">Best of Best</h2>
					<ul className='fb'>
						{/* <Card datas = {datas[0]} i = {1} />
						<Card datas = {datas[1]} i = {2} />
						<Card datas = {datas[2]} i = {3} /> */}
						{
							datas.map((item, i) => {
								return (
									<Card datas = {datas[i]} i = {i+1} key = {i} />
								)
							})
						}
					</ul>
				</container>
			</div>} />
			<Route path='/detail' element={<Detail />} />
			<Route path='/detail/:id' element={<Detail datas={datas} />} />
			<Route path='/about' element={<About />}>
				<Route path='member' element={<div>멤버십</div>}></Route>
				<Route path='location' element={<About />}></Route>
			</Route>
		</Routes>

    </div>
  );
}

function About() {
	return (
		<div>
			<h4>회사정보</h4>
			<Outlet></Outlet>
		</div>
	)
}

function Card(props) {
	return (
		<li>
			<Link to={`/detail/${props.datas.id}`}>
				<img src={props.datas.images} width="80%" alt={props.datas.title} />
				<h4 className="mt20">{props.datas.title}</h4>
				<p>{props.datas.content}</p>
				<p className='price'>{props.datas.price}</p>
			</Link>
		</li>
  	)
}

export default App;
