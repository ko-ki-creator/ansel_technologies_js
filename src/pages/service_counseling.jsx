import styles from "../styles/Service_counseling.module.css";

export default function CounselingForm() {
    return(
        <main>
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className={styles.form_heading}>
                            <h2>カウンセリング申込フォーム</h2>
                            <p>
                                Ansel Tech Academyの面談を希望される方は、こちらからフォーム送信をお願いします。<br />
                                記載いただいたメールアドレスにご返信いたします。
                            </p>
                        </div>
                        <form>
                            <div className={styles.form_container}>
                                <div className={styles.form_content}>
                                    <p className={styles.requied}>お名前</p>
                                    <label for="name" className={styles.name}>
                                        <input type="text" name="name" className={styles.form_text} placeholder="山田 太郎" required />
                                    </label>
                                </div>
                                <div className={styles.form_content}>
                                    <p className={styles.requied}>メールアドレス</p>
                                    <label for="email" className={styles.email}>
                                        <input type="text" name="email" className={styles.form_text} placeholder="yamada.taro@mail.com" required />
                                    </label>
                                </div>
                                <div className={styles.form_content}>
                                    <p className={styles.requied}>電話番号</p>
                                    <label for="tel" className={styles.tel}>
                                        <input type="text" name="tel" className={styles.form_text} placeholder="123-456-7890" required />
                                    </label>
                                </div>
                                <div className={styles.form_content}>
                                    <p className={styles.requied}>ご希望内容</p>
                                    <label for="hope" className="hope">
                                        <label className={styles.check_item}>
                                            <input
                                                className={styles.checkbox}
                                                type="checkbox"
                                                name="hope"
                                                value="カリキュラムを受講したい"
                                            />カリキュラムを受講したい
                                        </label>
                                        <label className={styles.check_item}>
                                            <input
                                                className={styles.checkbox}
                                                type="checkbox"
                                                name="hope"
                                                value="まずは面談して決めたい"
                                            />まずは面談して決めたい
                                        </label>
                                        <label className={styles.check_item}>
                                            <input
                                                className={styles.checkbox}
                                                type="checkbox"
                                                name="hope"
                                                value="自社の社員にカリキュラムを提供したい"
                                            />自社の社員にカリキュラムを提供したい
                                        </label>
                                        <label className={styles.check_item}>
                                            <input
                                                className={styles.checkbox}
                                                type="checkbox"
                                                name="hope"
                                                value="その他"
                                            />その他
                                        </label>
                                        <input
                                            type="text"
                                            name="other"
                                            className={` ${styles.form_text} ${styles.other}`}
                                            placeholder="入力してください"
                                        />
                                    </label>
                                </div>
                                <div className={styles.form_content}>
                                    <p className={styles.requied}>お問い合わせ内容</p>
                                    <textarea name="textarea" placeholder="入力してください" className={styles.textarea}></textarea>
                                </div>
                                <div className={styles.submit_btn}>
                                    <button type="submit">送信する</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </main>
    );
};