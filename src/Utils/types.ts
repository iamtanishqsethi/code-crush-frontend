export type User = {
    firstName: string;
    lastName?:string
    emailId:string
    age?:number
    gender?:string
    photoUrl?: string;
    about?:string
    skills?:[string]
    _id:string
}

export type ChatObj = {
    senderId: {
        firstName: string,
        lastName?: string,
        photoUrl: string,
        _id: string
    }
    text: string,
}

export type Connection={
    firstName: string
    lastName?:string
    photoUrl: string
    _id: string
}

export type Request={
    fromUserId:{
        about: string
        firstName: string
        lastName?:string
        photoUrl: string
        _id: string
    }
    _id:string

}

