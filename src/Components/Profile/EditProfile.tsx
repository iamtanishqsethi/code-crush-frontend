import {Button} from "@/Components/ui/button.tsx";
import {Check} from "lucide-react";
import {CardContent, CardHeader, CardTitle} from "@/Components/ui/card.tsx";
import {Label} from "@/Components/ui/label.tsx";
import {Input} from "@/Components/ui/input.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/Components/ui/select.tsx";
import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addUser} from "@/Utils/slice/userSlice.ts";
import { toast } from "sonner"
import {BASE_URL} from "@/Utils/constants.ts";
import {User} from "@/Utils/types.ts";


type EditProfileProps = {
    user:User
    setEdit:Dispatch<SetStateAction<boolean>>
}


const EditProfile=({user,setEdit}:EditProfileProps)=>{
    const dispatch = useDispatch();
    const {firstName, lastName, emailId ,age,gender,photoUrl,about,skills=[]} = user

    const [image, setImage] = useState<File | null>(null);

    const[firstNameValue, setFirstNameValue] = useState<string>(firstName);
    const[lastNameValue, setLastNameValue] = useState<string|undefined>(lastName);
    const [ageValue, setAgeValue] = useState<number|undefined>(age)
    const [genderValue, setGenderValue] = useState<string|undefined>(gender)
    const [photoUrlValue, setPhotoUrlValue] = useState<string|undefined>(photoUrl)
    const [aboutValue, setAboutValue] = useState<string|undefined>(about)
    const [skillsValue, setSkillsValue] = useState<string[]>(skills)


    const uploadImage=async ()=>{
        if(!image) return

        const formData = new FormData();
        formData.append('file',image);
        formData.append('upload_preset','uploadPreset1')
        formData.append('cloud_name','de0bov9ct')

        try{
            const response=await axios.post<{secure_url:string}>('https://api.cloudinary.com/v1_1/de0bov9ct/image/upload',formData)
            const  imageUrl=response?.data?.secure_url
            setPhotoUrlValue(imageUrl)
            toast.success("Image uploaded successfully.")
        }
        catch (error) {
            console.error('Error uploading image:', error);
            toast.error("Error uploading image");
        }
    }

    const handleFileChange=(e:ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleUpdate=async ()=>{
        try{
            const response=await axios.patch(BASE_URL+"/api/profile/edit",{
                firstName:firstNameValue,
                lastName:lastNameValue,
                age:ageValue,
                gender:genderValue,
                photoUrl:photoUrlValue,
                about:aboutValue,
                skills:skillsValue,
            },{withCredentials:true})
            dispatch(addUser(response?.data?.data))
            toast.success("Profile updated successfully")
            setEdit(false);


        }catch(error){
            console.error('Error updating profile:', error);
            toast.error("Error updating profile");
        }
    }

    return (
        <div className={'min-h-screen w-full'}>
            <Button
                onClick={handleUpdate}
                className={'absolute right-10  top-24  bg-zinc-300/30 text-black hover:bg-zinc-300 dark:bg-zinc-700/30 dark:text-white'}>
                <Check/> Update Profile
            </Button>
            <div className={'h-full flex flex-col md:flex-row items-center justify-between w-full px-4 space-y-4 md:space-y-0 md:px-20 py-8 '}>
                <div className={'w-full  h-[48%] md:h-full md:w-[49%] bg-zinc-700/30 rounded-lg p-4 '}>
                    <CardHeader className={'text-center'}>
                        <CardTitle className={'text-2xl font-medium '}>Update Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 my-3">
                        <div className={'flex items-center justify-between w-full'}>
                            <div className="space-y-2 w-[48%]">
                                <Label htmlFor={'firstName'}>First Name</Label>
                                <Input
                                    id='firstName'
                                    type={"text"}
                                    value={firstNameValue}
                                    onChange={(e:ChangeEvent<HTMLInputElement>) => setFirstNameValue(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2 w-[48%]">
                                <Label htmlFor={'lastName'}>Last Name</Label>
                                <Input
                                    id='lastName'
                                    type={"text"}
                                    value={lastNameValue}
                                    onChange={(e:ChangeEvent<HTMLInputElement>) => setLastNameValue(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" >Email</Label>
                            <Input
                                id="email"
                                type={"email"}
                                value={emailId}
                                readOnly={true}
                            />
                        </div>
                        <div className={'flex items-center justify-between w-full'}>
                            <div className="space-y-2 w-[48%]">
                                <Label htmlFor={'age'}>Age</Label>
                                <Input
                                    id='age'
                                    type={"number"}
                                    value={ageValue}
                                    onChange={(e:ChangeEvent<HTMLInputElement>)=>setAgeValue(Number(e.target.value))}
                                />
                            </div>
                            <div className="space-y-2 w-[48%] ">
                                <Label >Gender</Label>
                                <Select onValueChange={(value:string) => setGenderValue(value)} value={genderValue} >
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="others">Others</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="about" >About</Label>
                            <Input
                                id="about"
                                type={"text"}
                                value={aboutValue}
                                onChange={(e:ChangeEvent<HTMLInputElement>) => setAboutValue(e.target.value)}

                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="skills" >Skills (Comma seperated)</Label>
                            <Input
                                id="skills"
                                type={"text"}
                                value={skillsValue}
                                onChange={(e:ChangeEvent<HTMLInputElement>)=>setSkillsValue(e.target.value.split(","))}
                            />
                        </div>
                    </CardContent>


                </div>
                <div className={'w-full h-[50%] md:h-full md:w-[49%] py-5 bg-zinc-700/30 rounded-lg flex flex-col items-center justify-center space-y-4'}>
                    <img src={photoUrlValue} alt={"profile photo"}
                         className={'w-72 h-72 rounded-lg'}
                    />
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    <label
                        htmlFor="file-upload"
                        className=" cursor-pointer px-4 py-2 bg-zinc-600 text-white text-center font-medium rounded-md hover:bg-zinc-700 flex items-center justify-center gap-2 mb-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                        </svg>
                        Choose File
                    </label>

                    <button
                        onClick={uploadImage}
                        disabled={!image}
                        className={` px-4 py-2 text-white text-center font-medium rounded-md ${
                            image ? "bg-indigo-600 hover:bg-indigo-700" : "bg-indigo-600/50 cursor-not-allowed"
                        }`}
                    >
                        Upload Image
                    </button>
                    {image && (
                        <div className="w-[80%] bg-zinc-800 text-zinc-200 px-3 py-2 rounded mb-3 text-sm truncate text-center">
                            Selected: {image.name}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default EditProfile;