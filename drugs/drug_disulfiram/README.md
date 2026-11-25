<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07B&quot;,&quot;href&quot;:&quot;atc/N07B.md&quot;},{&quot;label&quot;:&quot;disulfiram&quot;}]"></div>

# disulfiram

- **generic name:** disulfiram
- **ATC codes:** `N07BB01`, `P03AA04`
- **DrugBank:** [DB00822](https://go.drugbank.com/drugs/DB00822) · **PubChem:** [CID 3117](https://pubchem.ncbi.nlm.nih.gov/compound/3117)
- **molar mass:** 296.539 g/mol (C10H20N2S4) — DrugBank
- **groups:** approved, investigational

## About

Disulfiram is an acetaldehyde dehydrogenase inhibitor used to support treatment for alcohol dependence. It is typically given by mouth as tablets, though topical preparations are also available for other purposes. The drug is approved for clinical use and is widely employed in managing chronic alcoholism.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q409665](https://www.wikidata.org/wiki/Q409665), [Wikipedia](https://en.wikipedia.org/wiki/Disulfiram?oldid=1383535580) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| disulfiram | parent | 296.539 | C10H20N2S4 | DrugBank | [3117](https://pubchem.ncbi.nlm.nih.gov/compound/3117) | Lee_2019 |
| carbamathione | metabolite | — (mass units only) | — | — | — | — |
| diethyldithiocarbamate-methyl ester | metabolite | 163.297 | C6H13NS2 | PubChem | [12704](https://pubchem.ncbi.nlm.nih.gov/compound/12704) | Lee_2019 |
| N,N-diethyldithiocarbamate | metabolite | 148.262 | C5H10NS2- | PubChem | [28343](https://pubchem.ncbi.nlm.nih.gov/compound/28343) | Lee_2019 |
| S-methyl-N,N-diethylthiolcarbamate sulfoxide | metabolite | 163.235 | C6H13NO2S | PubChem | [3035711](https://pubchem.ncbi.nlm.nih.gov/compound/3035711) | Lee_2019 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: nonlinear topology</sub> | [Lee_2019_reference](drugs/drug_disulfiram/Disulfiram_Lee2019_reference.md) | — | nonlinear / manual (no model) | 3 | Lee SA et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1220](https://doi.org/10.1002/cpt.1220) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Gruber_2020_VCL](drugs/drug_disulfiram/pd_Gruber_2020_VCL.md) | sperm motility (curvilinear velocity, VCL, % of DMSO control) ← Disulfiram · direct sigmoid Emax (Hill) effect | — | Gruber FS et al., A phenotypic screening platform utilisi…, eLife (2020) | [10.7554/elife.51739](https://doi.org/10.7554/elife.51739) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Lee_2019_CA_US_HIV_RNA](drugs/drug_disulfiram/pd_Lee_2019_CA_US_HIV_RNA.md) | cell-associated unspliced HIV RNA ← disulfiram · direct sigmoid Emax (Hill) effect | — | Lee SA et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacology and t… (2019) | [10.1002/cpt.1220](https://doi.org/10.1002/cpt.1220) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pasquereau_2021_CC50](drugs/drug_disulfiram/pd_Pasquereau_2021_CC50.md) | Cell viability (cytotoxicity, MTT assay) ← disulfiram · direct sigmoid Emax (Hill) effect | — | Pasquereau S et al., Resveratrol Inhibits HCoV-229E and SARS…, Viruses (2021) | [10.3390/v13020354](https://doi.org/10.3390/v13020354) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Pasquereau_2021_PFU](drugs/drug_disulfiram/pd_Pasquereau_2021_PFU.md) | Inhibition of HCoV-229E replication (plaque forming units) ← disulfiram · direct sigmoid Emax (Hill) effect | — | Pasquereau S et al., Resveratrol Inhibits HCoV-229E and SARS…, Viruses (2021) | [10.3390/v13020354](https://doi.org/10.3390/v13020354) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Wertheimer_2017_cell_growth_FHL_124_lens_epithelial_cell_proliferation](drugs/drug_disulfiram/pd_Wertheimer_2017_cell_growth_FHL_124_lens_epithelial_cell_pro.md) | cell growth (FHL-124 lens epithelial cell proliferation) ← disulfiram · direct sigmoid Emax (Hill) effect | — | Wertheimer C et al., The Intraocular Lens as a Drug Delivery…, Investigative ophthalmology… (2017) | [10.1167/iovs.17-22555](https://doi.org/10.1167/iovs.17-22555) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Xiao_2009_ALDH1A1](drugs/drug_disulfiram/pd_Xiao_2009_ALDH1A1.md) | human lens ALDH1A1 ← disulfiram · inhibition effect | — | Xiao T et al., Molecular cloning and oxidative modific…, Journal of toxicology and e… (2009) | [10.1080/15287390802706371](https://doi.org/10.1080/15287390802706371) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:41 | 0:06 | 1/0/0 | 6/0/0 | 0/0/0 | 4,066/193 | einfracz / qwen3.8-27b | 33 | 2/28 | 31/2 | 0 |

## Coverage

- **PubMed hits:** 295 matched, 142 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abernethy_1984 | irrelevant | 0 | 0 | Disulfiram is mentioned only as a drug that inhibits benzodiazepine oxidation; no PK parameters for disulfiram itself are reported. |
| PGx | Abernethy_1984 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving benzodiazepines and lists disulfiram as an inhibitor, but it does not report a pharmacogenomic effect (gene variant) on the PK or PD of disulfiram. |
| popPK | Agarwal_1986 | irrelevant | 1 | 1 | The study characterizes in-vitro chemical degradation kinetics of disulfiram in serum (interaction with albumin) rather than in-vivo population pharmacokinetic parameters (CL, V, ka) for the drug as a subject. |
| PGx | Agarwal_1986 | not_relevant | 0 | 0 | The paper describes the chemical mechanism of disulfiram degradation by serum albumin in vitro but does not report any pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| popPK | Allen_1992 | irrelevant | 0 | 0 | The paper is a review of compliance strategies for disulfiram and does not contain any pharmacokinetic data or quantitative disposition parameters. |
| PGx | Allen_1992 | not_relevant | 0 | 0 | The paper reviews behavioral strategies to enhance compliance with disulfiram and contains no data on pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Allen_2026 | irrelevant | 0 | 0 | Systematic review/meta-analysis of AUD pharmacotherapy efficacy by sex; no disulfiram PK parameters reported. |
| popPK | Alsaad_2014 | irrelevant | 0 | 0 | The paper is a review of antimicrobial activity for MDR-TB treatment, not a pharmacokinetic study reporting quantitative PK parameters for disulfiram. |
| PGx | Alsaad_2014 | not_relevant | 0 | 0 | The paper reviews the antimicrobial potential of disulfiram for tuberculosis and does not report pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Argüello-García_2021 | irrelevant | 0 | 0 | The paper is a review on Giardia duodenalis virulence factors and only mentions disulfiram as a cysteine-modifying compound targeting Giardia proteins, containing no pharmacokinetic data. |
| PGx | Argüello-García_2021 | not_relevant | 0 | 0 | The paper is a review on Giardia duodenalis virulence and mentions disulfiram only as a general cysteine-modifying compound active against Giardia proteins, with no data on human pharmacogenomics, PK, or PD parameters. |
| popPK | Arias_2014 | irrelevant | 0 | 0 | The study is a pharmacogenetic analysis of treatment response (drinking outcomes) and does not report any quantitative pharmacokinetic parameters for disulfiram. |
| PGx | Arias_2014 | not_relevant | 3 | 8 | The study reports a pharmacodynamic association (drinks per drinking day) for disulfiram, but does not provide fitted effect sizes (theta) or direct PK parameters, and the primary focus is on naltrexone. |
| popPK | Baffoe_2015 | irrelevant | 0 | 0 | The study is an in-vitro pharmaceutical development paper focusing on tablet dissolution and release kinetics, not in-vivo pharmacokinetic parameter estimation (CL, V, etc.). |
| PGx | Baffoe_2015 | not_relevant | 0 | 0 | The paper describes the development of a drug delivery system (vaginal tablets) for disulfiram, not a pharmacogenomic study linking genetic variants to PK/PD parameters. |
| popPK | Bakthavatsalam_2020 | irrelevant | 0 | 0 | The study focuses on in vitro synthesis and cytotoxicity of dithiocarbamate prodrugs, reporting no quantitative pharmacokinetic parameters (CL, V, t1/2) for disulfiram. |
| PGx | Bakthavatsalam_2020 | not_relevant | 0 | 0 | The paper describes the design and testing of new prodrugs for targeted cancer therapy, not the effect of human genetic variants on disulfiram's pharmacokinetics or pharmacodynamics. |
| popPK | Barth_2010 | irrelevant | 2 | 0 | The paper is a review of clinical trials and mechanisms; no original quantitative pharmacokinetic parameter values (CL, V, t1/2, etc.) for disulfiram are present in the evidence. |
| PGx | Barth_2010 | not_relevant | 1 | 1 | The text is a review of disulfiram's clinical applications and general PK/PD, but it does not report specific pharmacogenomic effects or data. |
| popPK | Batlle_2025 | irrelevant | 0 | 0 | This is a computational ALDH1A3 inhibitor discovery study; disulfiram is only mentioned as a known ALDH inhibitor, with no PK parameters for it. |
| popPK | Bayless_1986 | irrelevant | 0 | 0 | The study investigates the inhibition of mutagenicity and metabolism of benzo[a]pyrene derivatives in vitro, using disulfiram only as a test compound/inhibitor rather than measuring its own pharmacokinetic parameters. |
| PGx | Bayless_1986 | not_relevant | 0 | 0 | The paper reports disulfiram as an inhibitor of chemical mutagenicity and discusses the mechanism of a different compound (2Cl-PTH), without linking disulfiram's PK/PD to any genetic variant. |
| popPK | Bell_2012 | irrelevant | 0 | 0 | This is an introduction/review paper for a special issue on alcohol abuse pharmacotherapies that does not report original quantitative pharmacokinetic parameters (CL, V, etc.) for disulfiram. |
| PGx | Bell_2012 | not_relevant | 0 | 0 | The paper is an introduction and patent summary that mentions pharmacogenetics only in a general overview context without reporting specific effects on PK/PD parameters for disulfiram. |
| popPK | Bertin_2023 | irrelevant | 0 | 0 | This is an in vitro drug-combination synergy ML study with no disulfiram PK parameters or disposition values. |
| popPK | Blanco-Ayala_2020 | irrelevant | 0 | 0 | The paper studies the inhibition of kynurenine aminotransferase II by N-acetylcysteine, and disulfiram is mentioned only as a tool to modify the enzyme (S-glutathionylation) rather than as the subject of a pharmacokinetic study. |
| PGx | Blanco-Ayala_2020 | not_relevant | 0 | 0 | The paper studies the mechanism of N-acetylcysteine on Kynurenine Aminotransferase II, not the pharmacokinetics or pharmacodynamics of disulfiram modulated by genetic variants. |
| popPK | Bourdélat-Parks_2005 | irrelevant | 0 | 0 | The study investigates the mechanism of disulfiram as a dopamine beta-hydroxylase inhibitor affecting catecholamine levels in mouse brain/tissue, not the pharmacokinetic disposition parameters (CL, Vd, etc.) of disulfiram itself. |
| PGx | Bourdélat-Parks_2005 | not_relevant | 2 | 8 | The study examines the interaction of DBH genotype and disulfiram on catecholamine levels (a downstream PD biomarker/metabolic effect), but it does not report standard pharmacokinetic parameters (AUC, Cmax, clearance) or the primary pharmacodynamic endpoint of disulfiram (e.g., acetaldehyde accumulation or aversion). |
| popPK | Caputo_2014 | irrelevant | 0 | 0 | The paper is a narrative review of pharmacological management strategies for alcohol dependence and does not report original quantitative pharmacokinetic parameter values for disulfiram. |
| PGx | Caputo_2014 | not_relevant | 0 | 0 | The text is a general review of pharmacological management and the concept of pharmacogenetics for alcohol dependence but does not report specific gene-variant effects on the PK or PD parameters of disulfiram. |
| popPK | Chen_2008 | irrelevant | 0 | 0 | The study investigates the mechanism of apoptosis in cultured astrocytes induced by copper and neocuproine, mentioning disulfiram only as a potential chelator in the discussion, with no PK data. |
| PGx | Chen_2008 | not_relevant | 0 | 0 | The paper discusses disulfiram as a copper chelator affecting astrocyte apoptosis, not its pharmacokinetics or pharmacodynamics via genetic variants. |
| popPK | Cheng_2026 | irrelevant | 0 | 0 | The paper is a review focused on paclitaxel nanomedicines and does not report pharmacokinetic parameters for disulfiram. |
| PGx | Cheng_2026 | not_relevant | 0 | 0 | The paper focuses on paclitaxel nanomedicines and contains no information regarding the pharmacokinetics or pharmacodynamics of disulfiram. |
| popPK | Cobbina_2021 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of PF-5190457, not disulfiram. |
| PGx | Cobbina_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of PF-5190457 and the effect of alcohol consumption status, not the pharmacogenomics of disulfiram. |
| popPK | Corsello_2020 | irrelevant | 0 | 0 | The paper is an in-vitro cancer cell viability profiling study that identifies genomic biomarkers for disulfiram sensitivity but contains no pharmacokinetic parameters (CL, V, ka, t1/2). |
| PGx | Corsello_2020 | not_relevant | 2 | 5 | The paper reports gene expression (metallothioneins) affecting cancer cell viability (PD) in vitro, not the pharmacokinetics or standard pharmacodynamics of disulfiram in humans. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir pharmacokinetics in HIV, and disulfiram is only mentioned in the context of drug interactions (disulfiram-like reactions with ethanol in the formulation), with no PK parameters for disulfiram provided. |
| PGx | Cvetkovic_2003 | not_relevant | 0 | 0 | The paper is a review of lopinavir/ritonavir and does not report pharmacogenomic effects on disulfiram. |
| popPK | Dalla_2011 | irrelevant | 0 | 0 | The study investigates the synergistic antiproliferative mechanism of disulfiram in cancer cells and mice, not the pharmacokinetics (disposition parameters) of the drug. |
| PGx | Dalla_2011 | not_relevant | 0 | 0 | The paper investigates the synergistic antiproliferative effects of gemcitabine and disulfiram in cell lines and mice, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of disulfiram itself. |
| popPK | Damkier_1999 | irrelevant | 0 | 0 | Disulfiram is used only as a CYP2E1 inhibitor/probe to assess the pharmacokinetics of quinidine, not as the subject drug. |
| PGx | Damkier_1999 | not_relevant | 0 | 0 | The study focuses on drug-drug interactions affecting quinidine pharmacokinetics, not pharmacogenomic effects on disulfiram. |
| popPK | Ding_2023 | irrelevant | 0 | 0 | Disulfiram is used as a mechanism-based ALDH2 inhibitor in this cardioprotection study, not as the subject of a pharmacokinetic analysis. |
| PGx | Ding_2023 | not_relevant | 0 | 0 | The paper investigates the cardioprotective mechanism of Calycosin and its interaction with ALDH2, using disulfiram only as an inhibitor to block ALDH2 activity, rather than studying the pharmacokinetics or pharmacodynamics of disulfiram itself. |
| popPK | Dos-Santos_2025 | irrelevant | 0 | 0 | This is a rat study of ketamine's cardiovascular effects; disulfiram is only mentioned as a comparator in cited literature, with no PK parameters for disulfiram. |
| popPK | EFSA_2019 | irrelevant | 0 | 0 | EFSA risk assessment on quinolizidine alkaloids (sparteine etc.), no disulfiram PK parameters reported. |
| popPK | Elliott_2015 | irrelevant | 2 | 1 | The study reports pharmacodynamic effects (HIV RNA levels) rather than quantitative pharmacokinetic disposition parameters (CL, V, etc.) for disulfiram. |
| PGx | Elliott_2015 | not_relevant | 0 | 0 | The paper is a phase 2 clinical trial assessing the effect of disulfiram on HIV viral load and does not report any gene variant or pharmacogenomic analysis. |
| popPK | Fraser_1997 | irrelevant | 0 | 0 | This is a review article discussing pharmacokinetic interactions with alcohol, and disulfiram is mentioned only in the context of disulfiram-like reactions (pharmacodynamics), not as the subject of a PK study with quantitative parameters. |
| PGx | Fraser_1997 | not_relevant | 1 | 0 | The text is a general review of alcohol-drug pharmacokinetic interactions and mentions disulfiram only as a side effect (disulfiram-like reactions), without reporting any pharmacogenomic effects on PK/PD parameters. |
| popPK | Frye_1999 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of vesnarinone; disulfiram is used only as a CYP2E1 inhibitor/co-administered agent and no PK parameters for disulfiram itself are reported. |
| PGx | Frye_1999 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (disulfiram inhibiting CYP2E1 affecting vesnarinone PK), not a pharmacogenomic effect of a genetic variant on the PK/PD of disulfiram itself. |
| popPK | Frye_2002 | irrelevant | 0 | 0 | The study investigates enzyme inhibition using probe drugs (caffeine, chlorzoxazone, etc.) and does not report pharmacokinetic parameters (CL, V, t1/2) for disulfiram itself. |
| PGx | Frye_2002 | not_relevant | 0 | 0 | The study investigates the effect of disulfiram on probe drug metabolism (enzyme activity) in ungenotyped healthy subjects, not the effect of a specific genetic variant on the PK/PD of disulfiram. |
| popPK | Goh_2017 | irrelevant | 0 | 0 | This is a review article on pharmacotherapy for alcohol dependence that does not report original quantitative pharmacokinetic parameter values for disulfiram. |
| PGx | Goh_2017 | not_relevant | 2 | 1 | The paper is a general review of pharmacotherapy for alcohol dependence that mentions pharmacogenetics as a factor but does not report specific genetic effects on the PK or PD parameters of disulfiram. |
| popPK | Gomez_2025 | irrelevant | 0 | 0 | This is a cocaine chemogenetics study in rats; disulfiram is not mentioned and no PK parameters for disulfiram appear. |
| popPK | Gruber_2020 | irrelevant | 0 | 0 | This is a sperm motility screening study; disulfiram is only a screening hit with an in-vitro EC50/effect, no PK disposition parameters. |
| popPK | Haile_2009 | irrelevant | 0 | 0 | The paper is a review of pharmacogenetics in addiction and does not report pharmacokinetic parameters for disulfiram. |
| PGx | Haile_2009 | not_relevant | 2 | 1 | The paper mentions disulfiram in the context of a DbetaH SNP affecting paranoia (a side effect/PD outcome), but it is a review with no fitted effect sizes or primary pharmacokinetic/pharmacodynamic data for disulfiram. |
| popPK | Hao_2021 | irrelevant | 0 | 0 | The study is an in vitro pharmacological screening for antifungal activity and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for disulfiram. |
| PGx | Hao_2021 | not_relevant | 0 | 0 | The paper reports the antifungal efficacy of disulfiram on Candida strains but contains no data on pharmacogenomics, genotype effects, or PK/PD parameter variations based on genetic variants. |
| popPK | Hazai_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of disulfiram's inhibitory effect on CYP2E1-mediated acetaminophen metabolism, reporting IC50 values rather than population pharmacokinetic parameters. |
| PGx | Hazai_2002 | not_relevant | 0 | 0 | The paper investigates disulfiram as a CYP2E1 inhibitor to reduce acetaminophen toxicity, rather than analyzing how genetic variants affect disulfiram's PK/PD parameters. |
| popPK | Helton_2015 | irrelevant | 0 | 0 | This is a review of pharmacogenetics in alcohol use disorders, not a pharmacokinetic study providing quantitative disposition parameters for disulfiram. |
| PGx | Helton_2015 | not_relevant | 2 | 0 | The text is a review overview that mentions pharmacogenetics for disulfiram but does not report specific quantitative effects of gene variants on PK/PD parameters. |
| popPK | Hennighausen_1988 | irrelevant | 0 | 0 | The study investigates the in vitro and in vivo effects of dithiocarbamates on mitotic activity and does not report any pharmacokinetic disposition parameters for disulfiram. |
| PGx | Hennighausen_1988 | not_relevant | 0 | 0 | The paper studies the mitotic activity of thymocytes induced by disulfiram and analogs, not the impact of genetic variants on pharmacokinetics or pharmacodynamics. |
| PGx | Hultsch_2018 | not_relevant | 0 | 0 | Paper studies tamoxifen resistance and disulfiram sensitivity in cell lines; no gene variant/genotype effect on disulfiram PK/PD parameters reported. |
| popPK | Igwe_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 1,2-dichloroethane, with disulfiram serving only as a pretreatment agent to modify metabolism, rather than being the subject drug. |
| PGx | Igwe_1986 | not_relevant | 0 | 0 | The paper studies the effect of disulfiram on the metabolism of 1,2-dichloroethane, not a pharmacogenomic effect on disulfiram's own PK/PD parameters. |
| popPK | Iljin_2009 | irrelevant | 0 | 0 | The study focuses on the antineoplastic efficacy of disulfiram in prostate cancer cells (mechanistic/cellular studies), not on its pharmacokinetic disposition parameters. |
| PGx | Iljin_2009 | not_relevant | 0 | 0 | The paper reports on the efficacy of disulfiram in prostate cancer cell lines but does not investigate the impact of specific gene variants or genotypes on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | J_2019 | irrelevant | 0 | 0 | This is a computational/in silico study on molecular docking and dynamics, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | J_2019 | not_relevant | 0 | 0 | The paper presents in silico (computational) docking and MD simulations rather than experimental data on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Johansson_1992 | irrelevant | 4 | 0 | The paper is a narrative review of pharmacokinetics and pharmacodynamics that discusses metabolic pathways and qualitative relationships (e.g., proportionality of concentrations to dose) but does not report quantitative numeric PK parameter values (CL, V, ka, etc.) in the provided evidence. |
| PGx | Johansson_1992 | not_relevant | 2 | 0 | The paper reviews general PK/PD and the impact of liver damage (hepatocellular damage) on metabolism, but does not report pharmacogenomic effects (gene variants/genotypes) on disulfiram PK/PD parameters. |
| popPK | Johnsen_1992 | irrelevant | 0 | 0 | The study focuses on clinical responses and blood acetaldehyde levels in relation to drug-ethanol interactions, reporting no pharmacokinetic parameters (CL, V, ka, t1/2) for disulfiram. |
| PGx | Johnsen_1992 | not_relevant | 0 | 0 | The study examines dose-response and clinical correlations in a mixed volunteer group without reporting specific genetic variants or pharmacogenomic effects. |
| popPK | Johnson_2010 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of V-ATPase inhibition in yeast, containing no pharmacokinetic parameters for disulfiram. |
| PGx | Johnson_2010 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of disulfiram as a V-ATPase inhibitor in yeast and does not report on pharmacogenomic effects or human pharmacokinetics/pharmacodynamics. |
| popPK | Kampangkaew_2019 | irrelevant | 0 | 0 | The study is a pharmacogenetic analysis of treatment response (cocaine use outcomes) and contains no pharmacokinetic parameters (CL, V, ka, etc.) for disulfiram. |
| popPK | Kang_2026 | irrelevant | 0 | 0 | This is a computational drug–food interaction prediction study with no disulfiram PK parameters; disulfiram is not the subject drug and no PK values are present. |
| popPK | Katz_1992 | irrelevant | 0 | 0 | The study is an in vitro receptor binding assay measuring IC50 values for competitive inhibition, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Katz_1992 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding interactions and does not investigate the influence of gene variants or genotypes on the pharmacokinetics or pharmacodynamics of disulfiram. |
| popPK | Kenna_2004 | irrelevant | 0 | 0 | This is a review article discussing pharmacotherapy for alcohol dependence and does not report original quantitative pharmacokinetic parameter values for disulfiram. |
| PGx | Kenna_2004 | not_relevant | 2 | 0 | The paper is a general review of pharmacotherapies and pharmacogenomics in alcohol dependence that mentions disulfiram and naltrexone but does not report any specific gene-variant or genotype effects on their pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kenna_2004_2 | irrelevant | 0 | 0 | The paper is a review of pharmacotherapy for alcohol dependence and does not report any quantitative pharmacokinetic parameters for disulfiram. |
| PGx | Kenna_2004_2 | not_relevant | 1 | 0 | This is a general review discussing the role of pharmacogenomics in alcoholism treatment and does not report specific genetic effects on the pharmacokinetics or pharmacodynamics of disulfiram. |
| popPK | Kharasch_1999 | irrelevant | 0 | 0 | The study uses disulfiram as a mechanism-based inhibitor probe to assess the activity of other CYP isoforms, rather than reporting the pharmacokinetic parameters of disulfiram itself. |
| PGx | Kharasch_1999 | not_relevant | 0 | 0 | The paper investigates disulfiram's effect on other CYP enzymes, not the effect of a genetic variant on disulfiram's PK or PD parameters. |
| popPK | Kharasch_2000 | irrelevant | 0 | 0 | Disulfiram is used only as a mechanism-based CYP2E1 inhibitor to study halothane metabolism, not as the subject drug for pharmacokinetic parameter estimation. |
| PGx | Kharasch_2000 | not_relevant | 0 | 0 | The paper investigates the metabolic interaction between disulfiram and halothane, not the pharmacokinetics or pharmacodynamics of disulfiram itself. |
| popPK | Kleczkowska_2021 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamic interactions and lacks original quantitative pharmacokinetic parameter values for disulfiram. |
| PGx | Kleczkowska_2021 | not_relevant | 0 | 0 | The paper is a review of pharmacological interactions between disulfiram and addictive substances, not a report on pharmacogenomic effects on PK/PD parameters. |
| popPK | Kosten_2013 | irrelevant | 0 | 0 | The study is a pharmacogenetic trial of disulfiram for cocaine addiction, reporting on efficacy (cocaine-positive urines) and genotype outcomes, but it does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Kranzler_2018 | irrelevant | 0 | 0 | This is a clinical review of treatment guidelines for Alcohol Use Disorder and does not report quantitative pharmacokinetic parameters for disulfiram. |
| PGx | Kranzler_2018 | not_relevant | 0 | 0 | The paper is a general review of AUD treatment and explicitly states that there is not sufficient evidence to support pharmacogenetics for personalizing AUD treatments; it does not report specific gene-variant effects on disulfiram PK/PD. |
| popPK | Kulkarni_2013 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on enzyme inhibition (LYP) and does not report pharmacokinetic parameters for disulfiram. |
| PGx | Kulkarni_2013 | not_relevant | 0 | 0 | The paper describes disulfiram as an inhibitor of a target enzyme (LYP) in a mechanistic study, reporting no pharmacokinetic or pharmacodynamic parameters, and critically, no gene variants or genotypes that modify these effects. |
| popPK | Langhammer_2014 | irrelevant | 0 | 0 | The study is an in-vitro CYP2E1 inhibition assay using disulfiram only as a positive control, not as the subject of a pharmacokinetic analysis. |
| PGx | Langhammer_2014 | not_relevant | 0 | 0 | The paper investigates herbal inhibitors of CYP2E1 regarding acetaminophen metabolism, using disulfiram only as an unrelated positive control. |
| popPK | Leal_2023 | irrelevant | 0 | 0 | This is a population-wide polypharmacy/dosage-adjustment registry study; disulfiram appears only as one co-medication pair with an odds ratio, with no PK parameters. |
| popPK | Lee_2013 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assay evaluating CYP enzyme inhibition where disulfiram is a probe inhibitor, not a pharmacokinetic study reporting disposition parameters for disulfiram. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | The paper describes in vitro CYP inhibition assays and mentions disulfiram as a metabolism-dependent inhibitor, but does not report any gene variants, genotypes, or pharmacogenomic effects on disulfiram's PK or PD parameters. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | The study investigates population PK/PD parameters and HIV transcription response but does not report the effect of any gene variant or genotype on these parameters. |
| PGx | Lehner_2024 | not_relevant | 3 | 1 | Review abstract mentions ALDH2 polymorphisms and disulfiram use but reports no gene-variant effect on disulfiram PK/PD parameters. |
| popPK | Lennard_1998 | irrelevant | 0 | 0 | The paper is a review of thiopurine methyltransferase (TPMT) and only mentions disulfiram in the context of a potential drug interaction mechanism, without reporting any pharmacokinetic parameters for disulfiram. |
| PGx | Lennard_1998 | not_relevant | 5 | 2 | The paper only hypothesizes a potential interaction where TPMT may affect disulfiram activation, without reporting any measured PK/PD data or quantitative pharmacogenomic effects for disulfiram. |
| popPK | Levy_1995 | irrelevant | 0 | 0 | The paper is a review of cytochrome P450 isoforms and drug interactions, mentioning disulfiram only as an inhibitor of CYP2C9 without reporting any quantitative pharmacokinetic parameters for disulfiram. |
| PGx | Levy_1995 | not_relevant | 1 | 2 | The paper discusses phenytoin and carbamazepine metabolism, not disulfiram pharmacokinetics. |
| popPK | Lindros_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacology of phenethyl isothiocyanate (PEITC), using disulfiram only as a comparator for ALDH inhibition potency, and does not report any pharmacokinetic parameters for disulfiram. |
| PGx | Lindros_1995 | not_relevant | 0 | 0 | The study reports pharmacological interaction between PEITC and disulfiram (both inhibit ALDH), not a pharmacogenomic effect of a gene variant on disulfiram PK/PD. |
| popPK | Lipsky_2001 | irrelevant | 0 | 0 | The paper describes in vitro enzymatic inhibition mechanisms (IC50) rather than pharmacokinetic disposition parameters (CL, V, half-life) for disulfiram. |
| PGx | Lipsky_2001 | not_relevant | 0 | 0 | The paper describes the in vitro mechanism of aldehyde dehydrogenase inhibition by disulfiram and does not investigate any gene variants or pharmacogenomic effects on PK/PD. |
| popPK | Liu_2003 | irrelevant | 0 | 0 | The paper focuses on in vitro retinoic acid catabolism in ferrets where disulfiram is used only as a CYP inhibitor, and no pharmacokinetic parameters for disulfiram are reported. |
| PGx | Liu_2003 | not_relevant | 0 | 0 | The paper uses disulfiram as a nonspecific CYP inhibitor in ferret lung microsomal assays to study retinoic acid metabolism, rather than investigating the pharmacokinetics or pharmacodynamics of disulfiram itself in relation to genetic variants. |
| popPK | Ma_2026 | irrelevant | 0 | 0 | This is a review of nanomedicine-based chemodynamic cancer therapy; disulfiram is not the subject drug and no PK parameters appear. |
| popPK | Magni_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ALDH1 gene transfer and cyclophosphamide resistance, using disulfiram only as a specific inhibitor, and does not report any pharmacokinetic parameters for disulfiram. |
| PGx | Magni_1996 | not_relevant | 0 | 0 | The paper studies ALDH1-mediated resistance to cyclophosphamide; disulfiram is used only as an inhibitor to confirm the mechanism, not as the target drug with pharmacogenomic PK/PD effects. |
| popPK | Manyike_2000 | irrelevant | 0 | 0 | The study uses disulfiram as an inhibitor to assess acetaminophen metabolism, not to model the pharmacokinetics of disulfiram itself. |
| PGx | Manyike_2000 | not_relevant | 0 | 0 | The paper studies acetaminophen metabolism using disulfiram as a CYP2E1 inhibitor, not pharmacogenomic effects on disulfiram's own PK/PD. |
| popPK | Meeley_1991 | irrelevant | 0 | 0 | The study focuses on enzymatic detoxification of HC-toxin in maize, where disulfiram is used only as an inhibitory agent, not as the subject drug for pharmacokinetic modeling. |
| PGx | Meeley_1991 | not_relevant | 0 | 0 | The paper focuses on the enzymatic detoxification of a fungal toxin in maize; disulfiram is only mentioned as an inhibitor of a plant enzyme, and there is no pharmacogenomic effect on a PK/PD parameter for disulfiram. |
| popPK | Mergenhagen_2020 | irrelevant | 0 | 0 | This is a systematic review regarding antibiotic-alcohol interactions and does not report quantitative pharmacokinetic parameters for disulfiram. |
| PGx | Mergenhagen_2020 | not_relevant | 0 | 0 | The paper is a review of alcohol-antibiotic interactions and does not report any pharmacogenomic effects on the PK or PD of disulfiram. |
| popPK | Migliari_1999 | irrelevant | 0 | 0 | The paper is a review of antiandrogens in prostate cancer and does not contain pharmacokinetic data for disulfiram. |
| PGx | Migliari_1999 | not_relevant | 0 | 0 | The paper is a review of antiandrogens in prostate cancer and does not mention disulfiram, gene variants, or pharmacogenomics. |
| popPK | Mitra_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dapsone and its metabolites; disulfiram is used solely as a probe inhibitor/interacting agent and no PK parameters for disulfiram itself are reported. |
| PGx | Mitra_1995 | not_relevant | 1 | 2 | The paper studies the effect of co-administered disulfiram on dapsone metabolism, rather than a pharmacogenomic effect of a gene variant on disulfiram. |
| popPK | Mohammad_2018 | irrelevant | 0 | 0 | The study is an in vitro nanomedicine formulation paper focusing on cell uptake and cytotoxicity, not on pharmacokinetic disposition parameters. |
| PGx | Mohammad_2018 | not_relevant | 0 | 0 | The study investigates a drug delivery formulation (nanococrystals) and its effect on cellular resistance/apoptosis, containing no data on human genetic variants or pharmacogenomics. |
| popPK | Muth-Köhne_2012 | irrelevant | 0 | 0 | The study is a developmental neurotoxicity assay in zebrafish embryos and does not report pharmacokinetic parameters for disulfiram. |
| PGx | Muth-Köhne_2012 | not_relevant | 0 | 0 | The paper focuses on developmental neurotoxicity in zebrafish embryos and does not investigate pharmacogenomic effects on disulfiram pharmacokinetics or pharmacodynamics. |
| popPK | Mutschler_2013 | irrelevant | 0 | 0 | The paper is a review of the mechanism of action and treatment optimization for disulfiram, with no original quantitative pharmacokinetic parameter values reported. |
| PGx | Mutschler_2013 | not_relevant | 1 | 0 | The text mentions pharmacogenetics as an option for treatment optimization but contains no specific gene variants, genotypes, or quantitative effects on PK/PD parameters. |
| popPK | Nishigaki_1985 | irrelevant | 0 | 0 | The provided text contains only metadata and no scientific content or pharmacokinetic parameters for disulfiram. |
| PGx | Nishigaki_1985 | not_relevant | 0 | 0 | The provided text consists of software version information and a document ID, containing no content related to pharmacogenomics or disulfiram. |
| popPK | Ogungbite_2026 | irrelevant | 0 | 0 | Narrative review of AI drug repurposing with no disulfiram PK parameters or numeric disposition values. |
| popPK | Parise_2015 | irrelevant | 0 | 0 | Disulfiram is used only as an enzyme inhibitor in the study of benzaldehyde dimethane sulfonate (BEN) metabolism, not as the subject drug for PK parameter estimation. |
| PGx | Parise_2015 | not_relevant | 0 | 0 | The paper investigates the metabolism of benzaldehyde dimethane sulfonate (BEN) and identifies ALDH1A1 as the responsible enzyme; while disulfiram is mentioned as an inhibitor of this enzyme, the study does not report on the pharmacogenomics of disulfiram itself (i.e., how genetic variants alter disulfiram's PK/PD). |
| popPK | Pasquereau_2021 | irrelevant | 0 | 0 | In vitro antiviral screening study; disulfiram only tested for cytotoxicity (CC50 8.4 µM), no PK disposition parameters for disulfiram. |
| popPK | Pentiuk_2004 | irrelevant | 0 | 0 | This is a review on cytochrome P450 2E1 that mentions disulfiram only as an inhibitor example, with no pharmacokinetic data or quantitative disposition parameters for disulfiram. |
| PGx | Pentiuk_2004 | not_relevant | 1 | 0 | The paper is a general review on CYP2E1 and mentions disulfiram only as an inhibitor with hepatoprotective action, without reporting any specific pharmacogenomic effects on disulfiram's PK or PD parameters. |
| popPK | Pike_2001 | irrelevant | 2 | 2 | The study is an in-vitro mechanistic investigation of the metabolism of a disulfiram metabolite (MeDDC) by human renal microsomes, reporting enzyme kinetics (Km, Vmax) rather than population pharmacokinetic disposition parameters (CL, V, etc.) for the parent drug in vivo. |
| PGx | Pike_2001 | not_relevant | 0 | 0 | The study investigates enzyme involvement (FMO1 vs CYP450) in metabolite oxidation but does not report associations with genetic variants or genotypes affecting PK/PD parameters. |
| popPK | Ragia_2017 | irrelevant | 0 | 0 | The paper is a review on personalized medicine and pharmacogenomics of alcohol addiction, containing no original quantitative pharmacokinetic parameter values (CL, V, ka, etc.) for disulfiram. |
| PGx | Ragia_2017 | not_relevant | 0 | 0 | The text is a general review of personalized medicine in alcohol addiction and mentions disulfiram only as an approved drug, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Rand_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of alcohol effects on muscle relaxation where disulfiram is used only as a dehydrogenase inhibitor, with no pharmacokinetic parameters reported. |
| PGx | Rand_1994 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of ethanol and alcohols on muscle relaxation and does not report any pharmacogenomic effects (gene variants) on disulfiram. |
| popPK | Reid_1999 | irrelevant | 0 | 0 | The study focuses on the metabolic activation of dacarbazine in vitro, and disulfiram is used only as a CYP2E1 inhibitor, with no pharmacokinetic parameters reported for disulfiram. |
| PGx | Reid_1999 | not_relevant | 0 | 0 | The paper studies the metabolism of dacarbazine by cytochromes P450, using disulfiram as an inhibitor; it does not report pharmacogenomic effects on disulfiram's own PK or PD. |
| popPK | Riendeau_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of disulfiram on leukotriene biosynthesis (in vitro and in vivo), not its pharmacokinetic disposition parameters. |
| PGx | Riendeau_1991 | not_relevant | 0 | 0 | The paper studies the pharmacological inhibition of LTB4 by disulfiram in rats and humans but does not involve any genetic variants, genotypes, or pharmacogenomic analysis. |
| popPK | Ryu_2007 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of the PET radioligand (18)F-FCWAY to demonstrate CYP2E1 inhibition by disulfiram, and does not report quantitative disposition parameters (CL, V, etc.) for disulfiram itself. |
| PGx | Ryu_2007 | not_relevant | 0 | 0 | The paper studies the effect of disulfiram as a CYP2E1 inhibitor on the PK of a radiotracer, not how a patient's genotype affects disulfiram's PK/PD. |
| popPK | Saha_2023 | irrelevant | 0 | 0 | In-vitro formulation study with no pharmacokinetic parameters for disulfiram. |
| PGx | Schmidtova_2020 | not_relevant | 0 | 0 | Disulfiram is only used as an in vitro cytotoxicity agent; no gene variant/genotype effect on its PK/PD parameters is reported. |
| popPK | Schärfe_2017 | irrelevant | 0 | 0 | This is a pharmacogenomics survey of genetic variation in drug-related genes; disulfiram is not a PK study subject and no PK parameters appear. |
| popPK | She_2025 | irrelevant | 0 | 0 | The paper is about bunamidine hydrochloride (BUN) as an antimicrobial, not disulfiram; PK values (t½, bioavailability) refer to BUN and partly to supplementary Table S3. |
| popPK | Shimada_1987 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of ethanol in rats and mentions disulfiram-like reactions caused by NMTT, but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for disulfiram itself. |
| PGx | Shimada_1987 | not_relevant | 0 | 0 | The paper studies the effects of enzyme inhibitors and antibiotics on ethanol elimination in rats and does not report any pharmacogenomic effects (gene variant/genotype) on the PK/PD of disulfiram. |
| popPK | Shinn_2010 | irrelevant | 0 | 0 | The paper is a review of topiramate for substance use disorders where disulfiram is mentioned only as a comparator in one trial, with no PK parameters reported. |
| PGx | Shinn_2010 | not_relevant | 0 | 0 | The paper is a review on topiramate and mentions disulfiram only for comparison of efficacy, without reporting any pharmacogenomic effects on PK/PD parameters. |
| PGx | Shorter_2011 | not_relevant | 1 | 0 | Review mentions disulfiram efficacy and future pharmacogenetics only; no gene variant effect on PK/PD parameters reported. |
| PGx | Silveira_2026 | not_relevant | 0 | 0 | The paper reports the effect of food (federal vs fasting) on the PK of disulfiram metabolites, but does not mention gene variants, genotypes, or phenotypes. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | This is a COVID-19 statin drug-repurposing study with no disulfiram PK data or parameters of any kind. |
| popPK | Sternbach_1997 | irrelevant | 0 | 0 | The paper is a review of neuropsychiatric effects of antibiotics that mentions disulfiram only as a concomitant medication in the context of interactions, without providing any pharmacokinetic parameter values. |
| PGx | Sternbach_1997 | not_relevant | 0 | 0 | The text discusses antibiotic-induced neuropsychiatric side effects and drug interactions with psychotropics (like disulfiram) but does not report a pharmacogenomic effect (gene variant) on disulfiram PK/PD. |
| popPK | Su_2025 | irrelevant | 0 | 0 | The paper focuses on in vitro antiviral activity of ivermectin and niclosamide dry powders, mentioning disulfiram only as a comparator from previous unrelated work with no PK data provided. |
| PGx | Su_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and in vitro antiviral activity of ivermectin and niclosamide; it mentions disulfiram only in passing regarding previous work and contains no pharmacogenomic data or PK/PD analysis for disulfiram. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | The paper focuses on an AI-screened peptide (SK56) blocking gasdermin D pores, and while disulfiram is mentioned as a comparator for GSDMD-NT pore inhibition, no pharmacokinetic parameters for disulfiram are reported. |
| PGx | Sun_2025 | not_relevant | 0 | 0 | The paper focuses on the discovery of a peptide (SK56) to block gasdermin D pores and mitigate sepsis, and does not discuss the drug disulfiram or its pharmacokinetics/pharmacodynamics. |
| popPK | Sztajnkrycer_2003 | irrelevant | 1 | 0 | Disulfiram is used as a CYP inhibitor in a toxicology study of pulegone in mice, with no pharmacokinetic parameters (CL, V, etc.) for disulfiram itself reported. |
| PGx | Sztajnkrycer_2003 | not_relevant | 0 | 0 | The paper describes the use of disulfiram as an inhibitor in an animal toxicity study, not a pharmacogenomic effect of disulfiram. |
| popPK | Talwelkar_2021 | irrelevant | 0 | 0 | The paper is a functional diagnostics study for cancer treatment using ex vivo drug-response assays, not a pharmacokinetic study; disulfiram is only mentioned as a therapeutic agent in a clinical case. |
| PGx | Talwelkar_2021 | not_relevant | 0 | 0 | The paper focuses on using fresh uncultured tumor cells to predict drug sensitivity in lung cancer and does not investigate genetic variants affecting the pharmacokinetics or pharmacodynamics of disulfiram. |
| popPK | Uehara_2021 | irrelevant | 0 | 0 | The study investigates the metabolism and pharmacokinetics of tolbutamide in mice, using disulfiram only as a mechanistic inhibitor of aldehyde dehydrogenase rather than as the subject drug. |
| PGx | Uehara_2021 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of tolbutamide in humanized mice, not the pharmacogenomics of disulfiram. |
| popPK | Upton_1991 | irrelevant | 0 | 0 | This is a review on theophylline pharmacokinetics where disulfiram is listed only as an interacting drug that alters theophylline clearance, not as the subject of PK modeling. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper reviews pharmacokinetic interactions involving theophylline (where disulfiram is a drug interaction partner), not pharmacogenomic effects on disulfiram's PK/PD. |
| popPK | Van_2016_2 | irrelevant | 0 | 0 | This is a review of ALDH2 genetics and hematopoietic stem cell biology that mentions disulfiram-like reactions but contains no pharmacokinetic data or quantitative disposition parameters for disulfiram. |
| PGx | Van_2016_2 | not_relevant | 4 | 2 | The text discusses ALDH2*2 associated with disulfiram-like reactions (toxicity) and hematologic conditions, but does not report quantitative pharmacokinetic or pharmacodynamic parameters of disulfiram therapy. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper studies fungal compounds and uses disulfiram only as an antibiotic adjuvant in in-vitro assays, not as a subject of pharmacokinetic analysis. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper focuses on the isolation and bioassay-guided characterization of fungal compounds; disulfiram is only mentioned as an antibiotic adjuvant in a combination assay, with no discussion of pharmacogenomics or PK/PD parameter modulation by genetic variants. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study investigates a nanotherapy formulation for chemotherapy in mice, focusing on tumor inhibition and in vitro release, rather than reporting pharmacokinetic disposition parameters for disulfiram. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper discusses a folate-targeted nanotherapy for copper and disulfiram in cancer treatment, reporting no pharmacogenomic effects on PK or PD parameters. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis on antiemetics for postoperative nausea and vomiting and does not contain any pharmacokinetic data for disulfiram. |
| PGx | Weibel_2020 | not_relevant | 0 | 0 | The paper is a network meta-analysis of antiemetics for postoperative nausea and vomiting, does not study disulfiram, and does not report pharmacogenomic effects. |
| popPK | Wertheimer_2017 | irrelevant | 0 | 0 | In-vitro cell proliferation study; disulfiram is only one screened substance with an EC50, no PK disposition parameters. |
| popPK | Wilson_1984 | irrelevant | 0 | 0 | The study reports clinical outcomes (sobriety, adverse reactions) rather than pharmacokinetic parameters. |
| PGx | Wilson_1984 | not_relevant | 0 | 0 | The paper investigates dose-response relationships for disulfiram implants but does not report any pharmacogenomic effects or genetic variants. |
| popPK | Wormhoudt_1996 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on the metabolism of 1,2-dibromoethane, where disulfiram is used only as an enzyme inhibitor and no pharmacokinetic parameters for disulfiram are reported. |
| PGx | Wormhoudt_1996 | not_relevant | 0 | 0 | The paper investigates the metabolism of 1,2-dibromoethane by CYP enzymes and uses disulfiram only as an inhibitor to identify CYP2E1 involvement; it does not report pharmacogenomic effects on the PK/PD of disulfiram. |
| popPK | Xiao_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of enzyme inhibition (IC50) and does not report pharmacokinetic disposition parameters for disulfiram. |
| PGx | Xiao_2009 | not_relevant | 0 | 0 | The paper reports in-vitro enzymatic inhibition of ALDH1A1 by disulfiram, not a pharmacogenomic effect on disulfiram's PK or PD in humans. |
| popPK | Xu_2019 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro and in-vivo pharmacological investigation of antitumor effects and chloride channel activation, reporting no population pharmacokinetic parameters. |
| PGx | Xu_2019 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of disulfiram's antitumor effect (ClC-3 channel activation) in cancer cells, not the effect of human genetic variants on PK or PD parameters. |
| PGx | Zastrozhin_2019 | not_relevant | 4 | 5 | Discusses DBH 1021C&gt;T and ANKK1/DRD2 effects on disulfiram clinical efficacy/adverse effects, but reports no significant difference and no fitted PK/PD parameter changes. |
| popPK | Zhang_2017 | irrelevant | 0 | 0 | The study focuses on the synergistic toxicity and oxidative stress mechanisms of diethyldithiocarbamate and EGCG, not the pharmacokinetic parameters of disulfiram. |
| PGx | Zhang_2017 | not_relevant | 0 | 0 | The study reports on the synergistic toxicity of EGCG and a metabolite of disulfiram (diethyldithiocarbamate) in a mouse model, focusing on copper-mediated redox stress rather than pharmacogenomics. |
| popPK | Zhang_2018 | irrelevant | 2 | 1 | This is a pharmaceutical formulation and pharmacodynamics study reporting in vitro permeability (Papp, Jss) and cataract inhibition, not a population or compartmental pharmacokinetic study reporting disposition parameters like CL, V, or ka for disulfiram. |
| PGx | Zhang_2018 | not_relevant | 0 | 0 | The paper studies a formulation strategy for disulfiram and reports PK/PD changes relative to controls, but does not report any pharmacogenomic effects (gene variants/genotypes) on the drug's PK or PD parameters. |
| popPK | Zhu_2021 | irrelevant | 1 | 1 | Disulfiram is only a co-administered ALDH2 inhibitor in a PBPK model of ethanol/acetaldehyde; no disulfiram PK parameters are reported, and its effect is based on in vitro data in supplementary text. |
| PGx | Zhu_2021 | not_relevant | 2 | 3 | The paper models disulfiram's inhibition of ALDH2 and ALDH2 genotype effects on acetaldehyde exposure, but does not report a gene variant altering a PK/PD parameter of disulfiram itself. |
| popPK | Zindel_2014 | irrelevant | 0 | 0 | The paper is a historical review of pharmacotherapy for alcohol use disorders and contains no original pharmacokinetic data, quantitative disposition parameters, or model values for disulfiram. |
| PGx | Zindel_2014 | not_relevant | 0 | 0 | The paper is a historical review of pharmacotherapy for alcohol use disorders and mentions pharmacogenetics only as a future direction, without reporting any specific genetic effects on disulfiram's PK/PD. |
| popPK | Zuppa_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of acetaminophen, not disulfiram. |
| PGx | Zuppa_2011 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of acetaminophen in pediatric populations and does not mention disulfiram or any pharmacogenomic effects. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| popPK | van_2016 | irrelevant | 0 | 0 | This is a population PK study of acetaminophen, not disulfiram; disulfiram is only mentioned as an excluded co-medication (CYP2E1 inhibitor). |
| PGx | van_2017 | not_relevant | 0 | 0 | Disulfiram is studied as a BVRA inhibitor in Gunn rats; no gene variant/genotype effect on disulfiram PK or PD is reported. |
| popPK | von_1984 | irrelevant | 0 | 0 | The paper is a review of alcohol metabolism and aldehyde dehydrogenase genetics, mentioning disulfiram only as a comparative mechanism for acetaldehyde inhibition, without reporting any pharmacokinetic parameters for disulfiram. |
| PGx | von_1984 | not_relevant | 4 | 2 | The paper discusses the genetic polymorphisms of alcohol and aldehyde dehydrogenase and compares the natural accumulation of acetaldehyde in certain populations to the pharmacological effect of disulfiram, but it does not report how genetic variants alter the PK or PD parameters of disulfiram itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdisulfiram%5D&body=Drug%3A%20disulfiram%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_disulfiram/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 12:35 UTC</sub>
