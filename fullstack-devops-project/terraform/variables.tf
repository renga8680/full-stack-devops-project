variable "location" {
  default = "australiaeast"
}

variable "resource_group_name" {
  default = "tf-devops-rg"
}

variable "vm_name" {
  default = "tf-devops-vm"
}

variable "vm_size" {
  default = "Standard_D2ls_v5"
}

variable "admin_username" {
  default = "azureuser"
}

variable "ssh_public_key" {
  description = "SSH public key"
}
