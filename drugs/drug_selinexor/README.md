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
| 2026-10-14 20:58 | 0:11 | 0/0/0 | 0/0/0 | 0/0/0 | 20,366/450 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

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
| `Xu_2021.pdf` | Xu H et al., Selinexor population pharmacokinetic an…, Cancer chemotherapy and pha… (2021) | popPK | 10 | [10.1007/s00280-021-04258-6](https://doi.org/10.1007/s00280-021-04258-6) | [33770229](https://pubmed.ncbi.nlm.nih.gov/33770229) | The paper describes a population PK model with covariates but does not provide the specific numeric parameter values (CL, V, Q) in the extracted evidence, likely because they reside in the full text or figures not included here. |
| `Bader_2021.pdf` | Bader JC et al., Pharmacokinetics of Selinexor: The Firs…, Clinical pharmacokinetics (2021) | popPK | 9 | [10.1007/s40262-021-01016-y](https://doi.org/10.1007/s40262-021-01016-y) | [33928519](https://pubmed.ncbi.nlm.nih.gov/33928519) | The paper describes a population PK model for selinexor but only provides qualitative ranges (Tmax, t1/2) and parameter covariates, without listing the specific numeric values for clearance, volume, or intercompartmental clearance. |

<sub>queue written 2026-10-14T20:58:06.956099+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altman_2026 | irrelevant | 0 | 0 | This is a preclinical mechanistic study of TNBC resistance and drug efficacy; it does not report quantitative pharmacokinetic parameters (CL, V, Q, ka) for selinexor. |
| popPK | Bader_2021 | relevant | 9 | 2 | The paper describes a population PK model for selinexor but only provides qualitative ranges (Tmax, t1/2) and parameter covariates, without listing the specific numeric values for clearance, volume, or intercompartmental clearance. |
| popPK | Shah_2021 | irrelevant | 0 | 0 | The paper reports health-related quality of life and health utility outcomes for selinexor, but contains no pharmacokinetic disposition parameters or models. |
| popPK | Shen_2025 | irrelevant | 0 | 0 | The study focuses on the discovery and evaluation of new XPO1-targeting compounds (SITAs) for GVHD, with selinexor used only as a comparator for tolerability, and no selinexor pharmacokinetic parameters are reported. |
| popPK | Xu_2021 | relevant | 10 | 0 | The paper describes a population PK model with covariates but does not provide the specific numeric parameter values (CL, V, Q) in the extracted evidence, likely because they reside in the full text or figures not included here. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
