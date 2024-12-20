export function normalizeCepNumber(value) {
    if (!value)  {
        return '';
    }

    return value.replace(/\D/g,'')
    .replace(/(\d{5})(\d)/,'$1-$2'); 
};

export function normalizePhoneNumber(value) {
    if (!value) {
        return '';
    }

    return value.replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})(\d+?)/, '$1');
}

function normalizeCnpjNumber(value) {
    if (!value) return ''
    
    return value.replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
}



