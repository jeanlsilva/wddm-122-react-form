import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import CountriesSelect from "./countriesSelect";

const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email must be valid"),
    countryCode: yup.string().required("Country code is required"),
    phone: yup.string().required("Phone number is required"),
    street: yup.string().required("Street name is required"),
    number: yup.string().required("Residence number is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State/Province is required"),
    zipcode: yup.string().required("Zip code is required"),
    country: yup.string().required("Coutry is required"),
    password: yup.string().required("Password is required").min(8, "min 8 characters").max(16),
    confirmPassword: yup.string().required("Confirm password is required").oneOf([yup.ref('password'), null], "Passwords must match")
}).required();  

function ContactForm() {
    const { handleSubmit, register, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        reValidateMode: 'onChange'
    });

    const onSubmit = (data) => {
        console.log(data);
        alert(`Thank you, ${data.name}. We will soon reach out to you`);
        setValue('name', '');
        setValue('email', '');
        setValue('message', '');
        setValue('countryCode', '');
        setValue('phone', '');
        setValue('street', '');
        setValue('number', '');
        setValue('city', '');
        setValue('state', '');
        setValue('zipcode', '');
        setValue('password', '');
        setValue('confirmPassword', '');
        setValue('country', '');
    }

    return (
        <div class="relative z-2 w-full max-w-4/5 mx-auto text-left">
            <form class="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
                <div class="flex flex-col lg:flex-row lg:space-x-10">
                    <div class="flex flex-col flex-1 hover:text-yellow-500 lg:mt-0">
                        <label htmlFor="name" class="text-left text-white mb-2 peer">Full Name</label>
                        <input type="text" placeholder="Full Name" class={`p-4 peer-hover:text-yellow-500 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.name ? 'border border-red-500' : 'border-0'}`} {...register("name")} />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>
                    <div class="flex flex-col flex-1 mt-5 lg:mt-0">
                        <label htmlFor="email" class="text-white mb-2">Email</label>
                        <input type="text" placeholder="Email" class={`p-4 rounded-lg peer-hover:text-yellow-500 hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.email ? 'border border-red-500' : 'border-0'}`} {...register("email")} />
                        {errors.email && (
                            <span class="text-red-500">
                                {errors.email.type === 'required' ? 'Email is required' : 'Email must be valid'}
                            </span>
                        )}
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row lg:space-x-10 lg:mt-5">
                    <div class="flex flex-col flex-1 hover:text-yellow-500  mt-5 lg:mt-0">
                        <label htmlFor="name" class="text-left text-white mb-2 peer">Password</label>
                        <input type="password" maxLength={16} placeholder="Password" class={`p-4 peer-hover:text-yellow-500 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.name ? 'border border-red-500' : 'border-0'}`} {...register("password")} />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    </div>
                    <div class="flex flex-col flex-1 hover:text-yellow-500  mt-5 lg:mt-0">
                        <label htmlFor="name" class="text-left text-white mb-2 peer">Confirm Password</label>
                        <input type="password" maxLength={16} placeholder="Confirm Password" class={`p-4 peer-hover:text-yellow-500 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.name ? 'border border-red-500' : 'border-0'}`} {...register("confirmPassword")} />
                        {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message}</span>}
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row lg:space-x-10 lg:mt-5">
                    <div class="flex space-x-5 lg:space-x-10">
                        <div class="flex flex-col lg:w-[22%] w-1/4 hover:text-yellow-500 mt-5 lg:mt-0">
                            <label htmlFor="phone" class="text-white mb-2 peer">Country code</label>
                            <input type="number" placeholder="+99" maxLength={2} class={`p-4 peer-hover:text-yellow-500 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.phone ? 'border border-red-500' : 'border-0'}`} {...register("countryCode")} />
                            {errors.countryCode && <span className="text-red-500">{errors.countryCode.message}</span>}
                        </div>
                        <div class="flex flex-col hover:text-yellow-500 flex-auto sm:flex-1 mt-5 lg:mt-0">
                            <label htmlFor="phone" class="text-white mb-2 peer">Phone number</label>
                            <InputMask
                                mask="999 999 9999"
                                placeholder="Phone number" 
                                class={`p-4 peer-hover:text-yellow-500 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.phone ? 'border border-red-500' : 'border-0'}`}
                                {...register("phone")}
                            >                            
                            </InputMask>
                            {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                        </div>
                    </div>
                    <div class="flex flex-col flex-1 mt-5 lg:mt-0">
                        <label htmlFor="street" class="text-white mb-2">Street name</label>
                        <input type="text" placeholder="Street name" class={`p-4 rounded-lg peer-hover:text-yellow-500 hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.street ? 'border border-red-500' : 'border-0'}`} {...register("street")} />
                        {errors.street && <span class="text-red-500">{errors.street.message}</span>}
                    </div>                    
                </div>
                <div class="flex flex-col lg:flex-row lg:space-x-10 lg:mt-5">
                    <div class="flex space-x-5 lg:space-x-10">
                        <div class="flex flex-col w-[22%] hover:text-yellow-500  mt-5 lg:mt-0">
                            <label htmlFor="number" class="text-white mb-2 peer">Number</label>
                            <input type="text" placeholder="Number" class={`p-4 px-2 peer-hover:text-yellow-500 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.number ? 'border border-red-500' : 'border-0'}`} {...register("number")} />
                            {errors.number && <span className="text-red-500">{errors.number.message}</span>}
                        </div>
                        <div class="flex flex-col flex-1 mt-5 lg:mt-0">
                            <label htmlFor="city" class="text-white mb-2">City</label>
                            <input type="text" placeholder="City" class={`p-4 rounded-lg peer-hover:text-yellow-500 hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.city ? 'border border-red-500' : 'border-0'}`} {...register("city")} />
                            {errors.city && <span class="text-red-500">{errors.city.message}</span>}
                        </div>
                    </div>                    
                    <div class="flex flex-col flex-1 hover:text-yellow-500  mt-5 lg:mt-0">
                        <label htmlFor="state" class="text-white mb-2 peer">State/Province</label>
                        <input type="text" placeholder="State/Province" class={`p-4 peer-hover:text-yellow-500 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.state ? 'border border-red-500' : 'border-0'}`} {...register("state")} />
                        {errors.state && <span className="text-red-500">{errors.state.message}</span>}
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row lg:space-x-10 lg:mt-5">
                    <div class="flex flex-col flex-1 mt-5 lg:mt-0">
                        <label htmlFor="country" class="text-white mb-2">Country</label>
                        <CountriesSelect errors={errors} register={register} />
                        {errors.country && <span class="text-red-500">This field is required</span>}
                    </div>
                    <div class="flex flex-col lg:flex-row lg:space-x-10">
                        <div class="flex flex-col flex-1 hover:text-yellow-500  mt-5 lg:mt-0">
                            <label htmlFor="zipcode" class="text-white mb-2 peer">ZIP Code</label>
                            <input type="text" placeholder="ZIP Code" class={`p-4 peer-hover:text-yellow-500 rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all ease-in-out duration-500 ${errors.zipcode ? 'border border-red-500' : 'border-0'}`} {...register("zipcode")} />
                            {errors.zipcode && <span className="text-red-500">{errors.zipcode.message}</span>}
                        </div>
                    </div>
                </div>
                <div class="flex justify-end mt-5 lg:mt-5 sm:w-full">
                    <button type="submit" class="px-8 py-4 bg-yellow-500 w-full md:w-auto rounded-lg hover:bg-black hover:text-yellow-500 transition-all ease-in-out duration-500">Send</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;