import style from '../../../../styles/home.module.css'

const NavSecondary = () => {
    return (
        <>
          <div class="py-2 bg-[#26468f] sm:py-3 lg:py-4"></div>
          <section class="py-1 bg-gray-100 sm:py-2 lg:py-3">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 w-full">
                <div class="flex flex-col items-end">
                    <button id={style["defaultbutton"]} type="submit" class="mr-24 inline-flex items-center justify-center w-auto px-4 py-3 mt-4 font-semibold text-white transition-all duration-200 bg-[#26468f] border border-transparent rounded-md sm:ml-4 sm:mt-0 sm:w-auto hover:bg-indigo-700 focus:bg-indigo-700">
                    <svg class="w-6 h-6 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                        Kembali ke Pilihkartu
                    </button>
                </div>
              </div>
            </section>
            
            <div className="px-28 mx-auto sm:px-28 lg:px-28 w-full flex flex-row">
              <div>
                <img src="/logo.png" className="-mt-12 mb-7"/>
              </div>
              <h1 class="ml-5 mt-3 font-medium text-xl text-[#26468f]">DAPATKAN ASURANSI GRATIS DARI AXA LIFE INDONESIA
              <p class="font-extrabold text-2xl text-[#26468f]">DAPATKAN ASURANSI GRATIS DARI AXA LIFE INDONESIA</p></h1>
              
            </div>   
        </>
    )
}

export default NavSecondary