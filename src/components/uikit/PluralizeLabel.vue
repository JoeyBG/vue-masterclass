<script setup lang="ts">
defineProps<{ label: string; list?: unknown[] }>()
</script>

<template>{{ list?.length === 1 ? label : `${label}s` }}</template>

<style scoped></style>
