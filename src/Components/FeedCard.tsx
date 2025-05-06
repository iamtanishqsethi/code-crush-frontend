import {Card, CardContent} from "@/Components/ui/card.tsx";
import { Heart, X } from "lucide-react"
import { Badge } from "@/Components/ui/badge"

type FeedData = {
    _id: string
    firstName: string
    lastName?: string
    photoUrl?: string
    about?: string
    skills: string[],
    age?: number,
    gender?: string
}

type FeedCardProps = {
    item: FeedData
}

const FeedCard = ({ item }: FeedCardProps) => {
    return (
        <Card className="py-0 h-[85%] w-88">
            <div className="w-full h-3/4 overflow-hidden rounded-t-md">
                <img
                    src={item?.photoUrl}
                    className="object-cover object-center w-full h-full"
                />
            </div>
            <CardContent className="p-3">
                <h1 className="text-2xl font-bold mb-1">{item.firstName} {item.lastName ? item.lastName:""}</h1>
                <h2>{item.age? item.age:""}  {item.gender ? item.gender :""}</h2>
                <p className="text-sm text-gray-300">
                    {item.about}
                </p>
                {item.skills &&
                    <div className={'flex w-full itexms-center space-x-2  space-y-2 flex-wrap my-1.5'}>
                        {item.skills.map((skill,index)=>(
                        <Badge className={"rounded-lg"} key={index}>{skill}</Badge>
                        ))}
                    </div>
                }
            </CardContent>
            <CardContent className="flex w-full items-center justify-center space-x-10 py-3  rounded-lg">
                <button className="p-2 rounded-full h-18 w-18 hover:scale-105 transition-all ease-in-out text-red-500 hover:text-red-600 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 flex items-center justify-center">
                    <X size={48} strokeWidth={2} />
                </button>
                <button className="p-2 rounded-full h-18 w-18 hover:scale-105 transition-all ease-in-out text-green-500 hover:text-green-600 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 flex items-center justify-center">
                    <Heart size={48} strokeWidth={2} />
                </button>
            </CardContent>
        </Card>
    );
};

export default FeedCard;