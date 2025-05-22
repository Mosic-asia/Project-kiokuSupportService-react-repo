// EmergencyContact.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/EmergencyContact.module.css";
import { FaPhoneAlt } from "react-icons/fa";

const dummyContacts = [
  { id: 1, name: "代表番号", contact: "090-1234-5678" },
  { id: 2, name: "電話番号1", contact: "090-1234-5678" },
  { id: 3, name: "電話番号2", contact: "090-1234-5678" },
];

const EmergencyContact = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.title}>緊急連絡先</div>
      <div className={styles.iconBox}>
        <FaPhoneAlt className={styles.phoneIcon} />
      </div>
      <div className={styles.mainContact}>{dummyContacts[0].contact}</div>
      <div className={styles.subContacts}>
        {dummyContacts.slice(1).map(c => (
          <div key={c.id} className={styles.subContact}>{c.contact}</div>
        ))}
      </div>
      <button className={styles.editButton} onClick={() => navigate("/emergency-contact/edit")}>
        修正
      </button>
    </div>
  );
};

export default EmergencyContact;
