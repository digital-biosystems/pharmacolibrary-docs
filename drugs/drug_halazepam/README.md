<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;halazepam&quot;}]"></div>

# halazepam

- **generic name:** halazepam
- **ATC codes:** `N05BA13`
- **DrugBank:** [DB00801](https://go.drugbank.com/drugs/DB00801) · **PubChem:** [CID 31640](https://pubchem.ncbi.nlm.nih.gov/compound/31640)
- **molar mass:** 352.738 g/mol (C17H12ClF3N2O) — DrugBank
- **groups:** approved, illicit, withdrawn

## About

Halazepam is a benzodiazepine derivative used to treat anxiety disorders. It is given by mouth as a tablet. The drug was marketed in the United States, Spain, and Portugal but is now withdrawn.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5641126](https://www.wikidata.org/wiki/Q5641126), [Wikipedia](https://en.wikipedia.org/wiki/Halazepam?oldid=1385904460) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| N-desalkylhalazepam | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Chung_1984_reference](drugs/drug_halazepam/Halazepam_Chung1984_reference.md) | — | parent + metabolite (no model) | 0 | Chung M et al., Multiple-dose halazepam kinetics, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.122](https://doi.org/10.1038/clpt.1984.122) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Aden_1980_global_evaluation_of_efficacy](drugs/drug_halazepam/pd_Aden_1980_global_evaluation_of_efficacy.md) | global evaluation of efficacy ← halazepam · model not identified | — | Aden GC et al., Effectiveness of bedtime dosing of benz…, Clinical therapeutics (1980) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 00:05 | 0:03 | 0/1/0 | 1/0/0 | 0/0/0 | 3,554/149 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aden_1980 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing anxiety symptoms and does not report pharmacokinetic parameters for halazepam. |
| PGx | Aden_1980 | not_relevant | 0 | 0 | The paper is a clinical trial comparing the efficacy of two benzodiazepines and does not report any pharmacogenomic data or gene variants affecting PK/PD parameters. |
| popPK | Chung_1984 | relevant | 9 | 3 | The study reports halazepam PK parameters (half-life) in humans using a two-compartment model, but specific clearance and volume values are not provided in the text. |
| PGx | Chung_1984 | not_relevant | 0 | 0 | The study describes multiple-dose pharmacokinetics in healthy men but does not report any pharmacogenomic effects or genetic variants. |
| popPK | Greenblatt_1983 | irrelevant | 0 | 0 | The provided text is a qualitative review abstract describing general pharmacokinetic categories without reporting any specific numeric parameters for halazepam. |
| PGx | Greenblatt_1983 | not_relevant | 0 | 0 | The paper provides a general overview of the pharmacokinetic classification of benzodiazepines but does not report any genetic variants or pharmacogenomic effects on halazepam. |
| popPK | Jochemsen_1984 | irrelevant | 0 | 0 | The paper is a review article discussing general pharmacokinetic principles and class characteristics of benzodiazepines without reporting specific original quantitative disposition parameters or numeric values for halazepam. |
| PGx | Jochemsen_1984 | not_relevant | 0 | 0 | The paper is a general review of benzodiazepine pharmacokinetics and does not report on the impact of gene variants on halazepam parameters. |
| popPK | Mendels_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for acute alcohol withdrawal and contains no pharmacokinetic parameter values for halazepam. |
| PGx | Mendels_1985 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing halazepam and chlordiazepoxide for alcohol withdrawal but contains no pharmacogenomic data, gene variants, or genotype-specific PK/PD parameters. |
| popPK | Patel_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of UGT2B7 enzyme kinetics regarding oxazepam glucuronidation, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for halazepam. |
| PGx | Patel_1995 | not_relevant | 0 | 0 | The paper investigates in vitro inhibition of UGT2B7 by other drugs, reporting no pharmacogenomic association between gene variants and halazepam pharmacokinetics or pharmacodynamics. |
| popPK | Rickels_1978 | irrelevant | 0 | 0 | The study is a clinical efficacy analysis of anxiety treatment outcomes and does not report any pharmacokinetic parameters for halazepam. |
| PGx | Rickels_1978 | not_relevant | 0 | 0 | The paper investigates clinical prognostic indicators (anxiety levels, stress, prior treatment) for drug response, but does not mention genetic variants or genotypes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bhalazepam%5D&body=Drug%3A%20halazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_halazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 00:05 UTC</sub>
