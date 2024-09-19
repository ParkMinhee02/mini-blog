import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
/* import styled from 'styled-components'; */

/* let YellowBtn = styled.button`
	background: yellow;
	color: black;
	padding: 10px;
`
let YellowBtn1 = styled.button`
	background: ${props => props.bg};
	color: ${props => props.bg === 'blue' ? 'white': 'black'};
	padding: 10px;
`
let Box = styled.div `
	background: #ddd;
	padding: 20px;
`
let Text = styled.p `
	color: red;
	font-size: 24px;
` */

const Detail = (props) => {
	let {id} = useParams();
	let [alert, setAlert] = useState(true);
	let [tab, setTab]= useState(0);

   useEffect(()=>{

      let timer=setTimeout(()=>{
         setAlert(false)
         console.log('랜더링');
         return () => {
            clearTimeout(timer)
         }
      },2000)
	  //컴포넌트 로그 & 업데이트 마다 실행됨
		/* console.log('렌더링') */
   },[]);

	/* let [count, setCount] = useState(0) */

   return (
      <div className='mt20'>
		
		{/* <Box>
			<YellowBtn>Button</YellowBtn>
			<YellowBtn1 bg='blue'>Button</YellowBtn1>
			<YellowBtn1 bg='green'>Button</YellowBtn1>
			<Text>2024.09.19 18:00 GGUM</Text>
		</Box>
		<button onClick={() => {setCount(count+1)}}>Click</button>
		<p>{count}</p> */}

		{alert === true ? <div className='alert'>2초이내 구매 시 할인</div>: null}

         <div className='detailCard'>
            <div className='imgWrap'>
               <img src={props.datas[id].images} width="70%" alt="조명" />
            </div>
            <div className='info'>
               <h4 className="mt20">{props.datas[id].title}</h4>
               <p>{props.datas[id].content}</p>
               <p className='price'>{props.datas[id].price}</p>
               <button className='btn'>주문하기</button>
            </div>
         </div>
			<div className="tabs">
				<div className="item" onClick={() => {setTab(0)}}><b>Button 0</b></div>
				<div className="item" onClick={() => {setTab(1)}}><b>Button 1</b></div>
				<div className="item" onClick={() => {setTab(2)}}><b>Button 2</b></div>
			</div>
				{/* {tab === 0 ? <div className='tabBox'>내용 0</div> : null}
				{tab === 1 ? <div className='tabBox'>내용 1</div> : null}
				{tab === 2 ? <div className='tabBox'>내용 2</div> : null} */}
		<TabContent tab={tab} />
      </div>
   );
};

/* function TabContent(props){
	if(props.tab===0){
		return <div className='tabBox'>내용 0</div>
	}else if(props.tab===1){
		return <div className='tabBox'>내용 1</div>
	}else if(props.tab===2){
		return <div className='tabBox'>내용 2</div>
	};
}; */

function TabContent(props) {
	let [fade, setFade] = useState('');

	useEffect(() => {
		setTimeout(() => {setFade('end')},500);
		return () => {
			setFade('')
		}
	},[props]);
	return (
		<div className={'start' + fade}>
			{[<div className='tabBox'>내용 0</div>, <div className='tabBox'>내용 1</div>, <div className='tabBox'>내용 2</div>][props.tab]}
		</div>
	)
};

export default Detail;