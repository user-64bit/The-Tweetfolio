import React  from 'react';
import './Blogs.css';
import BlogCard from './BlogCard';


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
              {/*<Iframely url='https://iamprogrammer.hashnode.dev/digital-root' size='small'/>*/}
              {/*<Iframely url='https://iamprogrammer.hashnode.dev/twitter-bot-using-python-and-deployed-on-heroku' size='small'/>*/}
              {/*<Iframely url='https://iamprogrammer.hashnode.dev/sliding-window-technique' size='small'/>*/}
              {/*<Iframely url='https://iamprogrammer.hashnode.dev/pascals-triangle' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2022/04/what-is-docker.html' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2022/03/makefile.html' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2022/02/what-is-digital-root.html' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2022/02/coding-problems-google-kick-start-2021.html' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2022/02/instagram-osint.html' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2022/02/how-to-connect-mysql-using-c-in-linux.html' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2022/01/args-and-kwargs-in-python.html' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2022/01/find-nth-fibonacci-number-time-o1.html' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2022/01/how-to-create-website-on-dark-web.html' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2022/01/what-are-nfts-how-to-earn-create-and.html' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2021/11/extension-create-publish-and-earn.html' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2021/11/coding-problems-hacker-rank-separate.html' size='small'/>*/}
              {/*<Iframely url='https://apnacodingadda.blogspot.com/2021/11/binary-search.html' size='small'/>*/}
            <BlogCard url='https://iamprogrammer.hashnode.dev/digital-root'/>
            <BlogCard url='https://iamprogrammer.hashnode.dev/twitter-bot-using-python-and-deployed-on-heroku'/>
            <BlogCard url='https://iamprogrammer.hashnode.dev/sliding-window-technique'/>
            <BlogCard url='https://iamprogrammer.hashnode.dev/pascals-triangle'/>
            <BlogCard url='https://apnacodingadda.blogspot.com/2022/04/what-is-docker.html'/>
            {/*<BlogCard url='https://apnacodingadda.blogspot.com/2022/03/makefile.html'/>*/}
            {/*<BlogCard url='https://apnacodingadda.blogspot.com/2022/02/what-is-digital-root.html'/>*/}
            <BlogCard url='https://apnacodingadda.blogspot.com/2022/02/coding-problems-google-kick-start-2021.html'/>
           </div>
        </div>

    </>
  )
}

export default Blogs
