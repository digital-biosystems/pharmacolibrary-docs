<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Deoxycorticosterone&quot;}]"></div>

# Deoxycorticosterone

- **generic name:** Deoxycorticosterone
- **T3DB:** [T3D4245](http://www.t3db.ca/toxins/T3D4245) · **PubChem:** [CID 6166](https://pubchem.ncbi.nlm.nih.gov/compound/6166)
- **groups:** experimental

## About

Deoxycorticosterone is a steroid or mineralocorticoid secreted by the zona fasiculata of the adrenal cortex. Deoxycorticsterone acts as a precursor to aldosterone. Deoxycorticosterone is not a major secretory hormone. …

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Sources and uses:** This is an endogenously produced metabolite found in the human body. It is used in metabolic reactions, catabolic reactions or waste generation.
- **Health effects:** Chronically high levels of deoxycorticosterone are associated with the inborn errors of metabolism known as Congenital adrenal hyperplasia.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4245">T3DB T3D4245</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 64-85-7 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:16973">ChEBI 16973</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Zipser_1980_reference](drugs/toxin_deoxycorticosterone/Deoxycorticosterone_Zipser1980_reference.md) | — | 1-compartment (no model) | 0 | Zipser RD et al., Deoxycorticosterone and aldosterone cle…, The Journal of clinical end… (1980) | [10.1210/jcem-51-5-1085](https://doi.org/10.1210/jcem-51-5-1085) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 00:07 | 25:33 | 0/1/0 | 0/0/0 | 0/0/0 | 487,344/24,325 | einfracz / qwen3.8-27b | 19 | 5/13 | 18/1 | 0 |

## Coverage

- **PubMed hits:** 249 matched, 143 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Corsan_1997.pdf` | Corsan GH et al., Origin of deoxycorticosterone sulfate (…, The Journal of steroid bioc… (1997) | popPK | 10 | [10.1016/s0960-0760(96)00224-5](https://doi.org/10.1016/s0960-0760(96)00224-5) | [9219925](https://pubmed.ncbi.nlm.nih.gov/9219925) | The paper explicitly states the rate of clearance of deoxycorticosterone sulfate (DOC-SO4) from plasma is 10-100 times that of other steroids, providing a relative kinetic parameter. |
| `Zipser_1980.pdf` | Zipser RD et al., Deoxycorticosterone and aldosterone cle…, The Journal of clinical end… (1980) | popPK | 10 | [10.1210/jcem-51-5-1085](https://doi.org/10.1210/jcem-51-5-1085) | [7419684](https://pubmed.ncbi.nlm.nih.gov/7419684) | The paper reports quantitative metabolic clearance rates (MCR) and plasma protein binding percentages for deoxycorticosterone in humans. |
| `Guerami_1983.pdf` | Guerami A et al., Metabolic clearance rate of plasma deox…, Journal of steroid biochemi… (1983) | popPK | 9 | [10.1016/0022-4731(83)90413-2](https://doi.org/10.1016/0022-4731(83)90413-2) | [6887924](https://pubmed.ncbi.nlm.nih.gov/6887924) | The paper reports quantitative metabolic clearance rates for plasma deoxycorticosterone sulfate, which is a metabolite/conjugate of the subject substance deoxycorticosterone, fitting the definition of toxicokinetic parameters for the substance. |

<sub>queue written 2026-11-10 00:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnoli_1989 | irrelevant | 0 | 0 | Deoxycorticosterone acetate is used solely as a tool to induce hydrosaline retention; the study reports pharmacodynamic effects of dopamine and sulpiride, not the toxicokinetic parameters of deoxycorticosterone. |
| popPK | Ammon_1978 | irrelevant | 0 | 0 | The paper is a clinical case report on glucose-induced hyperkalemia where desoxycorticosterone acetate is used therapeutically, but no quantitative toxicokinetic parameters (half-life, clearance, etc.) for the substance are reported. |
| popPK | BARTA_1949 | irrelevant | 0 | 0 | no_text gate: only 72 chars of text extracted (&lt; 400) |
| popPK | BENDA_1952 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| popPK | Bae_2010 | irrelevant | 0 | 0 | The paper studies the renoprotective effects of rosiglitazone in a DOCA-salt hypertension model but does not report any quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for deoxycorticosterone itself. |
| popPK | Bae_2019 | irrelevant | 0 | 0 | The paper investigates the renoprotective mechanisms of a histone deacetylase inhibitor (CG200745) in a disease model using DOCA as a challenge agent, but does not report any quantitative toxicokinetic parameters (half-life, clearance, etc.) for deoxycorticosterone itself. |
| popPK | Barra_2022 | irrelevant | 0 | 0 | The paper is a review on pharmacologic therapies for disorders of consciousness and does not mention deoxycorticosterone or report any kinetic parameters for it. |
| popPK | Bekersky_2002 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for amphotericin B, not deoxycorticosterone, which is not mentioned in the provided text. |
| popPK | Bowers_2005 | irrelevant | 0 | 0 | The paper uses deoxycorticosterone as a tool to induce hypertension but reports renal pathological outcomes, not toxicokinetic parameters (e.g., half-life, clearance, concentration) for deoxycorticosterone. |
| popPK | Budtz-Olsen_1975 | irrelevant | 0 | 0 | Deoxycorticosterone acetate is used only as a maintenance hormone replacement for adrenalectomized sheep, and no kinetic parameters (half-life, clearance, etc.) for deoxycorticosterone are reported. |
| popPK | Carroll_1981 | irrelevant | 0 | 0 | The paper studies the blood pressure effects of 5 alpha-dihydro-11-deoxycorticosterone (a metabolite/analogue) and 11-deoxycorticosterone acetate, but does not report quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) for deoxycorticosterone itself. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of docetaxel, not deoxycorticosterone. |
| popPK | Chen_2018 | irrelevant | 0 | 0 | The paper reports pharmacokinetic and pharmacodynamic models for docetaxel and cabozantinib, with no mention of deoxycorticosterone. |
| PGx | Chen_2026 | not_relevant | 0 | 0 | The paper investigates cardiac metabolic mechanisms in a heart failure model using DOCA as an injury inducer, not as the drug of interest for pharmacogenomic PK/PD analysis. |
| popPK | Christensen_2015 | irrelevant | 0 | 0 | The paper investigates the physiological function of the enzyme 11β-HSD1 knockout and reports a relative change in urinary excretion, but it does not provide quantitative kinetic parameters (half-life, rate constants, clearance values) for deoxycorticosterone itself. |
| PGx | Connell_2001 | not_relevant | 0 | 0 | The text is a general overview of mineralocorticoid disorders and does not report specific pharmacogenomic effects on the PK or PD of deoxycorticosterone. |
| popPK | DeLoia_2008 | irrelevant | 0 | 0 | The paper investigates the metabolism of taxanes (paclitaxel and docetaxel) in ovarian tumors and does not mention or study deoxycorticosterone. |
| popPK | Devang_2023 | irrelevant | 0 | 0 | The paper is an in silico molecular docking study of 11β-HSD1 inhibitors and does not report any toxicokinetic parameters (half-life, clearance, etc.) for deoxycorticosterone. |
| PGx | Ehrich_1986 | not_relevant | 0 | 0 | The paper reports the neurotoxicity of triorthotolyl phosphate (TOTP), not deoxycorticosterone; deoxycorticosterone is used as a co-substance to test for interactions, not the primary drug whose PK/PD is being studied. |
| popPK | Fan_2016 | irrelevant | 0 | 0 | The paper focuses on the delivery of docetaxel (DOC) and curcumin, and does not report kinetic parameters for deoxycorticosterone. |
| popPK | Farack_1983 | irrelevant | 0 | 0 | The paper studies the secretagogue effects of deoxycholic acid (DOC), a bile acid, in rats, not deoxycorticosterone, and does not provide toxicokinetic parameters for deoxycorticosterone. |
| popPK | Farack_1984 | irrelevant | 0 | 0 | The paper studies deoxycholic acid (a bile acid), not deoxycorticosterone, and reports physiological responses (fluid secretion, enzyme activity) rather than kinetic parameters for the target substance. |
| popPK | Friedman_1985 | irrelevant | 1 | 0 | Deoxycorticosterone is studied only as a co-exposure to assess its effect on erythrocyte clearance, not as the subject of toxicokinetic parameter measurement. |
| popPK | Furuya_1992 | irrelevant | 0 | 0 | Deoxycorticosterone is used only as a pretreatment agent to modify the renal physiology of the rabbits, and no kinetic parameters (half-life, clearance, etc.) for deoxycorticosterone itself are reported. |
| popPK | Gallay_1984 | irrelevant | 0 | 0 | The paper studies the biophysical effect of corticosteroids on lipid phase transitions in vitro, not the toxicokinetics (absorption, distribution, metabolism, excretion) of deoxycorticosterone in a biological subject. |
| popPK | Gehr_1986 | irrelevant | 0 | 0 | The study focuses on calcium excretion and nephron micropuncture data in a DOCA-salt model, reporting no kinetic parameters (half-life, clearance, etc.) for deoxycorticosterone itself. |
| popPK | Genest_1975 | irrelevant | 0 | 0 | The paper is a review discussing aldosterone and renin in hypertension, mentioning 18-hydroxy-11-deoxycorticosterone only as a related steroid with abnormal secretion rates, but providing no specific kinetic parameters (half-life, clearance, etc.) for deoxycorticosterone itself. |
| popPK | Gill_1969 | irrelevant | 0 | 0 | The paper uses desoxycorticosterone to treat dogs to control blood pressure and aldosterone levels, but it reports renal function parameters (sodium excretion, inulin clearance) rather than the toxicokinetic parameters of the drug itself. |
| PGx | Guo_2024 | not_relevant | 0 | 0 | The paper investigates the mechanisms of a traditional Chinese medicine (Rhododendron molle) in rheumatoid arthritis and does not report pharmacogenomic effects on deoxycorticosterone PK/PD. |
| popPK | Han_1993 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the subject substance bumetanide, using deoxycorticosterone acetate only to induce a hypertensive condition in rats. |
| popPK | Hartley_2016 | irrelevant | 0 | 0 | The paper investigates soil science (biochar effects on wheat micronutrients) and does not mention deoxycorticosterone or report any toxicokinetic parameters. |
| popPK | Heigwer_2024 | irrelevant | 0 | 0 | The study investigates renal development and glomerular filtration rate in zebrafish exposed to 11-deoxycorticosterone (a distinct isomer of deoxycorticosterone) and other corticosteroids, reporting no specific toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for deoxycorticosterone. |
| popPK | Hill_2011 | irrelevant | 0 | 0 | The paper characterizes the inhibition of the uptake2 transporter by 11-deoxycorticosterone in vitro, which is a mechanism of action study rather than a report of toxicokinetic parameters (half-life, clearance, partition coefficients) for the substance itself. |
| popPK | Horisberger_1983 | irrelevant | 0 | 0 | The paper is a physiological study of renal excretion effects (natriuresis/kaliuresis) in rats and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for deoxycorticosterone. |
| popPK | Huang_2007 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for docetaxel, not deoxycorticosterone. |
| popPK | Jadhav_2009 | irrelevant | 0 | 0 | The paper is a mechanistic study on hemin therapy in a DOCA-salt hypertension model and reports physiological outcomes (BP, renal function, markers) rather than toxicokinetic parameters (half-life, clearance, distribution) for deoxycorticosterone. |
| popPK | Jadhav_2024 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of Pazopanib, not deoxycorticosterone. |
| popPK | Jang_1994 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of furosemide, not deoxycorticosterone, which is only used as an agent to induce hypertension in the rat model. |
| popPK | Jankowiak_1990 | irrelevant | 0 | 0 | The paper reports physiological renal clearance of electrolytes (Na, K, Cl) following DOC administration, but does not report toxicokinetic parameters (half-life, elimination rate constant, partition coefficient) for deoxycorticosterone itself. |
| popPK | Johnstone_2013 | irrelevant | 0 | 0 | The paper studies cortisol binding to membrane receptors in tilapia, mentioning 11-deoxycorticosterone only as a competitor that displayed no affinity, with no kinetic parameters for deoxycorticosterone itself. |
| popPK | KYNCL_1960 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Kaji_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amphotericin B, not deoxycorticosterone. |
| popPK | Kaplan_1989 | irrelevant | 0 | 0 | The paper reviews the pharmacokinetics of quinapril, and deoxycorticosterone is only mentioned as a method to induce hypertension in rats, not as the subject of kinetic study. |
| popPK | Karlsen_2018 | irrelevant | 0 | 0 | The paper studies lymphatic flow in rats with deoxycorticosterone-salt as a treatment model for hypertension, not the toxicokinetics (half-life, clearance, etc.) of deoxycorticosterone itself. |
| popPK | Kenyon_1984 | irrelevant | 0 | 0 | The paper studies the physiological effects of steroid infusions on electrolyte balance and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for deoxycorticosterone. |
| popPK | Kiilerich_2018 | irrelevant | 0 | 0 | The paper is a physiological study on stress response and gene expression in fish, focusing on cortisol and receptor regulation, and does not report quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for deoxycorticosterone. |
| popPK | King_1991 | irrelevant | 0 | 0 | The paper uses deoxycorticosterone as a model to induce hypertension but reports vascular responses to L-NMMA, not toxicokinetic parameters for deoxycorticosterone itself. |
| popPK | Kolkhof_2014 | irrelevant | 0 | 0 | The paper focuses on the pharmacology of finerenone, and deoxycorticosterone acetate is used only as a model inducer, not as the subject of kinetic analysis. |
| popPK | Korake_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (t1/2, MRT, Cmax, AUC) for the anticancer drug docetaxel, not for deoxycorticosterone. |
| PGx | Laberge_2014 | not_relevant | 0 | 0 | The paper studies P-glycoprotein overexpression in cancer cells causing collateral sensitivity to deoxycorticosterone, which is not a pharmacogenomic study of a gene variant affecting drug PK/PD in the general population. |
| popPK | LeBlondel_1988 | irrelevant | 0 | 0 | The paper studies the effect of deoxycorticosterone as a hormonal replacement on tissue distribution of inorganic elements, not the toxicokinetic parameters of deoxycorticosterone itself. |
| popPK | Lee_2011 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for mirodenafil, while deoxycorticosterone is used only to induce a hypertensive state in the rats (DOCA-salt rats), not as the subject substance for kinetic measurement. |
| popPK | Li_2013 | irrelevant | 0 | 0 | The paper is a pathophysiology study on renal injury in DOC-salt hypertensive mice and does not report quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for deoxycorticosterone. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper is an analytical method development study for measuring steroid hormones in human specimens and does not report any toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for deoxycorticosterone. |
| popPK | Ling_1989 | irrelevant | 0 | 0 | The paper reports the urinary clearance of vasopressin (lysine vasopressin) in pigs treated with deoxycorticosterone acetate to induce hypertension; deoxycorticosterone is the inducing agent, not the subject substance for which kinetic parameters are reported. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The paper uses deoxycorticosterone acetate (DOCA) to induce a kidney disease model in rats but reports no pharmacokinetic or toxicokinetic parameters (half-life, clearance, etc.) for the substance itself. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a metabolomics study identifying deoxycorticosterone as a differential biomarker in chronic hepatitis B patients, reporting only diagnostic AUC values and group differences, not any toxicokinetic parameters (half-life, clearance, etc.) for the substance. |
| popPK | Luo_2016 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of docetaxel, a different substance, and does not contain data for deoxycorticosterone. |
| popPK | Ma_2012 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for docetaxel in mice, with no mention of deoxycorticosterone. |
| popPK | Mahmud_2013 | irrelevant | 0 | 0 | The paper focuses on eryptosis mechanisms in heart failure models and uses deoxycorticosterone acetate only as a vehicle for inducing hypertension, not as the subject of toxicokinetic analysis. |
| popPK | Maliszewska_2023 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of the anticancer drug docetaxel (DOC), not the steroid hormone deoxycorticosterone. |
| popPK | Martineau_2003 | irrelevant | 2 | 2 | The paper reports in vitro enzymatic activity (conversion percentages) of a recombinant enzyme producing deoxycorticosterone, but does not provide kinetic parameters for the disposition, elimination, or distribution of deoxycorticosterone itself in any organism. |
| PGx | Millette_2003_2 | not_relevant | 0 | 0 | The paper describes a study of hypertension treatment using DOCA-salt rats, containing no genetic variants or pharmacogenomic analysis affecting the PK/PD of deoxycorticosterone. |
| popPK | Milliez_1982 | irrelevant | 0 | 0 | The paper discusses renal physiology in pregnancy and mentions desoxycorticosterone only as a general regulator of sodium retention, without reporting any quantitative kinetic parameters for it. |
| popPK | Mori_2002 | irrelevant | 0 | 0 | Deoxycorticosterone acetate is used solely as an exposure agent to induce hypertension, and the paper reports no kinetic parameters for deoxycorticosterone itself. |
| popPK | Morris_2026 | irrelevant | 0 | 0 | The paper studies the effects of copper and pH on ion and water flux in fish, with no mention of deoxycorticosterone. |
| PGx | Mosa_2015 | not_relevant | 0 | 0 | The paper describes in vitro enzymatic activities of CYP11A1 and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of deoxycorticosterone. |
| popPK | Murali_2023 | irrelevant | 0 | 0 | The paper focuses on CAR-NK cell immunotherapy in zebrafish and contains no data or kinetic parameters for deoxycorticosterone. |
| popPK | Ménard_2014 | irrelevant | 0 | 0 | The paper reports kinetic parameters for the drug LCI699 and describes the increase in 11-deoxycorticosterone levels as a pharmacodynamic consequence of enzyme inhibition, but does not report specific toxicokinetic parameters (half-life, clearance, etc.) for deoxycorticosterone itself. |
| popPK | Nguyen_2023 | irrelevant | 0 | 0 | The paper uses deoxycorticosterone acetate (DOCA) as a tool to induce hypertension in rats to study renal pathology, and does not report kinetic parameters (half-life, clearance, etc.) for the substance itself. |
| popPK | Onishi_2013 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of docetaxel, not deoxycorticosterone. |
| popPK | Oparil_1987 | irrelevant | 0 | 0 | The paper discusses the role of renal nerves in hypertension using DOCA as a hypertensive model, but does not report any quantitative toxicokinetic parameters (half-life, clearance, etc.) for deoxycorticosterone itself. |
| popPK | Part_2020 | irrelevant | 0 | 0 | The paper investigates the fate of semiconductor quantum dots in landfill leachates and does not mention deoxycorticosterone or report any toxicokinetic parameters. |
| popPK | Pollock_2000 | irrelevant | 0 | 0 | The paper is a pharmacological study on hypertension outcomes in DOCA-salt rats and reports no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for deoxycorticosterone. |
| popPK | Poulin_2015 | irrelevant | 0 | 0 | The paper investigates six antineoplastic drugs (docetaxel, doxorubicin, etc.) in mice and does not mention deoxycorticosterone or report any kinetic parameters for it. |
| PGx | Qin_2019 | not_relevant | 2 | 5 | The paper discusses the endogenous steroid 11-deoxycorticosterone (DOC), not the drug deoxycorticosterone, and focuses on genetic causes of hypertension rather than drug pharmacokinetics/pharmacodynamics. |
| popPK | Qu_2017 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of docetaxel, not deoxycorticosterone. |
| popPK | Ryder_2014 | irrelevant | 0 | 0 | The paper studies organic carbon export from peatland catchments and contains no information regarding deoxycorticosterone or toxicokinetic parameters. |
| popPK | Saavedra_1991 | irrelevant | 0 | 0 | The paper uses deoxycorticosterone acetate (DOCA) only as a treatment to induce hypertension in rat models to study ANP receptors, and reports no kinetic parameters for the substance itself. |
| popPK | Sahan-Firat_2010 | irrelevant | 0 | 0 | The paper is a physiological/pathophysiological study on hypertension mechanisms and reports blood pressure and organ function data, but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for deoxycorticosterone. |
| popPK | Saleh_2024 | irrelevant | 0 | 0 | The paper evaluates the pharmacokinetics and efficacy of the FGFR inhibitor pemigatinib, not deoxycorticosterone, and contains no kinetic data for the target substance. |
| popPK | Sarzani_1991 | irrelevant | 0 | 0 | The paper reports gene expression changes in PDGF receptors induced by deoxycorticosterone acetate (DOCA) treatment, containing no pharmacokinetic or toxicokinetic parameters (half-life, clearance, etc.) for deoxycorticosterone itself. |
| popPK | Seymour_1991 | irrelevant | 0 | 0 | The paper uses deoxycorticosterone acetate (DOCA) only to create a hypertensive model in rats to study atrial natriuretic factor (ANF) kinetics, not to measure the toxicokinetic parameters of deoxycorticosterone itself. |
| popPK | Shah_2019 | irrelevant | 0 | 0 | The paper focuses on water quality monitoring in peatlands and does not contain any data or parameters for deoxycorticosterone. |
| popPK | Shulga_1982 | irrelevant | 2 | 0 | The paper reports qualitative changes in deoxycorticosterone production (declined) in an in vitro study but provides no quantitative kinetic parameters (such as half-life, rate constants, or partition coefficients) for the substance. |
| PGx | Stepinski_2000 | not_relevant | 0 | 0 | The paper studies the physiological interaction between ANP and NO systems in rat glomeruli using DOCA as a pretreatment agent, but does not report pharmacogenomic effects on the PK or PD parameters of deoxycorticosterone. |
| PGx | Storbeck_2019 | not_relevant | 0 | 0 | The paper discusses androgen metabolism in prostate cancer and does not mention deoxycorticosterone. |
| popPK | Strajhar_2019 | irrelevant | 1 | 0 | The paper measures deoxycorticosterone as a biomarker of HPA axis activity in response to amphetamine, but does not report kinetic parameters (e.g., half-life, clearance) for deoxycorticosterone itself. |
| popPK | Sugarman_1988 | irrelevant | 0 | 0 | The paper studies the effect of deoxycorticosterone (DOCA) on potassium metabolism, reporting kinetic parameters for potassium (volume of distribution), not for deoxycorticosterone itself. |
| popPK | Surbeck_2010 | irrelevant | 0 | 0 | The paper studies fecal indicator bacteria in an urban stream and does not contain any toxicokinetic parameters for deoxycorticosterone. |
| popPK | Toba_2022 | irrelevant | 0 | 0 | The paper is a study on renal fibrosis pathophysiology and does not report any quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for deoxycorticosterone. |
| popPK | Villarreal_1993 | irrelevant | 0 | 0 | The paper investigates the physiological effects of deoxycorticosterone acetate on sodium balance and neurohumoral modulation, but it does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for the substance itself. |
| popPK | Wang_2005 | irrelevant | 0 | 0 | The paper focuses on Endothelin-1 (ET-1) kinetics in DOCA-salt hypertensive rats, using DOCA solely as a model inducer rather than measuring its toxicokinetic parameters. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The paper focuses on renal injury mechanisms (inflammation and hypertension) induced by DOCA-salt treatment in mice and does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for deoxycorticosterone. |
| popPK | Watson_2018 | irrelevant | 0 | 0 | The paper reviews devices and methods for biliary and pancreatic lithotripsy (stone fragmentation) and contains no data on the toxicokinetics of deoxycorticosterone. |
| popPK | Wexler_1979 | irrelevant | 0 | 0 | The paper reports a toxicological outcome (myocardial infarction and survival) and measures biomarkers of tissue damage (enzymes, lipids), but it does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, concentration vs. time) for deoxycorticosterone itself. |
| popPK | Wingo_1985 | irrelevant | 0 | 0 | The paper studies the effects of aldosterone on renal tubules, and deoxycorticosterone is mentioned only as a method to induce hypertrophy in the animals, with no kinetic parameters reported for deoxycorticosterone itself. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | The paper investigates NRBF2 and apoptotic cell clearance in colitis models and does not report any toxicokinetic parameters for deoxycorticosterone. |
| PGx | Yagil_1996 | not_relevant | 2 | 0 | The paper describes the development and genetic validation of a rat colony model (SBH/y and SBN/y) using DOCA-salt to induce hypertension, but it does not report pharmacogenomic effects on the specific PK or PD parameters of deoxycorticosterone itself; the primary focus is on blood pressure phenotypes and genetic markers for the animal model. |
| popPK | Yoon_1997 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of DA-125 and its metabolites; deoxycorticosterone acetate is only used as an agent to induce hypertension in the rat model and is not the subject of kinetic analysis. |
| popPK | Youm_2014 | irrelevant | 0 | 0 | The paper investigates the cellular uptake of docetaxel-loaded nanocapsules and does not report any kinetic parameters for deoxycorticosterone. |
| popPK | Zamboni_2000 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of docetaxel and topotecan, not deoxycorticosterone. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of Docetaxel (a chemotherapy drug) and does not mention deoxycorticosterone. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is an epidemiological study examining the association between toxic metal exposure and serum ion balance, using deoxycorticosterone levels as a biomarker/mediator, but it reports no quantitative toxicokinetic parameters (e.g., half-life, clearance) for deoxycorticosterone. |
| popPK | Zucker_1978 | irrelevant | 0 | 0 | The paper uses deoxycorticosterone acetate as a pharmacological agent to test renal responses in dogs, but reports no kinetic parameters (half-life, clearance, etc.) for the substance itself. |
| popPK | de_1978 | irrelevant | 0 | 0 | The paper investigates the physiological mechanism of carotid-occlusion diuresis in dogs using deoxycorticosterone as a co-exposure to ADH, but does not report any quantitative toxicokinetic parameters (half-life, clearance, etc.) for deoxycorticosterone itself. |
| PGx | de_1982 | not_relevant | 0 | 0 | The paper reports a case of 17 alpha-hydroxylase deficiency (an enzyme defect) but does not investigate the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of deoxycorticosterone as a drug. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | The provided text is a funding correction notice for a paper on desoxycorticosterone pivalate in dogs and contains no quantitative pharmacokinetic data or numeric values. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdeoxycorticosterone%5D&body=Drug%3A%20deoxycorticosterone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_deoxycorticosterone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-10 00:01 UTC</sub>
