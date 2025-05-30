function PrintableHeader() {
    return (
        <div className={`col-span-6 flex flex-row w-full gap-1 mt-8 p-1`}>
            <div className={`flex flex-row basis-3/5 w-full gap-1 -mx-4 mt-8 p-1`}>
                <p className="flex flex-none line-clamp-1 w-auto text-sm"> Nombre de Entrenador:</p>
                <div className="border-b-1 flex-grow" />
            </div >
            <div className={`grid grid-flow-col basis-2/5 content-end justify-end cw-full gap-1 p-1`}>
                <img src="campfire.png" className="h-10 aspect-auto"/>
                <img src="pogo_gdl.png" className="h-10 aspect-auto"/>
                <img src="logo-eevee.png" className="h-10 aspect-auto"/>
                <img src="cat_color.png" className="h-10 aspect-auto"/>
            </div >
        </div >
    );
}

export default PrintableHeader
