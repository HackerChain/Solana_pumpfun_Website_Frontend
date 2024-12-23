import { useState, FormEvent } from "react";
import {
  EmailIcon,
  EyeHideIcon,
  EyeShowIcon,
  PasswordIcon,
  RemoveIcon,
  UserIcon,
} from "../../assets";
import { RootState } from "../../store";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

interface AccountFormData {
  fullName: string;
  email: string;
  location: string;
  photo?: File;
}

export const AccountSettingContent = () => {
  const [showPwdIcon1, setShowPwdIcon1] = useState(false);
  const [showPwdIcon2, setShowPwdIcon2] = useState(false);
  const [showPwdIcon3, setShowPwdIcon3] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [newConfirmPwd, setNewConfirmPwd] = useState("");

  const userData = useSelector((state: RootState) => state.user);
  const [formData, setFormData] = useState<AccountFormData>({
    fullName: userData.fullName,
    email: userData.email,
    location: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data:", formData);
  };

  const handleInputChange =
    (field: keyof AccountFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      setFormData({
        ...formData,
        photo: file,
      });
    }
  };

  const handlePwdChange = () => {
    if (oldPwd === newPwd)
      return toast.warning("New password must be different from old password");
    if (newPwd !== newConfirmPwd)
      return toast.error("New password and confirm password must be the same");
    if (newPwd.length < 8)
      return toast.error("Password must be at least 8 characters");
    if (newPwd.length > 20)
      return toast.error("Password must be less than 20 characters");
    if (newPwd === "" || newConfirmPwd === "")
      return toast.error("Password cannot be empty");
    // Handle password change logic
    console.log(oldPwd, newPwd);
    toast.success("Password changed successfully");
  };

  const ChangePwdInputs = [
    {
      value: oldPwd,
      placeholder: "Old Password",
      action: (value: any) => setOldPwd(value),
      showIcon: showPwdIcon1,
      setShowIcon: setShowPwdIcon1,
    },
    {
      value: newPwd,
      placeholder: "New Password",
      action: (value: any) => setNewPwd(value),
      showIcon: showPwdIcon2,
      setShowIcon: setShowPwdIcon2,
    },
    {
      value: newConfirmPwd,
      placeholder: "Confirm Password",
      action: (value: any) => setNewConfirmPwd(value),
      showIcon: showPwdIcon3,
      setShowIcon: setShowPwdIcon3,
    },
  ];

  return (
    <div className="flex flex-col flex-1">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row items-center justify-between p-[24px] border-b-[1px] border-bg_gray_light h-[88px]">
          <div className="flex flex-col items-start">
            <p className="text-lg">Account</p>
            <p className="text-secondary_light_400 text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <button
              type="button"
              className="flex items-center justify-center rounded-md bg-bg_gray_light shadow-[inset_0_-3px_5px_1px_#F6F7FA33] p-2 h-[46px] w-[120px] hover:cursor-pointer hover:bg-primary_dark_700 transition duration-300 ease-in-out"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center justify-center rounded-md bg-primary_dark_700 shadow-[inset_0_-3px_5px_1px_#F6F7FA33] p-2 h-[46px] w-[120px] hover:cursor-pointer hover:bg-primary_dark_800 transition duration-300 ease-in-out"
            >
              Update
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-[24px] p-[24px]">
          <div className="flex gap-4 items-center w-full">
            <p className="account-input-label-style">Profile Photo</p>
            <div className="flex flex-row gap-4 items-center justify-start w-full">
              <div className="w-[46px] h-[46px] rounded-lg mr-6 shadow-[inset_0_0_5px_1px_#F6F7FA33]">
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Profile preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
              <label className="w-[220px] h-[46px] rounded-md text-center bg-primary_light_400 hover:bg-primary_dark_500 transition duration-300 ease-in-out items-center justify-center flex text-secondary_light_100 shadow-[inset_0_-3px_5px_1px_#F6F7FA33] cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
                Upload New Picture
              </label>
              <div
                className="w-[46px] h-[46px] rounded-md shadow-[inset_0_0_5px_1px_#F6F7FA33] flex items-center justify-center"
                onClick={() => setPreviewUrl(null)}
              >
                <RemoveIcon />
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center w-full">
            <p className="account-input-label-style">Full name</p>
            <div className="relative w-full">
              <input
                placeholder="Enter your full name"
                type="text"
                className="account-input-style"
                value={formData.fullName}
                onChange={handleInputChange("fullName")}
                autoComplete="username"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <UserIcon />
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center w-full">
            <p className="account-input-label-style">Email Address</p>
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="account-input-style"
                value={formData.email}
                onChange={handleInputChange("email")}
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <EmailIcon />
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center w-full">
            <p className="account-input-label-style">Locations</p>
            <div className="relative w-full">
              <input
                type="text"
                className="account-input-style"
                value={formData.location}
                onChange={handleInputChange("location")}
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2">
                <EmailIcon />
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* change password */}
      <div className="flex flex-col px-[24px] gap-[24px]">
        <div className="flex gap-4  w-full">
          <p className="account-input-label-style h-[46px] text-center flex items-center justify-start">
            Password
          </p>
          <div className="flex flex-col gap-[24px] w-full">
            {ChangePwdInputs.map((item, idx) => (
              <div className="relative w-full" key={idx}>
                <input
                  type={item.showIcon ? "text" : "password"}
                  placeholder={item.placeholder}
                  className="account-input-style"
                  value={item.value}
                  onChange={(e) => item.action(e.target.value)}
                  autoComplete="current-password"
                />
                <div className="absolute left-3 top-1/2 -translate-y-1/2">
                  <PasswordIcon />
                </div>
                <div
                  className="absolute right-3 top-1/2 -translate-y-1/2 hover:cursor-pointer"
                  onClick={() => item.setShowIcon(!item.showIcon)}
                >
                  {item.showIcon ? <EyeShowIcon /> : <EyeHideIcon />}
                </div>
              </div>
            ))}
            <div className="flex flex-row gap-2 w-full justify-end">
              <button
                type="submit"
                className="flex items-center justify-center rounded-md bg-primary_dark_700 shadow-[inset_0_-3px_5px_1px_#F6F7FA33] p-2 h-[46px] w-[120px] hover:cursor-pointer hover:bg-primary_dark_800 transition duration-300 ease-in-out"
                onClick={handlePwdChange}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
