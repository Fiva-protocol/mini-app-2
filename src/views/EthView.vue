<template>
    <div class="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div class="text-lg font-semibold">Earn Fixed Yield with <span class="font-bold text-purple-600">eETH</span></div>
      <div class="text-sm bg-blue-100 text-blue-700 p-2 rounded">
        Deposit eETH for fixed APY at maturity, forfeiting points. To farm points, check out our Points Party UI <a href="#" class="text-blue-500 underline">here</a>
      </div>
      <div>
        <h2 class="text-lg font-medium">Step 1. Select a maturity</h2>
        <p class="text-sm text-gray-600">Withdraw anytime at market prices. Position value and yield is subjected to the peg the underlying asset holds.</p>
        <div class="mt-4 space-y-2">
          <div class="p-4 bg-blue-50 rounded flex items-center justify-between">
            <span>27 Jun 2024 (18d)</span>
            <span class="font-semibold text-green-600">19.36% Fixed APY</span>
          </div>
          <div class="p-4 bg-gray-50 rounded flex items-center justify-between">
            <span>26 Sep 2024 (109d)</span>
            <span class="font-semibold text-green-600">10.24% Fixed APY</span>
          </div>
          <div class="p-4 bg-gray-50 rounded flex items-center justify-between">
            <span>26 Dec 2024 (200d)</span>
            <span class="font-semibold text-green-600">10.31% Fixed APY</span>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-lg font-medium">Step 2. Deposit to Earn</h2>
        <div class="mt-2">
          <label class="block text-sm font-medium text-gray-700">Input</label>
          <div class="relative mt-1">
            <select class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
              <option>weETH</option>
            </select>
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span class="text-gray-500">Balance: 0</span>
            </div>
          </div>
          <button class="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Connect Wallet</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
 
  