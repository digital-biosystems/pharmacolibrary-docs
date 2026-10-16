<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;imetelstat&quot;}]"></div>

# imetelstat

- **generic name:** imetelstat
- **ATC codes:** `L01XX80`
- **DrugBank:** [DB14909](https://go.drugbank.com/drugs/DB14909) · **PubChem:** not captured
- **molar mass:** 4610.18 g/mol (C148H211N68O53P13S13) — DrugBank
- **groups:** approved, investigational

## About

Imetelstat is an anticancer medicine used to treat anemia in people with myelodysplastic syndromes. It is authorised in the European Union and remains investigational for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21083935](https://www.wikidata.org/wiki/Q21083935) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| imetelstat | parent | 4610.18 | C148H211N68O53P13S13 | DrugBank | — | González-Sales_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:47 | 1:01 | 0/1/0 | 0/0/0 | 0/0/0 | 82,529/5,717 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.76). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [González-Sales_2024_reference](drugs/drug_imetelstat/Imetelstat_GonzlezSales2024_reference.md) | — | 1-compartment (no model) | 8 (+2 cov.) | González-Sales M et al., Population pharmacokinetics of imetelst…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13160](https://doi.org/10.1002/psp4.13160) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=imetelstat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: Human telomerase RNA component (binder), PTGES3 (unknown), SCYL1 (unknown), SMG6 (unknown), TERT (inhibitor).</sub>

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
| popPK | Lennox_2025 | irrelevant | 1 | 0 | This is a cardiac safety (QT liability) assessment reporting hERG IC50 and ECG changes, not a pharmacokinetic study with quantitative disposition parameters (CL, V, t1/2). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:46 UTC</sub>
