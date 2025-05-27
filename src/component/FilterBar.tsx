const FILTER_OPTIONS = ['All', 'Active', 'Inactive'];

type FilterBarProps = {
    filter: string;
    setFilter: (filter: string) => void;
    darkMode: boolean;
}
const FilterBar = ({filter, setFilter, darkMode}: FilterBarProps) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between w-5/6 mt-16 mb-4 gap-4">
            <p className="text-3xl font-semibold">Extensions List</p>
            <div className="flex gap-2 items-center">
                {FILTER_OPTIONS.map(option => (
                    <button
                        key={option}
                        className={`shadow rounded-full py-2 px-4 cursor-pointer transition hover:border ${
                            filter === option ? 'bg-red-500 text-white' : darkMode ? 'bg-neutral-50' : 'bg-neutral-100/10'
                        } ${darkMode ? 'hover:border-neutral-200' : 'hover:border-neutral-900'}`}
                        onClick={() => setFilter(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FilterBar;