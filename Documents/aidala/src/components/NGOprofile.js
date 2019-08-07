import React from 'react'

const NGOprofile = ({ show, handleClose, modalTitle, modalImage, modalDescription, modalSmallDescription }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  let description = modalDescription.split('\n').map((item, key) => {
   return <span key={key}>{item}<br/></span>
  })

  return (
    <div className={showHideClassName}>
      <section className="modal-main">

          <span className="modal_close" onClick={handleClose}>&times;</span>
            <div className="card">
              <img src={modalImage} alt={modalImage} className="modal_img"></img>
              <h4 className="card_title">{modalTitle}</h4>
              <p className="card_description">{modalSmallDescription}</p>
              <p className="card_description">{description}</p>


            </div>

      </section>

    </div>
  );
};

export default NGOprofile;
