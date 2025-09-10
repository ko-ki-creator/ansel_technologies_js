import Image from "next/image";
import styles from "../styles/Recruit_experienced.module.css";
import academyStyles from "../styles/Academy.module.css";
import serviceStyles from "../styles/Service.module.css";
import Link from "next/link";

export default function RecruitEngineer() {
    return (
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
                                src="/images/job-enginier/job-enginier-back.png"
                                alt="採用情報"
                                width={1140}
                                height={690}
                            />
                        </div>
                        <h2>IT経験者採用</h2>
                        <h3>JOB</h3>
                    </div>
                </div>
            </section>

            {/* 経験者エンジニア */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Experienced</h2>
                            <h3>経験者エンジニア</h3>
                            <p>
                                Softwere Engineer / Infrastructure Engineer<br />
                                バックエンド・フロントエンド・インフラエンジニア
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 事業内容 */}
            <section>
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
                                    <h5 className={styles.job_school_sub}>各種業界のクライアント企業様へITサービスの提供</h5>
                                    <p>
                                        社員ひとりひとりの「どんなことをやっていきたいか」に合わせて、 フロントエンド・バックエンド・インフラエンジニア等、様々な案件のプロジェクトメンバーとして業務を実施します。 「専門分野の技術を追求したい」「PM・PMOなどのマネジメント領域で活躍したい」など、将来のキャリアビジョンに合わせて自由に案件を決めることが可能です。 さらに、年1回の更新時期にシステム上で現在の案件を継続するか、別の案件に挑戦するかも選択可能です。
                                    </p>
                                </div>
                            </div>
                            <div className={`${serviceStyles.p_service_content} ${serviceStyles.p_service_education}`}>
                                <div className={styles.p_service_group}>
                                    <h4 className={styles.job_school_ttl}>新規事業開発</h4>
                                    <h5 className={styles.job_school_sub}>SaaS、AIなど幅広いWebサービスの開発</h5>
                                    <p>
                                        有志で集まってチームを組成し新規事業開発に取り組んでいるメンバーも複数おり、 可能性があれば事業化や会社としての投資も検討可能です。 現在、Insurance×Technology、ChatGPTを用いたセキュリティリスクマネジメントサービス開発、IT派遣領域業務支援システム開発などの複数PJが走っています。
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
                                    <td>10:00〜18:00</td>
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
                                <tr className={styles.summary_list}>
                                    <th>求めるスキル</th>
                                    <td>
                                        <p>・ITエンジニア経験（1年以上）をお持ちの方</p>
                                        <p>・開発言語問わず</p>
                                        <p>・バックエンド、フロントエンド、インフラ問わず</p>
                                        <p>・要件定義、設計、開発、運用、テストまで工程問わず</p>
                                    </td>
                                </tr>
                                <tr className={styles.summary_list}>
                                    <th>歓迎スキル</th>
                                    <td>
                                        <p>・マネジメント、リーダー業務、教育のご経験をお持ちの方</p>
                                        <p>・上流工程のご経験をお持ちの方</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* エントリーの流れ */}
            <section>
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