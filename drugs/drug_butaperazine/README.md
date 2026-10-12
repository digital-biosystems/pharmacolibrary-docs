<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;butaperazine&quot;}]"></div>

# butaperazine

- **generic name:** butaperazine
- **ATC codes:** `N05AB09`
- **DrugBank:** [DB13213](https://go.drugbank.com/drugs/DB13213) · **PubChem:** not captured
- **molar mass:** 409.59 g/mol (C24H31N3OS) — DrugBank
- **groups:** approved

## About

Butaperazine is a phenothiazine antipsychotic used to treat psychotic disorders such as schizophrenia. It is an approved antipsychotic, but it is not widely used today and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5002359](https://www.wikidata.org/wiki/Q5002359) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:23 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 21,934/567 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Garver_1976.pdf` | Garver DL et al., Pharmacokinetics of red blood cell phen…, Archives of general psychia… (1976) | popPK | 5 | [10.1001/archpsyc.1976.01770070092011](https://doi.org/10.1001/archpsyc.1976.01770070092011) | [8025](https://pubmed.ncbi.nlm.nih.gov/8025) | Human PK study of butaperazine (half-life, plasma/RBC concentrations) but no numeric parameter values present in the evidence. |

<sub>queue written 2026-10-06T15:23:33.533659+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cooper_1975 | irrelevant | 3 | 1 | No numeric PK parameters (CL, V, half-life) are reported in the evidence; only qualitative steady-state blood level comparisons. |
| popPK | Davy_1978 | irrelevant | 1 | 0 | A narrative review of neuroleptic level monitoring with no quantitative PK parameters for butaperazine reported. |
| popPK | Garver_1976 | relevant | 5 | 1 | Human PK study of butaperazine (half-life, plasma/RBC concentrations) but no numeric parameter values present in the evidence. |
| popPK | Garver_1977 | irrelevant | 2 | 1 | This is a therapeutic drug monitoring/response study reporting RBC vs plasma BPZ concentrations, not PK disposition parameters (CL, V, half-life, or a PK model), and no numeric parameter values appear in the evidence. |
| popPK | Kala_1980 | irrelevant | 1 | 2 | This is an in-vitro physicochemical study (solubility, pKa, distribution coefficients) with no PK disposition parameters for butaperazine. |
| popPK | Rockland_1986 | irrelevant | 0 | 0 | A narrative review of neuroleptic blood level/clinical response studies with no quantitative PK parameters for butaperazine reported. |
| popPK | Simpson_1985 | irrelevant | 0 | 0 | A narrative review of plasma level–response literature with no quantitative PK parameters for butaperazine reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
