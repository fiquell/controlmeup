import { spawnSync } from "child_process";
import { Request, Response } from "express";
import { getActionCommand } from "../services";

export const restart = (req: Request, res: Response) => {
  try {
    const command = getActionCommand("restart");
    spawnSync(command, { shell: true });
    res
      .status(200)
      .json({ success: true, message: "Successfully restart the system" });
  } catch (error) {
    console.error("Error during restart:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const shutdown = (req: Request, res: Response) => {
  try {
    const command = getActionCommand("shutdown");
    spawnSync(command, { shell: true });
    res
      .status(200)
      .json({ success: true, message: "Successfully shutdown the system" });
  } catch (error) {
    console.error("Error during shutdown:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const suspend = (req: Request, res: Response) => {
  try {
    const command = getActionCommand("suspend");
    spawnSync(command, { shell: true });
    res
      .status(200)
      .json({ success: true, message: "Successfully suspend the system" });
  } catch (error) {
    console.error("Error during suspend:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
