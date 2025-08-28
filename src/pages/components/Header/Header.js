import Image from "next/image";
import styles from "./Header.module.css"
import Link from "next/link";

function Header() {

    return (
        <header>
            {/* ヘッダー */}
            <section className={styles.header}>
                <div className={styles.header_wrapper}>
                    <div className={styles.header_inner}>
                        <div className={styles.header_group}>
                            <Link href="/" className={styles.header_logo}>
                                <Image
                                    src="/images/navbar/ansel-logo.png"
                                    alt="アンセルテクノロジーズロゴ"
                                    width={490}
                                    height={64}
                                />
                            </Link>
                            <div className={styles.header_nav}>
                                <nav className={styles.nav}>
                                    <ul className={styles.nav_list}>
                                        <li className={styles.nav_item}>
                                            <Link href="/company">
                                                <p className={styles.ja}>会社概要</p>
                                                <p className={styles.en}>COMPANY</p>
                                            </Link>
                                        </li>
                                        <li className={styles.nav_item}>
                                            <button>
                                                <p className={styles.ja}>事業内容</p>
                                                <p className={styles.en}>SERVICE</p>
                                            </button>
                                            <ul className={styles.dropDown_list}>
                                                <li className={styles.dropDown_item}><Link href="/service">事業内容トップ</Link></li>
                                                <li className={styles.dropDown_item}><Link href="/academy">エンジニアスクール</Link></li>
                                                <li className={styles.dropDown_item}><Link href="/service_counseling">カウンセリング申込</Link></li>
                                            </ul>
                                        </li>
                                        <li className={styles.nav_item}>
                                            <button>
                                                <p className={styles.ja}>採用情報</p>
                                                <p className={styles.en}>RECRUIT</p>
                                            </button>
                                            <ul className={styles.dropDown_list}>
                                                <li className={styles.dropDown_item}><Link href="/recruit">採用情報トップ</Link></li>
                                                <li className={styles.dropDown_item}><Link href="/recruit_experienced">IT経験者採用</Link></li>
                                                <li className={styles.dropDown_item}><Link href="/recruit_school">スクール生採用</Link></li>
                                            </ul>
                                        </li>
                                        <li className={styles.nav_item}>
                                            <button>
                                                <p className={styles.ja}>お知らせ</p>
                                                <p className={styles.en}>NEWS</p>
                                            </button>
                                            <ul className={styles.dropDown_list}>
                                                <li className={styles.dropDown_item}><Link href="/news">お知らせ</Link></li>
                                                <li className={styles.dropDown_item}><Link href="/blog">ブログ</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                                <Link href="/contact" className={styles.header_contact_btn}>
                                    <Image
                                        src="/images/navbar/mail-icon.png"
                                        alt="お問い合わせアイコン"
                                        width={20}
                                        height={16}
                                        />
                                    <p>CONTACT</p>
                                </Link>
                                <button className={styles.hamburger} id="js-hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <p className={styles.menu_open}>menu</p>
                                    <p className={styles.menu_close}>close</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ナビゲーション */}
            <section className={styles.navigation}>
                <div className={styles.navigation_container} id="js-nav">
                    <nav className={styles.nav_sp}>
                        <ul className={styles.nav_list_sp}>
                            <li className={styles.nav_item_sp}>
                                <Link href="/">
                                    <p className={styles.ja}>ホーム</p>
                                    <p className={styles.en}>HOME</p>
                                </Link>
                            </li>
                            <li className={styles.nav_item_sp}>
                                <Link href="/company">
                                    <p className={styles.ja}>会社情報</p>
                                    <p className={styles.en}>COMPANY</p>
                                </Link>
                            </li>
                            <li className={styles.nav_item_sp}>
                                <button className={styles.nav_item}>
                                    <p className={styles.ja}>事業内容</p>
                                    <p className={styles.en}>SERVICE</p>
                                </button>
                                <ul className={styles.dropDown_list_sp}>
                                    <li className={styles.dropDown_item_sp}><Link href="/service">- 事業内容トップ</Link></li>
                                    <li className={styles.dropDown_item_sp}><Link href="/service_education">- エンジニアスクール</Link></li>
                                    <li className={styles.dropDown_item_sp}><Link href="/service_counseling">- カウンセリング申込</Link></li>
                                </ul>
                            </li>
                            <li className={styles.nav_item_sp}>
                                <button className={styles.nav_item}>
                                    <p className={styles.ja}>採用情報</p>
                                    <p className={styles.en}>RECRUIT</p>
                                </button>
                                <ul className={styles.dropDown_list_sp}>
                                    <li className={styles.dropDown_item_sp}><Link href="/recruit">- 採用情報トップ</Link></li>
                                    <li className={styles.dropDown_item_sp}><Link href="/recruit_experienced">- IT経験者</Link></li>
                                    <li className={styles.dropDown_item_sp}><Link href="/recruit_school">- スクール生採用</Link></li>
                                </ul>
                            </li>
                            <li className={styles.nav_item_sp}>
                                <button className={styles.nav_item}>
                                    <p className={styles.ja}>お知らせ</p>
                                    <p className={styles.en}>NEWS</p>
                                </button>
                                <ul className={styles.dropDown_list_sp}>
                                    <li className={styles.dropDown_item_sp}><Link href="/news">- お知らせ</Link></li>
                                    <li className={styles.dropDown_item_sp}><Link href="/blog">- ブログ</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <Link href="/contact" className={styles.header_contact_btn_sp}>
                        <Image
                            src="/images/navbar/mail-icon.png"
                            alt="お問い合わせアイコン"
                            width={20}
                            height={16}
                        />
                        <p>CONTACT</p>
                    </Link>
                </div>
            </section>
        </header>
    );
};

export default Header;