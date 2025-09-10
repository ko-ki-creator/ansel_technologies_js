import { useForm } from "react-hook-form";
import styles from "../styles/Recruit_entry.module.css";
import formStyles from "../styles/Service_counseling.module.css";

export default function EntryForm() {

    // バリデーションチェック
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        const api_url = 'apiのURL';

        fetch(api_url, {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encodeURI(
                `company=${data.company}&
                name=${data.name}&
                email=${data.email}&
                hope=${data.hope}&
                textarea=${data.textarea}&
                furigana=${data.furigana}`
            )
        })

        .then((response) => response.json())
        .then((result) => alert(result.message))
        .catch((error) => alert(error.message))
    }

    const hopeOptions = [
        "IT未経験者採用",
        "IT経験者採用",
        "営業職採用"
    ];

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>希望職種</p>
                                    <div className={formStyles.form_hope}>
                                        {hopeOptions.map((option, idx) => (
                                            <label key={option} className={formStyles.check_item}>
                                                <input
                                                    className={formStyles.checkbox}
                                                    type="checkbox"
                                                    value={option}
                                                    {...register("hope", {
                                                        validate: (value, formValues) => {
                                                            return (formValues.hope && formValues.hope.length > 0) || "1つチェックを入れてください。";
                                                        }
                                                    })}
                                                />{option}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>現在のお勤めの会社名<br />又は通っている学校名</p>
                                    <label for="name" className={formStyles.form_company}>
                                        <input
                                            className={formStyles.form_text}
                                            type="text"
                                            name="company"
                                            placeholder="株式会社Ansel Technologies"
                                            required
                                            {...register("company", { required: "会社名又は学校名を入力してください。"})}
                                        />
                                        {errors.company && <span className={formStyles.form_error}>{errors.company.message}</span>}
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>お名前</p>
                                    <label for="name" className={formStyles.form_name}>
                                        <input
                                            className={formStyles.form_text}
                                            type="text"
                                            name="name"
                                            placeholder="山田 太郎"
                                            required
                                            {...register("name", { required: "お名前を入力してください。"})}
                                        />
                                        {errors.name && <span className={formStyles.form_error}>{errors.name.message}</span>}
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>お名前（フリガナ）</p>
                                    <label for="name" className={formStyles.form_furigana}>
                                        <input
                                            className={formStyles.form_text}
                                            type="text"
                                            name="furigana"
                                            placeholder="ヤマダ タロウ"
                                            required
                                            {...register("furigana", { required: "カタカナで入力してください。"})}
                                        />
                                        {errors.furigana && <span className={formStyles.form_error}>{errors.furigana.message}</span>}
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>メールアドレス</p>
                                    <label for="email" className={formStyles.form_email}>
                                        <input
                                            className={formStyles.form_text}
                                            type="text"
                                            name="email"
                                            placeholder="yamada.taro@mail.com"
                                            required
                                            {...register("email", {
                                                required: "メールアドレスを入力してください。",
                                                pattern: {
                                                    value: /^[a^z0-9.]+@[a-z]+\.[a-z]+$/,
                                                    message: "emailの形式で入力してください。"
                                                }
                                            })}
                                        />
                                        {errors.email && <span className={formStyles.form_error}>{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>電話番号</p>
                                    <label for="tel" className={formStyles.form_tel}>
                                        <input
                                            className={formStyles.form_text}
                                            type="text"
                                            name="tel"
                                            placeholder="123-456-7890"
                                            required
                                            {...register("tel", {
                                                required: "半角で入力してください。",
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: "半角で入力してください。"
                                                }
                                            })}
                                        />
                                        {errors.tel && <span className={formStyles.form_error}>{errors.tel.message}</span>}
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>お問合せ・質問事項等</p>
                                    <label className={formStyles.form_textarea}>
                                        <textarea
                                            name="textarea"
                                            placeholder="入力してください"
                                            className={formStyles.textarea}
                                            {...register("textarea", {
                                                required: "お問い合わせ内容を入力してください。"
                                            })}
                                        ></textarea>
                                        {errors.textarea && <span className={formStyles.form_error}>{errors.textarea.message}</span>}
                                    </label>
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