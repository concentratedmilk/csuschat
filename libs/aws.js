import aws from 'aws-sdk'
import { env } from 'process'

aws.config.update({
    region: 'us-west-2',
    accessKeyId: `${process.env.AWS_ACCESS}`
})
