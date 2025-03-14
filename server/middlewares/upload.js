import multer from "multer";

const storage = multer.memoryStorage();

export const profileUpload = multer({ storage }).single("profile");