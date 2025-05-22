import React, { useState } from "react";
import styles from "../styles/UserInfo.module.css";
import DefaultProfile from "../assets/user.png";

const bloodTypes = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

// 시안과 명세서에 맞는 더미 데이터
const dummyUser = {
  name: "佐藤 春子",
  birthday: "1977.01.01",
  blood_group: "O+",
  disease: "高血圧, 糖尿病",
  height: 155,
  weight: 55,
  home_address: "ソウル特別市瑞草区ウルゴン1 123号",
  contact: "010-1234-5678",
  hospital_contact: "ソウル大学病院 02-123-4567",
};

const UserInfoEdit = () => {
  const [user, setUser] = useState(dummyUser);
  const [success, setSuccess] = useState(false);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      window.location.href = "/my-info";
    }, 1000);
  };

  return (
    <div className={styles.container}>

      <form className={styles.profileSection} onSubmit={handleSubmit}>
        <img src={DefaultProfile} alt="프로필" className={styles.profileImage} />
        <button type="button" className={styles.imageRemoveButton}>イメージを削除</button>
        <div className={styles.infoEditList}>
          <input className={styles.input} name="name" value={user.name} onChange={handleChange} placeholder="名前" required />
          <input className={styles.input} name="home_address" value={user.home_address} onChange={handleChange} placeholder="自宅の住所" required />
          <input className={styles.input} name="disease" value={user.disease} onChange={handleChange} placeholder="持病" />
          <input className={styles.input} name="hospital_contact" value={user.hospital_contact} onChange={handleChange} placeholder="連携病院" />
          <input className={styles.input} name="contact" value={user.contact} onChange={handleChange} placeholder="連絡先" required />
          <select className={styles.input} name="blood_group" value={user.blood_group} onChange={handleChange}>
            <option value="">血液型</option>
            {bloodTypes.map(bt => (
              <option key={bt} value={bt}>{bt}</option>
            ))}
          </select>
          <input className={styles.input} name="weight" value={user.weight} onChange={handleChange} placeholder="体重" type="number" />
          <input className={styles.input} name="height" value={user.height} onChange={handleChange} placeholder="身長" type="number" />
          <input className={styles.input} name="birthday" value={user.birthday} onChange={handleChange} placeholder="生年月日 (YYYY-MM-DD)" required />
        </div>
        <button className={styles.saveButton} type="submit">
          修正を完了
        </button>
        {success && <div className={styles.success}>保存しました</div>}
      </form>
    </div>
  );
};

export default UserInfoEdit;
