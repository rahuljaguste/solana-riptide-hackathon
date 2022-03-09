import {useDropzone} from 'react-dropzone'
import React, {useCallback} from 'react'
import { TextAreaInput, Input, CurrencyInput, Select } from '../../components/Inputs'

export default function CreateNft() {
  return (
    <div className="flex justify-center text-primary p-6">
      <form className="flex flex-col gap-y-4">
        <div className="text-4xl">NFT Rewards</div>
        <div>
          <div>Image or 3D model</div>
          <div>File types supported: JPG, PNG, GIF, SVG, WAV, OGG, GLB, GLTF. Max Size: 5 MB</div>
          <Dropzone />
        </div>
        <TextAreaInput label="Description" />
        <Input type="text" label="Name" />
        <Input type="text" label="Type of Reward" />
        <CurrencyInput suffix="USD" label="Value" />
        <CurrencyInput suffix="USD" label="Minimum spend required" />
        <Select label="Expiration" options={["yes", "no"]} />
        <Input type="date" label="Date" />

        <div className="flex justify-end gap-x-3">
          <button type="button" className="!bg-[#86898D] text-base text-white font-bold py-2 px-4 rounded hover:opacity-80">Cancel</button>
          <button type="submit" className="!bg-yellow-500 text-base text-white font-bold py-2 px-4 rounded hover:opacity-80">Submit</button>
        </div>
      </form>
    </div>
  )
}

function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log({acceptedFiles})
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="rounded-lg border border-dashed h-[215px] flex items-center justify-center" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag and drop some files here, or click to select files</p>
      }
    </div>
  )
}
