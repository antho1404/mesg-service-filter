# Service filter (ID: service-filter)

Description of my service

## Contents

- [Installation](#Installation)
  - [MESG Engine](#MESG-Engine)
  - [Deploy the Service](#Service)
- [Definitions](#Definitions)
  - [Tasks](#Tasks)
    - [filter](#filter)

## Installation

### MESG Engine

This service requires [MESG Engine](https://github.com/mesg-foundation/engine) to be installed first.

You can install MESG Engine by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
npm install -g @mesg/cli
```

### Deploy the Service

To deploy this service, go to [this service page](https://marketplace.mesg.com/services/myservice) on the [MESG Marketplace](https://marketplace.mesg.com) and click the button "get/buy this service".

## Definitions

### Tasks

<h4 id="filter">filter</h4>

Task key: `filter`

##### Inputs

| **Name**      | **Key**     | **Type** | **Description**                       |
| ------------- | ----------- | -------- | ------------------------------------- |
| **data**      | `data`      | `Any`    | Data is first value of conditions.    |
| **predicate** | `predicate` | `String` | Predicate is conditions               |
| **value**     | `value`     | `Any`    | Value is second value for conditions. |

**ps:** predicate values are `( eq | neq | gt | gte | lt | lte | cont)`.

##### Outputs

| **Name**  | **Key** | **Type** | **Description**          |
| --------- | ------- | -------- | ------------------------ |
| **match** | `match` | `String` | Return boolean as string |

**ps:** Match will return `( "TRUE" | "FALSE" )`.
