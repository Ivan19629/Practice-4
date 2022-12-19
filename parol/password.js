let password = 'zxcvbnm_';

if (password.length >= 5 && password.includes('_') || password.includes('-')) {
    alert('Пароль нормальный \u{1f388}')
    
} else {
    alert('Придумай другой пароль!')
}