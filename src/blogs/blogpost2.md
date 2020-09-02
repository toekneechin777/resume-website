### Attention is all you need
---
insert image here
---
What is this
---

Introduction

Lately in the past year or so, there has been an increasing amount of hype and interest in new forms of word embeddings such as the famous BERT and BERT-related models. And most deservedly as the introduction of a contextualized language model has changed how words are represented based on sentence context rather than a single vector. HOWEVER, using BERT-related models is all fun and dandy but it's far more powerful as a researcher and data scientist to be able to understand it on a deeper level. And to truly do that we will look at the paper that came a year prior to the first BERT paper with the introduction of Transformers in “Attention is all you need”.

Background
To understand the motivation of this paper we need to provide some context on the applications and background problem. Attention is a mechanism that is primarily applied to Neural Machine Translation.

Neural Machine Translation is the deep learning task of trying to map sentences to other sentences most commonly in translating different languages. Solutions to this task are commonly called sequence-to-sequence methods. Before this paper, the main state-of-the-art was using an encoder-decoder model like sets of Recurrent Neural Networks (RNNs) which proved widely successful due to their sequential time series nature it was able to predict the correct next word of a sequence based on previous words.
