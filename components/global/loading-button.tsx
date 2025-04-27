import { Loader2 } from "lucide-react"
import { Button } from "react-day-picker"

const LoadingButton = () => {
  return (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  )
}

export default LoadingButton