<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;cetrimonium&quot;}]"></div>

# cetrimonium

- **generic name:** cetrimonium
- **ATC codes:** `D08AJ02`, `R02AA17`
- **DrugBank:** [DB01718](https://go.drugbank.com/drugs/DB01718) · **PubChem:** [CID 2681](https://pubchem.ncbi.nlm.nih.gov/compound/2681)
- **molar mass:** 284.5435 g/mol (C19H42N) — DrugBank
- **groups:** approved, investigational

## About

Cetrimonium is a quaternary ammonium cation used as an antiseptic for skin and throat infections. It is applied topically, vaginally, or sublingually in forms such as creams, solutions, and sprays. It is approved and used as a local anti-infective agent.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5065700](https://www.wikidata.org/wiki/Q5065700), [Wikipedia](https://en.wikipedia.org/wiki/Cetrimonium?oldid=1176552182) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Qv_2013_cell_growth](drugs/drug_cetrimonium/pd_Qv_2013_cell_growth.md) | cell growth ← cetyl trimethyl ammonium chloride · inhibition effect | — | Qv XY et al., Toxicity evaluation of two typical surf…, Environmental toxicology an… (2013) | [10.1002/etc.2073](https://doi.org/10.1002/etc.2073) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:15 | 0:03 | 0/0/0 | 1/0/0 | 0/0/0 | 4,378/161 | einfracz / qwen3.8-27b | 2 | 1/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 36 matched, 36 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Qv_2013.pdf` | Qv XY et al., Toxicity evaluation of two typical surf…, Environmental toxicology an… (2013) | pd | 4 | [10.1002/etc.2073](https://doi.org/10.1002/etc.2073) | [23166012](https://www.ncbi.nlm.nih.gov/pubmed/23166012) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-23 20:15 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abdelaziz_2019 | irrelevant | 0 | 0 | The study focuses on pemetrexed and resveratrol delivery, and cetrimonium is not the subject drug nor are any PK parameters for it reported. |
| PD | Abdelaziz_2019 | not_relevant | 0 | 0 | The paper focuses on pemetrexed and resveratrol delivery; cetrimonium is not mentioned, and no PD parameters for it are reported. |
| popPK | Battu_2010 | irrelevant | 0 | 0 | The paper describes the physicochemical characterization of berberine chloride, not the pharmacokinetics of cetrimonium. |
| PD | Battu_2010 | not_relevant | 0 | 0 | The paper focuses on the physicochemical characterization and solubility of berberine chloride, not cetrimonium, and contains no pharmacodynamic or exposure-response data. |
| PGx | Battu_2010 | not_relevant | 0 | 0 | The paper characterizes the physicochemical properties and solubility of berberine chloride, with no mention of cetrimonium, gene variants, or pharmacokinetic parameters. |
| popPK | Biju_2026 | irrelevant | 0 | 0 | A review on endophytic secondary metabolites with no pharmacokinetic data or parameters for cetrimonium. |
| PD | Biju_2026 | not_relevant | 0 | 0 | The paper is a review on endophytic metabolites and does not report any pharmacodynamic or exposure-response data for cetrimonium. |
| popPK | Chang_2021 | irrelevant | 0 | 0 | The study focuses on the froth flotation removal of graphene oxides and does not report pharmacokinetic parameters for cetrimonium. |
| PD | Chang_2021 | not_relevant | 0 | 0 | The paper studies the removal of graphene oxides using cetyl trimethyl ammonium bromide (CTAB) in wastewater treatment, not the pharmacodynamics of cetrimonium in a biological system. |
| PGx | Chang_2021 | not_relevant | 0 | 0 | The paper studies graphene oxide removal via froth flotation using CTAB as a reagent, containing no human pharmacogenomics or cetrimonium pharmacokinetics. |
| popPK | Chen_2016 | irrelevant | 0 | 0 | The paper investigates the physicochemical mechanism of coal slurry aggregation using quaternary ammonium salts, not the pharmacokinetics of cetrimonium. |
| PD | Chen_2016 | not_relevant | 0 | 0 | The paper investigates the physical chemistry of coal slurry aggregation using quaternary ammonium salts and does not mention cetrimonium or report any pharmacodynamic or exposure-response data. |
| PGx | Chen_2016 | not_relevant | 0 | 0 | The paper investigates the physicochemical aggregation of coal particles using quaternary ammonium salts in slurry water, which is unrelated to the pharmacogenomics of cetrimonium. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of voriconazole, not cetrimonium (which is chemically distinct from the carrier CTAC used in this paper). |
| PGx | Chen_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of voriconazole using a specific formulation (nanospray dried powder) and does not involve cetrimonium or any pharmacogenomic analysis of genetic variants affecting drug parameters. |
| popPK | David_2010 | irrelevant | 0 | 0 | The study evaluates mycoplasma inactivation by disinfectants (including cetyltrimethylammonium bromide, which is distinct from cetrimonium) and reports no pharmacokinetic parameters for cetrimonium. |
| PGx | David_2010 | not_relevant | 0 | 0 | The paper evaluates mycoplasma inactivation by chemical agents (including cetyltrimethylammonium bromide, not cetrimonium) and contains no human pharmacogenomic data. |
| popPK | Davies_2018 | irrelevant | 0 | 0 | Study protocol for TDM of second-line antituberculosis drugs; cetrimonium is not a subject drug and no PK parameters are reported. |
| PD | Davies_2018 | not_relevant | 0 | 0 | The paper is a study protocol for a prospective observational cohort and does not report any results, data, or numeric PD parameters. |
| popPK | Dong_2018 | irrelevant | 0 | 0 | The paper investigates the adsorption of Chromium(VI) onto a surfactant-modified substrate, not the pharmacokinetics of cetrimonium. |
| PD | Dong_2018 | not_relevant | 0 | 0 | The paper investigates the adsorption of Chromium(VI) onto a surfactant-modified substrate and does not involve the drug cetrimonium or any pharmacodynamic analysis. |
| PGx | Dong_2018 | not_relevant | 0 | 0 | The paper focuses on the environmental adsorption of Chromium(VI) onto a chemically modified substrate and is completely unrelated to cetrimonium or human pharmacogenomics. |
| popPK | Fatoki_2020 | irrelevant | 0 | 0 | In silico docking/PK prediction study of excipients including CTAB; no measured disposition parameters for cetrimonium. |
| popPK | Gurjar_2018 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of excipient effects on P-glycoprotein transport using digoxin as a substrate, and does not report pharmacokinetic parameters for cetrimonium. |
| PGx | Gurjar_2018 | not_relevant | 0 | 0 | The paper investigates the effect of excipients on P-gp activity using digoxin as a substrate and does not mention cetrimonium or any pharmacogenomic variants. |
| popPK | Huang_2005 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of penicillins (e.g., ampicillin) using cetyltrimethylammonium bromide (CTMAB) as a reagent, not cetrimonium as the subject drug. |
| PGx | Huang_2005 | not_relevant | 0 | 0 | The paper reports pharmacokinetic methods for penicillin using cetyltrimethylammonium bromide as a reagent, not cetrimonium, and does not report any pharmacogenomic effects. |
| popPK | Huang_2019 | irrelevant | 0 | 0 | The paper is a study on microalgae harvesting using surfactants (specifically a Gemini surfactant and CTAB), not a pharmacokinetic study of cetrimonium. |
| PD | Huang_2019 | not_relevant | 0 | 0 | The paper discusses a Gemini surfactant (BCBD) and compares it to CTAB, but does not report any pharmacodynamic or exposure-response relationship for cetrimonium (or any other drug) with numeric PD parameters. |
| PGx | Huang_2019 | not_relevant | 0 | 0 | The paper discusses a surfactant used for harvesting microalgae and contains no information regarding cetrimonium, pharmacokinetics, pharmacodynamics, or pharmacogenomics. |
| popPK | Li_2026 | irrelevant | 0 | 0 | In vitro E. coli evolution study of resistance selection; no pharmacokinetic parameters for cetrimonium are reported. |
| PD | Li_2026 | not_relevant | 0 | 0 | The paper focuses on evolutionary microbiology and antibiotic resistance mechanisms in E. coli, not pharmacodynamic modeling or exposure-response relationships for cetrimonium. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study focuses on the adsorption of 2,4-dichlorophenol by CTAB-modified biochar, not the pharmacokinetics of cetrimonium. |
| PD | Liu_2021 | not_relevant | 0 | 0 | The paper describes the adsorption of a chemical pollutant (2,4-DCP) by a modified biochar material, which is a physicochemical/environmental engineering study, not a pharmacodynamic or exposure-response study of a drug. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper studies the environmental adsorption of 2,4-dichlorophenol by biochar modified with cetyltrimethylammonium bromide (CTAB) and does not involve cetrimonium, human pharmacokinetics, or pharmacogenomics. |
| popPK | Liu_2021_2 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study of cetrimonium bromide (CTAB) on autophagy and lipid clearance in cell lines, reporting no pharmacokinetic parameters. |
| PGx | Liu_2021_2 | not_relevant | 0 | 0 | The paper investigates the molecular mechanisms of cetrimonium bromide (TFEB-mediated autophagy) in cells and contains no data on pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Marchianò_2023 | irrelevant | 0 | 0 | This is a formulation/nanovesicle study of vanillin; CTAB is only an excipient surfactant, with no PK parameters for cetrimonium. |
| popPK | Moawed_2023 | irrelevant | 0 | 0 | The study focuses on the antitumor efficacy of a copper-CTAB complex in vitro and in vivo, reporting no pharmacokinetic parameters for cetrimonium. |
| popPK | Mrestani_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cefodizime, not cetrimonium. |
| PGx | Mrestani_2004 | not_relevant | 0 | 0 | The study investigates the effect of absorption enhancers on the pharmacokinetics of cefodizime, not the effect of gene variants on cetrimonium. |
| popPK | Nagireddi_2019 | irrelevant | 0 | 0 | The paper describes the adsorption of Palladium(II) by a chitosan-based resin in synthetic electroless plating solutions and does not involve the drug cetrimonium or any pharmacokinetic analysis. |
| PD | Nagireddi_2019 | not_relevant | 0 | 0 | The paper discusses the adsorption of Palladium (Pd) from plating solutions, not the pharmacodynamics of the drug cetrimonium. |
| PGx | Nagireddi_2019 | not_relevant | 0 | 0 | The paper studies palladium adsorption in electroplating solutions, not the pharmacogenomics of cetrimonium. |
| popPK | Pejaver_1985 | irrelevant | 0 | 0 | The study is an in-vitro chemical kinetics investigation regarding liposome stability and ester hydrolysis, not a pharmacokinetic study of cetrimonium disposition. |
| PGx | Pejaver_1985 | not_relevant | 0 | 0 | The paper describes chemical hydrolysis rates in liposomal suspensions and does not involve human pharmacogenomics or PK/PD parameters. |
| popPK | Qv_2013 | irrelevant | 0 | 0 | The paper studies the toxicity of surfactants SDBS and CTAC on algae, not the pharmacokinetics of the drug cetrimonium. |
| PGx | Qv_2013 | not_relevant | 0 | 0 | The paper investigates the toxicity of surfactants (SDBS and CTAC) on algae, not the pharmacogenomics of cetrimonium. |
| popPK | Saravani_2017 | irrelevant | 0 | 0 | The paper studies phenol removal using Cetyl Trimethyl Ammonium Bromide (CTAB) as a surfactant, not cetrimonium as a subject drug, and contains no pharmacokinetic parameters. |
| PD | Saravani_2017 | not_relevant | 0 | 0 | The paper describes a chemical engineering process (foam separation/biosorption) for phenol removal using a surfactant, not a pharmacodynamic or exposure-response analysis of a drug. |
| popPK | Shi_2021 | irrelevant | 0 | 0 | The study investigates the use of the surfactant CTAB for waste activated sludge pretreatment, not the pharmacokinetics of cetrimonium. |
| PD | Shi_2021 | not_relevant | 0 | 0 | The paper investigates the effect of cetyl trimethyl ammonium bromide (CTAB), not cetrimonium, and focuses on sludge treatment engineering parameters rather than pharmacodynamic exposure-response relationships. |
| PGx | Shi_2021 | not_relevant | 0 | 0 | The paper investigates surfactant-assisted thermal hydrolysis of sludge and does not involve cetrimonium or any pharmacogenomic effects. |
| popPK | Smith_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oxycodone, and cetrimonium (cetavlon) is used only as a modifier in the HPLC mobile phase, not as the subject drug. |
| PGx | Smith_1991 | not_relevant | 0 | 0 | The paper describes an HPLC method for oxycodone and does not involve cetrimonium or any pharmacogenomic analysis. |
| popPK | Song_2022 | irrelevant | 0 | 0 | This is an electrochemical biosensor paper for rutin; CTAB is only an electrode modifier, not a pharmacokinetic subject, and no PK parameters appear. |
| popPK | Su_2012 | irrelevant | 0 | 0 | The study investigates the biodistribution of gold nanorods in mice, not the pharmacokinetics of cetrimonium. |
| PGx | Su_2012 | not_relevant | 0 | 0 | The paper studies the biodistribution of gold nanorods and does not involve cetrimonium or any pharmacogenomic analysis. |
| popPK | Taghavijeloudar_2019 | irrelevant | 0 | 0 | The paper investigates the effect of the surfactant CTAB on microalgae dewaterability in a filtration context, not the pharmacokinetics of cetrimonium. |
| PD | Taghavijeloudar_2019 | not_relevant | 0 | 0 | The paper investigates the effect of surfactants on microalgae dewaterability (filtration flux), which is a physicochemical engineering process, not a pharmacodynamic (drug-response) relationship in a biological system. |
| PGx | Taghavijeloudar_2019 | not_relevant | 0 | 0 | The paper investigates the effect of surfactants on microalgae dewaterability and contains no data regarding cetrimonium or pharmacogenomic effects on pharmacokinetic/pharmacodynamic parameters. |
| popPK | Xu_2009 | irrelevant | 0 | 0 | The study focuses on hemoglobin-loaded polymeric nanoparticles modified with CTAB, not the pharmacokinetics of cetrimonium itself. |
| PGx | Xu_2009 | not_relevant | 0 | 0 | The study investigates the effect of surface charge on the PK of hemoglobin-loaded nanoparticles, not a pharmacogenomic effect on cetrimonium. |
| popPK | Xu_2016 | irrelevant | 0 | 0 | The study investigates the biodistribution of paclitaxel, not cetrimonium, and cetrimonium is not the subject drug or a metabolite. |
| PGx | Xu_2016 | not_relevant | 0 | 0 | The paper studies paclitaxel delivery using CTAB (cetyltrimethylammonium bromide), not cetrimonium, and does not report pharmacogenomic effects. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | This is a materials-science/antifungal study of a CTMAB-containing compound; no pharmacokinetic parameters for cetrimonium are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcetrimonium%5D&body=Drug%3A%20cetrimonium%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cetrimonium/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
