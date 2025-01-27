import { Input } from "@nextui-org/react";
import SearchIcon from "./SearchIcon";

export default function SearchInput({onValueChange, isResettable}) {

  const handleKeyDown = (event) => {
    if(event.key === "Enter"){
      onValueChange(event.target.value);
    }
    if(event.key === "Escape" && isResettable){
      onValueChange("");
    }
  }
  return (
      <Input 
        className=" w-1/3 border-2 rounded-2xl border-default-300 focus-within:border-default-500"
        isClearable
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60"
            
          ],
          innerWrapper: "bg-transparent ",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder={isResettable ? "Press Esc to Reset Search Filters" : "Type to Search and Press Enter..."}
        radius="lg"
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 mt-1" />
        }
        onKeyDown={handleKeyDown}
      />
  );
}
  