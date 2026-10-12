<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07X&quot;,&quot;href&quot;:&quot;atc/A07X.md&quot;},{&quot;label&quot;:&quot;crofelemer&quot;}]"></div>

# crofelemer

- **generic name:** crofelemer
- **ATC codes:** `A07XA06`
- **DrugBank:** [DB04941](https://go.drugbank.com/drugs/DB04941) · **PubChem:** not captured
- **groups:** approved

## About

Crofelemer is an antidiarrheal medicine used to treat diarrhea. It is an approved drug, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5187464](https://www.wikidata.org/wiki/Q5187464) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:25 | 0:23 | 0/0/0 | 0/1/0 | 0/0/0 | 12,514/742 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Tradtrantip_2010_CFTR](drugs/drug_crofelemer/pd_Tradtrantip_2010_CFTR.md) | CFTR Cl- conductance ← crofelemer · direct Emax (saturable) effect | — | Tradtrantip L et al., Crofelemer, an antisecretory antidiarrh…, Molecular pharmacology (2010) | [10.1124/mol.109.061051](https://doi.org/10.1124/mol.109.061051) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Tradtrantip_2010_TMEM16A](drugs/drug_crofelemer/pd_Tradtrantip_2010_TMEM16A.md) | TMEM16A Cl- current ← crofelemer · direct Emax (saturable) effect | — | Tradtrantip L et al., Crofelemer, an antisecretory antidiarrh…, Molecular pharmacology (2010) | [10.1124/mol.109.061051](https://doi.org/10.1124/mol.109.061051) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=crofelemer).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ANO1 (target), CFTR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
