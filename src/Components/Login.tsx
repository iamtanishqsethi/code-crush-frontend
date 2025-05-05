import { Button } from "./ui/button"
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

const Login=()=>{

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [tabValue,setTabValue]=useState<string>("login")
    const [emailId,setEmailId]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const [firstName,setFirstName]=useState<string>("")
    const [message,setMessage]=useState<string>("")


    const handleLogin=async()=>{

        try{
            const response=await axios.post("http://localhost:7777/user/login",{
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
            console.log(err)
            toast.error("Something went wrong")
        }

    }
    const handleSignup=async()=>{
        try{
            const response=await axios.post("http://localhost:7777/user/signUp",{
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
            console.log(err)
            toast.error("Something went wrong")
        }
    }

    return (
        <div className={'flex flex-col items-center justify-center space-y-8 h-screen'}>
            <NavBar/>
            <h1 className={'text-2xl font-medium'}>{tabValue==="login"?"Welcome Back to CodeCrush!!":"Welcome to CodeCrush!!"}</h1>
            <Tabs value={tabValue} onValueChange={setTabValue} className="w-[400px]">
                <TabsContent value="login">
                    <Card>
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
                            <Button
                                onClick={handleLogin}
                                className={'w-full bg-blue-200 hover:bg-blue-300 hover:cursor-pointer'}>Login</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="signup">
                    <Card>
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
                            <Button
                                onClick={handleSignup}
                                className={'w-full bg-blue-200 hover:bg-blue-300 hover:cursor-pointer'}>SignUp</Button>
                        </CardFooter>
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