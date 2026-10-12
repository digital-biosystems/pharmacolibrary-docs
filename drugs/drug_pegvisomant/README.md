<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01A&quot;,&quot;href&quot;:&quot;atc/H01A.md&quot;},{&quot;label&quot;:&quot;pegvisomant&quot;}]"></div>

# pegvisomant

- **generic name:** pegvisomant
- **ATC codes:** `H01AX01`
- **DrugBank:** [DB00082](https://go.drugbank.com/drugs/DB00082) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Pegvisomant is a medicine used to treat acromegaly, a hormonal condition caused by excess growth hormone. It is authorised in the European Union and is used there, mainly under specialist care for this condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409697](https://www.wikidata.org/wiki/Q409697) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:17 | 1:36 | 0/0/0 | 0/1/0 | 0/0/0 | 22,159/1,230 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Muto_2011_IGF_I](drugs/drug_pegvisomant/pd_Muto_2011_IGF_I.md) | IGF-I ← pegvisomant · direct sigmoid Emax (Hill) effect | — | Muto C et al., Population pharmacokinetic and pharmaco…, Journal of clinical pharmac… (2011) | [10.1177/0091270010386954](https://doi.org/10.1177/0091270010386954) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pegvisomant).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` inhibitor | DrugBank actor |
| metabolism | liver | `BCHE` inhibitor, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: CYP27A1 (inducer), CYP4A11 (inhibitor), GHR (target), GLUL (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Muto_2011.pdf` | Muto C et al., Population pharmacokinetic and pharmaco…, Journal of clinical pharmac… (2011) | popPK | 10 | [10.1177/0091270010386954](https://doi.org/10.1177/0091270010386954) | [21209237](https://pubmed.ncbi.nlm.nih.gov/21209237) | The paper describes a population pharmacokinetic model for pegvisomant in humans, but the abstract provided does not contain specific numeric parameter values (e.g., CL, V, Q). |
| `Jen_2013.pdf` | Jen J et al., Pegvisomant bioavailability of single 3…, Growth hormone & IGF resear… (2013) | popPK | 6 | [10.1016/j.ghir.2013.04.002](https://doi.org/10.1016/j.ghir.2013.04.002) | [23651793](https://pubmed.ncbi.nlm.nih.gov/23651793) | The study reports a pharmacokinetic assessment (bioavailability) for pegvisomant in humans, but specific disposition parameters like clearance (CL) or volume (V) are not provided in the text, only bioavailability percentages. |
| `Steventon_2020.pdf` | Steventon G, Uridine diphosphate glucuronosyltransfe…, Xenobiotica; the fate of fo… (2020) | pgx | 8 | [10.1080/00498254.2019.1617910](https://doi.org/10.1080/00498254.2019.1617910) | [31092094](https://www.ncbi.nlm.nih.gov/pubmed/31092094) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |

<sub>queue written 2026-10-07T09:17:06.745163+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Boguszewski_2017 | not_relevant | 0 | 0 | The paper is a narrative review summarizing the literature and does not report new original data or fitted quantitative pharmacogenomic effects for pegvisomant. |
| PGx | Brian_2007 | not_relevant | 0 | 0 | The paper describes a single case of pegvisomant use in pregnancy without examining any genetic variants or genotypes. |
| PGx | Filopanti_2012 | not_relevant | 3 | 2 | The study reports a null result, finding no association between GHR genotypes and pegvisomant dosage or IGF-I response. |
| PGx | Filopanti_2014 | not_relevant | 1 | 5 | The study found no association between UGT1A1/ADH genotypes and hepatotoxicity, and does not report changes in pharmacokinetic or pharmacodynamic parameters. |
| popPK | Jen_2013 | relevant | 6 | 2 | The study reports a pharmacokinetic assessment (bioavailability) for pegvisomant in humans, but specific disposition parameters like clearance (CL) or volume (V) are not provided in the text, only bioavailability percentages. |
| PGx | Kasuki_2016 | not_relevant | 0 | 0 | The paper reports that the d3GHR variant was not a predictor of treatment response (PD), meaning no pharmacogenomic effect was observed or reported. |
| PGx | Kulkarni_2024 | not_relevant | 0 | 0 | The paper investigates the mechanism of pegvisomant in reversing melanoma chemoresistance but does not report any pharmacogenomic effects (gene variants influencing PK/PD). |
| PGx | Mallea-Gil_2016 | not_relevant | 5 | 0 | This is a single case report describing an adverse event (hepatitis) in a patient with the UGT1A1*28 polymorphism; it does not present quantitative pharmacokinetic or pharmacodynamic data demonstrating a pharmacogenomic effect. |
| popPK | Muto_2011 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for pegvisomant in humans, but the abstract provided does not contain specific numeric parameter values (e.g., CL, V, Q). |
| PGx | Sulu_2025 | not_relevant | 0 | 0 | The paper evaluates mortality predictors in acromegaly using machine learning and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of pegvisomant. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper investigates the anti-tumor efficacy of a GHR antagonist in a lung cancer xenograft model and does not address pegvisomant pharmacogenomics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
