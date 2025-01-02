import Link from "next/link";

export function NavLink ({ href, linkText, className=""}) {
    return (
        <a href={href} prefetch={false} className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light ${className}`}>
            <span
                data-attr={linkText}
                className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
            >
                {linkText}
            </span>
        </a>
    )
}

export function NavButton ({ linkText, onClick, className="" }) {
    return (
        <button onClick={onClick} className={`text-[1.3vw] fade-in-0 leading-tight text-body tablet:text-[2.3vw] mobile:text-[5vw] overflow-hidden block relative group aeonik font-light ${className}`}>
            <span
                data-attr={linkText}
                className="inline-block transition-transform duration-500 ease-out after:absolute after:left-0 after:-bottom-0 after:translate-y-full after:content-[attr(data-attr)] group-hover:-translate-y-full"
            >
                {linkText}
            </span>
        </button>
    )
}