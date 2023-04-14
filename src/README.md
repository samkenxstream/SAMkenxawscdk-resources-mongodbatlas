# CDK Constructors

[CDK Constructors](#cdk-constructors)
  * [L1 Constructors](#l1-constructors)
  * [L2 Constructors](#l2-constructors)
  * [L3 Constructors](#l3-constructors)

## L1 Constructors
L1 constructs are called Cfn (short for CloudFormation) resources. These resources are periodically generated from a specification called AWS CloudFormation Resource Specification and follow a naming pattern of "CfnXyz" where "Xyz" is the name of the resource. When working with Cfn resources, it is necessary to configure all of their properties, which requires a comprehensive understanding of the underlying CloudFormation resource model and its attributes. This means that a high level of technical expertise and knowledge is needed to effectively work with Cfn resources. See [AWS DevOps Blog](https://aws.amazon.com/blogs/devops/leverage-l2-constructs-to-reduce-the-complexity-of-your-aws-cdk-application/).


| Name                                 | Description                                                                                                                                                                                                                                                                       | Example                                                                                                        |
|--------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| alert-configuration                  | Returns and edits the conditions that trigger alerts and how MongoDB Cloud notifies users. This collection remains under revision and may change.                                                                                                                                 | [README.md](l1-resources/alert-configuration/README.md)                                  |
| auditing                             | Returns and edits database auditing settings for MongoDB Cloud projects.                                                                                                                                                                                                          | [README.md](l1-resources/auditing/README.md)                                                         |
| cloud-backup-restore-jobs            | Returns, starts, and cancels Cloud Backup restore jobs.                                                                                                                                                                                                                           | [README.md](l1-resources/cloud-backup-restore-jobs/README.md)                      |
| cloud-backup-schedule                | This resource allow you to manage cloud backup schedule.                                                                                                                                                                                                                          | [README.md](l1-resources/cloud-backup-schedule/README.md )                               |
| cloud-backup-snapshots               | Returns, takes, and removes Cloud Backup snapshots.                                                                                                                                                                                                                               | [ README.md](l1-resources/cloud-backup-snapshot/README.md)                               |
| cloud-backup-snapshot-export-bucket  | This resource allows you to grant Atlas access to the specified bucket for exporting backup snapshots.                                                                                                                                                                            | [READE.md](l1-resources/cloud-backup-snapshot-export-bucket/README.md)   |
| cluster                              | The cluster resource provides access to your cluster configurations. The resource lets you create, edit and delete clusters. The resource requires your Project ID.                                                                                                               | [README.md](l1-resources/clusters/README.md )                                                           |
| custom-db-role                       | Returns, adds, edits, and removes custom database user privilege roles.                                                                                                                                                                                                           | [README.md](l1-resources/custom-db-role/README.md)                                             |
| custom-dns-configuration-cluster-aws | An example resource schema demonstrating some basic constructs and validation rules.                                                                                                                                                                                              | [README.md](l1-resources/custom-dns-configuration-cluster-aws/README.md) |
| database-user                        | Returns, adds, edits, and removes database users.                                                                                                                                                                                                                                 | [README.md](l1-resources/database-user/README.md)                                               |
| datalakes                            | Returns, adds, edits, and removes Federated Database Instances.                                                                                                                                                                                                                   | [README.md](l1-resources/datalakes/README.md)                                                            |
| encryption-at-rest                   | Returns and edits the Encryption at Rest using Customer Key Management configuration.                                                                                                                                                                                             | [README.md](l1-resources/encryption-at-rest/README.md)                                       |
| federated-settings-org-role-mapping  | Returns, adds, edits, and removes federation-related features such as role mappings and connected organization configurations.                                                                                                                                                    | [README.md](l1-resources/federated-settings-org-role-mapping/README.md) |
| global-cluster-config                | Returns, adds, and removes Global Cluster managed namespaces and custom zone mappings.                                                                                                                                                                                            | [README.md](l1-resources/global-cluster-config/README.md)                        |
| ldap-configuration                   | Returns, edits, verifies, and removes LDAP configurations.                                                                                                                                                                                                                        | [README.md](l1-resources/ldap-configuration/README.md)                                                         |
| ldap-verify                          | Requests a verification of an LDAP configuration over TLS for an Atlas project. Pass the requestId in the response object to the Verify \|ldap\| Configuration endpoint to get the status of a verification request. Atlas retains only the most recent request for each project. | [README.md](l1-resources/ldap-verify/README.md)                                                                |
| maintenance-window                   | The maintenanceWindow resource provides access to retrieve or update the current Atlas project maintenance window.                                                                                                                                                                | [README.md](l1-resources/maintenance-window/README.md)                                                        |
| network-container                    | Returns, adds, edits, and removes network peering containers.                                                                                                                                                                                                                     | [README.md](l1-resources/network-container/README.md)                                                         |
| network-peering                      | Returns, adds, edits, and removes network peering containers and peering connections.                                                                                                                                                                                             | [README.md](l1-resources/network-peering/README.md)                                                          | 
| online-archive                    | Returns, adds, edits, or removes an online archive.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [README.md](l1-resources/online-archive/README.md)                    |                                                                                                                                                                                                                                                                   | 
| org-invitation                    | Returns, adds, and edits organizational units in MongoDB Cloud.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | [README.md](l1-resources/org-invitation/README.md)                    |
| private-endpoint                  | The Private Endpoint creation flow consists of the creation of three related resources in the next order: 1. Atlas Private Endpoint Service 2. Aws VPC private Endpoint 3. Atlas Private Endpoint                                                                                                                                                                                                                                                                                                                                                                                                               | [README.md](l1-resources/private-endpoint/README.md)                  |
| private-endpoint-adl              | Adds one private endpoint for Federated Database Instances and Online Archives to the specified projects. To use this resource, the requesting API Key must have the Project Atlas Admin or Project Charts Admin roles. This resource doesn't require the API Key to have an Access List.                                                                                                                                                                                                                                                                                                                       | [README.md](l1-resources/private-endpoint-adl/README.md)              |
| private-endpoint-regional-mode    | This resource manages the private enpoint regional mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | [README.md](l1-resources/private-endpoint-regional-mode/README.md)    |
| project                           | Retrieves or creates projects in any given Atlas organization.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | [README.md](l1-resources/project/README.md)                           |
| project-invitation                | Returns, send project invitations.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | [README.md](l1-resources/project-invitation/README.md)                |
| project-ip-access-list            | Returns, adds, edits, and removes network access limits to database deployments in MongoDB Cloud.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | [README.md](l1-resources/project-ip-access-list/README.md)            |
| search-index                      | Returns, adds, edits, and removes Atlas Search indexes. Also returns and updates user-defined analyzers.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | [README.md](l1-resources/search-index/README.md)                      |
| serverless-instance               | Returns, adds, edits, and removes serverless instances.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | [README.md](l1-resources/serverless-instance/README.md)               |
| teams                             | Adds one team to the specified project. All members of the team share the same project access. To use this resource, the requesting API Key must have the Project User Admin role. This resource doesn't require the API Key to have an Access List.                                                                                                                                                                                                                                                                                                                                                            | [README.md](l1-resources/teams/README.md)                             |
| third-party-integration           | Returns, adds, edits, and removes third-party service integration configurations. MongoDB Cloud sends alerts to each third-party service that you configure.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | [README.md](l1-resources/third-party-integration/README.md)           |
| trigger                           | View and manage your application's  [triggers](https://www.mongodb.com/docs/atlas/app-services/triggers/overview/).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | [README.md](l1-resources/trigger/README.md)                           |
| x509-authentication-database-user | Generates one X.509 certificate for the specified MongoDB user. Atlas manages the certificate and MongoDB user that belong to one project. To use this resource, the requesting API Key must have the Project Atlas Admin role. This resource doesn't require the API Key to have an Access List.  To get MongoDB Cloud to generate a managed certificate for a database user, set  ` "x509Type" : "MANAGED" `  on the desired MongoDB Database User.  If you are managing your own Certificate Authority (CA) in Self-Managed X.509 mode, you must generate certificates for database users using your own CA. | [README.md](l1-resources/x509-authentication-database-user/README.md) |                                                                                                                                                                                                    



## L2 Constructors
L2 constructs represent AWS resources with a higher-level, intent-based API. They provide additional functionality with defaults, boilerplate, and glue logic that you’d be writing yourself with L1 constructs. AWS constructs offer convenient defaults and reduce the need to know all of the details about the AWS resources that they represent. This is done while providing convenient methods that make it simpler to work with the resources and as a result create your application. See [AWS DevOps Blog](https://aws.amazon.com/blogs/devops/leverage-l2-constructs-to-reduce-the-complexity-of-your-aws-cdk-application/).
| Name                     | Description                                                                                                                                                                                                                                        | Example                                                                                       |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| atlas-encryption-at-rest | Returns and edits the Encryption at Rest using Customer Key Management configuration.                                                                                                                                                              | [README.md](l2-resources/encryption-at-rest/README.md)|
| atlas-integrations       | Returns, adds, edits, and removes third-party service integration configurations. MongoDB Cloud sends alerts to each third-party service that you configure. Currently supporting MicrosoftTeams, Datadog and PagerDuty for a given Atlas project. | [README.md](l2-resources/third-party-integration/README.md)   |



## L3 Constructors
L3 constructs are called patterns. They’re designed to complete common tasks in MongoDB Atlas and AWS , often involving multiple types of resources. See [AWS DevOps Blog](https://aws.amazon.com/blogs/devops/leverage-l2-constructs-to-reduce-the-complexity-of-your-aws-cdk-application/).

| Name                         | Description                                                                                                                                                                                                                                                                                                  | Example                                                                                               |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| atlas-basic                  | The resource lets you create Project, Cluster, DB User and configures IpAccesslist.                                                                                                                                                                                                                          | [README.md](l3-resources/atlas-basic/README.md)                                       |
| atlas-basic-private-endpoint | Creates a MongoDB Atlas Project, Cluster, DBuser, Private Endpoint and adds an IP entry to the IP Access List.                                                                                                                                                                                               | [README.md](l3-resources/atlas-basic-private-endpoint/README.md)  |
| encryption-at-rest-express   | The resource lets you create an Atlas Cluster, DB User, add an entry to the IP Access List and sets [Encryption at Rest using Customer Key Management](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Encryption-at-Rest-using-Customer-Key-Management) in your MongoDB Atlas Project. | [README.md](l3-resources/encryption-at-rest-express/README.md)              |