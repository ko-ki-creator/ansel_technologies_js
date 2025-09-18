import Link from "next/link";
import { ArticleCard } from "../components/Blog/Blog";
import styles from "../styles/Blogpage.module.css";
// import fs from "fs";

const Article = () => {
    return(
        <main>
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className={styles.blog_page_heading}>
                            <div className={styles.date_category}>
                                <p>2024.03.21</p>
                                <p>INTERVIEW</p>
                            </div>
                            <h2>【エンジニアインタビュー】ネットワークエンジニアに聞いてみた！</h2>
                        </div>
                        <div className={styles.blog_page_container}>
                            <div className={styles.blog_page_profile}>
                                <h3>プロフィール</h3>
                                <p>年齢：36歳</p>
                                <p>職業：ネットワークエンジニア</p>
                                <p>業界歴：8年10ヶ月</p>
                            </div>
                            <div className={styles.blog_page_content}>
                                <div className={styles.blog_page_content_ttl}>
                                    <h4>01</h4>
                                    <h5>これまでのキャリアを教えてください！</h5>
                                </div>
                                <div className={styles.blog_page_content_txt}>
                                    <div className={styles.line}></div>
                                    <p>
                                        最初に就いた案件は、通信キャリアの基幹網の運用構築の案件でした。それを大体2年半ぐらい経験した後に、次はシステムの運用保守を大体1年ぐらい経験しました。その後は業務改善や、開発支援の案件を2,3年で転々としているような状況です。
                                    </p>
                                </div>
                            </div>
                            <div className={styles.blog_page_content}>
                                <div className={styles.blog_page_content_ttl}>
                                    <h4>02</h4>
                                    <h5>転職を考えられたきっかけを教えてください！</h5>
                                </div>
                                <div className={styles.blog_page_content_txt}>
                                    <div className={styles.line}></div>
                                    <p>
                                        自身の単価に対する還元率が低かったことと、自身のスキルセットを従事する案件に乖離があったことです。,3年で転々としているような状況です。
                                    </p>
                                </div>
                            </div>
                            <div className={styles.blog_page_content}>
                                <div className={styles.blog_page_content_ttl}>
                                    <h4>03</h4>
                                    <h5>従事する案件の乖離というのは？</h5>
                                </div>
                                <div className={styles.blog_page_content_txt}>
                                    <div className={styles.line}></div>
                                    <p>
                                        私の土台はネットワークのエンジニアですが、自分の経験分野とは違う案件に従事することが多くありました。今後の自身のキャリアを形成することが難しくなると感じたため、転職を決意しました。,3年で転々としているような状況です。
                                    </p>
                                </div>
                            </div>
                            <div className={styles.blog_page_content}>
                                <div className={styles.blog_page_content_ttl}>
                                    <h4>04</h4>
                                    <h5>アンセルに入社して転職前の負は解消されましたか？</h5>
                                </div>
                                <div className={styles.blog_page_content_txt}>
                                    <div className={styles.line}></div>
                                    <p>
                                        はい、解消されました。アンセルでは単価に対する還元率が非常に高い。<br />これが一番まずは大きな点かと思います。<br />また、アンセルの営業は常に会話をしながら相談しながら私のキャリアを考え、希望する案件につけるように努力をしてくれているので、乖離が生まれるような案件への従事はかなり減りました。3年で転々としているような状況です。
                                    </p>
                                </div>
                            </div>
                            <div className={styles.blog_page_content}>
                                <div className={styles.blog_page_content_ttl}>
                                    <h4>05</h4>
                                    <h5>アンセルに向いていると思う人教えてください！</h5>
                                </div>
                                <div className={styles.blog_page_content_txt}>
                                    <div className={styles.line}></div>
                                    <p>
                                        コミュニケーションが得意なエンジニアの方には特に向いていると思います。<br />アンセルでは様々な領域の開発案件がありますし、私のようにインフラ領域の案件もございます。そういった様々な分野に興味が持てる方は特に良いと思います。<br />あとは素直でコミュニケーションを取ることに億劫でない方がいいと思います。経験者の方でしたら、皆さんご存知だと思いますが、エンジニア職といっても現場ではかなりコミュニケーションを必要とされます。そういったところに抵抗がない方は非常にいいんじゃないかと思います。,3年で転々としているような状況です。
                                    </p>
                                </div>
                            </div>
                            <div className={styles.blog_page_content}>
                                <div className={styles.blog_page_content_ttl}>
                                    <h4>06</h4>
                                    <h5>最後にどんな人と一緒に働きたいですか？？</h5>
                                </div>
                                <div className={styles.blog_page_content_txt}>
                                    <div className={styles.line}></div>
                                    <p>
                                        業界の経験が長い方は大歓迎です！<br />大先輩と現場をご一緒できれば、私の知らない様々な知見について教えてくださいますし、IT黎明期からの知識や仕事の怖さとかを色々教えてくださるので、そういった方とご一緒できると個人的には非常に嬉しいなと思っています。3年で転々としているような状況です。
                                    </p>
                                </div>
                            </div>
                            <p>
                                弊社は若い方々だけでなく、ベテランのエンジニアさんも大募集しております！ぜひお話を聞きにきてください。
                            </p>
                        </div>
                        <div className={styles.page_arrow}>
                            <div className={styles.page_arrow_flex}>
                                <Link className={styles.prev_page_arrow}></Link>
                                <p>前の記事へ</p>
                            </div>
                            <div className={styles.page_arrow_flex}>
                                <p>次の記事へ</p>
                                <Link className={styles.next_page_arrow}></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Article;