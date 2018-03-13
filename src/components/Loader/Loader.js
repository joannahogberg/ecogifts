import React from 'react';

import './loader.css';

function Loader() {

  return (
    <div className="banner-wrapper-outer">
     <div className="banner-wrapper-inner">
       {/* <h1 className="loader-heading">Laddar presenttips</h1> */}
    
       <h1 className="loader-heading" data-text="Laddar presenttips…">Laddar presenttips…</h1>
       {/* <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div> */}
     </div>
    </div>
  );
}

export default Loader;