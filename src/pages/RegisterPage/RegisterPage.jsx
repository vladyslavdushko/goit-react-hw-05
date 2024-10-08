import { useSelector } from 'react-redux';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { Navigate } from 'react-router-dom';
import styles from './RegisterPage.module.css';
import { selectIsLoggedInFire } from '../../redux/firebaseAuth/selectors';

const RegisterPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedInFire);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <div className={styles.register_contsiner}>
        <h2 className={styles.header}>Registration</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
