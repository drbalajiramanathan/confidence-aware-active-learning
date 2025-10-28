<script>
  import { onMount } from 'svelte';
  import * as tf from '@tensorflow/tfjs';

  let model;

  onMount(async () => {
    model = await tf.loadGraphModel('/model/model.json');
    console.log('Model Loaded');
  });

  async function predict(imageElement) {
    const imageTensor = tf.browser.fromPixels(imageElement)
      .resizeNearestNeighbor([224, 224])  // Resize to match model input
      .expandDims(0)  // Add batch dimension
      .toFloat()
      .div(tf.scalar(255));  // Normalize the image

    const predictions = await model.predict(imageTensor).data();
    console.log(predictions);
  }
</script>

<main>
  <h1>Skin Cancer Prediction Model</h1>
  <input type="file" accept="image/*" on:change={event => predict(event.target.files[0])} />
</main>

<!-- Import the App.css file -->
<style src="./App.css"></style>
