import React from "react";
import styles from "../styles/UserInfo.module.css";
import { FaTint, FaUserMd, FaRulerVertical, FaHome, FaPhone, FaHospital } from "react-icons/fa";
import DefaultProfile from "../assets/user.png";

const dummyUser = {
  name: "佐藤 春子",
  birthday: "1977.01.01",
  blood_group: "O型",
  disease: "高血圧, 糖尿病",
  height: 165,
  home_address: "ソウル特別市瑞草区ウルゴン1 123号",
  contact: "010-1234-5678",
  hospital_contact: "ソウル大学病院 02-123-4567",
};

const infoRows = [
  { icon: <FaTint />, label: "血液型", value: dummyUser.blood_group },
  { icon: <FaUserMd />, label: "持病", value: dummyUser.disease },
  { icon: <FaRulerVertical />, label: "身長", value: `${dummyUser.height}cm` },
  { icon: <FaHome />, label: "住所", value: dummyUser.home_address },
  { icon: <FaPhone />, label: "緊急連絡先", value: dummyUser.contact },
  { icon: <FaHospital />, label: "連携病院", value: dummyUser.hospital_contact },
];

const UserInfo = () => (
  <div className={styles.container}>
    <div className={styles.profileSection}>
      <div className={styles.profileImage}>
        {/* 실제 이미지는 <img src={DefaultProfile} ... /> */}
      </div>
      <div className={styles.infoMain}>
        <div className={styles.name}>{dummyUser.name}</div>
        <div className={styles.birth}>{dummyUser.birthday}</div>
      </div>
    </div>
    <div className={styles.infoList}>
      {infoRows.map((row, idx) => (
        <div className={styles.infoRow} key={idx}>
          <span className={styles.infoIcon}>{row.icon}</span>
          <span className={styles.label}>{row.label}</span>
          <span className={styles.value}>{row.value}</span>
        </div>
      ))}
    </div>
    <button className={styles.editButton}>
      情報を修正
    </button>
  </div>
);

export default UserInfo;
