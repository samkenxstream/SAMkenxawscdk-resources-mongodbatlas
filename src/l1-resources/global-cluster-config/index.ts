// Generated by cdk-import
import * as cdk from "aws-cdk-lib";
import * as constructs from "constructs";

/**
 * Returns, adds, and removes Global Cluster managed namespaces and custom zone mappings.
 *
 * @schema CfnGlobalClusterConfigProps
 */
export interface CfnGlobalClusterConfigProps {
  /**
   * The profile is defined in AWS Secret manager. See [Secret Manager Profile setup](../../../examples/profile-secret.yaml).
   *
   * @schema CfnGlobalClusterConfigProps#Profile
   */
  readonly profile?: string;

  /**
   * The unique identifier of the project for the Atlas cluster.
   *
   * @schema CfnGlobalClusterConfigProps#ProjectId
   */
  readonly projectId?: string;

  /**
   * The name of the Atlas cluster that contains the snapshots you want to retrieve.
   *
   * @schema CfnGlobalClusterConfigProps#ClusterName
   */
  readonly clusterName?: string;

  /**
   * List that contains comma-separated key value pairs to map zones to geographic regions. These pairs map an ISO 3166-1a2 location code, with an ISO 3166-2 subdivision code when possible, to the human-readable label for the desired custom zone. MongoDB Cloud maps the ISO 3166-1a2 code to the nearest geographical zone by default. Include this parameter to override the default mappings.
   *
   * This parameter returns an empty object if no custom zones exist.
   *
   * @schema CfnGlobalClusterConfigProps#ManagedNamespaces
   */
  readonly managedNamespaces?: ManagedNamespace[];

  /**
   * List that contains comma-separated key value pairs to map zones to geographic regions. These pairs map an ISO 3166-1a2 location code, with an ISO 3166-2 subdivision code when possible, to the human-readable label for the desired custom zone. MongoDB Cloud maps the ISO 3166-1a2 code to the nearest geographical zone by default. Include this parameter to override the default mappings.
   *
   * This parameter returns an empty object if no custom zones exist.
   *
   * @schema CfnGlobalClusterConfigProps#CustomZoneMappings
   */
  readonly customZoneMappings?: ZoneMapping[];
}

/**
 * Converts an object of type 'CfnGlobalClusterConfigProps' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_CfnGlobalClusterConfigProps(
  obj: CfnGlobalClusterConfigProps | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Profile: obj.profile,
    ProjectId: obj.projectId,
    ClusterName: obj.clusterName,
    ManagedNamespaces: obj.managedNamespaces?.map((y) =>
      toJson_ManagedNamespace(y)
    ),
    CustomZoneMappings: obj.customZoneMappings?.map((y) =>
      toJson_ZoneMapping(y)
    ),
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema managedNamespace
 */
export interface ManagedNamespace {
  /**
   * Human-readable label of the collection to manage for this Global Cluster.
   *
   * @schema managedNamespace#Collection
   */
  readonly collection?: string;

  /**
   * Database parameter used to divide the *collection* into shards. Global clusters require a compound shard key. This compound shard key combines the location parameter and the user-selected custom key.
   *
   * @schema managedNamespace#CustomShardKey
   */
  readonly customShardKey?: string;

  /**
   * Human-readable label of the database to manage for this Global Cluster.
   *
   * @schema managedNamespace#Db
   */
  readonly db?: string;

  /**
   * Flag that indicates whether someone hashed the custom shard key for the specified collection. If you set this value to `false`, MongoDB Cloud uses ranged sharding.
   *
   * @schema managedNamespace#IsCustomShardKeyHashed
   */
  readonly isCustomShardKeyHashed?: boolean;

  /**
   * Flag that indicates whether someone [hashed](https://www.mongodb.com/docs/manual/reference/method/sh.shardCollection/#hashed-shard-keys) the custom shard key. If this parameter returns `false`, this cluster uses [ranged sharding](https://www.mongodb.com/docs/manual/core/ranged-sharding/).
   *
   * @schema managedNamespace#IsShardKeyUnique
   */
  readonly isShardKeyUnique?: boolean;
}

/**
 * Converts an object of type 'ManagedNamespace' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ManagedNamespace(
  obj: ManagedNamespace | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Collection: obj.collection,
    CustomShardKey: obj.customShardKey,
    Db: obj.db,
    IsCustomShardKeyHashed: obj.isCustomShardKeyHashed,
    IsShardKeyUnique: obj.isShardKeyUnique,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * @schema zoneMapping
 */
export interface ZoneMapping {
  /**
   * Code that represents a location that maps to a zone in your global cluster. MongoDB Cloud represents this location with a ISO 3166-2 location and subdivision codes when possible.
   *
   * @schema zoneMapping#Location
   */
  readonly location?: string;

  /**
   * Human-readable label that identifies the zone in your global cluster. This zone maps to a location code.
   *
   * @schema zoneMapping#Zone
   */
  readonly zone?: string;
}

/**
 * Converts an object of type 'ZoneMapping' to JSON representation.
 */
/* eslint-disable max-len, quote-props */
export function toJson_ZoneMapping(
  obj: ZoneMapping | undefined
): Record<string, any> | undefined {
  if (obj === undefined) {
    return undefined;
  }
  const result = {
    Location: obj.location,
    Zone: obj.zone,
  };
  // filter undefined values
  return Object.entries(result).reduce(
    (r, i) => (i[1] === undefined ? r : { ...r, [i[0]]: i[1] }),
    {}
  );
}
/* eslint-enable max-len, quote-props */

/**
 * A CloudFormation `MongoDB::Atlas::GlobalClusterConfig`
 *
 * @cloudformationResource MongoDB::Atlas::GlobalClusterConfig
 * @stability external
 */
export class CfnGlobalClusterConfig extends cdk.CfnResource {
  /**
   * The CloudFormation resource type name for this resource class.
   */
  public static readonly CFN_RESOURCE_TYPE_NAME =
    "MongoDB::Atlas::GlobalClusterConfig";

  /**
   * Resource props.
   */
  public readonly props: CfnGlobalClusterConfigProps;

  /**
   * Attribute `MongoDB::Atlas::GlobalClusterConfig.RemoveAllZoneMapping`
   */
  public readonly attrRemoveAllZoneMapping: cdk.IResolvable;

  /**
   * Create a new `MongoDB::Atlas::GlobalClusterConfig`.
   *
   * @param scope - scope in which this resource is defined
   * @param id    - scoped id of the resource
   * @param props - resource properties
   */
  constructor(
    scope: constructs.Construct,
    id: string,
    props: CfnGlobalClusterConfigProps
  ) {
    super(scope, id, {
      type: CfnGlobalClusterConfig.CFN_RESOURCE_TYPE_NAME,
      properties: toJson_CfnGlobalClusterConfigProps(props)!,
    });

    this.props = props;

    this.attrRemoveAllZoneMapping = this.getAtt("RemoveAllZoneMapping");
  }
}
