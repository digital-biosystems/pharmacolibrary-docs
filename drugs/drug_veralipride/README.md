<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;veralipride&quot;}]"></div>

# veralipride

- **generic name:** veralipride
- **ATC codes:** `N05AL06`
- **DrugBank:** [DB13523](https://go.drugbank.com/drugs/DB13523) · **PubChem:** none
- **molar mass:** 383.46 g/mol (C17H25N3O5S) — DrugBank
- **groups:** experimental

## About

Veralipride is an antipsychotic in the benzamide class, used for vasomotor symptoms associated with menopause. It is taken orally in capsule form.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3564216](https://www.wikidata.org/wiki/Q3564216), [Wikipedia](https://en.wikipedia.org/wiki/Veralipride?oldid=1371990098) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 08:25 | 0:04 | 0/0/0 | 0/0/0 | 0/0/0 | 3,819/144 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_1997.pdf` | Yu Z et al., DeMonS--a new deconvolution method for…, Biopharmaceutics & drug dis… (1997) | popPK | 7 | [10.1002/(sici)1099-081x(199708)18:6&lt;475::aid-bdd33&gt;3.0.co;2-4](https://doi.org/10.1002/(sici)1099-081x(199708)18:6<475::aid-bdd33>3.0.co;2-4) | [9267681](https://pubmed.ncbi.nlm.nih.gov/9267681) | The paper describes a PK study on veralipride but the specific numeric parameter values are not present in the provided text. |

<sub>queue written 2026-11-24 08:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Basavilvazo-Rodríguez_2012 | irrelevant | 1 | 0 | The paper is a clinical consensus statement regarding prescribing guidelines and does not report original quantitative pharmacokinetic parameter values. |
| PGx | Basavilvazo-Rodríguez_2012 | not_relevant | 0 | 0 | The paper is a clinical consensus guideline regarding the prescription of veralipride for climacteric symptoms and does not report any pharmacogenomic studies or gene-drug interactions. |
| popPK | Csajka_2005 | irrelevant | 2 | 0 | The paper is a methodological study demonstrating deconvolution techniques on previously published data, and no quantitative PK parameter values for veralipride are reported in the provided evidence. |
| PGx | Csajka_2005 | not_relevant | 0 | 0 | The paper focuses on a mathematical method for deconvolution of absorption profiles and does not investigate any genetic variants or their impact on pharmacokinetics/pharmacodynamics. |
| popPK | Godfrey_2011 | relevant | 8 | 0 | The study describes compartmental PK modeling of veralipride to address the double peak phenomenon, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| PGx | Godfrey_2011 | not_relevant | 0 | 0 | The paper models the double peak phenomenon in the pharmacokinetics of veralipride but does not involve any genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Grall_1982 | irrelevant | 0 | 0 | The paper reports on the clinical efficacy of veralipride in treating menopausal disorders but does not provide any pharmacokinetic parameter values. |
| PGx | Grall_1982 | not_relevant | 0 | 0 | The paper reports a clinical efficacy trial for veralipride in menopausal patients but contains no information regarding genetic variants, genotypes, or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Plusquellec_1994 | irrelevant | 5 | 0 | The paper presents a generalized theoretical model and simulated curves for veralipride, but does not report specific numeric pharmacokinetic parameters (CL, V, ka) from experimental data. |
| PGx | Plusquellec_1994 | not_relevant | 0 | 0 | The paper describes a generalized pharmacokinetic compartmental model for absorption sites and does not report any pharmacogenomic effects or gene variant interactions. |
| popPK | Vasse_1985 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice investigating stereotyped behaviors elicited by dopamine agonists, with no pharmacokinetic parameters reported for veralipride or any other drug. |
| PGx | Vasse_1985 | not_relevant | 0 | 0 | The paper describes pharmacological interactions and behavioral effects in animal models, not pharmacogenomic effects of genetic variants on PK or PD parameters. |
| popPK | Yu_1997 | relevant | 7 | 0 | The paper describes a PK study on veralipride but the specific numeric parameter values are not present in the provided text. |
| PGx | Yu_1997 | not_relevant | 0 | 0 | The paper describes a numerical deconvolution method applied to veralipride data but contains no information on gene variants or pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bveralipride%5D&body=Drug%3A%20veralipride%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_veralipride/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
