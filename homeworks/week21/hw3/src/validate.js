export default function validateInfo(values) {
    let errors = {};

    if(!values.name.trim()) {
        errors.name = '姓名要填喔！'
    }
    if (!values.email) {
        errors.email = '信箱要填喔！';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = '信箱有誤，再檢查一下！';
    }
    if (!values.number) {
        errors.number = '電話要填喔！';
    } else if (values.number.length !== 10) {
        errors.number = '電話是10碼，再檢查一下！'
    }
    if (!values.type) {
        errors.type = '選一個！';
    }
    if (!values.howToKnow) {
        errors.howToKnow = '填一下辣～';
    }
    return errors;
}