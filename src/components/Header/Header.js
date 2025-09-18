import Image from "next/image";
import styles from "./Header.module.css"
import Link from "next/link";
import { useState } from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false); //ハンバーガー開閉
    const[OpenDropdown, setOpenDropdown] = useState(null); //どのドロップダウンが開いているか

    //ハンバーガー切り替え
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // メニューリンククリックで閉じる
    const handleLinkClick = () => {
        setIsOpen(false);
        setOpenDropdown(null);
    };

    // ドロップダウン切り替え
    const toggleDropdown = (index) => {
        if (OpenDropdown === index) {
            setOpenDropdown(null); // 同じのをクリックしたら閉じる
        } else {
            setOpenDropdown(index); // 他をクリックしたら切り替え
        }
    };

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
                                <Link href="/contact_form" className={styles.header_contact_btn}>
                                    <Image
                                        src="/images/navbar/mail-icon.png"
                                        alt="お問い合わせアイコン"
                                        width={20}
                                        height={16}
                                        />
                                    <p>CONTACT</p>
                                </Link>
                                <button
                                    className={` ${styles.hamburger} ${isOpen ? styles.active :""}`}
                                    id="js-hamburger"
                                    onClick={toggleMenu}
                                >
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
                {/* <div className={styles.navigation_container} id="js-nav"> */}
                <div className={`${styles.navigation_container} ${isOpen ? styles.active : ""}`} id="js-nav">
                    <nav className={styles.nav_sp}>
                        <ul className={styles.nav_list_sp}>
                            <li className={styles.nav_item_sp}>
                                <Link href="/" onClick={handleLinkClick}>
                                    <p className={styles.ja}>ホーム</p>
                                    <p className={styles.en}>HOME</p>
                                </Link>
                            </li>
                            <li className={styles.nav_item_sp}>
                                <Link href="/company" onClick={handleLinkClick}>
                                    <p className={styles.ja}>会社情報</p>
                                    <p className={styles.en}>COMPANY</p>
                                </Link>
                            </li>
                            <li className={styles.nav_item_sp}>
                                <button className={styles.nav_item} onClick={() => toggleDropdown(1)}>
                                    <p className={styles.ja}>事業内容</p>
                                    <p className={styles.en}>SERVICE</p>
                                </button>
                                <ul className={` ${styles.dropDown_list_sp} ${OpenDropdown === 1 ? styles.active : ""}`}>
                                    <li className={styles.dropDown_item_sp}><Link href="/service" onClick={handleLinkClick}>- 事業内容トップ</Link></li>
                                    <li className={styles.dropDown_item_sp}><Link href="/academy" onClick={handleLinkClick}>- エンジニアスクール</Link></li>
                                    <li className={styles.dropDown_item_sp}><Link href="/service_counseling" onClick={handleLinkClick}>- カウンセリング申込</Link></li>
                                </ul>
                            </li>
                            <li className={styles.nav_item_sp}>
                                <button className={styles.nav_item} onClick={() => toggleDropdown(2)}>
                                    <p className={styles.ja}>採用情報</p>
                                    <p className={styles.en}>RECRUIT</p>
                                </button>
                                <ul className={` ${styles.dropDown_list_sp} ${OpenDropdown === 2 ? styles.active : ""}`}>
                                    <li className={styles.dropDown_item_sp}><Link href="/recruit" onClick={handleLinkClick}>- 採用情報トップ</Link></li>
                                    <li className={styles.dropDown_item_sp}><Link href="/recruit_experienced" onClick={handleLinkClick}>- IT経験者</Link></li>
                                    <li className={styles.dropDown_item_sp}><Link href="/recruit_school" onClick={handleLinkClick}>- スクール生採用</Link></li>
                                </ul>
                            </li>
                            <li className={styles.nav_item_sp}>
                                <button className={styles.nav_item} onClick={() => toggleDropdown(3)}>
                                    <p className={styles.ja}>お知らせ</p>
                                    <p className={styles.en}>NEWS</p>
                                </button>
                                <ul className={` ${styles.dropDown_list_sp} ${OpenDropdown === 3 ? styles.active : ""}`}>
                                    <li className={styles.dropDown_item_sp}><Link href="/news" onClick={handleLinkClick}>- お知らせ</Link></li>
                                    <li className={styles.dropDown_item_sp}><Link href="/blog" onClick={handleLinkClick}>- ブログ</Link></li>
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