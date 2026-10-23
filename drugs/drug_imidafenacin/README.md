<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;imidafenacin&quot;}]"></div>

# imidafenacin

- **generic name:** imidafenacin
- **ATC codes:** `G04BD14`
- **DrugBank:** [DB09262](https://go.drugbank.com/drugs/DB09262) · **PubChem:** [CID 6433090](https://pubchem.ncbi.nlm.nih.gov/compound/6433090)
- **molar mass:** 319.408 g/mol (C20H21N3O) — DrugBank
- **groups:** investigational

## About

Imidafenacin is a drug for urinary frequency and incontinence, belonging to the urologicals class. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6003989](https://www.wikidata.org/wiki/Q6003989) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=imidafenacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `UGT1A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:33 | 0:27 | 0/0/0 | 0/0/0 | 0/0/0 | 6,753/450 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hasegawa_2013.pdf` | Hasegawa C et al., Population pharmacokinetics and exposur…, Drug metabolism and pharmac… (2013) | popPK | 10 | [10.2133/dmpk.dmpk-12-rg-062](https://doi.org/10.2133/dmpk.dmpk-12-rg-062) | [23089801](https://pubmed.ncbi.nlm.nih.gov/23089801) | The paper describes a population pharmacokinetic model for imidafenacin, but the abstract provides only qualitative descriptions without any numeric parameter values (e.g., CL, V, Q). |
| `Ohno_2008.pdf` | Ohno T et al., Population pharmacokinetic analysis of…, Drug metabolism and pharmac… (2008) | popPK | 10 | [10.2133/dmpk.23.456](https://doi.org/10.2133/dmpk.23.456) | [19122340](https://pubmed.ncbi.nlm.nih.gov/19122340) | The study is a population PK analysis for imidafenacin, but specific numeric parameter values (CL, V, Ka, etc.) are not provided in the text or tables, only qualitative trends and method descriptions. |

<sub>queue written 2026-10-07 09:32 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hasegawa_2013 | relevant | 10 | 0 | The paper describes a population pharmacokinetic model for imidafenacin, but the abstract provides only qualitative descriptions without any numeric parameter values (e.g., CL, V, Q). |
| PGx | Kanayama_2007 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions and enzyme identification (CYP3A4, UGT1A4) but does not report pharmacogenomic effects of genetic variants on PK/PD parameters. |
| popPK | Ohno_2008 | relevant | 10 | 1 | The study is a population PK analysis for imidafenacin, but specific numeric parameter values (CL, V, Ka, etc.) are not provided in the text or tables, only qualitative trends and method descriptions. |
| PGx | Ohno_2008_2 | not_relevant | 0 | 0 | The study reports general pharmacokinetics in healthy subjects but does not investigate or report any genotype-based variations (pharmacogenomics). |
| PGx | Ohno_2008_3 | not_relevant | 0 | 10 | The study reports a drug-drug interaction effect of itraconazole (a CYP3A4 inhibitor) on imidafenacin PK, but it does not investigate or report the impact of any genetic variant, genotype, or phenotypic gene expression on these parameters. |
| popPK | Takeda_2013 | irrelevant | 0 | 0 | This is a clinical efficacy study for overactive bladder symptoms and does not report any pharmacokinetic parameters for imidafenacin. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bimidafenacin%5D&body=Drug%3A%20imidafenacin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_imidafenacin/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
