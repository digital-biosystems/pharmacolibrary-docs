<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;crizanlizumab&quot;}]"></div>

# crizanlizumab

- **generic name:** crizanlizumab
- **ATC codes:** `B06AX01`
- **DrugBank:** [DB15271](https://go.drugbank.com/drugs/DB15271) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Crizanlizumab, a monoclonal antibody, was used to reduce vaso-occlusive crises in sickle cell disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28209568](https://www.wikidata.org/wiki/Q28209568) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:27 | 8:54 | 0/1/0 | 1/0/0 | 0/0/0 | 112,730/31,800 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 2/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Sy_2023_reference](drugs/drug_crizanlizumab/Crizanlizumab_Sy2023_reference.md) | — | 2-compartment (no model) | 4 | Sy SKB et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2023) | [10.1007/s40262-022-01193-4](https://doi.org/10.1007/s40262-022-01193-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span> | [Sy_2023_Psel](drugs/drug_crizanlizumab/pd_Sy_2023_Psel.md) | P-selectin ← crizanlizumab · target-mediated drug disposition | — | Sy SKB et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2023) | [10.1007/s40262-022-01193-4](https://doi.org/10.1007/s40262-022-01193-4) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=crizanlizumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: SELP (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Egesa_2022 | not_relevant | 0 | 0 | The paper is a general review of sickle cell disease epidemiology and treatment options, mentioning crizanlizumab only as an approved therapy without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Rivenbark_2026 | irrelevant | 0 | 0 | The study is a claims analysis of prescription rates for sickle cell disease medications and does not report any pharmacokinetic parameters for crizanlizumab. |
| PGx | Ross_2025 | not_relevant | 0 | 0 | The paper reports a clinical trial of ruxolitinib combinations (including crizanlizumab) but does not report pharmacogenomic effects on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 01:18 UTC</sub>
