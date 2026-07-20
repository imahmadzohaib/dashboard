<template>
  <div
    class="flex flex-col bg-[#1C252E] text-[#919EAB] outline outline-solid outline-slate-500
     transition-all duration-300 overflow-y-auto h-[calc(100vh-64px)] fixed bottom-0 hide-scrollbar" 
     :class="isOpen? 'w-64' : 'w-16' " >
    <div class="pl-4">
      <SidebarRender :totalItems="totalItems"></SidebarRender>
    </div>
  </div>
</template>

<script setup lang="ts">

const totalItems = [
  {
    category: "Dashboard",
    items: [
      { title: "Overview", icon: "lucide:layout-dashboard", path: "/" },
      { title: "Analytics", icon: "lucide:chart-bar",path:"/dashboard/analytics" },
      { title: "eCommerce", icon: "lucide:shopping-cart" },
      { title: "CRM", icon: "lucide:users" },
      { title: "SaaS", icon: "lucide:cloud" },
    ],
  },
  {
    category: "Apps",
    items: [
      { title: "Chat", icon: "lucide:message-circle" },
      { title: "Mail", icon: "lucide:mail" },
      { title: "Kanban", icon: "lucide:columns-3" },
      { title: "Calendar", icon: "lucide:calendar", path:"/apps/calendar" },
      { title: "Files", icon: "lucide:folder" },
      { title: "Charts", icon: "lucide:chart-bar" },
      { title: "Editor", icon: "lucide:pen-line" },
      { title: "Map", icon: "lucide:map" },
    ],
  },
  {
    category: "Pages",
    items: [
      { title: "Forms", icon: "lucide:clipboard-list" },
      { title: "Wizards", icon: "lucide:sparkles" },
      { title: "Pricing", icon: "lucide:badge-dollar-sign" },
      { title: "Billing", icon: "lucide:credit-card" },
      { title: "Notification", icon: "lucide:bell" },
      { title: "Support", icon: "lucide:headphones" },
      { title: "Components", icon: "lucide:component" },
      { title: "Timeline", icon: "lucide:clock" },
      { title: "Search", icon: "lucide:search" },
    ],
  },
  {
    category: "Layouts",
    items: [
      { title: "Sidebar", icon: "lucide:panel-left" },
      { title: "Horizontal", icon: "lucide:panel-top" },
    ],
  },
  {
    category: "Management",
    items: [
      { title: "Orders", icon: "lucide:package" },
      { title: "Products", icon: "lucide:box" },
      { title: "Customers", icon: "lucide:contact" },
      { title: "Invoices", icon: "lucide:file-text" },
      { title: "Users", icon: "lucide:user-cog" },
      { title: "Roles", icon: "lucide:shield" },
    ],
  },
  {
    category: "Account",
    items: [
      { title: "Profile", icon: "lucide:circle-user-round" },
      { title: "Activity", icon: "lucide:activity" },
      { title: "Connections", icon: "lucide:user-round" },
      { title: "Gallery", icon: "lucide:image" },
    ],
  },
  {
    category: "Settings",
    items: [
      { title: "Profile", icon: "lucide:user" },
      { title: "Password", icon: "lucide:lock" },
      { title: "Appearance", icon: "lucide:palette" },
      { title: "Two-Factor", icon: "lucide:smartphone" },
    ],
  },
];

const isOpen = useState("sidebar-open", () => true);

</script>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

</style>