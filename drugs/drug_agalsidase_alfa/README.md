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
| 2026-09-26 23:14 | 1:26:13 | 0/0/0 | 0/0/0 | 0/0/0 | 194,744/8,078 | ollama / qwen3.8:27b-mtp-q8_0 | 16 | 3/13 | 16/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=agalsidase_alfa) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>“…A dose of agalsidase alfa in non end stage renal disease patients reaches a C&lt;sub&gt;max&lt;/sub…”</sub> | prose |
| excretion | kidney | <sub>“…tein synthesis or further broken down and eliminated by the kidneys.[A182009]…”</sub> | prose |

<sub>Actors without a tissue in the table: GLA (other), Globotriaosylceramide (metabolizer), Globotriaosylceramide (target), M6PR (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 152 matched, 91 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ries_2007.pdf` | Ries M et al., Enzyme replacement in Fabry disease: ph…, Journal of clinical pharmac… (2007) | popPK | 10 | [10.1177/0091270007305299](https://doi.org/10.1177/0091270007305299) | [17698592](https://pubmed.ncbi.nlm.nih.gov/17698592) | The text explicitly reports quantitative pharmacokinetic parameters for agalsidase alfa, including serum clearance (3.7 +/- 1.5 mL/min/kg in children, 2.3 +/- 0.7 mL/min/kg in adults) and terminal elimination half-life (66 minutes baseline, 150 minutes week 25). |
| `Di_2016.pdf` | Di Martino MT et al., Genetic variants associated with gastro…, Oncotarget (2016) | pgx | 5 | [10.18632/oncotarget.13135](https://doi.org/10.18632/oncotarget.13135) | [27825144](https://www.ncbi.nlm.nih.gov/pubmed/27825144) | metadata signals extractable PGX data (ABCB11) |

<sub>queue written 2026-09-26T22:50:32.428988+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agnew_2022 | not_relevant | 0 | 0 | The paper investigates Streptococcus pneumoniae phenotypes and does not involve the drug agalsidase_alfa. |
| popPK | Ahmed_2025 | irrelevant | 0 | 0 | The paper is a general tutorial on rare disease drug development and does not report any specific pharmacokinetic parameters for agalsidase alfa. |
| PD | Ahmed_2025 | not_relevant | 0 | 0 | The text is a general tutorial on rare disease drug development and does not contain specific data, models, or numeric parameters for agalsidase alfa. |
| popPK | Aitken_2024 | irrelevant | 0 | 0 | The study focuses on bone mineral density outcomes in Fabry disease patients and does not report any pharmacokinetic parameters for agalsidase alfa. |
| popPK | Asano_1998 | irrelevant | 0 | 0 | The paper is a structural and mechanistic study of glycosidase inhibitors (homonojirimycins) and does not involve agalsidase_alfa or pharmacokinetic parameters. |
| PD | Asano_1998 | not_relevant | 0 | 0 | The paper studies homonojirimycin isomers as glycosidase inhibitors, not agalsidase alfa, and reports enzyme inhibition constants (IC50/Ki) rather than pharmacodynamic exposure-response relationships for the target drug. |
| popPK | Asano_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on chemical chaperones for Fabry disease and does not report pharmacokinetic parameters for agalsidase alfa. |
| popPK | Barzel_2026 | irrelevant | 0 | 0 | The paper is a review of PK models for lysosomal storage diseases, but the included studies focus on other enzymes (imiglucerase, avalglucosidase alfa, etc.) and do not report quantitative PK parameters for agalsidase alfa. |
| PD | Barzel_2026 | not_relevant | 3 | 0 | The paper is a review that summarizes population PK/PD models for various lysosomal storage diseases but does not report specific numeric PD parameters (Emax, EC50, etc.) for agalsidase alfa in the provided text. |
| popPK | Benjamin_2009 | irrelevant | 0 | 0 | The paper studies the pharmacological chaperone migalastat (DGJ) in cell lines and does not report pharmacokinetic parameters for agalsidase alfa. |
| popPK | Benjamin_2017 | irrelevant | 0 | 0 | The paper focuses on pharmacogenetics and pharmacodynamics of migalastat, not the pharmacokinetics of agalsidase alfa. |
| PD | Benjamin_2017 | not_relevant | 0 | 0 | The paper focuses on the validation of a pharmacogenetic assay for migalastat, not agalsidase alfa, and does not report PK/PD modeling or numeric exposure-response parameters. |
| PGx | Benjamin_2017 | not_relevant | 0 | 0 | The paper discusses pharmacogenetics for migalastat, not agalsidase alfa. |
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
| popPK | Elías-Rodríguez_2018 | irrelevant | 0 | 0 | The paper reports in-vitro enzyme inhibition data (IC50, Ki) for a new inhibitor, not pharmacokinetic parameters for agalsidase alfa. |
| PD | Elías-Rodríguez_2018 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50/Ki) for a small molecule inhibitor, not a pharmacodynamic exposure-response relationship for the drug agalsidase alfa. |
| popPK | Ertelt_2024 | irrelevant | 0 | 0 | The paper is a computational study on predicting post-translational modifications (PTMs) using machine learning and does not report any pharmacokinetic parameters for agalsidase alfa. |
| PD | Ertelt_2024 | not_relevant | 0 | 0 | The paper focuses on machine learning and protein design for post-translational modifications and does not contain any pharmacodynamic or exposure-response data for agalsidase alfa. |
| PGx | Ezgu_2014 | not_relevant | 0 | 0 | The paper describes a diagnostic method (HRMA) for detecting genetic mutations in Fabry disease and does not report any pharmacokinetic or pharmacodynamic effects of agalsidase alfa. |
| popPK | Front_2016 | irrelevant | 0 | 0 | The paper describes the synthesis and enzymatic inhibition of galactosidase inhibitors, not the pharmacokinetics of agalsidase alfa. |
| PD | Front_2016 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and pharmacological chaperone effects for galactosidase inhibitors, not pharmacodynamic exposure-response relationships for the drug agalsidase alfa. |
| PGx | Germain_2010 | not_relevant | 0 | 0 | The text is a general review of Fabry disease pathophysiology and management, and does not report any pharmacogenomic effects on the PK or PD of agalsidase alfa. |
| popPK | Germain_2012 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of migalastat HCl, not the pharmacokinetics of agalsidase alfa, which is only mentioned as background context for enzyme replacement therapy. |
| PGx | Germain_2019 | not_relevant | 0 | 0 | The paper reports the efficacy of migalastat in Fabry disease patients, not the pharmacokinetics or pharmacodynamics of agalsidase alfa. |
| popPK | Goker-Alpan_2016 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety trial reporting pharmacodynamic and clinical endpoints, not a pharmacokinetic study with quantitative disposition parameters. |
| PD | Goker-Alpan_2016 | not_relevant | 1 | 0 | The paper reports clinical efficacy endpoints (changes in biomarkers and cardiac function) over time but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Gregório_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on chloroquine and agalsidase-beta (not alfa) with no pharmacokinetic parameters reported. |
| PD | Gregório_2021 | not_relevant | 2 | 1 | The paper describes a qualitative dose-dependent cytotoxicity effect of chloroquine and a protective effect of agalsidase-beta, but it does not report numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for agalsidase alfa. |
| PGx | Hallows_2023 | not_relevant | 0 | 0 | The paper reports on engineered protein variants (GLAv05/GLAv09) for improved stability and PK, not on how patient genetic variants (pharmacogenomics) affect the PK/PD of agalsidase alfa. |
| popPK | Hennermann_2019 | irrelevant | 0 | 0 | The study investigates moss-aGalactosidase A (moss-aGal), a different drug entity, rather than agalsidase alfa. |
| PD | Hennermann_2019 | not_relevant | 3 | 2 | The paper reports qualitative changes in PD biomarkers (Gb3, lyso-Gb3) after a single dose but does not provide a concentration-effect model, dose-response curve, or numeric PD parameters (e.g., Emax, EC50). |
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
| PGx | Knol_1999 | not_relevant | 0 | 0 | The paper describes natural history and phenotypic variability in Fabry disease patients with a specific mutation, but does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa. |
| popPK | Kwon_2000 | irrelevant | 0 | 0 | The paper describes the isolation and enzymatic inhibition of a fungal metabolite (cyclo(Deala-L-Leu)) and contains no pharmacokinetic data for agalsidase alfa. |
| PD | Kwon_2000 | not_relevant | 0 | 0 | The paper reports the isolation and enzymatic inhibition of a fungal metabolite (cyclo(Deala-L-Leu)), not the pharmacodynamics of the drug agalsidase alfa. |
| popPK | Laftouhi_2024 | irrelevant | 0 | 0 | The paper studies Rosmarinus officinalis essential oils and their effects on α-galactosidase (an enzyme), not the drug agalsidase alfa, and contains no pharmacokinetic parameters. |
| PD | Laftouhi_2024 | not_relevant | 0 | 0 | The paper analyzes plant essential oils and their biochemical properties, not the pharmacodynamics of the drug agalsidase alfa. |
| popPK | Lettieri_1998 | irrelevant | 0 | 0 | The study investigates acarbose and Beano, not agalsidase alfa, and reports pharmacodynamic/tolerability data rather than PK parameters. |
| PD | Lettieri_1998 | not_relevant | 0 | 0 | The paper studies acarbose and Beano, not agalsidase alfa. |
| popPK | Lohith_2023 | irrelevant | 0 | 0 | The paper describes the development of a PET imaging probe ([18F]AGAL) targeting the enzyme alpha-galactosidase A, not the pharmacokinetics of the drug agalsidase alfa. |
| PD | Lohith_2023 | not_relevant | 0 | 0 | The paper reports the radiosynthesis and in vitro/in vivo evaluation of a PET imaging probe ([18F]AGAL), not the pharmacodynamics of the therapeutic drug agalsidase alfa; the reported IC50 is for the tracer's binding affinity, not a therapeutic dose-response relationship. |
| PGx | Lukas_2013 | not_relevant | 0 | 0 | The paper characterizes GLA mutations and their effect on enzyme activity and biomarkers (lyso-Gb3) for Fabry disease diagnosis, but does not report pharmacokinetic or pharmacodynamic parameters of the drug agalsidase alfa. |
| PGx | Lukas_2020 | not_relevant | 0 | 0 | The paper focuses on the pharmacological chaperone 1-deoxygalactonojirimycin (DGJ) and its interaction with GLA variants, not on the pharmacokinetics or pharmacodynamics of agalsidase alfa. |
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
| PGx | Perrone_2021 | not_relevant | 0 | 0 | The paper describes a method for quantifying a biomarker (lyso-Gb3) in Fabry disease patients but does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa or any other drug. |
| popPK | Popp_2021 | irrelevant | 0 | 0 | The paper is a systematic review of antibiotics for COVID-19 and does not involve agalsidase_alfa or report any pharmacokinetic parameters. |
| PD | Popp_2021 | not_relevant | 0 | 0 | The paper is a systematic review of antibiotics for COVID-19 and does not mention agalsidase alfa or report any pharmacodynamic parameters. |
| popPK | Ramaswami_2025 | irrelevant | 0 | 0 | The study evaluates migalastat, not agalsidase alfa, and does not report PK parameters for the target drug. |
| PD | Ramaswami_2025 | not_relevant | 1 | 0 | The paper reports qualitative stability of pharmacodynamic markers (lyso-Gb3) and clinical outcomes but does not provide numeric PD parameters or an exposure-response model. |
| PGx | Reková_2021 | not_relevant | 0 | 0 | The paper describes clinical phenotypes and variant classification in Fabry disease patients but does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa. |
| PGx | Reynolds_2021 | not_relevant | 0 | 0 | The paper describes a diagnostic screening study for Fabry disease using routine pathology results and does not report pharmacokinetic or pharmacodynamic effects of agalsidase alfa. |
| PD | Ries_2007 | not_relevant | 3 | 1 | The paper reports PK parameters and qualitative PD observations (reduction in globotriaosylceramide) but explicitly states the PD effect was independent of PK parameters and provides no numeric PD parameters (Emax, EC50, etc.) or concentration-effect curves. |
| PGx | Rodríguez_2023 | not_relevant | 0 | 0 | The paper discusses X chromosome inactivation in Fabry disease but does not report pharmacokinetic or pharmacodynamic parameters of agalsidase alfa. |
| PGx | San_2023 | not_relevant | 0 | 0 | The paper describes morphological hallmarks and tissue deposits in Fabry disease patients but does not report pharmacokinetic or pharmacodynamic parameters of agalsidase alfa. |
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
| PGx | Tsujiuchi_2019 | not_relevant | 0 | 0 | The paper is a clinical case report on the efficacy of enzyme replacement therapy in Fabry disease patients, focusing on disease progression and genotype-phenotype correlation, rather than reporting pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of agalsidase alfa. |
| PGx | Tuttolomondo_2017 | not_relevant | 0 | 0 | The paper describes natural history and genotype-phenotype correlation in Fabry disease, not the pharmacokinetics or pharmacodynamics of agalsidase alfa. |
| PGx | Usenko_2023 | not_relevant | 0 | 0 | The paper investigates lysosomal enzyme activities and gene variants in schizophrenia patients, not the pharmacokinetics or pharmacodynamics of agalsidase alfa. |
| popPK | Verma_2004 | irrelevant | 0 | 0 | The paper studies gene expression in yeast and is unrelated to the pharmacokinetics of the drug agalsidase alfa. |
| PD | Verma_2004 | not_relevant | 0 | 0 | The paper describes a mathematical model for gene expression in yeast (Saccharomyces cerevisiae) and does not involve the drug agalsidase alfa or any pharmacodynamic analysis. |
| PGx | Yeniçerioğlu_2017 | not_relevant | 0 | 0 | The paper reports the prevalence of Fabry disease in CKD patients and identifies genetic variants associated with the disease, but it does not report pharmacogenomic effects on the PK or PD parameters of agalsidase alfa. |
| PGx | Yogasundaram_2018 | not_relevant | 0 | 0 | The paper discusses chloroquine-induced cardiomyopathy and mentions alpha-galactosidase A polymorphism in the context of Fabry disease phenocopy, but does not report pharmacogenomic effects on the PK or PD of agalsidase alfa. |
| popPK | Ziegler_2002 | irrelevant | 0 | 0 | The paper focuses on gene therapy using adenoviral vectors in mice and does not report pharmacokinetic parameters for the drug agalsidase_alfa. |
| PD | Ziegler_2002 | not_relevant | 3 | 2 | The paper describes a qualitative nonlinear dose-response relationship for an adenoviral vector (gene therapy) in mice, not a pharmacodynamic model for the drug agalsidase alfa, and lacks extractable numeric PD parameters like Emax or EC50. |
| PGx | Zou_2025 | not_relevant | 0 | 0 | The paper focuses on protein engineering of a microbial enzyme for industrial stability, not on human pharmacogenomics or the PK/PD of the drug agalsidase alfa. |
| popPK | van_2023 | irrelevant | 0 | 0 | The study focuses on agalsidase beta (and its biosimilar), not agalsidase alfa, and does not report quantitative PK parameters for the target drug. |
| PGx | Živná_2025 | not_relevant | 0 | 0 | The paper discusses the pathophysiology of Fabry disease variants and ER stress, not the pharmacokinetics or pharmacodynamics of the drug agalsidase alfa. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
