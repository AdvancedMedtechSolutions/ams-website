import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md px-[0.7vw] mobile:px-[3vw] py-2 text-[1.2vw] mobile:text-[4vw] tablet:text-[2.2vw] tablet:ml-[1vw]  border-b-[1px] border-gray-400 font-light aeonik bg-transparent placeholder:text-black focus-visible:outline-none",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
