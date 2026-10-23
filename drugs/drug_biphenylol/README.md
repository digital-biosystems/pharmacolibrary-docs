<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;biphenylol&quot;}]"></div>

# biphenylol

- **generic name:** biphenylol
- **ATC codes:** `D08AE06`
- **DrugBank:** [DB13734](https://go.drugbank.com/drugs/DB13734) · **PubChem:** none
- **groups:** investigational

## About

Biphenylol (2-phenylphenol) is a phenol derivative used as an antiseptic and disinfectant for the skin. It is classed as investigational and is also considered a carcinogen, so it is not an established marketed medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q209467](https://www.wikidata.org/wiki/Q209467) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">mouse</span> | [Ramamoorthy_1997_ER_binding](drugs/drug_biphenylol/pd_Ramamoorthy_1997_ER_binding.md) | [3H]E2 displacement from mouse uterine estrogen receptor (competitive binding) ← biphenylol (HO-PCB3/HO-PCB4 equimolar mixture) · inhibition effect | — | Ramamoorthy K et al., Additive estrogenic activities of a bin…, Toxicology and applied phar… (1997) | [10.1006/taap.1997.8281](https://doi.org/10.1006/taap.1997.8281) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:08 | 0:10 | 0/0/0 | 0/1/0 | 0/0/0 | 7,986/580 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Malmberg_2004.pdf` | Malmberg T et al., Pharmacokinetics of two major hydroxyla…, Xenobiotica; the fate of fo… (2004) | popPK | 10 | [10.1080/00498250410001713078](https://doi.org/10.1080/00498250410001713078) | [15277017](https://pubmed.ncbi.nlm.nih.gov/15277017) | PK parameters (half-life, V, CL, AUC) for two biphenylol PCB metabolites are reported directly in the abstract after IV dosing in rats. |
| `Matthews_2000.pdf` | Matthews J et al., Differential binding affinities of PCBs…, Toxicological sciences : an… (2000) | pd | 4 | [10.1093/toxsci/53.2.326](https://doi.org/10.1093/toxsci/53.2.326) | [10696781](https://www.ncbi.nlm.nih.gov/pubmed/10696781) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07 23:08 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Matthews_2000 | irrelevant | 0 | 0 | no_text gate: only 237 chars of text extracted (&lt; 400) |
| PD | Matthews_2000 | not_relevant | 0 | 0 | The paper focuses on the binding affinities of PCBs and HO-PCBs to estrogen receptors, not on the pharmacodynamics of biphenylol. |
| popPK | Nair-Menon_1999 | irrelevant | 0 | 0 | In vitro cytotoxicity study of a biphenylol-related PCB metabolite in murine splenocytes; no pharmacokinetic parameters for biphenylol. |
| popPK | Ramamoorthy_1997 | irrelevant | 0 | 0 | The paper investigates the estrogenic activity and receptor binding of biphenylol derivatives, not their pharmacokinetic disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbiphenylol%5D&body=Drug%3A%20biphenylol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_biphenylol/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09</sub>
