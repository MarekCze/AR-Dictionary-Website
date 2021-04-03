<template>
    <div id="app-guide-wrapper">
        <h1 class="hit-heading">How It Works</h1>
        <div id="hit-step1">
            <div class="hit-step" id="step1">
                <h2>1.</h2>
            </div>
            <div id="step1-wrapper" class="step-wrapper">
                <img id="step1-img" src="@/assets/img/phoneFrame-homepage1.png" alt="app GUI image">
            
                <p>Point your phone at the page and tap on the word you would like to look up.</p>
            </div>
            
        </div>
        <div id="hit-step2">
            <div class="hit-step" id="step2">
                <h2>2.</h2>
            </div>
            <div id="step2-wrapper" class="step-wrapper">
                <img id="step2-img" src="@/assets/img/phoneFrame-search-result-nb.png" alt="app GUI image">
            
                <p>Read the definition of the word and optionally take a look at the example sentences
                    and similar words that give the word more context. You can also tap on the audio button
                    in the upper right corner to hear the pronunciation of the word.
                </p>
            </div>
            
        </div>
        <div id="hit-step3">
            <div class="hit-step" id="step3">
                <h2>3.</h2>
            </div>
            <div id="step3-wrapper" class="step-wrapper">
                <img id="step3-img" src="@/assets/img/phoneFrame-notebooks-nb.png" alt="app GUI image">
            
                <p>Notebooks organize your searches by date. All you have to do to refresh your memory is
                    check the notebook with the correct date.
                </p>
            </div>
            
        </div>
        <div id="hit-step4">
            <div class="hit-step" id="step4">
                <h2>4.</h2>
            </div>
            <div id="step4-wrapper" class="step-wrapper">
                <img id="step4-img" src="@/assets/img/phoneFrame-notebook-words-nb.png" alt="app GUI image">
            
                <p>Browse all searches in a notebook. All searches are colour coded to match their respective notebook.</p>
            </div>
            
        </div>
    </div>
</template>

<script>

export default {
    name: 'AppGuideComponent'
}

</script>