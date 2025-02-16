import { Slider } from "@radix-ui/react-slider";
import { useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";

const BackgroundController = () => {
  const [rounded, setRounded] = useState(0);
  const [padding, setPadding] = useState(0);
  const [color, setColor] = useState('#000')

   const storageValue = JSON.parse(localStorage.getItem('value'))
  
      useEffect(()=>{
  
          const updateValue = {
              ...storageValue,
              bgRounded:rounded,
              bgPadding:padding,
              bgColor:color
          }
  
          localStorage.setItem('value', JSON.stringify(updateValue))
      },[padding, rounded, color, storageValue])

  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded}px</span>
        </label>
        <Slider
          defaultValue={[0]}
          max={512}
          step={1}
          onValueChange={(event) => setRounded(event[0])}
        />
      </div>

      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding}px</span>
        </label>
        <Slider
          defaultValue={[40]}
          max={100}
          step={1}
          onValueChange={(event) => setPadding(event[0])}
        />
      </div>

      <div className="py-2">
      <label className="p-5 flex justify-between items-center">Icon Color</label>
            <ColorPickerController className = "rounded-xl" hideController={false}
            selectedColor={(color)=> setColor(color)}
            />
      </div>
    </div>
  );
};

export default BackgroundController;
