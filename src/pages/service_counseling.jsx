import { useForm } from "react-hook-form";
import styles from "../styles/Service_counseling.module.css";

export default function CounselingForm() {

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
                `name=${data.name}&
                email=${data.email}&
                hope=${data.hope}&
                textarea=${data.textarea}`
            )
        })

        .then((response) => response.json())
        .then((result) => alert(result.message))
        .catch((error) => alert(error.message))
    }

    const hopeOptions = [
        "カリキュラムを受講したい",
        "まずは面談して決めたい",
        "自社の社員にカリキュラムを提供したい",
        "その他"
    ];

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.form_container}>
                                <div className={styles.form_content}>
                                    <p className={styles.requied}>お名前</p>
                                    <label for="name" className={styles.form_name}>
                                        <input
                                            type="text"
                                            name="name"
                                            className={styles.form_text}
                                            placeholder="山田 太郎"
                                            required
                                            {...register("name", { required: "お名前を入力してください。"})}
                                        />
                                        {errors.name && <span className={styles.form_error}>{errors.name.message}</span>}
                                    </label>
                                </div>
                                <div className={styles.form_content}>
                                    <p className={styles.requied}>メールアドレス</p>
                                    <label for="email" className={styles.form_email}>
                                        <input
                                            type="text"
                                            name="email"
                                            className={styles.form_text}
                                            placeholder="yamada.taro@mail.com"
                                            required
                                            {...register("email", {
                                                required: "メールアドレスを入力してください",
                                                pattern: {
                                                    value: /^[a^z0-9.]+@[a-z]+\.[a-z]+$/,
                                                    message: "emailの形式で入力してください。"
                                                }
                                            })}
                                        />
                                        {errors.email && <span className={styles.form_error}>{errors.email.message}</span>}
                                    </label>
                                </div>
                                <div className={styles.form_content}>
                                    <p className={styles.requied}>電話番号</p>
                                    <label for="tel" className={styles.form_tel}>
                                        <input
                                            type="text"
                                            name="tel"
                                            className={styles.form_text}
                                            placeholder="00011112222"
                                            required
                                            {...register("tel", {
                                                required: "電話番号は半角で入力してください。",
                                                pattern: {
                                                    value: /^[0-9]+$/,
                                                    message: "電話番号は半角で入力してください。"
                                                }
                                            })}
                                        />
                                        {errors.tel && <span className={styles.form_error}>{errors.tel.message}</span>}
                                    </label>
                                </div>
                                <div className={styles.form_content}>
                                    <p className={styles.requied}>ご希望内容</p>
                                    <lable className={styles.form_hope}>
                                        {hopeOptions.map((option, idx) => (
                                            <label key={option} className={styles.check_item}>
                                                <input
                                                    className={styles.checkbox}
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
                                        <input
                                            type="text"
                                            name="other"
                                            className={` ${styles.form_text} ${styles.other}`}
                                            placeholder="入力してください"
                                            {...register("other")}
                                        />
                                        {errors.hope && (
                                            <p className={styles.form_error}>{errors.hope.message}</p>
                                        )}
                                    </lable>
                                </div>
                                <div className={styles.form_content}>
                                    <p className={styles.requied}>お問い合わせ内容</p>
                                    <label className={styles.form_textarea}>
                                        <textarea
                                            id="body"
                                            name="textarea"
                                            placeholder="入力してください"
                                            className={styles.textarea}
                                            {...register("textarea", {
                                                required: "お問い合わせ内容を入力してください。"
                                            })}
                                        ></textarea>
                                        {errors.textarea && <span className={styles.form_error}>{errors.textarea.message}</span>}
                                    </label>
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