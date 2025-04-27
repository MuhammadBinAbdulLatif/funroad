'use client'
import { ChangeEvent } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
type Props = {
    minPrice?: string | null;
    maxPrice?: string | null;
    onMaxPriceChange: (value:string) => void;
    onMinPriceChange: (value:string) => void;
}

export const formatAsCurrency = (value: string) => {
    const numerviValue = value.replace(/[^0-9.]/g, '')
    const parts = numerviValue.split('.')
    const formattedValue = parts[0] + (parts.length > 1 ? '.' + parts[1]?.slice(0,2): '')
    if(!formattedValue) return '';
    const numberValue = parseFloat(formattedValue)
    if(isNaN(numberValue)) return ''
    return new Intl.NumberFormat('en-Us', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(numberValue);
}

const PriceFilter = ({onMaxPriceChange,onMinPriceChange,maxPrice,minPrice}: Props) => {
    const handleMinPriceChange = (e:ChangeEvent<HTMLInputElement>) => {
        const numberValue = e.target.value.replace(/[^0-9]/g, '')
        onMinPriceChange(numberValue)
    }
    const handleMaxPriceChange = (e:ChangeEvent<HTMLInputElement>) => {
        const numberValue = e.target.value.replace(/[^0-9]/g, '')
        onMaxPriceChange(numberValue)
    }
  return (
    <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
            <Label className="font-medium text-base">
                Minimum price
            </Label>
            <Input type="text"  placeholder="$0" onChange={handleMinPriceChange}   value={minPrice ? formatAsCurrency(minPrice): ''}/>
        </div>
        <div className="flex flex-col gap-2">
            <Label className="font-medium text-base">
                Minimum price
            </Label>
            <Input type="text" placeholder="&infin;"  onChange={handleMaxPriceChange} value={maxPrice ? formatAsCurrency(maxPrice): ''}/>
        </div>
    </div>
  )
}

export default PriceFilter