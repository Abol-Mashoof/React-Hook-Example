import {
  UseRefExample,
  UseCallbackExample,
  UseMemoExample,
  UseReducerExample,
  UseLayoutEffectExample,
  UseImperativeHandleExample,
  UseDeferredValueExample,
  UseTransitionExample,
  CustomHooks,
} from "./Hooks";
import Accordion from "./components/Accordion";
import { CYAN, FOREGROUND, GREEN } from "./helpers/colors";
import { Fragment } from "react";
const App = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="text-center mt-2">
          <h2 style={{ color: FOREGROUND }}>
            یادگیری و استفاده از هوک های ری اکت 🚀
          </h2>
        </div>
        <hr style={{ backgroundColor: GREEN, minHeight: "2px" }} />
        <Accordion title="مثال هوک useRef" heading="headingOne">
          <UseRefExample />
        </Accordion>
        <hr style={{ backgroundColor: CYAN, minHeight: "2px" }} />
        <Accordion title="مثال هوک useMemo" heading="headingTwo">
          <UseMemoExample />
        </Accordion>
        <hr style={{ backgroundColor: GREEN, minHeight: "2px" }} />
        <Accordion title="مثال هوک useCallback" heading="headingtry">
          <UseCallbackExample />
        </Accordion>
        <hr style={{ backgroundColor: CYAN, minHeight: "2px" }} />
        <Accordion title="مثال هوک useReducer" heading="headingfur">
          <UseReducerExample />
        </Accordion>
        <hr style={{ backgroundColor: GREEN, minHeight: "2px" }} />
        <Accordion title="مثال هوک useLayoutEffect" heading="headingfyv">
          <UseLayoutEffectExample />
        </Accordion>
        <hr style={{ backgroundColor: CYAN, minHeight: "2px" }} />
        <Accordion title="مثال هوک useImperativeHandle" heading="headingsyx">
          <UseImperativeHandleExample />
        </Accordion>
        <hr style={{ backgroundColor: GREEN, minHeight: "2px" }} />
        <Accordion title="مثال هوک useDeferredValue" heading="headingsvn">
          <UseDeferredValueExample />
        </Accordion>
        <hr style={{ backgroundColor: CYAN, minHeight: "2px" }} />
        <Accordion title="مثال هوک UseTransition" heading="headingeyt">
          <UseTransitionExample />
        </Accordion>
        <hr style={{ backgroundColor: GREEN, minHeight: "2px" }} />
        <Accordion title="مثال هوک CustomHooks" heading="headingnyne">
          <CustomHooks />
        </Accordion>
      </div>
    </Fragment>
  );
};

export default App;
