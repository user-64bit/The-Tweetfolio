import React  from 'react';
import Iframely from './Iframely';
import './Blogs.css';


const Blogs = () => {
  return (
    <>
        <div className="blogs">
          <div className="name_tag">
            <h2>
           Posts 
            </h2>
          </div>
           <div className="posts">
              <Iframely url='https://iamprogrammer.hashnode.dev/digital-root' size='small'/>
           </div>
        </div>

    </>
  )
}

export default Blogs
