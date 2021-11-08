import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
            <h3 className="text-left">■　募金方法の例 </h3>
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row tabs-content"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-lg font-bold uppercase px-20 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                ネットで
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-lg font-bold uppercase px-20 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 アプリから
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 text-center">
              <a
                className={
                  "text-lg font-bold uppercase px-20 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                街で
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                
                    <div className="px-6 py-5 border w-full bg-white rounded-lg flex flex-col md:flex-row">
                        <div className="w-full sm:w-1/3 md:w-2/6">
                            {/* <img className="" 
                            src={Avatar} alt="photo"/> */}
                            <h1>Logo</h1>
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
                            <div class="grid grid-col-2 grid-rows-2 grid-flow-col border-solid border-gray-300 border-t-2 border-b-2">
                                <div class="col-span-2 bg-gray-100 py-5 px-6 border-b-2">NONE</div>
                                <div class="col-span-2 bg-gray-100 py-5 px-6 ">NONE</div>
                                <div class="col-span-6 col-span-2 py-5 px-6 border-b-2">
                                    <div class="w-full relative inline-block text-left dropdown payment-dd">
                                        <div class="rounded-md shadow-sm">
                                            <button class="inline-flex justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 
                                                transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
                                            type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                                                <span>Options</span>
                                                <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </button>
                                        </div>
                                        <div class="w-full opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                        <div class="w-full absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                            <div class="px-4 py-3">         
                                                <p class="text-sm leading-5">Signed in as</p>
                                                <p class="text-sm font-medium leading-5 text-gray-900 truncate">tom@example.com</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-span-6 col-span-2 py-5 px-6 ">4</div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="px-6 py-5 border w-full bg-white rounded-lg flex flex-col md:flex-row">
                        <div className="w-full sm:w-1/3 md:w-2/6">
                            {/* <img className="" 
                            src={Avatar} alt="photo"/> */}
                            <h1>Logo2</h1>
                        </div>
                        <div className="w-full sm:w-3/3 md:w-4/6 text-left md:pl-4">
                            <p className="">
                                （ダミー）以下より支援の使途と、金額をお選びください。金額ボタンを押すと、Paypalのサイトへ遷移します。
                        </p>
                        </div>
                    </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="px-6 py-5 border w-full bg-white rounded-lg flex flex-col md:flex-row">
                        <div className="w-full sm:w-1/3 md:w-2/6">
                            {/* <img className="" 
                            src={Avatar} alt="photo"/> */}
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
                </div>
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
       <Tabs color="pink" />;
    </>
  );
}