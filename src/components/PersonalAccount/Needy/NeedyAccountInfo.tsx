import styles from "@styles/PersonalAccount/Base/AccountInfoContainer.module.scss"
import AccountInfoContainer from '../Base/AccountInfoContainer';
import ProfilePhotoBlock from '../Base/ProfilePhotoBlock';
import ProfileInfoBlocks from '../Base/ProfileInfoBlocks';
import PhotoBlocks from "../Base/Profile/PhotoBlocks";

const NeedyAccountInfo = () => {
    return (
        <AccountInfoContainer
          name="Александр Александров"
          birthDate="20.01.2000"
          age={24}
          location="Москва"
          status="Нуждающийся"
          helpLink="#"
          helpText="Нужна помощь"
          person_photo="/PersonalAccount/account/profile_photos/needy_photo.svg"
        >
          <div className={styles.profile_title}>Профиль</div>
          <ProfilePhotoBlock photoSrc="/PersonalAccount/account/profile_photos/needy_photo.svg"/>
          <ProfileInfoBlocks showLanguages={false} />
          <button className={styles.save_btn}>Сохранить</button>
        </AccountInfoContainer>
      );
    }
export default NeedyAccountInfo
