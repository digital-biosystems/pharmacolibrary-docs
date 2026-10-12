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
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.704). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hibma_2026_reference](drugs/drug_elranatamab/Elranatamab_Hibma2026_reference.md) | — | 2-compartment (no model) | 7 (+2 cov.) | Hibma JE et al., Elranatamab Population Pharmacokinetics…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01663-z](https://doi.org/10.1007/s40262-026-01663-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Hibma_2026_CRS](drugs/drug_elranatamab/pd_Hibma_2026_CRS.md) | incidence of any-grade CRS after the first step-up priming dose ← free elranatamab · categorical (graded) response model | — | Hibma JE et al., Elranatamab Population Pharmacokinetics…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01663-z](https://doi.org/10.1007/s40262-026-01663-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [Lon_2025_CRR](drugs/drug_elranatamab/pd_Lon_2025_CRR.md) | complete response rate ← elranatamab · categorical (graded) response model | — | Lon HK et al., Population Exposure-Response Efficacy A…, Targeted oncology (2025) | [10.1007/s11523-025-01168-y](https://doi.org/10.1007/s11523-025-01168-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> | [Lon_2025_DOR](drugs/drug_elranatamab/pd_Lon_2025_DOR.md) | duration of response ← elranatamab · time-to-event model | — | Lon HK et al., Population Exposure-Response Efficacy A…, Targeted oncology (2025) | [10.1007/s11523-025-01168-y](https://doi.org/10.1007/s11523-025-01168-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> | [Lon_2025_ORR](drugs/drug_elranatamab/pd_Lon_2025_ORR.md) | objective response rate ← elranatamab · categorical (graded) response model | — | Lon HK et al., Population Exposure-Response Efficacy A…, Targeted oncology (2025) | [10.1007/s11523-025-01168-y](https://doi.org/10.1007/s11523-025-01168-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> | [Lon_2025_PFS](drugs/drug_elranatamab/pd_Lon_2025_PFS.md) | progression-free survival ← elranatamab · time-to-event model | — | Lon HK et al., Population Exposure-Response Efficacy A…, Targeted oncology (2025) | [10.1007/s11523-025-01168-y](https://doi.org/10.1007/s11523-025-01168-y) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=elranatamab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD3D (antibody), TNFRSF17 (antibody).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
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
