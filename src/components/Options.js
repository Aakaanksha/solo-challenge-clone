import { optionState } from "@/atoms/optionAtom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const Options = ({ ops, questionNo }) => {
  const { op1, op2, op3, op4 } = ops;

  const [option, setOption] = useRecoilState(optionState);

  const optionChange = (e) => {
    setOption(e.target.value);
  };

  useEffect(() => {
    const radios = document.querySelectorAll("input");
    radios.forEach((radio) => (radio.checked = false));
  }, [questionNo]);

  return (
    <div className="px-4 absolute top-[55%] left-[50%] w-[100%] -translate-x-[50%] -translate-y-[50%]">
      <label
        htmlFor="rd1"
        className="flex items-center gap-2 bg-gray p-4 border-b border-b-[#4b5356]"
      >
        <input
          type="radio"
          id="rd1"
          name="options"
          value={op1}
          onChange={(e) => optionChange(e)}
        />
        {op1}
      </label>

      <label
        htmlFor="rd2"
        className="flex items-center gap-2 bg-gray p-4 border-b border-b-[#4b5356]"
      >
        <input
          type="radio"
          id="rd2"
          name="options"
          value={op2}
          onChange={optionChange}
        />
        {op2}
      </label>

      <label
        htmlFor="rd3"
        className="flex items-center gap-2 bg-gray p-4 border-b border-b-[#4b5356]"
      >
        <input
          type="radio"
          id="rd3"
          name="options"
          value={op3}
          onChange={optionChange}
        />
        {op3}
      </label>

      <label htmlFor="rd4" className="flex items-center gap-2 bg-gray p-4">
        <input
          type="radio"
          id="rd4"
          name="options"
          value={op4}
          onChange={optionChange}
        />
        {op4}
      </label>
    </div>
  );
};

export default Options;
