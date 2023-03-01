import React from 'react';

import './Update.scss';

const Update = ({ setOpenUpdate }) => {
  return (
    <section className='update'>
          Update
     <button
          onClick={() => setOpenUpdate(false)}
     >
          X
     </button>
    </section>
  );
};

export default Update;
