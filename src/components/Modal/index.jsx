import ReactDOM from "react-dom";
import { useRef } from "react";
import "./index.css";

const Modal = ({ onClose, developer = [] }) => {
  const modalRef = useRef(null);

  const handleClose = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div ref={modalRef} className="modal__container" onClick={handleClose}>
      <div className="modal__box">
        <div className="modal__close" onClick={onClose}>
          x
        </div>

        <div className="modal__box--developer">
          <img src={developer.image} className="modal__box--developer-image" loading="lazy" />
          <div className="modal__box--developer-detailes">
            <div className="modal__box--developer-name skills">
              <span className="bold skill">App Developer :</span>
              <span className="skill">{developer.name}</span>
            </div>
            {/* <div className="modal__box--developer-designation">
              <span className="bold skill">Role :</span> <span className="skill">{developer.role}</span>
              </div> */}
           <div className="skills">
            <span className="bold skill">ToolKits :</span>
            {developer.skills.map((skill, index)=> (
                <span className="skill" key={index}>{skill}</span>
            ))}
           </div>
           <div className="skills">
           <span className="bold skill">Hooks :</span>
            {developer.hooks.map((hook, index)=> (
                <span className="skill" key={index}>{hook}</span>
            ))}
           </div>
           <div className="skills">
           <span className="bold skill">LazyLoading :</span>
            {developer.lazyLoading.map((lazyLoading, index)=> (
                <span className="skill" key={index}>{lazyLoading}</span>
            ))}
           </div>
              <div className="skills">
              <span className="bold skill">WebApi :</span>
               {developer.webApi.map((webApi, index)=> (
                   <span className="skill" key={index}>{webApi}</span>
               ))}
              </div>
           <div className="design-refered">
           <a href={`${developer.refer.url}`} target="_blank" className="bold skill">{developer.refer.title}</a> 
           <a href={`${developer.portfolio.url}`} target="blank" className="bold skill">{developer.portfolio.title}</a> 
           </div>

          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
export default Modal;
