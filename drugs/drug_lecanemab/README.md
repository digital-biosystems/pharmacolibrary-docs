<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;lecanemab&quot;}]"></div>

# lecanemab

- **generic name:** lecanemab
- **ATC codes:** `N06DX04`
- **DrugBank:** [DB14580](https://go.drugbank.com/drugs/DB14580) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Lecanemab is a monoclonal antibody used to treat Alzheimer's disease. It is authorised in the European Union and is an approved anti-dementia medicine, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q56274769](https://www.wikidata.org/wiki/Q56274769) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:00 | 8:01 | 0/2/1 | 2/0/2 | 0/0/0 | 405,776/25,382 | ollama / glm-5.3-flash | 11 | 1/10 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q31 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Majid_2024_reference](drugs/drug_lecanemab/Lecanemab_Majid2024_reference.md) | — | 2-compartment (no model) | 6 (+6 cov.) | Majid O et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13224](https://doi.org/10.1002/psp4.13224) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hayato_2022_reference](drugs/drug_lecanemab/Lecanemab_Hayato2022_reference.md) | — | 2-compartment (no model) | 5 (+6 cov.) | Hayato S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12862](https://doi.org/10.1002/psp4.12862) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lim_2025_reference](drugs/drug_lecanemab/Lecanemab_Lim2025_reference.md) | — | 2-compartment (no model) | 3 | Lim S et al., Sex differences in efficacy/safety of a…, Translational and clinical… (2025) | [10.12793/tcp.2025.33.e19](https://doi.org/10.12793/tcp.2025.33.e19) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bhagunde_2026_2_A_42_40](drugs/drug_lecanemab/pd_Bhagunde_2026_2_A_42_40.md) | plasma Aβ42/40 ratio ← lecanemab · indirect response — drug stimulates the production of plasma Aβ42/40 ratio | — | Bhagunde P et al., Pharmacokinetic/pharmacodynamic analyse…, Alzheimer's & dementia (New… (2026) | [10.1002/trc2.70246](https://doi.org/10.1002/trc2.70246) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Bhagunde_2026_2_p_tau181](drugs/drug_lecanemab/pd_Bhagunde_2026_2_p_tau181.md) | plasma p-tau181 ← lecanemab · indirect response — drug inhibits the production of plasma p-tau181 | — | Bhagunde P et al., Pharmacokinetic/pharmacodynamic analyse…, Alzheimer's & dementia (New… (2026) | [10.1002/trc2.70246](https://doi.org/10.1002/trc2.70246) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hayato_2022_A_42_40_ratio](drugs/drug_lecanemab/pd_Hayato_2022_A_42_40_ratio.md) | plasma Aβ42/40 ratio ← lecanemab · indirect response — drug stimulates the production of plasma Aβ42/40 ratio | — | Hayato S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12862](https://doi.org/10.1002/psp4.12862) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Hayato_2022_SUVr](drugs/drug_lecanemab/pd_Hayato_2022_SUVr.md) | amyloid PET standard uptake ratio ← lecanemab · indirect response — drug stimulates the loss of amyloid PET standard uptake ratio | — | Hayato S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12862](https://doi.org/10.1002/psp4.12862) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hayato_2022_p_tau181](drugs/drug_lecanemab/pd_Hayato_2022_p_tau181.md) | plasma p‐tau181 ← lecanemab · indirect response — drug inhibits the production of plasma p‐tau181 | — | Hayato S et al., Population pharmacokinetic-pharmacodyna…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12862](https://doi.org/10.1002/psp4.12862) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Majid_2024_ARIA_E](drugs/drug_lecanemab/pd_Majid_2024_ARIA_E.md) | incidence of ARIA-E (amyloid-related imaging abnormalities–edema/effusion) ← lecanemab · direct linear effect | — | Majid O et al., Population pharmacokinetics and exposur…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13224](https://doi.org/10.1002/psp4.13224) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [van_2025_CL](drugs/drug_lecanemab/pd_van_2025_CL.md) | Amyloid plaque burden (amyloid PET, Centiloid) ← lecanemab · indirect response — drug stimulates the loss of Amyloid plaque burden (amyloid PET, Centiloid) | — | van Maanen E et al., Modeling amyloid plaque turnover dynami…, Alzheimer's & dementia (New… (2025) | [10.1002/trc2.70169](https://doi.org/10.1002/trc2.70169) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Bhagunde_2026_2_GFAP](drugs/drug_lecanemab/pd_Bhagunde_2026_2_GFAP.md) | plasma GFAP ← relative decrease in amyloid plaque (driven by lecanemab concentration) · indirect response — drug inhibits the production of plasma GFAP | — | Bhagunde P et al., Pharmacokinetic/pharmacodynamic analyse…, Alzheimer's & dementia (New… (2026) | [10.1002/trc2.70246](https://doi.org/10.1002/trc2.70246) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lecanemab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: APP (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhagunde_2026 | irrelevant | 4 | 2 | This is a PK/PD disease-progression model; the lecanemab population PK parameters (2-compartment model) are only in supplementary Table S1, not provided in the evidence. |
| popPK | Bhagunde_2026_2 | relevant | 6 | 3 | Population PK model for lecanemab (CL, V1, V2, Q) is described but numeric parameter values are in Table S1/supplementary material not provided; only PD biomarker half-lives appear. |
| popPK | Bregman_2025 | irrelevant | 0 | 0 | Real-world clinical outcomes study (MMSE, ARIA, safety) with no PK parameters such as CL, V, or half-life reported. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | Clinical efficacy/safety and biomarker study; no PK parameters (CL, V, half-life, or PK model) for lecanemab are reported. |
| popPK | Dou_2026 | irrelevant | 0 | 0 | This is an amyloid-PET imaging study of amyloid clearance (Centiloid/SUVR changes), not a pharmacokinetic study reporting CL, V, or a population-PK model for lecanemab. |
| popPK | Hartz_2024 | irrelevant | 0 | 0 | This is a clinical outcomes study of CDR-SB and independence in AD; lecanemab appears only as a treatment with published trial effect sizes, with no PK parameters (CL, V, half-life, or PK model) reported. |
| popPK | Hartz_2025 | irrelevant | 0 | 0 | Clinical meaningfulness study of CDR-SB and ADLs; no PK parameters for lecanemab are reported. |
| popPK | Li_2026 | irrelevant | 0 | 0 | MRI volumetric imaging study of lecanemab-treated AD patients; no PK parameters (CL, V, half-life, or PK model) for lecanemab are reported. |
| popPK | Lim_2025 | relevant | 6 | 4 | Review citing population PK models of lecanemab with some numeric covariate effects (F/M CL ratio 0.792, V1 0.893, AUC +26%), but full parameter values live in cited references/supplementary tables not provided. |
| popPK | van_2025 | irrelevant | 2 | 3 | This is a plaque turnover E-R model, not a PK study of lecanemab; lecanemab appears only as a comparator with an effect slope (13.8-fold Kout increase), and no lecanemab disposition parameters (CL, V, half-life) are given — details live in supplementary tables. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:53 UTC</sub>
