terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.90"
    }
  }
}

provider "azurerm" {
  features {}

  subscription_id = "18b651a8-d884-46f0-96e4-1978e84750df"
}



