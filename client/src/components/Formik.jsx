import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
const Formik = () => {
	const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            firstname: Yup.string().max(10, "10 characters or less").required('required'),
            lasstname: Yup.string().max(10, "10 characters or less").required('required'),
            email: Yup.string().email().required('required'),
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm()
        }
    });
	return (
		<div>
			<form onSubmit={formik.handleSubmit}>
				<div className="flex flex-col w-[30%] mx-auto py-3">
					<label htmlFor="" className="font-bold">
						First Name
					</label>
					<input
						type="text"
						name="firstName"
						className="border border-gray-800 p-2 rounded outline-none"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
					/>
				</div>
				<div className="flex flex-col w-[30%] mx-auto py-3">
					<label htmlFor="" className="font-bold">
						Last Name
					</label>
					<input
						type="text"
                        name='lastname'
						className="border border-gray-800 p-2 rounded outline-none"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
					/>
				</div>
				<div className="flex flex-col w-[30%] mx-auto py-3">
					<label htmlFor="" className="font-bold">
						Email
					</label>
					<input
						type="text"
						name="email"
						className="border border-gray-800 p-2 rounded outline-none"
                        onChange={formik.handleChange}
                        value={formik.values.email}
					/>
				</div>
				<div className="flex flex-col w-[30%] mx-auto py-3">
					<label htmlFor="" className="font-bold">
						Password
					</label>
					<input
						type="text"
						name="password"
						className="border border-gray-800 p-2 rounded outline-none"
                        onChange={formik.handleChange}
                        value={formik.values.password}
					/>
				</div>
				<div className="text-center w-[30%] mx-auto">
					<button type='submit' className="bg-gray-800 text-white w-full py-2 rounded">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Formik;
