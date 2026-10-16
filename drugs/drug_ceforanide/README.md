<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;ceforanide&quot;}]"></div>

# ceforanide

- **generic name:** ceforanide
- **ATC codes:** `J01DC11`
- **DrugBank:** [DB00923](https://go.drugbank.com/drugs/DB00923) · **PubChem:** [CID 43507](https://pubchem.ncbi.nlm.nih.gov/compound/43507)
- **molar mass:** 519.554 g/mol (C20H21N7O6S2) — DrugBank
- **groups:** approved

## About

Ceforanide is a second-generation cephalosporin antibiotic used to treat bacterial infections. It is an approved antibacterial for systemic use, though it does not appear to be widely marketed today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5057287](https://www.wikidata.org/wiki/Q5057287) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:16 | 0:13 | 0/0/0 | 0/0/0 | 0/0/0 | 20,998/569 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=ceforanide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

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

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dajani_1982.pdf` | Dajani AS et al., Pharmacokinetics of intramuscular cefor…, Antimicrobial agents and ch… (1982) | popPK | 10 | [10.1128/AAC.21.2.282](https://doi.org/10.1128/AAC.21.2.282) | [7073266](https://pubmed.ncbi.nlm.nih.gov/7073266) | The study reports qualitative PK relationships and a specific half-life value (1.5 h) for 1-2 year olds, but lacks general numeric values for clearance, volume of distribution, and other PK parameters in the provided text. |

<sub>queue written 2026-10-07T10:16:16.735710+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brown_1993 | irrelevant | 0 | 0 | The paper is a review discussing general cephalosporin-probenecid interactions and notes ceforanide has no significant changes, but it does not report quantitative PK parameters for ceforanide. |
| popPK | Campoli-Richards_1987 | irrelevant | 1 | 0 | The paper is a review summarizing ceforanide's properties without reporting specific numeric pharmacokinetic parameter values (like clearance or volume) for the drug. |
| popPK | Dajani_1982 | relevant | 10 | 4 | The study reports qualitative PK relationships and a specific half-life value (1.5 h) for 1-2 year olds, but lacks general numeric values for clearance, volume of distribution, and other PK parameters in the provided text. |
| popPK | Greenman_1984 | irrelevant | 1 | 0 | This is a clinical efficacy trial reporting MICs and bactericidal activity, not a pharmacokinetic study with quantitative disposition parameters (CL, V, half-life). |
| popPK | Guay_1983 | irrelevant | 0 | 0 | The study investigates the analytical interference of ceforanide with creatinine assays, not its pharmacokinetic parameters. |
| popPK | Wallace_1979 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for pneumonia and does not report any pharmacokinetic parameters such as clearance or volume of distribution. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
