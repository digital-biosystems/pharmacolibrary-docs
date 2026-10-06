<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;idecabtagene vicleucel&quot;}]"></div>

# idecabtagene vicleucel

- **generic name:** idecabtagene vicleucel
- **ATC codes:** `L01XL07`
- **DrugBank:** [DB16665](https://go.drugbank.com/drugs/DB16665) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Idecabtagene vicleucel is a cell and gene therapy anticancer medicine used to treat multiple myeloma. It is authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:46 | 1:34 | 0/1/1 | 1/0/0 | 0/0/0 | 133,261/8,122 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q66, Q372 — no SI value to build fr…</sub><br><sub>route_to: `human_review`</sub> | [Wu_2025_stochastic_approximation](drugs/drug_idecabtagene_vicleucel/IdecabtageneVicleucel_Wu2025_stochastic_approximation.md) | — | 1-compartment (no model) | 6 | Wu F et al., Population Cellular Kinetics of Idecabt…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01531-2](https://doi.org/10.1007/s40262-025-01531-2) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Wu_2025_value](drugs/drug_idecabtagene_vicleucel/IdecabtageneVicleucel_Wu2025_value.md) | — | 1-compartment (no model) | 4 | Wu F et al., Population Cellular Kinetics of Idecabt…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01531-2](https://doi.org/10.1007/s40262-025-01531-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Connarn_2023_CRR](drugs/drug_idecabtagene_vicleucel/pd_Connarn_2023_CRR.md) | Complete Response Rate ← idecabtagene_vicleucel · direct linear effect | — | Connarn JN et al., Characterizing the exposure-response re…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12922](https://doi.org/10.1002/psp4.12922) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Connarn_2023_CRS_requiring_steroids](drugs/drug_idecabtagene_vicleucel/pd_Connarn_2023_CRS_requiring_steroids.md) | Cytokine release syndrome requiring steroids ← idecabtagene_vicleucel · direct linear effect | — | Connarn JN et al., Characterizing the exposure-response re…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12922](https://doi.org/10.1002/psp4.12922) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Connarn_2023_CRS_requiring_tocilizumab](drugs/drug_idecabtagene_vicleucel/pd_Connarn_2023_CRS_requiring_tocilizumab.md) | Cytokine release syndrome requiring tocilizumab ← idecabtagene_vicleucel · direct sigmoid Emax (Hill) effect | — | Connarn JN et al., Characterizing the exposure-response re…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12922](https://doi.org/10.1002/psp4.12922) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Connarn_2023_ORR](drugs/drug_idecabtagene_vicleucel/pd_Connarn_2023_ORR.md) | Overall Response Rate ← idecabtagene_vicleucel · direct sigmoid Emax (Hill) effect | — | Connarn JN et al., Characterizing the exposure-response re…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12922](https://doi.org/10.1002/psp4.12922) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=idecabtagene_vicleucel) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TNFRSF17 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cheng_2025.pdf` | Cheng Y et al., Integrative population pharmacokinetic…, Journal of pharmaceutical s… (2025) | popPK | 10 | [10.1016/j.xphs.2025.103925](https://doi.org/10.1016/j.xphs.2025.103925) | [40714188](https://pubmed.ncbi.nlm.nih.gov/40714188) | The paper describes a population PK modeling study for idecabtagene_vicleucel (ide-cel) but does not provide the specific numeric parameter values in the evidence text, which likely reside in the full body or supplementary material not included here. |

<sub>queue written 2026-10-06T20:44:59.106646+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2025 | relevant | 10 | 0 | The paper describes a population PK modeling study for idecabtagene_vicleucel (ide-cel) but does not provide the specific numeric parameter values in the evidence text, which likely reside in the full body or supplementary material not included here. |
| popPK | Cheng_2026 | irrelevant | 2 | 0 | The paper focuses on cellular kinetic (CAR-T expansion) modeling rather than standard disposition parameters (CL/V) for the drug, and no specific numeric values are present in the provided text. |
| popPK | Connarn_2023 | relevant | 5 | 2 | The paper reports non-compartmental exposure metrics (AUC, Cmax) for idecabtagene vicleucel, but does not provide quantitative compartmental PK parameters (CL, V, Q, half-life) in the provided text. |
| popPK | Mu_2022 | irrelevant | 1 | 1 | The study reports population pharmacokinetics for CT103A, which is a different BCMA-targeting CAR-T cell therapy, not idecabtagene_vicleucel. |
| popPK | Oswald_2023 | irrelevant | 0 | 0 | The study focuses exclusively on patient-reported outcomes (quality of life and symptoms) and contains no pharmacokinetic data or disposition parameters. |
| popPK | Sweiss_2025 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of fludarabine (a lymphodepleting agent) as a predictor of toxicity, rather than reporting the disposition parameters (CL, V, etc.) of idecabtagene vicleucel itself. |
| popPK | Wu_2025_2 | irrelevant | 3 | 0 | The study reports non-compartmental cellular kinetics (AUC, Cmax) rather than compartmental PK parameters (CL, V, Q) or population-PK model parameters for the drug itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:45 UTC</sub>
