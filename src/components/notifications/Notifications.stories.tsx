import type { Meta, StoryObj } from "@storybook/react";

import { NotificationProvider } from "@/context/notifications/NotificationProvider";
import { useNotification } from "@/context/notifications";
import { Notifications } from "./Notifications";

const meta = {
  title: "Components/Notifications",
  component: Notifications,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <NotificationProvider>
        <Story />
      </NotificationProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Notifications>;

export default meta;
type Story = StoryObj<typeof Notifications>;

// 通知を表示するためのカスタムフック
const useShowNotification = () => {
  const { showNotification } = useNotification();
  return showNotification;
};

// 各通知タイプのストーリー
export const Success: Story = {
  args: {},
  render: () => {
    const showNotification = useShowNotification();
    return (
      <div>
        <button
          onClick={() =>
            showNotification({
              type: "success",
              message: "操作が成功しました",
              title: "成功",
            })
          }
        >
          成功通知を表示
        </button>
        <Notifications />
      </div>
    );
  },
};

export const Error: Story = {
  render: () => {
    const showNotification = useShowNotification();
    return (
      <div>
        <button
          onClick={() =>
            showNotification({
              type: "error",
              message: "エラーが発生しました",
              title: "エラー",
            })
          }
        >
          エラー通知を表示
        </button>
        <Notifications />
      </div>
    );
  },
};

export const Warning: Story = {
  render: () => {
    const showNotification = useShowNotification();
    return (
      <div>
        <button
          onClick={() =>
            showNotification({
              type: "warning",
              message: "警告メッセージです",
              title: "警告",
            })
          }
        >
          警告通知を表示
        </button>
        <Notifications />
      </div>
    );
  },
};

export const Info: Story = {
  render: () => {
    const showNotification = useShowNotification();
    return (
      <div>
        <button
          onClick={() =>
            showNotification({
              type: "info",
              message: "情報メッセージです",
              title: "情報",
            })
          }
        >
          情報通知を表示
        </button>
        <Notifications />
      </div>
    );
  },
};

// 複数の通知を同時に表示
export const Multiple: Story = {
  render: () => {
    const showNotification = useShowNotification();
    return (
      <div>
        <button
          onClick={() => {
            showNotification({
              type: "success",
              message: "操作が成功しました",
              title: "成功",
            });
            showNotification({
              type: "error",
              message: "エラーが発生しました",
              title: "エラー",
            });
            showNotification({
              type: "warning",
              message: "警告メッセージです",
              title: "警告",
            });
            showNotification({
              type: "info",
              message: "情報メッセージです",
              title: "情報",
            });
          }}
        >
          すべての通知を表示
        </button>
        <Notifications />
      </div>
    );
  },
};
