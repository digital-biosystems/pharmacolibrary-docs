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

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=selinexor).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: XPO1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:40 | 0:12 | 0/0/0 | 0/0/0 | 0/0/0 | 20,366/416 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
