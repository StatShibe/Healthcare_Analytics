import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import idealogo from "../assets/blueidea.svg"
 
export default function LoginForm() {

  const handleSubmit = () => {
    console.log("Submitted");
  }

  return (<div className="flex justify-center">
    <Card className="w-[350px] p-3 bg-blue-400/20 font-mono z-10">

      <CardHeader>
        <CardTitle className="text-center text-white text-4xl">Welcome Back</CardTitle>
        <CardDescription className="text-center text-white text-lg">Login To Continue</CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">

            <div className="flex flex-col space-y-3">
              <Label htmlFor="email" className="text-white text-lg">Email</Label>
              <Input id="email" placeholder="Enter your email"  type="email"/>
            </div>

            <div className="flex flex-col space-y-3">
              <Label htmlFor="pwd" className="text-white text-lg">Password</Label>
              <Input id="pwd" placeholder="Enter your password" type="password"/>
            </div>

            <CardFooter className="flex justify-between">
                <Button variant="outline" type="reset" className="hover:bg-sky-300/70 hover:text-white font-sans">Reset</Button>
                <Button type = "submit" className="hover:bg-emerald-500/80 font-sans">Submit</Button>
            </CardFooter>

          </div>
        </form>
      </CardContent>

    </Card>
    <img src={idealogo} alt="Bulb Logo" className="h-80 absolute z-0 animate-pulse opacity-5"/>
    </div>
  )
}