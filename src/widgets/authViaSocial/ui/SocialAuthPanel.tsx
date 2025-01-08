import { GoogleBtn } from '@features/authViaSocialsButtons/authViaGoogle';
import styles from './SocialAuthPanel.module.scss';

export const SocialAuthPanel = () => {
    return (
        <div className={styles.SocialAuthPanel}>
            <GoogleBtn/>
        </div>
    )
}