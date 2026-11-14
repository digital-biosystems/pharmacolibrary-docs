<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Pyrocatechol&quot;}]"></div>

# Pyrocatechol

- **generic name:** Pyrocatechol
- **T3DB:** [T3D4575](http://www.t3db.ca/toxins/T3D4575) · **DrugBank:** [DB02232](https://go.drugbank.com/drugs/DB02232) · **PubChem:** [CID 289](https://pubchem.ncbi.nlm.nih.gov/compound/289)
- **groups:** experimental

## About

Pyrocatechol, often known as catechol or benzene-1,2-diol, is a benzenediol, with formula C6H4(OH)2. It was first prepared in 1839 by H. Reinsch by distilling catechin (the juice of Mimosa catechu). …

- **Category:** Cigarette Toxin, Pesticide, Household Toxin, Pollutant, Airborne Pollutant, Food Toxin, Synthetic Toxin
- **Sources and uses:** This is a man-made compound that is used as a pesticide.
- **Carcinogenicity:** IARC group 2B, possibly carcinogenic to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4575">T3DB T3D4575</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 120-80-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:18135">ChEBI 18135</a></small></p>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pyrocatechol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CA12 (inhibitor), CA2 (inhibitor), CA4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 00:46 | 1:09:52 | 0/0/0 | 0/0/0 | 0/0/0 | 1,582,123/50,279 | einfracz / qwen3.8-flash-next | 83 | 12/63 | 83/0 | 0 |

## Coverage

- **PubMed hits:** 1287 matched, 288 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_15 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Qu_2003.pdf` | Qu Q et al., Validation and evaluation of biomarkers…, Research report (Health Eff… (2003) | popPK | 5 |  | [12931845](https://pubmed.ncbi.nlm.nih.gov/12931845) | The paper reports a half-life for catechol, but this value is derived from a study on benzene-exposed workers where catechol appears solely as a minor urinary metabolite/biomarker alongside phenol and others, rather than as the primary toxicokinetic subject. |
| `Alqahtani_2015.pdf` | Alqahtani S et al., Development of a physiologically based…, Biopharmaceutics & drug dis… (2015) | pd | 5 | [10.1002/bdd.1986](https://doi.org/10.1002/bdd.1986) | [26295926](https://www.ncbi.nlm.nih.gov/pubmed/26295926) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Vermeulen_2023.pdf` | Vermeulen R et al., Nonlinear low dose hematotoxicity of be…, Environment international (2023) | pd | 5 | [10.1016/j.envint.2023.108007](https://doi.org/10.1016/j.envint.2023.108007) | [37290291](https://www.ncbi.nlm.nih.gov/pubmed/37290291) | metadata signals extractable PD data (exposureresponse) |
| `Gao_2017.pdf` | Gao S et al., Catechol-O-methyltransferase gene promo…, European psychiatry : the j… (2017) | pgx | 8 | [10.1016/j.eurpsy.2017.03.002](https://doi.org/10.1016/j.eurpsy.2017.03.002) | [28545007](https://www.ncbi.nlm.nih.gov/pubmed/28545007) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Meaden_2021.pdf` | Meaden CW et al., A review of the existing literature on…, The pharmacogenomics journal (2021) | pgx | 8 | [10.1038/s41397-020-00198-1](https://doi.org/10.1038/s41397-020-00198-1) | [33154520](https://www.ncbi.nlm.nih.gov/pubmed/33154520) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Saiz-Rodríguez_2019.pdf` | Saiz-Rodríguez M et al., Polymorphisms associated with fentanyl…, Basic & clinical pharmacolo… (2019) | pgx | 8 | [10.1111/bcpt.13141](https://doi.org/10.1111/bcpt.13141) | [30281924](https://www.ncbi.nlm.nih.gov/pubmed/30281924) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Scanlon_1979.pdf` | Scanlon PD et al., Catechol-O-methyltransferase: thermolab…, Science (New York, N.Y.) (1979) | pgx | 8 | [10.1126/science.758679](https://doi.org/10.1126/science.758679) | [758679](https://www.ncbi.nlm.nih.gov/pubmed/758679) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Schwartz_2004.pdf` | Schwartz GL et al., Pharmacogenetics of antihypertensive dr…, American journal of pharmac… (2004) | pgx | 8 | [10.2165/00129785-200404030-00002](https://doi.org/10.2165/00129785-200404030-00002) | [15174896](https://www.ncbi.nlm.nih.gov/pubmed/15174896) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kohalmy_2011.pdf` | Kohalmy K et al., Regulation of phase II biotransformatio…, Current drug metabolism (2011) | pgx | 7 | [10.2174/138920011795016872](https://doi.org/10.2174/138920011795016872) | [21401512](https://www.ncbi.nlm.nih.gov/pubmed/21401512) | metadata signals extractable PGX data (COMT, PK/PD-context) |
| `Aksoy_1993.pdf` | Aksoy S et al., Catechol O-methyltransferase pharmacoge…, Pharmacogenetics (1993) | pgx | 5 | [10.1097/00008571-199304000-00008](https://doi.org/10.1097/00008571-199304000-00008) | [8518836](https://www.ncbi.nlm.nih.gov/pubmed/8518836) | metadata signals extractable PGX data (COMT) |
| `Geisel_2003.pdf` | Geisel J et al., The role of genetic factors in the deve…, Clinical chemistry and labo… (2003) | pgx | 5 | [10.1515/CCLM.2003.219](https://doi.org/10.1515/CCLM.2003.219) | [14656021](https://www.ncbi.nlm.nih.gov/pubmed/14656021) | metadata signals extractable PGX data (COMT) |
| `Matic_2017.pdf` | Matic M et al., Analgesia and Opioids: A Pharmacogeneti…, Clinical chemistry (2017) | pgx | 5 | [10.1373/clinchem.2016.264986](https://doi.org/10.1373/clinchem.2016.264986) | [28637770](https://www.ncbi.nlm.nih.gov/pubmed/28637770) | metadata signals extractable PGX data (CYP2D6) |
| `Oertel_2008.pdf` | Oertel B et al., Genetic mutations that prevent pain: im…, Pharmacogenomics (2008) | pgx | 5 | [10.2217/14622416.9.2.179](https://doi.org/10.2217/14622416.9.2.179) | [18370847](https://www.ncbi.nlm.nih.gov/pubmed/18370847) | metadata signals extractable PGX data (COMT) |
| `Oroszi_2004.pdf` | Oroszi G et al., Alcoholism: genes and mechanisms, Pharmacogenomics (2004) | pgx | 5 | [10.1517/14622416.5.8.1037](https://doi.org/10.1517/14622416.5.8.1037) | [15584875](https://www.ncbi.nlm.nih.gov/pubmed/15584875) | metadata signals extractable PGX data (COMT) |
| `Weinshilboum_1984.pdf` | Weinshilboum RM, Human pharmacogenetics of methyl conjug…, Federation proceedings (1984) | pgx | 5 |  | [6714437](https://www.ncbi.nlm.nih.gov/pubmed/6714437) | metadata signals extractable PGX data (COMT) |

<sub>queue written 2026-11-13 00:40 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agema_2020 | not_relevant | 0 | 0 | The paper investigates COMT variants' effect on cisplatin-induced nephrotoxicity (clinical toxicity/adverse event), not a pharmacokinetic or pharmacodynamic parameter of pyrocatechol. |
| PGx | Aksoy_1993 | not_relevant | 0 | 0 | The paper investigates the molecular characteristics (M(r) and pI) of the COMT enzyme itself across phenotypes, rather than reporting changes in pharmacokinetic or pharmacodynamic parameters of a drug (including pyrocatechol). |
| popPK | Al-Akeedi_2024 | irrelevant | 0 | 0 | The paper focuses on designing anthraquinone amide derivatives as Glyoxalase-I inhibitors; pyrocatechol (catechol) is only mentioned as a chemical functional group (zinc-binding moiety) within these synthetic compounds, with no toxicokinetic parameters for pyrocatechol itself. |
| popPK | Alqahtani_2015 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics of entacapone, not pyrocatechol; pyrocatechol is not the subject substance. |
| PGx | Altimiras_2021 | not_relevant | 0 | 0 | The paper analyzes gut microbiota composition in Fragile X Syndrome mice and does not study pyrocatechol as a drug or report pharmacokinetic/pharmacodynamic effects of a drug. |
| PGx | Angelopoulou_2023 | not_relevant | 0 | 0 | The paper discusses genetic associations with depression in Parkinson's disease and does not report pharmacogenomic effects on PK or PD parameters for pyrocatechol. |
| popPK | Arkhipov_2025 | irrelevant | 0 | 0 | The paper reports micelle-water partition coefficients for chemical solubilization in an analytical chemistry context, not toxicokinetic parameters in biological systems. |
| popPK | Armando_2012 | irrelevant | 0 | 0 | The paper is a review of genetic associations in 22q11 deletion syndrome, containing no toxicokinetic parameters for pyrocatechol. |
| popPK | Aubrun_2018 | irrelevant | 0 | 0 | The paper is a clinical study on morphine pharmacogenetics; pyrocatechol is not studied, and no kinetic parameters for it are reported. |
| popPK | Azanza_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for cefiderocol, a drug containing a catechol ring, but not for pyrocatechol itself. |
| popPK | Aziz_2017 | irrelevant | 0 | 0 | The paper reports on MALDI-MSI imaging of urushiols (catechol derivatives) in poison ivy plants for spatial localization, containing no toxicokinetic parameters for pyrocatechol. |
| popPK | Baas_2001 | irrelevant | 1 | 0 | The paper focuses on levodopa and tolcapone pharmacokinetics, mentioning catechol only as part of enzyme names (COMT) without reporting any kinetic parameters for pyrocatechol. |
| PGx | Baldo_2023 | not_relevant | 0 | 0 | The paper does not mention pyrocatechol, and pyrocatechol is a metabolite/endogenous compound rather than a administered drug with standard pharmacokinetic parameters. |
| popPK | Baumann_2017 | irrelevant | 0 | 0 | The paper focuses on MDPV neuropharmacology, mentioning 3,4-catechol-PV (a methylenedioxypyrovalerone derivative, not pyrocatechol) only briefly without reporting quantitative toxicokinetic parameters for pyrocatechol itself. |
| popPK | Baumgarten_2004 | irrelevant | 0 | 0 | The paper discusses neurotoxins and mechanisms of neurotoxicity involving catechol-like metabolites of amphetamines but provides no quantitative toxicokinetic parameters for pyrocatechol itself. |
| popPK | Beaumont_1996 | irrelevant | 0 | 0 | The paper focuses entirely on the toxicokinetics of zamifenacin; pyrocatechol is mentioned only as a chemical metabolite structure without reported quantitative kinetic parameters for the substance itself. |
| popPK | Bet_2008 | irrelevant | 0 | 0 | The paper focuses on levodopa pharmacokinetics in the presence of entacapone and does not report toxicokinetic parameters for pyrocatechol. |
| popPK | Boehler_2026 | irrelevant | 0 | 0 | The paper is a metabolomic effect study showing changes in endogenous catechol levels in urine, reporting no toxicokinetic parameters (half-life, clearance, Vmax/Km, etc.) for pyrocatechol. |
| popPK | Bois_1992 | irrelevant | 0 | 0 | The paper focuses on benzene toxicokinetics; pyrocatechol (catechol) is mentioned only as a metabolite product of benzene, with no kinetic parameters reported for pyrocatechol itself. |
| PGx | Boudíková_1990 | not_relevant | 2 | 0 | The text discusses the genetic polymorphism affecting COMT enzyme activity and thermal stability in liver and red blood cells, but does not report pharmacokinetic or pharmacodynamic parameters for pyrocatechol. |
| popPK | Budygin_1999 | irrelevant | 0 | 0 | The study focuses on dopaminergic transmission and the effects of tolcapone and GBR 12909 on dopamine, with no mention of pyrocatechol or its kinetic parameters. |
| PGx | Bélanger_1995 | not_relevant | 0 | 0 | The paper focuses on the expression of steroid UDP-glucuronosyltransferases in prostate tissue and cells, with no mention of pyrocatechol or pharmacogenomic effects on drug parameters. |
| PGx | Cacabelos_2017 | not_relevant | 0 | 0 | The text discusses Parkinson's disease pharmacogenomics (e.g., L-DOPA, COMT inhibitors) and does not mention pyrocatechol or any pharmacokinetic/pharmacodynamic effects related to it. |
| PGx | Cardoso_2017 | not_relevant | 0 | 0 | The paper investigates CYP2D6 and IL6 polymorphisms in the context of Schistosoma haematobium infection and estrogen metabolism, not the pharmacokinetics or pharmacodynamics of pyrocatechol. |
| popPK | Carrica_2026 | irrelevant | 0 | 0 | The paper studies COMT protein expression in rats exposed to methamphetamine, not pyrocatechol toxicokinetics or related quantitative parameters. |
| popPK | Casarelli_2016 | irrelevant | 0 | 0 | The paper discusses COMT enzyme and dopamine dysfunction in 22q11 deletion syndrome with no quantitative toxicokinetic parameters for pyrocatechol. |
| popPK | Cedarbaum_1990 | irrelevant | 0 | 0 | The paper focuses on levodopa, 3-O-methyldopa, and nitecapone kinetics in monkeys, with no mention of pyrocatechol parameters. |
| popPK | Chakraborty_1989 | irrelevant | 0 | 0 | The paper reports enzyme kinetics for estrogen hydroxylation in pig conceptuses, not toxicokinetic parameters for pyrocatechol. |
| popPK | Chaojie_2007 | irrelevant | 1 | 0 | The paper focuses on the biodegradation of fluorophenols, mentioning catechol only as an intermediate of a different substance, with no kinetic parameters for pyrocatechol itself. |
| PGx | Chaudhary_2021 | not_relevant | 0 | 0 | The paper is a meta-analysis on the association between the COMT Val158Met polymorphism and alcohol dependence (a disease trait), not on the pharmacokinetics or pharmacodynamics of pyrocatechol. |
| popPK | Chen_2011 | irrelevant | 0 | 0 | The paper focuses on estrogen quinone-protein adducts and pyrocatechol (catechol) is not the subject substance nor are any toxicokinetic parameters for pyrocatechol reported. |
| PGx | Chen_2017 | not_relevant | 0 | 0 | The paper discusses herb-drug interactions involving Salvia miltiorrhiza and does not mention pyrocatechol or any gene variants/pharmacogenomic effects on pyrocatechol PK/PD. |
| popPK | Chen_2018 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of a 7,8-dihydroxyflavone prodrug (R13) and its metabolite, with catechol mentioned only as a structural moiety modified during synthesis, not as the subject substance of kinetic study. |
| popPK | Cherner_2019 | irrelevant | 0 | 0 | The paper is a genetic association study regarding dopamine clearance and executive function, containing no toxicokinetic data for pyrocatechol. |
| popPK | Chong_2000 | irrelevant | 0 | 0 | The paper is a review about the pharmacology of entacapone and does not report any kinetic parameters for pyrocatechol. |
| popPK | Cockerham_2016 | irrelevant | 0 | 0 | The paper discusses dopamine metabolism and the enzyme COMT in the mouse olfactory bulb, mentioning catechols only in the context of enzymatic pathways, with no quantitative kinetic parameters for pyrocatechol as a subject substance. |
| popPK | Concheiro_2022 | irrelevant | 0 | 0 | The paper reports kinetics for MDPV and its specific metabolites (3,4-catechol-PV), not pyrocatechol; pyrocatechol is not the subject substance. |
| popPK | Cong_2022 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of opicapone and its metabolite BIA 9-1103, not pyrocatechol. |
| PGx | Crews_2021 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of opioids (codeine, tramadol, etc.) and genes (CYP2D6, OPRM1, COMT) but does not mention pyrocatechol as a drug being studied for PK/PD parameters. |
| PGx | Crisafulli_2011 | not_relevant | 0 | 0 | The paper is a review of pharmacogenetics of antidepressants and does not mention pyrocatechol at all. |
| popPK | Cummings_1990 | irrelevant | 0 | 10 | The paper reports the pharmacokinetics of gamma-L-glutamyl-L-dopa (gludopa) and its metabolites, with no quantitative kinetic parameters reported for pyrocatechol. |
| popPK | Dai_2020 | irrelevant | 0 | 0 | The paper focuses on piceatannol metabolism, mentioning catechol-O-methyltransferase (COMT) as an enzyme but providing no quantitative kinetic parameters for pyrocatechol itself. |
| PGx | Dehal_1994 | not_relevant | 0 | 0 | The paper describes enzyme induction and in vitro metabolism pathways, not pharmacogenomic (genotype) effects on PK/PD parameters in humans. |
| popPK | Deleu_2002 | irrelevant | 0 | 0 | The paper is a review of Parkinson's disease drug pharmacokinetics (e.g., levodopa, selegiline) and does not mention pyrocatechol or provide any kinetic parameters for it. |
| popPK | Ding_1998 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of the COMT inhibitor [18F]Ro41-0960 in baboons, not pyrocatechol. |
| popPK | Djukic_2026 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of anti-Parkinson drugs (levodopa, entacapone, etc.) and does not report any toxicokinetic parameters for pyrocatechol. |
| popPK | Dong_2022 | irrelevant | 0 | 0 | The paper focuses on the antimalarial compound RC-12 (WR 27653), not pyrocatechol (catechol); pyrocatechol is not the subject of the toxicokinetic study. |
| popPK | Dong_2024 | irrelevant | 0 | 0 | The paper focuses on the imaging properties of ferrite nanoparticles anchored with catechol, not on the toxicokinetics of free pyrocatechol; no kinetic parameters for pyrocatechol are reported. |
| popPK | Drevin_2024 | irrelevant | 0 | 0 | The paper is a narrative review on MDMA pharmacogenomics and does not report any quantitative toxicokinetic parameters for pyrocatechol. |
| PGx | Drevin_2024 | not_relevant | 0 | 0 | The paper reviews pharmacogenomics of MDMA, not pyrocatechol; pyrocatechol is not the drug of interest. |
| popPK | Ernst_2019 | irrelevant | 0 | 0 | The paper concerns bicyclic hydroxypyridones as COMT inhibitors and does not report any toxicokinetic parameters for pyrocatechol; pyrocatechol is not the subject substance. |
| popPK | Ettcheto_2020 | irrelevant | 0 | 0 | The paper is a review about Opicapone (a COMT inhibitor) and its effect on L-DOPA pharmacokinetics; pyrocatechol (catechol) is mentioned only as a generic chemical substrate for the COMT enzyme, with no specific kinetic parameters reported for it. |
| popPK | Falcão_2016 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of opicapone, where pyrocatechol is merely part of the name/category (catechol-O-methyltransferase inhibitor) and not the subject of kinetic parameters. |
| popPK | Fatima_2023 | irrelevant | 0 | 0 | The paper focuses on Levodopa pharmacokinetics and COMT polymorphisms in Parkinson's disease, with no mention of pyrocatechol or its kinetic parameters. |
| popPK | Federici_2012 | irrelevant | 0 | 0 | The paper is about soil bioremediation of PCBs using maize and soybean oil, with no toxicokinetic data for pyrocatechol in any species. |
| PGx | Fernandez_2012 | not_relevant | 0 | 0 | The paper discusses general pharmacogenomics of analgesics like opioids and does not report specific PK/PD parameters for pyrocatechol. |
| popPK | Ferreira_2022 | irrelevant | 0 | 0 | The paper studies levodopa and 3-OMD pharmacokinetics in humans; pyrocatechol is not the subject substance and no kinetic parameters for pyrocatechol are reported. |
| popPK | Forsberg_2005 | irrelevant | 0 | 0 | The paper studies COMT inhibitors (entacapone, tolcapone) and dopamine metabolites (DOPAC, HVA) in rats, with no toxicokinetic parameters for pyrocatechol. |
| PGx | Fujita_2023 | not_relevant | 0 | 0 | The paper studies pyrocatechol only as a metabolic product of morphine (catalyzed by COMT), not as an administered drug with pharmacogenomic effects on its PK/PD parameters. |
| popPK | Gallagher_2015 | irrelevant | 0 | 0 | The paper studies dopamine metabolism in Parkinson's disease using FDOPA-PET and does not mention pyrocatechol or report its kinetic parameters. |
| PGx | Gao_2017 | not_relevant | 0 | 0 | The paper focuses on COMT promoter methylation in schizophrenia diagnosis, not on pharmacokinetic or pharmacodynamic effects of pyrocatechol. |
| PGx | Geerts_2020 | not_relevant | 0 | 0 | The paper discusses COMT variants affecting endogenous catecholamines (dopamine, norepinephrine), not the exogenous drug 'pyrocatechol'. No PK or PD parameters for pyrocatechol are reported. |
| PGx | Geisel_2003 | not_relevant | 0 | 0 | The paper reports on endogenous metabolic markers (homocysteine, B12, folate) and does not evaluate the pharmacokinetics or pharmacodynamics of pyrocatechol or any specific drug. |
| popPK | Gori_2022 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of D-DOPA, L-DOPA, and caffeic acid; pyrocatechol (catechol) is not the subject substance and no kinetic parameters for it are reported. |
| popPK | Gottwald_1997 | irrelevant | 0 | 0 | The paper focuses on antiparkinsonian drugs (pramipexole, ropinirole, cabergoline, entacapone, tolcapone) and does not report any kinetic parameters for pyrocatechol. |
| PGx | Gray_2018 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of opioids, NSAIDs, and other analgesics, but does not mention pyrocatechol. |
| PGx | Gumenku_2024 | not_relevant | 0 | 0 | The paper studies gene expression changes in prostate cancer related to docetaxel resistance; it does not mention pyrocatechol, nor does it report pharmacokinetic or pharmacodynamic parameters of pyrocatechol based on genetic variants. |
| popPK | Haraguchi_2005 | irrelevant | 0 | 0 | The paper studies PCB metabolites (catechol-CBs), not the substance pyrocatechol itself, which is not the subject of the kinetic investigation. |
| popPK | Hartmann_2006 | irrelevant | 0 | 0 | The paper is a review about camptothecin and podophyllotoxin derivatives, mentioning catechols only qualitatively as metabolic intermediates without reporting any quantitative toxicokinetic parameters for pyrocatechol. |
| popPK | Hayashi_2026 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of levodopa and carbidopa, not pyrocatechol; pyrocatechol is not the subject substance for kinetic parameters. |
| popPK | Hebert_2005 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for micafungin, not pyrocatechol; pyrocatechol is not the subject substance. |
| PGx | Heck_2025 | not_relevant | 0 | 0 | The text discusses the in vitro genotoxicity and metabolic pathways of paroxetine and its impurity, not the pharmacogenomic effects of gene variants on the PK or PD of pyrocatechol. |
| popPK | Hegedus_1993 | irrelevant | 0 | 0 | Pyrocatechol is mentioned only as a potential precursor for melanin formation, with no kinetic parameters reported for pyrocatechol itself. |
| PGx | Hernández-Díaz_2024 | not_relevant | 0 | 0 | The paper reviews genetic associations with alexithymia scores (psychological trait), not pharmacokinetic or pharmacodynamic effects of the drug pyrocatechol. |
| popPK | Hofmann_2021 | irrelevant | 0 | 0 | The paper reports on the synthesis and biological activity (amyloid aggregation, oxidative stress, neuroinflammation) of azobenzene bioisosteres of curcumin; it contains no toxicokinetic parameters for pyrocatechol. |
| popPK | Huang_2017 | irrelevant | 0 | 0 | The paper studies the metabolism of licochalcone A, where catechol refers to a structural moiety/metabolite of that compound, not pyrocatechol as the subject substance, and no kinetic parameters are provided. |
| PGx | Ivanets_2015 | not_relevant | 0 | 0 | The paper is a literature review on depression and neurochemical systems, not a study on pyrocatechol pharmacokinetics or pharmacodynamics. |
| popPK | Jan_2010 | irrelevant | 0 | 0 | The paper discusses catechol metabolites of a lignan (sesaminol triglucoside), not the substance pyrocatechol, and lacks quantitative toxicokinetic parameters for pyrocatechol. |
| PGx | Jancova_2010 | not_relevant | 0 | 0 | The paper is a general review of Phase II enzymes and does not report specific pharmacogenomic effect data for pyrocatechol. |
| popPK | Jorga_1998 | irrelevant | 0 | 0 | The paper is a review of tolcapone pharmacokinetics where pyrocatechol (catechol) is only mentioned via the enzyme name COMT (catechol O-methyltransferase) without any kinetic parameters for pyrocatechol itself. |
| popPK | Jorga_1999 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for benserazide, tolcapone, levodopa, and 3-OMD, with pyrocatechol appearing only as a chemical name fragment within metabolite names (trihydroxybenzylhydrazine). |
| popPK | Jorga_2000 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for tolcapone, not pyrocatechol; pyrocatechol is not studied or mentioned as a subject. |
| popPK | Karanewsky_2016 | irrelevant | 0 | 0 | The paper concerns the toxicokinetics of two flavor compounds (S807 and S9229), not pyrocatechol. |
| popPK | Keränen_1994 | irrelevant | 0 | 0 | The paper focuses entirely on the pharmacokinetics of entacapone, not pyrocatechol, which is not mentioned as a subject of kinetic analysis. |
| popPK | Kim_2006 | irrelevant | 2 | 0 | The paper uses catechol as a metabolite biomarker in an exposure-outcome study of benzene and reports no quantitative kinetic parameters (such as half-lives, clearance, or partition coefficients) for catechol itself. |
| popPK | Kitajima_2018 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of opicapone and its effect on COMT, with no mention or quantitative data for pyrocatechol. |
| popPK | Knutsen_2013 | irrelevant | 0 | 0 | The paper focuses on benzene kinetics; pyrocatechol (catechol) is only mentioned as a urinary metabolite for model validation, with no kinetic parameters for pyrocatechol itself. |
| popPK | Kohalmy_2011 | irrelevant | 0 | 0 | The paper is a general review of phase II enzyme regulation and provides no specific quantitative toxicokinetic parameters for pyrocatechol. |
| PGx | Kohalmy_2011 | not_relevant | 0 | 0 | The text is a general review of phase II enzyme regulation by steroid hormones and does not mention pyrocatechol, nor does it report specific pharmacogenomic effects on PK/PD parameters for that drug. |
| popPK | Kolanczyk_2024 | irrelevant | 3 | 2 | The paper focuses on the biotransformation of PHENOL; catechol (pyrocatechol) is merely a metabolite being quantified, and no kinetic parameters for pyrocatechol as the subject substance are reported. |
| popPK | Koller_2024 | irrelevant | 0 | 0 | The paper concerns Titanium (45Ti) radiopharmaceuticals where catechol groups are merely part of the chelator structure; no toxicokinetic parameters for the substance pyrocatechol are reported. |
| popPK | Kono_1981 | irrelevant | 0 | 0 | The paper reports kinetic parameters for 2-hydroxyestrone and estradiol, with pyrocatechol only mentioned as part of the term 'catechol estrogen' and not studied. |
| popPK | Korn_2021 | irrelevant | 0 | 0 | The paper focuses on dopamine clearance mechanisms and behavioral flexibility in mice; it contains no toxicokinetic data or quantitative kinetic parameters for pyrocatechol. |
| popPK | Kosarac_2009 | irrelevant | 0 | 0 | The paper is a review on opioid pharmacogenetics where catechol-O-methyltransferase (an enzyme metabolizing catecholamines) is mentioned, but there are no quantitative kinetic parameters for pyrocatechol itself. |
| PGx | Kosarac_2009 | not_relevant | 0 | 0 | The paper discusses opioid pharmacogenetics and mentions COMT only as an enzyme of interest, but does not report pharmacogenomic effects on parameters for the specific drug pyrocatechol. |
| PGx | Kravtsov_2020 | not_relevant | 0 | 0 | The paper focuses on clozapine pharmacodynamics and dopamine-related genes, not on pyrocatechol. |
| popPK | Larsen_2023 | irrelevant | 0 | 0 | The paper is a structural biology study on Catechol-O-methyltransferase (COMT) enzyme variants and stability, not a toxicokinetic study of pyrocatechol. |
| popPK | LeWitt_2023 | irrelevant | 1 | 0 | The paper reports pharmacokinetics of opicapone, levodopa, and 3-O-methyldopa in Parkinson's patients; pyrocatechol is not the subject and no kinetic parameters for pyrocatechol are reported. |
| popPK | LeWitt_2026 | irrelevant | 0 | 0 | The paper focuses on levodopa and opicapone pharmacokinetics, with no quantitative kinetic parameters for pyrocatechol. |
| PGx | Lee_2024 | not_relevant | 0 | 0 | The paper discusses the metabolism of aschantin and its metabolites (including an aschantin catechol derivative), but does not study the drug pyrocatechol itself, nor does it report pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Lee_2024_2 | irrelevant | 0 | 0 | The paper studies the metabolism of fargesin, mentioning "fargesin catechol" (M1) only as a metabolite identifier, not studying pyrocatechol kinetics. |
| popPK | Lee_2025 | irrelevant | 0 | 0 | The paper studies the metabolism of kobusin, where pyrocatechol is not the subject substance but a structural motif within a lignan metabolite (kobusin catechol), and no quantitative kinetic parameters for pyrocatechol itself are reported. |
| popPK | Lees_2017 | irrelevant | 0 | 0 | The paper focuses on opicapone and L-DOPA, with no quantitative kinetic parameters reported for pyrocatechol. |
| popPK | Lewińska_2022 | irrelevant | 0 | 0 | The paper focuses on quercetin and its derivatives as senolytic agents; pyrocatechol is not the subject substance, and no toxicokinetic parameters for pyrocatechol are reported. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper focuses on bacterial biodegradation of PAHs (phenanthrene and pyrene) using catechol as a metabolite/enrichment substrate, and contains no toxicokinetic parameters for pyrocatechol in any organism. |
| popPK | Li_2024_2 | irrelevant | 0 | 0 | The paper is about a biomedical hydrogel material where catechol moieties are a structural component, not a report of toxicokinetic parameters for pyrocatechol as a substance. |
| popPK | Lin_2009 | irrelevant | 1 | 0 | The paper studies the pharmacokinetics of levodopa, not pyrocatechol, making the subject substance incorrect for extraction. |
| PGx | Liu_2026 | not_relevant | 0 | 0 | The paper describes polycatechol-based antifungal polymers and their mechanism of action, containing no information on pyrocatechol pharmacogenomics, PK, or PD parameters. |
| popPK | Lloret_2009 | irrelevant | 0 | 0 | The paper focuses entirely on morphine pharmacokinetics in obese patients, with catechol-O-methyltransferase mentioned only as a metabolic enzyme, providing no kinetic data for pyrocatechol. |
| popPK | Longcope_1987 | irrelevant | 0 | 0 | The study investigates the metabolism of estradiol in women, mentioning catechol estrogens only as metabolic products, with no quantitative toxicokinetic parameters provided for pyrocatechol itself. |
| popPK | Loureiro_2022 | irrelevant | 0 | 0 | The paper studies the metabolism and disposition of opicapone, not pyrocatechol; pyrocatechol is not the subject substance. |
| popPK | Lucier_1991 | irrelevant | 0 | 0 | The paper focuses on TCDD hepatocarcinogenesis in rats; pyrocatechol (catechol estrogens) is mentioned only as a metabolic product of estradiol catalyzed by CYP1A2, with no quantitative kinetic parameters for pyrocatechol itself provided. |
| PGx | Madsen_2024 | not_relevant | 0 | 0 | The paper studies the effect of COMT genotype on brain glucose metabolism (an endogenous phenotype) in stress patients, not the pharmacokinetics or pharmacodynamics of the drug pyrocatechol. |
| popPK | Magnuson_2024 | irrelevant | 0 | 0 | The paper focuses on bifenthrin toxicity and gene expression (COMT, MAO) in fish, with no toxicokinetic parameters for pyrocatechol. |
| popPK | Marlin_2025 | irrelevant | 0 | 0 | The paper focuses on the radiolabeling and biodistribution of TREN-CAM chelator conjugates for cancer imaging, not the toxicokinetics of pyrocatechol; catechol is mentioned only as part of the chelator structure. |
| popPK | Marrubini_2003 | irrelevant | 1 | 8 | Pyrocatechol (catechol) is measured here only as a urinary metabolite of benzene to assess benzene myelotoxicity; no toxicokinetic parameters (half-life, clearance, etc.) for pyrocatechol are derived or reported. |
| PGx | Martín-Bórnez_2025 | not_relevant | 0 | 0 | The paper investigates the association between COMT variants and Parkinson's disease susceptibility/risk, not the pharmacokinetic or pharmacodynamic parameters of pyrocatechol. |
| PGx | Martín-Bórnez_2025_2 | not_relevant | 0 | 0 | The paper investigates COMT genetic variants in relation to Parkinson's Disease risk and levodopa-induced dyskinesia, but does not report pharmacokinetic or pharmacodynamic effects on pyrocatechol (catecholamine metabolism context is disease mechanism, not drug PGx). |
| PGx | Matic_2017 | not_relevant | 0 | 0 | The paper is a review focused on opioids and analgesia, not pyrocatechol; the drug does not appear in the text. |
| popPK | Maurer_2000 | irrelevant | 0 | 0 | The paper focuses on the metabolites of methylenedioxyamphetamines (MDA, MDMA, etc.) and reviews their toxicokinetics; pyrocatechol is not the subject substance, nor are specific kinetic parameters for pyrocatechol reported. |
| PGx | Maurer_2000 | not_relevant | 0 | 0 | The paper concerns amphetamine derivatives (MDA, MDMA, MDE, BDB, MBDB), not pyrocatechol. While it mentions CYP enzymes, it does not report a pharmacogenomic effect on a PK/PD parameter for pyrocatechol. |
| PGx | Meaden_2021 | not_relevant | 0 | 0 | The paper reviews pharmacogenomics of buprenorphine, not pyrocatechol. |
| popPK | Medeiros_1997 | irrelevant | 2 | 0 | This is a review of benzene biomarkers where catechol is mentioned as a metabolite but no specific toxicokinetic parameters or numeric values for catechol are reported. |
| popPK | Miyaue_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic data for levodopa and its metabolite 3-O-methyldopa, not pyrocatechol; pyrocatechol is not measured or modeled. |
| popPK | Mizutani_1995 | irrelevant | 0 | 0 | The extracted text contains only GrobID metadata and no scientific content or numerical data. |
| popPK | Moridani_2004 | irrelevant | 0 | 0 | The paper reports QSTR equations for cytotoxicity (LD50) of catechols, which are toxicity parameters, not toxicokinetic parameters like clearance, half-life, or partition coefficients. |
| popPK | Müller_2018 | irrelevant | 0 | 0 | The paper is a review of the Parkinson's disease drug safinamide; pyrocatechol is not mentioned as the subject substance. |
| popPK | Müller_2020 | irrelevant | 0 | 0 | The paper focuses on levodopa pharmacokinetics for Parkinson's disease and does not report toxicokinetic parameters for pyrocatechol. |
| popPK | Müller_2024 | irrelevant | 0 | 0 | The paper is a review of levodopa and its metabolite 3-O-methyldopa pharmacokinetics in Parkinson's disease patients, with no quantitative kinetic parameters for pyrocatechol. |
| popPK | Najib_2001 | irrelevant | 0 | 0 | The paper reviews entacapone for Parkinson's disease; pyrocatechol is not the subject substance and no toxicokinetic parameters for pyrocatechol are reported. |
| PGx | Naß_2017 | not_relevant | 0 | 0 | The paper is a review of pharmacogenomics for PTSD treatment drugs (SSRIs, dopamine antagonists, etc.) and does not report on the pharmacokinetics or pharmacodynamics of pyrocatechol, which is not a therapeutic drug. |
| popPK | Nguyen_2025 | irrelevant | 0 | 0 | The paper focuses on marine alkaloid aaptamines for neurodegenerative diseases; pyrocatechol is not the subject, nor are any kinetic parameters reported for it. |
| popPK | Nielsen_2015 | irrelevant | 0 | 0 | The paper is a review of opioid pharmacogenetics and pain response, with no mention of pyrocatechol toxicokinetics. |
| popPK | Nijenhuis_2016 | irrelevant | 0 | 0 | Pyrocatechol is mentioned only as a metabolite name formed from omacetaxine, with no kinetic parameters (rates, volumes, or concentrations specific to pyrocatechol kinetics) reported. |
| popPK | Nishiyama_2015 | irrelevant | 1 | 0 | The word "catechol" appears only as part of the chemical description "catechol primary 5-hydroxylated thalidomide metabolites," referring to thalidomide metabolism, not pyrocatechol itself. |
| PGx | Niwa_2015 | not_relevant | 0 | 0 | The paper reviews steroid hormone metabolism by cytochromes P450 and does not mention pyrocatechol or report pharmacogenomic effects on its PK/PD parameters. |
| popPK | Nomoto_2018 | irrelevant | 0 | 10 | The paper reports pharmacokinetic data for levodopa and its pro-drug ONO-2160 in humans, with no data or parameters reported for pyrocatechol. |
| popPK | Nutt_1994 | irrelevant | 0 | 0 | The paper studies levodopa and entacapone, not pyrocatechol. |
| popPK | Nutt_1996 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| popPK | Nutt_2000 | irrelevant | 1 | 0 | The paper is a review focusing on levodopa and COMT inhibitors, mentioning pyrocatechol only indirectly as a substrate class, with no quantitative kinetic parameters for pyrocatechol itself. |
| PGx | Oertel_2008 | not_relevant | 0 | 0 | The paper discusses genetics of pain and various opioids (morphine, codeine, fentanyl), but does not mention pyrocatechol or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Omoboyowa_2021 | irrelevant | 0 | 0 | The paper focuses on in silico docking of terpenoids from Abrus precatorius against Parkinson's disease proteins, with no toxicokinetic parameters for pyrocatechol. |
| PGx | Oroszi_2004 | not_relevant | 0 | 0 |  |
| popPK | Oróstica_2023 | irrelevant | 0 | 0 | The paper discusses reproductive physiology and 2-methoxyestradiol in rats, with no mention of pyrocatechol toxicokinetics or any kinetic parameters for the substance. |
| PGx | Packiasabapathy_2018 | not_relevant | 0 | 0 | The paper discusses genetics of pain management and opioids, not pyrocatechol. |
| popPK | Pandey_2008 | irrelevant | 0 | 0 | The paper focuses on genotoxicity and biomonitoring of benzene exposure, with pyrocatechol (catechol) mentioned only as a comparator metabolite in an in vitro assay, providing no quantitative toxicokinetic parameters for pyrocatechol. |
| popPK | Parkkila_2020 | irrelevant | 0 | 0 | The paper describes in vitro physicochemical studies of membrane partitioning coefficients (log Dm) for catechol derivatives using surface plasmon resonance and quartz crystal microbalance, which are not toxicokinetic parameters (no ADME rates, volumes, or half-lives) and lack in vivo context. |
| popPK | Parvez_2008 | irrelevant | 1 | 0 | The paper discusses mixture toxicity using Vibrio fischeri assays and mentions catechol as a component, but reports no quantitative toxicokinetic parameters. |
| popPK | Parvez_2009 | irrelevant | 0 | 0 | The paper reports on mixture toxicity modeling and synergistic/antagonistic effects in Vibrio fischeri, containing no quantitative toxicokinetic parameters for pyrocatechol. |
| popPK | Patel_2018 | irrelevant | 0 | 0 | The paper focuses on virtual screening of COMT inhibitors for Alzheimer's disease using in silico methods and does not report any quantitative toxicokinetic parameters for pyrocatechol. |
| PGx | Pazmiño_1980 | not_relevant | 0 | 0 | The text discusses thiopurine methyltransferase (TPMT) and thiol methyltransferase (TMT) activity in uremic patients, not the pharmacokinetics or pharmacodynamics of pyrocatechol based on a gene variant. |
| popPK | Peterman_1983 | irrelevant | 0 | 0 | The paper reports enzyme inhibition kinetics (Ki) for pyrocatechol (catechol) on soybean lipoxygenase, which is an in vitro biochemical interaction, not toxicokinetic disposition data in humans or animals. |
| popPK | Pfeiffer_2006 | irrelevant | 1 | 0 | The paper focuses on estrogen metabolites (E2, E1, hydroxylated estrogens) and pyrocatechol is not the subject substance nor are kinetic parameters reported for it. |
| popPK | Philips_2004 | irrelevant | 0 | 0 | The paper concerns catechol estrogens (4-hydroxyestrone/4-hydroxyestradiol) and their binding proteins, not pyrocatechol, and reports no toxicokinetic parameters for pyrocatechol. |
| popPK | Plaisance_2024 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of cefiderocol, an antibiotic containing a catechol moiety, but reports no toxicokinetic parameters for pyrocatechol itself. |
| PGx | Poplawska-Domaszewicz_2024 | not_relevant | 3 | 1 | The paper discusses COMT genotype effects on pharmacodynamics/response to COMT inhibitors (entacapone, tolcapone, opicapone) in Parkinson's disease, not the specific drug pyrocatechol; furthermore, it is a narrative review without fitted effect sizes or raw data extraction. |
| popPK | Qiao_2014 | irrelevant | 0 | 0 | The paper focuses on a drug delivery system using chitosan derivatives, not the toxicokinetics of pyrocatechol; no kinetic parameters for pyrocatechol are present. |
| PGx | Raftogianis_2000 | not_relevant | 0 | 0 | The paper discusses estrogen and catechol estrogens, not the drug pyrocatechol, and does not report specific PK/PD parameters for pyrocatechol. |
| popPK | Ragi_2023 | irrelevant | 1 | 1 | The paper reports plasma concentrations of uremic toxins (including catechol sulfate) in dialysis patients but provides no kinetic parameters such as half-lives, rate constants, or partition coefficients for pyrocatechol. |
| popPK | Rao_1975 | irrelevant | 0 | 0 | The paper focuses entirely on the metabolism and kinetics of tripelennamine and its N-nitroso derivative; pyrocatechol (catechol) is only mentioned as a minor metabolic feature comparison, with no kinetic parameters provided for it. |
| popPK | Rapetti_2024 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biological activity (antioxidant, anticancer) of 5-aminopyrazole derivatives; pyrocatechol is mentioned only as a chemical substituent (catechol moiety) in the compounds, with no toxicokinetic parameters reported for pyrocatechol itself. |
| popPK | Rautio_2010 | irrelevant | 1 | 0 | The paper focuses on prodrugs of a specific COMT inhibitor (Compound 1), with pyrocatechol/Catechol only mentioned as part of the enzyme name, not as the subject substance for kinetic parameter extraction. |
| popPK | Reichmann_2023 | irrelevant | 0 | 0 | The paper is a clinical review of the drug combination Stalevo (levodopa/carbidopa/entacapone) for Parkinson's disease and does not report toxicokinetic parameters for pyrocatechol. |
| PGx | Relling_1994 | not_relevant | 0 | 0 | The paper focuses on the enzymatic identification of CYP3A4 for etoposide/teniposide metabolism and does not report on pharmacogenomic effects (genetic variants) on PK/PD parameters for pyrocatechol. |
| popPK | Relling_1998 | irrelevant | 0 | 0 | The paper studies etoposide pharmacokinetics, mentioning "etoposide catechol" only as a metabolite for AUC analysis without reporting specific kinetic parameters for pyrocatechol itself. |
| popPK | Rocha_2014 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for opicapone and its metabolites, with no quantitative kinetic parameters reported for pyrocatechol. |
| popPK | Roche_2000 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects (hematological and metabolic parameters) rather than quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients for pyrocatechol. |
| popPK | Rojo_2001 | irrelevant | 0 | 0 | The paper focuses on Tolcapone and L-DOPA pharmacokinetics in Parkinson's disease patients, with no toxicokinetic parameters for pyrocatechol. |
| PGx | Roomaney_2022 | not_relevant | 0 | 0 | The paper investigates the association between DAT/COMT genotypes and HIV-associated neurocognitive disorders (HAND) via cognitive scores, but does not study the pharmacokinetics or pharmacodynamics of pyrocatechol as a drug. |
| PGx | Rubio_1986 | not_relevant | 0 | 0 | The paper describes microbial metabolism and genetic evolution in Pseudomonas bacteria, not human pharmacogenomics or pharmacokinetics/pharmacodynamics of pyrocatechol. |
| popPK | Sage_1994 | irrelevant | 0 | 0 | The paper reviews the pharmacokinetics of levodopa/carbidopa, not pyrocatechol, and provides no quantitative kinetic parameters for pyrocatechol. |
| PGx | Saiz-Rodríguez_2019 | not_relevant | 0 | 0 | The paper title indicates the drug is fentanyl, not pyrocatechol. |
| popPK | Sakata_2024 | irrelevant | 0 | 0 | The paper studies Levodopa (LD) and Mucuna pruriens in rats and Parkinson's patients; pyrocatechol is not mentioned or analyzed as a subject substance. |
| popPK | Salmon_1983 | irrelevant | 0 | 0 | The paper focuses entirely on the pharmacokinetics of moxestrol; pyrocatechol is not studied as a substance, but rather catechol estrogens (metabolites of moxestrol) are mentioned, and no data for pyrocatechol itself is present. |
| PGx | Scanlon_1979 | not_relevant | 0 | 0 | The paper discusses the thermal stability of the COMT enzyme itself in relation to genotype, not the pharmacokinetics or pharmacodynamics of a specific drug (pyrocatechol) affected by that genotype. |
| PGx | Schacht_2016 | not_relevant | 0 | 0 | The paper reviews COMT genotype interactions with dopaminergic drugs (stimulants, antipsychotics, COMT inhibitors) on cognitive function, but does not mention pyrocatechol as a drug or study its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Schep_2011 | irrelevant | 0 | 0 | The paper focuses on benzylpiperazine and trifluoromethylphenylpiperazine, mentioning catecholamines generally but providing no quantitative kinetic parameters for pyrocatechol. |
| PGx | Schwartz_2004 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of antihypertensive drugs (metoprolol, hydralazine, etc.) and does not mention pyrocatechol at all. |
| popPK | Senek_2014 | irrelevant | 0 | 0 | The paper discusses continuous drug delivery in Parkinson's disease focusing on apomorphine and levodopa, with no mention of pyrocatechol or any kinetic parameters for it. |
| popPK | Senek_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for levodopa and entacapone; pyrocatechol is a metabolite of levodopa but is not the subject substance for which kinetic parameters are estimated. |
| popPK | Shang_2021 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of a Parkinson's drug (FLZ) and its metabolite M1, not pyrocatechol; pyrocatechol is only mentioned indirectly via the enzyme COMT's substrate specificity (catechol O-methyltransferase). |
| popPK | Slattery_1987 | irrelevant | 1 | 1 | The paper focuses on acetaminophen pharmacokinetics; pyrocatechol (catechol metabolite) is only mentioned as a minor metabolite with no specific toxicokinetic parameters provided for it. |
| popPK | Solem_2003 | irrelevant | 0 | 0 | The paper focuses on phenol and its metabolites (hydroquinone and catechol) in rainbow trout but does not report quantitative toxicokinetic parameters (e.g., clearance, half-life, rate constants) for pyrocatechol itself, and no numeric data are present in the evidence. |
| popPK | Son_2002 | irrelevant | 0 | 0 | The paper focuses on the antioxidant activity of caffeic acid analogues and only mentions catechol moieties as a structural feature, with no toxicokinetic parameters for pyrocatechol. |
| popPK | Song_2022 | irrelevant | 0 | 0 | The paper reports on the development of an electrochemical biosensor for the detection of rutin, using pyrocatechol only as a chemical substrate/reagent context, with no toxicokinetic parameters for pyrocatechol. |
| PGx | Sreerama_1995 | not_relevant | 0 | 0 | The paper discusses ALDH-3 variants in tumor vs normal tissues and their effect on mafosfamide sensitivity, not pyrocatechol pharmacogenomics. |
| popPK | Suárez-García_2021 | irrelevant | 0 | 0 | Pyrocatechol is used as a chemical reagent/ligand for the surface coating of nanoparticles, not as the subject of a toxicokinetic study, and the paper reports biodistribution data for the nanoparticle construct (In-MPN), not for free pyrocatechol. |
| popPK | Tammimäki_2011 | irrelevant | 0 | 0 | The paper is a review of addiction behavior in genetically modified mice regarding dopamine systems and contains no toxicokinetic parameters for pyrocatechol. |
| PGx | Tempfer_2004 | not_relevant | 0 | 0 | The text discusses genetic polymorphisms in obstetrics and gynecology, mentioning genes like COMT, GST, and CYP enzymes in the context of disease susceptibility and hormone metabolism, but does not report pharmacokinetic or pharmacodynamic parameters for the specific drug 'pyrocatechol'. |
| PGx | Thiesen_2017 | not_relevant | 0 | 0 | The paper investigates cisplatin-induced ototoxicity and does not report any pharmacokinetic or pharmacodynamic parameters for the drug pyrocatechol. |
| popPK | Tosh_2022 | irrelevant | 1 | 1 | The paper discusses A3 adenosine receptor agonists containing dopamine moieties, not pyrocatechol, and the only kinetic mention is qualitative 'facile clearance' without quantitative parameters. |
| popPK | Trenaman_2021 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetics for anticholinergic drugs (e.g., quinidine, digoxin, tolterodine) and mentions pyrocatechol only implicitly via catechol-O-methyltransferase activity or not at all as a subject of kinetic measurement. |
| PGx | Turgeon_2001 | not_relevant | 0 | 0 | The text describes the enzymatic activity and stability of UGT2B isoforms on steroid substrates, but does not investigate the pharmacogenomic effect of gene variants on the pharmacokinetics or pharmacodynamics of pyrocatechol. |
| popPK | Tuunainen_2023 | irrelevant | 0 | 0 | The paper focuses on levodopa, carbidopa, and entacapone, with no kinetic parameters for pyrocatechol. |
| popPK | Uddin_2016 | irrelevant | 0 | 0 | The paper concerns sonochemical degradation in aqueous solution (chemistry/engineering) with no biological subjects or toxicokinetic parameters. |
| popPK | Vasudeva_2025 | irrelevant | 0 | 0 | The paper describes the enzymatic activity and detection capabilities of a catechol 2,3-dioxygenase from a microbial source, not toxicokinetic parameters for pyrocatechol in living organisms. |
| popPK | Vermeulen_2023 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PGx | Vuletić_2021 | not_relevant | 1 | 0 | The paper reviews pharmacogenomics for Parkinson's disease drugs (primarily Levodopa/L-dopa and COMT inhibitors), not pyrocatechol. |
| popPK | Wang_2002 | irrelevant | 0 | 0 | The paper reports quantitative structure-activity relationship (QSAR) data regarding seed germination inhibition in plants, with no toxicokinetic parameters or metabolic rate constants for pyrocatechol in humans or animals. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | The paper reports detection frequencies and peak areas for biomonitoring/exposure purposes, but contains no toxicokinetic parameters (e.g., half-lives, clearance rates, partition coefficients) for pyrocatechol. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions via UGT inhibition and does not report pharmacogenomic effects of pyrocatechol. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The paper focuses on designing PDE4 inhibitors and uses catechol as a structural motif for synthesis; it contains no toxicokinetic parameters for pyrocatechol. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper discusses dopamine polymerization for bacterial surface functionalization, with catechol groups mentioned only as chemical moieties within polydopamine, not as the subject of toxicokinetic studies. |
| popPK | Wasmann_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the antifungal drug micafungin, not pyrocatechol; pyrocatechol (as the M1 metabolite) is only mentioned as a structural detail. |
| popPK | Watanabe_1987 | irrelevant | 0 | 0 | The evidence contains only GrobID metadata and no scientific content or data regarding pyrocatechol toxicokinetics. |
| PGx | Weinshilboum_1983 | not_relevant | 2 | 0 | The paper reviews genetic effects on endogenous catecholamine enzymes, not on the pharmacokinetics or pharmacodynamics of the specific drug pyrocatechol. |
| PGx | Weinshilboum_1984 | not_relevant | 1 | 1 | The paper discusses COMT genetic variations affecting the metabolism of L-dopa and methyldopa, but does not report any data or effects on pyrocatechol. |
| PGx | Weinshilboum_1992 | not_relevant | 0 | 0 | The paper focuses on thiopurine methyltransferase (TPMT) and thiopurine drugs, mentioning catechol O-methyltransferase only in a general list without reporting any specific pharmacokinetic or pharmacodynamic data for pyrocatechol. |
| PGx | Weinshilboum_2006 | not_relevant | 0 | 0 | The paper is a review article about the history and principles of pharmacogenomics regarding COMT and TPMT enzymes, and it does not contain any data on the pharmacokinetic or pharmacodynamic parameters of pyrocatechol. |
| popPK | Weisel_2003 | irrelevant | 2 | 0 | The paper reports excretion percentages of metabolites (catechol, phenol, etc.) from benzene exposure but provides no explicit numeric kinetic parameters (e.g., half-life, clearance, Vmax/Km) in the text, and catechol is a metabolite, not the administered substance. |
| PGx | Werner_2021 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics of antipsychotics (e.g., risperidone) in schizophrenia, not pyrocatechol. |
| PGx | Wiegand_2016 | not_relevant | 0 | 0 | The paper investigates the genetic modulation of Transcranial Direct Current Stimulation (tDCS) effects, not a pharmacokinetic or pharmacodynamic parameter of the drug pyrocatechol. While the COMT enzyme metabolizes catecholamines (structurally similar to pyrocatechol), the study focuses on brain stimulation and endogenous dopamine, not the drug pyrocatechol itself. |
| PGx | Williams_2023 | not_relevant | 0 | 0 | The text discusses naloxone and aripiprazole, not pyrocatechol, and does not report any pharmacogenomic effects. |
| popPK | Wu_2020 | irrelevant | 0 | 0 | The paper is a review of the antibiotic cefiderocol; pyrocatechol is not the subject, but merely referenced as a chemical moiety (catechol-type siderophore) within cefiderocol's structure. |
| popPK | Xiaohui_2007 | irrelevant | 2 | 2 | Pyrocatechol is listed only as a metabolite of another drug (Salvia miltiorrhizae) without quantitative kinetic parameters or a toxicokinetic model. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper reports ADME parameters for MT-8 (a procyanidin B3 derivative), not pyrocatechol; pyrocatechol is only mentioned in the context of MT-8's instability (catechol oxidation). |
| PGx | Xu_2026 | not_relevant | 0 | 0 | The paper describes the ADME profile of MT-8 (a procyanidin B3 derivative) in rats and identifies enzyme phenotypes (COMT, UGTs) involved in metabolism, but does not report how a specific gene variant or genotype changes PK/PD parameters for pyrocatechol. |
| popPK | Xue_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of opicapone, not pyrocatechol; no kinetic parameters for pyrocatechol are present. |
| popPK | Xue_2021_2 | irrelevant | 0 | 0 | The paper focuses on drug delivery systems and anti-cancer efficacy, mentioning catechol moieties only as a chemical structural component for cross-linking, with no toxicokinetic data for pyrocatechol. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The paper focuses on a nerve adhesive material and contains no quantitative toxicokinetic data for pyrocatechol. |
| popPK | Yam_2009 | irrelevant | 0 | 0 | The paper focuses on M. tuberculosis pathogenesis and an enzyme (HsaC) that cleaves a specific steroid-derived catechol metabolite (DHSA); pyrocatechol is not the subject substance, nor are kinetic parameters for pyrocatechol disposition reported. |
| popPK | Yamamoto_2021 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of L-dopa, 3-O-methyldopa, and entacapone in patients with Parkinson's disease; pyrocatechol is not the subject and no kinetic parameters for it are reported. |
| popPK | Ye_2011 | irrelevant | 0 | 0 | The paper focuses on Bisphenol A metabolism and uses pyrocatechol (BPA catechol) only as a metabolite for biomarker validation, reporting no toxicokinetic parameters for pyrocatechol itself. |
| popPK | Zaagsma_1977 | irrelevant | 0 | 0 | The paper studies beta-adrenoceptor blocking activities of synthetic compounds and mentions catechol derivatives structurally, but contains no toxicokinetic parameters or metabolic data for pyrocatechol. |
| popPK | Zhanel_2019 | irrelevant | 0 | 0 | The paper is about the antibiotic cefiderocol and mentions catechol groups only as part of its chemical structure, providing no toxicokinetic data for pyrocatechol. |
| PGx | Zhang_2017 | not_relevant | 0 | 0 | The paper discusses COMT variants affecting the metabolism of baicalein and its metabolites, not pyrocatechol. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper is a mechanistic review of etoposide, not pyrocatechol, and discusses enzyme metabolism generally without reporting pharmacogenomic effects on PK/PD parameters for the target drug. |
| popPK | Zhang_2021_2 | irrelevant | 0 | 0 | The paper is a review on autophagy and Parkinson's disease therapies; pyrocatechol is not the subject substance and no toxicokinetic parameters are reported for it. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on the electrochemical detection of luteolin, where catechol hydroxyls are mentioned as redox sites, but pyrocatechol is not the subject substance and no kinetic parameters are reported. |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | The paper focuses on synthesizing COMT inhibitors and their pharmacokinetics, with pyrocatechol/catechol mentioned only as a target enzyme substrate class or in the title context, not as the toxicokinetic subject. |
| popPK | Zhong_2026 | irrelevant | 0 | 0 | The paper is a review on biomimetic drug delivery for urinary cancer; pyrocatechol/catechol derivatives appear only as material chemistry (polydopamine), with no quantitative toxicokinetic parameters reported. |
| popPK | Zhou_2026 | irrelevant | 0 | 0 | The paper focuses on the discovery of non-catechol dopamine D1 receptor ligands, using pyrocatechol/catechol structures only as pharmacokinetic comparators, with no kinetic parameters reported for pyrocatechol itself. |
| popPK | Zhu_2021 | irrelevant | 0 | 0 | The paper discusses nanoscavengers with catechol moieties for ICH treatment but does not report quantitative toxicokinetic parameters for pyrocatechol itself; the substance is a structural component of a polymer, not the subject of kinetic studies. |
| popPK | Zoccali_2024 | irrelevant | 0 | 0 | The paper is a review on genetic biomarkers for cognitive impairment in CKD patients and contains no toxicokinetic data for pyrocatechol. |
| PGx | Zubiaur_2021 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on Quetiapine pharmacokinetics, not Pyrocatechol (which is only mentioned as a metabolite structural feature). |
| popPK | de_2004 | irrelevant | 0 | 0 | The paper focuses on MDMA pharmacokinetics and metabolism; pyrocatechol is not mentioned or analyzed as a subject substance. |
| PGx | de_2004 | not_relevant | 0 | 0 | The paper discusses MDMA pharmacokinetics and CYP2D6 genotype effects, not pyrocatechol. |
| popPK | van_2004 | irrelevant | 0 | 0 | The paper focuses on flavonoids (e.g., quercetin, galangin) inhibiting GST and MRP transporters; pyrocatechol is not the subject substance, nor are any kinetic parameters reported for it. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpyrocatechol%5D&body=Drug%3A%20pyrocatechol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pyrocatechol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
