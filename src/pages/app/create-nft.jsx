import {useDropzone} from 'react-dropzone'
import React, {useCallback} from 'react'
import { useRouter } from 'next/router'
import { TextAreaInput, Input, CurrencyInput, Select } from '../../components/Inputs'
import axios from 'axios'

export default function CreateNft() {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("/api/nft", {
      description: event.target.description.value,
      name: event.target.name.value,
      typeOfReward: event.target.typeOfReward.value,
      value: event.target.value.value,
      minimumSpendRequired: event.target.minimumSpendRequired.value,
      expiration: event.target.expiration.value,
      date: event.target.date.value
    }).then(function (response) {
      if (response.data.success) {
        router.push({pathname: "/app/dashboard"});
      }
    })
  }

  return (
    <div className="flex justify-center text-primary p-6">
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <div className="text-4xl">NFT Rewards</div>
        <div>
          <div>Image or 3D model</div>
          <div>File types supported: JPG, PNG, GIF, SVG, WAV, OGG, GLB, GLTF. Max Size: 5 MB</div>
          <Dropzone />
        </div>
        <TextAreaInput label="Description" name="description" id="description" />
        <Input type="text" label="Name" name="name" id="name" />
        <Input type="text" label="Type of Reward" name="typeOfReward" id="typeOfReward" />
        <CurrencyInput label="Value" name="value" id="value" />
        <CurrencyInput label="Minimum spend required" name="minimumSpendRequired" id="minimumSpendRequired" />
        <Select label="Expiration" options={["yes", "no"]} name="expiration" id="expiration" />
        <Input type="date" label="Date" name="date" id="date" />

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
