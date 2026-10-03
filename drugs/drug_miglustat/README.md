<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;miglustat&quot;}]"></div>

# miglustat

- **generic name:** miglustat
- **ATC codes:** `A16AX06`
- **DrugBank:** [DB00419](https://go.drugbank.com/drugs/DB00419) · **PubChem:** [CID 51634](https://pubchem.ncbi.nlm.nih.gov/compound/51634)
- **molar mass:** 219.278 g/mol (C10H21NO4) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Miglustat, commonly marketed under the trade name Zavesca, is a drug used to treat Gaucher disease. It inhibits the enzyme glucosylceramide synthase, an essential enzyme for the synthesis of most glycosphingolipids. It is only used for patients who cannot be treated with enzyme replacement therapy with imiglucerase. Miglustat is now the first and only approved therapy for patients with Niemann-Pick disease type C (NP-C). It has recently been approved for treatment of progressive neurological symptoms in adult and pediatric patients in the European Union, Brazil, and South Korea. Miglustat was first developed as an anti-HIV agent in the 1990s. However, clinical experience with miglustat showed that therapeutic levels of the drug could not be achieved in patients without a high incidence of adverse effect.

**Indication.** For the treatment of adult patients with mild to moderate type 1 (nonneuropathic) Gaucher's disease for whom enzyme replacement therapy is not a therapeutic option (e.g. due to constraints such as allergy, hypersensitivity, or poor venous access). Now approved in some countries for the treatment of progressive neurological symptoms in adult and pediatric patients with Niemann-Pick disease type C (NP-C).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 03:00 | 3:03 | 0/0/0 | 0/0/0 | 0/0/0 | 10,708/819 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 1/12 | 6/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=miglustat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: UGCG (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 110 matched, 61 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Maegawa_2009.pdf` | Maegawa GH et al., Pharmacokinetics, safety and tolerabili…, Molecular genetics and meta… (2009) | popPK | 8 | [10.1016/j.ymgme.2009.04.013](https://doi.org/10.1016/j.ymgme.2009.04.013) | [19447653](https://pubmed.ncbi.nlm.nih.gov/19447653) | The paper reports a compartmental model and some PK parameters (Tmax, t1/2, accumulation index) for miglustat, but lacks specific numeric values for clearance, volume, or intercompartmental clearance. |
| `Treiber_2007.pdf` | Treiber A et al., The pharmacokinetics and tissue distrib…, Xenobiotica; the fate of fo… (2007) | popPK | 8 | [10.1080/00498250601094543](https://doi.org/10.1080/00498250601094543) | [17624027](https://pubmed.ncbi.nlm.nih.gov/17624027) | The paper is a pharmacokinetic study of miglustat in rats reporting qualitative disposition and bioavailability, but specific quantitative parameters like clearance (CL) or volume (V) are not present in the provided text. |
| `van_2007.pdf` | van Giersbergen PL et al., Influence of food intake on the pharmac…, Journal of clinical pharmac… (2007) | popPK | 8 | [10.1177/0091270007305298](https://doi.org/10.1177/0091270007305298) | [17720777](https://pubmed.ncbi.nlm.nih.gov/17720777) | The study reports quantitative PK parameters (Cmax, AUC, tmax, half-life) for miglustat, but lacks specific clearance (CL) or volume (V) values required for full compartmental modeling. |
| `Pollock_2008.pdf` | Pollock S et al., N-Butyldeoxynojirimycin is a broadly ef…, AIDS (London, England) (2008) | pd | 4 | [10.1097/QAD.0b013e32830efd96](https://doi.org/10.1097/QAD.0b013e32830efd96) | [18753929](https://www.ncbi.nlm.nih.gov/pubmed/18753929) | metadata signals extractable PD data (IC50) |
| `Almeida-Calpe_2021.pdf` | Almeida-Calpe A et al., Metabolizing profile of the cytochrome…, Chemico-biological interact… (2021) | pgx | 5 | [10.1016/j.cbi.2021.109527](https://doi.org/10.1016/j.cbi.2021.109527) | [34058179](https://www.ncbi.nlm.nih.gov/pubmed/34058179) | metadata signals extractable PGX data (CYP2D6) |
| `Belmatoug_2017.pdf` | Belmatoug N et al., Management and monitoring recommendatio…, European journal of interna… (2017) | pgx | 5 | [10.1016/j.ejim.2016.07.011](https://doi.org/10.1016/j.ejim.2016.07.011) | [27522145](https://www.ncbi.nlm.nih.gov/pubmed/27522145) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-30T03:00:55.954174+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abian_2011 | not_relevant | 0 | 0 | The paper investigates the biophysical interaction of miglustat with glucocerebrosidase enzymes (stability/binding) but does not report pharmacogenomic effects on PK or PD parameters in patients. |
| popPK | Aguilar_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study comparing synthetic peptides to miglustat, reporting no pharmacokinetic parameters. |
| PD | Aguilar_2014 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for analogs and compares them to miglustat, but does not provide a quantitative exposure-response or dose-response curve with derivable PD parameters (like Emax or slope) for miglustat itself. |
| PGx | Alfonso_2005 | not_relevant | 0 | 0 | The paper reports in vitro enzyme activity changes (PD mechanism) for specific GBA mutations, but does not report pharmacokinetic parameters or clinical pharmacodynamic endpoints in humans. |
| PGx | Almeida-Calpe_2021 | not_relevant | 0 | 0 | The study focuses on the pharmacogenomics of eliglustat (CYP2D6/3A4/ABCB1) and only mentions miglustat as a background therapy without analyzing its PK/PD parameters. |
| popPK | Alonzi_2008 | irrelevant | 0 | 0 | The paper focuses on biomarkers of enzyme inhibition (free oligosaccharides) and does not report pharmacokinetic parameters for miglustat. |
| PGx | Amartino_2023 | not_relevant | 0 | 0 | The paper is a clinical consensus on the diagnosis and treatment of Niemann-Pick Disease Type C and does not report pharmacogenomic studies or genotype-specific PK/PD data for miglustat. |
| popPK | Anding_2023 | irrelevant | 0 | 0 | The study focuses on the efficacy of enzyme replacement therapy in Pompe mice with miglustat as a co-administered agent, and does not report pharmacokinetic parameters for miglustat. |
| PGx | Belmatoug_2017 | not_relevant | 0 | 0 | The paper focuses on management recommendations for eliglustat, not miglustat, and does not report pharmacogenomic effects on miglustat PK/PD parameters. |
| popPK | Butt_2026 | irrelevant | 0 | 0 | The study focuses on cholic acid-based hydrazone conjugates, and miglustat is only used as an in-vitro comparator for enzyme inhibition, with no PK parameters reported for miglustat. |
| PD | Butt_2026 | not_relevant | 0 | 0 | The paper studies cholic acid-based hydrazone conjugates; miglustat is only mentioned as a standard comparator for beta-glucosidase inhibition, and no PD or exposure-response relationship for miglustat is reported. |
| popPK | Byrne_2024 | irrelevant | 1 | 0 | The paper focuses on the pharmacokinetics of cipaglucosidase alfa (an enzyme replacement therapy), with miglustat serving only as a co-administered stabilizer; no quantitative PK parameters (CL, V, ka) for miglustat itself are reported. |
| popPK | Byrne_2024_2 | irrelevant | 2 | 0 | The study focuses on cipaglucosidase alfa, with miglustat serving as an adjunctive enzyme stabilizer rather than the subject drug, and specific PK parameters for miglustat are not reported in the provided text. |
| PD | Byrne_2024_2 | not_relevant | 2 | 1 | The paper reports descriptive changes in biomarkers (CK, Hex4) and efficacy endpoints over time but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for miglustat. |
| popPK | Casazza_2025 | irrelevant | 0 | 0 | The paper is a review on biomarkers for Niemann-Pick Type C1 disease and does not report any pharmacokinetic parameters for miglustat. |
| PD | Casazza_2025 | not_relevant | 0 | 0 | The text is a review of biomarkers for NPC1 and mentions miglustat only as an approved therapy, without reporting any pharmacodynamic, exposure-response, or dose-response data or numeric parameters. |
| PGx | Darling_2021 | not_relevant | 0 | 0 | The paper describes a clinical case of Gaucher disease and its response to levodopa, but does not report any pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of miglustat. |
| popPK | Esposito_2020 | irrelevant | 0 | 0 | The paper is a review of iminosugars in cystic fibrosis and does not report pharmacokinetic parameters for miglustat. |
| PD | Esposito_2020 | not_relevant | 1 | 0 | The text is a review of iminosugars in cystic fibrosis and does not contain specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for miglustat. |
| popPK | Gamberucci_2006 | irrelevant | 0 | 0 | The paper investigates the effect of green tea flavonols on glucosidase II activity in rat liver microsomes and does not involve miglustat or report any pharmacokinetic parameters. |
| PD | Gamberucci_2006 | not_relevant | 0 | 0 | The paper investigates the effect of green tea flavonols on glucosidase II, not miglustat. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper studies an Elovl1 inhibitor in a mouse model of adrenoleukodystrophy and does not involve miglustat or report any pharmacokinetic parameters. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper discusses an Elovl1 inhibitor in a mouse model, not miglustat, and does not report any exposure-response or dose-response analysis with numeric PD parameters. |
| PGx | Jamrozik_2013 | not_relevant | 0 | 0 | The paper is a case report describing the clinical response to miglustat in a patient with specific NPC1 mutations, but it does not report pharmacokinetic or pharmacodynamic parameters or a pharmacogenomic effect on drug metabolism. |
| popPK | Johnson_2024 | irrelevant | 0 | 0 | The study investigates migalastat, not miglustat. |
| PD | Johnson_2024 | not_relevant | 3 | 1 | The paper focuses on PK and PBPK modeling to select dose regimens based on time above EC50, but does not report a PD model or provide the numeric value for the EC50 or other PD parameters. |
| popPK | Lachmann_2001 | irrelevant | 0 | 0 | The paper is a review of substrate reduction therapy using NB-DNJ (miglustat) and does not report quantitative pharmacokinetic parameters such as clearance or volume. |
| PD | Lachmann_2001 | not_relevant | 1 | 0 | The text is a review of substrate reduction therapy and NB-DNJ (miglustat) that discusses mechanisms and clinical proof-of-principle but does not report specific numeric PD parameters or exposure-response curves. |
| popPK | Le_2014 | irrelevant | 0 | 0 | The study investigates the therapeutic effect of miglustat on bone pathology in cystic fibrosis mice and does not report any pharmacokinetic parameters. |
| popPK | Lee_2012 | irrelevant | 0 | 0 | The paper is a mechanistic study on iminosugar analogues as enzyme inhibitors and does not involve miglustat or report any pharmacokinetic parameters. |
| PD | Lee_2012 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data (IC50) for iminosugar analogues, not pharmacodynamic or exposure-response relationships for miglustat in vivo. |
| popPK | Lipiński_2026 | irrelevant | 0 | 0 | The paper is a narrative review of clinical evidence and biological rationale for miglustat in lysosomal storage disorders, containing no original quantitative pharmacokinetic parameter values. |
| PD | Lipiński_2026 | not_relevant | 1 | 0 | The text is a narrative review summarizing clinical evidence and biological rationale without reporting specific numeric pharmacodynamic parameters or exposure-response models. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on cardiac fibrosis and does not report any pharmacokinetic parameters for miglustat. |
| PD | Liu_2025 | not_relevant | 2 | 1 | The paper reports qualitative dose-response effects (e.g., 100 vs 200 μM) and mechanistic pathways but does not provide numeric PD parameters (Emax, EC50) or a fitted concentration-effect curve. |
| PGx | Machaczka_2012 | not_relevant | 0 | 0 | The paper is a retrospective clinical analysis of miglustat efficacy and adverse events in Gaucher disease patients, not a pharmacogenomic study investigating how genetic variants affect the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Maegawa_2009 | relevant | 8 | 3 | The paper reports a compartmental model and some PK parameters (Tmax, t1/2, accumulation index) for miglustat, but lacks specific numeric values for clearance, volume, or intercompartmental clearance. |
| popPK | Marshall_2010 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic efficacy in a mouse model using a different substrate reduction therapy (Genz-112638) and does not report quantitative pharmacokinetic parameters for miglustat. |
| PD | Marshall_2010 | not_relevant | 1 | 0 | The paper describes a qualitative comparison of therapeutic efficacy in a mouse model using a different substrate reduction therapy (Genz-112638) rather than miglustat, and does not provide numeric PD parameters or exposure-response data for miglustat. |
| popPK | Mendelsohn_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on Pompe disease treatment switching and does not report any pharmacokinetic parameters for miglustat. |
| popPK | Mengel_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of arimoclomol, with miglustat serving only as a concomitant standard-of-care medication rather than the subject drug. |
| popPK | Platt_1994 | irrelevant | 0 | 0 | The paper focuses on the in-vitro mechanism of action of N-butyldeoxynojirimycin (miglustat) as a biosynthesis inhibitor and does not report any pharmacokinetic parameters. |
| PD | Platt_1994 | not_relevant | 0 | 0 | The paper describes the mechanism of action and qualitative inhibition of glycolipid biosynthesis by N-butyldeoxynojirimycin (miglustat) in an in vitro model, but it does not report any quantitative exposure-response or dose-response analysis with numeric PD parameters (e.g., IC50, Emax). |
| popPK | Platt_1997 | irrelevant | 0 | 0 | The study focuses on N-butyldeoxynojirimycin, not miglustat, and reports biological effects rather than pharmacokinetic parameters. |
| PD | Platt_1997 | not_relevant | 0 | 0 | The paper studies N-butyldeoxynojirimycin, not miglustat, and reports only qualitative/percentage depletion without numeric PD parameters or exposure-response modeling. |
| popPK | Pollock_2008 | irrelevant | 0 | 0 | The study focuses on the antiviral efficacy of N-Butyldeoxynojirimycin (NB-DNJ) in vitro, not the pharmacokinetics of miglustat. |
| PD | Pollock_2008 | not_relevant | 0 | 0 | The paper reports pharmacodynamic data for N-Butyldeoxynojirimycin (NB-DNJ), not miglustat. |
| popPK | Ranes_2001 | irrelevant | 0 | 0 | The study investigates the anti-tumor effects of N-butyldeoxynojirimycin (miglustat) in mice and does not report pharmacokinetic parameters. |
| PD | Ranes_2001 | not_relevant | 0 | 0 | The paper studies N-butyldeoxynojirimycin (NB-DNJ), not miglustat, and reports only qualitative/percentage effects without a formal PD model or derivable numeric PD parameters for the target drug. |
| popPK | Remenova_2015 | irrelevant | 2 | 1 | The study is a GI tolerability trial that only reports non-compartmental PK parameters (AUC, Cmax) to show no interaction, lacking the compartmental disposition parameters (CL, V, Q, ka) required for population PK modeling. |
| popPK | Roberts_2025 | irrelevant | 0 | 0 | The paper is an indirect treatment comparison of efficacy outcomes (FVC, 6MWT) for Pompe disease treatments, not a pharmacokinetic study, and miglustat is only a co-administered comparator agent. |
| PD | Roberts_2025 | not_relevant | 0 | 0 | The paper is an indirect treatment comparison of clinical efficacy outcomes (FVC, 6MWT) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for miglustat. |
| PGx | Schoser_2021 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy and safety of a drug combination, not a pharmacogenomic study investigating how genetic variants affect miglustat's PK or PD parameters. |
| popPK | Schoser_2026 | irrelevant | 0 | 0 | The paper is a clinical position statement on Pompe disease treatment outcomes (FVC, 6MWT) and does not report pharmacokinetic parameters for miglustat. |
| PGx | Schoser_2026 | not_relevant | 0 | 0 | The paper discusses clinical therapeutic stability thresholds for Pompe disease treatments, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Shunnarah_2021 | irrelevant | 0 | 0 | The paper is a systematic review of natural products for male contraception and does not report pharmacokinetic parameters for miglustat. |
| PD | Shunnarah_2021 | not_relevant | 0 | 0 | The paper is a systematic review of natural products for male contraception and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for miglustat. |
| PGx | Sperb-Ludwig_2023 | not_relevant | 0 | 0 | The paper reports in vitro pharmacodynamic effects of miglustat on substrate accumulation in Mucolipidosis III fibroblasts, but does not report pharmacokinetic parameters or pharmacogenomic effects (gene-drug interactions) on PK/PD. |
| popPK | Steiner_2026 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of sinbaglustat (a different drug) in animal models, not the pharmacokinetics of miglustat. |
| popPK | Svensson_2003 | irrelevant | 0 | 0 | The study focuses on the antimicrobial mechanism of NB-DNJ (a different drug) in urinary tract infections and does not report pharmacokinetic parameters for miglustat. |
| PD | Svensson_2003 | not_relevant | 0 | 0 | The paper studies NB-DNJ (not miglustat) and provides only qualitative dose-dependent observations without numeric PD parameters. |
| PGx | Tallaksen_2009 | not_relevant | 0 | 0 | The paper is a clinical case report on the efficacy of miglustat in Sandhoff disease and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Taylor_1991 | irrelevant | 0 | 0 | The paper studies the antiviral activity of MDL 28,574 (a castanospermine derivative) in vitro and does not involve miglustat or report any pharmacokinetic parameters. |
| PD | Taylor_1991 | not_relevant | 0 | 0 | The paper studies MDL 28,574 (a castanospermine derivative), not miglustat, and reports in vitro IC50 values for an unrelated compound. |
| PGx | Torralba-Cabeza_2022 | not_relevant | 0 | 0 | The paper is a clinical guideline review comparing miglustat and eliglustat, mentioning CYP2D6 only in the context of eliglustat dosing, with no data on pharmacogenomic effects on miglustat PK/PD. |
| popPK | Treiber_2007 | relevant | 8 | 2 | The paper is a pharmacokinetic study of miglustat in rats reporting qualitative disposition and bioavailability, but specific quantitative parameters like clearance (CL) or volume (V) are not present in the provided text. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The paper is a mini-review of 1-Deoxynojirimycin and its derivatives, mentioning miglustat only as a clinical derivative without providing original quantitative pharmacokinetic parameter values. |
| popPK | Wolthuis_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of eliglustat, not miglustat. |
| PD | Wolthuis_2025 | not_relevant | 0 | 0 | The paper focuses on PK modeling (PopPK and PBPK) to determine dosing regimens that achieve predefined exposure targets (Cavg/Cmax) for safety and efficacy, but it does not report a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for the drug. |
| popPK | Woodhouse_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on viral eradication using iminosugars and does not report pharmacokinetic parameters for miglustat. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study on astrocyte polarization in subarachnoid hemorrhage where miglustat is used as a therapeutic agent, not a pharmacokinetic study reporting disposition parameters. |
| PD | Wu_2025 | not_relevant | 0 | 0 | The paper reports qualitative effects of miglustat on neurological scores and inflammation in a mouse model but provides no concentration-effect data, dose-response curve, or numeric PD parameters. |
| PGx | Xiang_2026 | not_relevant | 0 | 0 | The paper is a case report on the misdiagnosis of Niemann-Pick disease type C as Wilson disease and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of miglustat. |
| popPK | Yue_2019 | irrelevant | 0 | 0 | The paper is a review of substrate reduction therapy for inborn errors of metabolism and does not report any quantitative pharmacokinetic parameters for miglustat. |
| PD | Yue_2019 | not_relevant | 1 | 0 | The text is a general review of substrate reduction therapy for inborn errors of metabolism and does not contain specific pharmacodynamic data, exposure-response analysis, or numeric PD parameters for miglustat. |
| popPK | Zamoner_2019 | irrelevant | 0 | 0 | The paper is a mechanistic/in-vitro study on glucosidase inhibition (IC50 values) and does not report pharmacokinetic parameters for miglustat. |
| PD | Zamoner_2019 | not_relevant | 2 | 2 | The paper reports in vitro enzyme inhibition IC50 values for miglustat and analogues, which are pharmacological potency metrics, but does not report in vivo pharmacodynamic (exposure-response) or dose-response relationships with numeric PD parameters (e.g., Emax, EC50 in a biological system). |
| PGx | van_2008 | not_relevant | 0 | 0 | The paper discusses NB-DNJ (a different drug) and mouse genetics, not miglustat. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
