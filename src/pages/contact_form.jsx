import { useForm } from "react-hook-form";
import styles from "../styles/ContactForm.module.css";
import formStyles from "../styles/Service_counseling.module.css";

export default function ContactForm() {

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
                    tel=${data.tel}&
                    hope=${data.hope}&
                    textarea=${data.textarea}`
                )
            })

            .then((response) => response.json())
            .then((result) => alert(result.message))
            .catch((error) => alert(error.message))
        }


    return(
        <main>
            <section>
                <div className="wrapper">
                    <div className="inner">
                        <div className={formStyles.form_heading}>
                            <h2>お問い合わせフォーム</h2>
                            <p>パートナー募集に関するお問い合わせ</p>
                            <p>お客様にご満足いただけるITソリューションを提供するため、共に成長できるビジネスパートナー様を積極的に募集しております。システム開発、Web構築、SESなどの領域でご興味がありましたら、以下のフォームの項目からご連絡お願いいたします。</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>お名前</p>
                                    <label for="name" className={formStyles.form_name}>
                                        <input
                                            type="text"
                                            name="name"
                                            className={formStyles.form_text}
                                            placeholder="山田 太郎"
                                            required
                                            {...register("name", { required: "お名前を入力してください。"})}
                                        />
                                        {errors.name && <span className={formStyles.form_error}>{errors.name.message}</span>}
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>メールアドレス</p>
                                    <label for="email" className={formStyles.form_email}>
                                        <input
                                            type="text"
                                            name="email"
                                            className={formStyles.form_text}
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
                                            type="text"
                                            name="tel"
                                            className={formStyles.form_text}
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
                                    <p className={formStyles.requied}>お問い合わせ内容</p>
                                    <label className={formStyles.form_textarea}>
                                        <textarea
                                            className={formStyles.textarea}
                                            name="textarea"
                                            placeholder="入力してください"
                                            {...register("textarea", {
                                                required: "お問い合わせ内容を入力してください。"
                                            })}
                                        ></textarea>
                                        {errors.textarea && <span className={formStyles.form_error}>{errors.textarea.message}</span>}
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