import { Bucket, Table } from "sst/constructs";

export function StorageStack({ stack, app }) {
  //Create a bucket
  const bucket = new Bucket(stack, "Uploads");

  //   //Allow public access to the bucket
  //   bucket.grantPublicAccess();

  //   //Get the bucket name
  //   const bucketDomainName = bucket.bucketDomainName;
  //   const bucketName = bucket.bucketName;

  //   //Get the bucket region
  //   const bucketRegion = bucket.region;

  //   //Get the bucket arn
  //   const bucketArn = bucket.bucketArn;

  //   //Get the bucket website url
  //   const bucketWebsiteUrl = bucket.bucketWebsiteUrl;

  //   //Get the bucket object
  //   const bucketObject = bucket.node.defaultChild;

  //   //Get the bucket policy
  //   const bucketPolicy = bucketObject.policy;

  //   //Get the bucket access control list
  //   const bucketAcl = bucketObject.accessControl;

  //   //Get the bucket encryption
  //   const bucketEncryption = bucketObject.encryption;

  //   //Get the bucket versioning
  //   const bucketVersioning = bucketObject.versioning;

  //   //Get the bucket logging
  //   const bucketLogging = bucketObject.logging;

  //   //Get the bucket request payment

  //Create dynamo db table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  return { bucket, table };
}
