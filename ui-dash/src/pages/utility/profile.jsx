import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAxios from "../../api/useAxios";
import Icon from "@/components/ui/Icon";
import Card from "@/components/ui/Card";
import BasicArea from "../chart/appex-chart/BasicArea";
import ProfileImage from "@/assets/images/users/user-1.jpg";
import {jwtDecode} from 'jwt-decode'
import Fileinput from "@/components/ui/Fileinput";
import DropZone from "../forms/file-input/DropZone";
import Textinput from "@/components/ui/Textinput";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import Select from "react-select";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali/index";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { faIR } from "@mui/x-date-pickers/locales";


const Profile = () => {
  const [selectedFile, setSelectedFile] = useState(null);   // form
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const furits = [
    { value: "chocolate", label: "شکلات" },
    { value: "strawberry", label: "توت فرنگی" },
    { value: "vanilla", label: "وانیل" },
  ];
  
  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontSize: "14px",
    }),
  };
  
  
  
  
  const [picker, setPicker] = useState(new Date())
  const [basic, setBasic] = useState(new Date())
  const [open, setOpen] = useState(true)
  
  //form
  const [res, setRes] = useState("")
  const api = useAxios();
  const token = localStorage.getItem("authTokens")

  if (token){
    const decode = jwtDecode(token)
    var user_id = decode.user_id
    var username = decode.username
    var full_name = decode.full_name
    var image = decode.image
    var email = decode.email

  }

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await api.get("/test/")
        setRes(response.data.response)
      } catch (error) {
        console.log(error);
        setRes("Something went wrong")
      }
    }
    fetchData()
  }, [])

  
  useEffect(() => {
    const fetchPostData = async () => {
      try{
        const response = await api.post("/test/")
        setRes(response.data.response)
      } catch (error) {
        console.log(error);
        setRes("Something went wrong")
      }
    }
    fetchPostData()
  }, [])

  return (
    <div className="space-y-5 profile-page">
      <div className="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]">
        <div className="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"></div>
        <div className="profile-box flex-none md:text-start text-center">
          <div className="md:flex items-end md:space-x-6 rtl:space-x-reverse">
            <div className="flex-none">
              <div className="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative">
                <img
                  src={ProfileImage}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
                <Link
                  to="#"
                  className="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
                >
                  <Icon icon="heroicons:pencil-square" />
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
                
              </div>
              <div className="text-sm font-light text-slate-600 dark:text-slate-400">
                
              </div>
            </div>
          </div>
        </div>

        <div className="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[516px] md:space-y-0 space-y-4">
          <div className="flex-1">
            <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
              
            </div>
            <div className="text-sm text-slate-600 font-light dark:text-slate-300">
              {username}
            </div>
          </div>

          <div className="flex-1">
            <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
              {email}
            </div>
            <div className="text-sm text-slate-600 font-light dark:text-slate-300">
              {full_name}
            </div>
          </div>

          <div className="flex-1">
            <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
              
            </div>
            <div className="text-sm text-slate-600 font-light dark:text-slate-300">
              رویداد های تقویم
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-4 col-span-12">
          <Card title="درباره">
          <form >
            <div className="space-y-4">
          <InputGroup
            label="نام کامل"
            id="hi_Fullname"
            type="text"
            placeholder="رضا احمدی"
            horizontal
            
            merged
          />
          <InputGroup
            label="ایمیل"
            id="hi_email"
            type="email"
            placeholder="soorena@gmail.com"           
            horizontal
            merged
          />
          <InputGroup
            label="موبایل"
            id="hi_phone"
            type="phone"
            placeholder="0912000000"
            
            horizontal
            merged
          />
          <label htmlFor="dis" className="form-label">
            استان
          </label>
          <Select
            label="استان"
            className="react-select"
            classNamePrefix="select"
            defaultValue={furits[2]}
            name="استان"
            options={furits}
            isLoading={true}
            isClearable={false}
            id="hh23"
            styles={styles}
            horizontal
            merged
          />
          <label htmlFor="dis" className="form-label">
            جنسیت
          </label>
          <Select
            label="استان"
            className="react-select"
            classNamePrefix="select"
            defaultValue={furits[2]}
            name="استان"
            options={furits}
            isLoading={true}
            isClearable={false}
            id="hh23"
            styles={styles}
            horizontal
            merged
          />
          <InputGroup
            label="کد ملی"
            id="hi_phone"
            type="phone"
            placeholder="0012345678"
            
            horizontal
            merged
          />
          <label htmlFor="dis" className="form-label">
            عکس کارت ملی
          </label>
          <Fileinput
          name="basic"
          selectedFile={selectedFile}
          onChange={handleFileChange}
          />
          <label htmlFor="dis" className="form-label">
           عکس پرسنلی
          </label>
          <Fileinput
          name="basic"
          selectedFile={selectedFile}
          onChange={handleFileChange}
          />
          <div>
            <label htmlFor="default-picker" className=" form-label">
              تاریخ تولد
            </label>

            <LocalizationProvider
              dateAdapter={AdapterDateFnsJalali}
              localeText={
                faIR.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <DatePicker
                className="form-control py-2"
                value={picker}
                onChange={(date) => setPicker(date)}
                id="default-picker"
              />
            </LocalizationProvider>
          </div>

          <InputGroup
            label="آدرس"
            id="hi_Fullname"
            type="text"
            placeholder="استان/شهر/خیابان/کوچه/پلاک"
            horizontal
            
            merged
          />
          <label htmlFor="dis" className="form-label">
           مستندات
          </label>
          <Fileinput
          name="basic"
          selectedFile={selectedFile}
          onChange={handleFileChange}
          />
          <div className="ml-[124px] space-y-4">
            
            <Button text="تایید" className="btn-dark" />
          </div>
          </div>
        </form>
        </Card>
        </div>
        <div className="lg:col-span-8 col-span-12">
          <Card title="مرور کاربر">
            <BasicArea height={190} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
