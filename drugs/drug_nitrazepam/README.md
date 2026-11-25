<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;nitrazepam&quot;}]"></div>

# nitrazepam

- **generic name:** nitrazepam
- **ATC codes:** `N05CD02`
- **DrugBank:** [DB01595](https://go.drugbank.com/drugs/DB01595) · **PubChem:** [CID 4506](https://pubchem.ncbi.nlm.nih.gov/compound/4506)
- **molar mass:** 281.2661 g/mol (C15H11N3O3) — DrugBank
- **groups:** approved

## About

Nitrazepam is a benzodiazepine sedative used for the short-term treatment of severe anxiety and insomnia. It is given by mouth, typically as a tablet. It is widely used as an approved medication.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q410078](https://www.wikidata.org/wiki/Q410078), [Wikipedia](https://en.wikipedia.org/wiki/Nitrazepam?oldid=1384266280) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nitrazepam | parent | 281.266 | C15H11N3O3 | DrugBank | [4506](https://pubchem.ncbi.nlm.nih.gov/compound/4506) | Kangas_1979 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Kangas_1979_reference](drugs/drug_nitrazepam/Nitrazepam_Kangas1979_reference.md) | — | 1-compartment (no model) | 2 | Kangas L et al., Human pharmacokinetics of nitrazepam: e…, European journal of clinica… (1979) | [10.1007/BF00563100](https://doi.org/10.1007/BF00563100) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:51 | 0:03 | 0/1/0 | 0/0/0 | 0/0/0 | 4,362/174 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jones_2007 | irrelevant | 0 | 0 | The paper is a forensic toxicology study reporting blood concentrations in drivers, not a pharmacokinetic study with quantitative disposition parameters (CL, V, ka) for nitrazepam. |
| PGx | Jones_2007 | not_relevant | 0 | 0 | The paper reports forensic blood concentrations of nitrazepam in drivers but does not analyze the impact of specific gene variants or genotypes on its pharmacokinetics or pharmacodynamics. |
| PGx | Kangas_1979 | not_relevant | 0 | 0 | The study investigates the effect of age and disease status on nitrazepam pharmacokinetics, not gene variants or genotypes. |
| popPK | Konishi_2017 | irrelevant | 2 | 0 | The paper is an in-vitro enzyme identification study that reports qualitative metabolic pathways and enzyme roles, but provides no quantitative PK parameters (CL, V, t1/2, ka) for nitrazepam. |
| PGx | Konishi_2017 | not_relevant | 2 | 1 | The paper identifies the enzymes (AOX1, NAT2, AADAC, CYP3A4) responsible for nitrazepam metabolism and mentions they confer interindividual variability, but it does not report specific pharmacogenomic studies linking particular gene variants/genotypes to quantitative changes in PK/PD parameters. |
| PGx | Kravetz_2021 | not_relevant | 1 | 2 | Nitrazepam is only mentioned as a co-medication with fixed doses; the pharmacogenomic (KCNT1 variant) effects and TDM data pertain to quinidine, not nitrazepam PK/PD. |
| popPK | Luurila_1995 | relevant | 9 | 2 | The study reports quantitative changes in nitrazepam pharmacokinetic parameters (AUC, Cmax, tmax) in healthy humans, although absolute values are not explicitly listed in the provided abstract. |
| PGx | Luurila_1995 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (erythromycin and nitrazepam), not a pharmacogenomic effect involving gene variants. |
| popPK | Meyer_1982 | irrelevant | 0 | 0 | The text is a review discussing genetic polymorphisms in drug metabolism and mentions nitrazepam only as an example of a drug affected by acetylator status, without reporting any quantitative pharmacokinetic parameters. |
| PGx | Meyer_1982 | not_relevant | 2 | 0 | The paper mentions nitrazepam in a list of drugs metabolized by N-acetyltransferase, but it is a general review of pharmacogenetics and does not report specific PK/PD data, fitted effect sizes, or detailed findings for nitrazepam. |
| popPK | Mizuno_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of metabolic activation and cytotoxicity, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Mizuno_2009 | not_relevant | 2 | 5 | The paper reports CYP3A4-mediated metabolic activation and cytotoxicity of nitrazepam but does not assess genetic variants (pharmacogenomics) or their effect on specific PK/PD parameters. |
| popPK | Tang_2011 | irrelevant | 0 | 0 | The paper uses nitrazepam as a synthetic starting material for HIV-1 inhibitors and reports no pharmacokinetic parameters. |
| PGx | Tang_2011 | not_relevant | 0 | 0 | The paper reports the synthesis of new benzodiazepine analogs using nitrazepam as a starting material, not the pharmacokinetics or pharmacodynamics of nitrazepam itself, and does not involve pharmacogenomics. |
| popPK | Vrzal_2010 | irrelevant | 0 | 0 | The study is an in-vitro investigation of CYP3A4 and CYP1A2 induction by benzodiazepines (including nitrazepam) in cell lines and does not report pharmacokinetic disposition parameters. |
| PGx | Vrzal_2010 | not_relevant | 0 | 0 | The paper investigates the in vitro potential of nitrazepam to induce CYP enzymes and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnitrazepam%5D&body=Drug%3A%20nitrazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nitrazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:50 UTC</sub>
