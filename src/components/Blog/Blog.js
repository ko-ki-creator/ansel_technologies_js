import Image from "next/image";
import Link from "next/link";
import styles from "./Blog.module.css";
import blogStyles from "../../styles/Home.module.css";

export const ArticleCard = ({url, blogImage, blogImageAlt, date, category, title}) => {
    return(
        <Link href={url} className={styles.p_blog_content}>
            <Image
                src={blogImage}
                alt={blogImageAlt}
                width={300}
                height={180}
            />
            <div className={blogStyles.blog_group}>
                <div className={blogStyles.blog_date_category}>
                    <p>{date}</p>
                    <p className={styles.category}>{category}</p>
                </div>
                <p>{title}</p>
            </div>
        </Link>
    );
};

export default ArticleCard;