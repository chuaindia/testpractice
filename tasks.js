// Tasks

const stringLength = (string) =>
{
    const stringLength = string.length;
    try {
        if(stringLength<1) {
            throw new Error ("String Length must be greater than or equal to 1");
        }
        if(stringLength>10) {
            throw new Error ("String Length must be less than or equal to 10");
        }
    } 
    return stringLength;
}

