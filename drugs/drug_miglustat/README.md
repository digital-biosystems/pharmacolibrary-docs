<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;miglustat&quot;}]"></div>

# miglustat

- **generic name:** miglustat
- **ATC codes:** `A16AX06`
- **DrugBank:** [DB00419](https://go.drugbank.com/drugs/DB00419) · **PubChem:** [CID 51634](https://pubchem.ncbi.nlm.nih.gov/compound/51634)
- **molar mass:** 219.278 g/mol (C10H21NO4) — DrugBank
- **groups:** approved, investigational

## About

Miglustat is a medicine used to treat Gaucher's disease and, in the European Union, is also authorised for Niemann-Pick diseases and glycogen storage disease type II. It is authorised in the European Union and is an approved drug, though it is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425911](https://www.wikidata.org/wiki/Q425911) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:32 | 0:50 | 0/0/0 | 0/0/0 | 0/0/0 | 73,543/2,595 | einfracz / qwen3.8-27b | 8 | 1/13 | 7/1 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=miglustat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: UGCG (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 110 matched, 61 returned
- **screened:** 4  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Treiber_2007.pdf` | Treiber A et al., The pharmacokinetics and tissue distrib…, Xenobiotica; the fate of fo… (2007) | popPK | 9 | [10.1080/00498250601094543](https://doi.org/10.1080/00498250601094543) | [17624027](https://pubmed.ncbi.nlm.nih.gov/17624027) | The study describes miglustat pharmacokinetics in rats and reports qualitative parameters like bioavailability and clearance mechanisms, but specific numeric values for CL, V, or ka are not present in the provided text. |
| `Maegawa_2009.pdf` | Maegawa GH et al., Pharmacokinetics, safety and tolerabili…, Molecular genetics and meta… (2009) | popPK | 6 | [10.1016/j.ymgme.2009.04.013](https://doi.org/10.1016/j.ymgme.2009.04.013) | [19447653](https://pubmed.ncbi.nlm.nih.gov/19447653) | The abstract reports qualitative model structure (2-compartmental) and semi-quantitative metrics (Tmax, T1/2, accumulation index) but lacks specific numeric values for clearance (CL) and volume (V) required for full PK characterization. |
| `Pollock_2008.pdf` | Pollock S et al., N-Butyldeoxynojirimycin is a broadly ef…, AIDS (London, England) (2008) | pd | 4 | [10.1097/QAD.0b013e32830efd96](https://doi.org/10.1097/QAD.0b013e32830efd96) | [18753929](https://www.ncbi.nlm.nih.gov/pubmed/18753929) | metadata signals extractable PD data (IC50) |
| `Almeida-Calpe_2021.pdf` | Almeida-Calpe A et al., Metabolizing profile of the cytochrome…, Chemico-biological interact… (2021) | pgx | 5 | [10.1016/j.cbi.2021.109527](https://doi.org/10.1016/j.cbi.2021.109527) | [34058179](https://www.ncbi.nlm.nih.gov/pubmed/34058179) | metadata signals extractable PGX data (CYP2D6) |
| `Belmatoug_2017.pdf` | Belmatoug N et al., Management and monitoring recommendatio…, European journal of interna… (2017) | pgx | 5 | [10.1016/j.ejim.2016.07.011](https://doi.org/10.1016/j.ejim.2016.07.011) | [27522145](https://www.ncbi.nlm.nih.gov/pubmed/27522145) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-15T03:31:53.317509+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abian_2011 | not_relevant | 0 | 0 | The paper investigates the biophysical properties of miglustat as a chaperone and the stability of enzyme replacement therapies, but does not report on how genetic variants influence the pharmacokinetics or pharmacodynamics of miglustat in patients. |
| popPK | Aguilar_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study comparing synthetic peptides to miglustat, reporting no pharmacokinetic parameters. |
| PD | Aguilar_2014 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for analogs and compares them to miglustat, but does not provide a quantitative exposure-response or dose-response curve with derivable PD parameters (like Emax or slope) for miglustat itself. |
| PGx | Alfonso_2005 | not_relevant | 3 | 8 | The study examines genotype-specific effects on enzyme activity (cellular PD target) in vitro, but does not report pharmacokinetic (PK) or clinical pharmacodynamic (PD) parameters (e.g., drug levels, clinical outcomes) in humans. |
| PGx | Almeida-Calpe_2021 | not_relevant | 0 | 0 | The study focuses on metabolizer profiles for eliglustat and general drug interactions, mentioning miglustat only as a background therapy without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Alonzi_2008 | irrelevant | 0 | 0 | The study focuses on biomarkers (free oligosaccharides) for ER alpha-glucosidase inhibition and does not report pharmacokinetic parameters (CL, V, ka, etc.) for miglustat. |
| PGx | Amartino_2023 | not_relevant | 0 | 0 | The paper is a clinical consensus guideline on NPC diagnosis and treatment and does not report pharmacogenomic data regarding miglustat PK or PD parameters. |
| popPK | Anding_2023 | irrelevant | 0 | 0 | The study investigates the effect of miglustat on enzyme stability and efficacy in a disease model, not the pharmacokinetic parameters of miglustat itself. |
| PGx | Belmatoug_2017 | not_relevant | 0 | 0 | The paper focuses on the management and monitoring of eliglustat and its CYP2D6 pharmacogenomics, not miglustat. |
| popPK | Butt_2026 | irrelevant | 0 | 0 | Miglustat is used only as a reference standard for β-glucosidase inhibition (IC50), and the pharmacokinetic data provided is for the novel cholic acid derivatives, not miglustat. |
| PD | Butt_2026 | not_relevant | 0 | 0 | The paper studies cholic acid-based hydrazone conjugates; miglustat is only mentioned as a standard comparator for beta-glucosidase inhibition, and no PD or exposure-response relationship for miglustat is reported. |
| popPK | Byrne_2024 | irrelevant | 1 | 1 | The study focuses on the pharmacokinetics of the enzyme replacement therapy cipaglucosidase alfa, with miglustat acting only as a co-administered stabilizer whose own PK parameters (CL, V, etc.) are not modeled or reported as the subject. |
| popPK | Byrne_2024_2 | irrelevant | 2 | 0 | The study focuses on the long-term safety and efficacy of the combination therapy in Pompe disease patients, and no quantitative pharmacokinetic parameter values (CL, V, etc.) for miglustat are reported in the provided evidence. |
| PD | Byrne_2024_2 | not_relevant | 2 | 1 | The paper reports descriptive changes in biomarkers (CK, Hex4) and efficacy endpoints over time but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for miglustat. |
| popPK | Casazza_2025 | irrelevant | 0 | 0 | The paper is a review on biomarkers for Niemann-Pick Type C1 disease and does not report any pharmacokinetic parameters for miglustat. |
| PD | Casazza_2025 | not_relevant | 0 | 0 | The text is a review of biomarkers for NPC1 and mentions miglustat only as an approved therapy, without reporting any pharmacodynamic, exposure-response, or dose-response data or numeric parameters. |
| PGx | Darling_2021 | not_relevant | 0 | 0 | The paper describes a case report of Gaucher disease treatment and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of miglustat. |
| popPK | Esposito_2020 | irrelevant | 0 | 0 | The paper is a review of iminosugars in cystic fibrosis and does not report pharmacokinetic parameters for miglustat. |
| PD | Esposito_2020 | not_relevant | 1 | 0 | The text is a review of iminosugars in cystic fibrosis and does not contain specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for miglustat. |
| popPK | Gamberucci_2006 | irrelevant | 0 | 0 | The paper investigates the effect of green tea flavonols on glucosidase II activity in rat liver microsomes and does not involve miglustat or report any pharmacokinetic parameters. |
| PD | Gamberucci_2006 | not_relevant | 0 | 0 | The paper investigates the effect of green tea flavonols on glucosidase II, not miglustat. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The study focuses on an Elovl1 inhibitor in a mouse model of adrenoleukodystrophy and does not involve miglustat or its pharmacokinetics. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper discusses an Elovl1 inhibitor in a mouse model, not miglustat, and does not report any exposure-response or dose-response analysis with numeric PD parameters. |
| PGx | Jamrozik_2013 | not_relevant | 0 | 0 | The paper is a case report of a patient with Niemann-Pick disease C who responded to miglustat, but it does not investigate how specific pharmacogenetic variants (like CYP2D6) affect the pharmacokinetics or pharmacodynamics of miglustat. |
| popPK | Johnson_2024 | irrelevant | 0 | 0 | The study investigates migalastat (a chaperone therapy for Fabry disease), not miglustat. |
| PD | Johnson_2024 | not_relevant | 3 | 1 | The paper focuses on PK and PBPK modeling to select dose regimens based on time above EC50, but does not report a PD model or provide the numeric value for the EC50 or other PD parameters. |
| popPK | Lachmann_2001 | irrelevant | 0 | 0 | The paper is a review of substrate reduction therapy using NB-DNJ (miglustat) and does not report quantitative pharmacokinetic parameters such as clearance or volume. |
| PD | Lachmann_2001 | not_relevant | 1 | 0 | The text is a review of substrate reduction therapy and NB-DNJ (miglustat) that discusses mechanisms and clinical proof-of-principle but does not report specific numeric PD parameters or exposure-response curves. |
| popPK | Le_2014 | irrelevant | 0 | 0 | The study investigates the efficacy of miglustat on bone pathology in cystic fibrosis mice but does not report pharmacokinetic parameters (CL, V, etc.) or population-PK modeling. |
| popPK | Lee_2012 | irrelevant | 0 | 0 | The paper is a mechanistic study on iminosugar analogues as enzyme inhibitors and does not involve miglustat or report any pharmacokinetic parameters. |
| PD | Lee_2012 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data (IC50) for iminosugar analogues, not pharmacodynamic or exposure-response relationships for miglustat in vivo. |
| popPK | Lipiński_2026 | irrelevant | 0 | 0 | The paper is a narrative review of clinical evidence and biological rationale for miglustat in lysosomal storage disorders, containing no original quantitative pharmacokinetic parameter values. |
| PD | Lipiński_2026 | not_relevant | 1 | 0 | The text is a narrative review summarizing clinical evidence and biological rationale without reporting specific numeric pharmacodynamic parameters or exposure-response models. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on cardiac fibrosis and does not report any pharmacokinetic parameters for miglustat. |
| PD | Liu_2025 | not_relevant | 2 | 1 | The paper reports qualitative dose-response effects (e.g., 100 vs 200 μM) and mechanistic pathways but does not provide numeric PD parameters (Emax, EC50) or a fitted concentration-effect curve. |
| PGx | Machaczka_2012 | not_relevant | 0 | 0 | The study describes clinical outcomes and adverse events of miglustat therapy without analyzing the impact of GBA1 genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Maegawa_2009 | relevant | 6 | 2 | The abstract reports qualitative model structure (2-compartmental) and semi-quantitative metrics (Tmax, T1/2, accumulation index) but lacks specific numeric values for clearance (CL) and volume (V) required for full PK characterization. |
| popPK | Marshall_2010 | irrelevant | 0 | 0 | The study is a pharmacodynamic efficacy trial in a mouse model using a different substrate reduction therapy (Genz-112638) and ERT, with no pharmacokinetic parameter extraction for miglustat. |
| PD | Marshall_2010 | not_relevant | 1 | 0 | The paper describes a qualitative comparison of therapeutic efficacy in a mouse model using a different substrate reduction therapy (Genz-112638) rather than miglustat, and does not provide numeric PD parameters or exposure-response data for miglustat. |
| popPK | Mendelsohn_2026 | irrelevant | 0 | 0 | The study is a clinical outcomes analysis of enzyme replacement therapy in Pompe disease, and miglustat is only a co-administered pharmacological chaperone without any pharmacokinetic parameters reported. |
| popPK | Mengel_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetics for the subject drug arimoclomol, while miglustat is only mentioned as a concomitant standard-of-care medication. |
| popPK | Platt_1994 | irrelevant | 0 | 0 | The paper focuses on the in-vitro mechanism of action of N-butyldeoxynojirimycin (miglustat) as a biosynthesis inhibitor and does not report any pharmacokinetic parameters. |
| PD | Platt_1994 | not_relevant | 0 | 0 | The paper describes the mechanism of action and qualitative inhibition of glycolipid biosynthesis by N-butyldeoxynojirimycin (miglustat) in an in vitro model, but it does not report any quantitative exposure-response or dose-response analysis with numeric PD parameters (e.g., IC50, Emax). |
| popPK | Platt_1997 | irrelevant | 0 | 0 | The study focuses on N-butyldeoxynojirimycin, not miglustat, and reports biological effects rather than pharmacokinetic parameters. |
| PD | Platt_1997 | not_relevant | 0 | 0 | The paper studies N-butyldeoxynojirimycin, not miglustat, and reports only qualitative/percentage depletion without numeric PD parameters or exposure-response modeling. |
| popPK | Pollock_2008 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy of N-Butyldeoxynojirimycin (NB-DNJ) in vitro, not the pharmacokinetics of miglustat. |
| PD | Pollock_2008 | not_relevant | 0 | 0 | The paper reports pharmacodynamic data for N-Butyldeoxynojirimycin (NB-DNJ), not miglustat. |
| popPK | Ranes_2001 | irrelevant | 0 | 0 | The study investigates the anti-tumor effects of N-butyldeoxynojirimycin (miglustat) in mice and does not report pharmacokinetic parameters. |
| PD | Ranes_2001 | not_relevant | 0 | 0 | The paper studies N-butyldeoxynojirimycin (NB-DNJ), not miglustat, and reports only qualitative/percentage effects without a formal PD model or derivable numeric PD parameters for the target drug. |
| popPK | Remenova_2015 | relevant | 3 | 2 | The study measures steady-state PK parameters (AUC, Cmax) for miglustat in humans, but the full text only contains qualitative conclusions and a fragment of a reference; the specific numeric PK values are not present in the provided evidence (likely in a missing Table 4 or Figure). |
| popPK | Roberts_2025 | irrelevant | 0 | 0 | The paper is an indirect treatment comparison of efficacy outcomes (respiratory/mobility) and does not report pharmacokinetic parameters for miglustat. |
| PD | Roberts_2025 | not_relevant | 0 | 0 | The paper is an indirect treatment comparison of clinical efficacy outcomes (FVC, 6MWT) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for miglustat. |
| PGx | Schoser_2021 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy and safety of a drug regimen, not a pharmacogenomic study investigating the impact of genetic variants on the PK or PD parameters of miglustat. |
| popPK | Schoser_2026 | irrelevant | 0 | 0 | The paper is a clinical consensus statement on treatment monitoring for Pompe disease, reporting clinical outcomes (FVC, 6MWT) for enzyme replacement therapies, and does not contain pharmacokinetic parameters for miglustat. |
| PGx | Schoser_2026 | not_relevant | 0 | 0 | The paper is a position statement regarding clinical monitoring thresholds for enzyme replacement therapy in Pompe disease and does not report any gene variants, pharmacogenomic effects, or pharmacokinetic (PK) changes for miglustat. |
| popPK | Shunnarah_2021 | irrelevant | 0 | 0 | The paper is a systematic review of natural products for male contraception and does not report pharmacokinetic parameters for miglustat. |
| PD | Shunnarah_2021 | not_relevant | 0 | 0 | The paper is a systematic review of natural products for male contraception and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for miglustat. |
| PGx | Sperb-Ludwig_2023 | not_relevant | 0 | 0 | The paper reports an in vitro pharmacodynamic effect of miglustat on heparan sulfate levels in mucolipidosis III fibroblasts, but does not report any pharmacogenomic effect (e.g., gene variant impacting drug PK/PD). |
| popPK | Steiner_2026 | irrelevant | 0 | 0 | The study focuses on the mechanism of action and efficacy of Sinbaglustat in mice, not the pharmacokinetics of miglustat. |
| popPK | Svensson_2003 | irrelevant | 0 | 0 | The study focuses on the antimicrobial mechanism of NB-DNJ (a different drug) in urinary tract infections and does not report pharmacokinetic parameters for miglustat. |
| PD | Svensson_2003 | not_relevant | 0 | 0 | The paper studies NB-DNJ (not miglustat) and provides only qualitative dose-dependent observations without numeric PD parameters. |
| PGx | Tallaksen_2009 | not_relevant | 0 | 0 | The paper is a clinical case report on efficacy and safety in Sandhoff disease, providing no data on genetic variants affecting the pharmacokinetics or pharmacodynamics of miglustat. |
| popPK | Taylor_1991 | irrelevant | 0 | 0 | The paper studies the antiviral activity of MDL 28,574 (a castanospermine derivative) in vitro and does not involve miglustat or report any pharmacokinetic parameters. |
| PD | Taylor_1991 | not_relevant | 0 | 0 | The paper studies MDL 28,574 (a castanospermine derivative), not miglustat, and reports in vitro IC50 values for an unrelated compound. |
| PGx | Torralba-Cabeza_2022 | not_relevant | 1 | 0 | The paper is a general treatment guideline comparing miglustat and eliglustat, and while it mentions CYP2D6 phenotype, it only applies this requirement to eliglustat, not miglustat, and provides no pharmacokinetic data for miglustat. |
| popPK | Treiber_2007 | relevant | 9 | 3 | The study describes miglustat pharmacokinetics in rats and reports qualitative parameters like bioavailability and clearance mechanisms, but specific numeric values for CL, V, or ka are not present in the provided text. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper is a review of 1-deoxynojirimycin and its derivatives, focusing on general bioactivities and applications, without providing specific quantitative PK parameter values for miglustat in the evidence. |
| popPK | Wolthuis_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of eliglustat, not miglustat. |
| PD | Wolthuis_2025 | not_relevant | 0 | 0 | The paper focuses on PK modeling (PopPK and PBPK) to determine dosing regimens that achieve predefined exposure targets (Cavg/Cmax) for safety and efficacy, but it does not report a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Woodhouse_2008 | irrelevant | 0 | 0 | The study is an in-vitro virology experiment using iminosugars (including N-butyl-deoxynojirimycin, a compound related to miglustat) to treat bovine viral diarrhea virus, and does not report pharmacokinetic parameters for miglustat. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on astrocyte polarization in subarachnoid hemorrhage where miglustat is used as a therapeutic agent, not a pharmacokinetic study reporting disposition parameters. |
| PD | Wu_2025 | not_relevant | 0 | 0 | The paper reports qualitative effects of miglustat on neurological scores and inflammation in a mouse model but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| PGx | Xiang_2026 | not_relevant | 0 | 0 | The paper is a case report on diagnostic misdiagnosis of NPC as Wilson disease and does not report any pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of miglustat. |
| popPK | Yue_2019 | irrelevant | 0 | 0 | The paper is a narrative review of substrate reduction therapy and does not report any quantitative pharmacokinetic parameters for miglustat. |
| PD | Yue_2019 | not_relevant | 1 | 0 | The text is a general review of substrate reduction therapy for inborn errors of metabolism and does not contain specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for miglustat. |
| popPK | Zamoner_2019 | irrelevant | 0 | 0 | The paper is a mechanistic/in-vitro study on glucosidase inhibition (IC50 values) and does not report pharmacokinetic parameters for miglustat. |
| PD | Zamoner_2019 | not_relevant | 2 | 2 | The paper reports in vitro enzyme inhibition IC50 values for miglustat and analogues, which are pharmacological potency metrics, but does not report in vivo pharmacodynamic (exposure-response) or dose-response relationships with numeric PD parameters (e.g., Emax, EC50 in a biological system). |
| popPK | van_2007 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| PGx | van_2008 | not_relevant | 0 | 0 | The paper discusses the compound NB-DNJ (a precursor/analogue of miglustat) in mice and its genetic influence on spermatogenesis, not the pharmacokinetics or pharmacodynamics of miglustat itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
