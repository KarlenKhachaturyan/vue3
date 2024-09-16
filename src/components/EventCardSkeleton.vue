<template>
  <div class="event-card">
    <h2>fasd</h2>
    <span/>
  </div>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  background-color: #42b983;
  display: flex;
  flex-direction: column;
  align-items: center;
}

span {
  display: block;
  height: 16px;
  width: 100%;
  animation: pulse 2s infinite;
}

h2 {
  display: block;
  height: 24px;
  width: 80%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    background-color: #cfcfcf;
  }
  50% {
    background-color: #eaeaea;
  }
  100% {
    background-color: #cfcfcf;
  }
}
</style>
