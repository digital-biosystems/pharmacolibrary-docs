<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;mirikizumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mirikizumab_Chua2023_reference&quot;,&quot;label&quot;:&quot;Chua_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# mirikizumab

- **generic name:** mirikizumab
- **ATC codes:** `L04AC24`
- **DrugBank:** [DB14910](https://go.drugbank.com/drugs/DB14910) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Mirikizumab, a monoclonal antibody that blocks interleukin signalling, is used to treat ulcerative colitis. It is approved and authorised in the European Union, and remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q55641096](https://www.wikidata.org/wiki/Q55641096) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:11 | 3:10 | 1/0/3 | 2/0/0 | 0/0/0 | 181,960/17,725 | einfracz / qwen3.8-27b | 4 | 4/0 | 4/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chua_2023_reference](drugs/drug_mirikizumab/Mirikizumab_Chua2023_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Chua L et al., Mirikizumab Pharmacokinetics in Patient…, Clinical pharmacokinetics (2023) | [10.1007/s40262-023-01281-z](https://doi.org/10.1007/s40262-023-01281-z) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Chua_2025_serenity](drugs/drug_mirikizumab/Mirikizumab_Chua2025_serenity.md) | — | 1-compartment (no model) | 1 (+8 cov.) | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Chua_2025_vivid_1](drugs/drug_mirikizumab/Mirikizumab_Chua2025_vivid_1.md) | — | 1-compartment (no model) | 1 (+8 cov.) | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Otani_2025_reference](drugs/drug_mirikizumab/Mirikizumab_Otani2025_reference.md) | — | 1-compartment (no model) | 1 | Otani Y et al., Mirikizumab pharmacokinetics and exposu…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13286](https://doi.org/10.1002/psp4.13286) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chua_2025_SES_CD_response](drugs/drug_mirikizumab/pd_Chua_2025_SES_CD_response.md) | endoscopic response ← mirikizumab · direct Emax (saturable) effect | — | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chua_2025_clinical_response_by_PRO](drugs/drug_mirikizumab/pd_Chua_2025_clinical_response_by_PRO.md) | clinical response by PRO ← mirikizumab · stimulation effect | — | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Friedrich_2024_change_in_modified_Mayo_score](drugs/drug_mirikizumab/pd_Friedrich_2024_change_in_modified_Mayo_score.md) | change in modified Mayo score ← mirikizumab · inhibition effect | — | Friedrich S et al., Mirikizumab Exposure-Response Relations…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3305](https://doi.org/10.1002/cpt.3305) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chua_2025_CDAI_clinical_remission_composite](drugs/drug_mirikizumab/pd_Chua_2025_CDAI_clinical_remission_composite.md) | clinical remission by CDAI ← mirikizumab · direct linear effect | model (no simulator) | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chua_2025_endoscopic_response_composite](drugs/drug_mirikizumab/pd_Chua_2025_endoscopic_response_composite.md) | endoscopic response ← mirikizumab · direct linear effect | model (no simulator) | Chua L et al., Mirikizumab Pharmacokinetics and Exposu…, Clinical and translational… (2025) | [10.1111/cts.70320](https://doi.org/10.1111/cts.70320) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Friedrich_2024_clinical_remission](drugs/drug_mirikizumab/pd_Friedrich_2024_clinical_remission.md) | clinical remission ← mirikizumab · categorical (graded) response model | — | Friedrich S et al., Mirikizumab Exposure-Response Relations…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3305](https://doi.org/10.1002/cpt.3305) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Friedrich_2024_clinical_response](drugs/drug_mirikizumab/pd_Friedrich_2024_clinical_response.md) | clinical response ← mirikizumab · categorical (graded) response model | — | Friedrich S et al., Mirikizumab Exposure-Response Relations…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3305](https://doi.org/10.1002/cpt.3305) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Friedrich_2024_endoscopic_remission](drugs/drug_mirikizumab/pd_Friedrich_2024_endoscopic_remission.md) | endoscopic remission ← mirikizumab · categorical (graded) response model | — | Friedrich S et al., Mirikizumab Exposure-Response Relations…, Clinical pharmacology and t… (2024) | [10.1002/cpt.3305](https://doi.org/10.1002/cpt.3305) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mirikizumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IL12A (inhibitor), IL23A (antibody), IL23A (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dubinsky_2023 | irrelevant | 0 | 0 | The paper focuses on health-related quality of life (HRQoL) outcomes and clinical efficacy, reporting no quantitative pharmacokinetic parameters (e.g., CL, V, t1/2) for mirikizumab. |
| popPK | Friedrich_2024 | irrelevant | 4 | 0 | The paper is an exposure-response analysis that relies on PK model-predicted exposures but does not report the quantitative disposition parameters (CL, V, Q) themselves. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:08 UTC</sub>
