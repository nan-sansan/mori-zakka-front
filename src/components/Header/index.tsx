import Image from "next/image";

export default function Header() {
  return (
    <div>
      <header>
        <nav className="main-nav">
          <div className="nav-burger">
            <a href="#" id="mob-menu-trigger">
              ≡
            </a>
            <div id="mob-menu" className="nav-dropdown">
              <a href="allNEWS.html">全部消息</a>
              <a href="about.html">關於我們</a>
              <a href="allItems.html">所有商品</a>
              <a href="FAQ.html">FAQ</a>
            </div>
          </div>
          <div className="nav-logo">
            <a href="index.html">
              <Image
                src="/assest/logo.png"
                alt="LOGO"
                width={100}
                height={50}
              />
            </a>
          </div>
          <div className="push-right"></div>
          <ul>
            <li>
              <a href="allNEWS.html">全部消息</a>
            </li>
            <li>
              <a href="about.html">關於我們</a>
            </li>
            <li>
              <a href="allItems.html">所有商品</a>
            </li>
            <li>
              <a href="FAQ.html">FAQ</a>
            </li>
          </ul>
          <div className="member-area">
            <div className="nav-cart">
              <a href="#">
                <Image
                  src="/assest/cart.png"
                  alt="購物車"
                  width={24}
                  height={24}
                />
              </a>
            </div>
            <div className="nav-user">
              <a href="#">
                <Image
                  src="/assest/member.png"
                  alt="會員"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
