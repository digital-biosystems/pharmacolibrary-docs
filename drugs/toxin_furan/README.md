<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Furan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Furan_Thuita2015_reference&quot;,&quot;label&quot;:&quot;Thuita_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_furan/Furan_Thuita2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Furan

- **generic name:** Furan
- **T3DB:** [T3D4203](http://www.t3db.ca/toxins/T3D4203) · **PubChem:** [CID 8029](https://pubchem.ncbi.nlm.nih.gov/compound/8029)

## About

Furan is a colorless, flammable, highly volatile liquid with a boiling point close to room temperature. It is soluble in common organic solvents, including alcohol, ether and acetone, but is insoluble in water. It is toxic and may be carcinogenic. …

- **Category:** Cigarette Toxin, Industrial/Workplace Toxin, Synthetic Toxin
- **Mechanism of toxicity:** Furan is a potent hepatotoxin and hepatocarcinogen in rodents, causing hepatocellular adenomas and carcinomas in rats and mice, and high incidences of cholangiocarcinomas in rats at doses ≥ 2 mg/kg bw. A genotoxic mode of action cannot be excluded for furan-induced tumor formation. …
- **Carcinogenicity:** IARC group 2B, possibly carcinogenic to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4203">T3DB T3D4203</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 110-00-9 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:35559">ChEBI 35559</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| furan | parent | 68.075 | C4H4O | PubChem | [8029](https://pubchem.ncbi.nlm.nih.gov/compound/8029) | Kedderis_1993, Kedderis_1996 |
| AcLys-AcA | metabolite | — (mass units only) | — | — | — | — |
| AcLys-BDA | metabolite | — (mass units only) | — | — | — | — |
| GSH-BDA | metabolite | — (mass units only) | — | — | — | — |
| Lys-AcA | metabolite | — (mass units only) | — | — | — | — |
| Lys-BDA | metabolite | — (mass units only) | — | — | — | — |

## Start here

> **Thuita_2015_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/toxin_furan/Furan_Thuita2015_reference.md?tab=Simulation) · [record](drugs/toxin_furan/Furan_Thuita2015_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="monkey" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 1.00).">monkey</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Thuita_2015_reference](drugs/toxin_furan/Furan_Thuita2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Thuita JK et al., Chemotherapy of second stage human Afri…, PLoS neglected tropical dis… (2015) | [10.1371/journal.pntd.0003409](https://doi.org/10.1371/journal.pntd.0003409) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Kedderis_1993_reference](drugs/toxin_furan/Furan_Kedderis1993_reference.md) | — | 1-compartment (no model) | 3 | Kedderis GL et al., Kinetic analysis of furan biotransforma…, Toxicology and applied phar… (1993) | [10.1006/taap.1993.1246](https://doi.org/10.1006/taap.1993.1246) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.00).">human + animal</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Kedderis_1996_reference](drugs/toxin_furan/Furan_Kedderis1996_reference.md) | — | 1-compartment (no model) | 3 | Kedderis GL et al., Prediction of furan pharmacokinetics fr…, Toxicology and applied phar… (1996) | [10.1006/taap.1996.0205](https://doi.org/10.1006/taap.1996.0205) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Kremer_2023_reference](drugs/toxin_furan/Furan_Kremer2023_reference.md) | — | general linear (no model) | 0 | Kremer JI et al., Stable Isotope Dilution Analysis (SIDA)…, Metabolites (2023) | [10.3390/metabo13091011](https://doi.org/10.3390/metabo13091011) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Zhang_2024_2_OAB](drugs/toxin_furan/pd_Zhang_2024_2_OAB.md) | overactive bladder risk ← furan · categorical (graded) response model | — | Zhang D et al., The exposure to volatile organic compou…, Frontiers in public health (2024) | [10.3389/fpubh.2024.1374959](https://doi.org/10.3389/fpubh.2024.1374959) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zhu_2023_Depression_risk](drugs/toxin_furan/pd_Zhu_2023_Depression_risk.md) | Depression risk ← furan · categorical (graded) response model | — | Zhu Y et al., Association of volatile organic compoun…, International archives of o… (2023) | [10.1007/s00420-023-01993-6](https://doi.org/10.1007/s00420-023-01993-6) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 17:34 | 1:10:21 | 1/3/0 | 2/0/0 | 0/0/0 | 1,650,970/117,032 | einfracz / qwen3.8-flash-next | 47 | 6/30 | 47/0 | 0 |

## Coverage

- **PubMed hits:** 276 matched, 211 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 4  ·  extracted 0  ·  needs review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kedderis_1993.pdf` | Kedderis GL et al., Kinetic analysis of furan biotransforma…, Toxicology and applied phar… (1993) | popPK | 10 | [10.1006/taap.1993.1246](https://doi.org/10.1006/taap.1993.1246) | [8248934](https://pubmed.ncbi.nlm.nih.gov/8248934) | The paper reports quantitative kinetic parameters including Vmax, KM, and tissue partition coefficients for furan in rats within a PBPK model framework, and these values are explicitly stated in the text. |
| `Kedderis_1996.pdf` | Kedderis GL et al., Prediction of furan pharmacokinetics fr…, Toxicology and applied phar… (1996) | popPK | 9 | [10.1006/taap.1996.0205](https://doi.org/10.1006/taap.1996.0205) | [8806878](https://pubmed.ncbi.nlm.nih.gov/8806878) | The paper provides quantitative kinetic parameters (Vmax, KM) for furan metabolism in rat, mouse, and human hepatocytes. |
| `Churchwell_2015.pdf` | Churchwell MI et al., Evaluation of serum and liver toxicokin…, Food and chemical toxicolog… (2015) | popPK | 8 | [10.1016/j.fct.2015.08.029](https://doi.org/10.1016/j.fct.2015.08.029) | [26364877](https://pubmed.ncbi.nlm.nih.gov/26364877) | The paper title and abstract confirm a study on furan toxicokinetics in rats, reporting qualitative ratios (liver:blood ~6-fold), but specific numeric parameters (rate constants, clearance, Vd) are not explicitly listed in the provided text. |
| `Kedderis_1997.pdf` | Kedderis GL, Extrapolation of in vitro enzyme induct…, Chemico-biological interact… (1997) | popPK | 8 | [10.1016/s0009-2797(97)00076-8](https://doi.org/10.1016/s0009-2797(97)00076-8) | [9402953](https://pubmed.ncbi.nlm.nih.gov/9402953) | The paper discusses furan metabolism and PBPK extrapolation based on enzyme kinetics, but no specific numeric values (Km, Vmax, etc.) for furan are present in the provided text. |
| `Van_2000.pdf` | Van der Molen GW et al., Estimation of dioxin and furan eliminat…, Journal of exposure analysi… (2000) | popPK | 8 | [10.1038/sj.jea.7500140](https://doi.org/10.1038/sj.jea.7500140) | [11140441](https://pubmed.ncbi.nlm.nih.gov/11140441) | The paper explicitly provides quantitative elimination rate constants for chlorinated furans (a class including furan derivatives) in humans using a toxicokinetic model. |
| `Price_2003.pdf` | Price K et al., Physiological modeling of age-specific…, Journal of toxicology and e… (2003) | popPK | 7 | [10.1080/15287390306450](https://doi.org/10.1080/15287390306450) | [12712630](https://pubmed.ncbi.nlm.nih.gov/12712630) | The paper is a PBPK model for furan kinetics in children and adults, which is relevant, but it reports only simulated outcome ratios (1.5, 1.25) rather than explicit numerical values for kinetic parameters like partition coefficients or rate constants. |
| `Zhang_2024.pdf` | Zhang Y et al., Rewiring cis-2-butene-1,4-dial mediated…, The Science of the total en… (2024) | popPK | 6 | [10.1016/j.scitotenv.2024.170946](https://doi.org/10.1016/j.scitotenv.2024.170946) | [38360302](https://pubmed.ncbi.nlm.nih.gov/38360302) | The paper reports the time-to-peak (3 or 6 h) and elimination timeline (36 h) for metabolites, which allows estimation of a terminal half-life, but explicit numeric rate constants or partition coefficients are not provided in the text. |

<sub>queue written 2026-11-12 16:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angeli_2023 | irrelevant | 0 | 0 | The paper focuses on the synthesis and enzyme inhibition of substituted furan sulfonamides, reporting potency (IC50) but no toxicokinetic parameters for furan itself. |
| PGx | Appel_2026 | not_relevant | 0 | 0 | The paper describes in vitro metabolism of 2,5-dimethylfuran (DMF), not furan, and does not involve human genotypes or pharmacogenomic effects on PK/PD parameters. |
| popPK | Aylward_2002 | irrelevant | 0 | 0 | The paper focuses on TCDD pharmacokinetics and only briefly mentions furan congeners as having decreasing lipid levels without reporting any quantitative kinetic parameters for furan. |
| popPK | Bohlen_2024 | irrelevant | 3 | 1 | The paper reports qualitative excretion kinetics (number and timing of peaks) rather than quantitative kinetic parameters like half-lives or rate constants, and no numeric kinetic data are provided in the evidence. |
| popPK | Campbell_1996 | irrelevant | 2 | 0 | The paper models polychlorinated dibenzofurans (PCDFs) as contaminants, not the parent substance furan, and reports no quantitative kinetic parameters in the text. |
| popPK | Chambers_2025 | irrelevant | 2 | 0 | Furan is used merely as an analytical biomarker in an exposure study comparing blood and urine levels, with no toxicokinetic parameters (rates, volumes, partition coefficients for furan itself) reported or extracted in the text. |
| popPK | Chambre_2020 | irrelevant | 0 | 0 | Furan is used solely as a chemical moiety in a hydrogel material and appears as an analytical/structural reference, with no toxicokinetic data reported. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | The paper discusses furan derivatives as potential Alzheimer's drugs, not the toxicokinetics of the substance furan itself, and contains no kinetic parameters. |
| PGx | Chen_2021 | not_relevant | 0 | 0 | The paper reviews long non-coding RNAs as drug targets and biomarkers in various diseases, but does not discuss furan or any pharmacogenomic effects of gene variants on furan's PK/PD parameters. |
| popPK | Chen_2023 | irrelevant | 0 | 0 | The paper discusses furan-2-carboxylic acid derivatives as drug candidates for diabetes, not the toxicokinetics of furan itself. |
| popPK | Churchwell_2015 | relevant | 8 | 1 | The paper title and abstract confirm a study on furan toxicokinetics in rats, reporting qualitative ratios (liver:blood ~6-fold), but specific numeric parameters (rate constants, clearance, Vd) are not explicitly listed in the provided text. |
| PGx | Cihlar_2008 | not_relevant | 0 | 0 | The paper discusses HIV viral genetic variants (K65R, etc.) affecting drug resistance, not host human genomic variants affecting pharmacokinetics or pharmacodynamics of furan. |
| popPK | Collins_2006 | irrelevant | 1 | 2 | The "furans" mentioned are chlorinated dibenzofurans (byproducts of dioxin exposure), not the substance furan, and the kinetic parameters provided (half-lives) are for TCDD/dioxins, not furan. |
| popPK | Costigan_1995 | irrelevant | 0 | 10 | The substance is a furan derivative (5-propyl FPA), not furan itself, and the study is a clinical exposure/outcome comparison without kinetic parameters. |
| popPK | Costigan_1996 | irrelevant | 0 | 0 | The paper focuses on the synthesis and physicochemical properties of a furan dicarboxylic acid derivative, not the toxicokinetics of furan itself. |
| popPK | Costigan_1996_2 | irrelevant | 0 | 0 | The substance is 5-propyl FPA, a furan-containing dicarboxylic acid that is a uremic metabolite of dietary protein, not the subject substance furan itself. |
| PGx | DElia_2009 | not_relevant | 0 | 0 | The study focuses on CYP3A inhibition by a different compound (DP7) and mentions furan only as part of a chemical substrate name (DFB), with no pharmacogenomic analysis or PK/PD data for furan itself. |
| popPK | Dahlgren_2007 | irrelevant | 0 | 0 | The paper is an exposure/epidemiological study reporting body burden levels of chlorinated furans and dioxins but contains no kinetic parameters such as half-lives, clearance, or partition coefficients for furan. |
| popPK | Dehghan_2023 | irrelevant | 0 | 0 | The paper reviews protein-bound uremic toxins (like CMPF, which contains a furan ring but is not furan itself) and reports binding constants to albumin, which are not toxicokinetic parameters for the substance furan. |
| PGx | Deng_2018 | not_relevant | 0 | 0 | The paper focuses on identifying reactive metabolites of limonin (a furan-containing compound) via LC-MS and does not discuss any gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Dhara_2021 | irrelevant | 0 | 0 | The paper concerns a seaweed-derived diterpenoid, and furan is merely part of the chemical nomenclature, not the studied substance. |
| popPK | Di_2014 | irrelevant | 0 | 0 | The subject is a furan-derivative drug (F2MPA), not furan itself, and no toxicokinetic parameters for furan are reported. |
| popPK | Dilloway_1991 | irrelevant | 0 | 0 | Furan is mentioned only as the descriptor for ranitidine's chemical class, not as the subject of toxicokinetic analysis. |
| popPK | Ding_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and pharmacokinetics of a furan-fused organic derivative (compound 15a), not the substance furan itself; "furan" is mentioned only as a structural core. |
| popPK | Elgharbi_2026 | irrelevant | 0 | 0 | The paper describes computational molecular modeling and drug design of furan-derived Schiff bases, containing no experimental toxicokinetic parameters for furan. |
| popPK | Falk_1999 | irrelevant | 0 | 0 | The paper reports internal exposure concentrations (body burdens) in humans but contains no toxicokinetic parameters such as rate constants, half-lives, or partition coefficients. |
| popPK | Ferreira_2026 | irrelevant | 0 | 0 | The paper analyzes the membrane permeability of CNFD (a furan-containing naphthoquinone), not the toxicokinetics of furan itself. |
| popPK | Gates_2014 | irrelevant | 2 | 0 | The paper provides only a qualitative and semiquantitative assessment of metabolite formation in hepatocytes, lacking specific kinetic parameters (rates, volumes, partition coefficients) and numeric values in the provided text. |
| PGx | Generaux_2013 | not_relevant | 0 | 0 | The study describes species-specific enzyme kinetics and metabolite formation pathways without assessing the impact of specific genetic variants (polymorphisms) on PK/PD parameters. |
| popPK | Giroux_1977 | irrelevant | 0 | 0 | The paper studies a furan-containing derivative (MFA) and its effect on zinc clearance, not the toxicokinetics of furan itself, and reports no quantitative kinetic parameters for furan. |
| popPK | Goculdas_2024 | irrelevant | 0 | 0 | The paper reports on the synthesis and ecotoxicity (LC50/LD50) of biobased insecticides derived from furfural; it does not report toxicokinetic parameters for the substance furan itself. |
| popPK | He_2010 | irrelevant | 0 | 0 | The substance is sodium tanshinone IIA sulfonate, not furan; furan appears only as part of the chemical name/internal standard context. |
| popPK | Heilier_2005 | irrelevant | 0 | 0 | Furan appears only as a class of environmental pollutants (PCDFs) in an epidemiological study of endometriosis, with no toxicokinetic parameters reported. |
| PGx | Hemmann_2016 | not_relevant | 0 | 0 | The paper describes the structural elucidation of a cofactor (methylofuran) in bacteria and does not discuss human pharmacogenomics or the effect of gene variants on pharmacokinetic/pharmacodynamic parameters of the drug furan. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | The paper discusses chemical catalysis for fuel production using diatomic catalysts, not toxicokinetics of furan in biological systems. |
| popPK | Hutanu_2026 | irrelevant | 0 | 0 | The paper reports on synthesized benzofuran-furan-pyrano hybrids, not furan itself; the numeric values refer to ADMET predictions of these new compounds, not toxicokinetic parameters of the substance furan. |
| popPK | Høie_2015 | irrelevant | 0 | 0 | The paper is a genotoxicity study (comet assay) measuring DNA damage, not toxicokinetic parameters, and focuses on 2,5-dimethylfuran (DMF), not furan. |
| popPK | Høie_2015_2 | irrelevant | 1 | 2 | The paper reports DNA adduct levels (genotoxicity biomarkers) for furfuryl alcohol (FFA), not furan, and does not contain quantitative toxicokinetic parameters (half-life, clearance, Vmax, etc.) for furan; the only kinetic values for FFA are cited from a different study. |
| popPK | Islam_2025 | irrelevant | 0 | 0 | The paper synthesizes furan-containing derivatives for antibacterial testing and reports NMR data and molecular docking results, not toxicokinetic parameters for furan. |
| popPK | Jha_2025 | irrelevant | 0 | 0 | The paper is a computational chemistry study on solvent effects for furfural extraction, containing no biological toxicokinetic parameters for furan. |
| popPK | Kalisch_2024 | irrelevant | 3 | 1 | The study focuses on validating urinary metabolites as exposure biomarkers rather than reporting quantitative toxicokinetic parameters (e.g., half-lives, clearance, Vmax/Km); the provided evidence lacks these specific kinetic values, which are likely in the referenced supplementary materials or figures. |
| popPK | Kalisch_2025 | irrelevant | 3 | 2 | The paper is primarily an exposure/biomarker study; while it mentions applying excretion rates from a previous rat study to estimate human daily intake, the actual numeric kinetic parameters (excretion rates, metabolic data) are not reported in this text and are attributed to a different publication (Kalisch et al. 2024). |
| popPK | Karakaya_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and evaluation of furan-derived thiazole compounds for Alzheimer's therapy; furan is a structural motif in the drugs, not the subject of toxicokinetic study, and no toxicokinetic parameters for furan itself are reported. |
| popPK | Karlstetter_2020 | irrelevant | 4 | 8 | The paper reports urinary excretion rates of furan metabolites (GSH-BDA and NAcLys-BDA) as percentages of the dose, which are biomarker exposure metrics rather than specific toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| popPK | Kedderis_1997 | relevant | 8 | 0 | The paper discusses furan metabolism and PBPK extrapolation based on enzyme kinetics, but no specific numeric values (Km, Vmax, etc.) for furan are present in the provided text. |
| popPK | Khan_2018 | irrelevant | 0 | 0 | Furan is listed merely as a ligand in virtual complexes of a different substance (2-butanone thiosemicarbazone), with no toxicokinetic parameters for furan itself. |
| popPK | Khan_2023 | irrelevant | 0 | 0 | The paper focuses on Campylobacter concisus drug discovery and the term 'furan' only appears within the IUPAC chemical name of a peptidomimetic inhibitor, not as the subject of toxicokinetic study. |
| PGx | Khojasteh-Bakht_1999 | not_relevant | 0 | 0 | The paper reports on in vitro metabolism by expressed CYP enzymes and does not investigate human genetic variants or their effect on PK/PD parameters. |
| PGx | Kim_2006 | not_relevant | 0 | 0 | The paper discusses general metabolic pathways of KR-32570 (which contains a furan ring but is not furan itself) without analyzing specific gene variants or their quantitative effects on pharmacokinetics. |
| PGx | Kim_2007 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (Km, Vmax, CLint) for KR-32570 metabolism by specific CYP enzymes (CYP3A4, CYP1A2), but it does not investigate the effect of any gene variants, genotypes, or phenotypes (e.g., poor metabolizers vs. extensive metabolizers) on pharmacokinetic parameters. |
| PGx | Kimura_2010 | not_relevant | 0 | 0 | The paper reports on the inhibition of CYP enzymes by spice extracts (specifically mace and nutmeg) in vitro, but does not investigate furan as a drug subject to pharmacogenomic effects on its PK or PD parameters. |
| PGx | Kimura_2022 | not_relevant | 0 | 0 | The paper describes gene expression changes in mice induced by chemical exposure, not the effect of a genetic variant on a pharmacokinetic or pharmacodynamic parameter of furan. |
| popPK | Koenigsmark_2025 | irrelevant | 1 | 0 | The paper is an epidemiological study reporting associations between blood VOC concentrations and hypertension, with no toxicokinetic parameters (e.g., half-life, clearance) reported for furan. |
| popPK | Lacomba_2025 | irrelevant | 0 | 0 | The paper reports exposure concentrations of polychlorinated dibenzofurans (POPs) in meconium, which are chemically distinct from the parent substance furan, and contains no toxicokinetic parameters for furan. |
| PGx | Lang_2020 | not_relevant | 0 | 0 | The paper investigates in vitro and in vivo metabolic bioactivation pathways of a furan-containing drug but does not analyze or report effects of specific human genetic variants (pharmacogenomics) on PK or PD parameters. |
| PGx | Lang_2020_2 | not_relevant | 0 | 0 | The study investigates metabolic activation of obacunone (which contains a furan ring) but does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters, nor does it study furan as a drug. |
| PGx | Lassila_2016 | not_relevant | 1 | 1 | The paper describes an analytical method for detecting glutathione conjugates of menthofuran and identifies responsible CYP enzymes in vitro; it does not investigate how human genetic variations affect pharmacokinetic or pharmacodynamic parameters. |
| PGx | Li_2018 | not_relevant | 0 | 0 | The drug is dictamnine (which contains a furan ring), not furan itself, and the study examines CYP3A4 enzymatic modulation (induction/inhibition) rather than pharmacogenomic genetic variants. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The paper is a review of cryptotanshinone where furan is mentioned only as part of its chemical IUPAC name, with no kinetic data for furan itself. |
| popPK | Liang_2022 | irrelevant | 0 | 0 | The paper is about a resveratrol analog (Q205) for HIV-1 latency reversal where furan appears only as a structural substructure in the drug's chemical name, with no toxicokinetic parameters reported for furan itself. |
| PGx | Lin_2014 | not_relevant | 0 | 0 | The paper investigates the metabolic activation of diosbulbin B by CYP3A4 in vitro and in rats, but it does not study any gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Lin_2020 | irrelevant | 0 | 0 | The paper studies pharmacokinetics of alkaloids from Zanthoxylum nitidum, not furan (which appears only as part of a chemical class name "furan quinoline alkaloids"), so no kinetic parameters for furan itself are present. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper uses furan as a structural unit in a synthetic fluorophore (IR-FFCHP) for bioimaging, not as a toxicant subject for toxicokinetic analysis. |
| popPK | Liu_2026 | irrelevant | 1 | 0 | The paper is an epidemiological cross-sectional study (NHANES) associating blood furan concentrations with sleep apnea risk; it contains no kinetic parameters such as clearance, half-life, or partition coefficients. |
| popPK | Logie_2017 | irrelevant | 0 | 0 | Furan is mentioned only as a chemical functional group in a polymer structure, not as a substance with reported toxicokinetic parameters. |
| popPK | Lorber_2002 | irrelevant | 0 | 0 | The paper models dioxin-like compounds (TEQs), where "furans" refer to polychlorinated dibenzofurans, not the specific substance furan (C4H4O). |
| popPK | Lorber_2009 | irrelevant | 1 | 0 | The paper reports background exposure estimates for dioxin-like compounds (including furan congeners) but contains no quantitative toxicokinetic parameters for furan itself. |
| popPK | Maeda_2012 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of KW-7158, where furan is merely part of a metabolite name/description, not the subject substance with reported kinetic parameters. |
| PGx | Mallo-Abreu_2020 | not_relevant | 0 | 0 | The paper discusses furan as a chemical bioisostere in drug design (SAR), not as a drug with pharmacogenomic data on PK/PD parameters. |
| PGx | Mao_2026 | not_relevant | 0 | 0 | The paper is a review of chemical mechanisms of CYP3A4 inactivation by phytomedicines (including furan-containing compounds) and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Mathew_2014 | irrelevant | 0 | 0 | The paper reports on the synthesis and molecular docking of furan-containing antitubercular agents, not on the toxicokinetics of furan itself. |
| popPK | Mays_1986 | irrelevant | 0 | 0 | The paper focuses on 8-methoxypsoralen (8-MOP); furan is mentioned only as a structural component of the metabolite and a chemical moiety being oxidized, with no toxicokinetic parameters reported for furan itself. |
| popPK | McCarthy_1997 | irrelevant | 0 | 0 | The paper reports environmental monitoring concentrations of contaminants (including furan isomers) in fish tissue for food safety and baseline purposes, with no toxicokinetic parameters or disposition modeling. |
| popPK | Mersch-Sundermann_1994 | irrelevant | 0 | 0 | The paper focuses on the structural basis of genotoxicity for nitroarenofuran derivatives using QSAR/CASE methods, not on toxicokinetic parameters of furan itself. |
| popPK | Michel_2011 | irrelevant | 0 | 0 | The substance is furan-2-one, a component of an endothelin receptor ligand, not toxic furan, and no toxicokinetic parameters are reported. |
| popPK | Midgley_2007 | irrelevant | 0 | 0 | The substance is DB289 (pafuramidine), which contains a furan ring structure, but the study reports pharmacokinetics for the drug DB289/DB75, not for furan itself. |
| popPK | Miniero_2025 | irrelevant | 0 | 0 | The paper reports human biomonitoring concentrations of chlorinated dibenzofurans (PCDFs), which are dioxin-like pollutants, not the substance furan (C4H4O) or its specific toxicokinetics. |
| PGx | Mohr_2000 | not_relevant | 2 | 1 | The paper discusses a gene therapy approach (introducing rabbit CYP4B1 gene) rather than studying how endogenous human gene variants affect furan pharmacokinetics or pharmacodynamics in a natural population. |
| popPK | Moon_2026 | irrelevant | 0 | 0 | The paper focuses on antimicrobial and antioxidant activities of furan derivatives from Streptomyces, with no toxicokinetic parameters reported for furan itself. |
| popPK | Mosti_1988 | irrelevant | 0 | 0 | The paper concerns the synthesis and photobiological activity of furan-derivatives (angelicins), not the toxicokinetics of furan itself. |
| popPK | Murray_1997 | irrelevant | 0 | 0 | The paper is a review of mechanism-based inhibition of CYP enzymes by various drugs, mentioning furan only as a structural motif associated with inhibition, without reporting any quantitative toxicokinetic parameters for furan itself. |
| popPK | Murugesan_2025 | irrelevant | 0 | 0 | The paper focuses on a furan-containing adenosine derivative (ANR 672) for glioblastoma treatment, not on the toxicokinetics of furan itself. |
| popPK | Muthukaman_2017 | irrelevant | 0 | 0 | The paper describes furan-containing drug candidates (mPGES-1 inhibitors) and reports pharmacokinetics for these specific compounds, not for furan itself as the substance of interest. |
| popPK | Nchu_2012 | irrelevant | 0 | 0 | The paper reports on the anti-tick properties of Tagetes minuta essential oil, where furan derivatives are merely identified as chemical constituents, with no toxicokinetic data for furan. |
| popPK | Ng_1984 | irrelevant | 1 | 0 | The paper reports kinetics for furaltadone, not furan; furan is only mentioned as a chemical structural component of the drug. |
| popPK | Njei_2026 | irrelevant | 1 | 1 | The paper reports an epidemiological association between VOC exposure levels and liver disease in humans, containing no kinetic parameters for furan. |
| popPK | Ohta_1996 | irrelevant | 0 | 0 | The paper discusses a furan-containing drug (M16209) but does not report toxicokinetic parameters for furan itself. |
| popPK | Opsenica_2015 | irrelevant | 0 | 0 | The paper discusses furan-based derivatives as antimalarial agents, but furan itself is not the subject of toxicokinetic analysis and no kinetic parameters are reported. |
| popPK | Pan_2023 | irrelevant | 0 | 0 | The paper discusses furan-containing components (such as rutaevin, limonin, etc.) in Cortex Dictamni, not the substance furan itself, and no toxicokinetic parameters for furan are reported. |
| popPK | Parsons_2025 | irrelevant | 1 | 0 | The paper reports exposure and body burden concentrations of polychlorinated dibenzofurans (PCDFs) as environmental contaminants, not toxicokinetic parameters for the specific substance furan. |
| popPK | Patagani_2026 | irrelevant | 0 | 0 | The paper reports on the synthesis and anticancer activity of furan derivatives, not toxicokinetic parameters of furan itself. |
| popPK | Paulose_2021 | irrelevant | 0 | 0 | The paper is about the isolation and bioactivity of spiropharanone from cuttlefish; furan only appears in the chemical nomenclature as part of the molecular structure, with no toxicokinetic data. |
| PGx | Pei_2020 | not_relevant | 0 | 0 | The study investigates the mechanism of furan-ring bioactivation by CYP3A4 in columbin-induced hepatotoxicity using chemical inhibitors (ketoconazole) and recombinant enzymes, without reporting on how specific human genetic variants or genotypes alter pharmacokinetic or pharmacodynamic parameters. |
| popPK | Prakash_1977 | irrelevant | 0 | 0 | The paper focuses on the pharmacological effects of a specific furan-substituted alpha-mercaptoacrylic acid derivative (MFA) on zinc metabolism, not the toxicokinetics of furan itself. |
| popPK | Prandota_1991 | irrelevant | 0 | 0 | The paper studies furosemide, not furan; furan ring is mentioned only as a structural component of metabolites, not as the subject substance for kinetic parameters. |
| popPK | Price_2003 | relevant | 7 | 2 | The paper is a PBPK model for furan kinetics in children and adults, which is relevant, but it reports only simulated outcome ratios (1.5, 1.25) rather than explicit numerical values for kinetic parameters like partition coefficients or rate constants. |
| PGx | Racha_1998 | not_relevant | 0 | 0 | The study focuses on the biochemical mechanism of enzyme inactivation by furafylline and does not involve pharmacogenomics, gene variants, or population-based PK/PD parameters for furan. |
| popPK | Ramamurthy_2026 | irrelevant | 0 | 0 | Furan appears only as part of a chemical name (furan-2-yl derivative), not as a studied toxicokinetic subject, and no kinetic parameters are reported. |
| PGx | Ren_2015 | not_relevant | 0 | 0 | The drug is limonoids (which contain a furan ring), not furan itself, and the study characterizes metabolic pathways/CYP involvement in vitro without assessing pharmacogenomic effects on PK/PD parameters. |
| PGx | Roellecke_2017 | not_relevant | 0 | 0 | The paper discusses enzyme engineering of CYP4B1 isoforms and substrate specificity in vitro, not human genetic variants affecting furan PK/PD. |
| popPK | Rubin_2023 | irrelevant | 0 | 0 | Furan appears only as part of the chemical name of the radiotracer [11C]CPPC and is not the subject of the toxicokinetic study. |
| popPK | Sable_2025 | irrelevant | 0 | 0 | The paper describes the synthesis and evaluation of furan-containing drug derivatives (furan-thiazole hydrazones) for antimicrobial activity, not the toxicokinetics of the substance furan itself. |
| popPK | Sachse_2014 | irrelevant | 0 | 0 | The paper studies furfuryl alcohol (a precursor/metabolite), not furan, and focuses on DNA adduct formation rather than kinetic parameters. |
| popPK | Sachse_2016 | irrelevant | 2 | 8 | The paper focuses on the toxicokinetics of 5-Hydroxymethylfurfural (HMF) and furfuryl alcohol (FFA), not furan itself; while it measures a reactive metabolite of FFA (2-sulfoxymethylfuran) and its half-life, furan is only mentioned as a fragment in mass spectrometry or a structural congener, not as the subject substance. |
| popPK | Saijo_2012 | irrelevant | 0 | 0 | The paper studies the antidepressant Wf-516 (which contains a benzofuran moiety but is not furan) and its interaction with serotonin receptors; furan itself is not the subject substance and no furan kinetic parameters are reported. |
| popPK | Sgorbini_2019 | irrelevant | 0 | 0 | This is a review on analytical chemistry methods for quantifying volatiles, mentioning furan only as an analytical target with no toxicokinetic parameters or biological data reported. |
| popPK | Shanmugam_2007 | irrelevant | 0 | 0 | The paper studies furan-containing drug FPP-3's effect on warfarin pharmacokinetics, not the toxicokinetics of furan itself. |
| PGx | Shibata_2013 | not_relevant | 0 | 0 | The paper discusses medicinal chemistry optimization of furan-containing compounds to improve CYP3A4 inhibition profiles, but does not report pharmacogenomic effects (gene variants altering PK/PD parameters). |
| PGx | Smith_2026 | not_relevant | 0 | 0 | The paper discusses enzyme kinetics (kcat/Km) for bacterial and plant reductases on lignan substrates, not human pharmacogenomic effects on drug PK/PD parameters. |
| popPK | Sudu_2026 | irrelevant | 0 | 0 | The paper is about the phytochemical screening and in silico evaluation of Rhinacanthus nasutus extracts, where furan derivatives are merely identified as constituent compounds via GC-MS, with no toxicokinetic parameters reported for furan. |
| popPK | Sun_2004 | irrelevant | 0 | 0 | The paper investigates the effects of uremic toxins on erythromycin uptake; "furan" appears only in the name of a uremic toxin (CMPF) and furan itself is not the subject of kinetic analysis. |
| popPK | Sun_2010 | irrelevant | 0 | 0 | The paper studies erythromycin pharmacokinetics in humans; furan appears only as part of the name of a uremic toxin (CMPF) and no kinetic parameters for furan are reported. |
| popPK | Thuita_2013 | irrelevant | 0 | 0 | The substance is the furan-containing drug prodrug DB868 and its metabolite DB829, not the chemical furan itself; the paper reports pharmacokinetics of this drug candidate. |
| popPK | Thuita_2015 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for the diamidine drugs DB829 and DB868, where furan is merely a chemical moiety in their names, not the subject substance. |
| popPK | Treshalina_2017 | irrelevant | 0 | 0 | The paper concerns an anthrafuran derivative (LCTA-2034) as an anticancer drug and its complex with cyclodextrin, not the toxicokinetics of the substance furan. |
| popPK | Tsutsumi_2002 | irrelevant | 0 | 0 | The paper studies CMPF (a furan dicarboxylic acid metabolite/uremic toxin) rather than the substance furan itself, and no quantitative kinetic parameters for furan are reported. |
| popPK | Ulbricht_1984 | irrelevant | 0 | 0 | The paper reviews 5-hydroxymethylfurfural (HMF), not furan, and discusses it only as a decomposition product without providing specific toxicokinetic parameters for furan itself. |
| PGx | Volodina_2021 | not_relevant | 0 | 0 | The paper discusses the cytotoxic activity of anthraquinone derivatives containing furan and thiophene rings, but does not report any pharmacogenomic effects (gene variants) on the pharmacokinetic or pharmacodynamic parameters of furan. |
| PGx | Wang_2006 | not_relevant | 0 | 0 | The study focuses on identifying the specific cytochrome P450 enzymes (CYP4F2, CYP4F3B) responsible for the metabolic activation of a furan-containing prodrug (DB289), but does not investigate genetic variants (polymorphisms) or their effects on pharmacokinetic parameters. |
| PGx | Wang_2015 | not_relevant | 0 | 0 | The paper describes the mechanism of enzyme inactivation of a metabolite (linderane) on CYP2C9 in vitro, without any pharmacogenomic component (gene variants/genotypes) or clinical PK/PD data for furan. |
| PGx | Wang_2016 | not_relevant | 0 | 0 | The paper discusses the metabolism of dictamnine (a different compound) and does not mention furan, nor does it analyze pharmacogenomic effects of gene variants on PK/PD parameters. |
| popPK | Wang_2022 | irrelevant | 0 | 0 | The paper focuses on Linderane (a furan-containing sesquiterpenoid) and its inhibition of CYP2C9, not on the toxicokinetics of the substance furan itself. |
| PGx | Wang_2022 | not_relevant | 0 | 0 | The paper describes drug-drug interactions via enzyme inhibition, not pharmacogenomic effects of gene variants on parameters. |
| PGx | Wangensteen_2003 | not_relevant | 0 | 0 | The paper reports in vitro CYP3A4 inhibition by a furanocoumarin (epoxybergamottin), not a pharmacogenomic effect on a PK/PD parameter for the drug furan. |
| popPK | Wellman_2009 | irrelevant | 0 | 0 | The paper discusses dioxin-furan toxic equivalents (TEQs) as a pollutant class, not furan as a specific substance, and reports no toxicokinetic parameters for furan. |
| PGx | Wu_2020 | not_relevant | 2 | 0 | The study investigates metabolic regulation of furan-containing diterpenoid lactones (from Dioscorea) and their in vitro hepatotoxicity/CYP3A4 interactions, but does not report pharmacogenomic effects (gene variants/genotypes) on pharmacokinetic or pharmacodynamic parameters of the drug furan itself. |
| PGx | Xing_2021 | not_relevant | 0 | 0 | The study investigates the metabolic bioactivation of marrubiin (a furanoid) mediated by specific CYP enzymes using chemical inhibitors, but it does not report on how specific gene variants/genotypes alter pharmacokinetic or pharmacodynamic parameters. |
| popPK | Xu_2015 | irrelevant | 0 | 0 | The paper concerns transgenic zebrafish as a biosensor for dioxins and PAHs, with no toxicokinetic data for furan (the term appears only in 'dibenzo-p-furan'). |
| PGx | Yan_2025 | not_relevant | 0 | 0 | The study investigates the molecular mechanism of CYP3A4 inactivation by a furanocoumarin (DHB) using QM/MM simulations and does not report any pharmacogenomic data regarding how genetic variants affect pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper focuses on flavor chemistry in baijiu and discusses furan-2-ylmethanol as an aroma compound, not toxicokinetics of furan in biological systems. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | Furan is mentioned only as a chemical moiety within the diosbulbin B structure, not as the subject substance being studied; the paper reports kinetics for diosbulbin B and glycyrrhizin. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (glycyrrhizin inhibiting CYP3A4) rather than the effect of a host genetic variant on furan or diosbulbin B pharmacokinetics/pharmacodynamics. |
| popPK | Yang_2026 | irrelevant | 2 | 0 | The paper reports cotton-air partition coefficients for VOCs including furan, but these are environmental exposure parameters, not biological/toxicokinetic parameters. |
| popPK | Youssif_2019 | irrelevant | 0 | 0 | The paper describes the synthesis and biological evaluation of furan-containing derivatives as antitumor agents, with no toxicokinetic parameters for furan itself. |
| PGx | Yu_2014 | not_relevant | 0 | 0 | The paper focuses on the metabolic pathway and bioactivation of toosendanin's furan ring mediated by CYP3A4, but does not report any effects of human gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yuan_2022 | irrelevant | 0 | 0 | The paper concerns furan-derivatives as drug candidates (ST2 inhibitors) and reports potency (IC50) rather than kinetic parameters for the substance furan itself. |
| popPK | Zekri_1996 | irrelevant | 0 | 0 | The paper studies the ionization constants of ginkgolide B, with furan mentioned only as part of the chemical name, providing no toxicokinetic data for furan itself. |
| popPK | Zhai_2023 | irrelevant | 0 | 0 | The paper is a computational drug discovery study for Alzheimer's disease where furan appears only as part of a chemical substructure ("furan-amino-benzene") in docking analysis, with no toxicokinetic parameters reported. |
| popPK | Zhang_2009 | irrelevant | 0 | 0 | Furan is mentioned only as a potential impurity in DE-71 causing enzyme induction, with no kinetic parameters for furan reported. |
| PGx | Zhang_2020 | not_relevant | 2 | 0 | The study investigates CYP3A4-mediated bioactivation and hepatotoxicity using chemical inhibitors (ketoconazole) and inducers (rifampicin), not specific gene variants or genotypes. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The paper discusses the metabolic mechanism and cytotoxicity of 8-epidiosbulbin E acetate, not furan, and does not investigate any pharmacogenomic effects on PK or PD parameters. |
| popPK | Zhang_2024 | relevant | 6 | 3 | The paper reports the time-to-peak (3 or 6 h) and elimination timeline (36 h) for metabolites, which allows estimation of a terminal half-life, but explicit numeric rate constants or partition coefficients are not provided in the text. |
| PGx | Zhou_2004 | not_relevant | 0 | 0 | The paper discusses furan-containing herbal constituents and their metabolic bioactivation, but does not report pharmacogenomic effects on a pharmacokinetic or pharmacodynamic parameter of the specific drug "furan". |
| PGx | Zhou_2005 | not_relevant | 0 | 0 | The paper reviews CYP3A4 mechanism-based inhibition by therapeutic drugs that contain furan rings (as a chemical moiety); it does not study furan itself as a drug nor does it report pharmacogenomic effects on furan's PK/PD parameters. |
| PGx | Zhou_2007 | not_relevant | 1 | 0 | The paper is a general review of herbal toxicology that mentions furan rings in diterpenoids being metabolized by CYP3A4, but it does not report any pharmacogenomic (gene variant) effects on PK/PD parameters for furan as a specific drug. |
| PGx | Zhou_2020 | not_relevant | 0 | 0 | The paper describes the metabolism of fraxinellone (a furanoid), not furan itself, and focuses on CYP3A4-mediated bioactivation and hepatotoxicity mechanisms without evaluating specific gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Zhu_2012 | irrelevant | 0 | 0 | The paper studies furan-containing derivative compounds (DB766, DB1852, etc.) as drugs, not furan itself; no kinetic data for the parent substance furan is reported. |
| popPK | Široká_2018 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of cyclin-dependent kinase inhibitors BP-14 and BP-20, mentioning furan only as part of their chemical structure, not as a studied substance with kinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfuran%5D&body=Drug%3A%20furan%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_furan/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 16:37 UTC</sub>
