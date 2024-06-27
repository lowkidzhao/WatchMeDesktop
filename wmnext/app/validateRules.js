
export const validateIp = ({ getFieldValue }) => ({
    validator(rule, value) {
        if (!value) {
            console.log("通过："+value)
            return Promise.resolve();
        }
        return Promise.reject('IP不能为空!');
    }
});
