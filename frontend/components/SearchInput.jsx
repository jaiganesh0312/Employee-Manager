// components/SearchInput.js
import { Input, Button, Divider } from "@heroui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setKeyword } from "@/lib/redux/slices/filterSearchSlice";

export default function SearchInput({ isResettable, keyword }) {
  const [inputValue, setInputValue] = useState(keyword);
  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue(keyword);
  }, [keyword]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(setKeyword(event.target.value));
    }
    if (event.key === "Escape" && isResettable) {
      dispatch(setKeyword(""));
    }
  };

  const handleChange = (value) => {
    setInputValue(value);
  };


  return (
    <Input
      className="border-2 rounded-full border-default-300 focus-within:border-default-500 w-2/5 m-auto"
      classNames={{
        label: "text-black/50 dark:text-white/90 ",
        input: [
          "bg-white",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          "hover:bg-white"
        ],
        innerWrapper: ["bg-white", "hover:bg-white", "rounded-full px-2"],
        inputWrapper: [
          "px-0",
          "shadow-xl",
          "bg-white",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-white",
          "dark:hover:bg-default/70",
          "group-data-[focus=true]:bg-default-200/50",
          "dark:group-data-[focus=true]:bg-default/60",
          "cursor-text",
          "rounded-full"
        ],
        
       
        //mainWrapper: ["hover:bg-white", "focus-within:bg-white"]
      }}
      placeholder={
        isResettable
          ? "Press Esc to Reset Search Filters"
          : "Type to Search and Press Enter..."
      }
      radius="lg"
      startContent={
        <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 mt-1" />
      }
      endContent={
        <>
          <Divider orientation="vertical" className="h-8"/>
          <Button
            isIconOnly
             onPress={() => dispatch(setKeyword(inputValue))}
             size="sm"
             className="p-1 m-1 border-0 text-secondary-300 bg-white hover:text-white hover:bg-secondary-400 "
          >

          
          <SearchIcon 
            className="text-3xl"  
            
          />
          </Button>
        </>
        
      }
      onKeyDown={handleKeyDown}
      value={inputValue}
      onValueChange={handleChange}
    />
  );
}

// Keep SearchIcon component the same

function SearchIcon(props) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      viewBox="0 0 24 24"
      width="1em"
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
