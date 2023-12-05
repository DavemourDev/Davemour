
type Props = {
    children: preact.ComponentChildren;
    orientation?: "horizontal" | "vertical";
}

export const ButtonGroup = ({ children, orientation = "horizontal" }: Props) => {
    return (
        <div class="flex flex-row flex-wrap justify-center gap-4">
            {children}
        </div>
    );
}