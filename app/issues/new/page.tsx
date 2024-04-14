// /app/issues/new/page.tsx
'use client';

import { Button, Callout, TextField } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IssueForm {
    title: string;
    description: string;
}

const NewIssuePage = () => {
    const router = useRouter();
    const { register, control, handleSubmit, formState: { errors }, } = useForm<IssueForm>();
    const [error, setError] = useState('');

    const onSubmit = handleSubmit(async (data) => {
        try {
            await axios.post('/api/issues', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            router.push('/issues');
        } catch (error) {
            console.log(error);
            setError('An unexptected error occured.')
        }
    });

    return (
        <div className='max-w-xl'>
            {error && (
                // TODO Error message (Callout) not displayed correctly but caught by backend.
                <Callout.Root color='red' className='mb-5'>
                    {/* <Callout.Icon><InfoCircledIcon /></Callout.Icon> https://www.radix-ui.com/icons*/}
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            )}
            <form
                className='space-y-3'
                onSubmit={onSubmit}>
                <TextField.Root placeholder='Title' {...register('title')}>
                </TextField.Root>
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) =>
                        <SimpleMDE placeholder="Description" {...field} />
                    }
                />
                <Button>Submit New Issue</Button>
            </form>
        </div>
    )
}

export default NewIssuePage