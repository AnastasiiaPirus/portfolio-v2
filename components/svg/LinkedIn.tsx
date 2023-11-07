function LinkedIn({width, height, color}: { width: number, height: number, color: string }) {
    return (
        <svg width={`${width}px`} height={`${height}px`} strokeWidth="1" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg" color={color}>
            <path
                d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
                stroke={color} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M7 17V13.5V10" stroke={color} strokeWidth="1" strokeLinecap="round"
                  strokeLinejoin="round"></path>
            <path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke={color}
                  strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M7 7.01L7.01 6.99889" stroke={color} strokeWidth="1" strokeLinecap="round"
                  strokeLinejoin="round"></path>
        </svg>
    );
}

export default LinkedIn;