import { CustomInputInterface } from "../../types/setting";

export const CustomInput = (item: CustomInputInterface) => {
  return (
    <div className="py-2 px-4 bg-[#E6E0E9] rounded-md flex flex-col justify-start items-start ">
      <label className="text-sm text-text_deactivate_light">{item.label}</label>
      <div className="w-full flex flex-row gap-[1px] items-center justify-between">
        {item.unit && (
          <p className="font-medium text-text_activate_dark">{item.unit}</p>
        )}
        <input
          type="number"
          value={item.value}
          className="bg-[#E6E0E9] rounded w-full font-medium text-text_activate_dark focus:outline-none"
        />
      </div>
    </div>
  );
};
