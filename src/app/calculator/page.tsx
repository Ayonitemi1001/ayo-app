'use client'
import React from 'react'
import { Button } from "@/components/ui/button";
import { evaluate } from 'mathjs';
import {
  Card,
  //   CardAction,
  CardContent,
  //   CardDescription,
  //   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import Link from 'next/link';
// import { Label } from "@/components/ui/label";

export default function CardDemo() {
  const [displayValue, setDisplayValue] = React.useState('');


  
  const handleEquals = () => {
    if (!displayValue) return;

    try {
        // Use mathjs's evaluate function to safely calculate the result
        const result = evaluate(displayValue);
        
        // Convert the result to a string and update the display
        setDisplayValue(String(result));
        
    } catch (e) {
        // Catch any syntax errors, division by zero, or other evaluation problems
        setDisplayValue('Error');
    }
  };



  return (
    <div className="flex min-h-screen items-center justify-center">
     

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={(event) => { event.preventDefault(); }}>
            <div className="flex flex-col gap-6">
              {/*input for calculations*/}
              <div className="grid gap-2">
                <Input
                  className="text-3xl md:text-3xl border-none focus:ring-0 border-4 border-gray-900 rounded-xl mb-3 text-white"
                  id="number"
                  type="text"
                  placeholder="0"
                  value={displayValue}
                  onChange={(e) => setDisplayValue(e.target.value)}

                />
                <div>{/*result will be displayed here*/}</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 md:flex-row text-6xl space-y-4">
              <Button variant="outline" className="text-3xl rounded-full p-7 hover:bg-black hover:text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '7')}
              >7</Button>
              <Button variant="outline" className="text-3xl rounded-full p-7 hover:bg-black hover:text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '8')}
              >8</Button>
              <Button variant="outline" className="text-3xl rounded-full p-7 hover:bg-black hover:text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '9')}
              >9</Button>
              <Button variant="outline" className="text-3xl rounded-full p-7 mb-4 bg-red-700 text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '+')}
              >+</Button>
            </div>
            <div className="flex items-center justify-center gap-4 md:flex-row text-6xl space-y-4">
              <Button variant="outline" className="text-3xl rounded-full p-7 hover:bg-black hover:text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '4')}
              >4</Button>
              <Button variant="outline" className="text-3xl rounded-full p-7 hover:bg-black hover:text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '5')}
              >5</Button>
              <Button variant="outline" className="text-3xl rounded-full p-7 hover:bg-black hover:text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '6')}
              >6</Button>
              <Button variant="outline" className="text-3xl rounded-full p-7 mb-4 bg-red-700 text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '-')}
              >-</Button>
            </div>
            <div className="flex items-center justify-center gap-4 md:flex-row text-6xl space-y-4">
              <Button variant="outline" className="text-3xl rounded-full p-7 hover:bg-black hover:text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '1')}
              >1</Button>
              <Button variant="outline" className="text-3xl rounded-full p-7 hover:bg-black hover:text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '2')}
              >2</Button>
              <Button variant="outline" className="text-3xl rounded-full p-7 hover:bg-black hover:text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '3')}
              >3</Button>
              <Button variant="outline" className="text-3xl rounded-full p-7 mb-4 bg-red-700 text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '*')}
              >*</Button>
            </div>


            <div className="flex items-center justify-between gap-2 md:flex-row text-6xl">
              <Button variant="outline" className="rounded-full p-7  text-3xl hover:bg-black hover:text-white"
              onClick={handleEquals}
              >=</Button>
              <Button variant="outline" className="rounded-full p-7 text-3xl hover:bg-black hover:text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '0')}
              >0</Button>
              <Button variant="outline" className="rounded-full p-7 text-3xl ml-2 bg-red-950 text-white"
                onClick={() => setDisplayValue('')}
              >C</Button>
              <Button variant="outline" className="rounded-full p-7 text-3xl -mr-2 bg-red-700 text-white"
                onClick={() => setDisplayValue(prevValue => prevValue + '/')}
              >/</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );

}
