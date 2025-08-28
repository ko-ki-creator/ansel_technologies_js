// import Head from "next/head";
import Image from "next/image";
import styles from "/src/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            <div className="wrap">
                {/* メインビジュアル */}
                <section className={styles.main_visual}>
                    <div className={styles.fv_wrapper}>
                        <div className={styles.fv_inner}>
                            <div className={styles.fv_back_img}>
                            <Image
                                className={`${styles.blue_logo} ${styles.pc}`}
                                src="/images/first-view/fv-backblue-logo.png"
                                alt="アンセルロゴ"
                                width={200}
                                height={713}
                            />
                            <Image
                                className={styles.fv_back}
                                src="/images/first-view/fv-back.jpg"
                                alt="メインビジュアル"
                                width={1140}
                                height={713}
                            />
                            </div>
                            <h2>
                                <span>Technology</span>によって<br />
                                <span>世界</span>を<span>一歩手前</span>に。
                            </h2>
                            <Link href="/news" className={styles.fv_news_group}>
                                <h3>News</h3>
                                <div className={styles.fv_news_content}>
                                    <div className={styles.fv_news_date_thema}>
                                        <p>2024.3.11</p>
                                        <p>TechBlogを開設しました！</p>
                                    </div>
                                    <Image
                                    src="/images/arrow-icon/arrow-gold.svg"
                                    alt=""
                                    width={30}
                                    height={30}
                                    />
                                </div>
                            </Link>
                            <div className={styles.fv_scroll}>
                                <p>SCROLL</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ビジョン */}
                <section className={styles.vision}>
                    <div className="wrapper">
                        <div className="inner">
                            <div className="heading">
                                <h2>Vision</h2>
                                <h3>Anselの将来像について</h3>
                            </div>
                            <div className={styles.vision_container}>
                                <div className={styles.vision_content}>
                                    <h4>
                                        良い技術者が集まり、<br />
                                        次の技術者を教え育む組織
                                    </h4>
                                    <p>
                                        Ansel Technologiesは、エンジニア教育、ITソリューション、自社開発サービスを通じて、企業の成長を支援する最良のパートナーです。<br /><br />
                                        多様なバックグラウンドを持つ専門家が在籍し、業界知識やプロジェクト管理はもちろん、本質的なコミュニケーション力を強みに、組織の課題解決とパフォーマンス向上を実現。<br /><br />
                                        「的確な課題提案」「実行力のあるアドバイス」「迅速な情報共有」を武器に、技術と人をつなぐ血の通ったサポートを提供し、プロジェクトの成功を後押しします。
                                    </p>
                                </div>
                                <Image
                                className={styles.meeting_img}
                                src="/images/vision/vision2.png"
                                alt="良い技術者が集まり、次の技術者を教え育む組織"
                                width={870}
                                height={350}
                                />
                                <Image
                                className={styles.woman_img}
                                src="/images/vision/vision1.png"
                                alt="良い技術者が集まり、次の技術者を教え育む組織"
                                width={354}
                                height={386}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ミッション */}
                <section className={styles.mission}>
                    <div className="wrapper">
                        <div className="inner">
                            <div className="heading">
                                <h2>Mission</h2>
                                <h3>Anselの存在意義</h3>
                            </div>
                            <div className={styles.mission_container}>
                                <div className={styles.mission_content}>
                                    <h4>
                                        Technologyを用いて、<br />
                                        世界を一歩前進させる
                                    </h4>
                                    <p>
                                        Ansel Technologiesは、技術の力で社会やビジネスの可能性を広げることを使命としています。<br /><br />
                                        エンジニア教育、ITソリューション、自社開発サービスを通じて、個人と企業が持つポテンシャルを最大限に引き出し、未来を創造する支援を行います。<br /><br />
                                        私たちは、最先端のテクノロジーと本質的なコミュニケーションを融合させ、誰もが成長できる環境を提供することで、世界に新たな価値を生み出し続けます。
                                    </p>
                                </div>
                                <Image
                                    src="/images/top/mission-img.png"
                                    alt="テクノロジーを用いて世界を一歩前進させる"
                                    width={450}
                                    height={430}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* サービス */}
                <section className={styles.service}>
                    <div className="wrapper">
                        <div className={` inner ${styles.service_inner}`}>
                            <div className={styles.service_left}>
                                <div className="heading_btn">
                                    <div className="heading">
                                        <h2>Service</h2>
                                        <h3>事業内容</h3>
                                    </div>
                                    <Link href="/service">
                                    <Image
                                        src="/images/arrow-icon/arrow-blue.svg"
                                        alt=""
                                        width={30}
                                        height={30}
                                    />
                                    </Link>
                                </div>
                                <div className={styles.service_container}>
                                    <div className={styles.service_content}>
                                        <h4>
                                            Technology × Education × Innovation<br />
                                            成長を加速するITソリューション
                                        </h4>
                                        <p>
                                            Ansel Technologiesは、テクノロジーを活用し、個人と企業の成長を支援するITカンパニーです。エンジニア教育事業、ITソリューション事業、自社開発サービスの3つの軸を中心に、業界をリードする技術と知見を提供しています。
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.service_group}>
                                <div className={`${styles.service_item} ${styles.it_solution}`}>
                                    <p className={styles.ttl}>SERVICE 01</p>
                                    <h5>ITソリューション</h5>
                                    <p className={styles.detail}>大手コンサルティングファームや上場企業から案件をいただき、システム開発を行います。</p>
                                </div>
                                <div className={`${styles.service_item} ${styles.education}`}>
                                    <p className={styles.ttl}>SERVICE 02</p>
                                    <h5>エンジニア教育事業</h5>
                                    <p className={styles.detail}>未経験からプロフェッショナルなITエンジニアを育成しています。</p>
                                </div>
                                <div className={`${styles.service_item} ${styles.in_house}`}>
                                    <p className={styles.ttl}>SERVICE 03</p>
                                    <h5>自社サービス開発</h5>
                                    <p className={styles.detail}>Coming Soon...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* リクルート */}
                <section className={styles.recruit}>
                    <div className="wrapper">
                        <div className="inner">
                            <div className="heading_btn">
                                <div className="heading">
                                    <h2>Recruit</h2>
                                    <h3>採用情報</h3>
                                </div>
                                <Link href="/recruit">
                                <Image
                                    src="/images/arrow-icon/arrow-blue.svg"
                                    alt=""
                                    width={30}
                                    height={30}
                                />
                                </Link>
                            </div>
                            <div className={styles.recruit_container}>
                                <dic className={styles.recruit_content}>
                                    <h4>
                                        日本を代表する価値あるIT企業、<br />
                                        一緒に創ってみませんか？
                                    </h4>
                                    <p>
                                        我々はまだまだ発展途上のベンチャー企業です。<br />
                                        目指したい場所も成し遂げたいことも、まだまだ遠く先にあります。<br />
                                        <br />
                                        あなたの力で、もっと効率的に、もっと早く前に進めるかもしれません。<br />
                                        IT業界を支える事業を生み出し、価値ある企業を一緒に作ってみませんか？
                                    </p>
                                    <div className={styles.recruit_btn}>
                                        <Link href="/recruit">
                                            <p>採用情報トップ</p>
                                            <Image
                                            src="/images/arrow-icon/arrow-blue-back.svg"
                                            alt=""
                                            width={20}
                                            height={20}
                                            />
                                        </Link>
                                        <Link href="/recruit_education">
                                            <p>IT経験者採用</p>
                                            <Image
                                            src="/images/arrow-icon/arrow-blue-back.svg"
                                            alt=""
                                            width={20}
                                            height={20}
                                            />
                                        </Link>
                                        <Link href="/recruit_school">
                                            <p>スクール生採用</p>
                                            <Image
                                            src="/images/arrow-icon/arrow-blue-back.svg"
                                            alt=""
                                            width={20}
                                            height={20}
                                            />
                                        </Link>
                                    </div>
                                </dic>
                                <div className={styles.recruit_img}>
                                    <Image
                                    className={styles.recruit_mens}
                                    src="/images/recruit/recruit2.png"
                                    alt="日本を代表する価値あるIT企業、一緒に創ってみませんか？"
                                    width={334}
                                    height={363}
                                    />
                                    <Image
                                    className={styles.recruit_woman}
                                    src="/images/recruit/recruit3.png"
                                    alt="日本を代表する価値あるIT企業、一緒に創ってみませんか？"
                                    width={396}
                                    height={418}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ブログ */}
                <section className={styles.blog}>
                    <div className="wrapper">
                        <div className={` inner ${styles.blog_inner}`}>
                            <div className="heading_btn">
                                <div className="heading">
                                    <h2>Blog</h2>
                                    <h3>ブログ</h3>
                                </div>
                                <Link href="/blog">
                                <Image
                                    src="/images/arrow-icon/arrow-blue.svg"
                                    alt=""
                                    width={30}
                                    height={30}
                                />
                                </Link>
                            </div>
                            <div className={styles.blog_arrow}>
                                <p>SCROLL</p>
                                <Image
                                src="/images/blog/blog-scroll-arrow.png"
                                alt=""
                                width={50}
                                height={7}
                                />
                            </div>
                            <div className={styles.blog_container}>
                                <Link href="/blog-page" className={styles.blog_content}>
                                    <Image
                                    src="/images/blog/blog1.png"
                                    alt="【エンジニアインタビュー】ネットワークエンジニアに聞いてみた！"
                                    width={300}
                                    height={180}
                                    />
                                    <div className={styles.blog_group}>
                                        <div className={styles.blog_date_category}>
                                            <p className={styles.date}>2024.12.31</p>
                                            <p className={styles.category}>Interview</p>
                                        </div>
                                        <p className={styles.ttl}>
                                            【エンジニアインタビュー】ネットワークエンジニアに聞いてみた！
                                        </p>
                                    </div>
                                </Link>
                                <a href="/blog-page" className={styles.blog_content}>
                                    <Image
                                    src="/images/blog/blog2.png"
                                    alt="Anselの学習支援制度について"
                                    width={300}
                                    height={180}
                                    />
                                    <div className={styles.blog_group}>
                                        <div className={styles.blog_date_category}>
                                            <p className={styles.date}>2024.12.30</p>
                                            <p className={styles.category}>Recruit</p>
                                        </div>
                                        <p className={styles.ttl}>
                                            Anselの学習支援制度について
                                        </p>
                                    </div>
                                </a>
                                <a href="/blog-page" className={styles.blog_content}>
                                    <Image
                                    src="/images/blog/blog3.png"
                                    alt="【社員ブログ】Connecting the dots"
                                    width={300}
                                    height={180}
                                    />
                                    <div className={styles.blog_group}>
                                        <div className={styles.blog_date_category}>
                                            <p className={styles.date}>2024.12.29</p>
                                            <p className={styles.category}>Blog</p>
                                        </div>
                                        <p className={styles.ttl}>
                                            【社員ブログ】Connecting the dots
                                        </p>
                                    </div>
                                </a>
                                <a href="/blog-page" className={styles.blog_content}>
                                    <Image
                                    src="/images/blog/blog4.png"
                                    alt="【社員ブログ】IT経験なしの私がAnsel Technologiesに惹かれて入社するまで"
                                    width={300}
                                    height={180}
                                    />
                                    <div className={styles.blog_group}>
                                        <div className={styles.blog_date_category}>
                                            <p className={styles.date}>2024.12.28</p>
                                            <p className={styles.category}>Blog</p>
                                        </div>
                                        <p className={styles.ttl}>
                                            【社員ブログ】IT経験なしの私がAnsel Technologiesに惹かれて入社するまで
                                        </p>
                                    </div>
                                </a>
                                <a href="/blog-page" className={styles.blog_content}>
                                    <Image
                                    src="/images/blog/blog5.png"
                                    alt="ほぼゲーム！？作って遊んで仕事もできる！話題のGather.Townを使ってみた"
                                    width={300}
                                    height={180}
                                    />
                                    <div className={styles.blog_group}>
                                        <div className={styles.blog_date_category}>
                                            <p className={styles.date}>2024.12.27</p>
                                            <p className={styles.category}>Recruit</p>
                                        </div>
                                        <p className={styles.ttl}>
                                            ほぼゲーム！？作って遊んで仕事もできる！話題のGather.Townを使ってみた
                                        </p>
                                    </div>
                                </a>
                                <a href="/blog-page" className={styles.blog_content}>
                                    <Image
                                    src="/images/blog/blog6.png"
                                    alt="【社員インタビュー】“最年少”エンジニアを目指す女性社員に聞いてみた！！"
                                    width={300}
                                    height={180}
                                    />
                                    <div className={styles.blog_group}>
                                        <div className={styles.blog_date_category}>
                                            <p className={styles.date}>2024.12.26</p>
                                            <p className={styles.category}>Interview</p>
                                        </div>
                                        <p className={styles.ttl}>
                                            【社員インタビュー】“最年少”エンジニアを目指す女性社員に聞いてみた！！
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
