<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;ocrelizumab&quot;}]"></div>

# ocrelizumab

- **generic name:** ocrelizumab
- **ATC codes:** `L04AG08`
- **DrugBank:** [DB11988](https://go.drugbank.com/drugs/DB11988) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ocrelizumab is an anti-CD20 monoclonal antibody used to treat multiple sclerosis. It is authorised in the European Union and is an approved medicine, though it has also been investigated for other conditions such as B cell leukemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2013780](https://www.wikidata.org/wiki/Q2013780) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:06 | 2:33 | 0/1/0 | 0/0/0 | 0/0/0 | 142,579/5,446 | einfracz / qwen3.8-27b | 13 | 0/7 | 12/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Gibiansky_2021_reference](drugs/drug_ocrelizumab/Ocrelizumab_Gibiansky2021_reference.md) | — | 3-compartment (no model) | 6 | Gibiansky E et al., Ocrelizumab in relapsing and primary pr…, British journal of clinical… (2021) | [10.1111/bcp.14658](https://doi.org/10.1111/bcp.14658) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 112 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Block_2025 | irrelevant | 0 | 0 | The study analyzes daily step counts to assess physical function and symptom fluctuations, not the pharmacokinetic disposition parameters (clearance, volume, half-life) of ocrelizumab. |
| popPK | He_2020 | irrelevant | 0 | 0 | This is a retrospective observational clinical outcome study regarding disability progression in multiple sclerosis, reporting no pharmacokinetic parameters for ocrelizumab. |
| popPK | Hersh_2024 | irrelevant | 0 | 0 | This is a clinical study on brain atrophy outcomes in MS patients, not a pharmacokinetic study of ocrelizumab, and it reports no PK parameters. |
| popPK | Kolind_2022 | irrelevant | 0 | 0 | The paper is an MRI substudy analyzing myelin water fraction in multiple sclerosis patients and contains no pharmacokinetic parameters for ocrelizumab. |
| popPK | Pitzalis_2021 | irrelevant | 0 | 0 | The study evaluates the effect of ocrelizumab on vaccine-induced humoral immune response (antibody titers), not the pharmacokinetic disposition parameters (CL, V, etc.) of the drug. |
| popPK | Siavoshi_2024 | irrelevant | 0 | 0 | The paper is a metabolomics study analyzing changes in circulating metabolites, not a pharmacokinetic study reporting disposition parameters for ocrelizumab. |
| popPK | Virupakshaiah_2026 | irrelevant | 0 | 0 | The study investigates the effect of ocrelizumab on anti-JCV antibody indices and immunoglobulin levels, not the pharmacokinetic disposition parameters (CL, V, half-life) of ocrelizumab itself. |
| popPK | You_2021 | irrelevant | 0 | 0 | The paper is an observational study measuring retinal nerve fiber layer thickness using OCT to compare neuroprotective effects of different MS therapies; it does not report any pharmacokinetic parameters for ocrelizumab. |
| popPK | Yuan_2026 | irrelevant | 0 | 0 | The paper is a narrative review discussing the biological rationale and development roadmap for B-cell targeting therapies, without reporting original quantitative pharmacokinetic parameter values for ocrelizumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:05 UTC</sub>
