# abciximab

- **generic name:** abciximab
- **ATC codes:** `B01AC13`
- **DrugBank:** [DB00054](https://go.drugbank.com/drugs/DB00054)
- **groups:** approved, withdrawn

## About

**Description.** Abciximab is a Fab fragment of the chimeric human-murine monoclonal antibody 7E3. Abciximab binds to the glycoprotein (GP) IIb/IIIa receptor of human platelets and inhibits platelet aggregation by preventing the binding of fibrinogen, von Willebrand factor, and other adhesive molecules. It also binds to vitronectin (αvβ3) receptor found on platelets and vessel wall endothelial and smooth muscle cells.

**Indication.** Abciximab is indicated as an adjunct to percutaneous coronary intervention for the prevention of cardiac ischemic complications in patients undergoing percutaneous coronary intervention and in patients with unstable angina not responding to conventional medical therapy when percutaneous coronary intervention is planned within 24 hours. Abciximab is intended for use with aspirin and heparin and has been studied only in that setting.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 16:03 | 0:45 | 0/0/0 | 1/3/0 | 0/0/0 | 1,286/232 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 2/4 | 6/8 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abernethy_2002](drugs/drug_abciximab/pd_Abernethy_2002_GP_IIb_IIIa_receptor_occupancy.md) | Abernethy DR et al., Pharmacodynamics of abciximab during an…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.121775](https://doi.org/10.1067/mcp.2002.121775) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abernethy_2002](drugs/drug_abciximab/pd_Abernethy_2002_Inhibition_of_platelet_aggregation_20_mol_L_A.md) | Abernethy DR et al., Pharmacodynamics of abciximab during an…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.121775](https://doi.org/10.1067/mcp.2002.121775) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abernethy_2002](drugs/drug_abciximab/pd_Abernethy_2002_Inhibition_of_platelet_aggregation_5_mol_L_AD.md) | Abernethy DR et al., Pharmacodynamics of abciximab during an…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.121775](https://doi.org/10.1067/mcp.2002.121775) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Bergstrand_2022](drugs/drug_abciximab/pd_Bergstrand_2022_von_Willebrand_factor_antigen.md) | Bergstrand M et al., Caplacizumab Model-Based Dosing Recomme…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1991](https://doi.org/10.1002/jcph.1991) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kereiakes_2020](drugs/drug_abciximab/pd_Kereiakes_2020_IPA.md) | Kereiakes DJ et al., First Human Use of RUC-4: A Nonactivati…, Journal of the American Hea… (2020) | [10.1161/jaha.120.016552](https://doi.org/10.1161/jaha.120.016552) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kereiakes_2020](drugs/drug_abciximab/pd_Kereiakes_2020_inhibition_of_platelet_aggregation.md) | Kereiakes DJ et al., First Human Use of RUC-4: A Nonactivati…, Journal of the American Hea… (2020) | [10.1161/jaha.120.016552](https://doi.org/10.1161/jaha.120.016552) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Mager_2003](drugs/drug_abciximab/pd_Mager_2003_unknown.md) | Mager DE et al., Simultaneous modeling of abciximab plas…, The Journal of pharmacology… (2003) | [10.1124/jpet.103.057299](https://doi.org/10.1124/jpet.103.057299) |

## Coverage

- **PubMed hits:** 127 matched, 56 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cox_2004.pdf` | Cox DS et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2004) | pd | 5 | [10.1177/0091270004267651](https://doi.org/10.1177/0091270004267651) | [15317826](https://www.ncbi.nlm.nih.gov/pubmed/15317826) | metadata signals extractable PD data (PK-PD) |
| `Knight_2004.pdf` | Knight DM et al., Pharmacodynamic enhancement of the anti…, Platelets (2004) | pd | 5 | [10.1080/09537100410001723135](https://doi.org/10.1080/09537100410001723135) | [15745312](https://www.ncbi.nlm.nih.gov/pubmed/15745312) | metadata signals extractable PD data (IC50) |
| `Klinkhardt_2000.pdf` | Klinkhardt U et al., Differential in vitro effects of the pl…, Thrombosis research (2000) | pd | 4 | [10.1016/s0049-3848(99)00155-3](https://doi.org/10.1016/s0049-3848(99)00155-3) | [10674406](https://www.ncbi.nlm.nih.gov/pubmed/10674406) | metadata signals extractable PD data (EC50) |
| `Tselepis_1999.pdf` | Tselepis AD et al., Platelet aggregatory response to platel…, Cardiovascular research (1999) | pd | 4 | [10.1016/s0008-6363(99)00078-4](https://doi.org/10.1016/s0008-6363(99)00078-4) | [10536703](https://www.ncbi.nlm.nih.gov/pubmed/10536703) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-06T16:03:15.968506+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergstrand_2022 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of caplacizumab, not abciximab. |
| PGx | Bougie_2016 | not_relevant | 0 | 0 | The paper studies the NOD/scid mouse model for platelet clearance using anti-GPIIb/IIIa antibodies, not the pharmacogenomics of abciximab. |
| popPK | Bugelski_2012 | irrelevant | 1 | 0 | The paper is a review of concordance between preclinical and clinical data for multiple biologics, including abciximab, but does not report original quantitative pharmacokinetic parameters for abciximab. |
| PD | Bugelski_2012 | not_relevant | 1 | 0 | The paper is a review discussing the concordance of preclinical and clinical pharmacology for 15 biopharmaceuticals, including abciximab, but it does not report specific numeric PD parameters or exposure-response curves for abciximab. |
| popPK | Casterella_2001 | irrelevant | 0 | 0 | The study evaluates platelet function dose-response (pharmacodynamics) rather than pharmacokinetic disposition parameters. |
| popPK | Cox_2004 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of argatroban, with abciximab serving only as a co-administered comparator agent without reported PK parameters. |
| popPK | Davé_2016 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of a novel bispecific antibody format (Fab-dsFv), not abciximab. |
| PD | Davé_2016 | not_relevant | 0 | 0 | not captured |
| popPK | Dua_2015 | irrelevant | 0 | 0 | The paper is a general tutorial on Target-Mediated Drug Disposition (TMDD) models and does not report specific quantitative pharmacokinetic parameters for abciximab. |
| PD | Dua_2015 | not_relevant | 1 | 0 | The paper is a general tutorial on Target-Mediated Drug Disposition (TMDD) models and does not report specific pharmacodynamic or exposure-response data for abciximab. |
| popPK | El-Omar_2001 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing outcomes, not a pharmacokinetic study, and contains no quantitative PK parameters for abciximab. |
| PD | El-Omar_2001 | not_relevant | 0 | 0 | The text is a clinical trial summary comparing efficacy outcomes (death, MI, revascularization) and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters. |
| popPK | Escher_2009 | irrelevant | 0 | 0 | The study focuses on the in vitro and in vivo characterization of novel recombinant Fab fragments, with abciximab serving only as a comparator for competitive inhibition, and no pharmacokinetic parameters are reported. |
| PD | Escher_2009 | not_relevant | 0 | 0 | The paper characterizes novel recombinant Fab fragments and mentions abciximab only as a competitive inhibitor in binding assays, without reporting any exposure-response or dose-response PD parameters for abciximab itself. |
| popPK | Freedman_2002 | irrelevant | 1 | 0 | The study reports only pharmacodynamic endpoints (receptor blockade and platelet aggregation) and does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Gorchakova_2004 | not_relevant | 2 | 10 | The study reports a null association between the PlA1 polymorphism and clinical outcomes (myocardial salvage/infarct size) rather than a change in a specific pharmacokinetic or pharmacodynamic parameter of abciximab. |
| popPK | Hall_2007 | irrelevant | 0 | 0 | The paper describes the structure of a hantavirus inhibitor peptide and does not involve abciximab or pharmacokinetic parameters. |
| PD | Hall_2007 | not_relevant | 0 | 0 | The paper reports the structure and IC50 of a cyclic pentapeptide inhibitor for hantaviruses, not a pharmacodynamic or exposure-response analysis for abciximab. |
| popPK | Jinesh_2015 | irrelevant | 0 | 0 | The paper is a review of anti-TNF drugs and mentions abciximab only as a historical example of a monoclonal antibody, without providing any pharmacokinetic parameters for it. |
| PD | Jinesh_2015 | not_relevant | 0 | 0 | The paper is a review of anti-TNF drugs and mentions abciximab only as a historical example of a monoclonal antibody, providing no pharmacodynamic data or exposure-response analysis for it. |
| popPK | Kageyama_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of AJW200, with abciximab serving only as a comparator agent without reported quantitative PK parameters. |
| PD | Kageyama_2002 | not_relevant | 2 | 1 | The paper focuses on AJW200; abciximab is only mentioned qualitatively as a comparator with no numeric PD parameters or dose-response curves provided. |
| popPK | Kawasaki_1996 | irrelevant | 0 | 0 | The paper characterizes a snake venom disintegrin (flavostatin) and its binding to GPIIb/IIIa, with no pharmacokinetic data for abciximab. |
| PD | Kawasaki_1996 | not_relevant | 0 | 0 | The paper characterizes a new disintegrin (flavostatin) and does not report any pharmacodynamic or exposure-response data for abciximab. |
| popPK | Kereiakes_1996 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamics of xemilofiban with abciximab as a co-administered agent, and no quantitative PK parameters for abciximab are reported. |
| popPK | Kereiakes_1999 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic platelet inhibition profiles rather than pharmacokinetic disposition parameters for abciximab. |
| popPK | Kereiakes_2000 | irrelevant | 1 | 0 | The paper is a qualitative review discussing pharmacodynamic differences and receptor affinity without reporting quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for abciximab. |
| PD | Kereiakes_2000 | not_relevant | 2 | 0 | The text is a qualitative review comparing the pharmacodynamic profiles of GP IIb/IIIa inhibitors without providing specific numeric PD parameters or concentration-effect data for abciximab. |
| popPK | Kereiakes_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for RUC-4, not abciximab. |
| popPK | Kleiman_1995 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (platelet aggregation and receptor blockade) rather than quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for abciximab. |
| popPK | Klinkhardt_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet function and does not report pharmacokinetic parameters for abciximab. |
| popPK | Klinkhardt_2001 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of platelet inhibition and bleeding time, reporting no pharmacokinetic parameters (clearance, volume, half-life) for abciximab. |
| popPK | Knight_2004 | irrelevant | 1 | 0 | The paper focuses on pharmacodynamic effects (platelet aggregation inhibition) and binding affinity of PEGylated constructs, without reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for abciximab. |
| popPK | Ma_2011 | irrelevant | 0 | 0 | The paper studies a novel disintegrin (Tablysin-15) and uses abciximab only as a blocking antibody in mechanistic assays, reporting no pharmacokinetic parameters for abciximab. |
| PD | Ma_2011 | not_relevant | 0 | 0 | The paper studies a novel disintegrin (Tablysin-15) and only mentions abciximab as a control antibody in an adhesion assay; it does not report any pharmacodynamic or exposure-response relationship for abciximab. |
| popPK | Mager_2003 | relevant | 9 | 2 | The paper describes a compartmental PK/PD model for abciximab, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Marathe_2011 | irrelevant | 0 | 0 | The study focuses on interferon-beta (IFN-β) and does not involve abciximab. |
| PD | Marathe_2011 | not_relevant | 0 | 0 | The paper is a simulation study on PK parameter estimation for interferon-beta, not a PD analysis for abciximab. |
| popPK | Marciniak_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet inhibition and receptor binding kinetics, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Mascelli_2000 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (platelet reactivity and receptor blockade) rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Matsumoto_2007 | irrelevant | 0 | 0 | The paper focuses on the development of anti-GPVI antibodies and uses abciximab only as a comparator for potency in in-vitro assays, reporting no pharmacokinetic parameters. |
| PD | Matsumoto_2007 | not_relevant | 1 | 1 | The paper reports an IC50 for abciximab only as a comparative benchmark for new antibodies, not as a PD analysis of abciximab itself. |
| popPK | Matzdorff_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic comparison of platelet function assays and does not report pharmacokinetic disposition parameters for abciximab. |
| PGx | Meisel_2004 | not_relevant | 2 | 0 | The text is a review abstract discussing the general role of platelet glycoprotein polymorphisms in disease and drug response, but it does not report specific quantitative pharmacokinetic or pharmacodynamic effects of a genotype on abciximab. |
| PGx | Nordeen_2013 | not_relevant | 0 | 0 | The paper focuses on clopidogrel resistance and CYP2C19 genotyping, not the pharmacokinetics or pharmacodynamics of abciximab. |
| popPK | Pedicord_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on platelet procoagulant activity and does not report any pharmacokinetic parameters for abciximab. |
| popPK | Rebello_2000 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assessment of platelet inhibition potency (IC50) and does not report pharmacokinetic disposition parameters for abciximab. |
| PGx | Rose_2013 | not_relevant | 0 | 0 | The paper is a case report on obesity affecting clopidogrel response, with no data on pharmacogenomic effects on abciximab PK/PD. |
| PGx | Sagulkoo_2025 | not_relevant | 0 | 0 | The paper identifies abciximab as a potential therapeutic target for AAA via drug repurposing and molecular docking, but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Sanchez-Pena_2005 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for enoxaparin, not abciximab, which was only a concomitant medication. |
| PD | Sanchez-Pena_2005 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of enoxaparin, not abciximab, and does not report a pharmacodynamic model or exposure-response relationship for the target drug. |
| popPK | Saucedo_2004 | irrelevant | 1 | 0 | The study reports pharmacodynamic parameters (platelet aggregation inhibition and receptor occupancy) rather than pharmacokinetic disposition parameters (clearance, volume, half-life). |
| PGx | Schrör_2003 | not_relevant | 0 | 0 | The paper explicitly states there is no clear evidence that the biological activity of the agents is modified by gene polymorphism (HPA-1). |
| PGx | Sibbing_2005 | not_relevant | 0 | 0 | The study investigates the effect of a PAI-1 polymorphism on clinical outcomes (infarct size, salvage index) rather than on the pharmacokinetic or pharmacodynamic parameters of abciximab. |
| popPK | Stone_2002 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing outcomes (MI, mortality) of abciximab and tirofiban, containing no pharmacokinetic parameters or disposition data. |
| PD | Stone_2002 | not_relevant | 0 | 0 | The paper reports clinical outcomes (MI rates, survival) comparing two drugs but does not provide any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50, platelet inhibition percentages). |
| popPK | Tcheng_1994 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (platelet inhibition) and clinical outcomes, reporting no quantitative pharmacokinetic parameters (CL, V, t1/2) for abciximab. |
| popPK | Tcheng_1995 | irrelevant | 0 | 0 | The paper is a review of clinical outcomes and safety for antithrombotic agents, containing no quantitative pharmacokinetic parameters for abciximab. |
| PD | Tcheng_1995 | not_relevant | 1 | 0 | The text is a qualitative review of clinical trial outcomes and safety profiles for antithrombotic agents, including abciximab (c7E3 Fab), but it does not report any specific pharmacokinetic or pharmacodynamic data, concentration-effect curves, or numeric PD parameters. |
| popPK | Trikha_2002 | irrelevant | 0 | 0 | The paper investigates the mechanistic roles of integrins in tumor growth and angiogenesis using antibody fragments, not the pharmacokinetics of abciximab. |
| popPK | Tselepis_1999 | irrelevant | 0 | 0 | The study focuses on platelet aggregation and PAF-acetylhydrolase activity, reporting no pharmacokinetic parameters (CL, V, t1/2) for abciximab. |
| PD | Tselepis_1999 | not_relevant | 3 | 2 | The study reports qualitative inhibition percentages (90-96%) at specific time points after a fixed dose, but does not provide concentration-effect data, EC50/Emax parameters, or a PK/PD model linking drug exposure to the pharmacodynamic effect. |
| popPK | Urquidi-Macdonald_2004 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling using neural networks to predict platelet aggregation effects, not on reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for abciximab. |
| popPK | Van_2019 | irrelevant | 0 | 0 | The paper is a clinical review of perioperative bridging strategies and does not report original quantitative pharmacokinetic parameters for abciximab. |
| PD | Van_2019 | not_relevant | 1 | 0 | The paper is a narrative review of clinical efficacy and safety, containing no quantitative pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for abciximab. |
| popPK | Wegert_2002 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of thrombin generation where abciximab is used as an in-vitro inhibitor, not a pharmacokinetic study reporting disposition parameters. |
| PD | Wegert_2002 | not_relevant | 3 | 2 | The study reports qualitative/percentage changes in Endogenous Thrombin Potential (ETP) for abciximab in vitro but does not provide a concentration-effect curve, Emax, or EC50 values for the drug itself. |
| popPK | Wittke_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sibrafiban (Ro 44-3888), not abciximab. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no study data, parameters, or mention of abciximab. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for abciximab. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | The evidence contains only a conference title with no pharmacokinetic data or study details for abciximab. |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of abciximab pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_abciximab`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
