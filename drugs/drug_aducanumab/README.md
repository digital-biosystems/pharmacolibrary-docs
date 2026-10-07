<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;aducanumab&quot;}]"></div>

# aducanumab

- **generic name:** aducanumab
- **ATC codes:** `N06DX03`
- **DrugBank:** [DB12274](https://go.drugbank.com/drugs/DB12274) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Aducanumab is a monoclonal antibody against beta-amyloid that was developed to treat Alzheimer's disease. Its marketing application was withdrawn in the European Union, and it is not in routine use there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15708278](https://www.wikidata.org/wiki/Q15708278) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:03 | 2:06 | 0/2/0 | 1/0/2 | 0/0/0 | 107,958/7,067 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kandadi_2022_reference](drugs/drug_aducanumab/Aducanumab_Kandadi2022_reference.md) | — | parent + metabolite (no model) | 0 (+4 cov.) | Kandadi Muralidharan K et al., Population pharmacokinetics and standar…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12728](https://doi.org/10.1002/psp4.12728) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lim_2025_reference](drugs/drug_aducanumab/Aducanumab_Lim2025_reference.md) | — | 2-compartment (no model) | 3 | Lim S et al., Sex differences in efficacy/safety of a…, Translational and clinical… (2025) | [10.12793/tcp.2025.33.e19](https://doi.org/10.12793/tcp.2025.33.e19) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Kandadi_2022_SUVR](drugs/drug_aducanumab/pd_Kandadi_2022_SUVR.md) | composite standard uptake value ratio (SUVR) ← aducanumab · indirect response — drug stimulates the loss of composite standard uptake value ratio (SUVR) | — | Kandadi Muralidharan K et al., Population pharmacokinetics and standar…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12728](https://doi.org/10.1002/psp4.12728) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Muralidharan_2022_ARIA_E](drugs/drug_aducanumab/pd_Muralidharan_2022_ARIA_E.md) | first incidence of ARIA-E ← aducanumab · time-to-event model | — | Muralidharan KK et al., A Time-to-Event Exposure-Response Model…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2047](https://doi.org/10.1002/jcph.2047) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Muralidharan_2022_ARIA_E_resolution](drugs/drug_aducanumab/pd_Muralidharan_2022_ARIA_E_resolution.md) | time to ARIA-E resolution ← aducanumab · time-to-event model | — | Muralidharan KK et al., A Time-to-Event Exposure-Response Model…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2047](https://doi.org/10.1002/jcph.2047) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [van_2025_CL](drugs/drug_aducanumab/pd_van_2025_CL.md) | Amyloid plaque burden (amyloid PET, Centiloid) ← aducanumab · indirect response — drug stimulates the loss of Amyloid plaque burden (amyloid PET, Centiloid) | — | van Maanen E et al., Modeling amyloid plaque turnover dynami…, Alzheimer's & dementia (New… (2025) | [10.1002/trc2.70169](https://doi.org/10.1002/trc2.70169) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aducanumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: APP (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lim_2025 | relevant | 6 | 4 | Review citing population PK models of aducanumab with some numeric covariate effects (CL +13.4%, V1 +14.6%, V2 +12.9% in males), but full parameter values live in cited references/supplementary material. |
| popPK | Muralidharan_2022 | irrelevant | 3 | 0 | This is an exposure-response safety (ARIA-E) time-to-event model using aducanumab concentrations, not a PK disposition model; no numeric PK parameters (CL, V, half-life) appear in the evidence. |
| popPK | van_2025 | irrelevant | 2 | 2 | This is a plaque-turnover exposure-response model, not a PK model; aducanumab is only one of several mAbs with a plaque-elimination slope, and no aducanumab PK parameters (CL, V, half-life) are reported; detailed values live in supplementary tables not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:02 UTC</sub>
