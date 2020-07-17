import React from 'react';
import styles from './Form.module.css';
import doneIcon from '../../img/done.svg';

export default function Form({inputHandler, state}) {

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
                <label className={styles["display-none"]} htmlFor="innInputField">ИНН</label>
                <input id="innInputField"
                       className={styles["input-field"]}
                       type="number"
                       min="10"
                       name="inn"
                       onFocus={(event) => inputHandler(event, "Введите 10 или 12 цифр")}
                       onBlur={(event) => inputHandler(event, "ИНН организации или ИП")}
                       placeholder={state[0].inputPlaceholderValue}
                       required
                       value={state[0].inputValue}
                       onChange={inputHandler}
                />

                <span className={styles["input-verification-result-block"]}>12</span>
                <span className={styles["input-verification-result-block"]}>
                    <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                </span>

            </div>

            <div className={styles["input-wrapper"]}>
                <label className={styles["display-none"]} htmlFor="urlInputField">Сайт</label>
                <input id="urlInputField"
                       className={styles["input-field"]}
                       type="text"
                       name="site"
                       onFocus={(event) => inputHandler(event, "www.example.com")}
                       onBlur={(event) => inputHandler(event, "Сайт магазина")}
                       placeholder={state[1].inputPlaceholderValue}
                       required
                       value={state[1].inputValue}
                       onChange={inputHandler}
                />

                <span className={styles["input-verification-result-block"]}>
                    <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                </span>
            </div>

            <div className={styles["input-wrapper"]}>
                <label className={styles["display-none"]} htmlFor="emailInputField">Почта</label>
                <input id="emailInputField"
                       className={styles["input-field"]}
                       type="email"
                       name="email"
                       onFocus={(event) => inputHandler(event, "example@mail.com")}
                       onBlur={(event) => inputHandler(event, "Электронная почта")}
                       placeholder={state[2].inputPlaceholderValue}
                       required
                       value={state[2].inputValue}
                       onChange={inputHandler}
                />

                <span className={styles["input-verification-result-block"]}>
                    <img className={styles["icon-done"]} src={doneIcon} alt="Done"/>
                </span>
            </div>

            <div className={styles["input-wrapper"]}>
                <label className={styles["display-none"]} htmlFor="phoneInputField">Номер телефона</label>
                <input id="phoneInputField"
                       className={styles["input-field"]}
                       type="tel"
                       name="tel"
                       onFocus={(event) => inputHandler(event, "+7(999)999-99-99")}
                       onBlur={(event) => inputHandler(event, "Номер телефона")}
                       placeholder={state[3].inputPlaceholderValue}
                       required
                       value={state[3].inputValue}
                       onChange={inputHandler}
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