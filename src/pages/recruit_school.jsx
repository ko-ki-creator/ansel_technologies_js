import Image from "next/image";
import styles from "../styles/Recruit_experienced.module.css";
import academyStyles from "../styles/Academy.module.css";
import serviceStyles from "../styles/Service.module.css";
import Link from "next/link";

export default function RecruitSchool() {
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
                                src="/images/job-school/job-school-back.png"
                                alt="採用情報"
                                width={1140}
                                height={690}
                            />
                        </div>
                        <h2>スクール生採用</h2>
                        <h3>JOB</h3>
                    </div>
                </div>
            </section>

            {/* 未経験エンジニア */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Inexperienced</h2>
                            <h3>未経験エンジニア</h3>
                            <p>
                                わたしたちは、「プログラミングなどのIT学習を潤沢に受けられる環境」をご用意しています。
                            </p>
                        </div>
                        <h4 className={styles.inexperienced_ttl}>学習コンテンツの例</h4>
                        <div className={styles.inexperienced_container}>
                            <div className={styles.inexperienced_content}>
                                <Image
                                    src="/images/school/school-step1.png"
                                    alt="STEP1"
                                    width={150}
                                    height={150}
                                />
                                <div className={styles.inexperienced_group}>
                                    <p>STEP1</p>
                                    <h5>Webデザイン</h5>
                                    <h5>HTML・CSSの基礎学習</h5>
                                </div>
                            </div>
                            <div className={styles.inexperienced_content}>
                                <Image
                                    src="/images/school/school-step2.png"
                                    alt="STEP2"
                                    width={150}
                                    height={150}
                                />
                                <div className={styles.inexperienced_group}>
                                    <p>STEP2</p>
                                    <h5>Webサイトの模写</h5>
                                </div>
                            </div>
                            <div className={styles.inexperienced_content}>
                                <Image
                                    src="/images/school/school-step3.png"
                                    alt="STEP3"
                                    width={150}
                                    height={150}
                                />
                                <div className={styles.inexperienced_group}>
                                    <p>STEP3</p>
                                    <h5>PHPプログラミング演習</h5>
                                </div>
                            </div>
                            <div className={styles.inexperienced_content}>
                                <Image
                                    src="/images/school/school-step4.png"
                                    alt="STEP4"
                                    width={150}
                                    height={150}
                                />
                                <div className={styles.inexperienced_group}>
                                    <p>STEP4</p>
                                    <h5>
                                        Vue.jsによる<br />
                                        JavaScript学習
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className={styles.study_period}>
                            <p>8〜12ヶ月ほど</p>
                        </div>
                        <h4 className={styles.inexperienced_ttl}>学べる理由</h4>
                        <div className={styles.inexperienced_reason_container}>
                            <div className={styles.inexperienced_reason_content}>
                                <h6>フロントエンド</h6>
                                <div className={styles.reason_img}>
                                    <div className={styles.reason_icon_name}>
                                        <Image
                                            src="/images/language-icon/html.png"
                                            alt="HTML"
                                            width={100}
                                            height={100}
                                        />
                                        <p>HTML</p>
                                    </div>
                                    <div className={styles.reason_icon_name}>
                                        <Image
                                            src="/images/language-icon/css.png"
                                            alt="CSS"
                                            width={100}
                                            height={100}
                                        />
                                        <p>CSS</p>
                                    </div>
                                    <div className={styles.reason_icon_name}>
                                        <Image
                                            src="/images/language-icon/js.png"
                                            alt="Javascript"
                                            width={100}
                                            height={100}
                                        />
                                        <p>JavaScript</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.inexperienced_reason_content}>
                                <h6>バックエンド</h6>
                                <div className={styles.reason_img}>
                                    <div className={styles.reason_icon_name}>
                                        <Image
                                            src="/images/language-icon/php.png"
                                            alt="PHP"
                                            width={100}
                                            height={100}
                                        />
                                        <p>PHP</p>
                                    </div>
                                    <div className={styles.reason_icon_name}>
                                        <Image
                                            src="/images/language-icon/laravel.png"
                                            alt="Laravel"
                                            width={100}
                                            height={100}
                                        />
                                        <p>Laravel</p>
                                    </div>
                                    <div className={styles.reason_icon_name}>
                                        <Image
                                            src="/images/language-icon/java.png"
                                            alt="Java"
                                            width={100}
                                            height={100}
                                        />
                                        <p>Java</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.inexperienced_reason_content}>
                                <h6>インフラ</h6>
                                <div className={styles.reason_img}>
                                    <div className={styles.reason_icon_name}>
                                        <Image
                                            src="/images/language-icon/aws.png"
                                            alt="AWS"
                                            width={100}
                                            height={100}
                                        />
                                        <p>AWS</p>
                                    </div>
                                    <div className={styles.reason_icon_name}>
                                        <Image
                                            src="/images/language-icon/ccna.png"
                                            alt="CCNA"
                                            width={100}
                                            height={100}
                                        />
                                        <p>CCNA</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className={styles.inexperienced_reason_txt}>
                            一般的なスクールなどでは30万円〜70万円ほどかかるプログラミングカリキュラムを、 弊社の社員であれば学習費は完全無料（こちらのプログラミングスクールを無料学習できます）、ITに関わる資格取得代も無料、給料を受け取りながらスキルアップを実現できます！
                        </p>
                    </div>
                </div>
            </section>

            {/* 事業内容 */}
            <section className="p-service">
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Service</h2>
                            <h3>事業内容</h3>
                        </div>
                        <div className={styles.p_service_container}>
                            <div className={serviceStyles.p_service_content}>
                                <Image
                                    src="/images/service/service-solution1.png"
                                    alt="ITソリューション事業"
                                    width={542}
                                    height={361}
                                />
                                <div className={styles.p_service_group}>
                                    <h4 className={styles.job_school_ttl}>ITソリューション事業</h4>
                                    <h5 className={styles.job_school_sub}>各種業界のクライアント企業様へIT・BPOサービスの提供</h5>
                                    <p>
                                        ITサポートやテクニカルサポート、ヘルプデスク等の様々な案件のプロジェクトメンバーとして業務をお任せします。 未経験の方がつらい思いをすることのないよう、始めは簡単なオペレーション業務から参画いただき、サポートを受けられる体制になっています。 日中は業務に参画しながら、ご自身の時間でプログラミングスクールを受講することが可能です。
                                    </p>
                                </div>
                            </div>
                            <div className={`${serviceStyles.p_service_content} ${serviceStyles.p_service_education}`}>
                                <div className={styles.p_service_group}>
                                    <h4 className={styles.job_school_ttl}>新規事業開発</h4>
                                    <h5 className={styles.job_school_sub}>SaaS、AIなど幅広いWebサービスの開発</h5>
                                    <p>
                                        ChatGPTを用いたリクスマネジメントサービスの開発や、IT業務システムの開発、自社HPの改修作業等のWEBサービス開発にも取り組んでおります。。
                                    </p>
                                </div>
                                <Image
                                    src="/images/service/service-solution2.png"
                                    alt="エンジニア教育事業"
                                    width={542}
                                    height={361}
                                />
                            </div>
                            <div className={serviceStyles.p_service_content}>
                                <Image
                                    src="/images/service/service-solution3.png"
                                    alt="自社開発サービス"
                                    width={542}
                                    height={361}
                                />
                                <div className={styles.p_service_group}>
                                    <h4 className={styles.job_school_ttl}>Web制作・運用</h4>
                                    <h5 className={styles.job_school_sub}>大手企業様のHP制作、ECサイトの構築運用</h5>
                                    <p>
                                        小規模から大規模まで幅広く対応が可能です
                                    </p>
                                </div>
                            </div>
                        </div>
                        <table className={styles.work_summary}>
                            <tbody>
                                <tr className={styles.summary_list}>
                                    <th>勤務地</th>
                                    <td>本社：神保町　配属：リモート or 東京23区 or 本社（プロジェクトにより変動）</td>
                                </tr>
                                <tr className={styles.summary_list}>
                                    <th>勤務時間</th>
                                    <td>9:00〜18:00</td>
                                </tr>
                                <tr className={styles.summary_list}>
                                    <th>福利厚生</th>
                                    <td>健康保険・厚生年金保険・雇用保険・労災保険・介護保険・子ども・子育て拠出金</td>
                                </tr>
                                <tr className={styles.summary_list}>
                                    <th>休日休暇</th>
                                    <td>基本 完全週休2日制（プロジェクトにより変動）</td>
                                </tr>
                                <tr className={styles.summary_list}>
                                    <th>応募方法</th>
                                    <td>下記の応募フォームよりエントリーをお願いします。採用担当よりご連絡致します。</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className={styles.eligibility_container}>
                            <h4>こんな想いを持った方からの応募をお待ちしています！</h4>
                            <div className={styles.eligility_content}>
                                <div className={styles.eligility_group}>
                                    <Image
                                        src="/images/job-school/check-gold.png"
                                        alt=""
                                        width={30}
                                        height={30}
                                    />
                                    <p>ITスキルを身につけたい！</p>
                                </div>
                                <div className={styles.eligility_group}>
                                    <Image
                                        src="/images/job-school/check-gold.png"
                                        alt=""
                                        width={30}
                                        height={30}
                                    />
                                    <p>プログラミングスクールに興味はあるが高い</p>
                                </div>
                                <div className={styles.eligility_group}>
                                    <Image
                                        src="/images/job-school/check-gold.png"
                                        alt=""
                                        width={30}
                                        height={30}
                                    />
                                    <p>働きながらエンジニアのスキルを身につけたい！</p>
                                </div>
                                <div className={styles.eligility_group}>
                                    <Image
                                        src="/images/job-school/check-gold.png"
                                        alt=""
                                        width={30}
                                        height={30}
                                    />
                                    <p>切磋琢磨できる仲間が欲しい</p>
                                </div>
                            </div>
                            <p>
                                IT学習のサポートはもちろん、ちょっとした困りごとや悩みまで 社員ひとりひとりをしっかりと支え、伴走させていただきます！！
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* エントリーの流れ */}
            <section className="flow">
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Flow</h2>
                            <h3>エントリーの流れ</h3>
                        </div>
                        <div className={academyStyles.flow_container}>
                            <div className={academyStyles.flow_content}>
                                <div className={academyStyles.flow_ttl}>
                                    <p>1</p>
                                    <h4>エントリー</h4>
                                </div>
                                <p>まずは、当社の採用ページまたは指定の応募フォームからエントリーしてください。履歴書・職務経歴書の提出が必要ですので、事前にご準備をお願いいたします。</p>
                            </div>
                            <div className={academyStyles.flow_content}>
                                <div className={academyStyles.flow_ttl}>
                                    <p>2</p>
                                    <h4>書類選考</h4>
                                </div>
                                <p>ご提出いただいた書類をもとに、これまでのご経験やスキルを確認させていただきます。選考結果は、1週間以内を目安にご連絡いたします。</p>
                            </div>
                            <div className={academyStyles.flow_content}>
                                <div className={academyStyles.flow_ttl}>
                                    <p>3</p>
                                    <h4>一次面接</h4>
                                </div>
                                <p>担当者との面接を行います。これまでのご経験や当社での働き方についてお話ししながら、お互いの理解を深める場となります。リラックスしてお臨みください。</p>
                            </div>
                            <div className={academyStyles.flow_content}>
                                <div className={academyStyles.flow_ttl}>
                                    <p>4</p>
                                    <h4>最終面接</h4>
                                </div>
                                <p>経営陣または部門責任者との面接です。あなたのキャリアビジョンや当社での活躍の可能性について、より具体的にお話しさせていただきます。</p>
                            </div>
                            <div className={academyStyles.flow_content}>
                                <div className={academyStyles.flow_ttl}>
                                    <p>5</p>
                                    <h4>内定</h4>
                                </div>
                                <p className={academyStyles.no_border}>最終面接を通過された方には、内定のご連絡をいたします。条件面の調整や入社手続きを進め、ご入社に向けた準備をサポートいたします。</p>
                            </div>
                            <div className={styles.flow_submit_btn}>
                                <Link href="/recruit_entry">エントリーする</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};