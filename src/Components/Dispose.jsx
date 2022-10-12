import React from 'react'
import { BsChat } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FiPhone } from 'react-icons/fi';
import Test from "../images/test.png"

function Dispose() {
  return (
    <div className="Dispose">
      <div className="Title">
        <h3>DISPOSE OFF</h3>
      </div>
      <div className="Tweet">
        <div className="lEFT">
          <div className="pOST">
              <div className='uSERNAME'>
                  <CgProfile />
                  <p>usename <span>time</span></p>
              </div>
              <div className='dESCRIPTION'>
                  <h5>my very long lon long long Description</h5>
              </div>
              <div className='iMAGE'>
               <img src={Test} alt='img'className='i-image'/>
              </div>
              <div className='cALL'>
                  <div><BsChat/></div>
                  <div className='phone'><FiPhone/></div>
              </div>
          </div>
          <div className="pOST">POST</div>
          <div className="pOST">POST</div>
          <div className="pOST">POST</div>
          <div className="pOST">POST</div>
        </div>
        <div className="rIGHT">
          <form >
            <input type="text" placeholder="Search Tag" name="search" className='Search'/>
          </form>
          <div className='nEW'>
              <div className='dp'>
                  <CgProfile />
              </div>
              <form>
                 <input type="text" placeholder="What are you disposing ?" name="search" className='dISPOSE'/>
                 <button>DISPOSE OFF</button>
              </form>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dispose