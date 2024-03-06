//Footer.tsx
import React from 'react';

interface Props {
  footer: string;
}

const Footer: React.FC<Props> = ( {footer} ) => {
    return (
      <div className="d-flex 
        justify-content-center 
        align-center 
        text-center 
        flex-column">
          <h6 className=""> 
            {/* <Footer footer={footer} /> */}
            {footer}
          </h6>
      </div>
    );
  };


  export default Footer;