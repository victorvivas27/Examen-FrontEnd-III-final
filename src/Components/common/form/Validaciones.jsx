export const validateFields = data => {
    const errors = {};

    if (!data.nombre.trim()) {
        errors.nombre = 'El nombre es requerido. ¡Por favor verifique su información nuevamente!';
    } else if (data.nombre.trim().length <= 5) {
        errors.nombre = 'El nombre debe tener más de 5 caracteres. ¡Por favor verifique su información nuevamente!';
    } else if (!/^[A-Za-z0-9\s]+$/.test(data.nombre.trim())) {
        errors.nombre = 'El nombre no debe contener caracteres especiales. ¡Por favor verifique su información nuevamente!';
    }

    if (!data.email.trim()) {
        errors.email = 'El email es requerido. ¡Por favor verifique su información nuevamente!';
    } else if (!isValidEmail(data.email)) {
        errors.email = 'El formato del email es incorrecto. ¡Por favor verifique su información nuevamente!';
    }

    return errors;
};

const isValidEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};