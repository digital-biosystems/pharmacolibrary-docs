<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;rasagiline&quot;}]"></div>

# rasagiline

- **generic name:** rasagiline
- **ATC codes:** `N04BD02`
- **DrugBank:** [DB01367](https://go.drugbank.com/drugs/DB01367) · **PubChem:** [CID 3052776](https://pubchem.ncbi.nlm.nih.gov/compound/3052776)
- **molar mass:** 171.2383 g/mol (C12H13N) — DrugBank
- **groups:** approved, investigational

## About

Rasagiline is a monoamine oxidase B inhibitor used to treat Parkinson's disease. It is an approved medicine, authorised in the European Union for Parkinson's disease.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q420685](https://www.wikidata.org/wiki/Q420685) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:20 | 0:15 | 0/0/0 | 0/0/0 | 0/0/0 | 34,091/431 | ollama / glm-5.3-flash | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rasagiline).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `MAOB` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: BCL2 (activator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ravi_2013.pdf` | Ravi PR et al., LC method for determination of rasagili…, Journal of chromatographic… (2013) | popPK | 6 | [10.1093/chromsci/bms096](https://doi.org/10.1093/chromsci/bms096) | [22689899](https://pubmed.ncbi.nlm.nih.gov/22689899) | Oral PK study in rabbits with non-compartmental analysis of rasagiline, but no numeric parameter values appear in the evidence. |

<sub>queue written 2026-10-06T14:20:14.690832+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fan_2024 | irrelevant | 0 | 0 | Rasagiline is only used as a positive control/comparator in an in-vitro MAO-B inhibitor screening study; no PK disposition parameters for rasagiline are reported. |
| popPK | Glezer_2003 | irrelevant | 1 | 1 | In-vitro pharmacodynamic study of metabolites in rat vas deferens; no PK disposition parameters for rasagiline. |
| popPK | Masellis_2016 | irrelevant | 0 | 0 | This is a pharmacogenetic association study of clinical response to rasagiline; no PK parameters (CL, V, ka, half-life, or PK model) are reported, only regression betas for UPDRS changes. |
| popPK | Müller_2014 | irrelevant | 1 | 0 | This is a narrative review of rasagiline's clinical role in Parkinson's disease with no original PK parameters or numeric disposition values reported. |
| popPK | Ravi_2013 | relevant | 6 | 2 | Oral PK study in rabbits with non-compartmental analysis of rasagiline, but no numeric parameter values appear in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
