import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuid } from "uuid";

const ACCOUNT_ID = process.env.R2_ACCOUNT_ID ?? "";
const ACCESS_KEY_ID = process.env.R2_ACCESS_KEY_ID ?? "";
const SECRET_ACCESS_KEY = process.env.R2_SECRET_ACCESS_KEY ?? "";
const BUCKET_NAME = process.env.R2_BUCKET_NAME ?? "metaphonic-voices";

const S3 = new S3Client({
  region: "auto",
  endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
});

export async function getSignedFileUrl(fileKey: string) {
  return await getSignedUrl(
    S3,
    new GetObjectCommand({ Bucket: BUCKET_NAME, Key: fileKey }),
    { expiresIn: 3600 }
  );
}

export async function uploadFile(file: Buffer) {
  const fileKey = getFileKey();
  await S3.send(
    new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileKey,
      Body: file,
      ContentType: "audio/webm",
    })
  );
  return fileKey;
}

function getFileKey() {
  const id = uuid();
  return `${Date.now()}_${id.replace(/[^0-9a-zA-Z.]/g, "")}`;
}
