<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;emapalumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Emapalumab_Brossard2024_reference&quot;,&quot;label&quot;:&quot;Brossard_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_emapalumab/Emapalumab_Brossard2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# emapalumab

- **generic name:** emapalumab
- **ATC codes:** `L04AA39`, `L04AG09`
- **DrugBank:** [DB14724](https://go.drugbank.com/drugs/DB14724) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Emapalumab is a monoclonal antibody used to treat hemophagocytic lymphohistiocytosis, an immune system disease. It is an approved immunosuppressant, though a marketing application for one product was refused in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28209889](https://www.wikidata.org/wiki/Q28209889) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:05 | 0:56 | 1/0/0 | 1/0/0 | 0/0/0 | 44,234/3,658 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.769). Primary extraction retained.">cross-check: disputed</span> | [Brossard_2024_reference](drugs/drug_emapalumab/Emapalumab_Brossard2024_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Brossard P et al., Population Pharmacokinetics of the Anti…, Rheumatology and therapy (2024) | [10.1007/s40744-024-00669-y](https://doi.org/10.1007/s40744-024-00669-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Brossard_2025_CXCL9](drugs/drug_emapalumab/pd_Brossard_2025_CXCL9.md) | CXCL9 ← emapalumab · indirect response — drug inhibits the production of CXCL9 | — | Brossard P, Emapalumab in Patients With Macrophage…, Clinical and translational… (2025) | [10.1111/cts.70163](https://doi.org/10.1111/cts.70163) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Brossard_2025_Ferritin](drugs/drug_emapalumab/pd_Brossard_2025_Ferritin.md) | ferritin ← emapalumab · indirect response — drug inhibits the production of ferritin | — | Brossard P, Emapalumab in Patients With Macrophage…, Clinical and translational… (2025) | [10.1111/cts.70163](https://doi.org/10.1111/cts.70163) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Brossard_2025_sIL_2R](drugs/drug_emapalumab/pd_Brossard_2025_sIL_2R.md) | soluble interleukin-2 receptor α ← emapalumab · indirect response — drug inhibits the production of soluble interleukin-2 receptor α | — | Brossard P, Emapalumab in Patients With Macrophage…, Clinical and translational… (2025) | [10.1111/cts.70163](https://doi.org/10.1111/cts.70163) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=emapalumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IFNG (neutralizer).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brossard_2025 | relevant | 10 | 3 | The paper is a population PK/PD study of emapalumab in humans, but the primary numeric PK parameter table (Table S2) is in the supplementary material, with only a fragment of a table (CL, Q values) visible in the extracted evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:05 UTC</sub>
