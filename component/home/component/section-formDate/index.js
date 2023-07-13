
const DateComponent = () => {
    return (
        <>
             <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
                <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">             
                <form>
                    <div class="space-y-12">
                        <div class="border-b border-gray-900/10 pb-12">
                        <h1 class="mt-1 text-4xl leading-6 text-black font-medium text-center">Dapatkan perlindungan <span class="text-[#264785] font-extrabold">AXA CARE Protection</span> Sekarang</h1>
                        <h2 class="mt-5 text-[16px] font-semibold leading-7 text-gray-900 text-center">Cukup isi data diri anda pada form dibawah ini</h2>

                        <div class="mt-10 ">
                            <div class="flex flex-row">
                                <div class="w-full mt-3">
                                <label for="nama" class=" text-sm font-medium leading-6 text-gray-900">Nama Lengkap</label>
                                </div>
                                <div class="mt-2 w-full">
                                    <input id="nama" name="nama" type="nama" autocomplete="nama" class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#26468f] sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                             <div className="flex flex-row">
                                <div class="w-full mt-3">
                                <label for="tanggal" class=" text-sm font-medium leading-6 text-gray-900">Tanggal Lahir</label>
                                </div>
                                <div class="relative w-full">
                                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <img src="/icon_7.png" className="h-6 w-6 mt-1"/>
                                  </div>
                                  <input datepicker datepicker-orientation="bottom right" type="text" class="pl-10 mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#26468f] sm:text-sm sm:leading-6" placeholder="Select date" />
                                </div>
                            </div>

                            <div class="flex flex-row">
                                <div class="w-full mt-3">
                                <label for="nomor" class=" text-sm font-medium leading-6 text-gray-900">Nomor Ponsel</label>
                                </div>
                                <div class="mt-2 w-full">
                                    <input id="nomor" name="nomor" type="nomor" autocomplete="nomor" class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#26468f] sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            
                            <div className="flex flex-row">
                                <div class="w-full mt-3">
                                <label for="email" class=" text-sm font-medium leading-6 text-gray-900">Email address</label>
                                </div>
                                <div class="mt-2 w-full">
                                    <input id="email" name="email" type="email" autocomplete="email" class="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#26468f] sm:text-sm sm:leading-6"/>
                                </div>
                            </div>

                            <div className="flex flex-row">
                                <div class="w-full mt-3">
                                <label for="email" class=" text-sm font-medium leading-6 text-gray-900">Memiliki Kartu Kredit</label>
                                </div>
                                
                                <div class="mt-2 w-full grid grid-cols-4 gap-4">
                                    <div class="relative flex gap-x-3 ml-3">
                                      <div class="flex h-6 items-center">
                                          <input id="visa" name="visa" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-[#26468f] focus:ring-[#26468f]"/>
                                      </div>
                                      <div class="text-sm leading-6">
                                          <label for="visa" class="font-medium text-gray-900">VISA</label>
                                      </div>
                                    </div>

                                    <div class="relative flex gap-x-3 ml-3">
                                      <div class="flex h-6 items-center">
                                          <input id="mastercard" name="mastercard" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-[#26468f] focus:ring-[#26468f]"/>
                                      </div>
                                      <div class="text-sm leading-6">
                                          <label for="mastercard" class="font-medium text-gray-900">MASTERCARD</label>
                                      </div>
                                    </div>

                                    <div class="relative flex gap-x-3 ml-3">
                                      <div class="flex h-6 items-center">
                                          <input id="bca" name="bca" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-[#26468f] focus:ring-[#26468f]"/>
                                      </div>
                                      <div class="text-sm leading-6">
                                          <label for="bca" class="font-medium text-gray-900">BCA CARD</label>
                                      </div>
                                    </div>

                                    <div class="relative flex gap-x-3 ml-3">
                                      <div class="flex h-6 items-center">
                                          <input id="all" name="all" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-[#26468f] focus:ring-[#26468f]"/>
                                      </div>
                                      <div class="text-sm leading-6">
                                          <label for="all" class="font-medium text-gray-900">Lainnya</label>
                                      </div>
                                    </div>

                                </div>
                            </div>

                            <p class="underline decoration-[#26468f] italic font-bold mb-3 mt-10 text-[#26468f]">Syarat & Ketentuan Aplikasi</p>
                            <div class="relative flex gap-x-3">
                                <div class="flex h-6 items-center">
                                    <input id="syarat" name="syarat" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-[#26468f] focus:ring-[#26468f]"/>
                                </div>
                                <div class="text-sm leading-6 ">
                                      <label for="offers" class="font-medium text-gray-900">
                                      Saya mengetahui syarat dan ketentuan diatas serta bersedia dihubungi oleh PT.AXA Life Indonesia untuk mendapatkan penjelasan Tentang
                                      produk dan Informasi lainnya.
                                      </label>
                                </div>
                              </div>
                              <p class="text-gray-700 text-[11px] mt-1">* Promo ini hanya berlaku bagi pemenang atau pemilik kartu kredit 
                                Syarat dan ketentuan lain diatur sebagaimana tertulis pada bagian syarat dan ketentuan.
                                PT.AXA Life Indonesia terdaftar & diawasi oleh Otoritas Jasa Keuangan (OJK)
                              </p>
                          </div>
                        </div>
                    </div>

                    <div class="mt-6 flex items-center justify-end gap-x-6">
                        <button type="submit" class="pl-10 pr-10 rounded-md bg-[#26468f] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Kirim</button>
                    </div>
                </form>
               
                </div>
            </section>
        </>
    )
}

export default DateComponent