import Image from "next/image";
import styles from "../styles/Academy.module.css";

export default function Academy() {
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
                                src="/images/academy/academy-back.png"
                                alt="エンジニア教育事業"
                                width={1140}
                                height={690}
                            />
                        </div>
                        <h2>エンジニア教育事業</h2>
                        <h3>ACADEMY</h3>
                    </div>
                </div>
            </section>

            {/* 特徴 */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Feature</h2>
                            <h3>特徴</h3>
                        </div>
                        <div className={styles.feature_container}>
                            <div className={styles.feature_content}>
                                <Image
                                    src="/images/feature/feature1.png"
                                    alt="現役エンジニアがあなたのコードをレビュー"
                                    width={150}
                                    height={150}
                                />
                                <p>現役エンジニアが<br />あなたのコードをレビュー</p>
                            </div>
                            <div className={styles.feature_content}>
                                <Image
                                    src="/images/feature/feature2.png"
                                    alt="資格取得金額補助"
                                    width={150}
                                    height={150}
                                />
                                <p>資格取得金額<br />全額補助</p>
                            </div>
                            <div className={styles.feature_content}>
                                <Image
                                    src="/images/feature/feature3.png"
                                    alt="他の生徒と交流しながら進められる"
                                    width={150}
                                    height={150}
                                />
                                <p>他の生徒と交流しながら<br />進められる</p>
                            </div>
                            <div className={styles.feature_content}>
                                <Image
                                    src="/images/feature/feature4.png"
                                    alt="いつでも何度でも講師に質問できる"
                                    width={150}
                                    height={150}
                                />
                                <p>いつでも何度でも<br />講師に質問できる</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* カリキュラム */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Curriculum</h2>
                            <h3>カリキュラム</h3>
                            <p>
                                活躍できる高い技術の獲得を目指し、<br />Ansel Tech Academyは長く難しいカリキュラムを用意しています。
                            </p>
                        </div>
                        <div>
                            <div className={styles.curriculum_content}>
                                <div className={styles.curriculum_group}>
                                    <h2>フロントエンド入門</h2>
                                    <p>
                                        フロントエンド入門カリキュラムでは、HTML,CSSを中心に基礎的なマークアップ言語を学習します。全くプログラミングに触れたことのない方、フロントエンドに興味がある方はここから始めることをおすすめしています。
                                    </p>
                                </div>
                                <div className={styles.curriculum_img}>
                                    <Image
                                        src="/images/language-icon/html.png"
                                        alt="HTML"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src="/images/language-icon/css.png"
                                        alt="CSS"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src="/images/language-icon/sass.png"
                                        alt="SaSS"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                            <div className={styles.curriculum_content}>
                                <div className={styles.curriculum_group}>
                                    <h2>フロントエンド基礎</h2>
                                    <p>
                                        フロントエンド基礎カリキュラムでは、JavaScriptとそのフレームワーク・ライブラリを中心に学びます。学習できるフレームワークは、Vue.js,Next.jsです。ここを学び終えた頃には、簡単なWEB制作ができるようになります。                                    </p>
                                </div>
                                <div className={styles.curriculum_img}>
                                    <Image
                                        src="/images/language-icon/js.png"
                                        alt="JavaScript"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src="/images/language-icon/vue.png"
                                        alt="Vue"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src="/images/language-icon/next.png"
                                        alt="Next"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src="/images/language-icon/jquery.png"
                                        alt="jQuery"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                            <div className={styles.curriculum_content}>
                                <div className={styles.curriculum_group}>
                                    <h2>バックエンド入門</h2>
                                    <p>
                                        バックエンド入門カリキュラムでは、PHPとJavaを学ぶことができます。それぞれ片方だけでも両方でも受講することができますので、それぞれの志向性に応じて進めることが可能です。JavaのフレームワークはSpringBoot、PHPのフレームワークはLaravelです。
                                    </p>
                                </div>
                                <div className={styles.curriculum_img}>
                                    <Image
                                        src="/images/language-icon/java.png"
                                        alt="Java"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src="/images/language-icon/php.png"
                                        alt="PHP"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src="/images/language-icon/laravel.png"
                                        alt="Laravel"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                            <div className={styles.curriculum_content}>
                                <div className={styles.curriculum_group}>
                                    <h2>インフラクラウド基礎</h2>
                                    <p>
                                        インフラクラウド基礎カリキュラムでは、AWSを中心にクラウド技術を学びます。AWSは認定資格が豊富にそんざいするので、その取得を目指して学習を進めていきましょう。
                                    </p>
                                </div>
                                <div className={styles.curriculum_img}>
                                    <Image
                                        src="/images/language-icon/aws.png"
                                        alt="AWS"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src="/images/language-icon/docker.png"
                                        alt="Docker"
                                        width={100}
                                        height={100}
                                    />
                                    <Image
                                        src="/images/language-icon/linux.png"
                                        alt="Linux"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* スクール生の声 */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Voice</h2>
                            <h3>スクール生の声</h3>
                        </div>
                        <div className={styles.voice_container}>
                            <div className={styles.voice_content}>
                                <Image
                                    src="/images/voice/voice1.png"
                                    alt="東京都20代女性"
                                    width={315}
                                    height={218}
                                />
                                <h4>A.K</h4>
                                <h5>東京都/20代/女性</h5>
                                <p>
                                    私は全くの未経験からプログラミングを学習し始めました。HTML、CSSからはじめ、JavaScript、PHP、Linuxと一通りのカリキュラムを約1年ほど学習し、エンジニアとしてデビューしました。最初の案件を見つけるのにとても苦戦しましたが、WEB制作から入り、現在はJavaScriptを用いて開発業務に携わっています。
                                </p>
                            </div>
                            <div className={styles.voice_content}>
                                <Image
                                    src="/images/voice/voice2.png"
                                    alt="東京都20代女性"
                                    width={315}
                                    height={218}
                                />
                                <h4>K.O</h4>
                                <h5>東京都/20代/女性</h5>
                                <p>
                                    職業訓練校で元々ある程度プログラミング学習はしていましたが、それだけでは不安があったので、Ansel Techアカデミーを受講しました。元々少し触っていたにも関わらず、Techアカデミーは難しく、他の人よりも時間がかかりました。その分先生からちゃんとフィードバックを貰えたり、他の生徒と会話しながら学習ができるので、よかったです。
                                </p>
                            </div>
                            <div className={styles.voice_content}>
                                <Image
                                    src="/images/voice/voice3.png"
                                    alt="東京都20代女性"
                                    width={315}
                                    height={218}
                                />
                                <h4>Y.H</h4>
                                <h5>東京都/20代/男性</h5>
                                <p>
                                    とにかく難しいです。元々プロゲートを結構やっていたつもりでしたが、最初から全くわかりませんでした。ただ、調べたり先生に聞きながらカリキュラムを進めていくうちに、エンジニアとしてリサーチしながら仕事を進める感覚を掴むことができました。今はエンジニアの現場に入っていますが、苦労しながらも勉強して良かったと思っています。
                                </p>
                            </div>
                            <div className={styles.voice_content}>
                                <Image
                                    src="/images/voice/voice4.png"
                                    alt="東京都20代女性"
                                    width={315}
                                    height={218}
                                />
                                <h4>K.K</h4>
                                <h5>東京都/20代/女性</h5>
                                <p>
                                    私は全くの未経験からプログラミングを学習し始めました。HTML、CSSからはじめ、JavaScript、PHP、Linuxと一通りのカリキュラムを約1年ほど学習し、エンジニアとしてデビューしました。最初の案件を見つけるのにとても苦戦しましたが、Web制作から入り、現在はJavaSctiptを用いて開発業務に携わっています。
                                </p>
                            </div>
                            <div className={styles.voice_content}>
                                <Image
                                    src="/images/voice/voice5.png"
                                    alt="東京都20代女性"
                                    width={315}
                                    height={218}
                                />
                                <h4>R.S</h4>
                                <h5>東京都/20代/男性</h5>
                                <p>
                                    エンジニアにキャリアチェンジをしたいと思い、アンセルテックアカデミーを受けました。学習システムの仕組み上、他の生徒がどのくらい進んでいるか、どういうフィードバックを受けているか、どういうコードを書いているかが見れるので、1人ではなくみんなで勉強をしている感覚があり続けることができました。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 他スクールとの違い */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Difference</h2>
                            <h3>他スクールとの違い</h3>
                        </div>
                        <div className={styles.scroll_arrow}>
                            <p>scroll</p>
                            <Image
                                src="/images/arrow-icon/scroll-arrow.png"
                                alt=""
                                width={50}
                                height={7}
                            />
                        </div>
                        <div>
                            <table className={styles.myTable}>
                                <tbody>
                                    <tr>
                                        <th className={styles.th_space}></th>
                                        <th className={styles.ansel}>Ansel</th>
                                        <th className={styles.head}>A社</th>
                                        <th className={styles.head}>B社</th>
                                        <th className={styles.head}>C社</th>
                                    </tr>
                                    <tr>
                                        <td className={styles.column}>期間</td>
                                        <td className={styles.ansel_item}>6ヶ月〜</td>
                                        <td>1ヶ月</td>
                                        <td>1,4,6ヶ月</td>
                                        <td>3ヶ月</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.column}>担当講師</td>
                                        <td className={styles.ansel_item}>審査に通過した<br />現役のエンジニア</td>
                                        <td>なし</td>
                                        <td>非公開</td>
                                        <td>エンジニア</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.column}>価格</td>
                                        <td className={styles.ansel_item}>498,000円〜</td>
                                        <td>3,900円〜</td>
                                        <td>29,800円〜</td>
                                        <td>80,000円〜</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.column}>学習難易度</td>
                                        <td className={styles.ansel_item}>高い</td>
                                        <td>低い</td>
                                        <td>一般的</td>
                                        <td>一般的</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* 申込みの流れ */}
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className="p_heading">
                            <h2>Flow</h2>
                            <h3>申込みの流れ</h3>
                        </div>
                        <div className={styles.flow_container}>
                            <div className={styles.flow_content}>
                                <div className={styles.flow_ttl}>
                                    <p>1</p>
                                    <h4>お問い合わせ</h4>
                                </div>
                                <p>興味があれば応募フォームより面談の申込みをお願いします。</p>
                            </div>
                            <div className={styles.flow_content}>
                                <div className={styles.flow_ttl}>
                                    <p>2</p>
                                    <h4>無料面談</h4>
                                </div>
                                <p>エンジニアのキャリアに詳しい担当が、無料で面談を実施いたします。</p>
                            </div>
                            <div className={styles.flow_content}>
                                <div className={styles.flow_ttl}>
                                    <p>3</p>
                                    <h4>プラン確定</h4>
                                </div>
                                <p>あなたにあったプランを一緒に考え、学習プランを作成します。</p>
                            </div>
                            <div className={styles.flow_content}>
                                <div className={styles.flow_ttl}>
                                    <p>4</p>
                                    <h4>利用開始</h4>
                                </div>
                                <p className={styles.no_border}>学習環境を停止します。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.education_cta}>
                <div>
                    <div className={styles.education_inner}>
                        <div className={styles.education_cta_logo}>
                            <Image
                                src="/images/academy/cta-logo.png"
                                alt=""
                                width={261}
                                height={220}
                            />
                            <h4>
                                Ansel<br />
                                Tech<br />
                                Academy<br />
                            </h4>
                        </div>
                        <div className={styles.education_txt}>
                            <h5>
                                現役エンジニアに学ぶ<br />
                                ハイレベルプログラミングスクール
                            </h5>
                            <p>
                                厳選された現役エンジニアが講師を担当する、<br />
                                ハイレベルなプログラミングスクールを提供しています。<br />
                                スクール受講中は、IT系資格取得代を全額補助！
                            </p>
                            <a href="#" className={styles.counseling_cta}>
                                <p>無料カウンセリングに申込む</p>
                                <Image
                                    src="/images/arrow-icon/counseling-cta-arrow.svg"
                                    alt=""
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}