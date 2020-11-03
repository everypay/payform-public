<template>
  <div class="flex items-center justify-center md:justify-start">
    <div class="w-full max-w-sm">
      <div id="pay-form"></div>
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    handleResponse(r) {
      if (r.onLoad) {
        var elementExists =  document.getElementById('loader');
        if (typeof(elementExists) != 'undefined' && elementExists != null)
        {
          document.getElementById('loader').remove();
        }
      }
      console.log(r.data)
    }
  },

  mounted() {

    var payload = {
      pk: 'pk_vI1tWSHzaskrVBobzcqvwk0uYAWXR8BP',
      amount: 50,
      locale: 'el',
      txnType: 'tds',
      theme:'default',
    }

    everypay.payform(payload,this.handleResponse);
  }
}
</script>
