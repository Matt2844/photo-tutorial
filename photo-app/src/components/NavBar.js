import React from 'react';
import Button from '@material-ui/core/Button';



export default function ButtonAppBar () {

  return (
    <div>
      <div className="nav-right">
        <a href={'/'}><Button>Gallery</Button></a>
        <a href={'/photographers'}><Button>Photographers</Button></a>
      </div>
    </div >
  );
}