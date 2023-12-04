import React from "react";
import GmailIcon from "./gmail.png";

const AuthPage = () => {
  return (
    <div className={styles.page}>
      <img src={GmailIcon} alt="Gmail" />

      {/* {isCreateNew ? (
        <Fragment>
          <FormRegister isLoading={isLoading} error={error} />
          <button className={styles.link} onClick={toggleIsCreateNew}>
            Login an existing account
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <FormLogin isLoading={isLoading} error={error} user={user} />
          <button className={styles.link} onClick={toggleIsCreateNew}>
            Create a new account
          </button>
        </Fragment>
      )} */}
    </div>
  );
};

export default AuthPage;
