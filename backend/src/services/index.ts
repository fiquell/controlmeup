import os from "node:os";

type Action = "restart" | "shutdown" | "suspend";
type ActionCommandMap = {
  [key in Action]: string;
};

export const getActionCommand = (action: Action) => {
  if (os.platform() !== "linux") {
    throw new Error("Unsupported operating system");
  }

  const actionCommandMap: ActionCommandMap = {
    restart: "test",
    shutdown: "test",
    suspend: "test",
  };
  const command = actionCommandMap[action];

  if (!command) {
    throw new Error("Invalid action command");
  }

  return command;
};
