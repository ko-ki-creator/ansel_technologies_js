import Image from "next/image";
import styles from "../styles/Recruit.module.css";

export default function Recruit() {
    return (
        <main className="wrap">
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
                                src="/images/recruit/recruit-back.png"
                                alt="採用情報"
                                width={1140}
                                height={690}
                            />
                        </div>
                        <h2>採用情報</h2>
                        <h3>RECRUIT</h3>
                    </div>
                </div>
            </section>

            {/* メッセージ */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Message</h2>
                            <h3>メッセージ</h3>
                        </div>
                        <div className={styles.message_content}>
                            <Image
                                src="/images/recruit/message-img.png"
                                alt="日本を代表sる価値あるIT企業、一緒に創ってみませんか？"
                                width={428}
                                height={285}
                            />
                            <div className={styles.message_group}>
                                <h4>
                                    日本を代表する価値あるIT企業、<br />
                                    一緒に創ってみませんか？
                                </h4>
                                <p>
                                    我々はまだまだ発展途上のベンチャーです。<br />
                                    目指したい場所も成し遂げたいことも、まだまだ遠く先にあります。<br />
                                    あなたの力で、もっと効率的に、もっと速く前に進めるかもしれません。<br />
                                    IT業界を支える事業を生み出し、価値ある企業を一緒に創ってみませんか？
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Anselの特徴 */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Feature</h2>
                            <h3>Anselの特徴</h3>
                        </div>
                        <div className={styles.r_feature_container}>
                            <div className={styles.r_feature_content}>
                                <div className={styles.r_feature_ttl}>
                                    <p className={styles.number}>1</p>
                                    <h4>透明性</h4>
                                </div>
                                <p>
                                    我々は、働きやすい環境を目指して透明性を重視しています。案件の単価と連動する給与設計をしており、給与テーブルも公開しています。また、会社の決算状況なども公開し、透明性の高い健全な経営を行っています。
                                </p>
                            </div>
                            <div className={styles.r_feature_content}>
                                <div className={styles.r_feature_ttl}>
                                    <p className={styles.number}>2</p>
                                    <h4>案件単価性</h4>
                                </div>
                                <p>
                                    Anselでは、スクール生とエンジニアの2つの職位があり、スクール生は一律報酬、エンジニアは、案件単価とインセンティブによって報酬設計を行っています。インセンティブは主に後輩育成・マネジメントを行うメンバーに支給しており、技術力が高く、かつチームを大事に働ける人材に報いる制度となっています。
                                </p>
                            </div>
                            <div className={styles.r_feature_content}>
                                <div className={styles.r_feature_ttl}>
                                    <p className={styles.number}>3</p>
                                    <h4>成長環境</h4>
                                </div>
                                <p>
                                    Anselでは社員の成長を支援することを大切にしています。未経験から入社したメンバーには最低8ヶ月からのボリューミーなプログラミングカリキュラムを用意しておりますので、しっかりと技術を身につけられます。現役エンジニアにも、自分の専門外のスキル・言語を、講師付きで学べる環境を用意しています。現状に不安があるエンジニアへ、働きながら成長できる機会をAnselでは提供しています。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 報酬体系 */}
            <section>
                <div className={styles.reward_wrapper}>
                    <h2>Ansel Technologiesの報酬体系</h2>
                    <h3>単価評価制度 × インセンティブ制度</h3>
                </div>
            </section>

            {/* 単価評価制度 */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Evaluation</h2>
                            <h3>単価評価制度</h3>
                            <p>
                                Ansel Technologiesでは、お客様からいただく単価をエンジニアへ開示し、その単価の73%を還元します。
                            </p>
                        </div>
                        <div className={styles.evaluation_container}>
                            <div className={styles.evaluation_content}>
                                <h4>評価基準</h4>
                                <p>
                                    評価基準は「粗利率」になります。<br />
                                    粗利率=1-((給与＋社会保険料(会社負担分)＋交通費)÷単価)
                                </p>
                            </div>
                            <div className={styles.evaluation_content}>
                                <h4>単価の還元方法</h4>
                                <p>
                                    月給は1年間の評価期間中は固定とし、賞与によって還元率が73%となるように調整いたします。<br />
                                    賞与額=(年間平均単価×(年間平均粗利率ー27%)×その期の稼働月数)
                                </p>
                            </div>
                            <div className={styles.evaluation_content}>
                                <h4>昇給</h4>
                                <p>
                                    期間中に単価が大きく上がった場合、固定の月額報酬をUPいたします。<br />
                                    昇給も粗利率を基に算出いたします。<br />
                                    昇給額＝(年間平均単価×(年間平均粗利率-37%))
                                </p>
                            </div>
                        </div>
                        <div className={styles.evaluation_group}>
                            <h5>例）1年間の平均単価が65万のエンジニアAさんの場合</h5>
                            <div className={styles.evaluation_list_one}>
                                <div className={` ${styles.evaluation_item} ${styles.btm_border}`}>
                                    <p>単価</p>
                                    <p>¥650,000<span>/月</span></p>
                                </div>
                                <div className={styles.evaluation_item}>
                                    <p>月給</p>
                                    <p>¥342,032<span>/月</span></p>
                                </div>
                                <div className={styles.evaluation_item}>
                                    <p>社会保険料<span>会社負担分</span></p>
                                    <p>¥52,468<span>/月</span></p>
                                </div>
                                <div className={styles.evaluation_item}>
                                    <p>交通費</p>
                                    <p>¥15,000<span>/月</span></p>
                                </div>
                            </div>
                            <div className={styles.evaluation_list_second}>
                                <div className={styles.evaluation_item}>
                                    <p>賞与</p>
                                    <p>¥676,261<span>/月</span></p>
                                </div>
                                <div className={styles.evaluation_item}>
                                    <p>賞与社保<span>(会社負担分)</span></p>
                                    <p>¥103,739<span>/月</span></p>
                                </div>
                                <div className={` ${styles.evaluation_item} ${styles.total}`}>
                                    <p>還元額</p>
                                    <p>¥5,694,000<span>/年</span></p>
                                </div>
                                <p>(還元率　¥5,964,000 ÷　7,800,000 = 73%)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 想定給与表 */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <table className={styles.payroll_table}>
                            <tbody>
                                <tr>
                                    <th className={styles.unit}>単価</th>
                                    <th className={styles.refund}>還元率</th>
                                    <th className={styles.refund_year}>還元率/年</th>
                                    <th className={styles.refund_month}>還元率/月</th>
                                    <th className={styles.salary_month}>給与/月</th>
                                    <th className={styles.socia_insurance}>社会保険料<br /><span>(会社負担分)</span></th>
                                    <th className={styles.transportation}>交通費</th>
                                    <th className={styles.bonus}>賞与支給額</th>
                                    <th className={styles.bonus_social}>賞与社保</th>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>450,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>3,942,000</td>
                                    <td className={styles.refund_month_item}>303,750</td>
                                    <td>250,347</td>
                                    <td>38,403</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>257,500</td>
                                    <td className={styles.bonus_social_item}>39,500</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>500,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>4,380,000</td>
                                    <td className={styles.refund_month_item}>315,000</td>
                                    <td>260,101</td>
                                    <td>39,899</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>520,201</td>
                                    <td className={styles.bonus_social_item}>79,799</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>550,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>4,818,000</td>
                                    <td className={styles.refund_month_item}>346,500</td>
                                    <td>287,411</td>
                                    <td>44,089</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>572,221</td>
                                    <td className={styles.bonus_social_item}>87,779</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>600,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>5,256,000</td>
                                    <td className={styles.refund_month_item}>378,000</td>
                                    <td>314,722</td>
                                    <td>48,278</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>624,241</td>
                                    <td className={styles.bonus_social_item}>95,759</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>650,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>5,694,000</td>
                                    <td className={styles.refund_month_item}>409,500</td>
                                    <td>342,032</td>
                                    <td>52,468</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>676,261</td>
                                    <td className={styles.bonus_social_item}>103,739</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>700,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>6,132,000</td>
                                    <td className={styles.refund_month_item}>441,000</td>
                                    <td>369,343</td>
                                    <td>56,657</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>728,282</td>
                                    <td className={styles.bonus_social_item}>111,718</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>750,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>6,570,000</td>
                                    <td className={styles.refund_month_item}>472,500</td>
                                    <td>396,653</td>
                                    <td>60,847</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>780,302</td>
                                    <td className={styles.bonus_social_item}>119,698</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>800,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>7,008,000</td>
                                    <td className={styles.refund_month_item}>504,000</td>
                                    <td>423,964</td>
                                    <td>65,036</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>832,322</td>
                                    <td className={styles.bonus_social_item}>127,678</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>850,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>7,446,000</td>
                                    <td className={styles.refund_month_item}>535,500</td>
                                    <td>451,274</td>
                                    <td>69,226</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>884,342</td>
                                    <td className={styles.bonus_social_item}>135,658</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>900,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>7,884,000</td>
                                    <td className={styles.refund_month_item}>567,000</td>
                                    <td>478,585</td>
                                    <td>73,415</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>936,362</td>
                                    <td className={styles.bonus_social_item}>143,638</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>950,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>8,322,000</td>
                                    <td className={styles.refund_month_item}>598,500</td>
                                    <td>505,896</td>
                                    <td>77,604</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>988,382</td>
                                    <td className={styles.bonus_social_item}>151,618</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>1,000,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>8,760,000</td>
                                    <td className={styles.refund_month_item}>630,000</td>
                                    <td>533,206</td>
                                    <td>81,794</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>1,040,402</td>
                                    <td className={styles.bonus_social_item}>159,598</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>1,050,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>9,198,000</td>
                                    <td className={styles.refund_month_item}>661,500</td>
                                    <td>560,517</td>
                                    <td>85,983</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>1,092,422</td>
                                    <td className={styles.bonus_social_item}>167,578</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>1,110,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>9,636,000</td>
                                    <td className={styles.refund_month_item}>693,000</td>
                                    <td>587,827</td>
                                    <td>90,173</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>1,144,443</td>
                                    <td className={styles.bonus_social_item}>175,557</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>1,150,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>10,074,000</td>
                                    <td className={styles.refund_month_item}>724,500</td>
                                    <td>615,138</td>
                                    <td>94,362</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>1,196,463</td>
                                    <td className={styles.bonus_social_item}>183,537</td>
                                </tr>
                                <tr>
                                    <td className={styles.unit_item}>1,200,000</td>
                                    <td className={styles.refund_item}>73%</td>
                                    <td className={styles.refund_year_item}>10,512,000</td>
                                    <td className={styles.refund_month_item}>756,000</td>
                                    <td>642,448</td>
                                    <td>98,552</td>
                                    <td>15,000</td>
                                    <td className={styles.bonus_item}>1,248,483</td>
                                    <td className={styles.bonus_social_item}>191,517</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* インセンティブ制度 */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Incentive</h2>
                            <h3>インセンティブ制度</h3>
                            <p>
                                Ansel  Technologiesは、より会社に貢献してくださったエンジニアにインセンティブとして還元いたします。
                            </p>
                        </div>
                        <div className={styles.incentive_container}>
                            <div className={styles.incentive_nurturing}>
                                <div className={styles.incentive_ttl}>
                                    <h4>育成インセンティブ</h4>
                                    <p>
                                        Ansel  Technologiesは、より会社に貢献してくださったエンジニアにインセンティブとして還元いたします。
                                        Backlogを用いたオンラインの育成カリキュラムの講師として1名担当する毎に7,000円、最大15名程度ご担当することも可能です。
                                    </p>
                                </div>
                                <table className={styles.nurturing_table}>
                                    <tr className={styles.nurturing_list}>
                                        <th className={styles.charge}>担当<br className="sp" />人数</th>
                                        <th className={styles.incentive_year}>インセンティブ<br className="sp" />/年</th>
                                        <th className={styles.incentive_month}>インセンティブ<br className="sp" />/月</th>
                                    </tr>
                                    <tr>
                                        <td className={styles.charge_item}>1名</td>
                                        <td className={styles.incentive_year_item}>84,000</td>
                                        <td className={styles.incentive_month_item}>7,000</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.charge_item}>3名</td>
                                        <td className={styles.incentive_year_item}>252,000</td>
                                        <td className={styles.incentive_month_item}>21,000</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.charge_item}>5名</td>
                                        <td className={styles.incentive_year_item}>420,000</td>
                                        <td className={styles.incentive_month_item}>35,000</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.charge_item}>10名</td>
                                        <td className={styles.incentive_year_item}>840,000</td>
                                        <td className={styles.incentive_month_item}>70,000</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={styles.incentive_introduction}>
                                <div className={styles.incentive_ttl}>
                                    <h4>紹介インセンティブ</h4>
                                    <p>
                                        ご友人などを紹介していただき入社となった場合、紹介インセンティブをお支払いいたします。累計の紹介人数に応じて単価が変わるので、ぜひ積極的にご紹介ください。
                                    </p>
                                </div>
                                <table className={styles.introduction_table}>
                                    <tr className={styles.introduction_list}>
                                        <th className={styles.introduce}>累計紹介人数</th>
                                        <th className={styles.money_people}>金額/1名あたり</th>
                                    </tr>
                                    <tr>
                                        <td className={styles.introduce_item}>1名〜2名</td>
                                        <td className={styles.money_people_item}>100,000</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.introduce_item}>3名</td>
                                        <td className={styles.money_people_item}>150,000</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.introduce_item}>5名</td>
                                        <td className={styles.money_people_item}>200,000</td>
                                    </tr>
                                </table>
                            </div>
                            <div className={styles.incentive_certification}>
                                <div className={styles.incentive_ttl}>
                                    <h4>資格インセンティブ</h4>
                                    <p>
                                        弊社は未経験者だけでなく、現役のエンジニアの育成にも力を入れています。自己学習をして資格を取得した場合、資格内容により月額インセンティブと、合格報奨金を支給いたします。記載のない資格も取得する場合にはご相談ください。
                                    </p>
                                </div>
                                <table className={styles.certification_table}>
                                    <tr className={styles.certification_list}>
                                        <th>実施機関</th>
                                        <th>資格名</th>
                                        <th>月額奨励金</th>
                                        <th>合格奨励金</th>
                                        <th>受験費用</th>
                                    </tr>
                                    <tr>
                                        <td className={styles.institution}>IPA情報処理推進機構</td>
                                        <td className={styles.certification_name}>基本情報技術者</td>
                                        <td></td>
                                        <td>5,000</td>
                                        <td>7,500</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>応用情報技術者</td>
                                        <td></td>
                                        <td>10,000</td>
                                        <td>7,500</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>ITストラテジスト</td>
                                        <td>30,000</td>
                                        <td>120,000</td>
                                        <td>5,700</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>システムアーキテクト</td>
                                        <td>20,000</td>
                                        <td>120,000</td>
                                        <td>5,700</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>プロジェクトマネージャー</td>
                                        <td>20,000</td>
                                        <td>120,000</td>
                                        <td>5,700</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.institution}>Oracle</td>
                                        <td className={styles.certification_name}>Oracle Certified Java Programmer, silver</td>
                                        <td>5,000</td>
                                        <td>30,000</td>
                                        <td>32,340</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>Oracle Certified Java Programmer, gold</td>
                                        <td>10,000</td>
                                        <td>100,000</td>
                                        <td>32,340</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.institution}>LPI-inc</td>
                                        <td className={styles.certification_name}>LPIC-1 101</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>$141,22</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>LPIC-1 102</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>$141,22</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>LPIC-2 201</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>$141,22</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>LPIC-2 202</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>$141,22</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>LPIC-3 300</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>$141,22</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>LPIC-3 303</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>$141,22</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>LPIC-3 304</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>$141,22</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.institution}>Cisco</td>
                                        <td className={styles.certification_name}>CCNA8種 CCDA共通</td>
                                        <td>¥5,000</td>
                                        <td>¥10,000</td>
                                        <td>¥39,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>ICND1</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>¥19,800</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>ICNS2</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>¥19,800</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>CCNP7種 CCDP共通</td>
                                        <td>¥5,000</td>
                                        <td>¥10,000</td>
                                        <td>¥36,000</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.institution}>Microsoft</td>
                                        <td className={styles.certification_name}>Azure Fundamentals(AZ-900)</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>¥12,500</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.institution}>Google</td>
                                        <td className={styles.certification_name}>Google Cloud Certified Associate Cloud Engineer</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>$125</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>Google Cloud Certified Professional Cloud Architect</td>
                                        <td></td>
                                        <td>¥20,000</td>
                                        <td>$200</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>Google Cloud Certified Associate Cloud Developer</td>
                                        <td></td>
                                        <td>¥20,000</td>
                                        <td>$200</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.institution}>AWS</td>
                                        <td className={styles.certification_name}>AWS Certified Cloud Practitioner</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>¥11,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>AWS Certified Associate Solution Architect</td>
                                        <td></td>
                                        <td>¥20,000</td>
                                        <td>¥15,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>AWS Certified SisOps Administrator</td>
                                        <td></td>
                                        <td>¥20,000</td>
                                        <td>¥15,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>AWS Certified Associate Developer</td>
                                        <td></td>
                                        <td>¥20,000</td>
                                        <td>¥15,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>AWS Certified Professional Solution Architect</td>
                                        <td>¥10,000</td>
                                        <td>¥50,000</td>
                                        <td>¥30,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>AWS Certified Professional DevOps Engineer</td>
                                        <td>¥10,000</td>
                                        <td>¥50,000</td>
                                        <td>¥30,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>AWS Certified Specialty Advanced Networking</td>
                                        <td></td>
                                        <td>¥20,000</td>
                                        <td>¥30,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>AWS Certified Specialty Security</td>
                                        <td></td>
                                        <td>¥20,000</td>
                                        <td>¥30,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>AWS Certified Specialty Machine Lerning</td>
                                        <td></td>
                                        <td>¥20,000</td>
                                        <td>¥30,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>AWS Certified Specialty Data Analytics</td>
                                        <td></td>
                                        <td>¥20,000</td>
                                        <td>¥30,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>AWS Certified Specialty Database</td>
                                        <td></td>
                                        <td>¥20,000</td>
                                        <td>¥30,000</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.institution}>PMI</td>
                                        <td className={styles.certification_name}>PMP(Project Management Professional)</td>
                                        <td>¥20,000</td>
                                        <td>¥100,000</td>
                                        <td>$405</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.institution}>JSTQB</td>
                                        <td className={styles.certification_name}>JSTQB認定テスト技術者 Foundation Level</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>¥20,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>JSTQB認定テスト技術者 Advanced Level</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>¥20,000</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.institution}>Salesforce</td>
                                        <td className={styles.certification_name}>Salesforce認定 アドミニストレーター</td>
                                        <td></td>
                                        <td>¥5,000</td>
                                        <td>¥20,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>Salesforce認定 上級アドミニストレーター</td>
                                        <td>¥5,000</td>
                                        <td>¥30,000</td>
                                        <td>¥20,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>Salesforce認定 Service Cloudコンサルタント</td>
                                        <td>¥10,000</td>
                                        <td>¥30,000</td>
                                        <td>¥20,000</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className={styles.certification_name}>Salesforce認定 Platform アプリケーションビルダー</td>
                                        <td>¥10,000</td>
                                        <td>¥30,000</td>
                                        <td>¥20,000</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.institution}>Servicenow</td>
                                        <td className={styles.certification_name}>CSA</td>
                                        <td></td>
                                        <td>¥10,000</td>
                                        <td>¥12,000</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};