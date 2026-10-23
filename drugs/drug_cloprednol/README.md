<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H02A&quot;,&quot;href&quot;:&quot;atc/H02A.md&quot;},{&quot;label&quot;:&quot;cloprednol&quot;}]"></div>

# cloprednol

- **generic name:** cloprednol
- **ATC codes:** `H02AB14`
- **DrugBank:** [DB13843](https://go.drugbank.com/drugs/DB13843) · **PubChem:** not captured
- **molar mass:** 392.88 g/mol (C21H25ClO5) — DrugBank
- **groups:** investigational

## About

Cloprednol is a synthetic glucocorticoid (corticosteroid) that has been investigated for treating inflammatory conditions requiring systemic steroid therapy. It is considered investigational and is not an approved medicine in the European Union or elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3680915](https://www.wikidata.org/wiki/Q3680915) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Möllmann_1996_granulocytes](drugs/drug_cloprednol/pd_M_llmann_1996_granulocytes.md) | granulocytes ← unbound cloprednol · direct Emax (saturable) effect | — | Möllmann H et al., Pharmacokinetics and pharmacodynamics o…, International journal of cl… (1996) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Möllmann_1996_lymphocytes](drugs/drug_cloprednol/pd_M_llmann_1996_lymphocytes.md) | lymphocytes ← unbound cloprednol · direct Emax (saturable) effect | — | Möllmann H et al., Pharmacokinetics and pharmacodynamics o…, International journal of cl… (1996) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cloprednol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP3A4` inducer, `CYP3A5` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer, `CYP3A5` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: NR3C1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:28 | 0:17 | 0/0/0 | 1/0/0 | 0/0/0 | 7,746/1,236 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Legler_1988.pdf` | Legler UF, Pharmacokinetics of cloprednol in healt…, International journal of cl… (1988) | popPK | 10 | not captured | [3403094](https://pubmed.ncbi.nlm.nih.gov/3403094) | The abstract provides specific quantitative pharmacokinetic parameters (clearance, volume of distribution) for cloprednol in human subjects. |
| `Möllmann_1996.pdf` | Möllmann H et al., Pharmacokinetics and pharmacodynamics o…, International journal of cl… (1996) | popPK | 9 | not captured | [8688990](https://pubmed.ncbi.nlm.nih.gov/8688990) | The abstract reports quantitative PK parameters (half-life, oral clearance) and PD parameters for cloprednol in healthy volunteers. |

<sub>queue written 2026-10-07T09:28:45.904728+00:00</sub>


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
