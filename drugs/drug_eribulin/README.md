<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;eribulin&quot;}]"></div>

# eribulin

- **generic name:** eribulin
- **ATC codes:** `L01XX41`
- **DrugBank:** [DB08871](https://go.drugbank.com/drugs/DB08871) · **PubChem:** [CID 73425383](https://pubchem.ncbi.nlm.nih.gov/compound/73425383)
- **molar mass:** 729.908 g/mol (C40H59NO11) — DrugBank
- **groups:** approved, investigational

## About

Eribulin is an anticancer medicine used to treat breast cancer and a type of soft-tissue sarcoma called liposarcoma. It is authorised in the European Union and used as an antineoplastic agent for these cancers.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408717](https://www.wikidata.org/wiki/Q408717) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:43 | 0:16 | 0/0/0 | 1/0/0 | 0/0/0 | 14,099/1,288 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [van_2013_ANC](drugs/drug_eribulin/pd_van_2013_ANC.md) | absolute neutrophil counts ← eribulin · disease-progression model | — | van Hasselt JG et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2013) | [10.1111/bcp.12143](https://doi.org/10.1111/bcp.12143) |

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
| `Majid_2014.pdf` | Majid O et al., Population pharmacometric analyses of e…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.315](https://doi.org/10.1002/jcph.315) | [24771603](https://pubmed.ncbi.nlm.nih.gov/24771603) | The paper describes a population PK model for eribulin and reports specific variability percentages, but the primary numeric disposition parameters (CL, V, Q) are not explicitly listed in the provided evidence. |
| `van_2013.pdf` | van Hasselt JG et al., Population pharmacokinetic-pharmacodyna…, British journal of clinical… (2013) | popPK | 8 | [10.1111/bcp.12143](https://doi.org/10.1111/bcp.12143) | [23601153](https://pubmed.ncbi.nlm.nih.gov/23601153) | The paper describes a population PK model for eribulin but explicitly states the PK parameters were from a "previously developed model" and only reports numeric values for the PD (neutropenia) parameters in the provided text. |

<sub>queue written 2026-10-06T20:43:32.027151+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ideno_2026 | irrelevant | 4 | 1 | This is a methodological paper on a covariate screening tool (SCOUT) using eribulin PK/PD data, but it does not report the original population PK parameter estimates (CL, V, Q) in the main text or evidence provided. |
| popPK | Kasai_2023 | irrelevant | 1 | 0 | The study focuses on a pharmacodynamic model for eribulin-induced myelosuppression (neutropenia) and does not report pharmacokinetic parameters (CL, V, ka). |
| popPK | Majid_2014 | relevant | 10 | 2 | The paper describes a population PK model for eribulin and reports specific variability percentages, but the primary numeric disposition parameters (CL, V, Q) are not explicitly listed in the provided evidence. |
| popPK | Reda_2022 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamics of eribulin (neutropenia) and the optimization of G-CSF dosing, not on the quantitative pharmacokinetic parameters (CL, V, Q) of eribulin itself. |
| popPK | van_2013 | relevant | 8 | 3 | The paper describes a population PK model for eribulin but explicitly states the PK parameters were from a "previously developed model" and only reports numeric values for the PD (neutropenia) parameters in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
