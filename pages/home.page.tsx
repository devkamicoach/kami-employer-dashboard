import { Button, Grid } from '@mui/material';
import DownloadIcon from 'components/Icons/Other/DownloadIcon';
import ErrorIcon from 'components/Icons/Other/ErrorIcon';
import TickMark from 'components/Icons/Other/TickMark';
import UploadIcon from 'components/Icons/Other/UploadIcon';
import UploaderPopUp from 'components/UploaderPopUp/UploaderPopUp';
import React from 'react';
import { useDropzone } from 'react-dropzone';

const Home = () => {
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    maxSize: 5000,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
    },
  });

  console.log({ fileRejections });

  // custom validation function based on file size

  const isFileAccepted = () => {
    // setTimeout the modal
    if (acceptedFiles.length) {
      // API request
      const fileName = acceptedFiles.map((file) => file.name);
      return (
        <UploaderPopUp
          icon={<TickMark className="h-[20px] w-[20px] fill-[#38A169]" />}
          title="Upload success"
          message={`Your file ${fileName[0]} was successfully uploaded`}
          backgroundColor="bg-[#C6F6D5]"
        />
      );
    }
    if (fileRejections.length) {
      return (
        <UploaderPopUp
          icon={<ErrorIcon className="h-[20px] w-[20px] fill-[#E53E3E]" />}
          title="Upload failed"
          message={`Please check the file format or file size before trying again.`}
          backgroundColor="bg-[#FED7D7]"
        />
      );
    }
    return null;
  };
  return (
    <Grid container className="flex mx-auto w-[50%] ">
      <Grid item sm={12}>
        <h1 className="text-[28px] mb-3 mt-10">Give users access to Kinhub </h1>
      </Grid>
      <Grid item sm={12}>
        <p className="text-[14px] mb-3 w-[576px]">
          Download our template below or upload your own file with required information to successfully onboard your
          users.
        </p>
      </Grid>
      <Grid item sm={12}>
        <div className="flex mb-3">
          <div className="mr-2 rounded-full h-6 w-6 text-white bg-[#66C5BF] text-center">1</div>
          <p className="font-bold"> Download our template to fill out the corresponding fields</p>
        </div>
      </Grid>

      <Grid item sm={12}>
        <Button className="bg-[#284F73] text-[white] capitalize mb-6 flex justify-evenly h-[50px] w-[245px] ">
          <DownloadIcon className="h-[20px] w-[20px] fill-[white]" /> Download template
        </Button>
      </Grid>

      <Grid item sm={12}>
        <div className="flex mb-6">
          <div className="mr-2 rounded-full h-6 w-6 text-white bg-[#66C5BF] text-center">2</div>
          <p className="font-bold"> Upload the template to add users to your database</p>
        </div>
      </Grid>

      <Grid item sm={12}>
        <section className="container">
          <div
            {...getRootProps({
              className:
                'flex p-[80px] flex-1 flex-col rounded-xl border-2 border-dashed bg-[#F2EFEB] text-[#666665] items-center cursor-pointer h-[250px] w-[550px] my-[20px]',
            })}
          >
            <input {...getInputProps()} />
            <UploadIcon className="fill-[#666665] h-[30px] w-[30px]" />
            <p className="text-[#666665] font-bold">Drag a file or click here to upload list of employees</p>
            <em className="text-center">Supports file formats such as csv smaller than 5mb</em>
          </div>
        </section>
      </Grid>
      <Grid item sm={12} className="pb-12">
        <p className="text-[#939393] text-[14px] mb-3">
          For any issues or concerns, reach out to us at support@kinhub.com
        </p>
        {isFileAccepted()}
      </Grid>
    </Grid>
  );
};

export default Home;
