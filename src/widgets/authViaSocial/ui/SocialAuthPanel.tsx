import { GoogleBtn } from '@features/authViaSocialsButtons/authViaGoogle';
import styles from './SocialAuthPanel.module.scss';
import { AppleBtn } from '@features/authViaSocialsButtons/authViaApple';
import { GitHubBtn } from '@features/authViaSocialsButtons/authViaGitHub';
import { FacebookBtn } from '@features/authViaSocialsButtons/authViaFacebook';

export const SocialAuthPanel = () => {
    return (
        <div className={styles.SocialAuthPanel}>
            <div className={styles.orSignUpWith}>
                <span className={styles.line}></span>
                    <p className={styles.text}>Or sign up with</p>
                <span className={styles.line}></span>
            </div>
            <div className={styles.buttonsDiv}>
                <GoogleBtn/>
                <AppleBtn/>
                <GitHubBtn/>
                <FacebookBtn/>
            </div>
        </div>
    )
}