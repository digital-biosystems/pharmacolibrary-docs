<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;selinexor&quot;}]"></div>

# selinexor

- **generic name:** selinexor
- **ATC codes:** `L01XX66`
- **DrugBank:** [DB11942](https://go.drugbank.com/drugs/DB11942) · **PubChem:** [CID 71481097](https://pubchem.ncbi.nlm.nih.gov/compound/71481097)
- **molar mass:** 443.313 g/mol (C17H11F6N7O) — DrugBank
- **groups:** approved, investigational

## About

Selinexor is an anticancer medicine used to treat multiple myeloma. It is an approved antineoplastic agent and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27256082](https://www.wikidata.org/wiki/Q27256082) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:40 | 0:12 | 0/0/0 | 0/0/0 | 0/0/0 | 20,366/416 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xu_2021.pdf` | Xu H et al., Selinexor population pharmacokinetic an…, Cancer chemotherapy and pha… (2021) | popPK | 10 | [10.1007/s00280-021-04258-6](https://doi.org/10.1007/s00280-021-04258-6) | [33770229](https://pubmed.ncbi.nlm.nih.gov/33770229) | The paper describes a population PK model for selinexor but the specific numeric parameter estimates (CL, V, Q) are not present in the provided abstract or evidence text. |
| `Bader_2021.pdf` | Bader JC et al., Pharmacokinetics of Selinexor: The Firs…, Clinical pharmacokinetics (2021) | popPK | 9 | [10.1007/s40262-021-01016-y](https://doi.org/10.1007/s40262-021-01016-y) | [33928519](https://pubmed.ncbi.nlm.nih.gov/33928519) | The text describes a population PK model and qualitative parameter drivers (weight, sex) but contains no numeric values for clearance, volume, or half-life. |

<sub>queue written 2026-10-06T21:40:56.662391+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altman_2026 | irrelevant | 0 | 0 | The paper is a cancer biology study on carboplatin resistance in TNBC models where selinexor is used only as a drug in a combination therapy arm, with no pharmacokinetic data reported. |
| popPK | Bader_2021 | relevant | 9 | 0 | The text describes a population PK model and qualitative parameter drivers (weight, sex) but contains no numeric values for clearance, volume, or half-life. |
| popPK | Shah_2021 | irrelevant | 0 | 0 | The paper reports health-related quality of life and utility outcomes, not pharmacokinetic parameters. |
| popPK | Shen_2025 | irrelevant | 0 | 0 | The study focuses on structure-activity relationships and efficacy of novel XPO1 modulators (SITAs) in a mouse model of GVHD, with selinexor serving only as a comparator agent for tolerability, and no PK parameters for selinexor are reported. |
| popPK | Xu_2021 | relevant | 10 | 1 | The paper describes a population PK model for selinexor but the specific numeric parameter estimates (CL, V, Q) are not present in the provided abstract or evidence text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
