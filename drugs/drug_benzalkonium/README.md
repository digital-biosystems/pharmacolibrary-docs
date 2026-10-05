<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;benzalkonium&quot;}]"></div>

# benzalkonium

- **generic name:** benzalkonium
- **ATC codes:** `D08AJ01`, `D09AA11`, `R02AA16`
- **DrugBank:** [DB11105](https://go.drugbank.com/drugs/DB11105) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Benzalkonium is an antiseptic and disinfectant used to treat or prevent infection on skin, wounds and throat preparations. It is widely used in topical products such as antiseptics, medicated dressings and throat preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72445001](https://www.wikidata.org/wiki/Q72445001) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 17:58 | 19:13 | 0/0/0 | 0/1/0 | 0/0/0 | 73,389/1,628 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 6/16 | 6/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Rodríguez-López_2022_L_monocytogenes_survival_in_biofilm_BAC_dose_response](drugs/drug_benzalkonium/pd_Rodr_guez_L_pez_2022_L_monocytogenes_survival_in_biofilm_BAC.md) | L. monocytogenes survival in biofilm (BAC dose-response) ← benzalkonium chloride; neutral electrolyzed water · inhibition effect | — | Rodríguez-López P et al., Architectural Features and Resistance t…, Frontiers in microbiology (2022) | [10.3389/fmicb.2022.917964](https://doi.org/10.3389/fmicb.2022.917964) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rodríguez-López_2022_L_monocytogenes_survival_in_biofilm_NEW_dose_response](drugs/drug_benzalkonium/pd_Rodr_guez_L_pez_2022_L_monocytogenes_survival_in_biofilm_NEW.md) | L. monocytogenes survival in biofilm (NEW dose-response) ← benzalkonium chloride; neutral electrolyzed water · inhibition effect | — | Rodríguez-López P et al., Architectural Features and Resistance t…, Frontiers in microbiology (2022) | [10.3389/fmicb.2022.917964](https://doi.org/10.3389/fmicb.2022.917964) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rodríguez-López_2022_Pseudomonas_spp_survival_in_biofilm_BAC_dose_response](drugs/drug_benzalkonium/pd_Rodr_guez_L_pez_2022_Pseudomonas_spp_survival_in_biofilm_BAC.md) | Pseudomonas spp. survival in biofilm (BAC dose-response) ← benzalkonium chloride; neutral electrolyzed water · inhibition effect | — | Rodríguez-López P et al., Architectural Features and Resistance t…, Frontiers in microbiology (2022) | [10.3389/fmicb.2022.917964](https://doi.org/10.3389/fmicb.2022.917964) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rodríguez-López_2022_Pseudomonas_spp_survival_in_biofilm_NEW_dose_response](drugs/drug_benzalkonium/pd_Rodr_guez_L_pez_2022_Pseudomonas_spp_survival_in_biofilm_NEW.md) | Pseudomonas spp. survival in biofilm (NEW dose-response) ← benzalkonium chloride; neutral electrolyzed water · inhibition effect | — | Rodríguez-López P et al., Architectural Features and Resistance t…, Frontiers in microbiology (2022) | [10.3389/fmicb.2022.917964](https://doi.org/10.3389/fmicb.2022.917964) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=benzalkonium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 220 matched, 139 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Elersek_2018.pdf` | Elersek T et al., Ecotoxicity of disinfectant benzalkoniu…, PeerJ (2018) | pd | 5 | [10.7717/peerj.4986](https://doi.org/10.7717/peerj.4986) | [29938131](https://www.ncbi.nlm.nih.gov/pubmed/29938131) | metadata signals extractable PD data (EC50) |
| `Lemenuel-Diot_2007.pdf` | Lemenuel-Diot A et al., Mixture modeling for the detection of s…, Journal of pharmacokinetics… (2007) | pd | 5 | [10.1007/s10928-006-9039-8](https://doi.org/10.1007/s10928-006-9039-8) | [17151938](https://www.ncbi.nlm.nih.gov/pubmed/17151938) | metadata signals extractable PD data (PK/PD) |
| `Costa_2014.pdf` | Costa SP et al., Automated evaluation of pharmaceuticall…, Journal of hazardous materi… (2014) | pd | 4 | [10.1016/j.jhazmat.2013.11.052](https://doi.org/10.1016/j.jhazmat.2013.11.052) | [24355776](https://www.ncbi.nlm.nih.gov/pubmed/24355776) | metadata signals extractable PD data (EC50) |
| `Czarny_2019.pdf` | Czarny J et al., The Toxic Effect of Herbicidal Ionic Li…, International journal of en… (2019) | pd | 4 | [10.3390/ijerph16060916](https://doi.org/10.3390/ijerph16060916) | [30875750](https://www.ncbi.nlm.nih.gov/pubmed/30875750) | metadata signals extractable PD data (EC50) |
| `Flanjak_2024.pdf` | Flanjak L et al., Ecotoxicity and rapid degradation of qu…, Chemosphere (2024) | pd | 4 | [10.1016/j.chemosphere.2023.140584](https://doi.org/10.1016/j.chemosphere.2023.140584) | [37925031](https://www.ncbi.nlm.nih.gov/pubmed/37925031) | metadata signals extractable PD data (EC50) |
| `Gravel_2017.pdf` | Gravel J et al., Adaptation of a bacterial membrane perm…, MedChemComm (2017) | pd | 4 | [10.1039/c7md00113d](https://doi.org/10.1039/c7md00113d) | [30108851](https://www.ncbi.nlm.nih.gov/pubmed/30108851) | metadata signals extractable PD data (EC50) |
| `Gromaire_2015.pdf` | Gromaire MC et al., Benzalkonium runoff from roofs treated…, Water research (2015) | pd | 4 | [10.1016/j.watres.2015.05.060](https://doi.org/10.1016/j.watres.2015.05.060) | [26081434](https://www.ncbi.nlm.nih.gov/pubmed/26081434) | metadata signals extractable PD data (EC50) |
| `Higashijima_1990.pdf` | Higashijima T et al., Regulation of Gi and Go by mastoparan,…, The Journal of biological c… (1990) | pd | 4 | not captured | [2117607](https://www.ncbi.nlm.nih.gov/pubmed/2117607) | metadata signals extractable PD data (EC50) |
| `Karamov_2022.pdf` | Karamov EV et al., Cationic Surfactants as Disinfectants a…, International journal of mo… (2022) | pd | 4 | [10.3390/ijms23126645](https://doi.org/10.3390/ijms23126645) | [35743090](https://www.ncbi.nlm.nih.gov/pubmed/35743090) | metadata signals extractable PD data (EC50) |
| `Lytvynenko_2016.pdf` | Lytvynenko I et al., Molecular basis of polyspecificity of t…, Journal of molecular biology (2016) | pd | 4 | [10.1016/j.jmb.2015.12.006](https://doi.org/10.1016/j.jmb.2015.12.006) | [26707198](https://www.ncbi.nlm.nih.gov/pubmed/26707198) | metadata signals extractable PD data (IC50) |
| `Nakamura_2013.pdf` | Nakamura H et al., Biofilm formation and resistance to ben…, Journal of food protection (2013) | pd | 4 | [10.4315/0362-028X.JFP-12-225](https://doi.org/10.4315/0362-028X.JFP-12-225) | [23834792](https://www.ncbi.nlm.nih.gov/pubmed/23834792) | metadata signals extractable PD data (EC50) |
| `Park_2014.pdf` | Park KH et al., In vitro and in vivo efficacy of drugs…, Journal of fish diseases (2014) | pd | 4 | [10.1111/jfd.12104](https://doi.org/10.1111/jfd.12104) | [23952334](https://www.ncbi.nlm.nih.gov/pubmed/23952334) | metadata signals extractable PD data (EC50) |
| `Schmidt_2024.pdf` | Schmidt SBI et al., Differential Selection for Survival and…, Evolutionary applications (2024) | pd | 4 | [10.1111/eva.70017](https://doi.org/10.1111/eva.70017) | [39399585](https://www.ncbi.nlm.nih.gov/pubmed/39399585) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-29T17:54:42.571610+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ballicu_2026 | irrelevant | 0 | 0 | The paper investigates protein corona formation on nanoparticles and does not involve benzalkonium or pharmacokinetic parameters. |
| PD | Ballicu_2026 | not_relevant | 0 | 0 | The paper investigates protein corona formation on silica nanoparticles and does not involve benzalkonium or any pharmacodynamic exposure-response relationship. |
| popPK | Baquero_2022 | irrelevant | 0 | 0 | The paper is a review on the environmental fate of antibiotics and does not study benzalkonium or report any pharmacokinetic parameters for it. |
| PD | Baquero_2022 | not_relevant | 1 | 0 | The paper is a conceptual review on environmental antibiotic detoxification and does not report specific numeric PD parameters or concentration-effect data for benzalkonium. |
| popPK | Bastia_2021 | irrelevant | 0 | 0 | Benzalkonium chloride is listed only as a preservative in the vehicle formulation, not as the subject drug for pharmacokinetic analysis. |
| PD | Bastia_2021 | not_relevant | 2 | 1 | The paper reports pharmacodynamic effects (IOP lowering) for NCX 1741, not benzalkonium chloride, which is only listed as a vehicle excipient. |
| popPK | Belenichev_2025 | irrelevant | 0 | 0 | The paper studies the neuroprotective effects of Angiolin gel, where benzalkonium chloride is only a preservative excipient, and no pharmacokinetic parameters for benzalkonium are reported. |
| PD | Belenichev_2025 | not_relevant | 0 | 0 | The paper evaluates the efficacy of Angiolin gel (not benzalkonium) in a rat model using group comparisons without any pharmacokinetic data, concentration measurements, or dose-response modeling. |
| popPK | Boone_2025 | irrelevant | 0 | 0 | The study focuses on vinyl chloride exposure and PBPK modeling for chemical incidents, not benzalkonium pharmacokinetics. |
| PD | Boone_2025 | not_relevant | 0 | 0 | The paper focuses on PBPK modeling for vinyl chloride exposure in an acute incident and does not contain any pharmacodynamic or exposure-response analysis for benzalkonium. |
| popPK | Burgalassi_2001 | irrelevant | 0 | 0 | The study evaluates cytotoxicity of benzalkonium chloride on cell lines and does not report any pharmacokinetic parameters. |
| popPK | Carbajo_2015 | irrelevant | 0 | 0 | The paper is an aquatic toxicity and risk assessment study, not a pharmacokinetic study, and contains no PK parameters for benzalkonium. |
| popPK | Cazaubon_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of teicoplanin, not benzalkonium. |
| PD | Cazaubon_2017 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of teicoplanin, not benzalkonium, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Chahdi_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study on mast cell activation by methoctramine, where benzalkonium chloride is used only as a selective inhibitor/comparator, and no pharmacokinetic parameters are reported. |
| PD | Chahdi_1998 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Emax) for methoctramine, not benzalkonium chloride, which is only mentioned as an inhibitor of the response. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The paper is a food microbiology study on Listeria monocytogenes and nisin efficacy, where benzalkonium chloride is used only as a pre-growth stress condition, not as a subject drug for pharmacokinetic analysis. |
| popPK | Christen_2017 | irrelevant | 0 | 0 | The study focuses on cytotoxicity and molecular effects (gene expression) of benzalkonium chloride in vitro and in zebrafish, not on pharmacokinetic parameters. |
| popPK | Costa_2014 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| popPK | Czarny_2019 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| PD | Czarny_2019 | not_relevant | 0 | 0 | The paper focuses on the toxic effects of herbicidal ionic liquids on microbial communities and does not mention benzalkonium or report any pharmacodynamic parameters. |
| popPK | Daeffler_1999 | irrelevant | 0 | 0 | The paper is a mechanistic study on mast cell histamine release where benzalkonium chloride is used only as a reagent to inhibit secretion, not as a subject drug for pharmacokinetic analysis. |
| PD | Daeffler_1999 | not_relevant | 4 | 5 | The paper reports concentration-dependent histamine release for spermine and arcaine (with EC50 values) but only qualitatively mentions benzalkonium chloride as an inhibitor without providing numeric PD parameters or a dose-response curve for it. |
| popPK | Datta_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic evaluation of mitochondrial function and estrogen signaling, not a pharmacokinetic study, and reports no disposition parameters for benzalkonium. |
| popPK | Dick_2024 | irrelevant | 0 | 0 | The paper studies the adsorption of tetracycline on nanoplastics and does not involve benzalkonium or report any pharmacokinetic parameters. |
| PD | Dick_2024 | not_relevant | 0 | 0 | The paper investigates the adsorption of tetracycline on nanoplastics and its effect on antibiotic activity, but it does not report any pharmacodynamic or exposure-response relationship for benzalkonium. |
| popPK | Duflot_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of morphine and its metabolites, not benzalkonium. |
| PD | Duflot_2022 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of morphine and its metabolites, comparing nebulized vs. intravenous routes, and does not report any pharmacodynamic (PD) or exposure-response relationships for benzalkonium or any other drug. |
| popPK | Elersek_2018 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| PD | Elersek_2018 | not_relevant | 0 | 0 | The paper is an ecotoxicology study on algae, not a pharmacodynamic study in humans or animals, and does not report drug PD parameters. |
| PD | Estévez_1994 | not_relevant | 0 | 0 | The paper focuses on the mechanism of adriamycin-induced histamine release; benzalkonium chloride is only mentioned as a pretreatment that did not affect adriamycin's effect, with no dose-response or PD parameters reported for benzalkonium. |
| PD | Fisher_1975 | not_relevant | 2 | 1 | The text provides only qualitative descriptions of effects (no effect vs. 10-fold increase) without a formal dose-response curve or numeric PD parameters for benzalkonium chloride. |
| popPK | Flanjak_2024 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Flanjak_2024 | not_relevant | 0 | 0 | The paper focuses on the ecotoxicity and degradation kinetics of quaternary ammonium compounds (QACs) under UV treatment, not on the pharmacodynamic (exposure-response) relationship of benzalkonium in a biological system. |
| PD | Fox_1986 | not_relevant | 0 | 0 | Benzalkonium chloride is used solely as a tool to ablate the myenteric plexus, not as the drug of interest for which a pharmacodynamic exposure-response relationship is being characterized. |
| popPK | Frühling_2001 | irrelevant | 0 | 0 | The paper is an ecotoxicology study measuring the effect of benzalkonium chloride on soil bacteria, not a pharmacokinetic study. |
| popPK | Gao_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for hydromorphone, not benzalkonium. |
| PD | Gao_2026 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for hydromorphone, not benzalkonium, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Goulooze_2022 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics and pharmacodynamics of finerenone, not benzalkonium. |
| PD | Goulooze_2022 | not_relevant | 0 | 0 | not captured |
| popPK | Gravel_2017 | irrelevant | 0 | 0 | no_text gate: only 141 chars of text extracted (&lt; 400) |
| popPK | Gromaire_2015 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Gromaire_2015 | not_relevant | 0 | 0 | The paper focuses on environmental runoff and leaching of benzalkonium from roofs, not on pharmacodynamic or exposure-response relationships in biological systems. |
| popPK | Groothuis_2019 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay focusing on sorption and potency, not a pharmacokinetic study reporting disposition parameters for benzalkonium. |
| popPK | Gula_2018 | irrelevant | 0 | 0 | The paper is a quality of life substudy of a clinical trial for ventricular arrhythmias and contains no pharmacokinetic data for benzalkonium. |
| popPK | He_2023 | irrelevant | 0 | 0 | The paper is an epidemiological modeling study regarding epidemic spread and intervention schemes, containing no pharmacokinetic data for benzalkonium. |
| popPK | Higashijima_1990 | irrelevant | 0 | 0 | no_text gate: only 142 chars of text extracted (&lt; 400) |
| PD | Higashijima_1990 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action of mastoparan and related peptides on G-proteins, with no mention of benzalkonium or any exposure-response/PD analysis for it. |
| popPK | Hilligoss_2026 | irrelevant | 0 | 0 | The paper focuses on causal mediation analysis of postprandial glucose in Type 1 Diabetes and does not study benzalkonium or report any pharmacokinetic parameters for it. |
| PD | Hilligoss_2026 | not_relevant | 0 | 0 | The paper analyzes the causal mediation of carbohydrate intake on glucose in Type 1 diabetes and does not involve benzalkonium or any pharmacodynamic modeling of that drug. |
| popPK | Huhtala_2003 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assessment of benzalkonium chloride, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Jeong_2025 | irrelevant | 0 | 0 | The study is an in-vitro toxicology assessment of mixture toxicity (cytotoxicity, ROS, apoptosis) and does not report any pharmacokinetic parameters for benzalkonium. |
| popPK | Kammann_2009 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on nonylphenol in zebrafish, not a pharmacokinetic study on benzalkonium. |
| PD | Kammann_2009 | not_relevant | 0 | 0 | The paper studies the toxicity of nonylphenol and its metabolites, not benzalkonium. |
| popPK | Karamov_2022 | irrelevant | 0 | 0 | no_text gate: only 56 chars of text extracted (&lt; 400) |
| PD | Karamov_2022 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding the pharmacodynamic or exposure-response relationship of benzalkonium. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The paper is an environmental monitoring and ecotoxicology study reporting environmental concentrations and toxicity endpoints (EC50, LC50), not pharmacokinetic disposition parameters. |
| popPK | Kolb_1975 | irrelevant | 0 | 0 | The paper studies the binding of anilinonaphthalenesulfonate to serum albumin and does not involve benzalkonium or pharmacokinetic parameters. |
| PD | Kolb_1975 | not_relevant | 0 | 0 | The paper discusses protein-ligand binding cooperativity (anilinonaphthalenesulfonate to albumin) and does not involve benzalkonium or pharmacodynamic exposure-response relationships. |
| popPK | Koziol_2020 | irrelevant | 0 | 0 | The paper focuses on cisplatin dosing regimens and tumor growth modeling, with no mention of benzalkonium or its pharmacokinetic parameters. |
| PD | Koziol_2020 | not_relevant | 0 | 0 | The paper discusses cisplatin dosing regimens and tumor growth modeling, not benzalkonium, and does not report specific numeric PD parameters for the target drug. |
| PGx | Lambden_2018 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of DDAH2 in septic shock and does not mention benzalkonium or its pharmacokinetics/pharmacodynamics. |
| PD | Lazarus_1989 | not_relevant | 3 | 2 | The paper reports qualitative toxicity rankings and specific concentrations for benzalkonium chloride (0.004-0.02%) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative dose-response curve for BAC in the text. |
| popPK | Lemenuel-Diot_2007 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Lemenuel-Diot_2007 | not_relevant | 0 | 0 | The paper discusses mixture modeling for PK/PD analysis in general but does not report specific data or numeric PD parameters for benzalkonium. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of aconitine, not benzalkonium. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper describes a photonic crystal cellular force microscopy technique for imaging cellular forces and contains no pharmacokinetic data or mention of benzalkonium. |
| PD | Li_2023 | not_relevant | 0 | 0 | The paper describes a photonic crystal imaging technique for measuring cellular forces and does not report any pharmacodynamic or exposure-response data for benzalkonium. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is an environmental exposure and biomarker analysis, not a pharmacokinetic study, and reports no quantitative disposition parameters for benzalkonium. |
| PGx | Lin_2013 | not_relevant | 0 | 0 | The paper describes a toxicological mouse model of limbal stem cell deficiency induced by benzalkonium chloride and does not investigate any gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Linkevicius_2026 | irrelevant | 0 | 0 | The paper focuses on computational modeling of voltage-gated potassium ion channels using mixed-effects models, not the pharmacokinetics of the drug benzalkonium. |
| PD | Linkevicius_2026 | not_relevant | 0 | 0 | The paper models voltage-gated potassium channel gating kinetics using Hodgkin-Huxley equations and does not involve benzalkonium or any drug pharmacodynamics. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The paper focuses on computational prediction of ocular toxicity for prostaglandin F2α analogs (latanoprost) and does not involve benzalkonium or pharmacokinetic parameters. |
| PD | Lu_2026 | not_relevant | 0 | 0 | The paper focuses on computational toxicity prediction for prostaglandin F2α analogs (latanoprost) and does not involve benzalkonium or report any pharmacodynamic exposure-response relationships for it. |
| PD | Lytvynenko_2016 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of the AbeS efflux pump and does not report pharmacodynamic or exposure-response relationships for benzalkonium. |
| popPK | Mané_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftolozane and tazobactam, not benzalkonium. |
| PD | Mané_2020 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of ceftolozane/tazobactam in ECMO patients and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Marrec_2023 | irrelevant | 0 | 0 | The paper is a theoretical study on stochastic population growth models in ecology and does not involve the drug benzalkonium or pharmacokinetic parameters. |
| PD | Marrec_2023 | not_relevant | 0 | 0 | The paper focuses on stochastic population growth dynamics in ecology and does not contain any pharmacodynamic or exposure-response analysis for benzalkonium. |
| PD | Mendez_1990 | not_relevant | 0 | 0 | The text is a title regarding the prevention of STDs by a benzalkonium chloride spermicide and does not contain any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Mertens_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for isavuconazole, not benzalkonium. |
| PD | Mertens_2023 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of isavuconazole in patients on ECMO and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Mousli_1992 | irrelevant | 0 | 0 | The paper is a mechanistic study on C3a anaphylatoxin and mast cells, where benzalkonium chloride is used only as a reagent/inhibitor, not as the subject drug for pharmacokinetic analysis. |
| PD | Mousli_1992 | not_relevant | 0 | 0 | The paper reports dose-response data for C3a and its analogues, not for benzalkonium chloride, which is only mentioned as an inhibitor. |
| popPK | Muetter_2026 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on bacterial population dynamics using luminescence assays and does not involve the drug benzalkonium or report pharmacokinetic parameters. |
| PD | Muetter_2026 | not_relevant | 0 | 0 | The paper focuses on methodological comparisons of luminescence vs. CFU assays for 20 antimicrobials and does not report any data, analysis, or parameters for benzalkonium. |
| popPK | Nakamura_2013 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Nakamura_2013 | not_relevant | 0 | 0 | The paper focuses on biofilm formation and resistance mechanisms in Listeria monocytogenes, not on pharmacodynamic modeling or exposure-response relationships for a drug. |
| popPK | Pai_2026 | irrelevant | 0 | 0 | The paper is a review of extemporaneous formulations for pediatric patients and does not report any pharmacokinetic parameters for benzalkonium. |
| PD | Pai_2026 | not_relevant | 0 | 0 | The paper is a general review of extemporaneous formulations for pediatric patients and does not contain any pharmacodynamic or exposure-response data for benzalkonium. |
| popPK | Park_2014 | irrelevant | 0 | 0 | no_text gate: only 175 chars of text extracted (&lt; 400) |
| PD | Park_2014 | not_relevant | 0 | 0 | The paper focuses on the efficacy of drugs against a protozoan parasite in ascidians and does not report pharmacodynamic or exposure-response relationships for benzalkonium. |
| PD | Patrick_1985 | not_relevant | 4 | 2 | The paper describes a dose-response relationship for benzalkonium chloride (incidence of prolonged thickness is dose-related) but does not provide specific numeric dose values or effect magnitudes in the text to derive parameters like EC50 or Emax. |
| popPK | Paul_2026 | irrelevant | 0 | 0 | The paper is a review on AI in photodynamic therapy and does not report pharmacokinetic parameters for benzalkonium. |
| PD | Paul_2026 | not_relevant | 0 | 0 | The paper is a review on AI in photodynamic therapy and does not report any pharmacodynamic or exposure-response data for benzalkonium. |
| PD | Pearson_1986 | not_relevant | 0 | 0 | The provided text is a title or fragment about vaginal contraceptives and contains no data, analysis, or mention of benzalkonium or any pharmacodynamic parameters. |
| PD | Poppinga_2015 | not_relevant | 0 | 0 | The paper concerns radiation dosimetry and detector response functions, not pharmacodynamics or drug exposure-response relationships. |
| popPK | Qian_2022 | irrelevant | 0 | 0 | The study investigates the toxicological effects of benzalkonium chloride on cyanobacteria, not its pharmacokinetic disposition parameters. |
| popPK | Raharinirina_2025 | irrelevant | 0 | 0 | The paper focuses on SARS-CoV-2 evolution and antibody pharmacokinetics, not the drug benzalkonium. |
| PD | Raharinirina_2025 | not_relevant | 0 | 0 | The paper focuses on SARS-CoV-2 viral evolution and immune landscape modeling, and does not contain any pharmacodynamic or exposure-response data for benzalkonium. |
| popPK | Rassu_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of isorhamnetin, with benzalkonium chloride serving only as a solubilizing agent rather than the subject drug. |
| popPK | Rouaz_2021 | irrelevant | 0 | 0 | The paper is a review of excipients in pediatric populations and does not report pharmacokinetic parameters for benzalkonium. |
| PD | Rouaz_2021 | not_relevant | 0 | 0 | The paper is a theoretical review of excipients in paediatric formulations and does not report any pharmacodynamic or exposure-response data for benzalkonium. |
| popPK | Sajjadi_2024 | irrelevant | 0 | 0 | The paper is a review of tacrolimus stability and does not involve benzalkonium or report any pharmacokinetic parameters. |
| PD | Sajjadi_2024 | not_relevant | 0 | 0 | The paper is a review on the physicochemical stability and formulations of tacrolimus, not benzalkonium, and contains no pharmacodynamic or exposure-response data. |
| popPK | Sato_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dexmedetomidine, not benzalkonium. |
| PD | Sato_2025 | not_relevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics (PK) of dexmedetomidine and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| PGx | Schabauer_2018 | not_relevant | 0 | 0 | The paper investigates the antimicrobial activity of gentisaldehyde and 2,3-dihydroxybenzaldehyde against S. aureus, not the pharmacokinetics or pharmacodynamics of benzalkonium chloride. |
| popPK | Schmidt_2024 | irrelevant | 0 | 0 | no_text gate: only 122 chars of text extracted (&lt; 400) |
| PD | Schmidt_2024 | not_relevant | 0 | 0 | The paper focuses on adaptive laboratory evolution (microbiology) and does not report pharmacodynamic or exposure-response relationships for benzalkonium chloride in a pharmacological context. |
| popPK | Scott_2022 | irrelevant | 0 | 0 | The paper is a toxicology study comparing in vitro and in vivo toxicity endpoints (LC50/EC50) and does not report pharmacokinetic parameters for benzalkonium. |
| popPK | Seebeck_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study on signaling pathways in mast cells where benzalkonium chloride is used only as a pertussis toxin-related inhibitor/comparator, not as the subject of a pharmacokinetic analysis. |
| PD | Seeger_1976 | not_relevant | 0 | 0 | The paper focuses on the haemolytic properties of phallolysin and only mentions benzalkonium chloride in a single comparative sentence regarding membrane lipid liberation, without providing any dose-response data or PD parameters for benzalkonium. |
| PGx | Seguin_2019 | not_relevant | 0 | 0 | The paper describes the metabolism of benzalkonium chlorides by CYP enzymes but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Sibarov_2025 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on epilepsy in rat neurons and does not involve benzalkonium or pharmacokinetic parameters. |
| PD | Sibarov_2025 | not_relevant | 0 | 0 | The paper studies SK channels and Na/K-ATPase modulators (CyPPA, ouabain, NS309) in neuronal cultures and does not mention or analyze benzalkonium. |
| popPK | Stamos_2025 | irrelevant | 0 | 0 | The paper focuses on atropisomerism and crystallization of unrelated compounds (ACBI1 and BI201335) and does not involve benzalkonium or pharmacokinetic parameters. |
| PD | Stamos_2025 | not_relevant | 0 | 0 | The paper focuses on the physical chemistry of atropisomerism and crystallization of bRo5 compounds, containing no pharmacodynamic or exposure-response data for benzalkonium. |
| PD | Stamper_2019 | not_relevant | 0 | 0 | The paper models glucose-insulin dynamics in beta-cells and does not involve the drug benzalkonium. |
| PD | Tan_2026 | not_relevant | 0 | 0 | The paper reports an IC50 for fenofibric acid (the drug of interest), not for benzalkonium chloride (BAC), which is only used as an agent to induce the disease model. |
| popPK | Tanaka_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of mannitol, not benzalkonium. |
| PD | Tang_2023 | not_relevant | 3 | 2 | The paper reports a single IC50 value (&gt;100 μM) for cytotoxicity, which is a static toxicity endpoint rather than a dynamic pharmacodynamic exposure-response or dose-response relationship with derivable PD parameters like Emax or EC50. |
| popPK | Tezel_2012 | irrelevant | 0 | 0 | The paper describes aerobic biotransformation of a quaternary ammonium compound by a microbial community, which is an environmental microbiology study, not a pharmacokinetic study of benzalkonium in humans or animals. |
| PD | Tezel_2012 | not_relevant | 2 | 1 | The paper reports a single EC50 value for a microbial toxicity assay (Microtox) and a biotransformation rate, but does not provide a pharmacodynamic exposure-response model or curve for a drug in a biological system. |
| popPK | Türkoğlu_2026 | irrelevant | 0 | 0 | The study investigates cytotoxicity and genotoxicity in an in-vitro plant model (Allium cepa) and does not report any pharmacokinetic parameters for benzalkonium. |
| popPK | Uchida_2022 | irrelevant | 0 | 0 | The paper investigates the effect of xenon gas on neuronal network activity in vitro and does not involve the drug benzalkonium or any pharmacokinetic parameters. |
| PD | Uchida_2022 | not_relevant | 0 | 0 | The paper investigates the effects of xenon gas on neuronal networks, not benzalkonium, and does not report any pharmacodynamic parameters for the specified drug. |
| popPK | Vazquez-Rodriguez_2022 | irrelevant | 0 | 0 | The study focuses on niclosamide (NIC) as the subject drug, and benzalkonium is only mentioned as a surface disinfectant used during animal preparation. |
| PD | Vazquez-Rodriguez_2022 | not_relevant | 0 | 0 | The paper focuses on niclosamide (NIC) and does not report any pharmacodynamic or exposure-response data for benzalkonium. |
| popPK | Verhaeghe_2013 | irrelevant | 0 | 0 | The paper describes a PET signal separation methodology for water activation studies and does not involve benzalkonium or report any pharmacokinetic parameters for it. |
| popPK | Villaverde_2019 | irrelevant | 0 | 0 | The paper is a methodological study on system identification and observability analysis for general biological models and does not report pharmacokinetic parameters for benzalkonium. |
| PD | Villaverde_2019 | not_relevant | 0 | 0 | The paper is a methodological study on system identification and observability for nonlinear biological models and does not report any pharmacodynamic or exposure-response data for benzalkonium. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of caspofungin, not benzalkonium. |
| PD | Wang_2020 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics (PK) of caspofungin, not benzalkonium, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Warner_2016 | irrelevant | 0 | 0 | The paper focuses on disease progression modeling for Huntington's disease and does not involve benzalkonium or pharmacokinetic parameters. |
| PD | Warner_2016 | not_relevant | 0 | 0 | The paper models Huntington's disease progression using age and CAG length, not a drug exposure-response or dose-response relationship for benzalkonium. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antifungal activity of a novel rosin-based compound, using benzalkonium bromide only as a comparator for efficacy, with no pharmacokinetic data reported. |
| PGx | Yamada_2016 | not_relevant | 0 | 0 | The paper discusses mitochondrial replacement therapy and genetic drift in oocytes, which is unrelated to the pharmacokinetics or pharmacodynamics of benzalkonium. |
| popPK | Yamamoto_2021 | irrelevant | 0 | 0 | The paper is a materials science study on antimicrobial dental resins and does not report any pharmacokinetic parameters for benzalkonium. |
| PD | Yanochko_2010 | not_relevant | 4 | 2 | The paper describes a qualitative shift in the dose-response curve for benzalkonium chloride but does not provide specific numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve in the provided text. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | The study investigates the biodegradation and inhibition of benzalkonium chloride in an activated sludge system (environmental engineering), not pharmacokinetic disposition parameters in a biological host. |
| popPK | Zorko_1998 | irrelevant | 0 | 0 | The paper is a mechanistic study on GTPase activity and peptide structure, where benzalkonium chloride is only mentioned as a negative control agent, not as a subject of pharmacokinetic analysis. |
| PD | Zorko_1998 | not_relevant | 0 | 0 | The paper reports PD parameters for galparan and mastoparan, but benzalkonium chloride is only mentioned qualitatively as a control that did not prevent inhibition, with no numeric dose-response or PD parameters provided for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
