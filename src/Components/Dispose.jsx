import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { BsChat } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiPhone } from 'react-icons/fi';
import Test from "../images/test.png"
import axios from '../API/axios';

function Dispose() {

  const QueryClient = useQueryClient()
  



  const [account, setAccount] = useState({})

  const [formdata, setformdata] = useState({
    description:"",
    image:""
  })

  useEffect(() =>{
    const loggedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setAccount(loggedUser);

  },[])

  async function getPosts(){
    const {data} = await axios.get('/posts')
    return data
  }

  const {data:posts, isLoading} = useQuery(["posts"], () => getPosts())


  const { mutate } = useMutation(post, {
    onSuccess: () =>{
      QueryClient.invalidateQueries(["posts"]);
      setformdata({
        description:"",
        image:""
      })
    }
   })

   async function post (formdata){
    await axios.post("/posts", formdata)
    }
  

  //hangle change event
    const handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setformdata({ ...formdata, [key]: value });
    };

    function handlesubmit(e){
      e.preventDefault()
      mutate(formdata)


    }


  return (
    <div className="Dispose">
      <div className="Title">
        <h3>DISPOSE OFF</h3>
      </div>
      <div className="Tweet">
        <div className="lEFT">
          {posts?.map(post => (
            <div className="pOST" key={post?.id}>
            <div className='uSERNAME'>
                <CgProfile />
                <p>{post?.user?.username}<span>time</span></p>
            </div>
            <div className='dESCRIPTION'>
                <h5>{post?.description}</h5>
            </div>
            <div className='iMAGE'>
             <img src={post?.image} alt='img'className='i-image'/>
            </div>
            <div className='cALL'>
                <div><BsChat/></div>
                <div className='phone'><FiPhone/></div>
            </div>
        </div>

          ))}
          
          
        </div>
        <div className="rIGHT">
          <form >
            <input type="text" placeholder="Search Tag" name="search" className='Search'/>
          </form>
          <div className='nEW'>
              <div className='dp'>
                  <CgProfile />
                  <p>{account?.username}</p>
              </div>
              <form onSubmit={handlesubmit}>
                 <input type="text" placeholder="What are you disposing ?" name="description"  value={formdata?.description} className='dISPOSE' onChange={handleChange}/>
                 <input type="text" placeholder="Add Image" name="image" className='dISPOSE' value={formdata?.image} onChange={handleChange}/>
                 <button>DISPOSE OFF</button>
              </form>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dispose