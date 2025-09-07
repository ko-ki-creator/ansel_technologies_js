import Image from "next/image";
import styles from "../styles/Service.module.css";

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
                                src="/images/service/service-back.png"
                                alt="事業内容トップ"
                                width={1140}
                                height={690}
                            />
                        </div>
                        <h2>事業内容</h2>
                        <h3>SERVICE</h3>
                    </div>
                </div>
            </section>

            {/* 事業内容一覧 */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className={styles.p_service_container}>
                            <div className={styles.p_service_content}>
                                <Image
                                    src="/images/service/service-solution1.png"
                                    alt="ITソリューション事業"
                                    width={542}
                                    height={341}
                                />
                                <div className={styles.p_service_group}>
                                    <div className={styles.p_service_ttl}>
                                        <h2>ITソリューション事業</h2>
                                    </div>
                                    <p>
                                        大手コンサルティングファームや１部上場企業から案件をいただき、システム開発を行います。 基幹系、業務系のシステムからモバイル系まで幅広く案件を保有しています。
                                    </p>
                                </div>
                            </div>
                            <div className={` ${styles.p_service_content} ${styles.p_service_education}`}>
                                <div className={styles.p_service_group}>
                                    <div className={styles.p_service_ttl}>
                                        <h2>エンジニア教育事業</h2>
                                        <a href="/academy">
                                            <Image
                                                src="/images/arrow-icon/arrow-blue.svg"
                                                alt=""
                                                width={60}
                                                height={60}
                                            />
                                        </a>
                                    </div>
                                    <p>
                                        未経験からプロフェッショナルなITエンジニアを育成しています。
                                    </p>
                                </div>
                                <Image
                                    src="/images/service/service-solution2.png"
                                    alt="エンジニア教育事業"
                                    width={542}
                                    height={341}
                                />
                            </div>
                            <div className={styles.p_service_content}>
                                <Image
                                    src="/images/service/service-solution3.png"
                                    alt="自社開発サービス"
                                    width={542}
                                    height={341}
                                />
                                <div className={styles.p_service_group}>
                                    <div className={styles.p_service_ttl}>
                                        <h2>自社開発サービス</h2>
                                    </div>
                                    <p>
                                        Comimg Soon ...
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};