<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07X&quot;,&quot;href&quot;:&quot;atc/A07X.md&quot;},{&quot;label&quot;:&quot;crofelemer&quot;}]"></div>

# crofelemer

- **generic name:** crofelemer
- **ATC codes:** `A07XA06`
- **DrugBank:** [DB04941](https://go.drugbank.com/drugs/DB04941) · **PubChem:** not captured
- **groups:** approved

## About

Crofelemer is an antidiarrheal medicine used to treat diarrhea. It is an approved drug, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5187464](https://www.wikidata.org/wiki/Q5187464) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Tradtrantip_2010_CFTR](drugs/drug_crofelemer/pd_Tradtrantip_2010_CFTR.md) | CFTR Cl- conductance ← crofelemer · direct Emax (saturable) effect | — | Tradtrantip L et al., Crofelemer, an antisecretory antidiarrh…, Molecular pharmacology (2010) | [10.1124/mol.109.061051](https://doi.org/10.1124/mol.109.061051) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Tradtrantip_2010_TMEM16A](drugs/drug_crofelemer/pd_Tradtrantip_2010_TMEM16A.md) | TMEM16A Cl- current ← crofelemer · direct Emax (saturable) effect | — | Tradtrantip L et al., Crofelemer, an antisecretory antidiarrh…, Molecular pharmacology (2010) | [10.1124/mol.109.061051](https://doi.org/10.1124/mol.109.061051) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=crofelemer).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ANO1 (target), CFTR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:25 | 0:23 | 0/0/0 | 1/0/0 | 0/0/0 | 12,514/742 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Crutchley_2010 | irrelevant | 2 | 0 | This is a narrative review of crofelemer's efficacy and safety that mentions pharmacokinetics in the objective but provides no quantitative PK parameter values (CL, V, t1/2) in the extracted evidence. |
| popPK | Frampton_2013 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and safety that explicitly states crofelemer undergoes minimal systemic absorption, and it does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Frampton_2013 | not_relevant | 1 | 0 | The text is a clinical review summarizing efficacy and safety outcomes (diarrhea reduction) without providing any pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Tradtrantip_2010 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating crofelemer's effect on chloride channels, not a pharmacokinetic study reporting disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
