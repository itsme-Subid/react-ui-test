import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Profile = () => {
  return (
    <div className="min-w-[20rem] p-2 border-r-2 h-screen overflow-auto bg-white">
      <div className="details">
        <div className="img-box relative bg-primary-foreground min-h-[7rem]">
          <img
            src="/img/profile.jpg"
            alt=""
            className="rounded-full max-w-[7rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 border-[0.325rem] border-white"
          />
        </div>
        <div className="text-center mt-14">
          <h2 className="text-xl font-bold text-gray-600">Subid Das</h2>
          <p className="text-base text-gray-400">itsmesubid@gmail.com</p>
        </div>
      </div>
      <div className="others p-2 flex flex-col gap-4">
        <div className="input-group flex flex-col gap-2">
          <label htmlFor="tags" className="label text-gray-600 font-semibold">
            Tags
          </label>
          <Select>
            <SelectTrigger className="w-full border border-gray-300">
              <SelectValue placeholder="Facebook Integration" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Tags</SelectLabel>
                <SelectItem value="facebook">Facebook Integration</SelectItem>
                <SelectItem value="apple">Apple Integration</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="input-group flex flex-col gap-2">
          <label
            htmlFor="category"
            className="label text-gray-600 font-semibold"
          >
            Category
          </label>
          <Select>
            <SelectTrigger className="w-full border border-gray-300">
              <SelectValue placeholder="Refund and Billing" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="facebook">Refund and Billing</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="input-group flex flex-col gap-2">
          <label htmlFor="group" className="label text-gray-600 font-semibold">
            Group
          </label>
          <Select>
            <SelectTrigger className="w-full border border-gray-300">
              <SelectValue placeholder="Refund and Billing" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Group</SelectLabel>
                <SelectItem value="facebook">Refund and Billing</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="input-group flex flex-col gap-2">
          <label
            htmlFor="Priority"
            className="label text-gray-600 font-semibold"
          >
            Priority
          </label>
          <Select>
            <SelectTrigger className="w-full border border-gray-300">
              <SelectValue placeholder="Urgent" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Priority</SelectLabel>
                <SelectItem value="facebook">Urgent</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="input-group flex flex-col gap-2">
          <label htmlFor="type" className="label text-gray-600 font-semibold">
            Type
          </label>
          <Select>
            <SelectTrigger className="w-full border border-gray-300">
              <SelectValue placeholder="Facebook Integration" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                <SelectItem value="facebook">Facebook Integration</SelectItem>
                <SelectItem value="apple">Apple Integration</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default Profile;
