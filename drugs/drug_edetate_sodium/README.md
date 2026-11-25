<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01X&quot;,&quot;href&quot;:&quot;atc/S01X.md&quot;},{&quot;label&quot;:&quot;Edetate sodium&quot;}]"></div>

# Edetate sodium

- **generic name:** Edetate sodium
- **ATC codes:** `S01XA05`
- **DrugBank:** [DB13404](https://go.drugbank.com/drugs/DB13404) · **PubChem:** none
- **groups:** investigational

## About

Edetate sodium is an investigational chelating agent used in ophthalmology. It is administered as a solution.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27284152](https://www.wikidata.org/wiki/Q27284152), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

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
| 2026-11-23 21:39 | 0:05 | 0/0/0 | 0/0/0 | 0/0/0 | 4,452/162 | einfracz / qwen3.8-27b | 8 | 0/8 | 7/1 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `De_2004.pdf` | De Rosemond SJ et al., Wastewater treatment polymers identifie…, Environmental toxicology an… (2004) | pd | 4 | [10.1897/03-609](https://doi.org/10.1897/03-609) | [15379002](https://www.ncbi.nlm.nih.gov/pubmed/15379002) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-23 21:39 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Canevarolo_2026 | irrelevant | 0 | 0 | The paper is a genomic and transcriptomic analysis of multiple myeloma progression and resistance, containing no pharmacokinetic data for edetate sodium or any other drug. |
| PGx | Canevarolo_2026 | not_relevant | 0 | 0 | The paper investigates genomic and epigenomic changes in multiple myeloma progression and multidrug resistance, but does not study edetate_sodium or report pharmacokinetic/pharmacodynamic effects of this specific drug. |
| popPK | De_2004 | irrelevant | 0 | 0 | The paper describes the toxicity of wastewater treatment polymers and kimberlite effluent in aquatic crustaceans, not the pharmacokinetics of edetate sodium. |
| PGx | De_2004 | not_relevant | 0 | 0 | The paper studies environmental toxicity of wastewater treatment polymers in daphnia and does not involve human pharmacogenomics, pharmacokinetics, or pharmacodynamics of edetate sodium. |
| popPK | Gopi_2017 | irrelevant | 0 | 0 | The study investigates phospholipid levels in rat striatum using rotenone, and edetate sodium (Na.EDTA) is only mentioned as a reagent for sample preparation, not as a subject drug. |
| PGx | Gopi_2017 | not_relevant | 0 | 0 | The paper investigates phospholipid levels in a rotenone-induced Parkinson's disease model and does not involve the pharmacokinetics or pharmacodynamics of edetate_sodium or any gene variants. |
| popPK | Kim_2026 | irrelevant | 0 | 0 | The study is an in vitro physicochemical stability evaluation of ropivacaine and dexamethasone formulations, where edetate is only a minor excipient, and contains no pharmacokinetic parameters for edetate. |
| PGx | Kim_2026 | not_relevant | 0 | 0 | The paper describes an in vitro physicochemical stability study of ropivacaine and dexamethasone formulations, containing no pharmacogenomic data or in vivo PK/PD assessments for edetate sodium. |
| popPK | Moura_2025 | irrelevant | 0 | 0 | This is a medicinal chemistry/anticancer study of carnosic acid derivatives with no edetate sodium PK data. |
| popPK | Phelps_2013 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for myo-inositol, not edetate_sodium. |
| PGx | Phelps_2013 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of myo-inositol in preterm infants and does not discuss edetate_sodium or any gene variants. |
| popPK | Pillai_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of oseltamivir, not edetate_sodium. |
| PGx | Pillai_2015 | not_relevant | 0 | 0 | The study focuses on the pharmacokinetics of oseltamivir, not edetate_sodium, and examines physiological changes in pregnancy rather than pharmacogenomic effects. |
| popPK | Ravenstijn_2012 | irrelevant | 0 | 0 | This is a population PK study of L-DOPA (levodopa) in rats, not edetate sodium; edetate only appears as EDTA in assay buffers. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | This is a review of paediatric excipients; edetate sodium is not the subject drug and no PK parameters for it appear. |
| popPK | Simeoli_2024 | irrelevant | 0 | 0 | This is a population-PK study of budesonide; sodium edetate is only an excipient in the formulation, with no PK parameters for edetate itself. |
| popPK | Vasović_2026 | irrelevant | 0 | 0 | A narrative review of oral peptide delivery technologies with no edetate_sodium PK parameters reported. |
| popPK | Zingmark_2004 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the monoclonal antibody ATM-027, not edetate_sodium. |
| PGx | Zingmark_2004 | not_relevant | 0 | 0 | The paper models the PK/PD of the monoclonal antibody ATM-027 in multiple sclerosis patients, not edetate_sodium, and does not report pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bedetate_sodium%5D&body=Drug%3A%20edetate_sodium%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_edetate_sodium/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
