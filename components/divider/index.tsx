function Divider({title}: { title: string }) {
    return (
        <div className="w-full flex items-center container gap-8 my-8 py-8">
            <div className="bg-black h-[2px] w-full "/>
            <h2 className="heading2 text-center whitespace-nowrap ">{title}</h2>
            <div className="bg-black h-[2px] w-full "/>
        </div>

    );
}

export default Divider;