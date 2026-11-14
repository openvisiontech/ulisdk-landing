
This document is published by Open Vision Technology LLC.

8 Thompson Pond Road, Stoneham, MA 02180, U.S.A.

Tel: 339-293-2151

Copyright 2025 by Open Vision Technology LLC.

This document contains proprietary information protected by copyright. All rights reserved. No part of this document may be photocopied or reproduced without the prior written consent of Open Vision Technology LLC.

##

<a id="message-summary"></a>
# **Message Summary**

Here is the list of the core messages:

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000101 | [Query Link](#query-link) |
| H:0x00000001 L: 0x00000102 | [Report Link](#report-link) |
| H:0x00000001 L: 0x00000103 | [Component Ready](#component-ready) |
| H:0x00000001 L: 0x00000104 | [Node Manager Ready](#node-manager-ready) |
| H:0x00000001 L: 0x00000105 | [Node Ready](#node-ready) |
| H:0x00000001 L: 0x00000106 | [Node ID Request](#node-id-request) |
| H:0x00000001 L: 0x00000107 | [Node ID Granted](#node-id-granted) |
| H:0x00000001 L: 0x00000108 | [Subsystem Manager Ready](#subsystem-manager-ready) |
| H:0x00000001 L: 0x00000109 | [ID Request](#id-request) |
| H:0x00000001 L: 0x0000010A | [Query Allocated ID](#query-allocated-id) |
| H:0x00000001 L: 0x0000010B | [ID Granted](#id-granted) |
| H:0x00000001 L: 0x0000010C | [Report Allocated ID](#report-allocated-id) |
| H:0x00000001 L: 0x0000010D | [Query Identification](#query-identification) |
| H:0x00000001 L: 0x0000010E | [Register Comp Services](#register-comp-services) |
| H:0x00000001 L: 0x0000010F | [Query Comp Services](#query-comp-services) |
| H:0x00000001 L: 0x00000110 | [Query Subsystem Services](#query-subsystem-services) |
| H:0x00000001 L: 0x00000111 | [Report Identification](#report-identification) |
| H:0x00000001 L: 0x00000112 | [Report Comp Services](#report-comp-services) |
| H:0x00000001 L: 0x00000113 | [Report Subsystem Services](#report-subsystem-services) |
| H:0x00000001 L: 0x00000114 | [Query Comp Health](#query-comp-health) |
| H:0x00000001 L: 0x00000115 | [Report Comp Health](#report-comp-health) |
| H:0x00000001 L: 0x00000116 | [Query Comp Status Details](#query-comp-status-details) |
| H:0x00000001 L: 0x00000117 | [Report Comp Status Detail](#report-comp-status-details) |
| H:0x00000001 L: 0x00000118 | [Register Comp Health](#register-comp-health) |
| H:0x00000001 L: 0x00000119 | [Register Comp Status Details](#register-comp-status-details) |
| H:0x00000001 L: 0x0000011A | [Register Comp Health Context](#register-comp-health-context) |
| H:0x00000001 L: 0x0000011B | [Query Subsystem Management States](#query-subsystem-management-states) |
| H:0x00000001 L: 0x0000011C | [Query Subsystem Health](#query-subsystem-health) |
| H:0x00000001 L: 0x0000011D | [Query Subsystem Status Details](#query-subsystem-status-details) |
| H:0x00000001 L: 0x0000011E | [Query Subsystem Health Context](#query-subsystem-health-context) |
| H:0x00000001 L: 0x0000011F | [Report Subsystem Management States](#report-subsystem-management-states) |
| H:0x00000001 L: 0x00000120 | [Report Subsystem Health](#report-subsystem-health) |
| H:0x00000001 L: 0x00000121 | [Report Subsystem Status Details](#report-subsystem-status-details) |
| H:0x00000001 L: 0x00000122 | [Report Subsystem Health Context](#report-subsystem-health-context) |
| H:0x00000001 L: 0x00000123 | [Request Subsystem Access](#request-subsystem-access) |
| H:0x00000001 L: 0x00000124 | [Confirm Subsystem Access](#confirm-subsystem-access) |
| H:0x00000001 L: 0x00000125 | [Set Access](#set-access) |
| H:0x00000001 L: 0x00000126 | [Query Subsystem Control Status](#query-subsystem-control-status) |
| H:0x00000001 L: 0x00000127 | [Report Subsystem Control Status](#report-subsystem-control-status) |
| H:0x00000001 L: 0x00000128 | [Request Subsystem Control](#request-subsystem-control) |
| H:0x00000001 L: 0x00000129 | [Release Subsystem Control](#release-subsystem-control) |
| H:0x00000001 L: 0x0000012A | [Request Handover](#request-handover) |
| H:0x00000001 L: 0x0000012B | [Confirm Subsystem Control](#confirm-subsystem-control) |
| H:0x00000001 L: 0x0000012C | [Set Session Uuid](#set-control-session) |
| H:0x00000001 L: 0x0000012D | [Request Release](#request-release) |
| H:0x00000001 L: 0x0000012E | [Reject Subsystem Control](#reject-subsystem-control) |
| H:0x00000001 L: 0x0000012F | [Request Control](#request-control) |
| H:0x00000001 L: 0x00000130 | [Release Control](#release-control) |
| H:0x00000001 L: 0x00000131 | [Query Control](#query-control) |
| H:0x00000001 L: 0x00000132 | [Confirm Control](#confirm-control) |
| H:0x00000001 L: 0x00000133 | [Reject Control](#reject-control) |
| H:0x00000001 L: 0x00000134 | [Report Control](#report-control) |
| H:0x00000001 L: 0x00000135 | [Reset](#reset) |
| H:0x00000001 L: 0x00000136 | [Start](#start) |
| H:0x00000001 L: 0x00000137 | [Go](#go) |
| H:0x00000001 L: 0x00000138 | [Set Emergency](#set-emergency) |
| H:0x00000001 L: 0x00000139 | [Clear Emergency](#clear-emergency) |
| H:0x00000001 L: 0x0000013A | [Pause](#pause) |
| H:0x00000001 L: 0x0000013B | [Resume](#resume) |
| H:0x00000001 L: 0x0000013C | [Shutdown](#shutdown) |
| H:0x00000001 L: 0x0000013D | [Render Useless](#render-useless) |
| H:0x00000001 L: 0x0000013E | [Query Management State](#query-management-state) |
| H:0x00000001 L: 0x0000013F | [Report Management State](#report-management-state) |
| H:0x00000001 L: 0x00000140 | [Set Subsystem State](#set-subsystem-state) |
| H:0x00000001 L: 0x00000141 | [Query Subsystem State](#query-subsystem-state) |
| H:0x00000001 L: 0x00000142 | [Report Subsystem State](#report-subsystem-state) |
| H:0x00000001 L: 0x00000143 | [Set Estop](#set-estop) |
| H:0x00000001 L: 0x00000144 | [Set Operating Mode](#set-operating-mode) |
| H:0x00000001 L: 0x00000145 | [Query Operating Mode](#query-operating-mode) |
| H:0x00000001 L: 0x00000146 | [Report Operating Mode](#report-operating-mode) |
| H:0x00000001 L: 0x00000147 | [Register Resources](#register-resources) |
| H:0x00000001 L: 0x00000148 | [Query Subsystem Resources](#query-subsystem-resources) |
| H:0x00000001 L: 0x00000149 | [Report Subsystem Resources](#report-subsystem-resources) |
| H:0x00000001 L: 0x0000014A | [Subscribe Data Topics](#subscribe-data-topics) |
| H:0x00000001 L: 0x0000014B | [Receive Data Topics](#receive-data-topics) |
| H:0x00000001 L: 0x0000014C | [Register Data Topics](#register-data-topics) |
| H:0x00000001 L: 0x0000014D | [Register Schemas](#register-schemas) |
| H:0x00000001 L: 0x0000014E | [Query Available Data Topics](#query-available-data-topics) |
| H:0x00000001 L: 0x0000014F | [Report Available Data Topics](#report-available-data-topics) |
| H:0x00000001 L: 0x00000150 | [Query Schemas](#query-schemas) |
| H:0x00000001 L: 0x00000151 | [Report Schemas](#report-schemas) |
| H:0x00000001 L: 0x00000152 | [Query Agent Capabilities](#query-agent-capabilities) |
| H:0x00000001 L: 0x00000153 | [Report Agent Capabilities](#report-agent-capabilities) |
| H:0x00000001 L: 0x00000154 | [Request Agent](#request-agent) |
| H:0x00000001 L: 0x00000155 | [Confirm Agent](#confirm-agent) |
| H:0x00000001 L: 0x00000156 | [Query Agent Status](#query-agent-status) |
| H:0x00000001 L: 0x00000157 | [Report Agent Status](#report-agent-status) |
| H:0x00000001 L: 0x00000158 | [Set Agent Control](#set-agent-control) |
| H:0x00000001 L: 0x00000159 | [Report Agent Complete](#report-agent-complete) |
| H:0x00000001 L: 0x0000015A | [Register Agent](#register-agent) |
| H:0x00000001 L: 0x0000015B | [Query Agents](#query-agents) |
| H:0x00000001 L: 0x0000015C | [Report Agents](#report-agents) |
| H:0x00000001 L: 0x0000015D | [Query Available Transforms](#query-available-transforms) |
| H:0x00000001 L: 0x0000015E | [Report Available Transforms](#report-available-transforms) |
| H:0x00000001 L: 0x0000015F | [Register Transform Query](#register-transform-query) |
| H:0x00000001 L: 0x00000160 | [Report Transform](#report-transform) |
| H:0x00000001 L: 0x00000161 | [Register Transform Reporter](#register-transform-reporter) |
| H:0x00000001 L: 0x00000162 | [Query Transform Reporters](#query-transform-reporters) |
| H:0x00000001 L: 0x00000163 | [Report Transform Reporters](#report-transform-reporters) |
| H:0x00000001 L: 0x00000164 | [Event](#event) |

##

<a id="query-link"></a>
# **Query Link** [⬆️](#message-summary "Message Summary")

The Transport service sends a Query Link message to other components. The recipient component replies with a Report Link message, including the timestamp of the original Query Link. This enables the Transport service to calculate the round-trip time to the components.

Uni-cast  
Recipient replies: Report Link.

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000101 | Query Link |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | timeStamp | Float64, the time this message is sent |

##

<a id="report-link"></a>
# **Report Link** [⬆️](#message-summary "Message Summary")

The recipient component replies with a Report Link message, which includes the timestamp from the original Query Link. This allows the Transport service to calculate the round-trip time to the component.

Uni-cast  
Response to: Query Link.

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000102 | Report Link |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | timeStamp | Float64, the time this message is sent |

##

<a id="component-ready"></a>
# **Component Ready** [⬆️](#message-summary "Message Summary")

The component repeatedly sends this message to the Node Manager to indicate that it is functioning at the transport level. The Node Manager forwards messages to the component, which in turn refreshes this message.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000103 | Component Ready |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | component Id | UInt8, ID of the component which is ready |

##

<a id="node-manager-ready"></a>
# **Node Manager Ready** [⬆️](#message-summary "Message Summary")

The Node Manager repeatedly sends this message to all components in the node to indicate that it is functioning at the transport level. This message also confirms that the Subsystem ID and Node ID in the address field are valid.

Node-broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000104 | Node Manager Ready |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsys Address | Comp Address, address of subsystem manager. |
| 2 | subsys Session Uuid | UliUuid, Subsystem wide session Uuid, used by service to gain control or command of services in the same subsystem. |
| 3 | address | Comp Address, address of the node manager that is ready. |

##

<a id="node-ready"></a>
# **Node Ready** [⬆️](#message-summary "Message Summary")

The Node Manager repeatedly sends this message to the Subsystem Manager to indicate that the node is functioning at the transport level.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000105 | Node Ready |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | node Id | UInt16, ID of the node which is ready |

##

<a id="node-id-request"></a>
# **Node ID Request** [⬆️](#message-summary "Message Summary")

The Node Manager sends this message to the Subsystem Manager to request assignment of a Node ID. The Node Manager uses Node ID 0 in the sender address field.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000106 | Node ID Request |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | request Uuid | UliUuid, unique identifier of the request |

##

<a id="node-id-granted"></a>
# **Node ID Granted** [⬆️](#message-summary "Message Summary")

The Subsystem Manager broadcasts this message to all Node Managers in the subsystem. Each Node Manager compares the request UUID with the one in the message to determine if the Node ID is intended for it.

Subsystem-broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000107 | Node ID Granted |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | request Uuid | UliUuid, unique identifier of the request |
| 2 | node Id | Uint16, ID assigned to the node |

##

<a id="subsystem-manager-ready"></a>
# **Subsystem Manager Ready** [⬆️](#message-summary "Message Summary")

The Subsystem Manager repeatedly broadcasts this message to all Node Managers in the subsystem to indicate that the subsystem is functioning at the transport level. This message also confirms that the Subsystem ID is valid.

Subsystem-broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000108 | Subsystem Manager Ready |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsys Session Uuid | UliUuid, Subsystem wide session Uuid, used by service to gain control or command of services in the same subsystem. |
| 2 | address | Comp Adress, address of the subsystem manager that is ready. |

##

<a id="id-request"></a>
# **ID Request** [⬆️](#message-summary "Message Summary")

The Subsystem Manager broadcasts this message to request an ID from the ID Allocator on the network.

Global broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000109 | ID Request |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | request Uuid | UliUuid, unique identifier of the request |
| 2 | subsystem Type | ::SubsystemTypeEnum: UNKNOWN, UNMANNED, AI\_AGENT, CONTROLLER, META\_HUMAN, PROCESS\_TOOL |
| 3 | comp Id | UInt8, component ID of the subsystem manager |

##

<a id="query-allocated-id"></a>
# **Query Allocated ID** [⬆️](#message-summary "Message Summary")

The Subsystem Manager sends this message to the ID Allocator to validate whether its ID has been correctly allocated. If the ID validation fails, the Subsystem Manager stops broadcasting "Subsystem Manager Ready" messages to all Node Managers and must re-obtain a valid ID.

* **ID \= 0** is used to query all system IDs.

* **Subsystem type \= UNKNOWN** is used to query all subsystem types.

Uni-cast  
Recipient replies: Report Allocated ID.

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000010A | Query Allocated ID |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsystem Id | UInt32, Subsystem ID |
| 2 | subsystem Type | ::SubsystemTypeEnum: UNKNOWN, UNMANNED, AI\_AGENT, CONTROLLER, META\_HUMAN, PROCESS\_TOOL |

##

<a id="id-granted"></a>
# **ID Granted** [⬆️](#message-summary "Message Summary")

The ID Allocator grants the subsystem ID to the Subsystem Manager that requested it.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000010B | ID Granted |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | request Uuid | UliUuid, unique identifier of the request |
| 2 | subsystem Id | UInt32, ID allocated for the Subsystem Manager |
| 3 | subsystem Type | ::SubsystemTypeEnum: UNKNOWN, UNMANNED, AI\_AGENT, CONTROLLER, META\_HUMAN, PROCESS\_TOOL |
| 4 | comp Id | UInt8, component ID of the subsystem manager |

##

<a id="report-allocated-id"></a>
# **Report Allocated ID** [⬆️](#message-summary "Message Summary")

The ID Allocator reports allocated IDs, grouped by subsystem type.

Uni-cast  
Response to: Query Allocated ID.

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000010C | Report Allocated ID |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsystem type allocated id rec list | List of SubsystemTypeAllocatedIdRec |

SubsystemTypeAllocatedIdRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsystem type | ::SubsystemTypeEnum: UNKNOWN, UNMANNED, AI\_AGENT, CONTROLLER, META\_HUMAN, PROCESS\_TOOL |
| 2 | allocated id rec list | List of AllocatedIdRec |

AllocatedIdRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | request uuid | UliUuid, unique identifier of the request |
| 2 | subsystem id | UInt32, ID allocated |
| 3 | comp id | UInt8, component ID of the subsystem manager |

##

<a id="query-identification"></a>
# **Query Identification** [⬆️](#message-summary "Message Summary")

The component queries the service registry to register its services. A Subsystem Manager, often referred to as CONTROLLER, uses global broadcasts to locate subsystems and utilize the services they provide.

Subsystem-broadcast  
Recipient replies: Report Identification.

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000010D | Query Identification |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | uliCertificate | UliCertificate, certificate of the client subsystem |

##

<a id="register-comp-services"></a>
# **Register Comp Services** [⬆️](#message-summary "Message Summary")

The component uses this message to register its services with the service registry.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000010E | Register Comp Services |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp services rec | CompServicesRec |

CompServicesRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp rec | CompRec |
| 2 | service rec list | List of ServiceRec |

CompRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component that registers the services |
| 2 | comp type | ::CompTypeEnum: UNKNOWN, REGULAR, MISSION\_CRITICAL |
| 3 | name | String, name of the comp |
| 4 | descriptor | String, descriptor of the comp |

ServiceRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | service uri | String, uri of the service |
| 2 | major version | UInt8, Major version number of the service |
| 3 | minor version | UInt8, Minor version number of the service |

##

<a id="query-comp-services"></a>
# **Query Comp Services** [⬆️](#message-summary "Message Summary")

The component sends this message to obtain and validate the services it has registered.

Uni-cast  
Recipient replies: Report Comp Services.

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000010F | Query Comp Services |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component whose services are queried |

##

<a id="query-subsystem-services"></a>
# **Query Subsystem Services** [⬆️](#message-summary "Message Summary")

The client sends this message to query all the services offered by the recipient Subsystem.

Uni-cast  
Recipient replies: Report Subsystem Services

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000110 | Query Subsystem Services |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-identification"></a>
# **Report Identification** [⬆️](#message-summary "Message Summary")

The Subsystem Manager responds with this message to provide its address, type, and name. Note: The Subsystem Manager manages the Service Registry, which contains lists of services provided by the components within the Subsystem.

Uni-cast  
Response to: Query Identification

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000111 | Report Identification |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | identification | IdentificationRec |

IdentificationRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the subsystem |
| 2 | subsystem type | String, type of the subsystem |
| 3 | uri | String, uri of the subsystem |
| 4 | pose | PoseRec |
| 5 | context | String, context of this subsystem |
| 6 | profile image | String, profile image of this subsystem |

PoseRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | frame | String, name of the reference frame the pose is in. |
| 2 | lat | Float64, latitude if frame is gnss |
| 3 | lon | Float64, longitude if frame is gnss |
| 4 | hae | Float64, height above Ellipsoid relative to WGS-84|
| 5 | ce | Float64, circular error, the horizontal radius of uncertainty |
| 6 | le | Float64, linear error, the vertical height of uncertainty (hae) |
| 7 | x | Float64, x |
| 8 | y | Float64, y |
| 9 | z type | ::ZPositionTypeEnum: UNKNOWN, AGL, MSL, ASL, DEPTH |
| 10 | z | Float64, z |
| 11 | roll | Float64, roll |
| 12 | pitch | Float64, pitch |
| 13 | yaw | Float64, yaw |

##

<a id="report-comp-services"></a>
# **Report Comp Services** [⬆️](#message-summary "Message Summary")

The recipient Subsystem Manager reports the services that are registered.

Uni-cast  
Response to: Query Comp Services

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000112 | Report Comp Services |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1  | comp services | CompServicesRec |

CompServicesRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1  | comp rec | CompRec |
| 2  | service rec list | List of ServiceRec |

CompRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component that registers the services |
| 2 | comp type | ::CompTypeEnum: UNKNOWN, REGULAR, MISSION\_CRITICAL |
| 3 | name | String, name of the comp |
| 4 | descriptor | String, descriptor of the comp |

ServiceRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1  | service uri | String, uri of the service |
| 2  | major version | UInt8 |
| 3  | minor version | UInt8 |

##

<a id="report-subsystem-services"></a>
# **Report Subsystem Services** [⬆️](#message-summary "Message Summary")

The recipient Subsystem Manager reports all the services registered by the components within the subsystem.

Uni-cast  
Response to: Query Subsystem Services

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000113 | Report Subsystem Services |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1  | subsystem services | SubsystemServicesRec |

SubsystemServicesRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1  | address | Comp Address, address of the subsystem manager |
| 2  | subsystem type | String, type of the subsystem |
| 3  | uri | String, uri of the subsystem |
| 4  | timestamp | Float64, the time this report is created |
| 5  | comp services rec list | List of CompServicesRec |

CompServicesRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1  | comp rec | CompRec |
| 2  | service rec list | List of ServiceRec |

CompRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component that registers the services |
| 2 | comp type | ::CompTypeEnum: UNKNOWN, REGULAR, MISSION\_CRITICAL |
| 3 | name | String, name of the comp |
| 4 | descriptor | String, descriptor of the comp |

ServiceRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1  | service uri | String, uri of the service |
| 2  | major version | UInt8 |
| 3  | minor version | UInt8 |

##

<a id="query-comp-health"></a>
# **Query Comp Health** [⬆️](#message-summary "Message Summary")

This message is to query the health of a component within the subsystem.

Uni-cast  
Recipient replies: Report Comp Health

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000114 | Query Comp Health |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-comp-health"></a>
# **Report Comp Health** [⬆️](#message-summary "Message Summary")

Report the health of the component. The health summary reflects the highest severity level among all services of a component.

Uni-cast  
Response to: Query Comp Status Detail

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000115 | Report Comp Health |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp health | CompHealthRec |

CompHealthRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp rec | CompRec |
| 2 | health summary | ::SeverityEnum: UNKNOWN, NONE, INFO, WARN, ERROR, FATAL |
| 3 | service health | List of ServiceHealthRec |

CompRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component that registers the services |
| 2 | comp type | ::CompTypeEnum: UNKNOWN, REGULAR, MISSION\_CRITICAL |
| 3 | name | String, name of the comp |
| 4 | descriptor | String, descriptor of the comp |

ServiceHealthRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | service rec | ServiceRec |
| 2 | health rec | HealthRec |

ServiceRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | service uri | String, uri of the service |
| 2 | major version | UInt8, Major version number of the service |
| 3 | minor version | UInt8, Minor version number of the service |

HealthRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | time stamp | Float64, time this health record was last updated |
| 2 | severity | ::SeverityEnum: UNKNOWN, NONE, INFO, WARN, ERROR, FATAL |
| 3 | details | List of DataJsonRec |

DataJsonRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | data json | String, json string |

##

<a id="query-comp-status-details"></a>
# **Query Comp Status Details** [⬆️](#message-summary "Message Summary")

This message is to query the status details of a component within the subsystem.

Uni-cast  
Recipient replies: Report Comp Status Detail

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000116 | Query Comp Status Details |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-comp-status-details"></a>
# **Report Comp Status Details** [⬆️](#message-summary "Message Summary")

Report the status details of the component.

Uni-cast  
Response to: Query Comp Status Detail

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000117 | Report Comp Status Details |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp status details | CompStatusDetailsRec |

CompStatusDetailsRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp rec | CompRec |
| 2 | major version | UInt8, major version number |
| 3 | minor version | UInt8, minor version number |
| 4 | build number | UInt16, build number |
| 5 | comp control | ::CompControlEnum: UNKNOWN, NOT\_CONTROLLED, CONTROLLED, NOT\_AVAIL |
| 6 | client | Comp Address, address of the client who has the control of this component |
| 7 | management state | ::ManagementStateEnum: UNKNOWN, INITIALIZE, STAND\_BY, READY, EMERGENCY, PAUSE, CONTINUE, FATAL, SHUTDOWN, RENDER\_USELESS |
| 8 | operating category | ::OperatingCategoryEnum: UNKNOWN, STANDARD, ADMINISTRATIVE |
| 9 | operating mode | ::OperatingModeEnum: UNKNOWN, STANDARD\_OPERATING, REDUCED, RIGOROUS, SILENT, HIBERNATED, TRAINING, MAINTENANCE |
| 10 | seconds | UInt64, time in seconds the component has run |
| 11 | link update time | String, time the link test updated |
| 12 | link rec list | List of LinkRec |
| 13 | subscription rec list | List of SubscriptionRec |

CompRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component that registers the services |
| 2 | comp type | ::CompTypeEnum: UNKNOWN, REGULAR, MISSION\_CRITICAL |
| 3 | name | String, name of the comp |
| 4 | descriptor | String, descriptor of the comp |

LinkRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | destination | Comp Address, address of the comp link test messages were sent |
| 2 | round trip time | Float64, time in seconds query and report messages |
| 3 | last query | Float64, last time link query was sent |
| 4 | last reply | Float64, last time reply was received |

SubscriptionRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | data topic uri | String, uri of the data topic |
| 2 | subscribers | List of SubscriberRec |

SubscriberRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp rec | CompRec |
| 2 | seconds | Float64, how long the subscriber has subscribed this topic |
| 3 | count | UInt64, number of topics have been sent |
| 4 | last update | Float64, time of the last topic |

##

<a id="register-comp-health"></a>
# **Register Comp Health** [⬆️](#message-summary "Message Summary")

Register the component's health with the Status Monitor service.

Uni-cast  
Response to:

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000118 | Register Comp Health |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp health | CompHealthRec (Refer to Report Comp Health) |

##

<a id="register-comp-status-details"></a>
# **Register Comp Status Details** [⬆️](#message-summary "Message Summary")

Register the component's status details with the Status Monitor service.

Uni-cast  
Response to:

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000119 | Register Comp Status Details |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp status details | CompStatusDetailsRec (Refer to Report Comp Status Details) |

##

<a id="register-comp-health-context"></a>
# **Register Comp Health Context** [⬆️](#message-summary "Message Summary")

Register the component’s health context to the Status Monitor service.

Uni-cast  
Recipient replies:

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000011A | Register Comp Health Context |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp health context | CompHealthContextRec |

CompHealthContextRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp rec | CompRec |
| 2 | context | String, this is to guide AI and human user how to interpret the descriptor of the health record. The descriptor is a JSON string. |

CompRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component that registers the services |
| 2 | comp type | ::CompTypeEnum: UNKNOWN, REGULAR, MISSION\_CRITICAL |
| 3 | name | String, name of the comp |
| 4 | descriptor | String, descriptor of the comp | 

##

<a id="query-subsystem-management-states"></a>
# **Query Subsystem Management States** [⬆️](#message-summary "Message Summary")

This message queries the list of Management States for all Management services within the subsystem.

Uni-cast  
Recipient replies: Report Subsystem Management States

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000011B | Query Subsystem Management States |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="query-subsystem-health"></a>
# **Query Subsystem Health** [⬆️](#message-summary "Message Summary")

This message queries the health of all components within the subsystem.

Uni-cast  
Recipient replies: Report Subsystem Status Details.

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000011C | Query Subsystem Health |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="query-subsystem-status-details"></a>
# **Query Subsystem Status Details** [⬆️](#message-summary "Message Summary")

This message queries the status details of all components within the subsystem.

Uni-cast  
Recipient replies: Report Subsystem Status Details.

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000011D | Query Subsystem Status Details |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="query-subsystem-health-context"></a>
# **Query Subsystem Health Context** [⬆️](#message-summary "Message Summary")

This message queries the health context of all components within the subsystem.

Uni-cast  
Recipient replies: Report Subsystem Health Context

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000011E | Query Subsystem Health Context |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-subsystem-management-states"></a>
# **Report Subsystem Management States** [⬆️](#message-summary "Message Summary")

This message reports the list of Management States for all Management services within the subsystem.

Uni-cast  
Response to: Query Subsystem Management States

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000011F | Report Subsystem Management States |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsystem management state | SubsystemManagementStateRec |

SubsystemManagementStateRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | uri | String, subsystem uri |
| 2 | timestamp | Float64, time stamp in seconds this report is created |
| 3 | comp management state rec list | List of CompManagementStateRec |

CompManagementStateRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp rec | CompRec |
| 2 | management state | ::ManagementStateEnum: UNKNOWN, INITIALIZE, STAND\_BY, READY, EMERGENCY, PAUSE, CONTINUE, FATAL, SHUTDOWN, RENDER\_USELESS |

CompRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component that registers the services |
| 2 | comp type | ::CompTypeEnum: UNKNOWN, REGULAR, MISSION\_CRITICAL |
| 3 | name | String, name of the comp |
| 4 | descriptor | String, descriptor of the comp |

##

<a id="report-subsystem-health"></a>
# **Report Subsystem Health** [⬆️](#message-summary "Message Summary")

This message reports the health of all components in the subsystem. 

The report time is used to correlate the last update time of the component health to the message receiver’s time.

The health summary reflects the highest severity level among all services within each component.

Uni-cast  
Response to: Query Subsystem Health

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000120 | Report Subsystem Health |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsystem health | SubsystemHealthRec |

SubsystemHealthRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | uri | String, subsystem uri |
| 2 | timestamp | Float64, time stamp in seconds this report is created |
| 3 | health summary | ::SeverityEnum: UNKNOWN, NONE, INFO, WARN, ERROR, FATAL |
| 4 | comp health rec list | List of CompHealthRec (Refer to Report Comp Health) |

##

<a id="report-subsystem-status-details"></a>
# **Report Subsystem Status Details** [⬆️](#message-summary "Message Summary")

This message reports the list of Status Details for all components within the subsystem.

Uni-cast  
Response to: Query Subsystem Status Details

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000121 | Report Subsystem Status Details |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsystem status details | SubsystemStatusDetailsRec |

SubsystemStatusDetailsRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | uri | String, subsystem uri |
| 2 | timestamp | Float64, time stamp in seconds this report is created |
| 3 | comp status details rec list | List of CompStatusDetailsRec (Refer to Report Comp Status Details) |

##

<a id="report-subsystem-health-context"></a>
# **Report Subsystem Health Context** [⬆️](#message-summary "Message Summary")

Report the health context of all the components in the subsystem.

Uni-cast  
Recipient replies:

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000122 | Report Subsystem Health Context |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsystem health context | SubsystemHealthContextRec |

SubsystemHealthContextRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | uri | String, subsystem uri |
| 2 | comp context rec list | List of CompHealthContextRec (Refer to Register Comp Health Context) |

##

<a id="request-subsystem-access"></a>
# **Request Subsystem Access** [⬆️](#message-summary "Message Summary")

This message requests access of the subsystem.

Uni-cast  
Recipient replies: Confirm Subsystem Access

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000123 | Request Subsystem Access |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | descriptor | String, descriptor of the client subsystem |
| 2 | uliCertificate | UliCertificate, certificate of the client subsystem |

##

<a id="confirm-subsystem-access"></a>
# **Confirm Subsystem Access** [⬆️](#message-summary "Message Summary")

This message confirms to the requesting client that it has access to the subsystem.

Uni-cast  
Response to: Request Subsystem Access

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000124 | Confirm Subsystem Access |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, unique identifier of the session |
| 2 | appAccessRight | ::AppAccessRightEnum: UNKNOWN, NOT\_ALLOWED, OPERATOR, MAINTAINER, ADMINISTRATOR |
| 3 | dataAccessRight | ::DataAccessRightEnum: UNKNOWN, NOT\_ALLOWED, UNCLASSIFIED, CONTROLLED, CLASSIFIED |
| 4 | response code | ::CoreConfirmSubsystemAccessProto::ResponseCodeEnum: UNKNOWN, ACCEPTED, REJECTED |

##

<a id="set-access"></a>
# **Set Access** [⬆️](#message-summary "Message Summary")

This message sends the access list to the components within the subsystem.

Subsystem broad-cast  
Recipient replies: none

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000125 | Set Access |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | accesses | List of AccessRec |

AccessRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsys | UInt32, subsystem ID of the client |
| 2 | descriptor | String, descriptor of the client subsystem |
| 3 | counter | UInt8, count down counter \[15..0\] |
| 4 | session uuid | UliUuid, access session uuid |
| 5 | prev session uuid | UliUuid, previous access session uuid |
| 6 | app access right | ::AppAccessRightEnum: UNKNOWN, NOT\_ALLOWED, OPERATOR, MAINTAINER, ADMINISTRATOR |
| 7 | data access right | ::DataAccessRightEnum: UNKNOWN, NOT\_ALLOWED, UNCLASSIFIED, CONTROLLED, CLASSIFIED |

##

<a id="query-subsystem-control-status"></a>
# **Query Subsystem Control Status** [⬆️](#message-summary "Message Summary")

This message queries the control status of the subsystem.

Uni-cast  
Recipient replies: Report Subsystem Control Status.

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000126 | Query Subsystem Control Status |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-subsystem-control-status"></a>
# **Report Subsystem Control Status** [⬆️](#message-summary "Message Summary")

This message reports the control status of the subsystem.

Uni-cast  
Response to: Query Subsystem Control Status

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000127 | Report Subsystem Control Status |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsystem control status | SubsystemControlStatusRec |

SubsystemControlStatusRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsystem control status | ::SubsystemControlStatusEnum: UNKNOWN, NOT\_AVAILABLE, NOT\_CONTROLLED, UNDER\_CONTROLLED |
| 2 | client | Comp Address, comp address of the client |

##

<a id="request-subsystem-control"></a>
# **Request Subsystem Control** [⬆️](#message-summary "Message Summary")

This message requests control of the subsystem.

Uni-cast  
Recipient replies: Confirm Subsystem Control

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000128 | Request Subsystem Control |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | uri | String, uri of the requesting client |
| 2 | profile image | String, profile image of the requesting client |
| 3 | pose | PoseRec |
| 4 | authority | UInt8, authority code of the requesting client |
| 5 | uli certificate | UliCertificate, certificate of the requesting client |

PoseRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | frame | String, name of the reference frame the pose is in. |
| 2 | lat | Float64, latitude if frame is gnss |
| 3 | lon | Float64, longitude if frame is gnss |
| 4 | hae | Float64, height above Ellipsoid relative to WGS-84|
| 5 | ce | Float64, circular error, the horizontal radius of uncertainty |
| 6 | le | Float64, linear error, the vertical height of uncertainty (hae) |
| 7 | x | Float64, x |
| 8 | y | Float64, y |
| 9 | z type | ::ZPositionTypeEnum: UNKNOWN, AGL, MSL, ASL, DEPTH |
| 10 | z | Float64, z |
| 11 | roll | Float64, roll |
| 12 | pitch | Float64, pitch |
| 13 | yaw | Float64, yaw |

##

<a id="release-subsystem-control"></a>
# **Release Subsystem Control** [⬆️](#message-summary "Message Summary")

This message releases control of the subsystem.

Uni-cast  
Recipient replies: Reject Subsystem Control

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000129 | Release Subsystem Control |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, Unique identifier of the session |

##

<a id="request-handover"></a>
# **Request Handover** [⬆️](#message-summary "Message Summary")

This message requests handover control of the subsystem.

Uni-cast  
Recipient replies: 

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000012A | Request Handover |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | uri | String, uri of the requesting client |
| 2 | profile image | String, profile image of the requesting client |
| 3 | pose | PoseRec (Refer to Request Subsystem Control) |
| 4 | authority | UInt8, authority code of the requesting client |
| 5 | uli certificate | UliCertificate, certificate of the requesting client |

##

<a id="confirm-subsystem-control"></a>
# **Confirm Subsystem Control** [⬆️](#message-summary "Message Summary")

This message confirms to the requesting client that it has been granted control of the subsystem.

Uni-cast  
Response to: Request Subsystem Control

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000012B | Confirm Subsystem Control |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, unique identifier of the session |
| 2 | response code | ::CoreConfirmSubsystemControlProto::ResponseCodeEnum   UNKNOWN,   ACCEPTED,   UNDER\_OTHER\_CONTROL,   FAILED\_CERTIFICATE |

##

<a id="set-control-session"></a>
# **Set Control Session** [⬆️](#message-summary "Message Summary")

This message sets the session UUID for the Comp Control services within the subsystem. The Subsystem Control service sends this message once it has granted control to the client.

Subsystem Broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000012C | Set Control Session |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, unique identifier of the session |

##

<a id="request-release"></a>
# **Request Release** [⬆️](#message-summary "Message Summary")

The Subsystem Control service requests the client to release control upon receiving a Request Handover.

Uni-cast  
Recipient replies: Conform Release

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000012D | Request Release |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session uuid | UliUuid, unique identifier of the session to release |
| 2 | uri | String, uri of the requesting client |
| 3 | profile image | String, profile image of the requesting client |
| 4 | pose | PoseRec (Refer to Request Subsystem Control) |

##

<a id="reject-subsystem-control"></a>
# **Reject Subsystem Control** [⬆️](#message-summary "Message Summary")

This message responds to the Release Subsystem Control request from the controlling client, confirming that control has been released.

Uni-cast  
Response to: Release Subsystem Control

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000012E | Reject Subsystem Control |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, unique identifier of the session to reject |
| 2 | reason Code | ::CoreRejectSubsystemControlProto::ReasonCodeEnum: UNKNOWN, RELEASED, TIMEOUT, REJECTED |

##

<a id="request-control"></a>
# **Request Control** [⬆️](#message-summary "Message Summary")

This message requests control of a component.

Uni-cast  
Recipient replies: Confirm Control

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000012F | Request Control |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, unique identifier of the session |
| 2 | authority Code | UInt8, authority code of the requesting client |

##

<a id="release-control"></a>
# **Release Control** [⬆️](#message-summary "Message Summary")

This message releases control of a component.

Uni-cast  
Recipient replies: Reject Control to confirm that control is released.

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000130 | Release Control |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, unique identifier of the session |

##

<a id="query-control"></a>
# **Query Control** [⬆️](#message-summary "Message Summary")

This message queries control-related information.

Uni-cast  
Recipient replies: Report Control

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000131 | Query Control |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="confirm-control"></a>
# **Confirm Control** [⬆️](#message-summary "Message Summary")

This message replies to the Request Control, indicating whether control has been granted or not.

Uni-cast  
Response to: Request Control

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000132 | Confirm Control |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, unique identifier of the session |
| 2 | response Code | ::CoreConfirmControlProto::ResponseCodeEnum UNKNOWN, ACCEPTED, INSUFFICIENT\_AUTHORITY, NOT\_AVAILABLE, WRONG\_SESSION\_UUID |

##

<a id="reject-control"></a>
# **Reject Control** [⬆️](#message-summary "Message Summary")

This message notifies the client that control has been terminated.

Uni-cast  
Response to: Release Control

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000133 | Reject Control |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, unique identifier of the session |
| 2 | reason Code | ::CoreRejectControlProto::ReasonCodeEnum UNKNOWN, RELEASED, TIMEOUT, DEPRIVED, SESSION\_UUID\_TIMEOUT WRONG\_SESSION\_UUID |

##

<a id="report-control"></a>
# **Report Control** [⬆️](#message-summary "Message Summary")

This message replies to the Query Control, providing information related to control.

Uni-cast  
Response to: Query Control

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000134 | Report Control |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | client Address | Comp Address, address of the controlling client. Address of “0.0.0” indicates no controlling client |
| 2 | default Authority | UInt8, authority code by default  |
| 3 | current Authority | UInt8, authority code of the controlling client. If not controlled, default authority is reported. |
| 4 | timeout | Double, time in second that request control should have received. |

##

<a id="reset"></a>
# **Reset** [⬆️](#message-summary "Message Summary")

This message commands the Management service to transition to the INITIALIZE state.

Subsystem broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000135 | Reset |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, Subsystem wide session Uuid, used by service to gain control or command of services in the same subsystem. |

##

<a id="start"></a>
# **Start** [⬆️](#message-summary "Message Summary")

This message commands the Management service to transition to the STAND\_BY state.

Subsystem broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000136 | Start |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, Subsystem wide session Uuid, used by service to gain control or command of services in the same subsystem. |

##

<a id="go"></a>
# **Go** [⬆️](#message-summary "Message Summary")

This message commands the Management service to transition to the READY state.

Subsystem broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000137 | Go |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, unique identifier of the session |

##

<a id="set-emergency"></a>
# **Set Emergency** [⬆️](#message-summary "Message Summary")

This message commands the Management service to transition to the EMERGENCY state.

Subsystem broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000138 | Set Emergency |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, Subsystem wide session Uuid, used by service to gain control or command of services in the same subsystem. |

##

<a id="clear-emergency"></a>
# **Clear Emergency** [⬆️](#message-summary "Message Summary")

This message commands the Management service to transition from EMERGENCY to the STAND\_BY state.

Subsystem broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000139 | Clear Emergency |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, Subsystem wide session Uuid, used by service to gain control or command of services in the same subsystem. |

##

<a id="pause"></a>
# **Pause** [⬆️](#message-summary "Message Summary")

This message commands the Management service to transition to the PAUSE state.

Subsystem broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000013A | Pause |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, unique identifier of the session |

##

<a id="resume"></a>
# **Resume** [⬆️](#message-summary "Message Summary")

This message commands the Management service to transition from CONTINUE to the STAND\_BY state.

Subsystem broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000013B | Resume |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, unique identifier of the session |

##

<a id="shutdown"></a>
# **Shutdown** [⬆️](#message-summary "Message Summary")

This message commands the Management service to transition to the SHUTDOWN state.

Subsystem broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000013C | Shutdown |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, Subsystem wide session Uuid, used by service to gain control or command of services in the same subsystem. |

##

<a id="render-useless"></a>
# **Render Useless** [⬆️](#message-summary "Message Summary")

This message commands the Management service to transition to the RENDER\_USELESS state.

Subsystem broadcast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000013D | Render Useless |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session Uuid | UliUuid, Subsystem wide session Uuid, used by service to gain control or command of services in the same subsystem. |

##

<a id="query-management-state"></a>
# **Query Management State** [⬆️](#message-summary "Message Summary")

This message queries the management state.

Uni-cast,  
Recipient replies: Report Management State

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000013E | Query Management State |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-management-state"></a>
# **Report Management State** [⬆️](#message-summary "Message Summary")

This message reports the management state.

Uni-cast  
Response To: Query Management State

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000013F | Report Management State |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | management State | ::ManagementStateEnum: UNKNOWN, INITIALIZE, STAND\_BY, READY, EMERGENCY, PAUSE, CONTINUE, FATAL, SHUTDOWN, RENDER\_USELESS |

##

<a id="set-subsystem-state"></a>
# **Set Subsystem State** [⬆️](#message-summary "Message Summary")

This message sets the subsystem state.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000140 | Set Subsystem State |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsystem State | ::SubsystemStateEnum: UNKNOWN, INITIALIZING, INITIALIZE, OPERATIONAL, EMERGENCY, PAUSE, SHUTDOWN, RENDER\_USELESS |

##

<a id="query-subsystem-state"></a>
# **Query Subsystem State** [⬆️](#message-summary "Message Summary")

This message queries the subsystem state.

Uni-cast  
Recipient replies: Report Subsystem State

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000141 | Query Subsystem State |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-subsystem-state"></a>
# **Report Subsystem State** [⬆️](#message-summary "Message Summary")

This message reports the subsystem state.

Uni-cast  
Response to: Query Subsystem State

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000142 | Report Subsystem State |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | subsystem state | ::SubsystemStateEnum: UNKNOWN, INITIALIZING, INITIALIZE, OPERATIONAL, EMERGENCY, PAUSE, SHUTDOWN, RENDER\_USELESS |

##

<a id="set-estop"></a>
# **Set Estop** [⬆️](#message-summary "Message Summary")

The Safety Client service sets the e-stop state for the Safety service. This e-stop state is determined based on the state of the e-stop button and the severity indicated in the Report Health Summary message.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000143 | Set Estop |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | estop | ::EStopEnum: UNKNOWN, CLEAR, SET, UNCHANGE |
| 2 | sequence no | UInt64, sequence number |

##

<a id="set-operating-mode"></a>
# **Set Operating Mode** [⬆️](#message-summary "Message Summary")

The controlling client sets the operating mode of the subsystem or component.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000144 | Set Operating Mode |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | session uuid | UliUuid, unique identifier of the session |
| 2 | operating category | ::OperatingCategoryEnum: UNKNOWN, STANDARD, ADMINISTRATIVE |
| 3 | operating mode | ::OperatingModeEnum: UNKNOWN, STANDARD\_OPERATING, REDUCED, RIGOROUS, SILENT, HIBERNATED, TRAINING, MAINTENANCE |

##

<a id="query-operating-mode"></a>
# **Query Operating Mode** [⬆️](#message-summary "Message Summary")

This message queries operating mode from the Subsystem Operating Mode service.

Uni-cast  
Recipient replies: Report Operating Mode

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000145 | Query Operating Mode |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-operating-mode"></a>
# **Report Operating Mode** [⬆️](#message-summary "Message Summary")

This message reports the operating mode of the subsystem.

Uni-cast  
Response to: Query Operating Mode

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000146 | Report Operating Mode |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | operating category | ::OperatingCategoryEnum: UNKNOWN, STANDARD, ADMINISTRATIVE |
| 2 | operating mode | ::OperatingModeEnum: UNKNOWN, STANDARD\_OPERATING, REDUCED, RIGOROUS, SILENT, HIBERNATED, TRAINING, MAINTENANCE |

##

<a id="register-resources"></a>
# **Register Resources** [⬆️](#message-summary "Message Summary")

The message registers the resource to the Resource Discovery service.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000147 | Register Resources |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp resources rec | CompResourcesRec |

CompResourcesRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp rec | CompRec |
| 2 | resource rec list | List of ResourceRec |

CompRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component that registers the services |
| 2 | comp type | ::CompTypeEnum: UNKNOWN, REGULAR, MISSION\_CRITICAL |
| 3 | name | String, name of the comp |
| 4 | descriptor | String, descriptor of the comp |

ResourceRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | resource Type | ::ResourceTypeEnum: UNKNOWN, VIDEO, AUDIO, WEB, MCP, TELEMETRY, EXCLUSIVE |
| 2 | requiredDataAccessRight | ::DataAccessRightEnum: UNKNOWN, NOT\_ALLOWED, UNCLASSIFIED, CONTROLLED, CLASSIFIED |
| 3 | name | String, name of the resource |
| 4 | context file | String, name of the context file |
| 5 | context | String, context of this resource |
| 6 | comp | Comp Address, comp provides the resource |
| 7 | intf | String, the network interface the resource is attached |
| 8 | url | String, url of the resource |
| 9 | forwarded | Boolean, whether the resource has been port forwarded |
| 10 | forwarded Url | String, url after forwarded |

##

<a id="query-subsystem-resources"></a>
# **Query Subsystem Resources** [⬆️](#message-summary "Message Summary")

This message queries resources from the Resource Discovery service.

Uni-cast  
Recipient replies: Report Subsystem Resources

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000148 | Query Subsystem Resources |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-subsystem-resources"></a>
# **Report Subsystem Resources** [⬆️](#message-summary "Message Summary")

This message reports the registered resources to the Resource Discovery service.

Uni-cast  
Response to: Query Subsystem Resources

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000149 | Report Subsystem Resources |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1  | subsystem resources | SubsystemResourcesRec |

SubsystemResourcesRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1  | address | Comp Address, address of the subsystem manager |
| 2  | subsystem type | String, type of the subsystem |
| 3  | uri | String, uri of the subsystem |
| 4  | timestamp | Float64, the time this report is created |
| 5  | comp resources rec list | List of CompResourcesRec |

CompResourcesRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp rec | CompRec |
| 2 | resource rec list | List of ResourceRec |

CompRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component that registers the services |
| 2 | comp type | ::CompTypeEnum: UNKNOWN, REGULAR, MISSION\_CRITICAL |
| 3 | name | String, name of the comp |
| 4 | descriptor | String, descriptor of the comp |

ResourceRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | resource Type | ::ResourceTypeEnum: UNKNOWN, VIDEO, AUDIO, WEB, MCP, TELEMETRY, EXCLUSIVE |
| 2 | requiredDataAccessRight | ::DataAccessRightEnum: UNKNOWN, NOT\_ALLOWED, UNCLASSIFIED, CONTROLLED, CLASSIFIED |
| 3 | name | String, name of the resource |
| 4 | context file | String, name of the context file |
| 5 | context | String, context of this resource |
| 6 | comp | Comp Address, comp provides the resource |
| 7 | intf | String, the network interface the resource is attached |
| 8 | url | String, url of the resource |
| 9 | forwarded | Boolean, whether the resource has been port forwarded |
| 10 | forwarded Url | String, url after forwarded |

##

<a id="subscribe-data-topics"></a>
# **Subscribe Data Topics** [⬆️](#message-summary "Message Summary")

This message subscribes to data topics. It must be sent periodically to update the subscription.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000014A | Subscribe Data Topics |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp | CompRec |
| 2 | session uuid | UliUuid, unique identifier of the session |
| 3 | data topic uris | List of String, URIs of the data topics |

CompRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component that registers the services |
| 2 | comp type | ::CompTypeEnum: UNKNOWN, REGULAR, MISSION\_CRITICAL |
| 3 | name | String, name of the comp |
| 4 | descriptor | String, descriptor of the comp |

##

<a id="receive-data-topics"></a>
# **Receive Data Topics** [⬆️](#message-summary "Message Summary")

This message publishes to the Data Topic Service.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000014B | Receive Data Topics |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="register-data-topics"></a>
# **Register Data Topics** [⬆️](#message-summary "Message Summary")

This message registers data topics with the Data Topic Discovery service.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000014C | Register Data Topics |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp data topic rec | CompDataTopicRec |

CompDataTopicRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp rec | CompRec |
| 2 | url | String, url of the data topic server |
| 3 | forwarded | Boolean, whether the url has been port forwarded |
| 4 | forwarded url | String, url after forwarded |
| 5 | status | ::CompDataTopicStatusEnum: UNKNOWN, INACTIVE, ACTIVE, NO\_RIGHT |
| 6 | data topic rec list | List of DataTopicRec |

CompRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component that registers the services |
| 2 | comp type | ::CompTypeEnum: UNKNOWN, REGULAR, MISSION\_CRITICAL |
| 3 | name | String, name of the comp |
| 4 | descriptor | String, descriptor of the comp |

DataTopicRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | uri | String, uri of the data topic |
| 2 | comp | Comp Address, address of the component that provides this data topic |
| 3 | channel id | UInt16, the channel this data topic is received |
| 4 | schema version | UInt16, schema version of this data topic |
| 5 | schema | String, schema of this data topic |
| 6 | required data access right | ::DataAccessRightEnum: UNKNOWN, NOT\_ALLOWED, UNCLASSIFIED, CONTROLLED, CLASSIFIED |
| 7 | context file | String, file that contains the context |
| 8 | context | String, context of the data topic |
| 9 | history depth | UInt8, number of data retained |
| 10 | display duration | Float64, number of seconds this data topic to be on display |

##

<a id="register-schemas"></a>
# **Register Schemas** [⬆️](#message-summary "Message Summary")

Data Topic service registers the schemas of the data topics it publishes with the Data Topic Discovery service.

Uni-cast  
Response to: none

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000014D | Register Data Topic Schemas |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp data topic schema rec | CompDataTopicSchemaRec |

CompDataTopicSchemaRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp rec | CompRec |
| 2 | data topic schema rec list | List of DataTopicSchemaRec |

CompRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the component that registers the services |
| 2 | comp type | ::CompTypeEnum: UNKNOWN, REGULAR, MISSION\_CRITICAL |
| 3 | name | String, name of the comp |
| 4 | descriptor | String, descriptor of the comp |

DataTopicSchemaRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | schema | String, schema. For example: ros.global\_costmap |
| 2 | version | UInt16, version of this schema |
| 3 | required data access right | ::DataAccessRightEnum: UNKNOWN, NOT\_ALLOWED, UNCLASSIFIED, CONTROLLED, CLASSIFIED |
| 4 | context file | String, file that contains the context |
| 5 | context | String, context of this schema |

##

<a id="query-available-data-topics"></a>
# **Query Available Data Topics** [⬆️](#message-summary "Message Summary")

This message queries the Data Topic Discovery service for available data topics.

Uni-cast  
Recipient replies: Report Available Data Topics

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000014E | Query Available Data Topics |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | sessionUuid | UliUuid, uuid of the subsystem access |

##

<a id="report-available-data-topics"></a>
# **Report Available Data Topics** [⬆️](#message-summary "Message Summary")

This message is used by the Data Topic Discovery service to report the available data topics.

Uni-cast  
Response To: Query Available Data Topics

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000014F | Report Available Data Topics |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp data topic rec list | List of CompDataTopicRec (Refer to Register Data Topics) |

##

<a id="query-schemas"></a>
# **Query Schemas** [⬆️](#message-summary "Message Summary")

This message queries the Data Topic Discovery service for the schemas.

Uni-cast  
Recipient replies: Report Schemas

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000150 | Query Schemas |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | sessionUuid | UliUuid, uuid of the subsystem access |

##

<a id="report-schemas"></a>
# **Report Schemas** [⬆️](#message-summary "Message Summary")

This message is used by the Data Topic Discovery service to report the schemas.

Uni-cast  
Response To: Query Schemas

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000151 | Report Schemas |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp data topic schema rec list | List of CompDataTopicSchemaRec (Refer to Register Schemas) |

##

<a id="query-agent-capabilities"></a>
# **Query Agent Capabilities** [⬆️](#message-summary "Message Summary")

This message queries the Agent service for its capabilities.

Uni-cast  
Recipient replies: Report Agent Capabilities

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000152 | Query Agent Capabilities |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-agent-capabilities"></a>
# **Report Agent Capabilities** [⬆️](#message-summary "Message Summary")

This message is used by the Agent service to report its capabilities.

Uni-cast  
Response to: Query Agent Capabilities

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000153 | Report Agent Capabilities |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | agent capabilities | AgentRec |

AgentRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | name | String, name of the agent |
| 2 | uri | String, uri of the agent, for example: “com.ovt.uli\_sdk.apps.teleop” |
| 3 | capabilities | List of DataJsonRec |
| 4 | comp | Comp Address, address of the component hosting the agent |
| 5 | configuration | String, configuration in JSON |
| 6 | required app access right | ::AppAccessRightEnum: UNKNOWN, NOT\_ALLOWED, OPERATOR, MAINTAINER, ADMINISTRATOR |
| 7 | context | String, context of the agent |
| 8 | profile image | String, profile image of the agent |

DataJsonRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | data json | String, json string |

##

<a id="request-agent"></a>
# **Request Agent** [⬆️](#message-summary "Message Summary")

This message sends the configuration and completion timeout while requesting the Agent service to perform tasks.

Uni-cast  
Response to: none

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000154 | Request Agent |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | request | AgentRequestRec |

AgentRequestRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | request uuid | UliUuid, uuid of the request |
| 2 | requestor | Comp Address, comp address of the requestor |
| 3 | configuration | String, configuration in JSON |
| 4 | completion timeout | Float64, time out to complete the action |

##

<a id="confirm-agent"></a>
# **Confirm Agent** [⬆️](#message-summary "Message Summary")

This message confirms the request received by the Agent service.

Uni-cast  
Response to:

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000155 | Confirm Agent |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | request Uuid | UliUuid, uuid of the request |
| 2 | response Code | ::CoreConfirmAgentProto::ResponseCodeEnum: UNKNOWN, ACCEPT, REJECT |

##

<a id="query-agent-status"></a>
# **Query Agent Status** [⬆️](#message-summary "Message Summary")

This message queries the Agent service for the status of the agent.

Uni-cast  
Recipient replies: Report Agent Status

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000156 | Query Agent Status |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-agent-status"></a>
# **Report Agent Status** [⬆️](#message-summary "Message Summary")

This message reports the status of the agent.

Uni-cast  
Response to: Query Agent Status

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000157 | Report Agent Status |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | agent status | AgentStatusRec |

AgentStatusRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | name | String, name of the agent |
| 2 | uri | String, uri of the agent |
| 3 | comp | Comp Address, comp that hosts the agent |
| 4 | request uuid | UliUuid, uuid of the request |
| 5 | requestor | Comp Address, comp address of the requestor |
| 6 | configuration | String, configuration of the agent in JSON |
| 7 | completion timeout | Float64, time out of completion of the agent |
| 8 | run time | Float64, the time the agent has been running |
| 9 | enter state time | Float64, the time when entering the current state |
| 10 | state | ::AgentStateEnum: UNKNOWN, REQUEST\_WAIT, CONTROL\_WAIT, RUNNING, PAUSED, COMPLETE\_WAIT, COMPLETE |
| 11 | feedback data | String, feedback in JSON |
| 12 | completion code | ::AgentCompletionCodeEnum: UNKNOWN, SUCCESS, FAIL |

##

<a id="set-agent-control"></a>
# **Set Agent Control** [⬆️](#message-summary "Message Summary")

This message sends a control command and its parameters to the agent.

Uni-cast  
Response to: none

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000158 | Set Agent Control |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | control | AgentControlRec |

AgentControlRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | request uuid | UliUuid, uuid of the request |
| 2 | control cmd | ::AgentControlCmdEnum: UNKNOWN, RESUME, PAUSE, CANCEL |
| 3 | control params | List of DataJsonRec, control parameters |
| 4 | user params | List of DataJsonRec, parameters from user |

DataJsonRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | data json | String, json string |

##

<a id="report-agent-complete"></a>
# **Report Agent Complete** [⬆️](#message-summary "Message Summary")

This message reports the result of the Agent's task completion.

Uni-cast  
Response to: none

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000159 | Report Agent Complete |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | request Uuid | UliUuid, uuid of the request |
| 2 | completion Code | ::AgentCompletionCodeEnum: UNKNOWN, SUCCESS, FAIL |
| 3 | result | List of DataJsonRec |

DataJsonRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | data json | String, json string |

##

<a id="register-agent"></a>
# **Register Agent** [⬆️](#message-summary "Message Summary")

This message registers the agents with the Agent Discovery service.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000015A | Register Agent |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | agent rec | AgentRec |

AgentRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | name | String, name of the agent |
| 2 | uri | String, uri of the agent, for example: “com.ovt.uli\_sdk.apps.teleop” |
| 3 | capabilities | List of DataJsonRec |
| 4 | comp | Comp Address, address of the component hosting the agent |
| 5 | configuration | List of DataJsonRec, configuration in JSON |
| 6 | required app access right | ::AppAccessRightEnum: UNKNOWN, NOT\_ALLOWED, OPERATOR, MAINTAINER, ADMINISTRATOR |
| 7 | context | String, context of the agent |
| 8 | profile image | String, profile image of the agent |

DataJsonRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | data json | String, json string |

##

<a id="query-agents"></a>
# **Query Agents** [⬆️](#message-summary "Message Summary")

This message queries the Agent Discovery service for registered agents.

Uni-cast  
Recipient replies: Report Agents

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000015B | Query Agents |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-agents"></a>
# **Report Agents** [⬆️](#message-summary "Message Summary")

This message reports the registered agents.

Uni-cast  
Response to: Query Agents

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000015C | Report Agents |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | agent abstraction rec list | List of AgentAbstractionRec |

AgentAbstractionRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | name | String, agent name |
| 2 | uri | String, agent uri |
| 3 | comp | Comp Address, address of the component hosting the agent |
| 4 | configuration | List of DataJsonRec, agent configuration |
| 5 | required app access right | ::AppAccessRightEnum: UNKNOWN, NOT\_ALLOWED, OPERATOR, MAINTAINER, ADMINISTRATOR |
| 6 | context | String, agent context |
| 7 | profile image | String, profile image of the agent |
| 8 | requestor | Comp Address, comp address of the requestor |
| 9 | completion timeout | Float64, completion time out |
| 10 | run time | Float64, run time |
| 11 | enter state time | Float64, the time when the state is entered |
| 12 | state | ::AgentStateEnum: UNKNOWN, REQUEST\_WAIT, CONTROL\_WAIT, RUNNING, PAUSED, COMPLETE\_WAIT, COMPLETE |
| 13 | feedback data | List of DataJsonRec, feedback data |
| 14 | completion code | ::AgentCompletionCodeEnum: UNKNOWN, SUCCESS, FAIL |

DataJsonRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | data json | String, json string |

##

<a id="query-available-transforms"></a>
# **Query Available Transforms** [⬆️](#message-summary "Message Summary")

This message queries the Transform Reporter service for available transforms and their parent-child pairs.

Uni-cast  
Recipient replies: Report Available Transforms

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000015D | Query Available Transforms |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-available-transforms"></a>
# **Report Available Transforms** [⬆️](#message-summary "Message Summary")

This message is used by the Transform Reporter service to report available transforms and their parent-child pairs.

Uni-cast  
Response to: Query Available Transforms

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000015E | Report Available Transforms |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | transforms | List of TransformDefRec |

TransformDefRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | parent | String, parent frame |
| 2 | child | String, child frame |

##

<a id="register-transform-query"></a>
# **Register Transform Query** [⬆️](#message-summary "Message Summary")

This message registers query pairs (parent and child) with the Transform Reporter service. The Transform Reporter service periodically sends Report Transform messages detailing the transforms from parent to child.

Uni-cast  
Response to: Report Transform

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x0000015F | Register Transform Query |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | queries | List of TransformDefRec |

TransformDefRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | parent | String, parent frame |
| 2 | child | String, child frame |

##

<a id="report-transform"></a>
# **Report Transform** [⬆️](#message-summary "Message Summary")

This message reports the transforms for the registered parent-child query pairs.

Uni-cast,  
Response to: Query Transform

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000160 | Report Transform |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | transforms | List of TransformRec |

TransformRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | valid | Boolean, indicating whether the transform exists |
| 2 | time | Float64, time stamp of the reported transform |
| 3 | parent | String, parent frame |
| 4 | child | String, child frame |
| 5 | x | Float64, translation x |
| 6 | y | Float64, translation y |
| 7 | z | Float64, translation z |
| 8 | roll | Float64, rotation around x axis |
| 9 | pitch | Float64, rotation around y axis |
| 10 | yaw | Float64, rotation around z axis |

##

<a id="register-transform-reporter"></a>
# **Register Transform Reporter** [⬆️](#message-summary "Message Summary")

This message registers the Transform Reporter with the Transform Reporter Discovery service.

Uni-cast

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000161 | Register Transform Reporter |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | transform reporter | TransformReporterRec |

TransformReporterRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | name | String, name of the transform reporter |
| 2 | description | String, description of the transform reporter |
| 3 | uri | String, uri of the transform reporter, for example: com.ovt.tf.drive, com.ovt.tf.manip, … |
| 4 | comp | Comp Address, address of the transform reporter component |
| 5 | transform defs | List of TransformDefRec |

TransformDefRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | parent | String, parent frame |
| 2 | child | String, child frame |

##

<a id="query-transform-reporters"></a>
# **Query Transform Reporters** [⬆️](#message-summary "Message Summary")

This message queries the Transform Reporter Discovery service for the registered transform reporters.

Uni-cast  
Recipient replies: Report Transform Reporters

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000162 | Query Transform Reporters |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-transform-reporters"></a>
# **Report Transform Reporters** [⬆️](#message-summary "Message Summary")

This message reports the registered transform reporters.

Uni-cast  
Response to: Query Transform Reporters

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000163 | Report Transform Reporters |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | transform reporters | List of TransformReporterRec (Refer to Register Transform Reporter) |

##

<a id="event"></a>
# **Event** [⬆️](#message-summary "Message Summary")

This message encapsulates the event, including when, where, and what Json strings encoded in the data jsons of the message header. Bytes for images and tensors are stored in the buffers of the message header.

Uni-cast  
Response to:

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000164 | Event |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | event | EventRec |

EventRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | uri | String, event uri |
| 2 | type | String, type of the event |
| 3 | start | Float64, time in seconds when the event starts |
| 4 | stale | Float64, time in seconds when the event is no longer valid |
| 5 | pose | PoseRec |
| 6 | details | List of DataJsonRec |
| 7 | meta data | List of DataJsonRec |

PoseRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | frame | String, name of the reference frame the pose is in. |
| 2 | lat | Float64, latitude if frame is gnss |
| 3 | lon | Float64, longitude if frame is gnss |
| 4 | hae | Float64, height above Ellipsoid relative to WGS-84|
| 5 | ce | Float64, circular error, the horizontal radius of uncertainty |
| 6 | le | Float64, linear error, the vertical height of uncertainty (hae) |
| 7 | x | Float64, x |
| 8 | y | Float64, y |
| 9 | z type | ::ZPositionTypeEnum: UNKNOWN, AGL, MSL, ASL, DEPTH |
| 10 | z | Float64, z |
| 11 | roll | Float64, roll |
| 12 | pitch | Float64, pitch |
| 13 | yaw | Float64, yaw |

DataJsonRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | data json | String, json string |

