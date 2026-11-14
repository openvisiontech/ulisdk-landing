This document is published by Open Vision Technology LLC.

8 Thompson Pond Road, Stoneham, MA 02180, U.S.A.

Tel: 339-293-2151

Copyright 2025 by Open Vision Technology LLC.

This document contains proprietary information protected by copyright. All rights reserved. No part of this document may be photocopied or reproduced without the prior written consent of Open Vision Technology LLC.

##

<a id="message-summary"></a>
# **Message Summary**

Here is the list of the core clients messages:

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000601 | [Query Access Client](#query-access-client) |
| H:0x00000001 L: 0x00000602 | [Report Access Client](#report-access-client) |
| H:0x00000001 L: 0x00000603 | [Query Control Client](#query-control-client) |
| H:0x00000001 L: 0x00000604 | [Report Control Client](#report-control-client) |
| H:0x00000001 L: 0x00000605 | [Query State Client](#query-state-client) |
| H:0x00000001 L: 0x00000606 | [Report State Client](#report-state-client) |
| H:0x00000001 L: 0x00000607 | [Set Data Topic Clients](#set-data-topic-clients) |

##

<a id="query-access-client"></a>
# **Query Access Client** [⬆️](#message-summary "Message Summary")

The Access Client Record contains the necessary details for accessing the server subsystem. A component transmits this message to the Data Store service, which then responds with the Report Access Client.

Uni-cast  
Recipient replies: Report Access Client

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000601 | Query Access Client |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-access-client"></a>
# **Report Access Client** [⬆️](#message-summary "Message Summary")

The recipient replies with a Report Access Client message, which contains the necessary details for accessing the server subsystem.

Uni-cast  
Response to: Query Access Client.

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000602 | Report Access Client |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | access client | SubsystemAccessClientRec |

SubsystemAccessClientRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | address | Comp Address, address of the subsystem |
| 2 | have access | ::HaveAccessEnum: UNKNOWN, NO, YES Whether we have access right to the server subsystem |
| 3 | session uuid | UliUuid, session uuid |
| 4 | app access right | ::AppAccessRightEnum: UNKNOWN, NOT\_ALLOWED, OPERATOR, MAINTAINER, ADMINISTRATOR The app access right that we have to the server subsystem. |
| 5 | data access right | ::DataAccessRightEnum: UNKNOWN, NOT\_ALLOWED, UNCLASSIFIED, CONTROLLED, CLASSIFIED The data access right that we have to the server subsystem. |

##

<a id="query-control-client"></a>
# **Query Control Client** [⬆️](#message-summary "Message Summary")

The Control Client contains the necessary details for controlling the server subsystem. A component transmits this message to the Data Store service, which then responds with the Report Control Client.

Uni-cast  
Recipient replies: Report Control Client

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000603 | Query Control Client |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-control-client"></a>
# **Report Control Client** [⬆️](#message-summary "Message Summary")

The recipient replies with a Report Control Client message, which contains the necessary details for controlling the server subsystem.

Uni-cast  
Response to: Query Control Client

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000604 | Report Control Client |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | control client | SubsystemControlClientRec |

SubsystemControlClientRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp | Comp Address, address of the subsystem |
| 2 | have control | ::HaveControlEnum: UNKNOWN, NO, YES Whether we have control to the subsystem |
| 3 | session uuid | UliUuid, session uuid |
| 4 | request release | ::RequestReleaseEnum: UNKNOWN, NO, YES |
| 5 | requestor uri | String, uri of the requestor subsystem |
| 6 | requestor image | String, the profile image of the requestor subsystem |
| 7 | requestor pose | PoseRec |

PoseRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | frame | String, name of the reference frame the pose is in. |
| 2 | lat | Float64, latitude if frame is gnss |
| 3 | lon | Float64, longitude if frame is gnss |
| 4 | hae | Float64, height above Ellipsoid relative to WGS-84 |
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

<a id="query-state-client"></a>
# **Query State Client** [⬆️](#message-summary "Message Summary")

The Subsystem State Client contains the necessary details for setting the subsystem state of the target subsystem. A component transmits this message to the Data Store service, which then responds with the Report State Client.

Uni-cast  
Recipient replies: Report State Client

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000605 | Query State Client |

| \# | Name | Description |
| :---- | :---- | :---- |

##

<a id="report-state-client"></a>
# **Report State Client** [⬆️](#message-summary "Message Summary")

The recipient replies with a Report State Client message, which contains the necessary details for setting the subsystem state of the target subsystem.

Uni-cast  
Response to: Query State Client.

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000606 | Report State Client |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | state client | SubsystemStateClientRec |

SubsystemStateClientRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | comp | Comp Address, address of the subsystem |
| 2 | have control | ::HaveControlEnum: UNKNOWN, NO, YES Whether we have control to the server subsystem |
| 3 | client state | ::SubsystemStateClientStateEnum: UNKNOWN, WAITING, READY, RESET, SHUTDOWN, RENDER\_USELESS Indicate from the user side how the subsystem state of the target subsystem will be set. The state client sends the subsystem state cmd to the subsystem state service. |
| 4 | state | ::SubsystemStateEnum: UNKNOWN, INITIALIZING, INITIALIZE, OPERATIONAL, EMERGENCY, PAUSE, SHUTDOWN, RENDER\_USELESS |

##

<a id="set-data-topic-clients"></a>
# **Set Data Topic Clients** [⬆️](#message-summary "Message Summary")

The recipient updates the Data Topic Clients in the Core Client Data Store. This allows the Data Topic Client to report the subscribed data topics.

Uni-cast  
Response To:

| ID | Name |
| :---- | :---- |
| H:0x00000001 L: 0x00000607 | Set Data Topic Clients |

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | data topic clients | List of DataTopicClientRec |

DataTopicClientRec

| \# | Name | Description |
| :---- | :---- | :---- |
| 1 | client address | Comp Address, address of the data topic client |
| 2 | comp data topic | CompDataTopicRec |
| 3 | subscribe data topics | List of DataTopicRec |
| 4 | count | UInt64, number of times this data topic client updates the data topic service with the subscribed data topics. |

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
