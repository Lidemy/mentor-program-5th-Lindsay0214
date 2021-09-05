import React from 'react';
import validate from './validate';
import useForm from './useForm';
import "./index.css";

const FormSubmit = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm (
        submitForm,
        validate
    );

    return (
        <form onSubmit={handleSubmit} noValidate>
        <div className="form">
            <h1>新拖延運動報名表單</h1>
            <p>活動日期：2020/12/10 ~ 2020/12/11</p>
            <p>活動地點：台北市大安區新生南路二段 1 號</p>
            <br/><span className="alert">* 必填</span>
            
            <section>
            <label>
                <div> 暱稱: <span>*</span></div>
                <input
                type="text"
                name="name"
                placeholder="您的回答"
                value={values.name}
                onChange={handleChange}
                />
                {errors.name && <p className="alert">{errors.name}</p>}
            </label>

            <label>
                <div>電子郵件: <span>*</span></div>
                <input
                type="email"
                name="email"
                placeholder="您的電子郵件"
                value={values.email}
                onChange={handleChange}
                />
                {errors.email && <p className="alert">{errors.email}</p>}
                </label>

                <label>
                <div>手機號碼: <span>*</span></div>
                <input
                type="tel"
                name="number"
                placeholder="您的手機號碼"
                value={values.number}
                onChange={handleChange}
                />
                {errors.number && <p className="alert">{errors.number}</p>}
                </label>
            
            <label>
                <div>報名類型: <span>*</span></div>
                <input
                    type="radio"
                    className="radio"
                    name="type"
                    value="1"
                    checked={values.type === '1'}
                    onChange={handleChange}
                />躺在床上用想像力實作
                <br/>
                <input
                    type="radio"
                    className="radio"
                    name="type"
                    value="2"
                    checked={values.type === '2'}
                    onChange={handleChange}
                />趴在地上滑手機找現成的
                {errors.type && <p className="alert">{errors.type}</p>}
            </label>

            <label htmlFor="source">
                <div>怎麼知道這個活動的? <span>*</span></div>
                <input
                    type="text"
                    name="howToKnow"
                    placeholder="您的回答"
                    value={values.howToKnow}
                    onChange={handleChange}
                />
                {errors.howToKnow && <p className="alert">{errors.howToKnow} </p>}
            </label>

            <label htmlFor="other">
                <div className="other">其他</div>
                <p>對活動的一些建議</p>
                <br/><input type="text" name="advice" placeholder="您的回答"/>
            </label>
            </section>

            <input
            type="submit"
            className="btn"
            value="提交"
            />
            <p>請勿透過表單送出您的密碼。</p>
        </div>
    </form>

    )
}

export default FormSubmit;