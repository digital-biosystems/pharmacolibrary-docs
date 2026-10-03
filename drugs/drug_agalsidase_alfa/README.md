<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;agalsidase alfa&quot;}]"></div>

# agalsidase alfa

- **generic name:** agalsidase alfa
- **ATC codes:** `A16AB03`
- **DrugBank:** [DB15874](https://go.drugbank.com/drugs/DB15874) · **PubChem:** not captured
- **groups:** approved, investigational

## About

**Description.** Agalsidase alfa is a recombinant human α-galactosidase A similar to [agalsidase beta]. While patients generally do not experience a clinically significant difference in outcomes between the two drugs, some patients may experience greater benefit with agalsidase beta.[A220228,A220233] Use of agalsidase beta has decreased in Europe, in favor of agalsidase alfa, after a contamination event in 2009.[A220343]

Agalsidase alfa was granted EMA approval on 3 August 2001.[L16413]

**Indication.** Agalsidase alfa is indicated in the treatment of Fabry disease.[L16398]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 02:00 | 23:10 | 0/0/0 | 0/1/0 | 0/0/0 | 77,782/3,816 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 10/14 | 15/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [van_2023_Gb3](drugs/drug_agalsidase_alfa/pd_van_2023_Gb3.md) | globotriaosylceramide ← agalsidase beta / AGABIO (alpha-galactosidase A) · direct Emax (saturable) effect | — | van Kuilenburg ABP et al., Development of a Biosimilar of Agalsida…, Drugs in R&D (2023) | [10.1007/s40268-023-00421-x](https://doi.org/10.1007/s40268-023-00421-x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [van_2023_LysoGb3](drugs/drug_agalsidase_alfa/pd_van_2023_LysoGb3.md) | globotriaosylsphingosine ← agalsidase beta / AGABIO (alpha-galactosidase A) · direct Emax (saturable) effect | — | van Kuilenburg ABP et al., Development of a Biosimilar of Agalsida…, Drugs in R&D (2023) | [10.1007/s40268-023-00421-x](https://doi.org/10.1007/s40268-023-00421-x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [van_2023_aGal_A](drugs/drug_agalsidase_alfa/pd_van_2023_aGal_A.md) | intracellular alpha-galactosidase A activity ← agalsidase beta / AGABIO (alpha-galactosidase A) · direct Emax (saturable) effect | — | van Kuilenburg ABP et al., Development of a Biosimilar of Agalsida…, Drugs in R&D (2023) | [10.1007/s40268-023-00421-x](https://doi.org/10.1007/s40268-023-00421-x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [van_2023_fluorescence](drugs/drug_agalsidase_alfa/pd_van_2023_fluorescence.md) | intracellular NBD-Gb3 degradation ← agalsidase beta / AGABIO (alpha-galactosidase A) · direct Emax (saturable) effect | — | van Kuilenburg ABP et al., Development of a Biosimilar of Agalsida…, Drugs in R&D (2023) | [10.1007/s40268-023-00421-x](https://doi.org/10.1007/s40268-023-00421-x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=agalsidase_alfa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…eliminated by the kidneys…”</sub> | prose |

<sub>Actors without a tissue in the table: GLA (other), Globotriaosylceramide (metabolizer), Globotriaosylceramide (target), M6PR (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 152 matched, 124 returned
- **screened:** 10  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ries_2007.pdf` | Ries M et al., Enzyme replacement in Fabry disease: ph…, Journal of clinical pharmac… (2007) | popPK | 10 | [10.1177/0091270007305299](https://doi.org/10.1177/0091270007305299) | [17698592](https://pubmed.ncbi.nlm.nih.gov/17698592) | The text explicitly reports quantitative pharmacokinetic parameters for agalsidase alfa, including serum clearance (3.7 +/- 1.5 mL/min/kg in children, 2.3 +/- 0.7 mL/min/kg in adults) and terminal elimination half-life (66 minutes baseline, 150 minutes week 25). |
| `Asano_1996.pdf` | Asano N et al., Calystegine B4, a novel trehalase inhib…, Carbohydrate research (1996) | pd | 4 | [10.1016/0008-6215(96)00204-2](https://doi.org/10.1016/0008-6215(96)00204-2) | [8938376](https://www.ncbi.nlm.nih.gov/pubmed/8938376) | metadata signals extractable PD data (IC50) |
| `Hentz_2014.pdf` | Hentz NG et al., Effect of liquid-handling accuracy on a…, Journal of laboratory autom… (2014) | pd | 4 | [10.1177/2211068213504095](https://doi.org/10.1177/2211068213504095) | [24029722](https://www.ncbi.nlm.nih.gov/pubmed/24029722) | metadata signals extractable PD data (IC50) |
| `Di_2016.pdf` | Di Martino MT et al., Genetic variants associated with gastro…, Oncotarget (2016) | pgx | 5 | [10.18632/oncotarget.13135](https://doi.org/10.18632/oncotarget.13135) | [27825144](https://www.ncbi.nlm.nih.gov/pubmed/27825144) | metadata signals extractable PGX data (ABCB11) |

<sub>queue written 2026-09-30T01:58:36.222171+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agnew_2022 | not_relevant | 0 | 0 | The paper investigates Streptococcus pneumoniae phenotypes and does not involve the drug agalsidase_alfa. |
| popPK | Ahmed_2025 | irrelevant | 0 | 0 | The paper is a general tutorial on rare disease drug development and does not report any specific pharmacokinetic parameters for agalsidase alfa. |
| PD | Ahmed_2025 | not_relevant | 0 | 0 | The text is a general tutorial on rare disease drug development and does not contain specific data, models, or numeric parameters for agalsidase alfa. |
| popPK | Aitken_2024 | irrelevant | 0 | 0 | The study focuses on bone mineral density outcomes in Fabry disease patients and does not report any pharmacokinetic parameters for agalsidase alfa. |
| PGx | Al-Salam_2012 | not_relevant | 0 | 0 | The paper describes a case of Fabry disease caused by a sporadic GLA mutation and discusses renal biopsy, but it does not report pharmacogenomic effects on the PK or PD of agalsidase alfa. |
| PGx | Alharbi_2018 | not_relevant | 0 | 0 | The paper investigates Lyso-Gb3 as a diagnostic biomarker for the N215S genotype in Fabry disease, but does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa treatment. |
| popPK | Asano_1996 | irrelevant | 0 | 0 | The paper describes the isolation and enzymatic inhibition properties of calystegine B4, a plant alkaloid, and does not involve agalsidase alfa or pharmacokinetic parameters. |
| PD | Asano_1996 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (Ki/IC50) for calystegine B4, not pharmacodynamic exposure-response or dose-response data for agalsidase alfa. |
| popPK | Asano_1998 | irrelevant | 0 | 0 | The paper is a structural and mechanistic study of glycosidase inhibitors (homonojirimycins) and does not involve agalsidase_alfa or pharmacokinetic parameters. |
| PD | Asano_1998 | not_relevant | 0 | 0 | The paper studies homonojirimycin isomers as glycosidase inhibitors, not agalsidase alfa, and reports enzyme inhibition constants (IC50/Ki) rather than pharmacodynamic exposure-response relationships for the target drug. |
| popPK | Asano_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on chemical chaperones for Fabry disease and does not report pharmacokinetic parameters for agalsidase alfa. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of PK models for lysosomal storage diseases, but the included studies focus on other enzymes (imiglucerase, avalglucosidase alfa, etc.) and do not report quantitative PK parameters for agalsidase alfa. |
| PD | Barzel_2026 | not_relevant | 3 | 0 | The paper is a review that summarizes population PK/PD models for various lysosomal storage diseases but does not report specific numeric PD parameters (Emax, EC50, etc.) for agalsidase alfa in the provided text. |
| PGx | Basharova_2025 | not_relevant | 0 | 0 | The paper studies the RAB29 gene variant in Parkinson's disease and its effect on endogenous lysosomal hydrolase activity, not the pharmacokinetics or pharmacodynamics of the drug agalsidase_alfa. |
| popPK | Benjamin_2009 | irrelevant | 0 | 0 | The paper studies the pharmacological chaperone migalastat (DGJ) in cell lines and does not report pharmacokinetic parameters for agalsidase alfa. |
| popPK | Benjamin_2017 | irrelevant | 0 | 0 | The paper focuses on pharmacogenetics and pharmacodynamics of migalastat, not the pharmacokinetics of agalsidase alfa. |
| PD | Benjamin_2017 | not_relevant | 0 | 0 | The paper focuses on the validation of a pharmacogenetic assay for migalastat, not agalsidase alfa, and does not report PK/PD modeling or numeric exposure-response parameters. |
| PGx | Benjamin_2017 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics for migalastat, not agalsidase alfa. |
| popPK | Berstein_2024 | irrelevant | 0 | 0 | The study investigates agalsidase beta (Fabrazyme/Biosidus), not agalsidase alfa, which is the required subject drug. |
| PD | Berstein_2024 | not_relevant | 0 | 0 | The paper focuses on PK bioequivalence (Cmax, AUC) and immunogenicity, with no report of PD parameters or concentration-effect relationships. |
| PGx | Besada_2021 | not_relevant | 0 | 0 | The paper investigates pharmacological chaperones (PBXs) for Fabry disease, not the pharmacogenomics of agalsidase alfa. |
| popPK | Bichet_2023 | irrelevant | 0 | 0 | The paper is a Delphi consensus study on the management of Fabry disease with migalastat, not a pharmacokinetic study, and contains no quantitative PK parameters for agalsidase alfa. |
| PD | Bichet_2023 | not_relevant | 0 | 0 | The paper is a consensus guideline (Delphi study) for migalastat management and does not report any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| PGx | Boof_2020 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of lucerastat, not agalsidase alfa. |
| popPK | Brussee_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of lucerastat, not agalsidase alfa. |
| PD | Brussee_2026 | not_relevant | 0 | 0 | The paper describes a population pharmacokinetic (PK) model for lucerastat, not agalsidase alfa, and does not report any pharmacodynamic (PD) or exposure-response parameters. |
| PGx | Budziński_2014 | not_relevant | 0 | 0 | The paper studies CYP3A expression in pig livers for xenotransplantation and does not involve agalsidase alfa or its pharmacokinetics/pharmacodynamics. |
| popPK | Chen_2004 | irrelevant | 0 | 0 | The paper describes a yeast two-hybrid system for PPARgamma ligand screening and does not involve agalsidase_alfa or pharmacokinetic parameters. |
| PD | Chen_2004 | not_relevant | 0 | 0 | The paper describes a yeast two-hybrid screening system for PPARgamma ligands and does not involve agalsidase alfa or any pharmacodynamic modeling of that drug. |
| PGx | Choi_2026 | not_relevant | 0 | 0 | The paper discusses atomoxetine-induced phospholipidosis and differential diagnosis with Fabry disease, but does not report pharmacogenomic effects on the PK or PD of agalsidase alfa. |
| PGx | Di_2016 | not_relevant | 0 | 0 | The paper investigates genetic variants associated with gastrointestinal symptoms in Fabry disease, not the pharmacokinetics or pharmacodynamics of agalsidase alfa. |
| popPK | Dobretsov_2007 | irrelevant | 0 | 0 | The paper investigates antifouling enzymes and larval attachment, not the pharmacokinetics of agalsidase alfa. |
| PD | Dobretsov_2007 | not_relevant | 0 | 0 | The paper studies antifouling enzymes (proteases) on bryozoans, not the drug agalsidase alfa. |
| PGx | Ducatez_2021 | not_relevant | 0 | 0 | The paper investigates metabolomic profiles in Fabry disease patients but does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa or any other drug. |
| PGx | Eleftheriadis_2025 | not_relevant | 0 | 0 | The paper reports a case study of migalastat efficacy in a Fabry disease patient, not a pharmacogenomic effect on the PK/PD of agalsidase alfa. |
| PGx | Elliott_2019 | not_relevant | 0 | 0 | The paper is a methodological review on systematic literature reviews for Fabry disease and does not report specific pharmacogenomic effects on PK/PD parameters. |
| popPK | Elías-Rodríguez_2018 | irrelevant | 0 | 0 | The paper reports in-vitro enzyme inhibition data (IC50, Ki) for a new inhibitor, not pharmacokinetic parameters for agalsidase alfa. |
| PD | Elías-Rodríguez_2018 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50/Ki) for a small molecule inhibitor, not a pharmacodynamic exposure-response relationship for the drug agalsidase alfa. |
| popPK | Ertelt_2024 | irrelevant | 0 | 0 | The paper is a computational study on predicting post-translational modifications (PTMs) using machine learning and does not report any pharmacokinetic parameters for agalsidase alfa. |
| PD | Ertelt_2024 | not_relevant | 0 | 0 | The paper focuses on machine learning and protein design for post-translational modifications and does not contain any pharmacodynamic or exposure-response data for agalsidase alfa. |
| PGx | Ezgu_2014 | not_relevant | 0 | 0 | The paper describes a diagnostic method (HRMA) for detecting genetic mutations in Fabry disease and does not report any pharmacokinetic or pharmacodynamic effects of agalsidase alfa. |
| PGx | Filoni_2008 | not_relevant | 0 | 0 | The paper describes the molecular pathogenesis of Fabry disease (GLA gene mutations and mRNA splicing) but does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa therapy. |
| popPK | Front_2016 | irrelevant | 0 | 0 | The paper describes the synthesis and enzymatic inhibition of galactosidase inhibitors, not the pharmacokinetics of agalsidase alfa. |
| PD | Front_2016 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and pharmacological chaperone effects for galactosidase inhibitors, not pharmacodynamic exposure-response relationships for the drug agalsidase alfa. |
| PGx | Germain_2002 | not_relevant | 0 | 0 | The paper describes genotype-phenotype correlations for the natural disease (Fabry disease) caused by mutations in the alpha-Gal A gene, not the pharmacokinetic or pharmacodynamic effects of the drug agalsidase alfa. |
| PGx | Germain_2010 | not_relevant | 0 | 0 | The text is a general review of Fabry disease pathophysiology and management, and does not report any pharmacogenomic effects on the PK or PD of agalsidase alfa. |
| popPK | Germain_2012 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of migalastat HCl, not the pharmacokinetics of agalsidase alfa, which is only mentioned as background context for enzyme replacement therapy. |
| PGx | Germain_2019 | not_relevant | 0 | 0 | The paper reports the efficacy of migalastat in Fabry disease patients, not the pharmacokinetics or pharmacodynamics of agalsidase alfa. |
| PGx | Germain_2024 | not_relevant | 0 | 0 | The paper discusses the pharmacokinetics and pharmacodynamics of pegunigalsidase alfa and agalsidase beta, but does not report any pharmacogenomic effects (gene variants/genotypes) on these parameters. |
| popPK | Giugliani_2013 | irrelevant | 0 | 0 | The study investigates migalastat hydrochloride, not agalsidase alfa, and reports pharmacodynamic rather than pharmacokinetic parameters. |
| PD | Giugliani_2013 | not_relevant | 2 | 1 | The paper describes qualitative pharmacodynamic effects (GL-3 reduction) in a small cohort but does not provide numeric PD parameters, concentration-effect curves, or a formal PK/PD model. |
| PGx | Giugliani_2013 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects for migalastat, not agalsidase_alfa. |
| popPK | Goker-Alpan_2016 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial reporting pharmacodynamic and clinical endpoints, not a pharmacokinetic study with quantitative disposition parameters. |
| PD | Goker-Alpan_2016 | not_relevant | 1 | 0 | The paper reports clinical efficacy endpoints (changes in biomarkers and cardiac function) over time but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Gregório_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on chloroquine and agalsidase-beta (not alfa) with no pharmacokinetic parameters reported. |
| PD | Gregório_2021 | not_relevant | 2 | 1 | The paper describes a qualitative dose-dependent cytotoxicity effect of chloroquine and a protective effect of agalsidase-beta, but it does not report numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for agalsidase alfa. |
| PGx | Guo_2026 | not_relevant | 0 | 0 | The paper is a review of renal involvement in Fabry disease and does not report pharmacogenomic effects on the PK or PD of agalsidase alfa. |
| PGx | H_2012 | not_relevant | 0 | 0 | The paper reports a case of Fabry disease treated with agalsidase beta (not alfa) and focuses on histological outcomes rather than pharmacokinetic or pharmacodynamic parameters influenced by genotype. |
| PGx | Hallows_2023 | not_relevant | 0 | 0 | The paper reports on engineered protein variants (GLAv05/GLAv09) for improved stability and PK, not on how patient genetic variants (pharmacogenomics) affect the PK/PD of agalsidase alfa. |
| popPK | Hennermann_2019 | irrelevant | 0 | 0 | The study investigates moss-aGalactosidase A (moss-aGal), a different drug entity, rather than agalsidase alfa. |
| PD | Hennermann_2019 | not_relevant | 3 | 2 | The paper reports qualitative changes in PD biomarkers (Gb3, lyso-Gb3) after a single dose but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Hentz_2014 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |
| PD | Hentz_2014 | not_relevant | 0 | 0 | The paper focuses on the effect of liquid-handling accuracy on assay performance and does not report any pharmacodynamic or exposure-response data for agalsidase alfa. |
| PGx | Hirashio_2021 | not_relevant | 0 | 0 | The paper describes a genotype-phenotype correlation in Fabry disease and clinical response to enzyme replacement therapy, but does not report pharmacokinetic or pharmacodynamic parameters of agalsidase alfa. |
| popPK | Huang_2025 | irrelevant | 0 | 0 | The paper studies an Elovl1 inhibitor in a mouse model of adrenoleukodystrophy and does not involve agalsidase_alfa or report any pharmacokinetic parameters for it. |
| PD | Huang_2025 | not_relevant | 0 | 0 | The paper discusses an Elovl1 inhibitor in a mouse model, not agalsidase alfa, and does not report any exposure-response or dose-response PD parameters for the target drug. |
| popPK | Ikeda_2000 | irrelevant | 0 | 0 | The paper describes the isolation and enzymatic inhibition of plant-derived compounds and does not involve agalsidase_alfa or pharmacokinetic parameters. |
| PD | Ikeda_2000 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) for natural products, not pharmacodynamic or exposure-response relationships for the drug agalsidase alfa. |
| popPK | Johnson_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of migalastat, not agalsidase alfa. |
| PD | Johnson_2024 | not_relevant | 3 | 0 | The paper focuses on PK and PBPK modeling for dose selection in ESRD; it references an EC50 for intracellular trafficking but does not report the numeric value or provide a concentration-effect curve in the text. |
| PGx | Johnson_2024 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of migalastat, not agalsidase alfa, and focuses on renal function/dialysis rather than genetic variants. |
| PGx | Jurickova_2022 | not_relevant | 0 | 0 | The paper reports clinical outcomes and novel genetic variants in Fabry disease patients but does not analyze the impact of genotypes on the pharmacokinetics or pharmacodynamics of agalsidase alfa. |
| popPK | Kaguelidou_2019 | irrelevant | 0 | 0 | The paper is a study protocol for a trial comparing gabapentin and tramadol, and does not report pharmacokinetic parameters for agalsidase alfa. |
| PD | Kaguelidou_2019 | not_relevant | 0 | 0 | The paper is a study protocol for a clinical trial and does not report any results, data, or numeric pharmacodynamic parameters. |
| PGx | Kamani_2016 | not_relevant | 0 | 0 | The paper investigates sphingolipid storage profiles in Fabry mice and the effect of ABCB1 depletion, but does not report pharmacokinetic or pharmacodynamic parameters for the drug agalsidase alfa. |
| popPK | Kato_2005 | irrelevant | 0 | 0 | The paper discusses the biological properties of azasugars as enzyme inhibitors and does not report pharmacokinetic parameters for agalsidase alfa. |
| PD | Kato_2005 | not_relevant | 0 | 0 | The paper discusses the biological properties and enzyme inhibition (Ki/IC50) of azasugars, not the pharmacodynamics of agalsidase alfa. |
| PGx | Kirkilionis_1991 | not_relevant | 0 | 0 | The paper discusses genetic diagnosis of Fabry disease (alpha-galactosidase deficiency) and does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa therapy. |
| PGx | Klaewkla_2023 | not_relevant | 0 | 0 | The paper is a theoretical study on the structural effects of a mutation on the enzyme itself, not a clinical or preclinical study reporting pharmacokinetic or pharmacodynamic parameters of the drug agalsidase alfa. |
| PGx | Knol_1999 | not_relevant | 0 | 0 | The paper describes natural history and phenotypic variability in Fabry disease patients with a specific mutation, but does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa. |
| popPK | Ko_2016 | irrelevant | 0 | 0 | The study is a pharmacodynamic transcriptome analysis of agalsidase beta (not alfa) and does not report any pharmacokinetic parameters. |
| PD | Ko_2016 | not_relevant | 1 | 0 | The study performs transcriptomic profiling (RNA-seq) to identify gene expression changes before and after ERT, but it does not report any quantitative exposure-response or dose-response relationships, nor does it provide numeric PD parameters like Emax or EC50. |
| popPK | Kwon_2000 | irrelevant | 0 | 0 | The paper describes the isolation and enzymatic inhibition of a fungal metabolite (cyclo(Deala-L-Leu)) and contains no pharmacokinetic data for agalsidase alfa. |
| PD | Kwon_2000 | not_relevant | 0 | 0 | The paper reports the isolation and enzymatic inhibition of a fungal metabolite (cyclo(Deala-L-Leu)), not the pharmacodynamics of the drug agalsidase alfa. |
| popPK | Laftouhi_2024 | irrelevant | 0 | 0 | The paper studies Rosmarinus officinalis essential oils and their effects on α-galactosidase (an enzyme), not the drug agalsidase alfa, and contains no pharmacokinetic parameters. |
| PD | Laftouhi_2024 | not_relevant | 0 | 0 | The paper analyzes plant essential oils and their biochemical properties, not the pharmacodynamics of the drug agalsidase alfa. |
| popPK | Lettieri_1998 | irrelevant | 0 | 0 | The study investigates acarbose and Beano, not agalsidase alfa, and reports pharmacodynamic/tolerability data rather than PK parameters. |
| PD | Lettieri_1998 | not_relevant | 0 | 0 | The paper studies acarbose and Beano, not agalsidase alfa. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The paper describes the establishment and characterization of an iPSC line from a Fabry disease patient and does not report any pharmacokinetic or pharmacodynamic effects of agalsidase alfa. |
| PGx | Li_2026_2 | not_relevant | 0 | 0 | The paper describes a gene therapy (EXG110) for Fabry disease, not the pharmacogenomics of the enzyme replacement therapy agalsidase alfa. |
| popPK | Lohith_2023 | irrelevant | 0 | 0 | The paper describes the development of a PET imaging probe ([18F]AGAL) targeting the enzyme alpha-galactosidase A, not the pharmacokinetics of the drug agalsidase alfa. |
| PD | Lohith_2023 | not_relevant | 0 | 0 | The paper reports the radiosynthesis and in vitro/in vivo evaluation of a PET imaging probe ([18F]AGAL), not the pharmacodynamics of the therapeutic drug agalsidase alfa; the reported IC50 is for the tracer's binding affinity, not a therapeutic dose-response relationship. |
| PGx | Lukas_2013 | not_relevant | 0 | 0 | The paper characterizes GLA mutations and their effect on enzyme activity and biomarkers (lyso-Gb3) for Fabry disease diagnosis, but does not report pharmacokinetic or pharmacodynamic parameters of the drug agalsidase alfa. |
| PGx | Lukas_2020 | not_relevant | 0 | 0 | The paper focuses on the pharmacological chaperone 1-deoxygalactonojirimycin (DGJ) and its interaction with GLA variants, not on the pharmacokinetics or pharmacodynamics of agalsidase alfa. |
| popPK | Matucci_2026 | irrelevant | 0 | 0 | The paper is a review on immunogenicity and clinical management of Fabry disease, containing no original quantitative pharmacokinetic parameter values for agalsidase_alfa. |
| PD | Matucci_2026 | not_relevant | 1 | 0 | The text is a qualitative review of immunogenicity and general PK/PD differences between agalsidase alfa and beta, containing no numeric PD parameters or exposure-response data. |
| PGx | McCarron_2026 | not_relevant | 0 | 0 | The paper studies migalastat, not agalsidase alfa. |
| PGx | Menke_2026 | not_relevant | 0 | 0 | The paper investigates protein-protein interactions of alpha-galactosidase A in the context of Fabry disease pathogenesis, not the pharmacokinetics or pharmacodynamics of the drug agalsidase alfa. |
| PGx | Monte_2024 | not_relevant | 0 | 0 | The paper is a review of the pathophysiology of Fabry disease nephropathy and podocyte injury, not a study on the pharmacogenomics of agalsidase alfa. |
| PGx | Monticelli_2023 | not_relevant | 0 | 0 | The paper investigates curcumin as a treatment for Fabry disease, not the pharmacogenomics of agalsidase alfa. |
| popPK | Motabar_2010 | irrelevant | 0 | 0 | The paper is an in-vitro high-throughput screening study for enzyme inhibitors and does not report pharmacokinetic parameters for agalsidase alfa. |
| PD | Motabar_2010 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics and inhibition data for small molecules (e.g., lansoprazole) against alpha-galactosidase A, not pharmacodynamic or exposure-response relationships for the drug agalsidase alfa. |
| popPK | Nakamura_2020 | irrelevant | 0 | 0 | The study focuses on the biosimilar JR-051 of agalsidase beta, not agalsidase alfa, and does not report compartmental PK parameters for the target drug. |
| PD | Nakamura_2020 | not_relevant | 2 | 1 | The paper reports PK bioequivalence and PD biomarker stability (GL-3/lyso-GL-3 ratios) for a biosimilar, but does not provide an exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Nisticò_2021 | irrelevant | 2 | 0 | The paper is a narrative review comparing agalsidase alfa and beta, discussing PK/PD concepts qualitatively but providing no original quantitative pharmacokinetic parameter values (e.g., CL, V, t1/2) for agalsidase alfa. |
| PD | Nisticò_2021 | not_relevant | 2 | 0 | The text is a review article summarizing the disease and treatments; it mentions PK/PD characteristics qualitatively but does not report specific numeric PD parameters or exposure-response data. |
| PGx | Nowak_2020 | not_relevant | 0 | 0 | The paper discusses migalastat, not agalsidase_alfa. |
| popPK | Ogawa_2004 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on carba-sugar derivatives and glycosidase inhibitors, containing no pharmacokinetic data for agalsidase alfa. |
| PD | Ogawa_2004 | not_relevant | 0 | 0 | The paper reports the synthesis of carba-sugar derivatives and their glycosidase inhibitory activity (IC50), but does not report any pharmacodynamic or exposure-response relationship for the drug agalsidase alfa. |
| PGx | Palhais_2016 | not_relevant | 0 | 0 | The paper describes the molecular mechanism of a GLA gene mutation causing Fabry disease and the potential of splice-switching oligonucleotides, but it does not report pharmacokinetic or pharmacodynamic parameters of agalsidase alfa. |
| PGx | Perretta_2025 | not_relevant | 0 | 0 | The paper is a general review of new treatments for Fabry disease and does not report specific pharmacogenomic effects on the PK or PD parameters of agalsidase alfa. |
| PGx | Perrone_2021 | not_relevant | 0 | 0 | The paper describes a method for quantifying a biomarker (lyso-Gb3) in Fabry disease patients but does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa or any other drug. |
| popPK | Popp_2021 | irrelevant | 0 | 0 | The paper is a systematic review of antibiotics for COVID-19 and does not involve agalsidase_alfa or report any pharmacokinetic parameters. |
| PD | Popp_2021 | not_relevant | 0 | 0 | The paper is a systematic review of antibiotics for COVID-19 and does not mention agalsidase alfa or report any pharmacodynamic parameters. |
| popPK | Ramaswami_2025 | irrelevant | 0 | 0 | The study evaluates migalastat, not agalsidase alfa, and does not report PK parameters for the target drug. |
| PD | Ramaswami_2025 | not_relevant | 1 | 0 | The paper reports qualitative stability of pharmacodynamic markers (lyso-Gb3) and clinical outcomes but does not provide numeric PD parameters or an exposure-response model. |
| PGx | Ramaswami_2025 | not_relevant | 0 | 0 | The paper reports clinical outcomes for migalastat, not agalsidase alfa, and does not analyze genotype-specific PK/PD effects. |
| PGx | Reková_2021 | not_relevant | 0 | 0 | The paper describes clinical phenotypes and variant classification in Fabry disease patients but does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa. |
| PGx | Reynolds_2021 | not_relevant | 0 | 0 | The paper describes a diagnostic screening study for Fabry disease using routine pathology results and does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa. |
| PD | Ries_2007 | not_relevant | 3 | 1 | The paper reports PK parameters and qualitative PD observations (reduction in globotriaosylceramide) but explicitly states the PD effect was independent of PK parameters and provides no numeric PD parameters (Emax, EC50, etc.) or concentration-effect curves. |
| PGx | Rodríguez_2023 | not_relevant | 0 | 0 | The paper discusses X chromosome inactivation in Fabry disease but does not report pharmacokinetic or pharmacodynamic parameters of agalsidase alfa. |
| PGx | Ruangsiriluk_2025 | not_relevant | 0 | 0 | The paper describes an AAV gene therapy for Fabry disease, not the pharmacogenomics of the enzyme replacement therapy drug agalsidase alfa. |
| PGx | Saeed_2022 | not_relevant | 0 | 0 | The paper is a review of Fabry disease pathophysiology and management, not a pharmacogenomic study of agalsidase alfa PK/PD. |
| PGx | San_2023 | not_relevant | 0 | 0 | The paper describes morphological hallmarks and tissue deposits in Fabry disease patients but does not report pharmacokinetic or pharmacodynamic parameters of agalsidase alfa. |
| PGx | Sarsam_2020 | not_relevant | 0 | 0 | The paper is a case report describing the diagnosis of Fabry disease and does not report pharmacokinetic or pharmacodynamic data for agalsidase alfa. |
| popPK | Schiffmann_2019 | irrelevant | 0 | 0 | The study investigates pegunigalsidase alfa, a different drug, rather than agalsidase alfa. |
| PD | Schiffmann_2019 | not_relevant | 2 | 1 | The paper reports qualitative pharmacodynamic outcomes (84% reduction in Gb3) and PK parameters, but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve. |
| PGx | Scionti_2017 | not_relevant | 2 | 5 | The paper reports genetic associations with disease progression (clinical outcome) rather than specific pharmacokinetic or pharmacodynamic parameters of agalsidase alfa. |
| PGx | Stamerra_2021 | not_relevant | 0 | 0 | The paper studies agalsidase-beta (not agalsidase-alfa) and reports clinical outcomes in Fabry patients without analyzing specific gene variants or genotypes to determine pharmacogenomic effects on PK/PD parameters. |
| popPK | Stokes_2020 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on enzyme mutagenesis and does not report pharmacokinetic parameters for agalsidase alfa. |
| PD | Stokes_2020 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic kinetics (activity fold-increase, Hill coefficient) for mutated enzymes, not in vivo pharmacodynamic or exposure-response relationships for the drug agalsidase alfa. |
| PGx | Talbot_2019 | not_relevant | 0 | 0 | The paper discusses the pathogenicity of a GLA gene variant in Fabry disease and its effect on biomarkers (lyso-Gb3), but does not report pharmacokinetic or pharmacodynamic parameters of the drug agalsidase alfa. |
| popPK | Taslimi_2020 | irrelevant | 0 | 0 | The paper is an in-vitro study on acetophenone derivatives and does not report pharmacokinetic parameters for agalsidase alfa. |
| PD | Taslimi_2020 | not_relevant | 0 | 0 | The paper studies acetophenone derivatives as enzyme inhibitors and does not mention agalsidase alfa or report any pharmacodynamic or exposure-response data for it. |
| PGx | Ter_2023 | not_relevant | 0 | 0 | The paper investigates a gene therapy (modRNA) for Fabry disease, not the pharmacogenomics of the drug agalsidase alfa. |
| PGx | Thurberg_2009 | not_relevant | 0 | 0 | The paper reports histopathological outcomes (GL-3 clearance) in Fabry patients treated with agalsidase alfa but does not analyze the impact of specific gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Tsujiuchi_2019 | not_relevant | 0 | 0 | The paper is a clinical case report on the efficacy of enzyme replacement therapy in Fabry disease patients, focusing on disease progression and genotype-phenotype correlation, rather than reporting pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of agalsidase alfa. |
| PGx | Tuttolomondo_2017 | not_relevant | 0 | 0 | The paper describes natural history and genotype-phenotype correlation in Fabry disease, not the pharmacokinetics or pharmacodynamics of agalsidase alfa. |
| PGx | Usenko_2023 | not_relevant | 0 | 0 | The paper investigates lysosomal enzyme activities and gene variants in schizophrenia patients, not the pharmacokinetics or pharmacodynamics of agalsidase alfa. |
| PGx | Usenko_2023_2 | not_relevant | 0 | 0 | The paper investigates the association between LRRK2 variants and lysosomal enzyme activities/substrates in Parkinson's disease, not the pharmacokinetics or pharmacodynamics of the drug agalsidase_alfa. |
| popPK | Verma_2004 | irrelevant | 0 | 0 | The paper studies gene expression in yeast and is unrelated to the pharmacokinetics of the drug agalsidase alfa. |
| PD | Verma_2004 | not_relevant | 0 | 0 | The paper describes a mathematical model for gene expression in yeast (Saccharomyces cerevisiae) and does not involve the drug agalsidase alfa or any pharmacodynamic analysis. |
| popPK | Welford_2018 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of lucerastat where agalsidase alfa is only used as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Welford_2018 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, % reduction) for lucerastat, not for agalsidase alfa, which is only mentioned as a comparator. |
| PGx | Xie_2026 | not_relevant | 0 | 0 | The paper is a narrative review of endocrine and metabolic surveillance in Fabry disease and does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa. |
| PGx | Yeniçerioğlu_2017 | not_relevant | 0 | 0 | The paper reports the prevalence of Fabry disease in CKD patients and identifies genetic variants associated with the disease, but it does not report pharmacogenomic effects on the PK or PD parameters of agalsidase alfa. |
| PGx | Yogasundaram_2018 | not_relevant | 0 | 0 | The paper discusses chloroquine-induced cardiomyopathy and mentions alpha-galactosidase A polymorphism in the context of Fabry disease phenocopy, but does not report pharmacogenomic effects on the PK or PD of agalsidase alfa. |
| popPK | Ziegler_2002 | irrelevant | 0 | 0 | The paper focuses on gene therapy using adenoviral vectors in mice and does not report pharmacokinetic parameters for the drug agalsidase_alfa. |
| PD | Ziegler_2002 | not_relevant | 3 | 2 | The paper describes a qualitative nonlinear dose-response relationship for an adenoviral vector (gene therapy) in mice, not a pharmacodynamic model for the drug agalsidase alfa, and lacks extractable numeric PD parameters like Emax or EC50. |
| PGx | Zou_2025 | not_relevant | 0 | 0 | The paper focuses on protein engineering of a microbial enzyme for industrial stability, not on human pharmacogenomics or the PK/PD of the drug agalsidase alfa. |
| popPK | van_2023 | irrelevant | 0 | 0 | The study focuses on agalsidase beta (and its biosimilar), not agalsidase alfa, and does not report quantitative PK parameters for the target drug. |
| PGx | Živná_2025 | not_relevant | 0 | 0 | The paper discusses the pathophysiology of Fabry disease variants and ER stress, not the pharmacokinetics or pharmacodynamics of the drug agalsidase alfa. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
