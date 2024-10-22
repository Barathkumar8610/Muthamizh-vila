import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
     <div id="home">
        <div class="header">
           <div>அரசினர் பொறியியற் கல்லூரி</div>
           <div>கோவை - 13 </div>
           <div>தமிழ் மற்றும் நுண்கலை மன்றம் வழங்கும்</div>
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
     </div>
  );
};

export default Home;