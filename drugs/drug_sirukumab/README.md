<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;sirukumab&quot;}]"></div>

# sirukumab

- **generic name:** sirukumab
- **ATC codes:** `L04AC15`
- **DrugBank:** [DB11803](https://go.drugbank.com/drugs/DB11803) · **PubChem:** not captured
- **groups:** investigational

## About

Sirukumab, a monoclonal antibody interleukin inhibitor, was investigated for treating rheumatoid arthritis. It was never approved; its marketing application in the European Union was withdrawn, so it remains investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7530673](https://www.wikidata.org/wiki/Q7530673) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:26 | 1:25 | 0/1/0 | 0/0/0 | 0/0/0 | 85,841/5,014 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Xu_2011_reference](drugs/drug_sirukumab/Sirukumab_Xu2011_reference.md) | — | 1-compartment (no model) | 4 | Xu Z et al., Pharmacokinetics, pharmacodynamics and…, British journal of clinical… (2011) | [10.1111/j.1365-2125.2011.03964.x](https://doi.org/10.1111/j.1365-2125.2011.03964.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Xu_2018.pdf` | Xu Y et al., Confirmatory Population Pharmacokinetic…, Journal of clinical pharmac… (2018) | popPK | 10 | [10.1002/jcph.1101](https://doi.org/10.1002/jcph.1101) | [29578578](https://pubmed.ncbi.nlm.nih.gov/29578578) | The abstract explicitly reports quantitative population PK parameters (CL/F, Vd, half-life) for sirukumab in human patients. |
| `Zhuang_2013.pdf` | Zhuang Y et al., Pharmacokinetics and safety of sirukuma…, International journal of cl… (2013) | popPK | 10 | [10.5414/CP201785](https://doi.org/10.5414/CP201785) | [23357841](https://pubmed.ncbi.nlm.nih.gov/23357841) | The abstract provides explicit numeric values for population pharmacokinetic parameters including CL/F, V/F, and Ka for sirukumab. |

<sub>queue written 2026-10-15T00:25:41.830627+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hu_2018 | irrelevant | 2 | 0 | The paper focuses on exposure-response modeling of efficacy endpoints (ACR/DAS28) rather than reporting quantitative PK parameters (CL, V, ka) for sirukumab, and no numeric PK values are present in the evidence. |
| popPK | Kovalenko_2020 | irrelevant | 1 | 0 | The paper is a pharmacodynamic model of neutrophil margination for sarilumab and tocilizumab, mentioning sirukumab only in the abstract as context for the class effect, with no PK parameters reported for sirukumab. |
| popPK | Xu_2018_2 | irrelevant | 2 | 0 | The study focuses on exposure-response modeling for efficacy rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for sirukumab. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:25 UTC</sub>
