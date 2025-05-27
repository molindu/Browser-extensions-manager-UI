import ToggleSwitch from "./ToggleSwitch.tsx";

type ExtensionLoaderProps = {
    filteredData: {
        name: string;
        description: string;
        logo: string;
        isActive: boolean;
    }[];
    handleRemove: (name: string) => void;
    darkMode: boolean;
};

const ExtensionLoader = ({filteredData, handleRemove, darkMode}: ExtensionLoaderProps) => {
    const cardBg = darkMode ? 'bg-white' : 'bg-neutral-700/20';
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-5/6">
            {filteredData.map((item, index) => (
                <div
                    key={index}
                    className={`flex flex-col justify-between p-4 rounded-2xl border ${!darkMode ? 'border-neutral-200' : 'border-neutral-300'} shadow ${cardBg}`}
                >
                    <div className="flex gap-3">
                        <img src={item.logo} alt={item.name}/>
                        <div>
                            <p className="font-bold">{item.name}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={() => handleRemove(item.name)}
                            className="rounded-full border border-neutral-300 py-1 px-3 hover:bg-red-500 hover:text-white"
                        >
                            Remove
                        </button>
                        <ToggleSwitch isActive={item.isActive}/>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ExtensionLoader;