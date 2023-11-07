function Map({width, height, color}: { width: number, height: number, color: string }) {
    return (
        <svg width={`${width}px`} height={`${height}px`} strokeWidth="1" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg" color={color}>
            <path
                d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                stroke={color} strokeWidth="1"></path>
            <path
                d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z"
                fill={color} stroke={color} strokeWidth="1" strokeLinecap="round"
                strokeLinejoin="round"></path>
        </svg>
    );
}

export default Map;