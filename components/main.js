import React from 'react';
import Tabs from './tabs';

function Main(){
    return(
        <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            <div class="keyVisual__nofixed my-5">
                <div class="sectionBody__pc-980">
                    <ul class="tablink tablink__mein">
                        <li><a href="https://www.wwf.or.jp/members/">会員の皆さまへ</a></li>
                    </ul>
                    <h1 class="mainTitle center">募金活動に参加する</h1>
                </div>
            </div>
            <div id="bodyAreaBg" class="clearfix pt-5">
                <div id="mainArea" className="">
                    <section>
                        <p class="readText">WWFでは、多くの方にご参加いただきながら、環境保全活動を進めてゆくため、
                            様々な形態で皆様の募金をお受けしています。
                        </p>
                    </section>
                </div>
		    </div>
            <Tabs />
        </div>
        // <div id="popupCvTab">
        //     <div id="cvTab_overlay" class="popup-overlay"></div>
        //     <dl id="cvTab_content" class="popup supportArea">
        //         <dt id="cvTab_header" class="supportArea__title">あなたの支援が必要です！</dt>
        //         <dd id="cvTab_body">
        //             <div class="ifsupport ifsupport__monthly1000" data-support_content="1">
        //                 <div class="supportArea__image">
        //                     <img src="../../shared/images/2018/supportArea__image_1000_popup.jpg" alt="" class="objectFitImage"/>
        //                     </div>
        //                 <h3 class="supportArea__title">1年間その支援を継続すると&hellip;</h3>
        //                 <p>南米のチリで海の大切さを伝え、地域の人たちにも<br class="spInline">その保全に参加してもらう普及活動を<br class="spInline">1回実施できます。</p>
        //             </div>
        //             <div class="ifsupport ifsupport__monthly5000 checked" data-support_content="2">
        //                 <div class="supportArea__image"><figure>
        //                     <img src="../../shared/images/2018/supportArea__image_5000_popup.jpg" alt="" class="objectFitImage"/>
        //                     <figcaption>&copy; Vladimir Filonov / WWF</figcaption></figure></div>
        //                 <h3 class="supportArea__title">1年間、その支援を継続すると&hellip;</h3>
        //                 <p>ロシアでケガをしたトラを<br class="spInline">野生復帰させるためのリハビリ活動を<br class="spInline">6日間、支えることができます。</p>
        //             </div>
        //             <div class="ifsupport ifsupport__monthly10000" data-support_content="3">
        //                 <div class="supportArea__image"><figure>
        //                     <img src="../../shared/images/2018/supportArea__image_10000_popup.jpg" alt="" class="objectFitImage"/>
        //                         <figcaption>&copy; Ola Jennersten / WWF-Sweden</figcaption></figure></div>
        //                 <h3 class="supportArea__title">1年間、その支援を継続すると&hellip;</h3>
        //                 <p>スマトラの熱帯林で、<br class="spInline">違法伐採や野生動物の密猟を防ぐパトロールを<br class="spInline">14日間、支えることができます。</p>
        //             </div>
        //             <div class="ifsupport ifsupport__once1000" data-support_content="4">
        //                 <div class="supportArea__image"><img src="../../shared/images/2018/supportArea__image_1000_popup.jpg" alt="" class="objectFitImage"/></div>
        //                 <h3 class="supportArea__title">毎月この金額を一年ご寄付頂くと&hellip;</h3>
        //                 <p>南米のチリで海の大切さを伝え、地域の人たちにも<br class="spInline">その保全に参加してもらう普及活動を<br class="spInline">1回実施できます。</p>
        //             </div>
        //             <div class="ifsupport ifsupport__once5000" data-support_content="5">
        //                 <div class="supportArea__image"><figure><img src="../../shared/images/2018/supportArea__image_5000_popup.jpg" alt="" class="objectFitImage"/><figcaption>&copy; Vladimir Filonov / WWF</figcaption></figure></div>
        //                 <h3 class="supportArea__title">毎月この金額を一年ご寄付頂くと&hellip;</h3>
        //                 <p>ロシアでケガをしたトラを<br class="spInline">野生復帰させるためのリハビリ活動を<br class="spInline">6日間、支えることができます。</p>
        //             </div>
        //             <div class="ifsupport ifsupport__once10000" data-support_content="6">
        //                 <div class="supportArea__image"><figure><img src="../../shared/images/2018/supportArea__image_10000_popup.jpg" alt="" class="objectFitImage"/><figcaption>&copy; Ola Jennersten / WWF-Sweden</figcaption></figure></div>
        //                 <h3 class="supportArea__title">毎月この金額を一年ご寄付頂くと&hellip;</h3>
        //                 <p>スマトラの熱帯林で、<br class="spInline">違法伐採や野生動物の密猟を防ぐパトロールを<br class="spInline">14日間、支えることができます。</p>
        //             </div>
        //             <div class="supportArea__choose">
        //                 <ul class="supportArea__tab">
        //                     <li class="current" data-click="tab" data-target_content="1">会員になる<small>（毎月支援）</small></li>
        //                     <li data-click="tab" data-target_content="2">寄付をする<small>（1度だけ支援）</small></li>
        //                 </ul>
        //                 <div class="supportArea__contents">
        //                     <div class="supportArea__content" data-tab_content="1">
        //                         <form action="https://join.wwf.or.jp/membershipform" method="get" target="_blank">
        //                         <input type="hidden" name="button" id="Admission" value="1">
        //                         <ul class="btn">
        //                             <li><input type="radio" name="member" id="popup_monthly1000" class="monthly1000" value="m1000" data-click="support" data-target_content="1"><label for="popup_monthly1000"><span class="num">1,000</span>円<span class="animation"></span></label></li>
        //                             <li><input type="radio" name="member" id="popup_monthly5000" class="monthly5000" value="m5000" checked="checked" data-click="support" data-target_content="2"><label for="popup_monthly5000"><span class="num">5,000</span>円<span class="animation"></span></label></li>
        //                             <li><input type="radio" name="member" id="popup_monthly10000" class="monthly10000" value="m10000" data-click="support" data-target_content="3"><label for="popup_monthly10000"><span class="num">10,000</span>円<span class="animation"></span></label></li>
        //                         </ul>
        //                         <ul class="btn supportArea__submit">
        //                             <li><span class="frame"></span><input type="submit" value="入会する"><span class="animation"></span></li>
        //                         </ul>
        //                         </form>
        //                     </div>
        //                     <div class="supportArea__content" data-tab_content="2" style="display: none;">
        //                         <form action="https://join.wwf.or.jp/onetimeform" method="get" target="_blank">
        //                         <ul class="btn">
        //                             <li><input type="radio" name="gaku" value="1000" id="popup_once1000" class="once1000" data-click="support" data-target_content="4"><label for="popup_once1000"><span class="num">1,000</span>円<span class="animation"></span></label></li>
        //                             <li><input type="radio" name="gaku" value="5000" id="popup_once5000" class="once5000" checked="checked" data-click="support" data-target_content="5"><label for="popup_once5000"><span class="num">5,000</span>円<span class="animation"></span></label></li>
        //                             <li><input type="radio" name="gaku" value="10000" id="popup_once10000" class="once10000" data-click="support" data-target_content="6"><label for="popup_once10000"><span class="num">10,000</span>円<span class="animation"></span></label></li>
        //                         </ul>
        //                         <ul class="btn supportArea__submit">
        //                             <li><span class="frame"></span><input type="submit" value="寄付する"><span class="animation"></span></li>
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