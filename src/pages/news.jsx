import Image from "next/image";
import styles from "../styles/News.module.css";
import Link from "next/link";

export default function News() {
    return(
        <main>
            {/* ページビジュアル */}
            <section className="page_visual">
                <div className="page_wrapper">
                    <div className="page_inner">
                        <div className="page_back">
                            <Image
                                className="page_visual_logo"
                                src="/images/page-visual-logo.png"
                                alt="アンセルロゴ"
                                width={782}
                                height={929}
                            />
                            <Image
                                className="page_img"
                                src="/images/news/news-back.png"
                                alt="お知らせ"
                                width={1140}
                                height={690}
                            />
                        </div>
                        <h2>お知らせ</h2>
                        <h3>NEWS</h3>
                    </div>
                </div>
            </section>

            {/* お知らせ */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>News</h2>
                            <h3>新着情報</h3>
                            <form action="#" className="search_container">
                                <input type="text" size="25" placeholder="検索..." />
                            </form>
                        </div>
                        <div>
                            <Link href="" className={styles.p_news_content}>
                                <div className={styles.news_date_category}>
                                    <p>2024.03.21</p>
                                    <p className={styles.news_category}>お知らせ</p>
                                </div>
                                <p>TechBlogを開設しました！</p>
                            </Link>
                            <Link href="" className={styles.p_news_content}>
                                <div className={styles.news_date_category}>
                                    <p>2024.01.17</p>
                                    <p className={styles.news_category}>お知らせ</p>
                                </div>
                                <p>採用Instagramを開設しました！</p>
                            </Link>
                            <Link href="" className={styles.p_news_content}>
                                <div className={styles.news_date_category}>
                                    <p>2024.01.01</p>
                                    <p className={styles.news_category}>お知らせ</p>
                                </div>
                                <p>派遣免許取得のお知らせ</p>
                            </Link>
                            <Link href="" className={styles.p_news_content}>
                                <div className={styles.news_date_category}>
                                    <p>2023.09.01</p>
                                    <p className={styles.news_category}>お知らせ</p>
                                </div>
                                <p>増資のお知らせ</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};