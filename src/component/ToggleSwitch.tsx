export type ToggleSwitchProps = {
    isActive: boolean;
    style?: string;
};

const ToggleSwitch = ({ isActive, style = '' }: ToggleSwitchProps) => {
    return (
        <div className={`w-10 h-6 flex items-center rounded-full p-1 transition duration-300 ${
            isActive ? 'bg-red-500' : 'bg-neutral-300'
        } ${style}`}>
            <div
                className={`bg-white w-4 h-4 rounded-full shadow transition-transform duration-300 ${
                    isActive ? 'translate-x-4' : 'translate-x-0'
                }`}
            />
        </div>
    );
};

export default ToggleSwitch;
