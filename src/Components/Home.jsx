import React from 'react'
import './style/Home.css'
import Data from './class.json'

function Home() {
  return (
	<div>
		<div className='main'>
           <h1>Title</h1>
		   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis amet soluta, quo perspiciatis modi ad dolorem quas harum blanditiis architecto illum, tempora fuga rem aut similique necessitatibus officiis eius dolore, quos nobis placeat beatae temporibus.</p>
		   <button>Read More</button>
		</div>

       <div className='datahere'>
         <div className='clas'>
		 <h1>Classes</h1>
		  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, dignissimos similique. Pariatur repudiandae veniam nam, repellat aspernatur similique tempore aliquid!</p>
		 </div>


       {/* append data */}
		 <div className='grid'>
			{
				Data.map((e)=>(
					<div key={e.id}>
						<div id='image'>ADD IMAGE</div>
						<h2>{e.Name}</h2>
                        <p>{e.ShortDesc}</p>
						<button>View</button>
					</div>
				))
			}
		 </div>
	   </div>
		
	</div>
  )
}

export default Home