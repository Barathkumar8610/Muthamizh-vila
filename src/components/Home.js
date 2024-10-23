import React from 'react';
import Bubble from './Bubble.js';
import '../styles/Home.css';

const Home = () => {
  return (
     <div id="home">
        <div class="header">
           <div>அரசினர் பொறியியற் கல்லூரி</div>
           <div>கோவை - 13 </div>
           <div>தமிழ் மற்றும் நுண்கலை மன்றம் </div>
           <div>வழங்கும்</div>
        </div>
        <img class="eventName" src="./name.png" alt="name" />
        {/* <div className="segment3">
          <div class="dateDetails">
             <pre>
             DATE AND
             <br></br> 
             OTHER STUFFS
             </pre>
          </div>
         <img class="logo" src="./logo.png" alt="logo"/>
         <div class="dateDetails">
         <pre>
             DATE AND 
             <br></br>
             OTHER STUFFS
             </pre>
          </div>
        </div> */}

        
        <div class="about">
        about mtv or tmfa bla blabla தமிழ் (Tamil language) தமிழ் பலரின் தாய்மொழி ஆகும். தமிழ் செம்மொழியும் ஆகும்.  And some random content.
        </div>
      
        

        <div class="eventList">
           <Bubble />
        </div>



        <div>
         
        </div>
     </div>
  );
};

export default Home;
