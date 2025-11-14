function BrandCard({title , src}) {
    return (
        <div className="w-full h-28 rounded-xl bg-white dark:bg-gray-800 px-6 py-3 shadow-sm">
            <img src={`${import.meta.env.BASE_URL}${src}`} alt={`${title} brand`} className="w-full h-full object-cover" loading={"lazy"}/>
        </div>
    );
}

export default BrandCard;