<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06D&quot;,&quot;href&quot;:&quot;atc/N06D.md&quot;},{&quot;label&quot;:&quot;donanemab&quot;}]"></div>

# donanemab

- **generic name:** donanemab
- **ATC codes:** `N06DX05`
- **DrugBank:** [DB16647](https://go.drugbank.com/drugs/DB16647) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Donanemab is a monoclonal antibody used to treat Alzheimer's disease. It is an approved anti-dementia medicine and has been authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:09 | 3:23 | 0/2/0 | 2/0/1 | 0/0/0 | 192,657/13,391 | ollama / glm-5.3-flash | 6 | 1/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Gueorguieva_2025_reference](drugs/drug_donanemab/Donanemab_Gueorguieva2025_reference.md) | — | 2-compartment (no model) | 3 | Gueorguieva I et al., Donanemab exposure-response in early sy…, Alzheimer's & dementia : th… (2025) | [10.1002/alz.70491](https://doi.org/10.1002/alz.70491) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.833). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lim_2025_reference](drugs/drug_donanemab/Donanemab_Lim2025_reference.md) | — | 2-compartment (no model) | 3 | Lim S et al., Sex differences in efficacy/safety of a…, Translational and clinical… (2025) | [10.12793/tcp.2025.33.e19](https://doi.org/10.12793/tcp.2025.33.e19) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Gueorguieva_2023_2_CDR_SB](drugs/drug_donanemab/pd_Gueorguieva_2023_2_CDR_SB.md) | Clinical Dementia Rating Scale‐Sum of Boxes ← donanemab · disease-progression model | — | Gueorguieva I et al., Donanemab exposure and efficacy relatio…, Alzheimer's & dementia (New… (2023) | [10.1002/trc2.12404](https://doi.org/10.1002/trc2.12404) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Gueorguieva_2023_2_iADRS](drugs/drug_donanemab/pd_Gueorguieva_2023_2_iADRS.md) | Integrated Alzheimer's Disease Rating Scale ← donanemab · disease-progression model | — | Gueorguieva I et al., Donanemab exposure and efficacy relatio…, Alzheimer's & dementia (New… (2023) | [10.1002/trc2.12404](https://doi.org/10.1002/trc2.12404) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Gueorguieva_2025_CDR_SB](drugs/drug_donanemab/pd_Gueorguieva_2025_CDR_SB.md) | Clinical Dementia Rating Scale‐Sum of Boxes ← donanemab · disease-progression model | — | Gueorguieva I et al., Donanemab exposure-response in early sy…, Alzheimer's & dementia : th… (2025) | [10.1002/alz.70491](https://doi.org/10.1002/alz.70491) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Gueorguieva_2025_iADRS](drugs/drug_donanemab/pd_Gueorguieva_2025_iADRS.md) | integrated Alzheimer's Disease Rating Scale ← donanemab · disease-progression model | — | Gueorguieva I et al., Donanemab exposure-response in early sy…, Alzheimer's & dementia : th… (2025) | [10.1002/alz.70491](https://doi.org/10.1002/alz.70491) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> | [Gueorguieva_2025_amyloid_PET](drugs/drug_donanemab/pd_Gueorguieva_2025_amyloid_PET.md) | Amyloid plaque level (PET) ← donanemab · indirect response — drug stimulates the loss of Amyloid plaque level (PET) | — | Gueorguieva I et al., Donanemab exposure-response in early sy…, Alzheimer's & dementia : th… (2025) | [10.1002/alz.70491](https://doi.org/10.1002/alz.70491) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [van_2025_CL](drugs/drug_donanemab/pd_van_2025_CL.md) | Amyloid plaque burden (amyloid PET, Centiloid) ← donanemab · indirect response — drug stimulates the loss of Amyloid plaque burden (amyloid PET, Centiloid) | — | van Maanen E et al., Modeling amyloid plaque turnover dynami…, Alzheimer's & dementia (New… (2025) | [10.1002/trc2.70169](https://doi.org/10.1002/trc2.70169) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span> | [Gueorguieva_2023_2_GFAP](drugs/drug_donanemab/pd_Gueorguieva_2023_2_GFAP.md) | plasma glial fibrillary acidic protein ← amyloid load (relative change from baseline, driven by donanemab) · indirect response — drug inhibits the production of plasma glial fibrillary acidic protein | — | Gueorguieva I et al., Donanemab exposure and efficacy relatio…, Alzheimer's & dementia (New… (2023) | [10.1002/trc2.12404](https://doi.org/10.1002/trc2.12404) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.286). Primary extraction retained.">cross-check: disputed</span> | [Gueorguieva_2023_2_p_tau217](drugs/drug_donanemab/pd_Gueorguieva_2023_2_p_tau217.md) | plasma phosphorylated tau 217 ← amyloid plaque (change in amyloid levels, driven by donanemab) · indirect response — drug inhibits the production of plasma phosphorylated tau 217 | — | Gueorguieva I et al., Donanemab exposure and efficacy relatio…, Alzheimer's & dementia (New… (2023) | [10.1002/trc2.12404](https://doi.org/10.1002/trc2.12404) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gueorguieva_2023.pdf` | Gueorguieva I et al., Donanemab Population Pharmacokinetics,…, Clinical pharmacology and t… (2023) | popPK | 10 | [10.1002/cpt.2875](https://doi.org/10.1002/cpt.2875) | [36805552](https://pubmed.ncbi.nlm.nih.gov/36805552) | Population PK model of donanemab in humans with half-life reported, but CL/V and other parameter values likely in tables/supplement not fully shown in the evidence. |

<sub>queue written 2026-10-07T01:06:37.253737+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gueorguieva_2023 | relevant | 10 | 4 | Population PK model of donanemab in humans with half-life reported, but CL/V and other parameter values likely in tables/supplement not fully shown in the evidence. |
| popPK | Gueorguieva_2023_2 | relevant | 6 | 3 | Population PK/PD modeling of donanemab in humans is described, but the PK parameters (two-compartment model) are only referenced from a prior publication; tables here contain biomarker/disease-progression parameters, not donanemab CL/V values. |
| popPK | Hartz_2024 | irrelevant | 0 | 0 | This is a clinical outcomes study modeling CDR-SB and time to loss of independence; no PK parameters (CL, V, half-life, population-PK model) for donanemab are reported. |
| popPK | Hartz_2025 | irrelevant | 0 | 0 | Clinical meaningfulness study of CDR-SB and independence in AD; no PK parameters for donanemab are reported. |
| popPK | Lim_2025 | irrelevant | 3 | 1 | This is a review of sex differences; for donanemab, sex was not retained in the final population PK model, and no numeric donanemab PK parameter values are present (they live in cited references/supplementary tables). |
| popPK | van_2025 | irrelevant | 2 | 3 | This is an exposure-response model of amyloid plaque turnover, not a PK study; donanemab appears only as a comparator with a plaque-elimination slope, and no donanemab PK parameters (CL, V, half-life) are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:06 UTC</sub>
