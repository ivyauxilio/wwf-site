import React,{useState} from "react";

const Tabs = ({  }) => {
  const [openTab, setOpenTab] = useState(1);
  const [value,setValue] = useState('')
  const color = "green"

  const toggleValue = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    setValue(e.target.value);
  }
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full" >
            <h4 className="text-left">■　募金方法の例 </h4>
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row tabs-content"
            role="tablist"
          >
            <li className={`-mb-px mr-2 last:mr-0 text-center md:text-lg sm:text-xs ${openTab === 1 ? 'bg-blue-600' : 'bg-white'}`}>
              <a
                className={`font-bold uppercase md:px-14 sm:px-5 md:py-3 sm:py-2 rounded block leading-normal ${openTab === 1 ? "text-white hover:text-white visited:text-white": "text-blue-600"}`}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                role="tablist"
              >
                ネットで
              </a>
            </li>
            <li className={`-mb-px mr-2 last:mr-0 text-center ${openTab === 2 ? 'bg-blue-600' : 'bg-white'}`}>
              <a
                className={`text-lg font-bold uppercase md:px-14 sm:px-5 sm:py-2 md:py-3 rounded block leading-normal ${openTab === 2 ? "text-white hover:text-white visited:text-white": "text-blue-600"}`}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                role="tablist"
              >
                 アプリから
              </a>
            </li>
            <li className={`-mb-px mr-2 last:mr-0 text-center ${openTab === 3 ? 'bg-blue-600' : 'bg-white'}`}>
              <a
                className={`text-lg font-bold uppercase md:px-14 sm:px-5 sm:py-2 md:py-3 rounded block leading-normal ${openTab === 3 ? "text-white hover:text-white visited:text-white": "text-blue-600"}`}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                role="tablist"
              >
                街で
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
            <div className="px-4 py-5">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <h4 className="text-left my-3">Paypalで募金</h4>
                    <div className="md:px-6 md:py-5 w-full bg-white flex flex-col md:flex-row">
                        <div className="w-full sm:w-1/3 md:w-2/6 mb-5">
                            {/* <img className="" 
                            src={Avatar} alt="photo"/> */}
                              <div className="flex border py-14 mx-8 bg-blue-500 text-center justify-center text-red-500 ">
                                Logo
                              </div>
                        </div>
                        <div className="w-full sm:w-3/3 md:w-4/6 text-left md:pl-4">
                            <div className="flex flex-row">
                                <div className="w-full md:w-4/6">
                                    <p className="text-red-500 text-sm">
                                                （ダミー）以下より支援の使途と、金額をお選びください。金額ボタンを押すと、Paypalのサイトへ遷移します。
                                    </p>
                                </div>
                                <div className="w-full md:w-2/6">
                                    <img src="/images/payment.png" alt="payment"/>
                                </div>
                            </div>
                            <div className="grid grid-col-2 grid-rows-2 grid-flow-col border-solid border-gray-300 border-t-2 border-b-2">
                                <div className="col-span-2 bg-gray-100 py-5 px-6 border-b-2">種類</div>
                                <div className="col-span-2 bg-gray-100 py-5 px-6 ">金額</div>
                                <div className="col-span-6 col-span-2 py-5 px-6 border-b-2">
                                    {/* <div className="w-full relative inline-block text-left dropdown payment-dd">
                                        <div className="rounded-md shadow-sm">
                                            <button className="inline-flex justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 
                                                transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
                                            type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                                                <span>{value}</span>
                                                <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                        <div className="w-full opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                        <div className="w-full absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                            <div className="px-4 py-3 flex flex-col">         
                                                <a className="text-sm py-3" data-value="100円" onClick={toggleValue} >100円</a>
                                                <a className="text-sm py-3" data-value="500円" onClick={toggleValue}>500円</a>
                                                <a className="text-sm py-3" data-value="1000円" onClick={toggleValue}>1000円</a>
                                                <a className="text-sm py-3" data-value="その他の金額" onClick={toggleValue}>その他の金額</a>
                                            </div>
                                        </div>
                                        </div>
                                    </div> */}
                                      <select className="form-select block w-full mt-1 border rounded" value={value} onChange={toggleValue}>
                                        <option value="">選択してください</option>
                                        <option value="afghanistan2017">アフガニスタン人道危機対応支援</option>
                                        <option value="yemen2015">イエメン人道危機対応支援（旧：イエメン人道危機対応）</option>
                                        <option value="iraq-syria">イラク・シリア人道危機対応支援（旧：イラク・シリア人道危機対応）</option>
                                        <option value="japan-disaster2021">2021年豪雨被災者支援（令和3年8月豪雨）</option>
                                        <option value="tohoku">東日本大震災被災者支援</option>
                                        <option value="south-sudan">南スーダン難民緊急支援</option>
                                        <option value="myanmar2021">ミャンマー人道危機2021</option>
                                        <option value="myanmar-refugees2017">ミャンマー避難民人道支援</option>
                                      </select>
                                </div>
                                <div className="col-span-6 col-span-2 py-5 px-6 ">
                                  <div className="grid grid-cols-4 gap-4 text-center flex ">
                                    <div className={`border py-3 px-2 border-blue-800 text-xs flex flex-row justify-center items-center ${value ? 'bg-white' : 'bg-gray-300'}`}>
                                        <a href="/" className={`text-red-500 hover:text-red-500 visited:text-red-500 ${value ? 'cursor-pointer' : 'pointer-events-none'}`}><span className="font-bold">100</span>円</a>
                                    </div>
                                    <div className={`border py-3 px-2 border-blue-800 text-xs flex flex-row justify-center items-center ${value ? 'bg-white' : 'bg-gray-300'}`}>
                                       <a href="/" className={`text-red-500 hover:text-red-500 visited:text-red-500 ${value ? 'cursor-pointer' : 'pointer-events-none'}`}><span className="font-bold">500</span>円</a>
                                    </div>
                                    <div className={`border py-3 px-2 border-blue-800 text-xs flex flex-row justify-center items-center ${value ? 'bg-white' : 'bg-gray-300'}`}>
                                    <a href="/" className={`text-red-500 hover:text-red-500 visited:text-red-500 ${value ? 'cursor-pointer' : 'pointer-events-none'}`}><span className="font-bold">1000</span>円</a>
                                    </div>
                                    <div className={`border py-3 px-2 border-blue-800 text-xs flex flex-row justify-center items-center ${value ? 'bg-white' : 'bg-gray-300'}`}>
                                    <a href="/" className={`text-red-500 hover:text-red-500 visited:text-red-500 ${value ? 'cursor-pointer' : 'pointer-events-none'}`}><span className="font-bold">その他の金額</span></a>
                                    </div>
                                  </div>
                                </div>
                                
                            </div>
                            <p className="text-red-500 pt-10 mb-3">※プルダウン文言ダミー：原則一般、＋随時緊急支援）</p>
                            <p className=""><mark>生物多様性の回復と、脱炭素社会実現をめざすWWFの活動全般を支援する
