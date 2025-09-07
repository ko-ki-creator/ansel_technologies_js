import styles from "../styles/ContactForm.module.css";
import formStyles from "../styles/Service_counseling.module.css";

export default function ContactForm() {
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
                        <form>
                            <div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>お名前</p>
                                    <label for="name">
                                        <input type="text" name="name" className={formStyles.form_text} placeholder="山田 太郎" required />
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>メールアドレス</p>
                                    <label for="email">
                                        <input type="text" name="email" className={formStyles.form_text} placeholder="yamada.taro@mail.com" required />
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>電話番号</p>
                                    <label for="tel">
                                        <input type="text" name="tel" className={formStyles.form_text} placeholder="123-456-7890" required />
                                    </label>
                                </div>
                                <div className={formStyles.form_content}>
                                    <p className={formStyles.requied}>お問い合わせ内容</p>
                                    <textarea className={formStyles.textarea} name="textarea" placeholder="入力してください"></textarea>
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