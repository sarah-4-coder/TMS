import { useState } from "react";
import { Form } from "@remix-run/react";
import { UserId, userMock1 } from "@domain/user";
import { Button } from "@app/components/button";
import { UserAvatar } from "@app/components/user-avatar";
import * as Select from "@app/components/select";

export type User = {
  id: UserId;
  name: string;
  image?: string;
  color?: string;
};


//   {
//     id: "b18b41e7-749e-44ed-ad0d-6cd27a78a1cf",
//     name: "DTU",
//     image: "woody.webp",
//   },
//   {
//     id: "1c6855bf-9a0f-4a45-9641-7b7c7855c570",
//     name: "IIT",
//     color: "#dae3f9",
//   },

//   {
//     id: "eacafed4-c6f3-4908-a614-d3b97d76b1fe",
//     name: "NSUT",
//     image: "buzz-lightyear.webp",
//   },
//   {
//     id: "114020ad-5bc4-4ebe-a7cf-8ea78b338a73",
//     name: "BITS",
//     image: "jessie.webp",
//   },
//   // {
//   //   id: "3086bfaa-2978-43b3-95d2-cac334ad603e",
//   //   name: "Emperor Zurg",
//   //   image: "emperor-zurg.webp",
//   // },
//   // {
//   //   id: "4a9f3bc0-8aa0-4a38-b28a-e813b2414e64",
//   //   name: "Mr Potato",
//   //   image: "mr-potato.webp",
//   // },
//   // {
//   //   id: "a211fc6a-fa1f-4dd6-a6d8-acb5d8ab2b2a",
//   //   name: "Ms Potato",
//   //   image: "ms-potato.webp",
//   // },
//   // {
//   //   id: "a91ea376-c533-4ec8-bd0a-57d93862e1d6",
//   //   name: "Little Green Men",
//   //   image: "little-green-men.webp",
//   // },
//   // {
//   //   id: "29a87499-9d0c-4030-91c3-03b01d8fd362",
//   //   name: "T-Rex",
//   // },
//   // {
//   //   id: "759af9f6-2ffb-45d2-9c0a-be751185f286",
//   //   name: "Andy Davis",
//   //   image: "andy-davis.webp",
//   // },
// ];

// export const userMock3 = userMock1[0];

export const LoginView = ({ users }: Props) => {
  const [selectedValue, setSelectedValue] = useState<User>(userMock1);

  const onValueChange = (userId: UserId) => {
    const foundUser = users.find((user) => user.id === userId);

    if (foundUser) {
      setSelectedValue(foundUser);
    }
  };

  return (
    <div className="mx-auto max-w-[400px] flex-center h-full">
      {/* <h1 className="font-primary-black text-5xl text-font">
        Select login user
      </h1> */}

      <Form method="post" className="mx-auto w-[300px]">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="font-primary-black text-2xl text-font"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Username"
            required
            // value={username}
            // onChange={(e) => setUsername(e.target.value)}
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full rounded-md p-2 shadow-sm focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="font-primary-black text-2xl text-font"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 mb-5 mt-1 block w-full rounded-md p-2 shadow-sm focus:outline-none"
          />
        </div>
        <Select.Root
          name="user"
          defaultValue={userMock1.id}
          onValueChange={onValueChange}
        >
          <label
            htmlFor="password"
            className="text-gray-700 mb-3 block text-sm font-medium"
          >
            Select Institution
          </label>
          <Select.Trigger
            className="flex w-full justify-between"
            aria-label="Open user select"
          >
            <div className="flex items-center gap-2">
              <UserAvatar {...selectedValue} />
              <Select.Value />
            </div>
            <Select.TriggerIcon />
          </Select.Trigger>
          <Select.Content>
            <Select.ScrollUpButton />
            <Select.Viewport>
              {users.map((user, index) => (
                <Select.Item key={index} value={user.id}>
                  <Select.ItemIndicator />
                  <UserAvatar {...user} />
                  <Select.ItemText>{user.name}</Select.ItemText>
                </Select.Item>
              ))}
              <Select.Separator />
            </Select.Viewport>
            <Select.ScrollDownButton />
          </Select.Content>
        </Select.Root>
        <Button
          type="submit"
          name="_action"
          value="setUser"
          aria-label="Login"
          className="mt-2 w-full"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

interface Props {
  users: User[];
}
