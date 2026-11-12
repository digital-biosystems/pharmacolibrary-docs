<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Farnesol&quot;}]"></div>

# Farnesol

- **generic name:** Farnesol
- **T3DB:** [T3D4811](http://www.t3db.ca/toxins/T3D4811) · **DrugBank:** [DB02509](https://go.drugbank.com/drugs/DB02509) · **PubChem:** [CID 1549107](https://pubchem.ncbi.nlm.nih.gov/compound/1549107)
- **groups:** investigational

## About

Farnesol is a signaling molecule that is derived from farnesyl diphosphate, an intermediate in the isoprenoid/cholesterol biosynthetic pathway. Farnesol is a 15 carbon isoprenoid alcohol is the corresponding dephosphorylated form of the isoprenoid farnesyl diphosphate. Farnesol has a potential role in controlling the degradation of 3-hydroxy-3-methylglutaryl coenzyme A (HMGCoA) reductase (EC 1.1.1.34, NADPH-hydroxymethylglutaryl-CoA reductase). …

- **Category:** Cigarette Toxin, Household Toxin, Food Toxin, Natural Toxin, Animal Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4811">T3DB T3D4811</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 4602-84-0 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:28600">ChEBI 28600</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| farnesol | parent | 222.372 | C15H26O | PubChem | [1549107](https://pubchem.ncbi.nlm.nih.gov/compound/1549107) | Zhu_2024 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Zhu_2024_reference](drugs/toxin_farnesol/Farnesol_Zhu2024_reference.md) | — | retention function (no model) | 4 | Zhu Y et al., GC-MS method for simultaneous determina…, Heliyon (2024) | [10.1016/j.heliyon.2024.e32444](https://doi.org/10.1016/j.heliyon.2024.e32444) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Correll_1994_HMG_CoA_reductase_degradation](drugs/toxin_farnesol/pd_Correll_1994_HMG_CoA_reductase_degradation.md) | degradation of 3-hydroxy-3-methylglutaryl-coenzyme A reductase biomarker turnover ← farnesol | — | Correll CC et al., Identification of farnesol as the non-s…, The Journal of biological c… (1994) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=farnesol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `MAOB` inhibitor | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: NR1H4 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 16:52 | 33:53 | 1/0/0 | 1/0/0 | 0/0/0 | 273,875/10,369 | einfracz / qwen3.8-27b | 25 | 1/7 | 25/0 | 0 |

## Coverage

- **PubMed hits:** 367 matched, 89 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2024 | irrelevant | 0 | 0 | The paper describes molecular docking and dynamics simulations (in silico) assessing binding affinity to mTOR, containing no toxicokinetic or pharmacokinetic parameters for farnesol. |
| popPK | Bandara_2016 | irrelevant | 0 | 0 | The paper is an in vitro antimicrobial efficacy study using farnesol as a co-delivered agent, and it reports no toxicokinetic parameters such as half-life, clearance, or partition coefficients for farnesol. |
| popPK | Bringmann_2000 | irrelevant | 0 | 0 | The paper reports electrophysiological effects (IC50 values for ion channel modulation) of farnesol on human retinal glial cells, which are pharmacodynamic/mechanistic data, not toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| PGx | Chen_2014 | not_relevant | 0 | 0 | The paper is a review on bile acid metabolism in cholestasis; it does not report pharmacokinetic or pharmacodynamic parameters for the drug farnesol itself. |
| popPK | Crispim_2024 | irrelevant | 0 | 0 | The paper investigates the metabolic enzyme PolK in malaria parasites and reports IC50 values for drugs, but does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for farnesol itself. |
| PGx | Cuko_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP2B6 induction by farnesol and cholesterol biosynthesis inhibitors, but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Davidson_2006 | irrelevant | 0 | 0 | The paper discusses the Farnesoid X Receptor (FXR) in the context of omega-3 fatty acid metabolism, not the toxicokinetics of the substance farnesol itself. |
| PGx | DeBarber_2004 | not_relevant | 0 | 0 | The paper describes the enzymatic metabolism of farnesol by CYP2E1 and CYP2C19 but does not investigate the effect of specific genetic variants (genotypes/phenotypes) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Guan_2003 | irrelevant | 0 | 0 | The paper focuses on gene expression and molecular cloning, using farnesol only as a pharmacological inhibitor to test signaling mechanisms, and contains no toxicokinetic parameters for farnesol. |
| popPK | Hargarten_2023 | irrelevant | 0 | 0 | The paper focuses on the immunological effects and pathogenesis of farnesol in mice, reporting no quantitative toxicokinetic parameters (e.g., clearance, half-life, partition coefficients). |
| popPK | Horev_2015 | irrelevant | 1 | 1 | The paper reports a formulation-specific release half-life from nanoparticles rather than an in vivo toxicokinetic parameter (clearance, Vd, or biological half-life) for the substance farnesol itself. |
| popPK | Jothi_2021 | irrelevant | 0 | 0 | The paper uses farnesol only as a positive control and reference molecule in molecular docking studies; it does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for farnesol. |
| popPK | Leonhardt_2015 | irrelevant | 0 | 0 | The paper is an immunological study focusing on the functional effects of farnesol on human immune cells (activation markers, cytokine release, T cell proliferation) and contains no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| PGx | Liu_2023 | not_relevant | 0 | 0 | The paper studies oleanolic acid, not farnesol, and focuses on signaling pathways rather than pharmacogenomic effects on farnesol PK/PD. |
| popPK | Madhavan_1973 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| popPK | Moinuddin_2022 | irrelevant | 1 | 0 | The paper focuses on chemical degradation kinetics and *in silico* ADMET predictions rather than in vivo toxicokinetic parameters. |
| PGx | Pant_2019 | not_relevant | 0 | 0 | The study examines the pharmacodynamic effects of farnesol on lipid metabolism in a cell line but does not investigate the impact of any genetic variant or genotype on these responses. |
| PGx | Rodríguez_2019 | not_relevant | 0 | 0 | The paper focuses on the synergistic effects of small-molecule morphogenesis modulators (like farnesol) and beta-peptides in preventing Candida albicans biofilm formation, which is a pharmacodynamic study of antimicrobial efficacy and does not involve pharmacogenomics or genetic variants affecting farnesol's PK/PD. |
| PGx | Rondini_2016 | not_relevant | 0 | 1 | The paper studies the mechanism of CAR activation by farnesol, but does not report a pharmacokinetic or pharmacodynamic effect driven by a genetic variant or genotype. |
| popPK | Shao_2026 | irrelevant | 0 | 0 | The paper is a review of Candida auris resistance mechanisms that mentions farnesol only as a quorum-sensing inhibitor of biofilm formation, without reporting any toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for farnesol. |
| popPK | Shchepin_2005 | irrelevant | 0 | 0 | The paper describes fluorescent analogs of farnesol for imaging and suggests they *could* be used to determine pharmacokinetics, but it reports no kinetic parameters or data for farnesol itself. |
| PGx | Staines_2004 | not_relevant | 0 | 0 | The paper characterizes farnesol metabolism by UGTs but does not report any gene variant, genotype, or phenotype effects on PK/PD parameters. |
| popPK | Tang_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on fungal quorum sensing where farnesol appears only as a biological signal molecule measured to demonstrate pathway upregulation, with no kinetic parameters (half-life, clearance, partition coefficients) reported for farnesol as a toxicological subject. |
| popPK | Tao_2024 | irrelevant | 0 | 0 | The paper is a review of the plant *Peucedanum decursivum* and explicitly states that pharmacokinetic investigations are needed, meaning no kinetic data is presented. |
| PGx | Yang_2005 | not_relevant | 0 | 0 | The paper investigates CYP enzyme expression and activity modulation by green tea; farnesol is only mentioned as an inducer of CYP2C mRNA, not as a drug with PK/PD parameters influenced by genetic variants. |
| popPK | Yin_2023 | irrelevant | 0 | 0 | The paper studies the effect of *Klebsiella quasipneumoniae* on bile acid metabolism and intestinal integrity; "farnesol" is not the subject (only "farnesol X receptor" or bile acids are mentioned), and no toxicokinetic parameters for farnesol are reported. |
| PGx | Zhou_2026 | not_relevant | 0 | 0 | The study investigates cholestatic liver injury and bile acid metabolism using FXR/NRF2 agonists in rats, and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of farnesol. |
| PGx | Špičáková_2019 | not_relevant | 0 | 0 | The paper investigates enzyme inhibition by sesquiterpenes but does not study gene variants, genotypes, or phenotypes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfarnesol%5D&body=Drug%3A%20farnesol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_farnesol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 16:48 UTC</sub>
