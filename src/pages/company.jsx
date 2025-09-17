import Image from "next/image";
import styles from "../styles/Company.module.css";
// import Link from "next/link";
import Slider from "../components/molecules/Slider/Slider";
import { Splide } from "@splidejs/react-splide";

export default function Company() {
    return (

        <main>
            {/* ページビジュアル */}
            <section>
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
                                src="/images/company/company-back.png"
                                alt="会社概要"
                                width={1140}
                                height={690}
                            />
                        </div>
                        <h2>会社概要</h2>
                        <h3>COMPANY</h3>
                    </div>
                </div>
            </section>

            {/* 会社概要 */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Company Info</h2>
                            <h3>会社概要</h3>
                        </div>
                        <table className={styles.company_table}>
                            <tbody>
                                <tr>
                                    <th>企業名</th>
                                    <td>株式会社Ansel Technologies</td>
                                </tr>
                                <tr>
                                    <th>代表名</th>
                                    <td>グループ代表　平井 大介<br />
                                        代表取締役　中村 彩乃
                                    </td>
                                </tr>
                                <tr>
                                    <th>設立</th>
                                    <td>2022年5月2日</td>
                                </tr>
                                <tr>
                                    <th>従業員数</th>
                                    <td>60名</td>
                                </tr>
                                <tr>
                                    <th>所在地</th>
                                    <td>
                                        ●本社<br />
                                        101-0051<br className="sp" />
                                        東京都千代田区神田神保町2丁目38-11岩田ビル1F<br />
                                        <br />
                                        ●福岡オフィス<br />
                                        810-0001<br className="sp" />
                                        福岡県福岡市中央区天神1-4-1 西日本新聞会館16階 (天神スカイホール内)<br />
                                        <br />
                                        ●札幌オフィス<br />
                                        060-0004<br className="sp" />
                                        北海道札幌市中央区北4条西4丁目1-7 MMS札幌駅前ビル1階<br />
                                        <br />
                                        ●大阪オフィス<br />
                                        556-0011<br className="sp" />
                                        大阪府大阪市浪速区難波中2丁目10-70 パークスタワー19F<br />
                                    </td>
                                </tr>
                                <tr>
                                    <th>資本金</th>
                                    <td>25,000,000円</td>
                                </tr>
                                <tr>
                                    <th>許認可</th>
                                    <td>労働者派遣事業　許可番号：派13-317042</td>
                                </tr>
                                <tr>
                                    <th>メールアドレス</th>
                                    <td>info@anseltechnologies.com</td>
                                </tr>
                                <tr>
                                    <th>関連会社</th>
                                    <td>株式会社Asikaze</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 役員紹介 */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Management-Team</h2>
                            <h3>役員紹介</h3>
                        </div>
                        <div className={styles.management_team_container}>
                            <div className={styles.management_team_content}>
                                <Image
                                    src="/images/company/hirai.png"
                                    alt="グループ代表 平井大介"
                                    width={345}
                                    height={345}
                                />
                                <div className={styles.management_name}>
                                    <p className={styles.post}>グループ代表</p>
                                    <p className={styles.name}>平井 大介</p>
                                </div>
                                <p>
                                    株式会社リクルートへ新卒入社。大手外資系コンサルティングファームを中心に、 IT業界の中途採用コンサルティング業務に従事。2019年、株式会社Asikazeを設立し、代表取締役に就任。IT領域の転職支援を行う傍ら、外資系コンサルティングファーム、日系SIerの採用人事を請け負い、ITエンジニア、ITコンサルタント、PM、ITアーキテクトなどテクノロジー人材、特に800万以上の高年収帯を中心に、累計1500人以上との採用面接を行う。ITエンジニアのキャリア支援を得意領域とする。
                                </p>
                            </div>
                            <div className={styles.management_team_content}>
                                <Image
                                    src="/images/company/nakamura.png"
                                    alt="代表取締役 中村彩乃"
                                    width={345}
                                    height={345}
                                />
                                <div className={styles.management_name}>
                                    <p className={styles.post}>代表取締役</p>
                                    <p className={styles.name}>中村 彩乃</p>
                                </div>
                                <p>
                                    新卒で採用コンサルティング企業へ入社し、新卒採用支援に従事。2019年、株式会社Asikazeを設立し、取締役に就任。主に外資系コンサルティングファームのITアウトソーシング部門の採用人事を請け負い、BPO人材を中心に採用コンサルティングを行う。2022年からAnsel Technologiesの代表取締役に就任。ITアウトソーシング、若手のキャリア形成を得意領域とする。
                                </p>
                            </div>
                            <div className={styles.management_team_content}>
                                <Image
                                    src="/images/company/uchiyama.png"
                                    alt="執行役員 内山翔大"
                                    width={345}
                                    height={345}
                                />
                                <div className={styles.management_name}>
                                    <p className={styles.post}>執行役員</p>
                                    <p className={styles.name}>内山 翔大</p>
                                </div>
                                <p>
                                    富士通株式会社へ新卒入社。自治体や官公庁の業務システム開発PJTにおけるセールスから要件定義フェーズまで携わる。その後、IT派遣事業の経営コンサルティングを経験。Ansel TechnologiesではIT領域の営業統括、経営企画を担当。大手SIerの業務経験、業務理解をベースに、事業企画、営業企画を得意領域とする。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ギャラリー */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className={styles.gallery_container}>
                            <div className={styles.gallery_content}>
                                <Slider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* アクセス */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Access</h2>
                            <h3>アクセス</h3>
                        </div>
                        <div className={styles.access_container}>
                            <div className={`${styles.access_content} ${styles.tokyo}`}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.1583695433874!2d139.75247527578418!3d35.697720229068004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c15aa95a043%3A0xe5162222671241d1!2z44CSMTAxLTAwNTEg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy656We55Sw56We5L-d55S677yS5LiB55uu77yT77yY4oiS77yR77yRIOWyqeeUsOODk-ODqyAxZg!5e0!3m2!1sja!2sjp!4v1751866232692!5m2!1sja!2sjp"
                                    width="600"
                                    height="450"
                                    style={{border: 0}}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                                <div className={styles.access_group}>
                                    <p className={styles.access_office}>●東京本社</p>
                                    <p className={styles.address}>
                                        101-0051<br className="sp" />
                                        東京都千代田区神田神保町2丁目38-11 岩田ビル1F
                                    </p>
                                </div>
                            </div>
                            <div className={styles.access_group_flex}>
                                <div className={`${styles.access_content} ${styles.fukuoka}`}>
                                    <Image
                                        src="/images/company/fukuoka.png"
                                        alt=""
                                        width={340}
                                        height={450}
                                    />
                                    <div className={styles.access_group}>
                                        <p className={styles.access_office}>●福岡オフィス</p>
                                        <p className={styles.address}>
                                            810-0001<br />
                                            福岡県福岡市中央区天神1-4-1<br />
                                            西日本新聞会館16階 (天神スカイホール内)
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.access_content} ${styles.sapporo}`}>
                                    <Image
                                        src="/images/company/sapporo.png"
                                        alt=""
                                        width={340}
                                        height={450}
                                    />
                                    <div className={`${styles.access_group}`}>
                                        <p className={styles.access_office}>●札幌オフィス</p>
                                        <p className={styles.address}>
                                            060-0004<br />
                                            北海道札幌市中央区北4条西4丁目1-7<br />
                                            MMS札幌駅前ビル1階
                                        </p>
                                    </div>
                                </div>
                                <div className={`${styles.access_content} ${styles.osaka}`}>
                                    <Image
                                        src="/images/company/osaka.png"
                                        alt=""
                                        width={340}
                                        height={450}s
                                    />
                                    <div className={styles.access_group}>
                                        <p className={styles.access_office}>●大阪オフィス</p>
                                        <p className={styles.address}>
                                            556-0011<br />
                                            大阪府大阪市浪速区難波中2丁目10-70<br />
                                            パークスタワー19F
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};