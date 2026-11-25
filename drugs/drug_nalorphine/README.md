<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;nalorphine&quot;}]"></div>

# nalorphine

- **generic name:** nalorphine
- **ATC codes:** `V03AB02`
- **DrugBank:** [DB11490](https://go.drugbank.com/drugs/DB11490) · **PubChem:** none
- **molar mass:** 311.381 g/mol (C19H21NO3) — DrugBank
- **groups:** experimental, vet_approved

## About

Nalorphine is a morphinan alkaloid and mixed opioid agonist-antagonist that acts as an antidote for opioid overdose and to diagnose opioid dependence. The drug is no longer used in human medicine due to adverse effects, although it remains an approved veterinary product.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2622916](https://www.wikidata.org/wiki/Q2622916), [Wikipedia](https://en.wikipedia.org/wiki/Nalorphine?oldid=1367852075) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-11-24 02:09 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,468/165 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 53 matched, 53 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mosaddeghi_1995.pdf` | Mosaddeghi M et al., Effects of kappa-opioid receptor agonis…, European journal of pharmac… (1995) | pd | 4 | [10.1016/0922-4106(95)90149-3](https://doi.org/10.1016/0922-4106(95)90149-3) | [7556409](https://www.ncbi.nlm.nih.gov/pubmed/7556409) | metadata signals extractable PD data (EC50) |
| `Vaught_1978.pdf` | Vaught JL et al., Characterization of leucine and methion…, Research communications in… (1978) | pd | 4 |  | [705020](https://www.ncbi.nlm.nih.gov/pubmed/705020) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-24 02:09 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cantalamessa_1982 | irrelevant | 0 | 0 | The study focuses on the behavioral effects of naloxone and morphine in rats, not the pharmacokinetics of nalorphine. |
| PGx | Cantalamessa_1982 | not_relevant | 0 | 0 | The study investigates naloxone's pharmacological effects on rat drinking behavior and does not report pharmacogenomic effects or gene variants on PK/PD parameters of nalorphine. |
| popPK | Carroll_1972 | irrelevant | 0 | 0 | The paper is a behavioral/pharmacological study in mice using nalorphine as a morphine antagonist, and it contains no pharmacokinetic data for nalorphine. |
| PGx | Carroll_1972 | not_relevant | 0 | 0 | The paper investigates neuropharmacology of morphine using nalorphine as an antagonist but contains no pharmacogenomic data or genetic variants. |
| popPK | Connor_1996 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on nociceptin receptors where nalorphine is used only as a pharmacological antagonist/comparator, not as a subject for PK analysis. |
| PGx | Connor_1996 | not_relevant | 0 | 0 | The paper investigates the mechanism of nociceptin on rat neurons and mentions nalorphine only as an antagonist that did not affect the current; it does not report pharmacogenomic effects of nalorphine on PK or PD parameters. |
| popPK | Emmerson_1996 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of receptor binding and G-protein activation, not a pharmacokinetic study, and contains no disposition parameters for nalorphine. |
| PGx | Emmerson_1996 | not_relevant | 0 | 0 | The paper describes opioid receptor binding and signaling in C6 glioma cells but does not report any pharmacogenomic effect (gene variant/phenotype) on the pharmacokinetic or pharmacodynamic parameters of nalorphine. |
| popPK | Govitrapong_1992 | irrelevant | 0 | 0 | The study is an in vitro receptor binding and enzyme activity assay, not a pharmacokinetic study, and reports no disposition parameters for nalorphine. |
| PGx | Govitrapong_1992 | not_relevant | 0 | 0 | The study investigates opioid receptor binding and enzyme activity in bovine pineal glands; it does not report pharmacogenomic effects on the PK or PD of nalorphine. |
| popPK | Green_1997 | irrelevant | 0 | 0 | The study is an in vitro enzymatic characterization of UGT2B9 substrate reactivity, not a pharmacokinetic study reporting disposition parameters for nalorphine. |
| PGx | Green_1997 | not_relevant | 0 | 0 | The study characterizes the metabolic activity of expressed monkey UGT2B9 enzyme in vitro, not the effect of human genetic variants (pharmacogenomics) on in vivo PK/PD parameters. |
| popPK | Groenendaal_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of morphine, not nalorphine. |
| PGx | Groenendaal_2007 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics of morphine, not nalorphine, and does not investigate pharmacogenomic effects. |
| popPK | Hayes_1985 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor activity in rabbit vas deferens and contains no pharmacokinetic data or disposition parameters for nalorphine. |
| PGx | Hayes_1985 | not_relevant | 0 | 0 | The paper investigates kappa receptor agonist profiles in the rabbit vas deferens without assessing any gene variants/genotypes/phenotypes or their effect on nalorphine's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hayes_1985_2 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study investigating receptor selectivity in tissue preparations, containing no pharmacokinetic parameters for nalorphine. |
| PGx | Hayes_1985_2 | not_relevant | 0 | 0 | The paper investigates receptor selectivity in animal tissues and does not report any human genetic variants or pharmacogenomic effects. |
| popPK | Holtzman_1976 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in squirrel monkeys, not a pharmacokinetic study, and reports no quantitative disposition parameters for nalorphine. |
| PGx | Holtzman_1976 | not_relevant | 0 | 0 | The study describes behavioral effects of nalorphine and other opioids in squirrel monkeys but contains no information regarding genetic variants or pharmacogenomics. |
| popPK | Hughes_1975 | irrelevant | 0 | 0 | The study is a pharmacological investigation of adrenergic transmission in mouse vas deferens tissue and does not contain any pharmacokinetic data for nalorphine. |
| PGx | Hughes_1975 | not_relevant | 0 | 0 | The paper reports pharmacological potency and antagonist activity of nalorphine in an isolated tissue assay, but does not report any pharmacogenomic effects (gene variants affecting PK/PD) of nalorphine. |
| popPK | Luján_1981 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay characterizing opiate dependence in guinea-pig ileum and does not report quantitative pharmacokinetic disposition parameters for nalorphine. |
| PGx | Luján_1981 | not_relevant | 0 | 0 | The paper studies opiate physical dependence in guinea-pig ileum and does not investigate the influence of gene variants or genotypes on the pharmacokinetics or pharmacodynamics of nalorphine. |
| popPK | Mosaddeghi_1995 | irrelevant | 0 | 0 | The study is a mechanistic investigation of phosphoinositide hydrolysis in rat kidney slices, not a pharmacokinetic study, and reports no disposition parameters (e.g., clearance, volume) for nalorphine. |
| PGx | Mosaddeghi_1995 | not_relevant | 0 | 0 | The study investigates the pharmacological effects of nalorphine on phosphoinositide hydrolysis in rat tissue but does not report any gene variants or pharmacogenomic influences. |
| popPK | Pchelintsev_1991 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment (writhing test and conditioned place preference) assessing addictive potential, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Pchelintsev_1991 | not_relevant | 0 | 0 | The paper compares the pharmacodynamics of various opioids in mice but does not investigate the effect of genetic variants on nalorphine's PK or PD. |
| popPK | Pearl_1968 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PGx | Pearl_1968 | not_relevant | 0 | 0 | The paper discusses the antiwrithing activity of nalorphine and morphine over time, not a pharmacogenomic effect on PK/PD parameters. |
| popPK | Rundlett_1976 | irrelevant | 1 | 0 | The study reports pharmacodynamic data (analgesia, respiratory effects) and dose-response curves, but contains no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for nalorphine. |
| PGx | Rundlett_1976 | not_relevant | 0 | 0 | The paper is a comparative pharmacological study of opioid effects in animals and does not investigate the influence of genetic variants on nalorphine's PK or PD. |
| popPK | Schaefer_1978 | irrelevant | 0 | 0 | The paper describes a behavioral discriminative stimulus study in squirrel monkeys using nalorphine only as a test drug for stimulus generalization, containing no pharmacokinetic parameters. |
| PGx | Schaefer_1978 | not_relevant | 0 | 0 | The paper describes behavioral pharmacology (discriminative stimulus properties) in squirrel monkeys and does not report pharmacogenomic effects on PK/PD parameters for nalorphine. |
| popPK | Shannon_1977 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study evaluating drug discrimination in rats, not a pharmacokinetic study, and does not report any quantitative PK parameters for nalorphine. |
| PGx | Shannon_1977 | not_relevant | 0 | 0 | The paper reports behavioral pharmacology in rats but contains no data on gene variants, genotypes, or pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Sim_1985 | irrelevant | 0 | 0 | The study investigates pharmacodynamic effects on muscle contraction in toads, not pharmacokinetic parameters like clearance or volume. |
| PGx | Sim_1985 | not_relevant | 0 | 0 | The study focuses on in vitro receptor pharmacology (opioid interactions with ACh receptors in a toad muscle model) and does not report on any human pharmacogenomic (genetic) effects on the pharmacokinetics or pharmacodynamics of nalorphine. |
| popPK | Stevens_1994 | irrelevant | 0 | 0 | The paper reports ED50 values for analgesic potency in frogs, which is pharmacodynamic data, not pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PGx | Stevens_1994 | not_relevant | 0 | 0 | The paper reports pharmacodynamic properties (analgesic potency) of nalorphine in amphibians but does not investigate any gene variants or genetic differences. |
| popPK | Stevens_1996 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of analgesic potency in frogs and does not report any pharmacokinetic parameters (CL, V, half-life) for nalorphine. |
| PGx | Stevens_1996 | not_relevant | 0 | 0 | The paper investigates the analgesic potency of opioids in a single amphibian species (Rana pipiens) and does not report any human gene variants or genotypes affecting the PK or PD of nalorphine. |
| popPK | Teiger_1976 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study testing antinociceptive activity in guinea pigs, not a pharmacokinetic study, and contains no quantitative disposition parameters for nalorphine. |
| PGx | Teiger_1976 | not_relevant | 0 | 0 | The paper describes a pharmacological test for antinociception in guinea pigs and does not involve genetic variants or pharmacogenomics. |
| popPK | Tyers_1980 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study classifying opiate receptors based on antinociceptive activity, containing no pharmacokinetic parameters for nalorphine. |
| PGx | Tyers_1980 | not_relevant | 0 | 0 | The paper reports receptor classification and activity profiles of nalorphine in animal models but does not report any pharmacogenomic effect of gene variants on its PK/PD parameters. |
| popPK | Vaught_1978 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study on guinea pig ileal muscle focusing on receptor binding and tolerance, not pharmacokinetic disposition parameters for nalorphine. |
| PGx | Vaught_1978 | not_relevant | 0 | 0 | The paper describes pharmacological interactions between endogenous peptides and opioids in guinea pig tissue, but does not report any pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| popPK | Ward_1982 | irrelevant | 0 | 0 | The study investigates opioid receptor subtypes in intestinal motility in mice and does not report pharmacokinetic parameters for nalorphine. |
| PGx | Ward_1982 | not_relevant | 0 | 0 | The paper investigates opioid receptor subtypes in wild-type mice and does not examine any genetic variants or pharmacogenomic factors affecting nalorphine PK/PD. |
| popPK | Zhu_1997 | irrelevant | 0 | 0 | The paper reports in-vitro receptor binding and functional assay data (EC50, efficacy) for nalorphine, not pharmacokinetic disposition parameters. |
| PGx | Zhu_1997 | not_relevant | 0 | 0 | The study investigates receptor pharmacology (GTPgammaS binding) and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Zimmerman_1987 | irrelevant | 0 | 0 | The study is a pharmacological analysis of receptor involvement in analgesic activity, not a pharmacokinetic study, and contains no disposition parameters for nalorphine. |
| PGx | Zimmerman_1987 | not_relevant | 0 | 0 | The paper investigates opioid receptor pharmacology (mu vs kappa selectivity) and does not report any pharmacogenomic effects (gene variants/genotypes) on nalorphine's PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnalorphine%5D&body=Drug%3A%20nalorphine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nalorphine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
