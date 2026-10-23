<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V01A&quot;,&quot;href&quot;:&quot;atc/V01A.md&quot;},{&quot;label&quot;:&quot;food&quot;}]"></div>

# food

- **generic name:** food
- **ATC codes:** `V01AA08`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

This entry refers to food allergen extracts, classified as allergen preparations used in allergy medicine. The available facts do not state where or how widely it is used.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Jung_2026_pH](drugs/drug_food/pd_Jung_2026_pH.md) | Intragastric pH ← food · indirect response — drug stimulates the production of Intragastric pH | — | Jung W et al., A Mechanism-Based Multi-Level Populatio…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70181](https://doi.org/10.1002/psp4.70181) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Koele_2025_TTP](drugs/drug_food/pd_Koele_2025_TTP.md) | time to positivity in liquid medium ← BTZ-043total (BTZ-043 + M2) · direct Emax (saturable) effect | — | Koele SE et al., Population pharmacokinetics and exposur…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf076](https://doi.org/10.1093/jac/dkaf076) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Koele_2025_cfu](drugs/drug_food/pd_Koele_2025_cfu.md) | bacterial load (cfu on solid medium) ← BTZ-043total (BTZ-043 + M2) · direct Emax (saturable) effect | — | Koele SE et al., Population pharmacokinetics and exposur…, The Journal of antimicrobia… (2025) | [10.1093/jac/dkaf076](https://doi.org/10.1093/jac/dkaf076) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:15 | 1:32 | 0/0/0 | 1/1/0 | 0/0/0 | 139,117/5,562 | ollama / glm-5.3-flash | 8 | 2/6 | 7/1 | 0 |

## Coverage

- **PubMed hits:** 2695 matched, 18 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lim_2020.pdf` | Lim SY et al., Model-Based Analysis of Cannabidiol Dos…, Pharmacotherapy (2020) | popPK | 10 | [10.1002/phar.2377](https://doi.org/10.1002/phar.2377) | [32058609](https://pubmed.ncbi.nlm.nih.gov/32058609) | Population PK model of CBD with quantitative bioavailability and absorption parameters reported in the abstract, though full CL/V estimates may reside in tables/supplements not shown. |

<sub>queue written 2026-10-07 18:15 UTC</sub>

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfood%5D&body=Drug%3A%20food%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_food/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
