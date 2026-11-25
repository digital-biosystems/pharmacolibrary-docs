<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;eszopiclone&quot;}]"></div>

# eszopiclone

- **generic name:** eszopiclone
- **ATC codes:** `N05CF04`
- **DrugBank:** [DB00402](https://go.drugbank.com/drugs/DB00402) · **PubChem:** [CID 969472](https://pubchem.ncbi.nlm.nih.gov/compound/969472)
- **molar mass:** 388.808 g/mol (C17H17ClN6O3) — DrugBank
- **groups:** approved, investigational

## About

Eszopiclone is a sedative-hypnotic drug in the cyclopyrrolone class, used to treat short-term and long-term insomnia. It is taken by mouth as tablets or capsules and is well absorbed. It is authorized in the United States and available as a generic medication, but is not sold in the European Union because regulatory bodies deemed it too similar to zopiclone.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q413184](https://www.wikidata.org/wiki/Q413184), [Wikipedia](https://en.wikipedia.org/wiki/Eszopiclone?oldid=1346285069) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Luurila_1996_DSST](drugs/drug_eszopiclone/pd_Luurila_1996_DSST.md) | digit symbol substitution test ← zopiclone · inhibition effect | — | Luurila H et al., Pharmacokinetic-pharmacodynamic modelli…, Pharmacology & toxicology (1996) | [10.1111/j.1600-0773.1996.tb01387.x](https://doi.org/10.1111/j.1600-0773.1996.tb01387.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Luurila_1996_SPV](drugs/drug_eszopiclone/pd_Luurila_1996_SPV.md) | changes in saccadic peak velocity ← zopiclone · inhibition effect | — | Luurila H et al., Pharmacokinetic-pharmacodynamic modelli…, Pharmacology & toxicology (1996) | [10.1111/j.1600-0773.1996.tb01387.x](https://doi.org/10.1111/j.1600-0773.1996.tb01387.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:45 | 0:03 | 0/0/0 | 0/2/0 | 0/0/0 | 4,012/158 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dresser_2000 | irrelevant | 0 | 0 | The paper is a review of CYP3A4 interactions and mentions zopiclone (the racemate) only as an example of a drug affected by metabolism, without reporting any quantitative pharmacokinetic parameters for eszopiclone. |
| PGx | Dresser_2000 | not_relevant | 0 | 0 | The paper discusses CYP3A4 inhibition by co-administered drugs (drug-drug interactions) rather than genetic variants/genotypes (pharmacogenomics) and does not specifically quantify PK/PD changes for eszopiclone. |
| popPK | Gaillot_1982 | irrelevant | 0 | 0 | The paper studies zopiclone, not eszopiclone (the S-enantiomer), and does not report PK parameters for eszopiclone. |
| PGx | Gaillot_1982 | not_relevant | 0 | 0 | The paper discusses pharmacokinetics and metabolism of zopiclone (not eszopiclone) and focuses on physiological variables like age and organ impairment, but does not report any genetic variants or pharmacogenomic effects. |
| popPK | Gaillot_1983 | irrelevant | 2 | 0 | The study investigates zopiclone, not eszopiclone, and the evidence contains no quantitative parameters for eszopiclone. |
| PGx | Gaillot_1983 | not_relevant | 0 | 0 | The paper studies zopiclone and reports its pharmacokinetics but does not investigate eszopiclone or report any pharmacogenomic effects. |
| popPK | Gex-Fabry_2004 | irrelevant | 0 | 0 | This is a venlafaxine PK/PD study; zopiclone is only co-medication and no eszopiclone parameters are reported. |
| popPK | Han_2025 | irrelevant | 1 | 2 | This is a population-PK model of clozapine; zopiclone appears only as a co-administered DDI covariate (a 25.4% clearance effect), with no PK parameters for zopiclone/eszopiclone itself (ka was fixed from literature). |
| popPK | Lloyd_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABAA receptor binding using zopiclone (not eszopiclone) and does not report pharmacokinetic parameters. |
| PGx | Lloyd_1990 | not_relevant | 0 | 0 | The paper is an in vitro study on rat cerebral membranes investigating the mechanism of action of hypnotics on GABA-A receptors and does not report pharmacogenomic effects on eszopiclone PK/PD. |
| popPK | Luurila_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of zopiclone, not eszopiclone. |
| PGx | Luurila_1996 | not_relevant | 0 | 0 | The study investigates the PK/PD of zopiclone in healthy volunteers but does not report any pharmacogenomic effects or genetic variants. |
| popPK | Morlock_2011 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of GABA receptor mutations, containing no pharmacokinetic parameters for eszopiclone. |
| PGx | Morlock_2011 | not_relevant | 1 | 5 | The study investigates structural mechanisms of benzodiazepine action on GABA-A receptors using site-directed mutagenesis in oocytes, rather than human pharmacogenomic effects (SNPs) on eszopiclone PK/PD. |
| popPK | Munakata_1996 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiological study on benzodiazepine receptors in rat neurons and does not report pharmacokinetic parameters (CL, V, etc.) for eszopiclone. |
| PGx | Munakata_1996 | not_relevant | 0 | 0 | The paper studies neuronal subpopulations in rats, not human genetic variants affecting eszopiclone pharmacokinetics or pharmacodynamics. |
| popPK | Novotna_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on receptor interactions (AhR, GR, PXR) and does not report quantitative pharmacokinetic parameters (CL, V, ka) for eszopiclone. |
| PGx | Novotna_2014 | not_relevant | 0 | 0 | The paper studies receptor interactions of zopiclone (not eszopiclone) in reporter cell lines and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Petroski_2006 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiological investigation of indiplon in vitro, not a pharmacokinetic study for eszopiclone. |
| PGx | Petroski_2006 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of indiplon (a different drug) and its receptor selectivity, not the pharmacogenomics of eszopiclone. |
| popPK | Reynolds_1996 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology study on GABAA receptors using zopiclone (not eszopiclone) as a probe and reports no pharmacokinetic parameters. |
| PGx | Reynolds_1996 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic interaction between propofol and flurazepam/zopiclone (not eszopiclone) at the GABAA receptor in Xenopus oocytes, containing no information on gene variants or pharmacokinetics. |
| popPK | Sanger_1985 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice involving zopiclone (not eszopiclone) and reports no pharmacokinetic parameters. |
| PGx | Sanger_1985 | not_relevant | 0 | 0 | The paper reports behavioral effects of drugs in mice but does not involve eszopiclone, human pharmacogenomics, or genotype-specific PK/PD parameter changes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Beszopiclone%5D&body=Drug%3A%20eszopiclone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_eszopiclone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
