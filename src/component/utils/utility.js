export const getNameInitials = (name) => {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
    let nameinitials = (name) ? [...name.matchAll(rgx)] || [] : '';
    if(nameinitials){
    nameinitials = (
        (nameinitials.shift()?.[1] || '') + (nameinitials.pop()?.[1] || '')
    ).toUpperCase();}
    return nameinitials;
}

export const capitalizeFirstLowercaseRest = str => {
    return (
        str.charAt(0).toUpperCase() + str.slice(1)
    );
};

export const checkPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;