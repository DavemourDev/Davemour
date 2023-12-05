import { menuOptions } from "../../config";

type SectionProps = {
    children: preact.ComponentChildren;
    sectionId: string
}

export const Section = ({ children, sectionId }: SectionProps) => {

    return (
        <section id={sectionId} class={`relative h-screen text-white z-0`}>
            {/* BACKGROUND */}
            {sectionId === "section1" && <div className={`absolute bg-cover bg-origin-padding bg-fixed h-full w-full -z-2 bg-section1`}></div>}
            {sectionId === "section2" && <div className={`absolute bg-cover bg-origin-padding bg-fixed h-full w-full -z-2 bg-section2`}></div>}
            {sectionId === "section3" && <div className={`absolute bg-cover bg-origin-padding bg-fixed h-full w-full -z-2 bg-section3`}></div>}
            {sectionId === "section4" && <div className={`absolute bg-cover bg-origin-padding bg-fixed h-full w-full -z-2 bg-section4`}></div>}
            {sectionId === "section5" && <div className={`absolute bg-cover bg-origin-padding bg-fixed h-full w-full -z-2 bg-section5`}></div>}
            {sectionId === "section6" && <div className={`absolute bg-cover bg-origin-padding bg-fixed h-full w-full -z-2 bg-section6`}></div>}

            <div className={`absolute bg-black bg-cover bg-origin-padding h-full w-full -z-1 opacity-40`}></div>
            {/* CONTENT */}
            <div class={`absolute z-0 w-full h-full flex justify-end text-right text-xl `}>
                <div class={`p-20 z-1`}>
                    <h2 class="text-4xl" >{menuOptions.find(opt => opt.sectionId === sectionId)?.label}</h2>
                    {children}
                </div>
            </div>
        </section>
    );
}