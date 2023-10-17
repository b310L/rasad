import { Box } from "@mui/material";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
// interface TabPanelProps {
//   children?: React.ReactNode;
//   dir?: string;
//   index: number;
//   value: number;
// }

// function TabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

interface SetVal {
  setval: Dispatch<SetStateAction<string>>;
  len?:number
}

const DigitCode = (props: SetVal) => {
  const { setval,len=4} = props;

  const inpsRef = useRef<Array<HTMLInputElement>>([]);
  const [inpsValue, setInpsVal] = useState<Array<string | number>>([]);
  let insertedValue = inpsValue.toString().replaceAll(",", "");
  setval(insertedValue);
  const indexRef = useRef<number>(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInpsVal(inpsRef.current.map((el) => el.value));
    setval(insertedValue);
    if (e.target.value.length === 1) {
      if (indexRef.current !== len - 1) {
        indexRef.current = indexRef.current + 1;
        inpsRef.current[indexRef.current].focus();
      } else {
        indexRef.current = 0;

        // inpsRef.current[indexRef.current].focus();
      }
    }
  };

  useEffect(() => {
    inpsRef.current = inpsRef.current.slice(0, len);
  }, [len]);
  return (
    <Box sx={{ display: "flex", gap: 2, flexDirection: "row-reverse" }}>
      {[...Array(len)].map((c, i) => {
        return (
          <Box
            key={i}
            id={i.toString()}
            component={"input"}
            sx={{
              textShadow: 3,
              boxShadow:
                "-.00001px .0005px 5px .1px rgba(225,4,75,0.8)/* ,1px 1px 3px .1px rgba(25,25,255,.5) *//* , -3px 4px 5px rgba(70,70,70,0.32) inset */;",
              border: 0,
              outline: 0,
              borderRadius: 0.5,
            }}
            // key={`index-${index}`}
            // ref={(el) => el && (inputRefs.current[index] = el)}
            inputMode="numeric"
            maxLength={1}
            width="30px"
            textAlign={"center"}
            height={"35px"}
            type="text"
            /* To Do */
            // onKeyDown={}
            // onKeyUp={}
            onFocus={(el) => {
              indexRef.current = inpsRef.current.findIndex(
                (e) => el.target === e
              );
            }}
            ref={(el: HTMLInputElement) => {
              inpsRef.current[i] = el;
            }}
            // value={String(value)}
            onChange={(e) => handleChange(e)}
            // onKeyUp={(e) => onKeyUp(e, index)}
            // onKeyDown={(e) => onKeyDown(e)}
            // onFocus={(e) => onFocus(e, index)}
          ></Box>
        );
      })}
    </Box>
  );
};

export default DigitCode;
