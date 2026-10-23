<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;motretinide&quot;}]"></div>

# motretinide

- **generic name:** motretinide
- **ATC codes:** `D10AD05`
- **DrugBank:** [DB13368](https://go.drugbank.com/drugs/DB13368) · **PubChem:** not captured
- **molar mass:** 353.506 g/mol (C23H31NO2) — DrugBank
- **groups:** experimental

## About

Motretinide is a topical retinoid that was developed for the treatment of acne. It is no longer in routine use and is currently regarded as an experimental drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q904009](https://www.wikidata.org/wiki/Q904009) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Reiners_1988_chondrogenesis](drugs/drug_motretinide/pd_Reiners_1988_chondrogenesis.md) | chondrogenesis ← motretinide · inhibition effect | — | Reiners J et al., Transplacental pharmacokinetics of tera…, Reproductive toxicology (El… (1988) | [10.1016/s0890-6238(88)80005-4](https://doi.org/10.1016/s0890-6238(88)80005-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:26 | 1:07 | 0/0/0 | 0/1/0 | 0/0/0 | 7,509/451 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Reiners_1988.pdf` | Reiners J et al., Transplacental pharmacokinetics of tera…, Reproductive toxicology (El… (1988) | pd | 5 | [10.1016/s0890-6238(88)80005-4](https://doi.org/10.1016/s0890-6238(88)80005-4) | [2980988](https://www.ncbi.nlm.nih.gov/pubmed/2980988) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T07:26:28.853167+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Gollnick_1987 | not_relevant | 0 | 0 | The text is a general review of retinoid indications and pharmacology, mentioning motretinide's use in acne but reporting no pharmacogenomic data, gene variants, or specific PK/PD parameter changes based on genotype. |
| popPK | Mezick_1984 | irrelevant | 0 | 0 | The study evaluates antikeratinizing efficacy (horn-filled utriculus size) in a rhino mouse model, not pharmacokinetic disposition parameters. |
| popPK | Reiners_1988 | irrelevant | 1 | 0 | The study focuses on teratogenicity and metabolite (etretin) concentrations in mice, with no report of standard PK parameters like CL or V for motretinide itself, and no numeric values are provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
