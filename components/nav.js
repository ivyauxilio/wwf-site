import React,{useState} from "react";
import Link from "next/link";
// import Arrow from 'headerArea-nav-accordion_dt.png'

const links = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://github.com/zeit/next.js", label: "GitHub" },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});



function Nav(){
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  const toggleActive = () => setActive(!active);
  const toggleActive1 = () => setActive1(!active1);
  return(
    <header id="headerArea">
	<div className="headerArea-pc">
		<nav className="headerArea-nav clearfix">
			<div className="headerArea-nav__inline-gray clearfix">
				<ul className="headerArea-nav__inline-gray-list">
					<li><a href="https://www.wwf.or.jp/members/">会員の方(個人)</a></li>
					<li><a href="https://www.wwf.or.jp/corp/">法人の皆さまへ</a></li>
					<li><a href="https://www.wwf.or.jp/info/faq/">よくあるご質問</a></li>
					<li className="searchInput__pc"><dl><dt className="searchInput__pc-btn">
            <img src="https://www.wwf.or.jp/shared/svg/icons_search.svg" alt=""/><span className="searchInput__pc-btn_text">検索する</span>
            </dt><dd className="searchInput__pc-toggle"><form id="cse-search-box" action="https://www.wwf.or.jp/search.html" className="pc-searchform">
							<input type="hidden" name="cx" value="003703045657839985411:3hzf67cfykc" />
							<input type="hidden" name="ie" value="UTF-8" />
							<input type="text" name="q" size="31" className="pc-searchform-input" />
							<button type="submit" name="sa" value="送信" className="pc-searchform-submit" />
							</form>
							<script type="text/javascript" src="http://www.google.com/cse/brand?form=cse-search-box&amp;lang=ja"></script></dd></dl></li>
				</ul>
			</div>
			<div className="headerArea-nav__inline clearfix">
				<p className="headerArea-nav__logo">
					<a href="https://www.wwf.or.jp/">
						<img src="https://www.wwf.or.jp/shared/svg/icons_logo_sd.svg" alt="WWFジャパン"/>
					</a>
				</p>
				<div className="headerArea-pc__drawer-nav clearfix">
					<ul className="headerArea-nav__cv">
						<li><a href="https://www.wwf.or.jp/support/"><span>寄付・入会のお願い</span></a></li>
					</ul>
					<div id="headerAccordionPC" className={`headerArea-nav__inline-accordionBox headerArea-nav__accordionBox ${hovered ? 'hover' : ''}`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
						<dl className="headerArea-nav__inline-accordion headerArea-nav__accordion">
							<dt><a id="headerActivities" className={`${active ? 'active' : ''}`} onMouseEnter={toggleActive} onMouseLeave={toggleActive} href="https://www.wwf.or.jp/activities/">WWFの活動</a></dt>
							<dd><ul>
								<li className="group-nr"><a href="https://www.wwf.or.jp/activities/news_and_reports/">ニュース・活動報告<small >New!</small></a></li>
								<li className="group-ev"><a href="https://www.wwf.or.jp/event/">イベント</a></li>
								<li className="group-pj"><a href="https://www.wwf.or.jp/activities/project/">注目の活動特集</a></li>
								<li className="group-sb"><a href="https://www.wwf.or.jp/staffblog/">スタッフブログ<small>New!</small></a></li>
							</ul></dd>
						</dl>
						<dl className="headerArea-nav__inline-accordion headerArea-nav__accordion">
							<dt><a id="headerAbout" className={`${active1 ? 'active' : ''}`} onMouseEnter={toggleActive1} onMouseLeave={toggleActive1} href="https://www.wwf.or.jp/aboutwwf/" >WWFについて</a></dt>
							<dd><ul>
								<li><a href="https://www.wwf.or.jp/aboutwwf/japan/">WWFジャパンについて</a></li>
								<li><a href="https://www.wwf.or.jp/aboutwwf/earth/">なぜ環境問題に取り組むのか</a></li>
								<li><a href="https://www.wwf.or.jp/aboutwwf/history/">WWFの歴史</a></li>
							</ul></dd>
						</dl>
						<div className="headerArea-nav__inline-gray">
							<ul className="headerArea-nav__inline-gray-list">
								<li><a href="https://www.wwf.or.jp/magazine/">メールマガジン</a></li>
								<li><a href="https://www.wwf.or.jp/support/application/">資料請求</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
	<div className="headerArea-sp">
		<nav className="headerArea-nav clearfix">
			<div className="headerArea-nav__inline clearfix">
				<p className="headerArea-nav__logo"><a href="https://www.wwf.or.jp/"><img src="https://www.wwf.or.jp/shared/svg/icons_logo_sd.svg" alt="WWFジャパン"/></a></p>
				<button type="button" className="drawer-toggle drawer-hamburger">
					<span className="sr-only">toggle navigation</span>
					<span className="drawer-hamburger-icon"></span>
				</button>
				<div className="drawer-nav">
					<div className="drawer-menu">
						<div className="drawer-body">
							<div className="searchInput__sp"><form id="sp-cse-search-box" action="https://www.wwf.or.jp/search.html" className="sp-searchform">
									<input type="hidden" name="cx" value="003703045657839985411:3hzf67cfykc" />
									<input type="hidden" name="ie" value="UTF-8" />
									<input type="text" name="q" size="31" className="sp-searchform-input" />
									<button type="submit" name="sa" value="送信" className="sp-searchform-submit" />
								</form>
								<script type="text/javascript" src="http://www.google.com/cse/brand?form=cse-search-box&amp;lang=ja"></script></div>
							<ul className="headerArea-nav__cv">
								<li><a href="https://www.wwf.or.jp/support/"><span>寄付・入会のお願い</span></a></li>
							</ul>
							<div id="headerAccordionSP" className="headerArea-nav__inline-accordionBox headerArea-nav__accordionBox">
								<dl className="headerArea-nav__inline-accordion headerArea-nav__accordion">
									<dt><a href="https://www.wwf.or.jp/activities/">WWFの活動</a></dt>
									<dd><ul>
										<li><a href="https://www.wwf.or.jp/activities/">WWFの活動</a></li>
										<li className="group-nr"><a href="https://www.wwf.or.jp/activities/news_and_reports/">ニュース・活動報告<small >New!</small></a></li>
										<li className="group-ev"><a href="https://www.wwf.or.jp/event/">イベント<small>New!</small></a></li>
										<li className="group-pj"><a href="https://www.wwf.or.jp/activities/project/">注目の活動特集<small >New!</small></a></li>
										<li className="group-sb"><a href="https://www.wwf.or.jp/staffblog/">スタッフブログ<small >New!</small></a></li>
									</ul></dd>
								</dl>
								<dl className="headerArea-nav__inline-accordion headerArea-nav__accordion">
									<dt><a href="https://www.wwf.or.jp/aboutwwf/">WWFについて</a></dt> 
									<dd><ul>
										<li><a href="https://www.wwf.or.jp/aboutwwf/">WWFについて</a></li>
										<li><a href="https://www.wwf.or.jp/aboutwwf/japan/">WWFジャパンについて</a></li>
										<li><a href="https://www.wwf.or.jp/aboutwwf/earth/">なぜ環境問題に取り組むのか</a></li>
										<li><a href="https://www.wwf.or.jp/aboutwwf/history/">WWFの歴史</a></li>
									</ul></dd>
								</dl>
							</div>
							<ul className="headerArea-nav__inline-another">
								<li><a href="https://www.wwf.or.jp/members/">会員の方(個人)</a></li>
								<li><a href="https://www.wwf.or.jp/corp/">法人の皆さまへ</a></li>
								<li><a href="https://www.wwf.or.jp/magazine/">メールマガジン</a></li>
								<li><a href="https://www.wwf.or.jp/info/faq/">よくあるご質問</a></li>
								<li><a href="https://www.wwf.or.jp/support/application/">資料請求</a></li>
						</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</header>
  )
}

export default Nav;