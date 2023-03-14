import Draggable from "react-draggable";

export function StickyNote(props) {
  return (
    <>
      <Draggable defaultPosition={props.position} key={props.key} nodeRef={props.nodeRef}>
        <div ref={props.nodeRef}>
          <props.color id={props.key}>
            {
              <>
                <img width="275vw" src={props.image} alt="notes" />
                <br></br>
                {props.text}
              </>
            }
          </props.color>
        </div>
      </Draggable>
    </>
  );
}
