import React from 'react';
import Tabs from './tabs';

function Main(){
    return(
        <div className="flex flex-col items-center justify-center w-full flex-1 md:px-20 sm:px-2 text-center">
            <div className="keyVisual__nofixed my-5">
                <div className="sectionBody__pc-980">
                    <ul className="tablink tablink__mein">
                        <li><a href="https://www.wwf.or.jp/members/">会員の皆さまへ</a></li>
                    </ul>
                    <h1 className="mainTitle center">募金活動に参加する</h1>
                </div>
            </div>
            <div id="bodyAreaBg" className="clearfix pt-5">
                <div id="mainArea" className="">
                    <section>
                        <p className="readText">WWFでは、多くの方にご参加いただきながら、環境保全活動を進めてゆくため、
                            様々な形態で皆様の募金をお受けしています。
                        </p>
                    </section>
                    <Tabs />
            <div className="text-left md:px-6 sm:px-2">
                <div className="hr01">
                                <hr />
                            </div>
                            <h2 className="titStyle2">【お知らせ】<br/>WWF募金箱（パンダセット）の貸出休止について</h2>
                            <p>大変申し訳ありませんが、WWFでは現在、募金箱などの貸出ツール（パンダセット）の、「新規お申し込み」については、受け付けを休止させていただいております。
                <br/>皆さまからお寄せいただいた大切な募金を、少しでも多く自然保護活動に充てるため、事務局では募金箱などの製作費、送料、維持・管理費などのコストや、募金業務の見直しを行ない、
                よりよい形で皆さまにご参加、ご協力いただける方法を検討しておりますので、ご了承をいただければ幸いです。<br/>なお、今現在すでに募金箱を設置いただいている皆さまからの募金については、
                従来通り、受付を継続させていただいておりますので、引き続きご協力のほどをお願い申し上げます。</p>
                <ul className="link">
							<li className="middleLink"><a href="http://www.wwf.or.jp/join/action/bokin/soukin.html">【すでに募金箱を設置いただいている方へ】集まった募金の入金方法についてはこちら</a></li>
						</ul>
            </div>
                </div>
		    </div>

        </div>
        // <div id="popupCvTab">
        //     <div id="cvTab_overlay" className="popup-overlay"></div>
        //     <dl id="cvTab_content" className="popup supportArea">
        //         <dt id="cvTab_header" className="supportArea__title">あなたの支援が必要です！</dt>
        //         <dd id="cvTab_body">
        //             <div className="ifsupport ifsupport__monthly1000" data-support_content="1">
        //                 <div className="supportArea__image">
        //                     <img src="../../shared/images/2018/supportArea__image_1000_popup.jpg" alt="" className="objectFitImage"/>
        //                     </div>
        //                 <h3 className="supportArea__title">1年間その支援を継続すると&hellip;</h3>
        //                 <p>南米のチリで海の大切さを伝え、地域の人たちにも<br className="spInline">その保全に参加してもらう普及活動を<br className="spInline">1回実施できます。</p>
        //             </div>
        //             <div className="ifsupport ifsupport__monthly5000 checked" data-support_content="2">
        //                 <div className="supportArea__image"><figure>
        //                     <img src="../../shared/images/2018/supportArea__image_5000_popup.jpg" alt="" className="objectFitImage"/>
        //                     <figcaption>&copy; Vladimir Filonov / WWF</figcaption></figure></div>
        //                 <h3 className="supportArea__title">1年間、その支援を継続すると&hellip;</h3>
        //                 <p>ロシアでケガをしたトラを<br className="spInline">野生復帰させるためのリハビリ活動を<br className="spInline">6日間、支えることができます。</p>
        //             </div>
        //             <div className="ifsupport ifsupport__monthly10000" data-support_content="3">
        //                 <div className="supportArea__image"><figure>
        //                     <img src="../../shared/images/2018/supportArea__image_10000_popup.jpg" alt="" className="objectFitImage"/>
        //                         <figcaption>&copy; Ola Jennersten / WWF-Sweden</figcaption></figure></div>
        //                 <h3 className="supportArea__title">1年間、その支援を継続すると&hellip;</h3>
        //                 <p>スマトラの熱帯林で、<br className="spInline">違法伐採や野生動物の密猟を防ぐパトロールを<br className="spInline">14日間、支えることができます。</p>
        //             </div>
        //             <div className="ifsupport ifsupport__once1000" data-support_content="4">
        //                 <div className="supportArea__image"><img src="../../shared/images/2018/supportArea__image_1000_popup.jpg" alt="" className="objectFitImage"/></div>
        //                 <h3 className="supportArea__title">毎月この金額を一年ご寄付頂くと&hellip;</h3>
        //                 <p>南米のチリで海の大切さを伝え、地域の人たちにも<br className="spInline">その保全に参加してもらう普及活動を<br className="spInline">1回実施できます。</p>
        //             </div>
        //             <div className="ifsupport ifsupport__once5000" data-support_content="5">
        //                 <div className="supportArea__image"><figure><img src="../../shared/images/2018/supportArea__image_5000_popup.jpg" alt="" className="objectFitImage"/><figcaption>&copy; Vladimir Filonov / WWF</figcaption></figure></div>
        //                 <h3 className="supportArea__title">毎月この金額を一年ご寄付頂くと&hellip;</h3>
        //                 <p>ロシアでケガをしたトラを<br className="spInline">野生復帰させるためのリハビリ活動を<br className="spInline">6日間、支えることができます。</p>
        //             </div>
        //             <div className="ifsupport ifsupport__once10000" data-support_content="6">
        //                 <div className="supportArea__image"><figure><img src="../../shared/images/2018/supportArea__image_10000_popup.jpg" alt="" className="objectFitImage"/><figcaption>&copy; Ola Jennersten / WWF-Sweden</figcaption></figure></div>
        //                 <h3 className="supportArea__title">毎月この金額を一年ご寄付頂くと&hellip;</h3>
        //                 <p>スマトラの熱帯林で、<br className="spInline">違法伐採や野生動物の密猟を防ぐパトロールを<br className="spInline">14日間、支えることができます。</p>
        //             </div>
        //             <div className="supportArea__choose">
        //                 <ul className="supportArea__tab">
        //                     <li className="current" data-click="tab" data-target_content="1">会員になる<small>（毎月支援）</small></li>
        //                     <li data-click="tab" data-target_content="2">寄付をする<small>（1度だけ支援）</small></li>
        //                 </ul>
        //                 <div className="supportArea__contents">
        //                     <div className="supportArea__content" data-tab_content="1">
        //                         <form action="https://join.wwf.or.jp/membershipform" method="get" target="_blank">
        //                         <input type="hidden" name="button" id="Admission" value="1">
        //                         <ul className="btn">
        //                             <li><input type="radio" name="member" id="popup_monthly1000" className="monthly1000" value="m1000" data-click="support" data-target_content="1"><label for="popup_monthly1000"><span className="num">1,000</span>円<span className="animation"></span></label></li>
        //                             <li><input type="radio" name="member" id="popup_monthly5000" className="monthly5000" value="m5000" checked="checked" data-click="support" data-target_content="2"><label for="popup_monthly5000"><span className="num">5,000</span>円<span className="animation"></span></label></li>
        //                             <li><input type="radio" name="member" id="popup_monthly10000" className="monthly10000" value="m10000" data-click="support" data-target_content="3"><label for="popup_monthly10000"><span className="num">10,000</span>円<span className="animation"></span></label></li>
        //                         </ul>
        //                         <ul className="btn supportArea__submit">
        //                             <li><span className="frame"></span><input type="submit" value="入会する"><span className="animation"></span></li>
        //                         </ul>
        //                         </form>
        //                     </div>
        //                     <div className="supportArea__content" data-tab_content="2" style="display: none;">
        //                         <form action="https://join.wwf.or.jp/onetimeform" method="get" target="_blank">
        //                         <ul className="btn">
        //                             <li><input type="radio" name="gaku" value="1000" id="popup_once1000" className="once1000" data-click="support" data-target_content="4"><label for="popup_once1000"><span className="num">1,000</span>円<span className="animation"></span></label></li>
        //                             <li><input type="radio" name="gaku" value="5000" id="popup_once5000" className="once5000" checked="checked" data-click="support" data-target_content="5"><label for="popup_once5000"><span className="num">5,000</span>円<span className="animation"></span></label></li>
        //                             <li><input type="radio" name="gaku" value="10000" id="popup_once10000" className="once10000" data-click="support" data-target_content="6"><label for="popup_once10000"><span className="num">10,000</span>円<span className="animation"></span></label></li>
        //                         </ul>
        //                         <ul className="btn supportArea__submit">
        //                             <li><span className="frame"></span><input type="submit" value="寄付する"><span className="animation"></span></li>
        //                         </ul>
        //                         </form>
        //                     </div>
        //                 </div>
        //             </div>
        //         </dd>
        //     </dl>
        // </div>
    )
}
export default Main;