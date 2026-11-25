<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;doxylamine&quot;}]"></div>

# doxylamine

- **generic name:** doxylamine
- **ATC codes:** `R06AA09`
- **DrugBank:** [DB00366](https://go.drugbank.com/drugs/DB00366) · **PubChem:** [CID 3162](https://pubchem.ncbi.nlm.nih.gov/compound/3162)
- **molar mass:** 270.3694 g/mol (C17H22N2O) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Doxylamine is an antihistamine used to treat insomnia, headaches, and allergies. It is taken by mouth in forms such as tablets and syrups. It is widely used as a sleep medication and available over-the-counter.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q423390](https://www.wikidata.org/wiki/Q423390), [Wikipedia](https://en.wikipedia.org/wiki/Doxylamine?oldid=1381244789) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| doxylamine | parent | 270.369 | C17H22N2O | DrugBank | [3162](https://pubchem.ncbi.nlm.nih.gov/compound/3162) | Luna_1989 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Luna_1989_reference](drugs/drug_doxylamine/Doxylamine_Luna1989_reference.md) | — | 1-compartment (no model) | 4 | Luna BG et al., Doxylamine and diphenhydramine pharmaco…, Journal of clinical pharmac… (1989) | [10.1002/j.1552-4604.1989.tb03323.x](https://doi.org/10.1002/j.1552-4604.1989.tb03323.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:31 | 0:04 | 1/0/0 | 0/0/0 | 0/0/0 | 3,640/154 | einfracz / qwen3.8-27b | 9 | 1/2 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 34 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abd_2022 | irrelevant | 0 | 0 | The paper is a chemometric study on UV-spectrophotometric quantification of doxylamine in mixtures and contains no pharmacokinetic parameters. |
| PGx | Abd_2022 | not_relevant | 0 | 0 | The paper describes a chemometric method for quantifying doxylamine and pyridoxine mixtures and does not discuss pharmacogenomics or gene variants. |
| popPK | Alcocer_2022 | irrelevant | 2 | 0 | The study is primarily a comparative in-vitro dissolution analysis, and while it references PK studies, no specific quantitative PK parameters (CL, V, Ka) for doxylamine are provided in the evidence. |
| PGx | Alcocer_2022 | not_relevant | 0 | 0 | The study compares the dissolution profiles and PK parameters of two different formulations of doxylamine, but does not investigate any gene variants or pharmacogenomic factors. |
| popPK | Boskovic_2003 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of Diclectin for nausea and vomiting of pregnancy, reporting no pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PGx | Boskovic_2003 | not_relevant | 0 | 0 | The paper investigates the effect of dosing optimization on nausea symptoms in pregnancy, but contains no genetic data or pharmacogenomic analysis. |
| popPK | Dey_2025 | irrelevant | 0 | 0 | The study focuses on in vitro pharmacodynamics and nanoparticle characterization for glioblastoma therapy, with no pharmacokinetic modeling or quantitative disposition parameters (CL, V, ka) for doxylamine. |
| PGx | Dey_2025 | not_relevant | 0 | 0 | The paper investigates the formulation and efficacy of doxylamine nanoparticles for glioblastoma treatment, containing no data on genetic variants or pharmacogenomics. |
| popPK | Fantasia_2014 | irrelevant | 0 | 0 | The paper is a clinical review of nursing interventions and dosage for nausea and vomiting of pregnancy, containing no pharmacokinetic parameter data for doxylamine. |
| PGx | Fantasia_2014 | not_relevant | 0 | 0 | The paper is a clinical review of doxylamine for nausea and vomiting of pregnancy and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Gerostamoulos_2012 | irrelevant | 0 | 0 | This is a postmortem forensic toxicology study analyzing drug redistribution in blood, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for doxylamine. |
| PGx | Gerostamoulos_2012 | not_relevant | 0 | 0 | The paper investigates postmortem redistribution of doxylamine and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Hamman_2019 | irrelevant | 0 | 0 | This is a pharmaceutical formulation and compaction study, not a pharmacokinetic study, and no PK parameters are reported. |
| PGx | Hamman_2019 | not_relevant | 0 | 0 | The paper focuses on pharmaceutical formulation and compression properties using the SeDeM system, not on pharmacogenomics or genetic effects on pharmacokinetics. |
| popPK | Jackson_1988 | irrelevant | 1 | 0 | The paper describes subchronic toxicity studies in mice and contains no pharmacokinetic parameters (clearance, volume, etc.). |
| PGx | Jackson_1988 | not_relevant | 0 | 0 | The paper reports toxicity and histopathology in a standard animal model (B6C3F1 mice) rather than pharmacogenomic effects on doxylamine's PK/PD parameters. |
| popPK | Katsarov_2018 | irrelevant | 0 | 0 | The study is an in-vitro formulation and release study of chitosan microspheres, reporting no in-vivo pharmacokinetic parameters (CL, V, t1/2) for doxylamine. |
| PGx | Katsarov_2018 | not_relevant | 0 | 0 | The paper focuses on pharmaceutical formulation and in vitro release characteristics, not pharmacogenomics. |
| popPK | Katsarov_2018_2 | irrelevant | 0 | 0 | The paper is an analytical chemistry study focused on spectrophotometric determination of drug concentrations, not a pharmacokinetic study. |
| PGx | Katsarov_2018_2 | not_relevant | 0 | 0 | The paper describes chemometric methods for the spectrophotometric analysis of doxylamine and pyridoxine mixtures and contains no pharmacogenomic or pharmacokinetic data. |
| popPK | Letsky_2011 | irrelevant | 0 | 0 | Doxylamine is merely a detected analyte in a postmortem forensic toxicology case report focused on methadone, with no pharmacokinetic modeling or disposition parameters reported. |
| PGx | Letsky_2011 | not_relevant | 0 | 0 | The paper is a case report on the cause of death involving methadone and does not investigate the effect of a gene variant on a PK/PD parameter of doxylamine. |
| PGx | Luna_1989 | not_relevant | 0 | 0 | The study investigates the effect of oral contraceptive use (environmental/co-medication) on PK, not the effect of a gene variant/genotype (pharmacogenomics). |
| popPK | Melnikov_2017 | irrelevant | 0 | 0 | This is a clinical efficacy study for insomnia treatment that does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Melnikov_2017 | not_relevant | 0 | 0 | The study is a clinical trial comparing the efficacy of doxylamine and donormil, containing no data on gene variants or pharmacogenomics. |
| popPK | Pathak_2008 | irrelevant | 0 | 0 | This is an analytical chemistry paper focused on developing methods for the simultaneous determination of doxylamine in pharmaceutical formulations, not a pharmacokinetic study. |
| PGx | Pathak_2008 | not_relevant | 0 | 0 | The paper describes analytical methods for determining drug concentrations in mixtures and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Robertson_1994 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic inhibition assay measuring IC50 values, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for doxylamine. |
| PGx | Robertson_1994 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of rat liver aldehyde oxidase by doxylamine and other drugs, but it does not involve gene variants, genotypes, or human pharmacogenomics affecting PK/PD parameters. |
| popPK | Rowland_1989 | relevant | 9 | 2 | The paper describes a pharmacokinetic study of doxylamine in non-human primates using a compartmental model, but the specific numeric parameter values are not present in the provided evidence. |
| PGx | Rowland_1989 | not_relevant | 0 | 0 | The study investigates pharmacokinetics in non-human primates and does not report any pharmacogenomic effects or gene variants. |
| popPK | Salem_2022 | relevant | 9 | 0 | The paper reports in vivo pharmacokinetic parameters for doxylamine in rats, but specific numeric values for clearance, volume, or half-life are not present in the provided evidence. |
| PGx | Salem_2022 | not_relevant | 0 | 0 | The paper focuses on formulation optimization and pharmacokinetic appraisal of a drug delivery system (bilosomes), not on the impact of genetic variants or genotypes on drug response. |
| popPK | Tzeng_2018 | irrelevant | 1 | 0 | The study examines the pharmacodynamics (spinal sensory and motor blockade) of doxylamine in rats, reporting ED50 values and duration of effect, but does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Tzeng_2018 | not_relevant | 0 | 0 | The paper investigates dose-response and duration of spinal blockade in rats but contains no information regarding gene variants, genotypes, or phenotypes influencing pharmacokinetics or pharmacodynamics. |
| popPK | Walker_1985 | irrelevant | 0 | 0 | This is a pharmacopeial assay method validation study measuring drug content in dosage forms, not a pharmacokinetic study; it reports recovery percentages, not disposition parameters. |
| PGx | Walker_1985 | not_relevant | 0 | 0 | The paper describes a general liquid chromatography method for drug assay and does not investigate pharmacogenomics or PK/PD parameters. |
| popPK | Yehia_2020 | irrelevant | 0 | 0 | The paper is a pharmaceutical analysis study focusing on spectral resolution and multivariate algorithms, not pharmacokinetics. |
| PGx | Yehia_2020 | not_relevant | 0 | 0 | The paper focuses on analytical chemistry methods for mixture quantification, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Zur_2013 | irrelevant | 0 | 0 | The paper is a review of pathology and compounding opportunities without any original pharmacokinetic data or quantitative disposition parameters for doxylamine. |
| PGx | Zur_2013 | not_relevant | 0 | 0 | The text is a review of compounding opportunities for nausea and vomiting treatments and does not contain any data on pharmacogenomics or gene-variant effects on doxylamine PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoxylamine%5D&body=Drug%3A%20doxylamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_doxylamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 21:29 UTC</sub>
