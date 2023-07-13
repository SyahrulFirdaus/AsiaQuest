import style from '../../../../styles/home.module.css'

const ComponentContent1 = () => {
    return (
        <>
             <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
              <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div class="text-center">
                      <h2 class="text-4xl font-medium leading-tight text-black">Keuntungan mendaftar <span className='text-[#26468f] font-extrabold'>AXA Life Indonesia</span> di Pilihkartu</h2>
                  </div>

                  <div class="px-5 py-8 mt-12 lg:mt-20 lg:p-16">
                      <div id={style["animasi"]} class="grid grid-cols-1 gap-12 lg:gap-16 sm:grid-cols-2">
                        <div class="flex items-start">
                                <div class="ml-5">
                                    <p class="text-lg text-black">Diberikan gratis secara cuma-cuma tanpa premi.</p>
                                    <h1 class="mt-4 text-base text-black font-semibold">
                                    PREMI RP : 0, -(NOL RUPIAH)
                                    </h1>
                                </div>
                                <img src='/icon_2.png' className="ml-20 mt-5" />
                            </div>

                            <div class="flex items-start">
                            <img src='/icon_4.png' className=" mt-5"  />
                                <div class="ml-5">
                                    <p class="mt-4 text-base text-gray-600">
                                    Pendaftar yang lolos verifikasi dari Tim <span className="font-semibold"> AXA</span>
                                    berhak mendapat perlindungan Asuransi kecelakaan diri selama <span>3 bulan.</span>
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="ml-5">
                                    <p class="mt-4 text-base text-gray-600">
                                    Santunan meninggal dunia akibat kecelakaan sebesar
                                    <span className="font-semibold"> Rp 25.000.000,-(dua puluh lima juta rupiah)</span>
                                    </p>
                                </div>
                                <img src='/icon_2.png' className="ml-20 mt-5"  />
                            </div>

                            <div class="flex items-start">
                            <img src='/icon_5.png' className=" mt-5"  />
                                <div class="ml-5">
                                    <p class="mt-4 text-base text-gray-600">
                                    <span className="font-semibold"> Tanpa ada masa tunggu</span>
                                    , perlindungan yang didapatkan dimulai sejak polis aktif
                                    </p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="ml-5">
                                    <p class="mt-4 text-base text-gray-600">
                                    Perlindungan <span className="font-semibold"> asuransi GRATIS</span> akan diberikan kepada PEMEGANGkartu kredit yang mendaftar program AXA Care Protection melalui pilihkartu.com
                                    </p>
                                </div>
                                <img src='/icon_3.png' className="ml-20 mt-5"  />
                            </div>

                            <div class="flex items-start">
                            <img src='/icon_6.png' className="mt-5"  />
                                <div class="ml-5">
                                    <p class="mt-4 text-base text-gray-600">
                                    <span className="font-semibold">Bukan penawaran</span> melainkan pemberian secara cuma-cuma
                                    kepada nasabah ter-registrasi via Pilihkartu.com yang sudah memiliki kartu kredit.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              </section>
        </>
    )
}
export default ComponentContent1