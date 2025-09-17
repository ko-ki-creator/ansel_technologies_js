import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import styles from "./Slider.module.css";

export const Slider = () => {
    return (
        <>
            <Splide
                className={styles.sliderWrapper}
                aria-label='ギャラリー'
                options={{
                    autoplay: true, //自動再生を有効
                    interval: 4000, //4秒
                    type: "loop", //無限ループ
                    perPage: 1, //1枚ずつ表示
                }}
            >
                <SplideSlide>
                    <img
                        className={styles.slide_img}
                        src="/images/company/company-img1.png"
                        alt="ギャラリー"
                    />
                </SplideSlide>
                <SplideSlide>
                    <img
                        className={styles.slide_img}
                        src="/images/company/company-img2.png"
                        alt="ギャラリー"
                    />
                </SplideSlide>
                <SplideSlide>
                    <img
                        className={styles.slide_img}
                        src="/images/company/company-img3.png"
                        alt="ギャラリー"
                    />
                </SplideSlide>
                <SplideSlide>
                    <img
                        className={styles.slide_img}
                        src="/images/company/company-img4.png"
                        alt="ギャラリー"
                    />
                </SplideSlide>
                <SplideSlide>
                    <img
                        className={styles.slide_img}
                        src="/images/company/company-img5.png"
                        alt="ギャラリー"
                    />
                </SplideSlide>
            </Splide>

            <style jsx>{`
                .slide-img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            `}</style>
        </>
    );
};

export default Slider;