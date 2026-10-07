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
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Gueorguieva_2025_reference](drugs/drug_donanemab/Donanemab_Gueorguieva2025_reference.md) | — | 2-compartment (no model) | 3 | Gueorguieva I et al., Donanemab exposure-response in early sy…, Alzheimer's & dementia : th… (2025) | [10.1002/alz.70491](https://doi.org/10.1002/alz.70491) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Lim_2025_reference](drugs/drug_donanemab/Donanemab_Lim2025_reference.md) | — | 2-compartment (no model) | 3 | Lim S et al., Sex differences in efficacy/safety of a…, Translational and clinical… (2025) | [10.12793/tcp.2025.33.e19](https://doi.org/10.12793/tcp.2025.33.e19) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gueorguieva_2023_2_CDR_SB](drugs/drug_donanemab/pd_Gueorguieva_2023_2_CDR_SB.md) | Clinical Dementia Rating Scale‐Sum of Boxes ← donanemab · disease-progression model | — | Gueorguieva I et al., Donanemab exposure and efficacy relatio…, Alzheimer's & dementia (New… (2023) | [10.1002/trc2.12404](https://doi.org/10.1002/trc2.12404) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gueorguieva_2023_2_iADRS](drugs/drug_donanemab/pd_Gueorguieva_2023_2_iADRS.md) | Integrated Alzheimer's Disease Rating Scale ← donanemab · disease-progression model | — | Gueorguieva I et al., Donanemab exposure and efficacy relatio…, Alzheimer's & dementia (New… (2023) | [10.1002/trc2.12404](https://doi.org/10.1002/trc2.12404) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gueorguieva_2025_CDR_SB](drugs/drug_donanemab/pd_Gueorguieva_2025_CDR_SB.md) | Clinical Dementia Rating Scale‐Sum of Boxes ← donanemab · disease-progression model | — | Gueorguieva I et al., Donanemab exposure-response in early sy…, Alzheimer's & dementia : th… (2025) | [10.1002/alz.70491](https://doi.org/10.1002/alz.70491) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gueorguieva_2025_iADRS](drugs/drug_donanemab/pd_Gueorguieva_2025_iADRS.md) | integrated Alzheimer's Disease Rating Scale ← donanemab · disease-progression model | — | Gueorguieva I et al., Donanemab exposure-response in early sy…, Alzheimer's & dementia : th… (2025) | [10.1002/alz.70491](https://doi.org/10.1002/alz.70491) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gueorguieva_2025_amyloid_PET](drugs/drug_donanemab/pd_Gueorguieva_2025_amyloid_PET.md) | Amyloid plaque level (PET) ← donanemab · indirect response — drug stimulates the loss of Amyloid plaque level (PET) | — | Gueorguieva I et al., Donanemab exposure-response in early sy…, Alzheimer's & dementia : th… (2025) | [10.1002/alz.70491](https://doi.org/10.1002/alz.70491) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [van_2025_CL](drugs/drug_donanemab/pd_van_2025_CL.md) | Amyloid plaque burden (amyloid PET, Centiloid) ← donanemab · indirect response — drug stimulates the loss of Amyloid plaque burden (amyloid PET, Centiloid) | — | van Maanen E et al., Modeling amyloid plaque turnover dynami…, Alzheimer's & dementia (New… (2025) | [10.1002/trc2.70169](https://doi.org/10.1002/trc2.70169) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gueorguieva_2023_2_GFAP](drugs/drug_donanemab/pd_Gueorguieva_2023_2_GFAP.md) | plasma glial fibrillary acidic protein ← amyloid load (relative change from baseline, driven by donanemab) · indirect response — drug inhibits the production of plasma glial fibrillary acidic protein | — | Gueorguieva I et al., Donanemab exposure and efficacy relatio…, Alzheimer's & dementia (New… (2023) | [10.1002/trc2.12404](https://doi.org/10.1002/trc2.12404) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Gueorguieva_2023_2_p_tau217](drugs/drug_donanemab/pd_Gueorguieva_2023_2_p_tau217.md) | plasma phosphorylated tau 217 ← amyloid plaque (change in amyloid levels, driven by donanemab) · indirect response — drug inhibits the production of plasma phosphorylated tau 217 | — | Gueorguieva I et al., Donanemab exposure and efficacy relatio…, Alzheimer's & dementia (New… (2023) | [10.1002/trc2.12404](https://doi.org/10.1002/trc2.12404) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=donanemab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: Beta amyloid plaque (antibody), Beta amyloid plaque (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
