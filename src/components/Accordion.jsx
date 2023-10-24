import { CURRENTLINE,FOREGROUND, GREEN,CYAN } from "../helpers/colors";
const Accordion = ({ children, title, heading }) => {
  return (
    <div className="accordion" id="accordionHooks">
      <div className="accordion-item">
        <h2 className="accordion-header" style={{}} id={heading}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${heading}`}
            aria-expanded="true"
            aria-controls={`collapse${heading}`}
            style={{ fontFamily: "Vazir",backgroundColor: CURRENTLINE,color : FOREGROUND,border: `1px solid ${CYAN}` }}>
            {title}{"_"}
          </button>
        </h2>
        <div
          id={`collapse${heading}`}
          className="accordion-collapse collapse"
          aria-labelledby={heading}
          data-bs-parent="#accordionHooks">
          <div className="accordion-body" style={{backgroundColor: GREEN,border: `1px solid ${CYAN}`}}>{children}</div>
        </div>
      </div>
    </div>
  ); 
};

export default Accordion;
