<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V01A&quot;,&quot;href&quot;:&quot;atc/V01A.md&quot;},{&quot;label&quot;:&quot;food&quot;}]"></div>

# food

- **generic name:** food
- **ATC codes:** `V01AA08`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

This entry refers to food allergen extracts, classified as allergen preparations used in allergy medicine. The available facts do not state where or how widely it is used.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:15 | 1:32 | 0/0/0 | 1/1/0 | 0/0/0 | 139,117/5,562 | ollama / glm-5.3-flash | 8 | 2/6 | 7/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Jung_2026_pH](drugs/drug_food/pd_Jung_2026_pH.md) | Intragastric pH ← food · indirect response — drug stimulates the production of Intragastric pH | — | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Koele_2025_TTP](drugs/drug_food/pd_Koele_2025_TTP.md) | time to positivity in liquid medium ← BTZ-043total (BTZ-043 + M2) · direct Emax (saturable) effect | — | Koele SE et al., Population pharmacokinetics and exposur…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf076](https://doi.org/10.1093/jac/dkaf076) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Koele_2025_cfu](drugs/drug_food/pd_Koele_2025_cfu.md) | bacterial load (cfu on solid medium) ← BTZ-043total (BTZ-043 + M2) · direct Emax (saturable) effect | — | Koele SE et al., Population pharmacokinetics and exposur…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf076](https://doi.org/10.1093/jac/dkaf076) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2695 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lim_2020.pdf` | Lim SY et al., Model-Based Analysis of Cannabidiol Dos…, Pharmacotherapy (2020) | popPK | 10 | [10.1002/phar.2377](https://doi.org/10.1002/phar.2377) | [32058609](https://pubmed.ncbi.nlm.nih.gov/32058609) | Population PK model of CBD with quantitative bioavailability and absorption parameters reported in the abstract, though full CL/V estimates may reside in tables/supplements not shown. |

<sub>queue written 2026-10-07T18:15:16.151372+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ammendola_2022 | irrelevant | 0 | 0 | Narrative review of nutraceuticals and obesity; no PK parameters for any drug, and "food" is not a subject drug here. |
| popPK | Briguglio_2018 | irrelevant | 0 | 0 | A narrative review of food-drug interactions with no PK disposition parameters for food itself and no numeric values present. |
| popPK | Chawla_2023 | irrelevant | 0 | 10 | The paper is a population-PK model of gefapixant, not food; food appears only as a covariate (food effect on Ka), so food is not the subject drug. |
| popPK | Chrysant_2017 | irrelevant | 0 | 0 | This is a narrative review of sacubitril/valsartan with no PK parameters for food; food is not the subject drug. |
| popPK | Eales_2024 | irrelevant | 0 | 0 | This is a review of FDA labeling for biologics; no PK parameters for any specific drug, and "food" here refers to the FDA, not a drug. |
| popPK | Hoener_1981 | irrelevant | 0 | 0 | The study drug is nitrofurantoin; food is only a co-administered condition affecting absorption, not the subject drug with its own PK parameters. |
| popPK | Jung_2026 | irrelevant | 0 | 0 | Food is only a co-administered PD modifier in a population PK/PD model of PCABs (tegoprazan, vonoprazan, etc.); no PK parameters for food itself are reported. |
| popPK | Kubota_2018 | irrelevant | 0 | 0 | This is a population PK study of naldemedine, not of food; food appears only as a covariate ("food condition") on Vc/F, so no PK parameters for food itself are reported. |
| popPK | Laurence_2003 | irrelevant | 0 | 0 | This is an ecology paper about ozone effects on plants; no pharmacokinetic parameters for any drug, let alone food. |
| popPK | Li_2010 | irrelevant | 0 | 0 | The paper reports PK of posaconazole, a different drug; food is only a co-administered factor affecting absorption, not the subject drug. |
| popPK | Möllenhoff_2022 | irrelevant | 0 | 0 | This is a statistical methodology paper on bioequivalence testing with simulated data; no drug-specific PK parameters for any real drug (and nothing about food as a subject drug) are reported. |
| popPK | Pearson_1985 | irrelevant | 0 | 0 | This is a review of glyburide's pharmacokinetics; food is only mentioned as affecting gastric mobilization, not the subject drug, and no numeric PK parameters for food appear. |
| popPK | Santos_2021 | irrelevant | 0 | 0 | This is a review of the basophil activation test for allergy diagnosis with no pharmacokinetic parameters for any drug. |
| popPK | Sun_1999 | irrelevant | 0 | 0 | A regulatory perspective/review on population PK methodology with no drug-specific parameter values; food is not the subject drug. |
| popPK | Tam_2021 | irrelevant | 0 | 0 | The paper is about zanubrutinib, not food; food is only mentioned as a factor affecting PK, with no food disposition parameters. |
| popPK | Venitz_2007 | irrelevant | 0 | 0 | This is a review/discussion of biomarkers for efaproxiral, not a PK study of food, and no numeric PK parameters are present. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
