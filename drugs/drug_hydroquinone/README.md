<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;hydroquinone&quot;}]"></div>

# hydroquinone

- **generic name:** hydroquinone
- **ATC codes:** `D11AX11`
- **DrugBank:** [DB09526](https://go.drugbank.com/drugs/DB09526) · **PubChem:** [CID 785](https://pubchem.ncbi.nlm.nih.gov/compound/785)
- **molar mass:** 110.1106 g/mol (C6H6O2) — DrugBank
- **groups:** approved, investigational

## About

Hydroquinone is a skin-lightening agent used to treat hyperpigmentation such as dark spots and melasma. It is an approved topical dermatological medicine, though its availability is restricted in some countries due to safety concerns.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419164](https://www.wikidata.org/wiki/Q419164) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:30 | 18:21 | 0/0/0 | 1/0/0 | 0/0/0 | 659,612/9,565 | einfracz / qwen3.8-27b | 30 | 0/23 | 29/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Ciranni_1991_chromosomal_aberrations_in_dividing_spermatogonia](drugs/drug_hydroquinone/pd_Ciranni_1991_chromosomal_aberrations_in_dividing_spermatogon.md) | chromosomal aberrations in dividing spermatogonia ← hydroquinone · direct linear effect | — | Ciranni R et al., Clastogenic effects of hydroquinone: in…, Mutation research (1991) | [10.1016/0165-7992(91)90005-o](https://doi.org/10.1016/0165-7992(91)90005-o) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">mouse</span> | [Ciranni_1991_structural_chromosome_aberrations_in_primary_spermatocytes](drugs/drug_hydroquinone/pd_Ciranni_1991_structural_chromosome_aberrations_in_primary_sp.md) | structural chromosome aberrations in primary spermatocytes ← hydroquinone · stimulation effect | — | Ciranni R et al., Clastogenic effects of hydroquinone: in…, Mutation research (1991) | [10.1016/0165-7992(91)90005-o](https://doi.org/10.1016/0165-7992(91)90005-o) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hydroquinone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |

<sub>Actors without a tissue in the table: CYSLTR1 (activator), GAA (product), ITGA2B (target), ITGB3 (target), TYR (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 333 matched, 124 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ancerewicz_1998 | irrelevant | 0 | 0 | The study is an in-vitro structure-activity relationship (SAR) analysis of antioxidant properties and does not report any pharmacokinetic disposition parameters. |
| popPK | Anwar_2025 | irrelevant | 0 | 0 | The paper describes an in-vitro study of a DHODH inhibitor in cancer cells and does not report any pharmacokinetic parameters for hydroquinone. |
| popPK | Ballesteros-Casallas_2023 | irrelevant | 0 | 0 | The study investigates the mechanism of action and in vitro trypanocidal activity of p-quinone derivatives, not the pharmacokinetic disposition of hydroquinone. |
| PGx | Bongard_2012 | not_relevant | 0 | 0 | The study investigates CoQ(1) reduction in Nqo1-null mice, not the pharmacokinetics or pharmacodynamics of hydroquinone as a therapeutic drug. |
| popPK | Chantarudee_2012 | irrelevant | 0 | 0 | The paper is a phytochemical study on bee pollen and free radical scavenging, not a pharmacokinetic study of the drug hydroquinone. |
| PGx | Chen_2003 | not_relevant | 0 | 0 | The paper studies the metabolism of DPC 963, not hydroquinone, and reports no pharmacogenomic effects on hydroquinone parameters. |
| popPK | Chen_2009 | irrelevant | 0 | 0 | The paper reports in vitro mechanistic data (IC50/EC50) for tyrosinase inhibition and melanogenesis suppression, not pharmacokinetic disposition parameters. |
| PGx | Cheng_2023 | not_relevant | 0 | 0 | The paper discusses plant heat tolerance and hydroquinone detoxification in yeast/plants, not human pharmacogenomics of hydroquinone. |
| popPK | Chung_2023 | irrelevant | 0 | 0 | The paper is a review of quantitative systems pharmacology models of the coagulation cascade and does not contain pharmacokinetic data for hydroquinone. |
| popPK | Dagni_2022 | irrelevant | 0 | 0 | The paper is a review of the genus Dysphania (mossy monkeyweed) and its essential oils, and contains no data on the drug hydroquinone. |
| popPK | Donsing_2008 | irrelevant | 0 | 0 | The study is an in-vitro evaluation of a breadfruit extract's melanogenesis-inhibitory activity where hydroquinone is used only as a positive control, and no pharmacokinetic parameters are reported. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper is a risk assessment of tetrabromobisphenol A (TBBPA) and does not involve hydroquinone pharmacokinetics. |
| popPK | EFSA_2024_2 | irrelevant | 0 | 0 | The paper is a risk assessment of polybrominated diphenyl ethers (PBDEs) in food and does not study the pharmacokinetics of hydroquinone. |
| popPK | Eguílaz_2010 | irrelevant | 0 | 0 | The paper describes an electrochemical sensor where hydroquinone is used as a redox mediator, not as the subject of a pharmacokinetic study. |
| PGx | Ellard_1993 | not_relevant | 2 | 5 | The paper investigates the effect of CYP450 expression on the clastogenicity (micronucleus formation) of hydroquinone, not the modulation of pharmacokinetic or pharmacodynamic parameters by human genetic polymorphisms. |
| popPK | Falkenhagen_2023 | irrelevant | 0 | 0 | The paper is a pharmacodynamic modeling study of warfarin's effect on coagulation, where vitamin K hydroquinone is a mechanistic intermediate in the warfarin pathway, not the subject drug. |
| popPK | Ferrer_2025 | irrelevant | 0 | 0 | The paper studies oolong tea extracts and their electrochemical/anticancer properties, containing no pharmacokinetic data for hydroquinone. |
| PGx | Folkes_2007 | not_relevant | 0 | 0 | The paper focuses on the oxidative metabolism of combretastatin A-1, not hydroquinone, and does not report pharmacogenomic effects. |
| popPK | Gallitto_2025 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics and efficacy of napabucasin in glioma models, not the pharmacokinetics of hydroquinone. |
| popPK | Gáborová_2024 | irrelevant | 0 | 0 | The paper is a phytochemical and in vitro study of diterpenes where "hydroquinone" refers only to a structural subclass of abietane compounds, not the pharmacokinetic study of the drug hydroquinone. |
| popPK | Hervás_2009 | irrelevant | 0 | 0 | Hydroquinone is used as an electrochemical mediator in an immunoassay for zearalenone, not as a pharmacokinetic subject drug. |
| popPK | Hong_2015 | irrelevant | 0 | 0 | The paper describes the synthesis and in vitro cytotoxic/ROS induction activity of novel quinone/hydroquinone derivatives, not pharmacokinetic disposition parameters. |
| popPK | Huang_2008 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (topoisomerase II poisoning) and cytotoxicity of a specific alkyl hydroquinone derivative, without reporting quantitative pharmacokinetic parameters (CL, V, etc.) for hydroquinone. |
| popPK | Höger_1985 | irrelevant | 0 | 0 | The study focuses on rifampin (and its quinone/hydroquinone metabolites) acting on leukocytes, not on the pharmacokinetics of hydroquinone as a subject drug. |
| popPK | Karunarathna_2025 | irrelevant | 0 | 0 | The paper is a review of the antimicrobial properties of the medicinal mushroom Ganoderma and does not contain pharmacokinetic data for the drug hydroquinone. |
| PGx | Kim_2007 | not_relevant | 0 | 0 | The study investigates the metabolism of benzene (an environmental toxin), where hydroquinone is an endogenous metabolite, not the pharmacokinetics of hydroquinone as a therapeutic drug. |
| popPK | Klöcking_2002 | irrelevant | 0 | 0 | The paper is an in-vitro study of antiviral activity and does not report pharmacokinetic parameters for hydroquinone. |
| popPK | Koh_2013 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring cell viability (CC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Kropp_2023 | irrelevant | 0 | 0 | The paper describes retinal organ culture models for oxidative stress and does not report pharmacokinetic parameters for hydroquinone. |
| PGx | Kumar_2009 | not_relevant | 0 | 0 | The study reports in vitro genotoxicity (chromosomal aberrations) as a biological endpoint, which is not a pharmacokinetic (PK) or pharmacodynamic (PD) parameter. |
| popPK | Lahnsteiner_2008 | irrelevant | 0 | 0 | The study is a comparative toxicology test in zebrafish measuring mortality/EC50, not a pharmacokinetic study reporting disposition parameters for hydroquinone. |
| PGx | Lan_2009 | not_relevant | 1 | 2 | The paper studies benzene toxicity, where hydroquinone is a toxic metabolant, not hydroquinone as a therapeutic drug with defined PK/PD parameters. |
| popPK | Lapertot_2006 | irrelevant | 0 | 0 | The paper describes the photocatalytic degradation of phenols in water (in vitro/chemical) and mentions hydroquinone only as a detected intermediate product, providing no pharmacokinetic parameters. |
| PGx | Lee_2019 | not_relevant | 0 | 0 | The paper characterizes the crystallographic polymorphs and thermodynamic stability of an agomelatine-hydroquinone cocrystal, but it does not investigate any pharmacokinetic or pharmacodynamic parameters or the effect of genetic variants on drug response. |
| popPK | Lee_2026 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation using hydroquinone to induce oxidative stress in corneal cells and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Li_2019 | not_relevant | 0 | 0 | The paper focuses on the metabolic characteristics of Tanshinone I, not hydroquinone, and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Lin_2008 | irrelevant | 0 | 0 | The study investigates the photodegradation and ecotoxicity of the herbicide fenoxaprop-p-ethyl in Daphnia magna, where hydroquinone is identified only as a toxic photoproduct rather than the subject of a pharmacokinetic study. |
| PGx | Mahatma_2021 | not_relevant | 0 | 0 | The paper is a metabolomics study of plant disease resistance in groundnuts and does not involve human pharmacogenomics or the pharmacokinetics of hydroquinone. |
| popPK | Mammone_2010 | irrelevant | 0 | 0 | Hydroquinone is used only as a comparator control agent in a cosmetic efficacy study, with no pharmacokinetic parameters reported. |
| PGx | Moran_1999 | not_relevant | 0 | 0 | The paper describes the mechanism of toxicity (PD) for benzene/hydroquinone in relation to an NQO1 polymorphism, but does not measure pharmacokinetic parameters (PK) of the drug itself. |
| popPK | Morré_2007 | irrelevant | 0 | 0 | The paper is a mechanistic study on the target of phenoxodiol, and hydroquinone is mentioned only as a functional chemical property (oxidative state) rather than as a drug subject of pharmacokinetic analysis. |
| popPK | Morré_2014 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of the drug ME-143's interaction with the ENOX2 enzyme, where hydroquinone is used as a substrate to assess oxidative activity, not as a subject drug for pharmacokinetic modeling. |
| PGx | Nakamura_2011 | not_relevant | 0 | 0 | The paper investigates the metabolic pathway of Bisphenol A producing Hydroquinone, but it does not report on the pharmacokinetics or pharmacodynamics of Hydroquinone itself, nor does it assess the impact of genetic variants on these parameters. |
| popPK | Norez_2006 | irrelevant | 0 | 0 | The study investigates cystic fibrosis and CFTR trafficking in human airway epithelial cells, using hydroquinone derivatives (2,5-di(t-butyl)hydroquinone) only as experimental tools/inhibitors, and reports no pharmacokinetic parameters for hydroquinone. |
| PGx | Obach_2007 | not_relevant | 0 | 0 | The paper studies the metabolism of CP-122,721 (a neurokinin-1 antagonist), not hydroquinone, and does not report pharmacogenomic effects on hydroquinone PK/PD. |
| popPK | Olson_2020 | irrelevant | 0 | 0 | The paper investigates the chemical mechanism of green tea catechins oxidizing hydrogen sulfide, and hydroquinone is mentioned only as an intermediate product in a chemical redox cycle, not as a subject drug for pharmacokinetic analysis. |
| popPK | Rivedal_2005 | irrelevant | 0 | 0 | The paper investigates the mechanism of benzene toxicity via gap-junction inhibition in vitro, not the pharmacokinetics of hydroquinone. |
| popPK | Rodríguez-Fernández_2024 | irrelevant | 0 | 0 | The study focuses on warfarin pharmacokinetics/pharmacodynamics; hydroquinone is only mentioned as a metabolic intermediate of vitamin K, not as the subject drug. |
| PGx | Ross_2011 | not_relevant | 0 | 0 | The study investigates the mechanistic role of NQO1 polymorphism in benzene toxicity and endothelial cell function, specifically noting that hydroquinone inhibits tube formation, but it does not report changes in hydroquinone's pharmacokinetic or pharmacodynamic parameters based on genotype. |
| PGx | Ross_2017 | not_relevant | 0 | 0 | The paper is a review of NQO1 cellular functions and does not report pharmacokinetic or pharmacodynamic parameters for the drug hydroquinone. |
| popPK | Santos_2004 | irrelevant | 0 | 0 | The paper focuses on the toxicity and catalytic oxidation of hydroquinone in wastewater, not on pharmacokinetic parameters. |
| popPK | Seaton_1995 | irrelevant | 1 | 0 | The study is an in vitro mechanistic study of benzene metabolism and detoxication, using hydroquinone as a metabolite substrate rather than as the subject drug for PK parameter determination. |
| popPK | Shreevatsa_2021 | irrelevant | 0 | 0 | The paper is a computational study (molecular docking) of NQO1 inhibitors and mentions hydroquinone only as a general product of quinone reduction, providing no pharmacokinetic parameters for hydroquinone. |
| popPK | Shui_2021 | irrelevant | 0 | 0 | The paper is about synthetic biology protein switches and does not study the pharmacokinetics of hydroquinone. |
| popPK | Silva_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the drug APX3330, for which the hydroquinone form is a tautomer/metabolite, but it does not report parameters for hydroquinone (4-hydroxyphenol) as the subject drug. |
| popPK | Sliwoski_2014 | irrelevant | 0 | 0 | The paper is a review of computational drug discovery methods and does not report any pharmacokinetic parameters for hydroquinone. |
| popPK | Soo_2025 | irrelevant | 0 | 0 | The paper is a review focused on lipidic vesicular delivery systems for tranexamic acid in melasma, and hydroquinone is only mentioned as a comparative agent without any pharmacokinetic parameters. |
| popPK | Stasyuk_2026 | irrelevant | 0 | 0 | The paper describes an electrochemical biosensor for PETN detection where hydroquinone acts as an electron mediator, not a study of hydroquinone pharmacokinetics. |
| popPK | Sureja_2022 | irrelevant | 0 | 0 | The paper is an in-silico study of lignan derivatives for SARS CoV-2 inhibition and does not report pharmacokinetic parameters for hydroquinone. |
| PGx | Tang_2007 | not_relevant | 0 | 0 | The paper discusses a cancer-specific protein (tNOX) and mentions hydroquinone only as part of the protein's functional description (oxidase activity), not as a drug being studied for pharmacokinetics or pharmacodynamics in relation to gene variants. |
| popPK | Valenzuela_2024 | irrelevant | 0 | 0 | The paper is an ecotoxicology study reporting toxicity endpoints (LC50/EC50) on non-target organisms, not a pharmacokinetic study reporting disposition parameters for hydroquinone. |
| PGx | Van_2013 | not_relevant | 0 | 0 | The paper focuses on vitamin K epoxide reductase (VKOR) and warfarin, not hydroquinone. |
| PGx | Vang_1993 | not_relevant | 2 | 0 | The paper studies the effect of P450 expression on the inhibition of intercellular communication by hydroquinone, not the PK/PD pharmacogenomics of hydroquinone as a therapeutic drug. |
| popPK | Vasincu_2025 | irrelevant | 0 | 0 | The paper is a review of the neuroprotective potential of Ocimum plant species and does not contain any pharmacokinetic data for hydroquinone. |
| PGx | Verma_2017 | not_relevant | 0 | 0 | The paper focuses on the genome organization of a bacterium (Sphingobium indicum B90A) that degrades hexachlorocyclohexane and mentions hydroquinone only as a degradation intermediate, not as a pharmaceutical drug in a pharmacogenomic context. |
| PGx | Wu_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of arbutin (a hydroquinone derivative) in treating cholestasis via FXR activation, but does not report pharmacogenomic effects (gene variants) on the PK or PD parameters of hydroquinone. |
| popPK | Wätjen_2009 | irrelevant | 0 | 0 | The paper focuses on the in-vitro biological activities (cytotoxicity, kinase inhibition) of prenylated hydroquinone derivatives isolated from marine sponges, not on the pharmacokinetic disposition of the drug hydroquinone. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of warfarin and vitamin K, with no mention or data for hydroquinone. |
| popPK | Yamashita_2017 | irrelevant | 0 | 0 | The paper investigates the antiviral mechanism of metachromin A against HBV, and "hydroquinone" is only mentioned as a structural moiety, not as the subject drug for PK evaluation. |
| PGx | Yan_2005 | not_relevant | 0 | 0 | The study investigates the metabolism of p-cresol, not hydroquinone, and reports in vitro bioactivation pathways without assessing pharmacogenomic effects on PK/PD parameters. |
| popPK | Zazo_2007 | irrelevant | 0 | 0 | The study is an in-vitro ecotoxicity analysis of phenol oxidation intermediates, not a pharmacokinetic study, and contains no PK parameters for hydroquinone. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The study is an ecological/toxicological investigation of hydroquinone as an algal inhibitor, not a pharmacokinetic study. |
| PGx | Zhao_2009 | not_relevant | 0 | 0 | The paper studies the effects of benzene and its metabolites on CYP450 gene expression, not the pharmacokinetics or pharmacodynamics of hydroquinone in response to genetic variants. |
| PGx | Zheng_2011 | not_relevant | 0 | 0 | The paper reports the in vitro metabolism of 17-DMAG and does not report any pharmacogenomic effect on the PK or PD of hydroquinone. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The paper investigates the interaction between DOPAC/hydroquinone and alpha-synuclein, unrelated to pharmacogenomics or pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
