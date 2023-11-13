"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
// import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";

const ContactForm = () => {
    const schema = z.object({
        name: z
            .string()
            .min(1, {message: "This field is required."})
            .max(70, {
                message: "This field can be maximum 70 characters long."
            }),
        email: z
            .string()
            .email({message: "Invalid email"})
            .min(1, {message: "This field is required."})
            .max(70),
        message: z
            .string()
            .min(1, {message: "This field is required."})
            .max(1000, {
                message: "This field can be maximum 1000 characters long."
            })
    });

    const [loading, setLoading] = useState("initial");
    const LOADING_STATES = {
        INITIAL: "initial",
        LOADING: "loading",
        ERROR: "error",
        DONE: "done"
    };

    // submit button disable

    const [submitIsDisabled, setSubmitIsDisabled] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // react-hook-form
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(schema)
    });

    const onSubmit = handleSubmit(async (data) => {
        setSubmitIsDisabled(true);
        setLoading(LOADING_STATES.LOADING);
        const endpoint = "/api/contact-form";
        const options = {
            // The method is POST because we are sending data.
            method: "POST",
            // Tell the server we're sending JSON.
            headers: {
                "Content-Type": "application/json"
            },
            // Body of the request is the JSON data we created above.
            body: JSON.stringify(data)
        };
        console.log(options, "options");
        const response = await fetch(endpoint, options);

        try {
            const result = await response.json();
            console.log(result, "result");
            console.log("Download complete", response);
            reset();
            setIsSubmitted(true);
            setSubmitIsDisabled(false);
            setLoading(LOADING_STATES.DONE);
        } catch (error) {
            console.log("error", error);
            setSubmitIsDisabled(false);
            setLoading(LOADING_STATES.ERROR);
        }
    });

    if (isSubmitted) {
        return (
            <div className="w-full">
                <h3 className="heading3">Thank you for submitting the contact form! I&apos;ll be in touch soon!</h3>
            </div>
        );
    }

    return (
        <div className="bg-[#EDF2FC] p-6 rounded-lg border-l border-r-2 border-t border-b-2 border-black">
            <form onSubmit={onSubmit} className="flex flex-col gap-3">
                <div className="w-full flex flex-col md:flex-row justify-between gap-3 ">
                    <div className="w-full md:w-3/6 flex flex-col">
                        <input
                            {...register("name")}
                            type="text"
                            placeholder="Name *"
                            className="w-full h-12 rounded-lg border border-black focus:outline-none focus:border-2 body2 px-4"
                        />
                        {errors.name?.message && (
                            <p className="mb-3 caption" style={{color: "#e51937"}}>
                                {errors.name?.message.toString()}
                            </p>
                        )}
                    </div>

                    <div className="w-full md:w-3/6 flex flex-col">
                        <input
                            {...register("email")}
                            type="email"
                            placeholder="Email *"
                            className="w-full h-12 rounded-lg border border-black focus:outline-none focus:border-2 body2 px-4"
                        />
                        {errors.email?.message && (
                            <p className="mb-3 caption" style={{color: "#e51937"}}>
                                {errors.email?.message.toString()}
                            </p>
                        )}
                    </div>
                </div>
                <textarea
                    {...register("message")}
                    placeholder="Message *"
                    className="w-full h-48 px-4 pt-3 rounded-lg border border-black focus:outline-none focus:border-2 body2 px-4"
                />
                {errors.message?.message && (
                    <p className="mb-3 caption" style={{color: "#e51937"}}>
                        {errors.message?.message.toString()}
                    </p>
                )}

                <div className="w-full flex justify-end mb-3 mt-3">
                    <button
                        type="submit"
                        value="Submit"
                        style={{
                            background: submitIsDisabled ? "#C4D3DF" : "#fff",

                        }}
                        className="lg-button"
                        disabled={submitIsDisabled}
                    >
                        <div className="flex w-full justify-center items-center">
                            <p
                                className="lg-button-text"
                                style={{
                                    color: submitIsDisabled ? "#959699" : "#000"
                                }}
                            >
                                Submit
                            </p>
                            {loading === LOADING_STATES.ERROR && (
                                <>
                                    <div
                                        style={{
                                            height: "20px",
                                            width: "20px",
                                            backgroundColor: "#FE052A",
                                            borderRadius: "50%",
                                            marginLeft: "8px"
                                        }}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="#fff"
                                                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                                            />
                                        </svg>
                                        <span className="sr-only">Error</span>
                                    </div>
                                </>
                            )}
                            {loading === LOADING_STATES.LOADING && (
                                <div style={{marginLeft: "8px"}}>
                                    <div role="status">
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill"
                                            />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    </button>
                </div>
                {loading === LOADING_STATES.ERROR && (
                    <p className="body1" style={{color: "#FE052A"}}>Error: Form not submitted. Please try again.</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;
