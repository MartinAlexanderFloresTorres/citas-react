function Error({mensaje}) {
    return (
        <div className="bg-red-500 text-white font-bold p-3 text-center rounded-md mb-5">
            <p>{mensaje}</p>
        </div>
    );
}

export default Error