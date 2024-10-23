import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <h2>Contactez-moi</h2>
      <form>
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <textarea placeholder="Votre message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
