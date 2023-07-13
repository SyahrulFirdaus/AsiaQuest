import style from '../../../../styles/home.module.css'

const ComponentJumbotronHome = () => {
    return (
        <>
            <section className="bg-center bg-no-repeat bg-[url('/hero.png')] bg-gray-700 ">
                <div className="px-4 mx-auto max-w-screen-4xl text-center py-72 lg:py-72">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 w-full float-right">
                    <div className="flex flex-col items-end mt-36 ">
                            <button id={style["defaultbutton"]} type="submit" className="mr-28 float-right inline-flex w-auto px-4 py-3 mt-4 font-semibold text-white transition-all duration-200 bg-[#26468f] border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto hover:bg-indigo-700 focus:bg-indigo-700">
                                GRATIS!
                            </button>
                    </div>
                </div>
                </div>
            </section>    
        </>
    );
}

export default ComponentJumbotronHome

