<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;imidazole salicylate&quot;}]"></div>

# imidazole salicylate

- **generic name:** imidazole salicylate
- **ATC codes:** `N02BA16`
- **DrugBank:** [DB13860](https://go.drugbank.com/drugs/DB13860) · **PubChem:** not captured
- **molar mass:** 206.201 g/mol (C10H10N2O3) — DrugBank
- **groups:** experimental

## About

Imidazole salicylate is a salicylic acid derivative classified as a non-steroidal anti-inflammatory drug, used as an analgesic and antipyretic for pain relief. It is listed only as an experimental drug and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27259796](https://www.wikidata.org/wiki/Q27259796) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:15 | 0:10 | 0/0/0 | 0/0/0 | 0/0/0 | 35,896/465 | einfracz / qwen3.8-27b | 0 | 0/2 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kuemmerle_1984.pdf` | Kuemmerle HP et al., Pharmacokinetic pilot study with imidaz…, International journal of cl… (1984) | popPK | 8 | not captured | [6334657](https://pubmed.ncbi.nlm.nih.gov/6334657) | The study reports pharmacokinetics of imidazole salicylate in humans, but the specific numeric parameter values are not included in the provided evidence text. |
| `Kuemmerle_1986.pdf` | Kuemmerle HP et al., Pharmacokinetic profile of imidazole 2-…, International journal of cl… (1986) | popPK | 8 | not captured | [3793293](https://pubmed.ncbi.nlm.nih.gov/3793293) | The study reports quantitative PK parameters (half-life, bioavailability, protein binding) for imidazole and salicylic acid, which are the components of the subject drug imidazole salicylate, in humans. |

<sub>queue written 2026-10-07T06:15:33.755790+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Khanppnavar_2022 | irrelevant | 0 | 0 | The paper is a structural biology study on the organic cation transporter 3 (OCT3) and does not report pharmacokinetic parameters for imidazole_salicylate. |
| PD | Khanppnavar_2022 | not_relevant | 0 | 0 | The paper focuses on the structural basis of OCT3 inhibition using cryo-EM and does not report pharmacodynamic parameters for imidazole salicylate. |
| popPK | Kuemmerle_1984 | relevant | 8 | 0 | The study reports pharmacokinetics of imidazole salicylate in humans, but the specific numeric parameter values are not included in the provided evidence text. |
| popPK | Lorenzano_1992 | irrelevant | 0 | 0 | The study focuses on renal function (blood flow, filtration, electrolyte excretion) rather than pharmacokinetic disposition parameters for imidazole salicylate. |
| popPK | McCune_2023 | irrelevant | 0 | 0 | The study investigates busulfan pharmacokinetics and is unrelated to imidazole salicylate. |
| PD | McCune_2023 | not_relevant | 0 | 0 | The paper focuses on predicting busulfan clearance using metabolomics and reports a population PK model for busulfan, but contains no pharmacodynamic (PD) or exposure-response analysis for imidazole salicylate or any other drug. |
| popPK | Salerno_1993 | irrelevant | 0 | 0 | The study evaluates renal function and prostaglandin/thromboxane effects, not quantitative pharmacokinetic parameters (clearance, volume, half-life) for imidazole_salicylate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
