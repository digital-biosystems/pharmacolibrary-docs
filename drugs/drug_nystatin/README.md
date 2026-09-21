<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;nystatin&quot;}]"></div>

# nystatin

- **generic name:** nystatin
- **ATC codes:** `A07AA02`, `D01AA01`, `G01AA01`, `J01RA19`
- **DrugBank:** [DB00646](https://go.drugbank.com/drugs/DB00646)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Nystatin is a polyene antifungal drug that has broad-spectrum fungicidal and fungistatic activity against a number of yeasts and fungi, most notably _Candida_ species.[L10686] It is one of the most effective antifungal agents synthesized by bacteria, in this case a strain of _Streptomyces noursei_,[L10776] and is closely related to [amphotericin B], differing only slightly in structure.[A188562] Nystatin has a greater antifungal activity than amphotericin B - parenterally administered nystatin, however, is associated with significant toxicity and is not available in a formulation appropriate for systemic use.[A188562] As it undergoes very little absorption following oral or topical administration, nystatin's efficacy is limited to the treatment/prevention of cutaneous, mucocutaneous, and gastrointestinal fungal infections.[L10686,L10728]

**Indication.** Nystatin is available in oral formulations for the treatment and/or prevention of oral candidiasis (a.k.a. thrush), intestinal candidiasis, and anal candidiasis.[L10686,L10728] It is indicated topically for the treatment of vulvovaginal candidiasis and other cutaneous candida infections.[L10728] A combination product containing nystatin alongside [neomycin], [gramicidin D], and [triamcinolone] (Viaderm K.C.®) is indicated in the treatment of corticosteroid-responsive dermatoses caused by bacterial or candidal infections and for pruritus ani/vulvae.[L10731] It is also available in combination with [metronidazole] for the treatment of mixed infections due to _Trichomonas vaginalis_ and _Candida albicans_.[L10776]

Nystatin is also sometimes used off-label for the prevention of invasive candidiasis in low birth weight neonates,[A188565] though it is generally reserved as a second-line option after [fluconazole].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 15:35 | 41:22 | 0/0/0 | 4/0/0 | 0/0/0 | 580,179/14,133 | ollama / qwen3.8:27b-mtp-q8_0 | 47 | 0/0 | 47/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Dunne_1991](drugs/drug_nystatin/pd_Dunne_1991_K_ATP_channel_open_state_probability.md) | Dunne MJ, Block of ATP-regulated potassium channe…, British journal of pharmaco… (1991) | [10.1111/j.1476-5381.1991.tb12340.x](https://doi.org/10.1111/j.1476-5381.1991.tb12340.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Maciel_2025](drugs/drug_nystatin/pd_Maciel_2025_unknown.md) | Maciel BJ et al., The potential of the antifungal nystati…, Frontiers in microbiology (2025) | [10.3389/fmicb.2025.1539629](https://doi.org/10.3389/fmicb.2025.1539629) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mukhametkaliyev_2026](drugs/drug_nystatin/pd_Mukhametkaliyev_2026_EC50.md) | Mukhametkaliyev A et al., Antiviral Activity of Polyene Macrolide…, Molecules (Basel, Switzerla… (2026) | [10.3390/molecules31111915](https://doi.org/10.3390/molecules31111915) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Mukhametkaliyev_2026](drugs/drug_nystatin/pd_Mukhametkaliyev_2026_IC50.md) | Mukhametkaliyev A et al., Antiviral Activity of Polyene Macrolide…, Molecules (Basel, Switzerla… (2026) | [10.3390/molecules31111915](https://doi.org/10.3390/molecules31111915) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2018](drugs/drug_nystatin/pd_Wang_2018_intracellular_A_fumigatus_inoculum.md) | Wang T et al., A strategy for designing voriconazole d…, Journal of translational me… (2018) | [10.1186/s12967-018-1533-4](https://doi.org/10.1186/s12967-018-1533-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nystatin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…orally administered nystatin is eliminated unchanged in the feces.[L10686]…”</sub> | prose |

## Coverage

- **PubMed hits:** 298 matched, 116 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_18 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Burkin_2022.pdf` | Burkin MA et al., Development and application of amphoter…, Journal of pharmaceutical a… (2022) | pd | 5 | [10.1016/j.jpba.2022.114875](https://doi.org/10.1016/j.jpba.2022.114875) | [35679709](https://www.ncbi.nlm.nih.gov/pubmed/35679709) | metadata signals extractable PD data (IC50) |
| `Wang_1993.pdf` | Wang X et al., 5-(N-Ethyl-N-isopropyl)amiloride sensit…, Canadian journal of physiol… (1993) | pd | 5 | [10.1139/y93-009](https://doi.org/10.1139/y93-009) | [8390327](https://www.ncbi.nlm.nih.gov/pubmed/8390327) | metadata signals extractable PD data (IC50) |
| `Yao_2015.pdf` | Yao JY et al., Evaluation of nystatin isolated from St…, Parasitology research (2015) | pd | 5 | [10.1007/s00436-015-4325-2](https://doi.org/10.1007/s00436-015-4325-2) | [25645004](https://www.ncbi.nlm.nih.gov/pubmed/25645004) | metadata signals extractable PD data (EC50) |
| `Zha_2008.pdf` | Zha DJ et al., [Inhibition of gamma-aminobutyric acid…, Zhonghua er bi yan hou tou… (2008) | pd | 5 | not captured | [18666699](https://www.ncbi.nlm.nih.gov/pubmed/18666699) | metadata signals extractable PD data (EC50) |
| `Barhouchi_2017.pdf` | Barhouchi B et al., Preparations based on minerals extracts…, Journal de mycologie medica… (2017) | pd | 4 | [10.1016/j.mycmed.2017.02.003](https://doi.org/10.1016/j.mycmed.2017.02.003) | [28286025](https://www.ncbi.nlm.nih.gov/pubmed/28286025) | metadata signals extractable PD data (IC50) |
| `Bujdáková_1993.pdf` | Bujdáková H et al., Anti-Candida activity of four antifunga…, FEMS microbiology letters (1993) | pd | 4 | [10.1111/j.1574-6968.1993.tb06471.x](https://doi.org/10.1111/j.1574-6968.1993.tb06471.x) | [8224799](https://www.ncbi.nlm.nih.gov/pubmed/8224799) | metadata signals extractable PD data (IC50) |
| `Cascaes_2021.pdf` | Cascaes MM et al., Flavonoids, antioxidant potential and a…, Natural product research (2021) | pd | 4 | [10.1080/14786419.2019.1629912](https://doi.org/10.1080/14786419.2019.1629912) | [31526144](https://www.ncbi.nlm.nih.gov/pubmed/31526144) | metadata signals extractable PD data (IC50) |
| `Danaceau_2000.pdf` | Danaceau JP et al., Mixture interactions of glutamate and b…, Journal of comparative phys… (2000) | pd | 4 | [10.1007/s003590050007](https://doi.org/10.1007/s003590050007) | [10659043](https://www.ncbi.nlm.nih.gov/pubmed/10659043) | metadata signals extractable PD data (EC50) |
| `Fleischmann_1993.pdf` | Fleischmann BK et al., Control of resting membrane potential b…, The Journal of physiology (1993) | pd | 4 | [10.1113/jphysiol.1993.sp019834](https://doi.org/10.1113/jphysiol.1993.sp019834) | [8271220](https://www.ncbi.nlm.nih.gov/pubmed/8271220) | metadata signals extractable PD data (EC50) |
| `Harata_1996.pdf` | Harata N et al., Two components of metabotropic glutamat…, Brain research (1996) | pd | 4 | [10.1016/0006-8993(95)01406-3](https://doi.org/10.1016/0006-8993(95)01406-3) | [8680866](https://www.ncbi.nlm.nih.gov/pubmed/8680866) | metadata signals extractable PD data (EC50) |
| `Munakata_1998.pdf` | Munakata M et al., Characterization of electrogenic Na/K p…, Brain research (1998) | pd | 4 | [10.1016/s0006-8993(98)00533-2](https://doi.org/10.1016/s0006-8993(98)00533-2) | [9685682](https://www.ncbi.nlm.nih.gov/pubmed/9685682) | metadata signals extractable PD data (EC50) |
| `Paxman_2017.pdf` | Paxman J et al., Drunken Membranes: Short-Chain Alcohols…, Biophysical journal (2017) | pd | 4 | [10.1016/j.bpj.2016.11.3205](https://doi.org/10.1016/j.bpj.2016.11.3205) | [28076803](https://www.ncbi.nlm.nih.gov/pubmed/28076803) | metadata signals extractable PD data (IC50) |
| `Seki_2002.pdf` | Seki M, [Hydrocortisone inhibits nicotinic acet…, Fukuoka igaku zasshi = Huku… (2002) | pd | 4 | not captured | [11968738](https://www.ncbi.nlm.nih.gov/pubmed/11968738) | metadata signals extractable PD data (EC50) |
| `Semplicini_1989.pdf` | Semplicini A et al., Kinetics and stoichiometry of the human…, The Journal of membrane bio… (1989) | pd | 4 | [10.1007/BF01871937](https://doi.org/10.1007/BF01871937) | [2541250](https://www.ncbi.nlm.nih.gov/pubmed/2541250) | metadata signals extractable PD data (sigmoid) |
| `Shibata_2001.pdf` | Shibata K et al., [Excitatory effect of noradrenaline on…, Fukuoka igaku zasshi = Huku… (2001) | pd | 4 | not captured | [11774707](https://www.ncbi.nlm.nih.gov/pubmed/11774707) | metadata signals extractable PD data (EC50) |
| `Shimura_1999.pdf` | Shimura M et al., Na+,K+-ATPase activity in cultured bovi…, Investigative ophthalmology… (1999) | pd | 4 | not captured | [9888432](https://www.ncbi.nlm.nih.gov/pubmed/9888432) | metadata signals extractable PD data (EC50) |
| `Spinelli_1993.pdf` | Spinelli W et al., Cellular electrophysiology of WAY-123,3…, Cardiovascular research (1993) | pd | 4 | [10.1093/cvr/27.9.1580](https://doi.org/10.1093/cvr/27.9.1580) | [8287434](https://www.ncbi.nlm.nih.gov/pubmed/8287434) | metadata signals extractable PD data (IC50) |
| `Tang_2005.pdf` | Tang G et al., Direct stimulation of K(ATP) channels b…, Molecular pharmacology (2005) | pd | 4 | [10.1124/mol.105.017467](https://doi.org/10.1124/mol.105.017467) | [16150926](https://www.ncbi.nlm.nih.gov/pubmed/16150926) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-11T15:23:45.356713+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | AlSalhi_2020 | not_relevant | 0 | 0 | The paper studies zinc oxide nanoparticles and only mentions nystatin as a positive control in an antimicrobial assay, providing no pharmacodynamic or exposure-response data for nystatin. |
| popPK | Ali_1997 | irrelevant | 0 | 0 | The paper reports in-vitro leishmanicidal activity (EC50) and mechanism of action, not pharmacokinetic disposition parameters. |
| popPK | Alter_2023 | irrelevant | 0 | 0 | The paper describes the preparation and characterization of extracellular vesicles (nPMVs) and does not involve the drug nystatin or report any pharmacokinetic parameters. |
| PD | Alter_2023 | not_relevant | 0 | 0 | The paper describes the preparation and characterization of extracellular vesicles (nPMVs) and does not contain any pharmacodynamic or exposure-response data for nystatin. |
| popPK | Alter_2025 | irrelevant | 0 | 0 | The paper investigates lipid nanoparticle hybrids for gene delivery and does not study the drug nystatin. |
| PD | Alter_2025 | not_relevant | 0 | 0 | The paper focuses on the formulation and characterization of lipid nanoparticle hybrids for gene delivery and does not contain any data or analysis regarding nystatin. |
| PD | Antoci_2021 | not_relevant | 0 | 0 | The paper reports MIC values and molecular docking scores for new compounds, with nystatin used only as a qualitative positive control; it does not report a pharmacodynamic model or exposure-response relationship for nystatin. |
| PGx | Anwar_2018 | not_relevant | 0 | 0 | The paper investigates the effect of silver nanoparticle conjugation on the antimicrobial activity of nystatin, not the effect of genetic variants on its pharmacokinetics or pharmacodynamics. |
| PGx | Anwar_2019 | not_relevant | 0 | 0 | The paper investigates the enhancement of nystatin's antimicrobial activity against Acanthamoeba via gold nanoparticle conjugation, not the effect of human gene variants on its pharmacokinetics or pharmacodynamics. |
| PGx | Anwar_2020 | not_relevant | 0 | 0 | The paper investigates the anti-amoebic activity of synthetic tetrazoles and their conjugation with silver nanoparticles, with no mention of nystatin pharmacokinetics or pharmacodynamics, nor any pharmacogenomic analysis. |
| popPK | Arrieta_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of isavuconazole, not nystatin, which is only mentioned as a treatment for a specific adverse event. |
| PD | Arrieta_2021 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) for isavuconazole, not nystatin, and contains no pharmacodynamic (PD) or exposure-response modeling. |
| PGx | Asadi_2024 | not_relevant | 0 | 0 | The paper investigates the effect of a liposomal formulation on the antifungal efficacy of nystatin against Candida species, not the effect of human gene variants on nystatin pharmacokinetics or pharmacodynamics. |
| popPK | Assaggaf_2022 | irrelevant | 0 | 0 | The paper is a chemical analysis and biological activity study of Salvia officinalis essential oils and does not involve nystatin or pharmacokinetic parameters. |
| PD | Assaggaf_2022 | not_relevant | 0 | 0 | The paper investigates the chemical composition and biological effects of Salvia officinalis essential oils, not nystatin, and does not report any pharmacodynamic or exposure-response relationships for nystatin. |
| PD | Barhouchi_2017 | not_relevant | 0 | 0 | The paper evaluates the antifungal activity of mineral extracts and bovine butyrate, not nystatin. |
| PD | Bujdáková_1993 | not_relevant | 0 | 0 | The paper focuses on the anti-Candida activity of benzothiazoles and does not report pharmacodynamic or exposure-response data for nystatin. |
| PD | Burkin_2022 | not_relevant | 0 | 0 | The paper focuses on amphotericin B, not nystatin, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Campagne_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus, not nystatin. |
| PD | Campagne_2018 | not_relevant | 0 | 0 | The paper focuses on tacrolimus pharmacokinetics and CYP3A5 genotypes, not nystatin, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Campagne_2019 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetics for tacrolimus, not nystatin. |
| PD | Campagne_2019 | not_relevant | 0 | 0 | The paper is a review of population pharmacokinetic models for tacrolimus, not nystatin, and does not report any pharmacodynamic or exposure-response relationships. |
| PD | Carmo_2023 | not_relevant | 1 | 0 | The paper is a general review of antifungal drugs that describes the mechanism of action of nystatin but does not provide any specific pharmacodynamic models, exposure-response data, or numeric PD parameters (e.g., MIC, Emax, EC50) for nystatin. |
| PGx | Carmo_2023 | not_relevant | 0 | 0 | The paper is a general review of antifungal drugs and does not report specific pharmacogenomic effects on the PK or PD parameters of nystatin. |
| popPK | Carnes_1997 | irrelevant | 0 | 0 | The paper is an electrophysiology study using nystatin as a tool for the perforated patch-clamp technique, not a pharmacokinetic study of nystatin. |
| PD | Carnes_1997 | not_relevant | 0 | 0 | Nystatin is used as a tool in the patch-clamp technique to perforate the membrane, not as the drug being studied for its pharmacodynamic effects. |
| PD | Cascaes_2021 | not_relevant | 0 | 0 | The paper focuses on the phytochemical and antimicrobial properties of Myrcia rufipila leaves and does not mention nystatin or report any pharmacodynamic parameters for it. |
| popPK | Chan_1997 | irrelevant | 0 | 0 | The paper is a mechanistic study on ion channels in cystic fibrosis cells where nystatin is used only as a membrane permeabilizing agent, not as the subject drug for pharmacokinetic analysis. |
| PD | Chan_1997 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of Angiotensin II, not nystatin; nystatin is used only as a tool to permeabilize membranes. |
| popPK | Chang_2006 | irrelevant | 0 | 0 | The paper is an electrophysiology study using nystatin as a tool for perforated patch recording, not a pharmacokinetic study of nystatin. |
| PD | Chang_2006 | not_relevant | 0 | 0 | The paper investigates the pharmacological effect of lanthanum on neuronal receptors, using nystatin only as a technical tool for patch-clamp recording, and does not report any pharmacodynamic or exposure-response relationship for nystatin itself. |
| PD | Chen_1993 | not_relevant | 0 | 0 | Nystatin is used as a tool for perforated patch-clamp recording, not as a drug being characterized for a pharmacodynamic exposure-response relationship. |
| PGx | Chu_2006 | not_relevant | 0 | 0 | The paper studies the endocytosis of the protein EC-SOD and uses nystatin only as a negative control inhibitor for caveolae-mediated endocytosis, not as the drug of interest for pharmacogenomic analysis. |
| PD | Colin_2011 | not_relevant | 0 | 0 | The paper focuses on the cellular uptake mechanism of resveratrol; nystatin is only mentioned as a tool to disrupt lipid rafts, and no pharmacodynamic or exposure-response relationship for nystatin is reported. |
| popPK | Cuenca-León_2022 | irrelevant | 0 | 0 | The paper is a review on phytotherapy for antifungal resistance and mentions nystatin only as a comparator or standard control in in-vitro studies, without reporting any pharmacokinetic parameters. |
| PD | Cuenca-León_2022 | not_relevant | 1 | 0 | The paper is a review on phytotherapy for antifungal resistance and only qualitatively mentions that nystatin's effect depends on concentration, without providing any numeric PD parameters or exposure-response data. |
| popPK | Cuppoletti_2004 | irrelevant | 0 | 0 | The study investigates the mechanism of action of SPI-0211 (lubiprostone) on chloride channels, using nystatin only as a tool to permeabilize cell membranes, and contains no pharmacokinetic data for nystatin. |
| PD | Cuppoletti_2004 | not_relevant | 0 | 0 | The paper reports PD parameters for SPI-0211 (lubiprostone), not nystatin; nystatin is only mentioned as a tool for membrane permeabilization. |
| popPK | Dalton_2003 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study where nystatin is used only as a tool for perforated patch clamp, not as the subject drug for pharmacokinetic analysis. |
| PD | Dalton_2003 | not_relevant | 0 | 0 | The paper describes electrophysiological properties of ion channels in astrocytes; nystatin is used only as a tool for perforated patch clamp, not as a drug with a pharmacodynamic exposure-response relationship. |
| popPK | Danaceau_2000 | irrelevant | 0 | 0 | The paper concerns glutamate and betaine in squid neurons and contains no pharmacokinetic data for nystatin. |
| PD | Danaceau_2000 | not_relevant | 0 | 0 | The paper discusses glutamate and betaine in squid neurons and does not mention nystatin or report any pharmacodynamic parameters for it. |
| popPK | De_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of paclitaxel, not nystatin. |
| PD | De_2024 | not_relevant | 0 | 0 | The paper is a study protocol for paclitaxel (not nystatin) and does not report any results or numeric PD parameters. |
| popPK | Dunne_1991 | irrelevant | 0 | 0 | The paper is an electrophysiology study on K+ATP channels where nystatin is used only as a tool for perforated patch-clamp recordings, not as the subject drug for pharmacokinetic analysis. |
| popPK | EFSA_2026 | irrelevant | 0 | 0 | The paper is an EFSA safety assessment of microorganisms for food/feed use and contains no pharmacokinetic data for nystatin. |
| PD | EFSA_2026 | not_relevant | 0 | 0 | The paper is an EFSA safety assessment of microbial agents (QPS list) and contains no pharmacokinetic or pharmacodynamic data for nystatin. |
| PD | El-Sayed_2025 | not_relevant | 0 | 0 | The paper reports MIC and inhibition zone diameters for nystatin as a reference standard, but does not provide a concentration-effect curve, Emax, EC50, or any pharmacodynamic model parameters for nystatin. |
| PD | Ellepola_2016 | not_relevant | 3 | 2 | The study reports percentage reductions in adhesion traits after exposure to sub-MIC concentrations but does not provide a concentration-effect curve, Emax, EC50, or other numeric PD parameters required for modeling. |
| popPK | Fleischmann_1993 | irrelevant | 0 | 0 | The paper is a physiological study on potassium currents in airway smooth muscle and does not involve nystatin pharmacokinetics. |
| PD | Fleischmann_1993 | not_relevant | 0 | 0 | The paper focuses on electrophysiology of potassium currents in airway smooth muscle and does not mention nystatin or report any pharmacodynamic or exposure-response data for it. |
| popPK | Fujimoto_1995 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of beta-lactam antibiotics on GABA receptors where nystatin is used only as a tool for perforated patch recording, not as the subject drug for pharmacokinetic analysis. |
| PD | Fujimoto_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of beta-lactam antibiotics (penicillin, imipenem, etc.) on GABA receptors, not nystatin; nystatin is only mentioned as a tool for the recording technique (perforated patch). |
| PD | Ghavam_2022 | not_relevant | 0 | 0 | The paper studies essential oils and only mentions nystatin as a control antibiotic for MIC/MFC comparison, providing no exposure-response or PD model for nystatin. |
| PD | Gudewicz_1987 | not_relevant | 3 | 2 | The paper reports MIC/MCC values (thresholds) and qualitative dose-response trends for oxygen and drugs, but does not provide a concentration-effect curve or numeric PD parameters (like Emax/EC50) for nystatin. |
| popPK | Gyenes_1994 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of GABA receptor function where nystatin is used only as a tool for perforated patch recordings, not as a subject drug for pharmacokinetic analysis. |
| PD | Gyenes_1994 | not_relevant | 0 | 0 | The paper investigates GABA receptor pharmacology and phosphorylation effects; nystatin is used only as a tool for perforated patch recordings, not as the drug of interest for PD analysis. |
| popPK | Harata_1996 | irrelevant | 0 | 0 | The paper concerns neurophysiology (glutamate responses in neurons) and does not involve nystatin pharmacokinetics. |
| PD | Harata_1996 | not_relevant | 0 | 0 | The paper investigates glutamate receptor pharmacology in neurons and does not mention nystatin or report any exposure-response or dose-response data for it. |
| PD | Harley_2022 | not_relevant | 0 | 0 | The paper reports MICs and MFCs for plant extracts and combination indices (FICI) with nystatin, but does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for nystatin itself. |
| PD | Hogg_1994 | not_relevant | 0 | 0 | The paper studies the pharmacology of niflumic acid on ion channels; nystatin is only mentioned as a tool for the perforated patch technique, not as the drug of interest for PD analysis. |
| popPK | Hong_2005 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of etomidate on GABA receptors using nystatin only as a tool for perforated patch-clamp recording, not as the subject drug for pharmacokinetic analysis. |
| PD | Hong_2005 | not_relevant | 0 | 0 | The paper investigates the pharmacology of etomidate, not nystatin; nystatin is only mentioned as a tool for the patch-clamp recording technique. |
| PD | Ibrahim_2022 | not_relevant | 0 | 0 | The paper reports MIC and IC50 values for new compounds, using nystatin only as a reference standard without providing any exposure-response or dose-response data for nystatin itself. |
| popPK | Ishibashi_2006 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of dextromethorphan on rat neurons, using nystatin only as a tool for perforated patch-clamp recording, not as a subject drug for pharmacokinetic analysis. |
| PD | Ishibashi_2006 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of dextromethorphan, not nystatin; nystatin is only mentioned as a tool for the patch-clamp recording technique. |
| PD | J_2024 | not_relevant | 0 | 0 | The paper reports MIC/MBC values for a nanocomposite and mentions nystatin only as a comparative standard, without providing any exposure-response or dose-response PD model or parameters for nystatin. |
| popPK | Jana_2026 | irrelevant | 0 | 0 | The paper studies a novel antifungal metabolite (SM06) and uses nystatin only as a positive control in in-vitro assays, containing no pharmacokinetic data for nystatin. |
| PD | Jana_2026 | not_relevant | 0 | 0 | The paper studies a novel antifungal metabolite (SM06) and uses nystatin only as a positive control in qualitative or semi-quantitative assays without reporting any pharmacodynamic parameters or exposure-response relationships for nystatin. |
| popPK | Jovanović_2024 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of Gentiana asclepiadea compounds, not nystatin. |
| PD | Jovanović_2024 | not_relevant | 0 | 0 | The paper studies Gentiana asclepiadea extracts, not nystatin, and contains no data for the specified drug. |
| popPK | Kakehata_1993 | irrelevant | 0 | 0 | The paper is an electrophysiology study where nystatin is used only as a tool for perforated-patch recording, not as the subject drug for pharmacokinetic analysis. |
| PD | Kakehata_1993 | not_relevant | 0 | 0 | Nystatin is used as a tool for perforated-patch electrophysiology, not as the drug of interest for which a pharmacodynamic or exposure-response relationship is being characterized. |
| popPK | Kirschenbaum_2023 | irrelevant | 0 | 0 | The paper investigates anti-amyloid-beta therapies (NB360, LIN5044, b1 antibody) in Alzheimer's disease models and does not study nystatin or report its pharmacokinetic parameters. |
| PD | Kirschenbaum_2023 | not_relevant | 0 | 0 | The paper investigates the spatial and temporal efficacy of anti-amyloid therapies (NB360, LIN5044, antibody) in Alzheimer's mouse models using whole-brain microscopy; it does not involve nystatin or report any pharmacokinetic/pharmacodynamic (PK/PD) modeling or exposure-response relationships. |
| PD | Koyama_2006 | not_relevant | 0 | 0 | The paper studies the electrophysiological properties of M-current in neurons and the effects of antagonists (XE991, TEA), but does not report a pharmacodynamic or exposure-response relationship for the drug nystatin. |
| PD | Kumar_2025 | not_relevant | 1 | 0 | The paper reports qualitative in vivo efficacy and in vitro activity but does not provide numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for nystatin. |
| popPK | Landersdorfer_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of polymyxin B, not nystatin. |
| PD | Landersdorfer_2018 | not_relevant | 0 | 0 | The paper reports PK/PD data for polymyxin B, not nystatin. |
| popPK | Laskowski_2025 | irrelevant | 0 | 0 | The paper focuses on the structural elucidation and isolation of trichomycins A and B, not on the pharmacokinetics of nystatin. |
| PD | Laskowski_2025 | not_relevant | 0 | 0 | The paper focuses on the structural elucidation, isolation, and stereochemistry of trichomycins A and B, and does not contain any pharmacodynamic, exposure-response, or dose-response data for nystatin. |
| popPK | Machlup_1994 | irrelevant | 0 | 0 | The paper is a biophysical study of sodium channel kinetics in frog skin where nystatin is used only as a tool to create pores, not as a subject drug for pharmacokinetic analysis. |
| PD | McColm_1984 | not_relevant | 0 | 0 | The paper reports that nystatin was well tolerated by the parasites at standard culture concentrations but does not provide specific numeric PD parameters (such as IC50 or Emax) for nystatin, unlike other agents tested. |
| popPK | Mukhametkaliyev_2026 | irrelevant | 0 | 0 | The paper is an in-vitro and computational study on antiviral activity (IC50/EC50) and does not report pharmacokinetic parameters for nystatin. |
| popPK | Munakata_1998 | irrelevant | 0 | 0 | The paper concerns the electrogenic Na/K pump in rat neurons and does not involve nystatin pharmacokinetics. |
| PD | Munakata_1998 | not_relevant | 0 | 0 | The paper characterizes the Na/K pump in rat neurons and does not mention nystatin or report any pharmacodynamic or exposure-response data for it. |
| popPK | Munakata_2001 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of a different drug (VA-045) using nystatin only as a tool for perforated patch recording, with no pharmacokinetic parameters reported. |
| PD | Munakata_2001 | not_relevant | 0 | 0 | The paper investigates the pharmacology of VA-045, not nystatin; nystatin is only mentioned as a tool for the recording configuration. |
| PD | Mwangi_2024 | not_relevant | 0 | 0 | The paper reports in vitro antimicrobial activity (zone of inhibition and MIC) for plant extracts, using nystatin only as a positive control; it does not report a pharmacodynamic or exposure-response relationship for nystatin itself. |
| popPK | Nabekura_1993 | irrelevant | 0 | 0 | The paper is an electrophysiology study using nystatin as a tool for the perforated patch technique, not a pharmacokinetic study of nystatin. |
| PD | Nabekura_1993 | not_relevant | 0 | 0 | Nystatin is used as a tool for the perforated patch clamp technique, not as the drug of interest for which a pharmacodynamic relationship is being characterized. |
| popPK | Naji_2025 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro pharmacological study of a plant extract (Corallocarpus glomeruliflorus) and does not involve nystatin or pharmacokinetic modeling. |
| PD | Naji_2025 | not_relevant | 0 | 0 | The paper investigates the phytochemical and pharmacological properties of a plant extract (Corallocarpus glomeruliflorus) and does not mention or study the drug nystatin. |
| popPK | Nakashima_1996 | irrelevant | 0 | 0 | The paper is an electrophysiology study using nystatin as a tool for perforated patch-clamp recording, not a pharmacokinetic study of nystatin disposition. |
| PD | Nakashima_1996 | not_relevant | 0 | 0 | The paper uses nystatin as a technical tool for perforated patch-clamp electrophysiology, not as the drug of interest for pharmacodynamic analysis; the reported dose-response relationships are for NMDA. |
| popPK | Nakijoba_2025 | irrelevant | 0 | 0 | The paper is a cross-sectional survey on medicine use during breastfeeding and does not report any pharmacokinetic parameters for nystatin. |
| PD | Nakijoba_2025 | not_relevant | 0 | 0 | The paper is a cross-sectional epidemiological study on medicine use prevalence and safety during breastfeeding; it does not report any pharmacodynamic or exposure-response data for nystatin. |
| popPK | Olechno_2025 | irrelevant | 0 | 0 | The paper is a review on mucoadhesive drug delivery systems for oral candidiasis and does not report quantitative pharmacokinetic parameters for nystatin. |
| PD | Olechno_2025 | not_relevant | 1 | 0 | The paper is a review of mucoadhesive drug delivery systems for oral candidiasis and does not report any specific pharmacodynamic or exposure-response data for nystatin. |
| PD | Paxman_2017 | not_relevant | 0 | 0 | The paper studies the effect of short-chain alcohols on liposome fusion and does not mention nystatin or report any pharmacodynamic parameters. |
| popPK | Plourde_2006 | irrelevant | 0 | 0 | The paper is a mechanistic cell signaling study where nystatin is used only as a cationophore tool to measure Na(+)-K(+)-ATPase activity, not as a subject drug for pharmacokinetic analysis. |
| PD | Plourde_2006 | not_relevant | 0 | 0 | The paper studies ouabain and carbachol signaling; nystatin is only mentioned as a cationophore tool for measuring ATPase activity, with no exposure-response or PD analysis for nystatin. |
| PD | Polović_2019 | not_relevant | 0 | 0 | The paper reports MIC/IC50 values for aroylhydrazone derivatives and uses nystatin only as a positive control without deriving specific PD parameters or exposure-response curves for nystatin. |
| popPK | Qasem_2022 | irrelevant | 0 | 0 | The paper is a study on the chemical composition and biological properties of chamomile essential oils and honey, where nystatin is used only as a positive control for antimicrobial assays, not as a subject for pharmacokinetic analysis. |
| PD | Qasem_2022 | not_relevant | 0 | 0 | The paper investigates the biological properties of Matricaria chamomilla essential oils and honey; nystatin is only mentioned as a positive control in antimicrobial assays, and no pharmacodynamic or exposure-response data for nystatin are reported. |
| PD | Rhee_1994 | not_relevant | 0 | 0 | The paper reports pharmacological parameters (EC50, IC50) for glycine and strychnine, not for nystatin; nystatin is only mentioned as a tool for the patch-clamp technique. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | The paper is a review of excipients in pediatric formulations and does not report pharmacokinetic parameters for nystatin. |
| PD | Rouaz_2021 | not_relevant | 0 | 0 | The paper is a review on excipients in paediatric formulations and does not contain any pharmacodynamic or exposure-response data for nystatin. |
| PGx | Sahu_2025 | not_relevant | 0 | 0 | The paper investigates genetic diversity and antifungal resistance in Candida albicans isolates, not human pharmacogenomics or the effect of human gene variants on nystatin PK/PD. |
| popPK | Sakamoto_1998 | irrelevant | 0 | 0 | The paper is an electrophysiological study using nystatin as a tool for the perforated patch clamp technique, not a pharmacokinetic study of nystatin. |
| PD | Sakamoto_1998 | not_relevant | 0 | 0 | The paper studies bradykinin pharmacodynamics; nystatin is only mentioned as a tool for the perforated patch clamp technique, not as the drug of interest. |
| popPK | Seabrook_1994 | irrelevant | 0 | 0 | The paper is an electrophysiology study on dopamine receptors and calcium currents where nystatin is used only as a tool for perforated patch clamp recording, not as a subject drug for pharmacokinetic analysis. |
| PD | Seabrook_1994 | not_relevant | 0 | 0 | The paper uses nystatin as a tool for perforated patch clamp electrophysiology, not as a pharmacological agent for which a dose-response or exposure-response relationship is being characterized. |
| popPK | Seki_2002 | irrelevant | 0 | 0 | The paper studies hydrocortisone's effect on acetylcholine receptors in rat neurons and does not involve nystatin pharmacokinetics. |
| PD | Seki_2002 | not_relevant | 0 | 0 | The paper investigates the effect of hydrocortisone on nicotinic acetylcholine receptors in rat airway neurons and does not mention nystatin or report any pharmacodynamic parameters for it. |
| popPK | Semplicini_1989 | irrelevant | 0 | 0 | The paper concerns the kinetics of the human red cell Na+/H+ exchanger and does not involve nystatin pharmacokinetics. |
| PD | Semplicini_1989 | not_relevant | 0 | 0 | The paper focuses on the kinetics of the Na+/H+ exchanger and does not report pharmacodynamic or exposure-response data for nystatin. |
| PD | Shankar_2018 | not_relevant | 0 | 0 | The paper reports MIC and IC50 values for novel synthesized compounds, using nystatin only as a reference standard, and does not provide any exposure-response or dose-response modeling or numeric PD parameters for nystatin. |
| PGx | Shi_2003 | not_relevant | 0 | 0 | The paper uses nystatin as a tool for electrophysiological recording (nystatin-perforated patch clamp) and does not investigate pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Shi_2004 | irrelevant | 0 | 0 | The paper is an electrophysiology study on ion channels where nystatin is used only as a tool for perforated patch recording, not as the subject drug for pharmacokinetic analysis. |
| PD | Shi_2004 | not_relevant | 0 | 0 | The paper investigates the physiological regulation of ion channels by calcium; nystatin is used only as a tool for perforated patch clamp recording, not as a drug with a pharmacodynamic effect being modeled. |
| popPK | Shibata_2001 | irrelevant | 0 | 0 | The paper concerns the excitatory effect of noradrenaline on rat airway neurons and does not involve nystatin pharmacokinetics. |
| PD | Shibata_2001 | not_relevant | 0 | 0 | The paper discusses the excitatory effect of noradrenaline on rat airway neurons and does not mention nystatin or report any pharmacodynamic parameters for it. |
| popPK | Shimura_1999 | irrelevant | 0 | 0 | The paper focuses on Na+,K+-ATPase activity in bovine retinal pigment epithelium and does not report pharmacokinetic parameters for nystatin. |
| PD | Shimura_1999 | not_relevant | 0 | 0 | The paper focuses on Na+,K+-ATPase activity in bovine retinal pigment epithelium and does not report any pharmacodynamic or exposure-response data for nystatin. |
| popPK | Shirasaki_1994 | irrelevant | 0 | 0 | The paper is a neurophysiology study using nystatin as a tool for perforated patch-clamp recording, not a pharmacokinetic study of nystatin disposition. |
| PD | Shirasaki_1994 | not_relevant | 0 | 0 | The paper investigates electrophysiological responses to glutamate agonists; nystatin is used only as a tool for perforated patch recording, not as the drug of interest for PD analysis. |
| PD | Shu_2022 | not_relevant | 0 | 0 | The paper reports MIC values for fungal metabolites and lists Nystatin only as a reference standard for comparison, without providing any exposure-response or dose-response data for Nystatin itself. |
| PD | Shukla_2004 | not_relevant | 0 | 0 | The paper focuses on disulfiram as a modulator of Cdr1p and reports IC50 values for disulfiram's binding to the transporter, not a pharmacodynamic exposure-response or dose-response relationship for nystatin itself. |
| popPK | Smith_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of meropenem in an in-vitro bacterial interaction model and does not involve nystatin or report its pharmacokinetic parameters. |
| PD | Smith_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of meropenem, not nystatin. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The paper investigates a vaccine and monoclonal antibody against Neisseria gonorrhoeae and does not study the pharmacokinetics of nystatin. |
| PD | Song_2026 | not_relevant | 0 | 0 | The paper investigates a vaccine and monoclonal antibody against Neisseria gonorrhoeae, not the drug nystatin, and does not report any pharmacodynamic or exposure-response relationships for nystatin. |
| PD | Spinelli_1993 | not_relevant | 0 | 0 | The paper investigates the electrophysiological properties of WAY-123,398, not nystatin. |
| popPK | Swaminathan_2021 | irrelevant | 0 | 0 | The study investigates the impact of antibiotics (including nystatin) on vaccine immune response and microbiome composition, not the pharmacokinetics of nystatin. |
| PD | Swaminathan_2021 | not_relevant | 0 | 0 | The paper investigates the impact of antibiotic treatment (including nystatin) on vaccine immune response and microbiome recovery, but does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for nystatin. |
| popPK | Tang_2005 | irrelevant | 0 | 0 | The paper concerns hydrogen sulfide and K(ATP) channels in vascular smooth muscle, not nystatin pharmacokinetics. |
| PD | Tang_2005 | not_relevant | 0 | 0 | The paper focuses on hydrogen sulfide and K(ATP) channels in vascular smooth muscle, with no mention of nystatin or its pharmacodynamics. |
| popPK | Verscheijden_2021 | irrelevant | 0 | 0 | The paper is a PB-PK/PD study for morphine, not nystatin. |
| PD | Verscheijden_2021 | not_relevant | 0 | 0 | The paper reports a PB-PK/PD model for morphine, not nystatin. |
| PD | Vieira_2024 | not_relevant | 0 | 0 | The paper evaluates a different compound (4-chlorobenzyl p-coumarate) and only mentions nystatin in the context of an indifferent association study, providing no PD or exposure-response data for nystatin. |
| popPK | Vogel_2024 | irrelevant | 0 | 0 | The paper is a wastewater-based epidemiology study analyzing psychoactive substances and does not report pharmacokinetic parameters for nystatin. |
| PD | Vogel_2024 | not_relevant | 0 | 0 | The paper is a wastewater-based epidemiology study focusing on the quantification of psychoactive substances in sewage and does not contain any pharmacodynamic or exposure-response analysis for nystatin. |
| popPK | Wakamori_1993 | irrelevant | 0 | 0 | The paper is an electrophysiology study using nystatin as a tool for the perforated-patch technique, not a pharmacokinetic study of nystatin. |
| PD | Wakamori_1993 | not_relevant | 0 | 0 | The paper uses nystatin as a technical reagent for the perforated-patch clamp technique, not as the drug of interest for pharmacodynamic analysis. |
| PD | Wang_1993 | not_relevant | 0 | 0 | The paper focuses on amiloride-sensitive sodium currents in lung cells and does not mention nystatin or report any pharmacodynamic parameters for it. |
| popPK | Wang_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of voriconazole, using nystatin only as a reagent to kill extracellular conidia in an in-vitro model. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper is a biochemical study on plant cardenolide biosynthesis and does not involve nystatin or pharmacokinetic parameters. |
| PD | Xu_2026 | not_relevant | 0 | 0 | The paper focuses on the biosynthesis of cardenolides in plants and does not contain any pharmacodynamic or exposure-response data for nystatin. |
| popPK | Yao_2015 | irrelevant | 0 | 0 | The paper evaluates the anti-parasitic activity of nystatin against a ciliate, which is a mechanistic/efficacy study, not a pharmacokinetic study reporting disposition parameters. |
| PD | Yao_2015 | not_relevant | 0 | 0 | The paper evaluates the in vitro efficacy of nystatin against a parasite (Ichthyophthirius multifiliis) and does not report pharmacokinetic data, exposure-response relationships, or numeric pharmacodynamic parameters (e.g., EC50, Emax) for a host organism. |
| PD | Yassin_2025 | not_relevant | 2 | 1 | The paper reports MICs and FICI values for nystatin combinations, which are static susceptibility metrics, not a dynamic pharmacodynamic (exposure-response) model with parameters like Emax or EC50. |
| popPK | Zha_2008 | irrelevant | 0 | 0 | The paper concerns GABA receptor physiology in rat neurons and does not involve nystatin pharmacokinetics. |
| PD | Zha_2008 | not_relevant | 0 | 0 | The paper investigates the effect of noradrenaline on GABA receptors in rat spiral ganglion neurons and does not mention nystatin or report any pharmacodynamic parameters for it. |
| popPK | Zhao_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ciprofloxacin, not nystatin. |
| PD | Zhao_2014 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of ciprofloxacin, not nystatin, and does not report any pharmacodynamic or exposure-response parameters. |
| PD | Zhou_2023 | not_relevant | 0 | 0 | The paper reports pharmacodynamic parameters (IC50) for suplatast tosilate, not nystatin; nystatin is only mentioned as a tool for the patch-clamp recording technique. |
| PD | unknown_1959 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | The paper is a retrospective cohort study on pleural fluid cultures in the ICU and does not contain any pharmacokinetic data for nystatin. |
| PD | unknown_2024 | not_relevant | 0 | 0 | The paper is a retrospective cohort study on the prevalence of positive pleural fluid cultures in the ICU and does not contain any pharmacokinetic or pharmacodynamic data for nystatin. |
| popPK | Álvarez_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefepime, and nystatin is only listed as a concomitant prophylactic medication in the patient demographics. |
| PD | Álvarez_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of cefepime, not nystatin, and does not report any PD parameters for nystatin. |
| PD | Łączkowski_2018 | not_relevant | 0 | 0 | The paper reports MIC and IC50 values for novel thiazole compounds, with nystatin used only as a qualitative positive control; it does not report a pharmacodynamic model or exposure-response relationship for nystatin. |
| popPK | Šermukšnytė_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel triazole derivatives where nystatin is used only as a reference standard for antimicrobial activity, with no pharmacokinetic data reported. |
| PD | Šermukšnytė_2026 | not_relevant | 0 | 0 | The paper reports MIC values for nystatin as a reference standard for antimicrobial activity, but does not perform a pharmacodynamic (exposure-response) analysis or report PD parameters (e.g., Emax, EC50) for nystatin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_nystatin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
