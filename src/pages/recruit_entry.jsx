import { useForm } from "react-hook-form";
import styles from "../styles/Recruit_entry.module.css";
import formStyles from "../styles/Service_counseling.module.css";

export default function EntryForm() {
    return(
        <main>
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className={formStyles.form_heading}>
                            <h2>採用エントリーフォーム</h2>
                            <p>
                                以下のフォームよりご応募ください。いただいたメールに担当者よりご連絡いたします。
                            </p>
                        </div>
                        <form>
                            <div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>希望職種</p>
                                    <label for="hope">
                                        <label className={formStyles.check_item}>
                                            <input
                                                className={formStyles.checkbox}
                                                type="checkbox"
                                                name="hope"
                                                value="IT未経験者採用"
                                            />IT未経験者採用
                                        </label>
                                        <label className={formStyles.check_item}>
                                            <input
                                                className={formStyles.checkbox}
                                                type="checkbox"
                                                name="hope"
                                                value="IT経験者採用"
                                            />IT経験者採用
                                        </label>
                                        <label className={formStyles.check_item}>
                                            <input
                                                className={formStyles.checkbox}
                                                type="checkbox"
                                                name="hope"
                                                value="営業職採用"
                                            />営業職採用
                                        </label>
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>現在のお勤めの会社名<br />又は通っている学校名</p>
                                    <label for="name">
                                        <input
                                            className={formStyles.form_text}
                                            type="text"
                                            name="company"
                                            placeholder="株式会社Ansel Technologies"
                                            required
                                        />
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>お名前</p>
                                    <label for="name">
                                        <input
                                            className={formStyles.form_text}
                                            type="text"
                                            name="name"
                                            placeholder="山田 太郎"
                                            required
                                        />
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>お名前（フリガナ）</p>
                                    <label for="name">
                                        <input
                                            className={formStyles.form_text}
                                            type="text"
                                            name="furigana"
                                            placeholder="ヤマダ タロウ"
                                            required
                                        />
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>メールアドレス</p>
                                    <label for="email">
                                        <input
                                            className={formStyles.form_text}
                                            type="text"
                                            name="email"
                                            placeholder="yamada.taro@mail.com"
                                            required
                                        />
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>電話番号</p>
                                    <label for="tel">
                                        <input
                                            className={formStyles.form_text}
                                            type="text"
                                            name="tel"
                                            placeholder="123-456-7890"
                                            required
                                        />
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>お問合せ・質問事項等</p>
                                    <textarea
                                        name="textarea"
                                        placeholder="入力してください"
                                        className={formStyles.textarea}
                                    ></textarea>
                                </div>
                                <h3 className={styles.file_upload}>ファイルアップロード</h3>
                                <p className={styles.file_txt}>
                                    全てのファイルを合わせて50MBまでアップロードできます。<br />
                                    ※.zip, .mp4などの一部の形式のファイルはアップロードできません。<br />
                                    ※スマートフォンやタブレットからは、iCloudやGoogleドライブ等のクラウドストレージ経由でファイルをアップロードできないことがあります。
                                </p>
                                <div className={formStyles.form_content}>
                                    <p className={styles.no_requied}>履歴書</p>
                                    <label for="file">
                                        <input type="file" name="file" className={styles.form_file} placeholder="ファイルを選択" />
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={styles.no_requied}>職務経歴書</p>
                                    <label for="file">
                                        <input type="file" name="file" className={styles.form_file} placeholder="ファイルを選択" />
                                    </label>
                                </div>
                                <div className={formStyles.submit_btn}>
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