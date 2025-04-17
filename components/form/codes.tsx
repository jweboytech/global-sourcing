import React from "react";

const items = Array.from<string>({ length: 6 }).fill("");

const CodesField = () => {
  const [code, setCode] = React.useState<string[]>([]);
  const [available, setAvailable] = React.useState<boolean>(false);
  const [focusedIndex, setFocusedIndex] = React.useState<number>(-1); // 记录当前 focus 的输入框索引
  const inputRefs = React.useRef<HTMLInputElement[]>([]);

  React.useEffect(() => {
    return () => {
      setCode(["", "", "", "", "", ""]);
      setAvailable(false);
      setFocusedIndex(-1);
    };
  });

  const handleSetCode = (val: string, index: number): void => {
    const newCode = code;

    newCode[index] = val;

    const validateResult = newCode.every((val) => !!val);

    setAvailable(validateResult);
    setCode(newCode);
  };

  const handleEmpty = (index: number): void => {
    handleSetCode("", index);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ): void => {
    handleSetCode(e.target.value, index);

    // 自动聚焦到下一个输入框
    if (e.target.value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    } else {
      inputRefs.current[inputRefs.current.length - 1].blur();
    }
  };

  const handleConfirm = (): void => {
    if (!available) return;

    onFinish(code.join(""));
  };

  const handlePaste = (
    e: ClipboardEvent<HTMLInputElement>,
    index: number,
  ): void => {
    e.preventDefault(); // 阻止默认的粘贴行为
    const pasteData = e.clipboardData?.getData("text") || ""; // 获取粘贴的内容

    if (!pasteData) return;

    const newCode = [...code]; // 创建一个新的数组以存储验证码

    for (let i = 0; i < pasteData.length; i++) {
      if (index + i < newCode.length) {
        newCode[index + i] = pasteData[i]; // 将粘贴的字符逐一分配到输入框
      }
    }

    setCode(newCode); // 更新验证码状态
    const validateResult = newCode.every((val) => !!val); // 检查是否所有输入框都已填满

    setAvailable(validateResult);

    setTimeout(() => {
      inputRefs.current.forEach((inputRef) => inputRef.blur());
    });
  };

  React.useEffect((): (() => void) => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log("handleKeyDown fired!");
      if (e.code === "Backspace" && code[0] !== "") {
        let currIndex = -1;

        for (const [key, value] of code.entries()) {
          if (value === "") {
            currIndex = key;
            break;
          }
        }

        handleSetCode("", currIndex - 1);
        inputRefs.current[currIndex - 1].focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown, false);

    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  }, [code]);

  return (
    <div className="w-full mt-[44px] mb-[58px] pl-[11px] pr-[11px] flex justify-between">
      {code.map((val: string, index: number) => (
        <div
          className="w-[54px] h-[54px] relative flex flex-shrink-0 pt-[2px]"
          key={index}
        >
          <input
            ref={(ref) => {
              if (inputRefs && inputRefs.current) {
                // @ts-ignore
                inputRefs.current[index] = ref;
              }
            }}
            className="w-full h-[44px] outline-none text-center text-black1-11 text-[32px]"
            value={val}
            onFocus={() => {
              handleEmpty(index);
              setFocusedIndex(index);
            }} // 设置当前 focus 的输入框索引
            onBlur={() => setFocusedIndex(-1)} // 失去焦点时清除索引
            onChange={(e) => handleChange(e, index)}
            onPaste={(e) => handlePaste(e, index)}
          />
          <div
            className={`absolute z-0 bottom-0 w-full h-[1px] border-b ${focusedIndex === index || val ? "border-main-blue" : "border-[#E4E3E7]"}`}
          />
        </div>
      ))}
    </div>
  );
};

export default CodesField;
