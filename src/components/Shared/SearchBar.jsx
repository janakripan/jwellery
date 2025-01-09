import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placeholder = "Search...", onSubmit,searchStyles }) => {

  const validationSchema = Yup.object({
    search: Yup.string()
      .min(3, "Search term must be at least 3 characters")
      .required("Search field is required"),
  });


  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      if (onSubmit) onSubmit(values.search);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="relative flex items-center w-full">
     <div className={`bg-white flex items-center ${searchStyles}`}>
     <input
        type="text"
        name="search"
        placeholder={placeholder}
        className="p-2 pl-4 w-full h-full border-none focus:outline-none "
        value={formik.values.search}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      
      <button
        type="submit"
        className="   text-gray-600 rounded-md px-2 "
      >
        <SearchIcon />
      </button>
     </div>
      {formik.touched.search && formik.errors.search && (
        <div className="absolute top-12 text-red-500 text-sm">
          {formik.errors.search}
        </div>
      )}
    </form>
  );
};

export default SearchBar;