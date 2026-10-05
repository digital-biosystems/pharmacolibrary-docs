<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;obeticholic acid&quot;}]"></div>

# obeticholic acid

- **generic name:** obeticholic acid
- **ATC codes:** `A05AA04`
- **DrugBank:** [DB05990](https://go.drugbank.com/drugs/DB05990) · **PubChem:** [CID 447715](https://pubchem.ncbi.nlm.nih.gov/compound/447715)
- **molar mass:** 420.6252 g/mol (C26H44O4) — DrugBank
- **groups:** approved, investigational

## About

Obeticholic acid is a bile acid derivative used to treat liver diseases, including primary biliary cholangitis and other forms of liver cirrhosis and bile duct inflammation. It is an approved medicine, though it carries a boxed warning, indicating use requires caution under medical supervision.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15708271](https://www.wikidata.org/wiki/Q15708271) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:36 | 5:34 | 0/0/0 | 0/0/0 | 0/0/0 | 219,975/5,351 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 3/27 | 19/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=obeticholic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` downregulator/inhibitor | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCB11` inducer/inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: NR1H4 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 97 matched, 95 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alkhouri_2024.pdf` | Alkhouri N et al., Safety, pharmacokinetics and pharmacody…, Liver international : offic… (2024) | popPK | 8 | [10.1111/liv.15816](https://doi.org/10.1111/liv.15816) | [38293761](https://pubmed.ncbi.nlm.nih.gov/38293761) | The paper reports pharmacokinetic findings for obeticholic acid in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, which only describes trends in exposure. |
| `Li_2021.pdf` | Li X et al., Comparison of the Pharmacokinetics of G…, Clinical pharmacology in dr… (2021) | popPK | 8 | [10.1002/cpdd.905](https://doi.org/10.1002/cpdd.905) | [33463088](https://pubmed.ncbi.nlm.nih.gov/33463088) | The study reports PK parameters for obeticholic acid, but the specific numeric values for clearance, volume, or half-life are not present in the provided abstract text, only relative changes and bioequivalence conclusions. |

<sub>queue written 2026-10-04T14:34:13.511914+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aizawa_2016 | not_relevant | 0 | 0 | The paper is a general review of NAFLD/NASH management and mentions obeticholic acid as a treatment option, but it does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Alkhouri_2024 | relevant | 8 | 2 | The paper reports pharmacokinetic findings for obeticholic acid in humans, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided text, which only describes trends in exposure. |
| PD | Alkhouri_2024 | not_relevant | 3 | 1 | The paper reports qualitative changes in pharmacodynamic markers (FXR activation, transaminases) and PK exposure differences by fibrosis stage, but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model. |
| popPK | Amatya_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ESC-ABD-AuNPs (a nanoparticle formulation), and obeticholic acid is only used as a model drug for loading efficiency tests without any PK parameter reporting. |
| popPK | Carino_2018 | irrelevant | 0 | 0 | The study focuses on the antifibrotic mechanism of a novel FXR ligand (BAR704) in mice, with obeticholic acid mentioned only as a comparator for selectivity, and no pharmacokinetic parameters are reported. |
| PD | Carino_2018 | not_relevant | 2 | 1 | The paper focuses on a novel compound (BAR704) and only mentions obeticholic acid qualitatively as a comparator with side effects, providing no PD parameters or exposure-response data for obeticholic acid. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on FABP1 inhibitors where obeticholic acid is used only as a comparator for efficacy, with no pharmacokinetic parameters reported. |
| PD | Chen_2024 | not_relevant | 0 | 0 | The paper focuses on the design and synthesis of novel FABP1 inhibitors and only qualitatively compares the efficacy of the lead compound to obeticholic acid in mice, without reporting any exposure-response or dose-response data for obeticholic acid. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new FABP/PPAR modulator (compound 27) and uses obeticholic acid only as a clinical comparator for efficacy, without reporting any pharmacokinetic parameters for obeticholic acid. |
| PD | Chen_2025 | not_relevant | 0 | 0 | The paper reports in vitro IC50/EC50 values for a new compound (27) and qualitatively compares its efficacy to obeticholic acid in mice, but it does not provide any exposure-response or dose-response data, PK/PD modeling, or numeric PD parameters for obeticholic acid. |
| PGx | Christen_2022 | not_relevant | 0 | 0 | The paper is a review of animal models for autoimmune hepatitis and does not report pharmacogenomic effects on the PK or PD of obeticholic acid. |
| popPK | Edwards_2017 | irrelevant | 0 | 0 | The study evaluates the effect of obeticholic acid on the pharmacokinetics of other probe drugs (caffeine, midazolam, warfarin, etc.), not the pharmacokinetic parameters of obeticholic acid itself. |
| PGx | Edwards_2017 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (DDIs) of obeticholic acid with probe substrates, not pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Fan_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of lignans from Schisandra sphenanthera in protecting against cholestasis and mentions obeticholic acid only as background context, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Gai_2020 | not_relevant | 1 | 0 | The paper studies the effect of OCA on valproic acid toxicity and mentions FXR variants only as a hypothetical significance statement without providing data on OCA's PK/PD. |
| PGx | Gao_2021 | not_relevant | 0 | 0 | The paper investigates the functional characteristics of induced ballooned hepatocytes and the histological effects of obeticholic acid in a cell model, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Gege_2014 | irrelevant | 0 | 0 | The paper is a review of synthetic FXR agonists (isoxazoles) and mentions obeticholic acid only as a comparator/clinical context without providing any quantitative PK parameters for it. |
| popPK | Grzegorzewski_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dextromethorphan and its metabolites, not obeticholic acid. |
| PD | Grzegorzewski_2022 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of dextromethorphan and CYP2D6 polymorphisms, not obeticholic acid, and does not report any pharmacodynamic or exposure-response relationships for the target drug. |
| popPK | Guo_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study measuring the pharmacokinetics of taurocholate (a probe substrate) in the presence of obeticholic acid, not the disposition parameters of obeticholic acid itself. |
| popPK | Guthrie_2018 | irrelevant | 0 | 0 | The study is an in vitro/in vivo mechanistic investigation of phytosterols and inflammation where obeticholic acid is used only as a comparator FXR agonist, with no pharmacokinetic parameters reported. |
| PGx | Hu_2024 | not_relevant | 0 | 0 | The paper is a computational drug discovery study screening for novel FXR agonists and does not report any pharmacogenomic effects on the PK or PD of obeticholic acid. |
| PGx | Ishida_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP1A2 downregulation by obeticholic acid in vitro, not the effect of a gene variant on the PK/PD of obeticholic acid. |
| popPK | Jiang_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacology of 25-hydroxylanosterol, with obeticholic acid serving only as a comparator agent without reported PK parameters. |
| PGx | Jiang_2024 | not_relevant | 0 | 0 | The paper is a preclinical animal study investigating the pharmacological effects of obeticholic acid in neonatal pigs and does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters. |
| PGx | Jiang_2025 | not_relevant | 0 | 0 | The paper is a preclinical animal study investigating the pharmacological effects of obeticholic acid in neonatal pigs and does not report any pharmacogenomic effects (gene variant/genotype) on PK or PD parameters. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of MHY5396, with obeticholic acid serving only as a comparator for efficacy in a fibrosis model. |
| PD | Kim_2025 | not_relevant | 0 | 0 | The paper focuses on a new compound (MHY5396) and only uses obeticholic acid (OCA) as a qualitative positive control in efficacy comparisons, without reporting any exposure-response or dose-response PD parameters for OCA. |
| PGx | Kim_2025 | not_relevant | 0 | 0 | The paper focuses on a new compound (MHY5396) and does not report pharmacogenomic effects on the PK or PD of obeticholic acid. |
| popPK | Kjærgaard_2021 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of the PET tracer 11C-CSar (cholylsarcosine) to assess bile acid transport, not the pharmacokinetic parameters (CL, V, etc.) of the drug obeticholic acid itself. |
| popPK | Li_2019 | irrelevant | 2 | 0 | The paper describes the development and validation of an analytical method for obeticholic acid in rat plasma but does not report quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) in the provided evidence. |
| popPK | Li_2021 | relevant | 8 | 2 | The study reports PK parameters for obeticholic acid, but the specific numeric values for clearance, volume, or half-life are not present in the provided abstract text, only relative changes and bioequivalence conclusions. |
| popPK | Li_2024 | irrelevant | 2 | 0 | The paper describes a bioanalytical method validation and mentions application to PK studies, but no quantitative PK parameters (CL, V, t1/2, etc.) are provided in the evidence. |
| popPK | Liang_2023 | irrelevant | 0 | 0 | The study is a reproductive toxicity assessment in mice and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for obeticholic acid. |
| popPK | Lin_2022 | irrelevant | 0 | 0 | The paper is a mechanistic study investigating the effect of obeticholic acid on fatty acid uptake in mice and cells, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Ling_2026 | not_relevant | 0 | 0 | The paper evaluates the protective effect of obeticholic acid in a 3D liver model exposed to Microcystin-LR, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of obeticholic acid. |
| popPK | Lu_2024 | irrelevant | 0 | 0 | The study focuses on the formulation, biodistribution, and therapeutic efficacy of a nanocrystal in mice, but does not report quantitative pharmacokinetic parameters (CL, V, ka, t1/2) for obeticholic acid. |
| popPK | Luo_2021 | irrelevant | 0 | 0 | The study focuses on the discovery and characterization of a novel FXR modulator (compound 11k), with obeticholic acid serving only as a comparator for potency and efficacy, and no PK parameters for obeticholic acid are reported. |
| popPK | Massafra_2017 | irrelevant | 0 | 0 | The study is a mechanistic investigation of FXR activation on amino acid metabolism and proteomics in mice, not a pharmacokinetic study of obeticholic acid. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper describes the discovery of novel CAR agonists and does not report pharmacokinetic parameters for obeticholic acid. |
| PD | Mejdrová_2023 | not_relevant | 0 | 0 | The paper focuses on the discovery of novel CAR agonists and does not report any pharmacodynamic or exposure-response data for obeticholic acid. |
| popPK | Murphy_2024 | irrelevant | 0 | 0 | The study is a mechanistic analysis of bile acid transporter localization in liver biopsies and does not report pharmacokinetic parameters for obeticholic acid. |
| PD | Murphy_2024 | not_relevant | 0 | 0 | The paper analyzes zonal distribution and membrane localization of bile acid transporters in NAFLD liver biopsies using immunohistochemistry and Bayesian regression; it does not report any pharmacodynamic or exposure-response relationship for obeticholic acid. |
| popPK | Narayanan_2024 | irrelevant | 2 | 0 | The paper is a review article discussing the pharmacokinetics of obeticholic acid, but the provided evidence contains no quantitative PK parameter values (CL, V, etc.). |
| popPK | Nørgaard_2024 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of drug-drug interactions using obeticholic acid as a comparator small molecule, not a pharmacokinetic study reporting disposition parameters. |
| PD | Nørgaard_2024 | not_relevant | 1 | 0 | The paper is an in vitro DDI study using hepatocyte models; it mentions obeticholic acid only as a test compound for CYP regulation and explicitly states that EC50 determinations are needed, implying no numeric PD parameters are reported. |
| PGx | Nørgaard_2024 | not_relevant | 0 | 0 | The paper evaluates in vitro drug-drug interaction systems for peptides and mentions obeticholic acid only as a small molecule control, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Odanga_2025 | not_relevant | 0 | 0 | The study investigates the effects of obeticholic acid on primary human hepatocytes in vitro but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Ooi_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of elafibranor and its metabolite GFT1007, not obeticholic acid. |
| popPK | Palanisamy_2023 | irrelevant | 0 | 0 | The study is an in vitro/in silico investigation of Nigella sativa extracts, and obeticholic acid is only mentioned as a phytocompound with docking scores, not as a subject of PK analysis. |
| PD | Palanisamy_2023 | not_relevant | 0 | 0 | The paper mentions obeticholic acid only in the context of in silico molecular docking scores, with no in vivo or in vitro pharmacodynamic or exposure-response data. |
| popPK | Pellicciari_2002 | irrelevant | 0 | 0 | The paper focuses on the synthesis and pharmacological activity of 6-ECDCA, not the pharmacokinetics of obeticholic acid. |
| PD | Pellicciari_2002 | not_relevant | 3 | 2 | The paper reports an in vitro EC50 for a different compound (6-ECDCA) and qualitative in vivo activity, but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters for obeticholic acid. |
| PGx | Ramos_2020 | not_relevant | 2 | 5 | The paper investigates the mechanism of action of obeticholic acid on FXR isoforms and metabolic outcomes (PD), but does not report a pharmacogenomic effect of a specific gene variant on a standard PK or PD parameter of the drug itself. |
| popPK | Rizzo_2005 | irrelevant | 0 | 0 | The paper is a review of FXR signaling and bile acid homeostasis, focusing on CDCA and 6-ECDCA, with no pharmacokinetic data for obeticholic acid. |
| PD | Rizzo_2005 | not_relevant | 1 | 0 | The text is a review discussing FXR biology and mentions in vitro EC50 values for CDCA and 6-ECDCA, but it does not report any pharmacodynamic or exposure-response data for obeticholic acid. |
| popPK | Roda_2017 | irrelevant | 4 | 2 | The study reports tissue concentrations and biliary secretion rates in rats but does not provide standard compartmental PK parameters (CL, V, ka) or a population PK model for obeticholic acid. |
| popPK | Saito_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of obeticholic acid's effect on ammonium metabolism in hepatocyte-like cells, not a pharmacokinetic study reporting disposition parameters for the drug itself. |
| popPK | Schramm_2022 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of tropifexor, not obeticholic acid, which is only mentioned as a comparator. |
| popPK | Simaremare_2019 | irrelevant | 0 | 0 | The study investigates organophosphate and pyrethroid insecticides in pregnant women and does not involve obeticholic acid. |
| PD | Simaremare_2019 | not_relevant | 0 | 0 | The paper studies insecticide exposure in pregnant women and does not mention obeticholic acid or any pharmacodynamic relationship. |
| popPK | Stefela_2020 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamics and metabolism of an OCA derivative (3β-isoOCA) in mice, and while it mentions PK studies, no quantitative PK parameters (CL, V, etc.) for obeticholic acid itself are provided in the evidence. |
| popPK | Stefela_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on a new FXR antagonist (7-ELCA) where obeticholic acid is used only as a reference agonist, and no pharmacokinetic parameters for obeticholic acid are reported. |
| popPK | Tølbøl_2018 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of obeticholic acid in mouse models of NASH and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Tølbøl_2018 | not_relevant | 2 | 1 | The study is a single-dose efficacy trial in mice comparing histological endpoints; it does not report plasma concentrations, PK data, or a dose-response curve, making it impossible to derive numeric PD parameters like Emax or EC50. |
| popPK | Valluri_2021 | irrelevant | 2 | 0 | The paper describes a bioanalytical method and mentions a PK study application, but no quantitative pharmacokinetic parameter values (CL, V, t1/2, etc.) are provided in the evidence. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study focuses on the design and therapeutic efficacy of a nanodelivery system for obeticholic acid in liver fibrosis, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for the drug. |
| PGx | Weber_2021 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of obeticholic acid on UGT1A1 induction and bilirubin levels in mice, but does not report a pharmacogenomic effect (gene variant changing PK/PD) of the drug itself. |
| popPK | Wilcox_2014 | irrelevant | 0 | 0 | This is a systematic review of clinical management for bile acid malabsorption that mentions obeticholic acid only as a therapeutic agent with promising results, without reporting any quantitative pharmacokinetic parameters. |
| popPK | Xin_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of caffeine and EGCG in NASH mice where obeticholic acid is used only as a positive control, and no pharmacokinetic parameters are reported. |
| PD | Xin_2021 | not_relevant | 0 | 0 | The paper is a comparative study of caffeine and EGCG in a mouse model, using obeticholic acid only as a single-dose positive control without any exposure-response modeling, concentration measurements, or derivation of PD parameters for OCA. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new dual modulator (compound 10) and uses obeticholic acid only as a comparator in an efficacy study, without reporting any pharmacokinetic parameters for obeticholic acid. |
| PD | Xu_2026 | not_relevant | 1 | 0 | The paper focuses on the discovery of a new compound (10) and only qualitatively compares its efficacy to obeticholic acid without providing any numeric PD parameters or exposure-response data for obeticholic acid. |
| popPK | Yao_2026 | irrelevant | 0 | 0 | The paper is a bioinformatics study on HCV cirrhosis gene signatures and molecular docking; it does not report pharmacokinetic parameters for obeticholic acid. |
| popPK | Zanella_2023 | irrelevant | 0 | 0 | The study investigates the behavioral and neurochemical effects of obeticholic acid on cocaine reinstatement in mice, not its pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Zeng_2017 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of Schisandrol B, not the pharmacogenomics of obeticholic acid. |
| popPK | Zhang_2013 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of FGF19 gene expression in human ileal explants, not a pharmacokinetic study of obeticholic acid. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The study focuses on the mechanism of isoniazid-induced liver injury and FXR inhibition, using obeticholic acid only as a co-administered FXR agonist without reporting any pharmacokinetic parameters for it. |
| PD | Zhang_2020 | not_relevant | 1 | 0 | The paper reports an IC50 for a different compound (PIH) and uses obeticholic acid only as a qualitative positive control without providing dose-response data or numeric PD parameters for OCA. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of XZP-5610, not obeticholic acid. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper focuses exclusively on PK prediction (allometric scaling and PBPK) and dose selection for XZP-5610, reporting no pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new FXR partial agonist (V15) and uses obeticholic acid only as a comparator for efficacy, without reporting any pharmacokinetic parameters for obeticholic acid. |
| PD | Zhang_2026 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, efficacy) for a novel compound (V15), not for obeticholic acid, which is only used as a reference standard. |
| popPK | Zheng_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the discovery of a new FXR agonist, using obeticholic acid only as a reference compound for activity comparison, and does not report any pharmacokinetic parameters for obeticholic acid. |
| PD | Zheng_2026 | not_relevant | 2 | 2 | The paper reports in vitro receptor binding EC50 values and qualitative in vivo efficacy comparisons, but does not provide an exposure-response or dose-response analysis with numeric PD parameters (e.g., Emax, EC50 in vivo, slope) for obeticholic acid. |
| PGx | Zhou_2019 | not_relevant | 0 | 0 | The paper investigates metabolic pathways and transporter interactions in vitro but does not report any genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Zhou_2022 | irrelevant | 0 | 0 | The paper focuses on the discovery of a new drug (ZLY18) and uses obeticholic acid only as a comparator for efficacy, without reporting any pharmacokinetic parameters for obeticholic acid. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper is a case report describing the clinical management of a patient with PSC and specific mutations, but it does not report any pharmacokinetic or pharmacodynamic parameters of obeticholic acid or how the genetic variants affect the drug's behavior. |
| PGx | Zhou_2026 | not_relevant | 0 | 0 | The study investigates the synergistic pharmacodynamic effects of obeticholic acid and sulforaphane in a rat model of cholestatic liver injury, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 32 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The provided text is only a title/header for a conference session and contains no data, results, or PD parameters for obeticholic acid. |
| PGx | van_2021 | not_relevant | 0 | 0 | The paper investigates the therapeutic efficacy of obeticholic acid in animal models of hyperbilirubinemia, not the effect of human gene variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Ðanić_2018 | irrelevant | 0 | 0 | The paper is a review of bile acid pharmacology and metabolic syndrome mechanisms, not a pharmacokinetic study reporting quantitative disposition parameters for obeticholic acid. |
| PD | Ðanić_2018 | not_relevant | 1 | 0 | The text is a review article discussing the general pharmacology of bile acids and metabolic syndrome, containing no specific PK/PD modeling, exposure-response analysis, or numeric PD parameters for obeticholic acid. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
