export const newlySignedInUserName = (email: string) => {
    return `${email.split("@")[0]}`
}