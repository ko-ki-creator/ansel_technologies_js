import Image from "next/image";
import styles from "../styles/Blog.module.css";
import blogStyles from "../styles/Home.module.css";
import Link from "next/link";
import { ArticleCard } from "./components/Blog/Blog";

export default function Blog() {
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
                                src="/images/blog/blog-back.png"
                                alt="ブログ"
                                width={1140}
                                height={690}
                            />
                        </div>
                        <h2>ブログ</h2>
                        <h3>BLOG</h3>
                    </div>
                </div>
            </section>

            {/* ブログ */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Blog</h2>
                            <h3>ブログ</h3>
                            <form action="#" className="search_container">
                                <input type="text" size="25" placeholder="検索..." />
                            </form>
                        </div>
                        <div className={styles.p_blog_container}>
                            <ArticleCard
                                blogImage="/images/blog/blog1.png"
                                blogImageAlt="【エンジニアインタビュー】ネットワークエンジニアに聞いてみた！"
                                date="2024.12.31"
                                category="Interview"
                                title="【エンジニアインタビュー】ネットワークエンジニアに聞いてみた！"
                                url="/blog-page"
                            />
                            <ArticleCard
                                blogImage="/images/blog/blog2.png"
                                blogImageAlt="Anselの学習支援制度について"
                                date="2024.12.30"
                                category="Recruit"
                                title="Anselの学習支援制度について"
                                url="/blog-page"
                            />
                            <ArticleCard
                                blogImage="/images/blog/blog3.png"
                                blogImageAlt="【社員ブログ】Connecting the dots"
                                date="2024.12.29"
                                category="Blog"
                                title="【社員ブログ】Connecting the dots"
                                url="/blog-page"
                            />
                            <ArticleCard
                                blogImage="/images/blog/blog4.png"
                                blogImageAlt="IT経験なしの私がAnselTechnologiesに惹かれて入社するまで"
                                date="2024.12.28"
                                category="Blog"
                                title="【社員ブログ】IT経験なしの私がAnsel Technologiesに惹かれて入社するまで"
                                url="/blog-page"
                            />
                            <ArticleCard
                                blogImage="/images/blog/blog5.png"
                                blogImageAlt="ほぼゲーム！？作って遊んで仕事もできる！話題のGather.Townを使ってみた"
                                date="2024.12.27"
                                category="Recruit"
                                title="ほぼゲーム！？作って遊んで仕事もできる！話題のGather.Townを使ってみた"
                                url="/blog-page"
                            />
                            <ArticleCard
                                blogImage="/images/blog/blog6.png"
                                blogImageAlt="【社員インタビュー】“最年少”エンジニアを目指す女性社員に聞いてみた！！.Townを使ってみた"
                                date="2024.12.26"
                                category="Interview"
                                title="【社員インタビュー】“最年少”エンジニアを目指す女性社員に聞いてみた！！.Townを使ってみた"
                                url="/blog-page"
                            />
                        </div>
                        <div className={styles.pagination_container}>
                            <div>
                                <Link href="" className={styles.pagi_prev_arrow}></Link>
                            </div>
                            <ul className={styles.pagination_list}>
                                <li className={styles.pagination_item}><Link href="">1</Link></li>
                                <li className={styles.pagination_item}><Link href="">2</Link></li>
                                <li className={styles.pagination_item}><Link href="">3</Link></li>
                                <li className={styles.pagination_item}><Link href="">4</Link></li>
                                <li className={styles.pagination_item}><Link href="">5</Link></li>
                            </ul>
                            <div>
                                <Link href="" className={styles.pagi_next_arrow}></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};