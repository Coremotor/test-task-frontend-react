import React from 'react';
import styles from './Form.module.css';
import doneIcon from '../../img/done.svg';

export default function Form() {
    return (

        <form action="https://echo.htmlacademy.ru/" className={styles.form} method="post" name="form">
            <h1 className={styles.title}>Регистрация</h1>

            <div className={styles["buttons-wrapper"]}>
                <button className={[styles.btn, styles["btn-resident"]].join(' ')} type="button">Резидент России
                </button>

                <button className={[styles.btn, styles["btn-non-resident"]].join(' ')} type="button">Нерезидент
                </button>
            </div>

            <div className={styles["input-wrapper"]}>
                <label className={styles["display-none"]} htmlFor="form__inn-field">ИНН</label>
                <input id="form__inn-field"
                       className={styles["input-field"]}
                       type="number"
                       min="10"
                       name="inn"
                       placeholder="ИНН организации или ИП"
                       required
                />

                <span className={styles["input-verification-result-block"]}>12</span>
                <span className={styles["input-verification-result-block"]}>
                            <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                        </span>

            </div>

            <div className={styles["input-wrapper"]}>
                <label className={styles["display-none"]} htmlFor="form__site-field">Сайт</label>
                <input id="form__site-field"
                       className={styles["input-field"]}
                       type="text"
                       name="site"
                       placeholder="Сайт магазина"
                       required
                />

                <span className={styles["input-verification-result-block"]}>
                        <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                    </span>
            </div>

            <div className={styles["input-wrapper"]}>
                <label className={styles["display-none"]} htmlFor="form__email-field">Почта</label>
                <input id="form__email-field"
                       className={styles["input-field"]}
                       type="email"
                       name="email"
                       placeholder="Электронная почта"
                       required
                />

                <span className={styles["input-verification-result-block"]}>
                        <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                    </span>
            </div>

            <div className={styles["input-wrapper"]}>
                <label className={styles["display-none"]} htmlFor="form__phone-field">Номер телефона</label>
                <input id="form__phone-field"
                       className={styles["input-field"]}
                       type="tel"
                       name="tel"
                       placeholder="Номер телефона"
                       required
                />

                <span className={styles["input-verification-result-block"]}>
                        <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                    </span>
            </div>

            <button className={styles["btn-submit-disabled"]} type="submit"
                    disabled>Зарегистрироваться
            </button>

            <span className={styles.text}>Нажимая на кнопку, вы принимаете&nbsp;
                    <a href="http://localhost:3000" className={styles.link}>Правила и условия</a>
                </span>
        </form>

    )
}