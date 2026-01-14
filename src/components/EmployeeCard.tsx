import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface Props {
  workname: string;
  FullName: string;
  image: string;
  hobbies: string;
  age: number;
}

export const EmployeeCard = ({ workname, FullName, image, hobbies, age }: Props) => {

  return (
    <div className="container">
      <div className="p border shadow-lg rounded-2xl">
        
        <Card className="p">
          
          <CardHeader>
            <CardTitle>{workname}</CardTitle>
            <CardDescription>{FullName}</CardDescription>
          </CardHeader>
          <CardContent className='flex items-center gap-5'>
            
            <Avatar className="size-30">
              
              <AvatarImage
                className="size-full object-cover"
                src={image}
              />
              <AvatarFallback>CN</AvatarFallback>
          
            </Avatar>
                <div>
             <p>{hobbies}</p>
                <p>{age} yoshda</p>
              </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
