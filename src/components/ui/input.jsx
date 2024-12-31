import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[3vw] w-full  border-b border-slate-400 bg-transparent px-3 pt-2 text-[1.2vw] mobile:text-[4vw] mobile:h-[10vw] tablet:text-[2.2vw] tablet:h-[5vw] aeonik file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-slate-950 placeholder:text-[#111111] font-light placeholder:aeonik focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:file:text-slate-50 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