トルコ・ギリシャ森林火災地域の回復保全を支援する</mark>
</p>
                        </div>
                    </div>

                    <h4 className="text-left my-3">Yahoo! インターネット募金</h4>
                    <div className="px-6 py-5 w-full bg-white flex flex-col md:flex-row">
                        <div className="w-full sm:w-1/3 md:w-2/6 mb-5">
                            <div className="flex border py-14 mx-8 bg-blue-500 text-center justify-center text-red-500 ">
                                Logo
                              </div>
                        </div>
                        <div className="w-full sm:w-3/3 md:w-4/6 text-left md:pl-4">
                            <p className="mb-3">Yahoo!ジャパンにご協力いただき、ネット募金のポータルサイトでWWFジャパンの
活動紹介と募金の呼びかけを行っています。</p>
                            <p>こちらから▶リンク</p>
                        </div>
                    </div>

                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    
                      <h4 className="text-left my-3">メルペイで募金</h4>
                      <div className="px-6 py-5 w-full bg-white flex flex-col md:flex-row">
                        <div className="w-full sm:w-1/3 md:w-2/6 mb-5">
                            <div className="flex border py-14 mx-8 bg-blue-500 text-center justify-center text-red-500 ">
                                    サムネ画像
                              </div>
                        </div>
                        <div className="w-full sm:w-3/3 md:w-4/6 text-left md:pl-4">
                          <div className="flex flex-col">
                              <p className="mb-3">フリマアプリ「mercari」の売り上げもメルペイを経由して募金できます。</p>
                              <p className="mb-3">詳細方法はこちら▶</p>
                              <p className="text-red-500">※募金導線のムービー埋め込みURLあります。埋め込みも可能ですか？</p>
                           
                          </div>
                        </div>
                    </div>
                    <h4 className="text-left my-3">Paypayで募金（8月時点では公開しない）</h4>
                      <div className="px-6 py-5 w-full bg-white flex flex-col md:flex-row">
                          <div className="w-full sm:w-1/3 md:w-2/6 mb-5">
                              <div className="flex border py-14 mx-8 bg-blue-500 text-center justify-center text-red-500 ">
                              サムネ画像
                              </div>
                          </div>
                          <div className="w-full sm:w-3/3 md:w-4/6 text-left md:pl-4">
                              <p className="mb-3">Dummy dummy dummy</p>
                          </div>
                      </div> 
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <h4 className="text-left my-3">ファミポート募金</h4>
                    <div className="md:px-6 sm:px-2 py-5 w-full bg-white flex flex-col md:flex-row">
                        <div className="md:w-2/6 sm:w-full justify-center mb-5">
                            <img className="md:w-9/12 sm:w-6/12" src="/images/Famiport.jpeg" alt="payment"/>
                        </div>
                        <div className="md:w-4/6 sm:w-full text-left">
                              <p>全国のファミリーマートで、マルチメディア端末「Famiポート」を利用した「Famiポート募金」を実施しています。</p>
                              <p>募金」ボタンにタッチすると、WWFジャパンをはじめ、支援できる13の団体が表示され、好きな団体を選ぶことができます。
                                それぞれの団体のメニューから募金額を指定してください。</p>
                                <p>WWFジャパンへの募金は、「1,000円」、「2,000円」、「3,000円」、「5,000円」、「10,000円」の5つからお選びいただけます。</p>
                                <p>金額を選ぶと、Famiポートからレシートが出力されますので、それをレジにお持ちいただき、金額をお支払ください。</p>
                                <p className="">詳しくはこちら（ファミリーマートのサイトへ遷移</p>
                                <a className="text-based" href="https://www.family.co.jp/services/application/donation.html">
                                  <mark> ▶https://www.family.co.jp/services/application/donation.html</mark></a>
                        </div>
                    </div>
                    <h4 className="text-left my-3">設置募金箱からの募金</h4>
                    <div className="md:px-6 sm:px-2 py-5 w-full bg-white flex flex-col md:flex-row">
                        <div className="md:w-2/6 sm:w-full mb-5">
                           <div className="flex border py-14 mx-8 bg-blue-500 text-center justify-center text-red-500 ">
                           サムネ画像
                            </div>
                        </div>
                        <div className="md:w-4/6 sm:w-full text-left">
                            <div>
                              <p>現在、WWFでは動物園や動物病院、チェーン店など、各種施設や多数の店舗に募金箱を設置しております。
目に<span className="text-red-500">すされ</span>る機会がありましたら、ぜひご協力をお願いいたします。</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <div className="px-6 py-5 w-full bg-white flex flex-col md:flex-row">
                        <div className="w-full sm:w-1/3 md:w-2/6">
                            <h1>Logo3</h1>
                        </div>
                        <div className="w-full sm:w-3/3 md:w-4/6 text-left md:pl-4">
                                <p>
                            Completely synergize resource taxing relationships via
                            premier niche markets. Professionally cultivate one-to-one
                            customer service with robust ideas.
                            <br />
                            <br />
                            Dynamically innovate resource-leveling customer service for
                            state of the art customer service.
                        </p>
                        </div>
                    </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
       <Tabs color="pink" />
    </>
  );
}