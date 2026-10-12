<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;andexanet alfa&quot;}]"></div>

# andexanet alfa

- **generic name:** andexanet alfa
- **ATC codes:** `V03AB38`
- **DrugBank:** [DB14562](https://go.drugbank.com/drugs/DB14562) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Andexanet alfa is an antidote used to reverse the anticoagulant effects of the direct oral anticoagulants apixaban and rivaroxaban. It is authorised in the European Union and carries a boxed warning, so its use is limited to urgent bleeding situations under close supervision.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7120529](https://www.wikidata.org/wiki/Q7120529) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:21 | 0:19 | 0/0/0 | 0/0/0 | 0/0/0 | 8,586/321 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=andexanet_alfa).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TFPI (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lu_2020.pdf` | Lu G et al., A phase 2 PK/PD study of andexanet alfa…, Blood advances (2020) | popPK | 7 | [10.1182/bloodadvances.2019000885](https://doi.org/10.1182/bloodadvances.2019000885) | [32092140](https://pubmed.ncbi.nlm.nih.gov/32092140) | Phase 2 PK/PD study of andexanet alfa in healthy volunteers, but the evidence contains only PD/stoichiometry numbers, no CL/V/half-life values, which likely reside in tables/figures not provided. |

<sub>queue written 2026-10-07T18:21:21.743708+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Di_2015 | irrelevant | 1 | 0 | A narrative review discussing andexanet alfa only as a reversal agent, with no quantitative PK parameters for andexanet alfa reported. |
| PGx | Djulbegovic_2018 | not_relevant | 0 | 0 | Abstract only; no pharmacogenomic effects on andexanet alfa PK/PD reported. |
| PGx | Fang_2024 | not_relevant | 2 | 3 | Narrative review mentions pharmacogenomics for anticoagulation generally but reports no gene variant effect on andexanet alfa PK/PD parameters. |
| popPK | Lu_2020 | relevant | 7 | 2 | Phase 2 PK/PD study of andexanet alfa in healthy volunteers, but the evidence contains only PD/stoichiometry numbers, no CL/V/half-life values, which likely reside in tables/figures not provided. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
