import { useLayoutEffect, useRef } from "react";
import { Field } from "formik";

const MIN_TEXTAREA_HEIGHT = 55;

export const MessageComp = () => {
  const textareaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    textareaRef.current ? (textareaRef.current.style.height = "inherit") : null;
    textareaRef.current
      ? (textareaRef.current.style.height = `${Math.max(
          textareaRef.current?.children[0].scrollHeight,
          MIN_TEXTAREA_HEIGHT
        )}px`)
      : null;
  }, [textareaRef.current?.children[0].scrollHeight]);

  return (
    <div className={"textareaWrapper"} ref={textareaRef}>
      <Field
        as="textarea"
        placeholder="Your Message"
        id="message"
        ref={textareaRef}
        name="message"
      />
    </div>
  );
};
