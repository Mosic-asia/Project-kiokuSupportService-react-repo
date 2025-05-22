// EmergencyContactEdit.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/EmergencyContact.module.css";

const dummyContacts = [
  { id: 1, name: "代表番号", contact: "090-1234-5678" },
  { id: 2, name: "電話番号1", contact: "090-1234-5678" },
  { id: 3, name: "電話番号2", contact: "090-1234-5678" },
];

const EmergencyContactEdit = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (idx, value) => {
    setContacts(prev =>
      prev.map((c, i) => (i === idx ? { ...c, contact: value } : c))
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate("/emergency-contact");
    }, 1200);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>緊急連絡先</div>
      <form className={styles.form} onSubmit={handleSubmit}>
        {contacts.map((c, idx) => (
          <input
            key={c.id}
            className={styles.editInput}
            value={c.contact}
            onChange={e => handleChange(idx, e.target.value)}
            placeholder={c.name}
            required
          />
        ))}
        <button className={styles.saveButton} type="submit">
          修正を完了
        </button>
        {success && <div className={styles.success}>保存しました</div>}
      </form>
    </div>
  );
};

export default EmergencyContactEdit;
