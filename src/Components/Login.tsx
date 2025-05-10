import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {Tabs, TabsContent, TabsList, TabsTrigger,} from "./ui/tabs"
import {ChangeEvent, useState} from "react";
import  axios from "axios";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addUser} from "@/Utils/userSlice.ts";
import { toast } from "sonner"
import NavBar from "@/Components/NavBar.tsx";
import {BASE_URL} from "@/Utils/constants.ts";
import { MagicCard } from "@/Components/magicui/magic-card";
import {useTheme} from "@/Components/Theme-Provider.tsx";
import { InteractiveHoverButton } from "@/Components/magicui/interactive-hover-button"
const Login=()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { theme } = useTheme();

    const [tabValue,setTabValue]=useState<string>("login")
    const [emailId,setEmailId]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const [firstName,setFirstName]=useState<string>("")
    const [message,setMessage]=useState<string>("")


    const handleLogin=async()=>{

        try{
            const response=await axios.post(BASE_URL+"/user/login",{
                emailId,
                password,
            },{
                withCredentials:true,
            })
            // setMessage("Login successful!")
            dispatch(addUser(response?.data))
            navigate("/feed")
            console.log(response)
            toast.success("Login successful!")
        }
        catch(err){
            // setMessage("Something went wrong")
            if (axios.isAxiosError(err)) {
                toast.error(err.response?.data?.message || "Signup failed");
            } else {
                toast.error("Internal server error");
            }
        }

    }
    const handleSignup=async()=>{
        try{
            const response=await axios.post(BASE_URL+"/user/signUp",{
                firstName,
                emailId,
                password,
            },{
                withCredentials:true,
            })
            setMessage("SignUp successful!")
            dispatch(addUser(response?.data))
            navigate("/profile")
            console.log(response)
            toast.message("SignUp successful!",{
                description:"Complete Profile Details "
            })

        }catch(err){
            // setMessage("Something went wrong")
            if (axios.isAxiosError(err)) {
                toast.error(err.response?.data?.message || "Signup failed");
            } else {
                toast.error("Internal server error");
            }
        }
    }

    return (
        <div className={'flex flex-col items-center justify-center space-y-8 h-screen pt-20'}>
            <NavBar/>
            <Tabs value={tabValue} onValueChange={setTabValue} className="w-[400px]">
                <TabsContent value="login">
                    <Card className={'p-0'}>
                        <MagicCard className={'w-full h-full  py-10'} gradientColor={theme === "dark" ? "#252525" : "#D9D9D955"}>
                        <CardHeader className={''}>
                            <CardTitle className={'text-2xl font-medium '}>LogIn</CardTitle>
                            <CardDescription>
                                Log back into your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className={'text-lg'}>Email</Label>
                                <Input
                                    id="email"
                                    type={"email"}
                                    value={emailId}
                                    onChange={(e:ChangeEvent<HTMLInputElement>) => setEmailId(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password" className={'text-lg'}>Password</Label>
                                <Input
                                    id="password"
                                    type={"password"}
                                    value={password}
                                    onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                />
                            </div>
                            <CardDescription>
                                {message}
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <InteractiveHoverButton
                                onClick={handleLogin}
                                className={'w-full '}
                            >
                                Login
                            </InteractiveHoverButton>
                        </CardFooter>
                        </MagicCard>
                    </Card>
                </TabsContent>
                <TabsContent value="signup">
                    <Card className={'p-0'}>
                        <MagicCard className={'py-10'} gradientColor={theme === "dark" ? "#252525" : "#D9D9D955"}>
                        <CardHeader>
                            <CardTitle className={'text-2xl font-medium '}>SignUp</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3.5">
                            <div className="space-y-1.5">
                                <Label htmlFor="firstName" className={'text-lg'}>First Name</Label>
                                <Input id="firstName"
                                       type="text"
                                        value={firstName}
                                       onChange={(e:ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="email" className={'text-lg'}>Email</Label>
                                <Input id="email"
                                       type="email"
                                        value={emailId}
                                       onChange={(e:ChangeEvent<HTMLInputElement>) => setEmailId(e.target.value)}
                                />
                            </div>
                            <div className="space-y-1.5">
                                <Label htmlFor="password" className={'text-lg'}>Password</Label>
                                <Input id="password"
                                       type={"password"}
                                        value={password}
                                       onChange={(e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                />
                            </div>
                            <CardDescription>
                                Password Should contain :
                                <ul>
                                    <li>Atleast 6 characters </li>
                                    <li>1 Uppercase</li>
                                    <li>1 Number</li>
                                    <li>1 Special Character</li>
                                </ul>
                            </CardDescription>
                            <CardDescription>
                                {message}
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <InteractiveHoverButton
                                onClick={handleSignup}
                                className={'w-full '}
                            >SignUp
                            </InteractiveHoverButton>
                        </CardFooter>
                        </MagicCard>
                    </Card>
                </TabsContent>
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">SignUp</TabsTrigger>
                </TabsList>
            </Tabs>
        </div>
    )
}
export default Login;