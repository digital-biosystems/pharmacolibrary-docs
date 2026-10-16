<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;rimiterol&quot;}]"></div>

# rimiterol

- **generic name:** rimiterol
- **ATC codes:** `R03AC05`
- **DrugBank:** [DB13559](https://go.drugbank.com/drugs/DB13559) · **PubChem:** not captured
- **molar mass:** 223.272 g/mol (C12H17NO3) — DrugBank
- **groups:** experimental

## About

Rimiterol is a selective beta-2 adrenergic agonist that was given by inhalation for obstructive airway diseases such as asthma. It is no longer in routine clinical use and is regarded as an experimental drug today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7334473](https://www.wikidata.org/wiki/Q7334473) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:18 | 0:19 | 0/0/0 | 0/1/0 | 0/0/0 | 5,304/557 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [ODonnell_1978_inhibition_of_K_depolarized_uterine_contractions_relaxation](drugs/drug_rimiterol/pd_ODonnell_1978_inhibition_of_K_depolarized_uterine_contractio.md) | inhibition of K(+)-depolarized uterine contractions (relaxation) ← rimiterol · direct Emax (saturable) effect | — | O'Donnell SR et al., An in vitro comparison of beta-adrenoce…, British journal of pharmaco… (1978) | [10.1111/j.1476-5381.1978.tb08450.x](https://doi.org/10.1111/j.1476-5381.1978.tb08450.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=rimiterol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRB3 (modulator).</sub>

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

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brès_1985 | irrelevant | 1 | 0 | Review article on beta-agonist metabolism mentioning rimiterol qualitatively with no PK parameters or numeric disposition values. |
| PGx | George_1981 | not_relevant | 0 | 0 | Review of intestinal first-pass metabolism mentions rimiterol sulphate conjugation but no gene variant effect on PK/PD parameters. |
| popPK | ODonnell_1978 | irrelevant | 0 | 0 | In vitro pharmacodynamic potency study on guinea-pig uterus; no pharmacokinetic disposition parameters for rimiterol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
