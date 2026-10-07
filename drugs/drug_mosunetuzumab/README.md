<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;mosunetuzumab&quot;}]"></div>

# mosunetuzumab

- **generic name:** mosunetuzumab
- **ATC codes:** `L01FX25`
- **DrugBank:** [DB15434](https://go.drugbank.com/drugs/DB15434) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Mosunetuzumab is a monoclonal antibody cancer medicine used to treat follicular lymphoma. It is authorised in the European Union and is also being investigated for other uses.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:19 | 9:44 | 0/1/3 | 1/0/0 | 0/0/0 | 171,023/24,435 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Li_2025_china_study_yo43555](drugs/drug_mosunetuzumab/Mosunetuzumab_Li2025_china_study_yo43555.md) | — | 1-compartment (no model) | 5 | Li J et al., Ethnic Sensitivity Assessment of Mosune…, Clinical and translational… (2025) | [10.1111/cts.70211](https://doi.org/10.1111/cts.70211) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Li_2025_global_study_go29781_group_b_dose_expansion_cohort_patients_with_r_r_fl](drugs/drug_mosunetuzumab/Mosunetuzumab_Li2025_global_study_go29781_group_b_dose_expan.md) | — | 1-compartment (no model) | 5 | Li J et al., Ethnic Sensitivity Assessment of Mosune…, Clinical and translational… (2025) | [10.1111/cts.70211](https://doi.org/10.1111/cts.70211) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Li_2025_mean](drugs/drug_mosunetuzumab/Mosunetuzumab_Li2025_mean.md) | — | 1-compartment (no model) | 4 | Li J et al., Ethnic Sensitivity Assessment of Mosune…, Clinical and translational… (2025) | [10.1111/cts.70211](https://doi.org/10.1111/cts.70211) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.609). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Bender_2024_reference](drugs/drug_mosunetuzumab/Mosunetuzumab_Bender2024_reference.md) | — | 2-compartment (no model) | 6 | Bender B et al., Population pharmacokinetics and CD20 bi…, Clinical and translational… (2024) | [10.1111/cts.13825](https://doi.org/10.1111/cts.13825) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2025_2_CRR](drugs/drug_mosunetuzumab/pd_Li_2025_2_CRR.md) | Complete response rate ← mosunetuzumab · direct Emax (saturable) effect | — | Li CC et al., A Novel Step-Up Dosage Regimen for Enha…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3445](https://doi.org/10.1002/cpt.3445) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2025_2_CRS](drugs/drug_mosunetuzumab/pd_Li_2025_2_CRS.md) | Grade ≥ 2 cytokine release syndrome ← mosunetuzumab · direct linear effect | — | Li CC et al., A Novel Step-Up Dosage Regimen for Enha…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3445](https://doi.org/10.1002/cpt.3445) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2025_2_Log2_IFN_CFBLmax](drugs/drug_mosunetuzumab/pd_Li_2025_2_Log2_IFN_CFBLmax.md) | Log2 maximal fold change from pre-dose baseline of IFN-γ ← mosunetuzumab · stimulation effect | — | Li CC et al., A Novel Step-Up Dosage Regimen for Enha…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3445](https://doi.org/10.1002/cpt.3445) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2025_2_ORR](drugs/drug_mosunetuzumab/pd_Li_2025_2_ORR.md) | Objective response rate ← mosunetuzumab · direct Emax (saturable) effect | — | Li CC et al., A Novel Step-Up Dosage Regimen for Enha…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3445](https://doi.org/10.1002/cpt.3445) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mosunetuzumab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD3E (binder), MS4A1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 4  ·  extracted 0  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jamois_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for tocilizumab (the CRS management agent), not for mosunetuzumab (the subject drug). |
| popPK | Li_2025_2 | relevant | 8 | 2 | The paper describes a population PK model for mosunetuzumab and reports a terminal half-life, but the specific numeric values for clearance, volume, and other parameters are explicitly stated to be in Tables S3 and S5, which are not included in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:11 UTC</sub>
