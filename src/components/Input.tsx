
type Props = {
    label: string
    placeholder?: string,
    value?: string,
    onChange?: (e: preact.JSX.TargetedEvent<HTMLInputElement, Event>) => {},
    required?: true,
    name: string
}



export const InputText = ({ label, name }: Props) => {
    return (
        <div class="flex flex-col py-2">
            <label class="text-base font-semibold" for={`input-${name}`}>{label}</label>
            <input type="text" class="focus:bg-yellow border-2 border-gray-300 p-2 rounded-md text-black" name={name} id={`input-${name}`} />
        </div>
    );
};


export const InputLongText = ({ label, name }: Props) => {
    return (
        <div class="flex flex-col py-2">
            <label for={`input-${name}`} class="text-base font-semibold">{label}</label>
            <textarea rows={5} class="focus:bg-yellow border-2 border-gray-300 p-2 rounded-md text-black resize-none" name={name} id={`input-${name}`} ></textarea>
        </div>
    );
};

export const InputEmail = ({ label, name }: Props) => {
    return (
        <div class="flex flex-col py-2">
            <label for={`input-${name}`} class="text-base font-semibold">{label}</label>
            <input type="email" class="focus:bg-yellow border-2 border-gray-300 p-2 rounded-md text-black" name={name} id={`input-${name}`} />
        </div>
    );
}