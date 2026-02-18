output "vm_public_ip" {
  value = azurerm_public_ip.pip.ip_address
}

output "aks_name" {
  value = azurerm_kubernetes_cluster.aks.name
}

output "aks_rg" {
  value = azurerm_kubernetes_cluster.aks.resource_group_name
}