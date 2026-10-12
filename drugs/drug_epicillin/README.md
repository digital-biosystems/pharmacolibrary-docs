<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01C&quot;,&quot;href&quot;:&quot;atc/J01C.md&quot;},{&quot;label&quot;:&quot;epicillin&quot;}]"></div>

# epicillin

- **generic name:** epicillin
- **ATC codes:** `J01CA07`
- **DrugBank:** [DB13300](https://go.drugbank.com/drugs/DB13300) · **PubChem:** not captured
- **molar mass:** 351.42 g/mol (C16H21N3O4S) — DrugBank
- **groups:** experimental

## About

Epicillin is an antibiotic penicillin with an extended spectrum, developed for treating bacterial infections. It is considered an experimental compound and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5382578](https://www.wikidata.org/wiki/Q5382578) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:02 | 0:35 | 0/0/0 | 0/0/0 | 0/0/0 | 10,010/543 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kienel_1976.pdf` | Kienel G, [Comparison between the pharmacokinetic…, Arzneimittel-Forschung (1976) | popPK | 9 | not captured | [989351](https://pubmed.ncbi.nlm.nih.gov/989351) | The study reports the PK model and qualitative parameters (e.g., volume of distribution, clearance mechanisms) for epicillin in rabbits, but specific numeric values are not present in the provided text. |
| `Guggenbichler_1981.pdf` | Guggenbichler JP et al., [Pharmacokinetic of antibiotics in pati…, Padiatrie und Padologie (1981) | popPK | 8 | not captured | [7301388](https://pubmed.ncbi.nlm.nih.gov/7301388) | The study reports qualitative PK changes (delayed absorption, enhanced renal elimination) for epicillin in cystic fibrosis patients, but no specific numeric parameter values (CL, V, Ka) are provided in the text. |
| `Humair_1981.pdf` | Humair L et al., [A dosage regimen for epicillin in rena…, Arzneimittel-Forschung (1981) | popPK | 7 | not captured | [7195720](https://pubmed.ncbi.nlm.nih.gov/7195720) | The study reports the elimination rate constant (ke) for epicillin in humans with renal impairment, but specific numeric values are not provided in the evidence, only a correlation coefficient. |

<sub>queue written 2026-10-07T10:02:09.590483+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Guggenbichler_1981 | relevant | 8 | 2 | The study reports qualitative PK changes (delayed absorption, enhanced renal elimination) for epicillin in cystic fibrosis patients, but no specific numeric parameter values (CL, V, Ka) are provided in the text. |
| popPK | Guggenbichler_1987 | irrelevant | 2 | 0 | The abstract mentions altered elimination rates for epicillin in cystic fibrosis patients but provides no specific quantitative PK parameters (CL, V, t1/2) or numeric values in the text. |
| popPK | Humair_1981 | relevant | 7 | 1 | The study reports the elimination rate constant (ke) for epicillin in humans with renal impairment, but specific numeric values are not provided in the evidence, only a correlation coefficient. |
| popPK | Kienel_1976 | relevant | 9 | 2 | The study reports the PK model and qualitative parameters (e.g., volume of distribution, clearance mechanisms) for epicillin in rabbits, but specific numeric values are not present in the provided text. |
| popPK | Nau_1987 | irrelevant | 1 | 0 | This is a review discussing placental transfer and excretion in milk, but it does not report quantitative systemic disposition parameters (clearance, volume, half-life) for epicillin. |
| popPK | Prandota_1988 | irrelevant | 0 | 0 | The paper is a review discussing general pharmacokinetic changes in cystic fibrosis and mentions delayed absorption of epicillin without providing specific quantitative PK parameters for epicillin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
