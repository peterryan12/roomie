import { useState, useActionState } from "react";

export const UsernamePasswordForm = (props) => {
    const [result, submitAction, isPending] = useActionState(
        async (previousState, formData) => {
            const userName = formData.get("username");
            const password = formData.get("password");

            if (!userName || !password) {
                return {
                    type: "error",
                    message: "Please fill in your username and password.",
                };
            }

            try {
                const response = await props.handler(userName, password);
                console.log("Server response", response);

                // Check if the response is NOT OK (e.g., 400, 401, 500)
                if (!response.ok) {
                    return {
                        type: "error",
                        message: `Login failed: ${response.status} ${response.statusText}`,
                    };
                }

                return {
                    type: "success",
                    message: "You have successfully logged in!",
                };
            } catch (error) {
                return {
                    type: "error",
                    message: "An error occurred while logging in.",
                };
            }
        },
        null
    );

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
             
                {result && (
                    <p
                        className={`mt-4 text-center text-sm p-2 rounded ${
                            result.type === "error"
                                ? "bg-red-100 text-red-600 border border-red-300"
                                : "bg-green-100 text-green-700 border border-green-300"
                        }`}
                    >
                        {result.message}
                    </p>
                )}

                <form action={submitAction} className="mt-6 flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="username"
                            className="text-gray-700 font-medium"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            disabled={isPending}
                            className="p-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition disabled:opacity-50"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="password"
                            className="text-gray-700 font-medium"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            disabled={isPending}
                            className="p-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition disabled:opacity-50"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isPending}
                        className="bg-indigo-500 text-white p-2 rounded hover:bg-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isPending ? "Please wait..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
};
