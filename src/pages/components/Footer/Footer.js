import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.wrapper}>
                    <div className={styles.footer_inner}>
                        <a href="/recruit_entry" className={styles.entry_btn}>
                            <p>採用エントリー</p>
                            <Image
                                src="/images/arrow-icon/arrow-entry.svg"
                                alt=""
                                width={12}
                                height={24}
                            />
                        </a>
                        <div className={styles.footer_container}>
                            <div className={styles.footer_content}>
                                <h2>株式会社ANSEL TECHNOLOGIES</h2>
                                <div className={styles.footer_company}>
                                    <p>
                                        東京本社<br />
                                        〒101-0051 東京都千代田区神田神保町2丁目38-11岩田ビル1F
                                    </p>
                                    <p>
                                        大阪支社<br />
                                        〒556-0011 大阪府大阪市浪速区難波中2丁目10-70 パークスタワー19F
                                    </p>
                                    <p>
                                        札幌支社<br />
                                        〒060-0004 北海道札幌市中央区北4条西4丁目1-7 MMS札幌駅前ビル1階
                                    </p>
                                    <p>
                                        福岡支社<br />
                                        〒810-0001 福岡県福岡市中央区天神1-4-1 西日本新聞会館16階 (天神スカイホール内)                                    </p>
                                </div>
                                <div className={styles.footer_sns}>
                                    <Link href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                        <Image
                                            src="/images/sns-logo/instagram_logo.png"
                                            alt="Instagram"
                                            width={61}
                                            height={60}
                                        />
                                        <p>Instagram</p>
                                    </Link>
                                    <Link href="https://sg.wantedly.com/" target="_blank" rel="noreferrer">
                                        <Image
                                            src="/images/sns-logo/wantedly_logo.png"
                                            alt="Wantedly"
                                            width={56}
                                            height={52}
                                        />
                                        <p>Wantedly</p>
                                    </Link>
                                </div>
                            </div>
                            <nav className={styles.footer_nav}>
                                <ul className={styles.footer_nav_list_left}>
                                    <li className={styles.footer_nav_item}>
                                        <Link href="/">ホーム</Link>
                                    </li>
                                    <li className={styles.footer_nav_item}>
                                        <Link href="/company">会社概要</Link>
                                    </li>
                                    <li className={styles.footer_nav_item}>
                                        <button>事業内容</button>
                                        <ul className={styles.footer_dropDown_list}>
                                            <li className={styles.footer_dropDown_item}><Link href="/academy">- エンジニアスクール</Link></li>
                                            <li className={styles.footer_dropDown_item}><Link href="/service_counseling">- カウンセリング申込</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className={styles.footer_nav_list_right}>
                                    <li className={styles.footer_nav_item}>
                                        <button>採用情報</button>
                                        <ul className={styles.footer_dropDown_list}>
                                            <li className={styles.footer_dropDown_item}><Link href="/recruit">- 採用情報トップ</Link></li>
                                            <li className={styles.footer_dropDown_item}><Link href="/recruit_education">- IT経験者</Link></li>
                                            <li className={styles.footer_dropDown_item}><Link href="/recruit_school">- スクール生採用</Link></li>
                                        </ul>
                                    </li>
                                    <li className={styles.footer_nav_item}>
                                        <button>お知らせ</button>
                                        <ul className={styles.footer_dropDown_list}>
                                            <li className={styles.footer_dropDown_item}><a href="/news">- お知らせ</a></li>
                                            <li className={styles.footer_dropDown_item}><a href="/blog">- ブログ</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <p className={styles.copyright}>©︎ Ansel Techonologies, inc. All Right Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;