import {checkResponse} from "../checkResponse";

// export async function sendMessage (message: string) {
//
//
//     let option:RequestInit={
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//         },
//         body: message
//     }
//      return await fetch("https://api.web3forms.com/submit",option).then((res) => res.json());
// }

export async function sendMessage (formData: FormData){
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
        let option:RequestInit={
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json
    }
    return await fetch("https://api.web3forms.com/submit",option).then((res) => res.json());
}

//  export const res = await fetch("https://api.web3forms.com/submit", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//     },
//     body: json
// }).then((res) => res.json());