<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;elranatamab&quot;}]"></div>

# elranatamab

- **generic name:** elranatamab
- **ATC codes:** `L01FX32`
- **DrugBank:** [DB15395](https://go.drugbank.com/drugs/DB15395) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Elranatamab is a bispecific monoclonal antibody used to treat multiple myeloma. It is authorised in the European Union as an anticancer medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q121549012](https://www.wikidata.org/wiki/Q121549012) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:35 | 2:46 | 0/1/0 | 0/0/2 | 0/0/0 | 76,165/14,176 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hibma_2026_reference](drugs/drug_elranatamab/Elranatamab_Hibma2026_reference.md) | — | 2-compartment (no model) | 7 (+2 cov.) | Hibma JE et al., Elranatamab Population Pharmacokinetics…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01663-z](https://doi.org/10.1007/s40262-026-01663-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hibma_2026_CRS](drugs/drug_elranatamab/pd_Hibma_2026_CRS.md) | incidence of any-grade CRS after the first step-up priming dose ← free elranatamab · categorical (graded) response model | — | Hibma JE et al., Elranatamab Population Pharmacokinetics…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01663-z](https://doi.org/10.1007/s40262-026-01663-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lon_2025_CRR](drugs/drug_elranatamab/pd_Lon_2025_CRR.md) | complete response rate ← elranatamab · categorical (graded) response model | — | Lon HK et al., Population Exposure-Response Efficacy A…, Targeted oncology (2025) | [10.1007/s11523-025-01168-y](https://doi.org/10.1007/s11523-025-01168-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lon_2025_DOR](drugs/drug_elranatamab/pd_Lon_2025_DOR.md) | duration of response ← elranatamab · time-to-event model | — | Lon HK et al., Population Exposure-Response Efficacy A…, Targeted oncology (2025) | [10.1007/s11523-025-01168-y](https://doi.org/10.1007/s11523-025-01168-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lon_2025_ORR](drugs/drug_elranatamab/pd_Lon_2025_ORR.md) | objective response rate ← elranatamab · categorical (graded) response model | — | Lon HK et al., Population Exposure-Response Efficacy A…, Targeted oncology (2025) | [10.1007/s11523-025-01168-y](https://doi.org/10.1007/s11523-025-01168-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Lon_2025_PFS](drugs/drug_elranatamab/pd_Lon_2025_PFS.md) | progression-free survival ← elranatamab · time-to-event model | — | Lon HK et al., Population Exposure-Response Efficacy A…, Targeted oncology (2025) | [10.1007/s11523-025-01168-y](https://doi.org/10.1007/s11523-025-01168-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=elranatamab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD3D (antibody), TNFRSF17 (antibody).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lon_2025 | irrelevant | 2 | 0 | This is an exposure–response efficacy analysis, and elranatamab disposition parameters are only referenced via a separate population-PK model, with no values provided here. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:33 UTC</sub>
