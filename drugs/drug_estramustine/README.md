<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;estramustine&quot;}]"></div>

# estramustine

- **generic name:** estramustine
- **ATC codes:** `L01XX11`
- **DrugBank:** [DB01196](https://go.drugbank.com/drugs/DB01196) · **PubChem:** [CID 259331](https://pubchem.ncbi.nlm.nih.gov/compound/259331)
- **molar mass:** 440.403 g/mol (C23H31Cl2NO3) — DrugBank
- **groups:** approved, withdrawn

## About

Estramustine is an alkylating and hormonal antineoplastic agent that was used to treat prostate cancer. It has been withdrawn from use, though it was once an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412939](https://www.wikidata.org/wiki/Q412939) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:43 | 0:06 | 0/0/0 | 0/0/0 | 0/0/0 | 10,602/745 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=estramustine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ESR1 (target), ESR2 (other/unknown), MAP1A (target), MAP2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Oudard_2003.pdf` | Oudard S et al., Activity of docetaxel with or without e…, The Journal of urology (2003) | pgx | 5 | [10.1097/01.ju.0000062500.75703.2c](https://doi.org/10.1097/01.ju.0000062500.75703.2c) | [12686819](https://www.ncbi.nlm.nih.gov/pubmed/12686819) | metadata signals extractable PGX data (CYP3A4) |
| `Suzuki_2005.pdf` | Suzuki M et al., The Val158Met polymorphism of the catec…, European urology (2005) | pgx | 5 | [10.1016/j.eururo.2005.07.007](https://doi.org/10.1016/j.eururo.2005.07.007) | [16126332](https://www.ncbi.nlm.nih.gov/pubmed/16126332) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-10-06T20:43:36.805366+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_1999 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on apoptosis and clonogenicity, containing no pharmacokinetic parameters for estramustine. |
| PGx | Mack_2007 | not_relevant | 2 | 0 | The text mentions estramustine resistance associated with ABCA2 expression, but does not report specific genetic variants affecting PK or PD parameters of estramustine. |
| PGx | Narita_2012 | not_relevant | 2 | 5 | The paper reports a genetic predictor for toxicity (leukocytopenia) but does not specify if this affects the PK or PD of estramustine specifically, nor does it provide fitted effect sizes for estramustine parameters. |
| PGx | Oudard_2003 | not_relevant | 0 | 0 | The study analyzes gene expression (e.g., CYP3A4) and its correlation with the pharmacodynamic response to chemotherapy, but it does not report a pharmacokinetic parameter of estramustine being altered by a specific gene variant. |
| PGx | Rehman_2023 | not_relevant | 2 | 1 | The paper is a general review of genetic biomarkers in prostate cancer pharmacotherapy and mentions estramustine only as a class of drugs, without reporting specific pharmacokinetic or pharmacodynamic effect sizes for estramustine linked to specific gene variants. |
| PGx | Suzuki_2005 | not_relevant | 2 | 5 | The paper reports an association between COMT genotype and PSA-progression-free survival (a clinical outcome), not a direct effect on a specific pharmacokinetic or pharmacodynamic parameter (e.g., AUC, Cmax, receptor binding) of estramustine. |
| PGx | Suzuki_2005_2 | not_relevant | 1 | 2 | The study reports an association between genotypes and clinical adverse events (side effects) rather than changes in a specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic (e.g., enzyme inhibition, receptor binding) parameter of estramustine. |
| popPK | Tester_2006 | irrelevant | 0 | 0 | The study evaluates docetaxel and vinblastine, and explicitly states that estramustine was not administered. |
| popPK | Wang_1998 | irrelevant | 1 | 0 | The study reports in vitro receptor binding affinities (EC50) and mechanistic data, not pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
