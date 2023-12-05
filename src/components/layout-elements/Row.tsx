


type RowProps = {
    children: preact.ComponentChildren;
}


/**
 * Header row component
 */
export const Row = (props: RowProps) => {
    return (
        <div class="flex flex-wrap px-4 justify-between items-center">
            {props.children}
        </div>
    );
};