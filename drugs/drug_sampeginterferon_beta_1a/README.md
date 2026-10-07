<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;sampeginterferon beta-1a&quot;}]"></div>

# sampeginterferon beta-1a

- **generic name:** sampeginterferon beta-1a
- **ATC codes:** `L03AB17`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

It is an approved immunostimulant medicine, given by injection to reduce relapses in relapsing forms of the disease.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:10 | 4:38 | 0/4/0 | 0/0/0 | 0/0/0 | 180,992/21,755 | einfracz / qwen3.8-27b | 5 | 5/0 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Hu_2015_2_reference](drugs/drug_sampeginterferon_beta_1a/SampeginterferonBeta1a_Hu2015v2_reference.md) | — | 2-compartment (no model) | 5 | Hu X et al., Pharmacokinetics, pharmacodynamics, and…, Journal of clinical pharmac… (2015) | [10.1002/jcph.390](https://doi.org/10.1002/jcph.390) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hu_2017_estimated_value](drugs/drug_sampeginterferon_beta_1a/SampeginterferonBeta1a_Hu2017_estimated_value.md) | — | 1-compartment (no model) | 2 | Hu X et al., Population-Based Pharmacokinetic and Ex…, Journal of clinical pharmac… (2017) | [10.1002/jcph.883](https://doi.org/10.1002/jcph.883) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hu_2017_mean](drugs/drug_sampeginterferon_beta_1a/SampeginterferonBeta1a_Hu2017_mean.md) | — | 1-compartment (no model) | 2 | Hu X et al., Population-Based Pharmacokinetic and Ex…, Journal of clinical pharmac… (2017) | [10.1002/jcph.883](https://doi.org/10.1002/jcph.883) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hu_2017_nonmem_results_estimated_value](drugs/drug_sampeginterferon_beta_1a/SampeginterferonBeta1a_Hu2017_nonmem_results_estimated_value.md) | — | 1-compartment (no model) | 3 | Hu X et al., Population-Based Pharmacokinetic and Ex…, Journal of clinical pharmac… (2017) | [10.1002/jcph.883](https://doi.org/10.1002/jcph.883) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Boyko_2019 | irrelevant | 2 | 0 | The paper is an efficacy/safety clinical trial report for multiple sclerosis; while it mentions a pharmacokinetic analysis was performed, no quantitative PK parameters (CL, V, etc.) are present in the evidence. |
| popPK | Hang_2016 | relevant | 5 | 2 | The paper is a population PK/PD (exposure-response) study for peginterferon beta-1a in humans, but it primarily reports PD parameters (lesion count effects) and references a separate publication for the core PK model parameters (clearance, half-life), with only limited PK values (half-life ~78h) provided in text. |
| popPK | Howley_2014 | irrelevant | 0 | 0 | The paper is a qualitative nursing review focusing on patient education and compliance, reporting no quantitative pharmacokinetic parameters for sampeginterferon_beta_1a. |
| popPK | Zhao_2022 | irrelevant | 2 | 0 | The paper reports Cmax and AUCinf percentages/differences by race, not standard disposition parameters (CL, V, ka, t1/2), and the actual numeric values for these metrics are not present in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 23:08 UTC</sub>
