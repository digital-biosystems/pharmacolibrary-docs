<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;dasabuvir&quot;}]"></div>

# dasabuvir

- **generic name:** dasabuvir
- **ATC codes:** `J05AP09`
- **DrugBank:** [DB09183](https://go.drugbank.com/drugs/DB09183) · **PubChem:** [CID 56640146](https://pubchem.ncbi.nlm.nih.gov/compound/56640146)
- **molar mass:** 493.58 g/mol (C26H27N3O5S) — DrugBank
- **groups:** approved

## About

Dasabuvir is an antiviral medicine used to treat chronic hepatitis C infection. It has been an approved medicine and was included on the WHO essential medicines list, although its authorisation in the European Union has since been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19462214](https://www.wikidata.org/wiki/Q19462214) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dasabuvir | parent | 493.58 | C26H27N3O5S | DrugBank | [56640146](https://pubchem.ncbi.nlm.nih.gov/compound/56640146) | Mensing_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:26 | 12:52 | 0/2/0 | 1/0/1 | 0/0/0 | 214,716/25,509 | einfracz / qwen3.8-27b | 16 | 3/12 | 15/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [Mensing_2016_reference](drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference.md) | — | 2-compartment (no model) | 5 | Mensing S et al., Population Pharmacokinetics of Paritapr…, The AAPS journal (2016) | [10.1208/s12248-015-9846-1](https://doi.org/10.1208/s12248-015-9846-1) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mensing_2017_reference](drugs/drug_dasabuvir/Dasabuvir_Mensing2017_reference.md) | — | 1-compartment (no model) | 0 | Mensing S et al., Population pharmacokinetics of paritapr…, British journal of clinical… (2017) | [10.1111/bcp.13138](https://doi.org/10.1111/bcp.13138) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Uppal_2022_SARS_CoV_2](drugs/drug_dasabuvir/pd_Uppal_2022_SARS_CoV_2.md) | SARS-CoV-2 genomic RNA biomarker turnover ← dasabuvir | — | Uppal T et al., Screening of SARS-CoV-2 antivirals thro…, Cell insight (2022) | [10.1016/j.cellin.2022.100046](https://doi.org/10.1016/j.cellin.2022.100046) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Polepally_2017_2_SVR12](drugs/drug_dasabuvir/pd_Polepally_2017_2_SVR12.md) | sustained virologic response at week 12 post-treatment ← dasabuvir · time-to-event model | — | Polepally AR et al., Application of Exposure-Response Analys…, The AAPS journal (2017) | [10.1208/s12248-017-0115-3](https://doi.org/10.1208/s12248-017-0115-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dasabuvir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCB5 (substrate), Genome polyprotein (inhibitor), NS5b (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 265 matched, 88 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gopalakrishnan_2018.pdf` | Gopalakrishnan S et al., Population Pharmacokinetics of Paritapr…, Clinical pharmacokinetics (2018) | popPK | 10 | [10.1007/s40262-018-0640-y](https://doi.org/10.1007/s40262-018-0640-y) | [29516428](https://pubmed.ncbi.nlm.nih.gov/29516428) | The paper reports a population PK model for dasabuvir in humans, but no numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Mensing_2017.pdf` | Mensing S et al., Population pharmacokinetics of paritapr…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13138](https://doi.org/10.1111/bcp.13138) | [27662429](https://pubmed.ncbi.nlm.nih.gov/27662429) | The paper is a direct population PK study for dasabuvir in humans, but the specific numeric parameter values are not explicitly listed in the provided evidence text (likely in tables or figures). |
| `Polepally_2016.pdf` | Polepally AR et al., Effect of co-medications on paritaprevi…, Antiviral therapy (2016) | popPK | 9 | [10.3851/IMP3079](https://doi.org/10.3851/IMP3079) | [27584548](https://pubmed.ncbi.nlm.nih.gov/27584548) | The study presents a population pharmacokinetic analysis including dasabuvir clearance (CL/F), but specific numeric parameter values are not explicitly listed in the provided abstract text. |
| `Polepally_2017.pdf` | Polepally AR et al., Effects of Mild and Moderate Renal Impa…, European journal of drug me… (2017) | popPK | 8 | [10.1007/s13318-016-0341-6](https://doi.org/10.1007/s13318-016-0341-6) | [27165046](https://pubmed.ncbi.nlm.nih.gov/27165046) | The paper reports results of a population PK model for dasabuvir, but specific numeric parameter estimates (CL, V, Q) are not listed in the provided text; only covariate relationships and relative AUC differences are described. |

<sub>queue written 2026-10-07T13:22:45.415598+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bacinschi_2022 | not_relevant | 0 | 0 | The paper examines the effect of the drug on glycemic control (glucose/HbA1c) rather than how a genetic variant affects the drug's PK/PD. |
| PGx | Backman_2016 | not_relevant | 5 | 2 | This is a general review of CYP2C8 pharmacogenetics and mentions dasabuvir only as a substrate without reporting specific PK/PD effect sizes for the drug. |
| popPK | Badri_2016 | irrelevant | 0 | 0 | This study focuses on the pharmacokinetics of tacrolimus and cyclosporine, using dasabuvir only as a co-administered interacting agent. |
| PGx | Burgess_2015 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions involving dasabuvir and does not report any pharmacogenomic effects (gene variants) on its pharmacokinetics or pharmacodynamics. |
| PGx | Cheng_2015 | not_relevant | 0 | 0 | The paper is a clinical review of the drug regimen's efficacy and safety, with no mention of genetic variants or pharmacogenomics. |
| PGx | Chetty_2021 | not_relevant | 1 | 0 | The paper mentions dasabuvir only to note that its exposure increases after co-administration with clopidogrel, without reporting any pharmacogenomic effects on dasabuvir's PK/PD parameters. |
| PGx | Colombo_2015 | not_relevant | 0 | 0 | The text is a review regarding health policy, reimbursement restrictions, and general treatment efficacy in Italy, with no data on pharmacogenomics or PK/PD parameters. |
| PGx | Doyle_2019 | not_relevant | 0 | 0 | The paper does not report on any gene variants, genotypes, or pharmacogenomic effects; it studies metabolic effects of the drug in HCV patients. |
| PGx | Flisiak_2017 | not_relevant | 0 | 0 | The paper reports overall real-world efficacy (SVR) and safety data for Hepatitis C treatments and does not discuss pharmacogenomic effects on PK/PD parameters of dasabuvir. |
| PGx | Flisiak_2017_2 | not_relevant | 0 | 0 | The paper is a general review of the ombitasvir/paritaprevir/dasabuvir regimen for HCV and does not report specific pharmacogenomic effects on PK or PD parameters. |
| PGx | Fofiu_2019 | not_relevant | 0 | 0 | The paper evaluates the efficacy and safety of the dasabuvir regimen in HCV patients based on treatment history, without investigating any gene variants, genotypes, or phenotypes related to pharmacokinetics or pharmacodynamics. |
| PGx | Fuchs_2020 | not_relevant | 0 | 0 | The paper is a clinical efficacy study of HCV treatment in veterans and does not report any pharmacogenomic analysis of dasabuvir PK/PD parameters. |
| PGx | Gentile_2014 | not_relevant | 0 | 0 | The paper reviews ombitasvir, not dasabuvir, and discusses general pharmacokinetics without reporting any pharmacogenomic effects. |
| PGx | Gogela_2015 | not_relevant | 0 | 0 | The text is a general review of HCV therapies and does not discuss pharmacogenomics or gene variants affecting dasabuvir PK/PD. |
| popPK | Gopalakrishnan_2018 | relevant | 10 | 0 | The paper reports a population PK model for dasabuvir in humans, but no numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| PGx | Huang_2016 | not_relevant | 0 | 0 | The paper is a case report of viral clearance kinetics and does not investigate the effect of gene variants on the pharmacokinetics or pharmacodynamics of dasabuvir. |
| PGx | Hunyady_2015 | not_relevant | 0 | 0 | The text is a health policy review of Hepatitis C treatment guidelines in Hungary and does not discuss dasabuvir or pharmacogenomics. |
| PGx | Hunyady_2015_2 | not_relevant | 0 | 0 | The paper discusses hepatitis C treatment guidelines in Hungary and mentions boceprevir and telaprevir, but does not report pharmacogenomic effects for dasabuvir. |
| PGx | Hussaini_2016 | not_relevant | 0 | 0 | The paper is a general clinical review of the Dasabuvir regimen and does not report specific gene variants or genotypes affecting PK or PD parameters. |
| PGx | Hézode_2016 | not_relevant | 0 | 0 | The paper discusses clinical treatment regimens and the role of ribavirin in HCV therapy but does not report any pharmacogenomic effects on dasabuvir PK or PD parameters. |
| PGx | Isakov_2018 | not_relevant | 0 | 0 | The paper is a clinical trial reporting efficacy (SVR) and safety outcomes, and does not investigate the influence of gene variants on dasabuvir pharmacokinetics or pharmacodynamics. |
| PGx | Itkonen_2019 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (pharmacokinetic effect of clopidogrel on dasabuvir), not a pharmacogenomic effect (no analysis of gene variants/genotypes). |
| popPK | Kati_2015 | irrelevant | 0 | 0 | The paper describes in vitro antiviral activity and resistance profiles, not pharmacokinetic parameters for dasabuvir. |
| popPK | King_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of darunavir, with dasabuvir only serving as a co-administered comparator drug without specific quantitative disposition parameters reported for it. |
| PGx | King_2017_2 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) with antiretrovirals and substance abuse medications, not pharmacogenomic effects on dasabuvir. |
| PGx | Klibanov_2015 | not_relevant | 0 | 0 | The paper is a clinical review of efficacy and safety, not a pharmacogenomic study reporting how genetic variants affect dasabuvir pharmacokinetics or pharmacodynamics. |
| PGx | Lalezari_2015 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions with opioid replacement therapy (methadone/buprenorphine), not the impact of gene variants or genotypes on dasabuvir PK/PD parameters. |
| PGx | Lam_2016 | not_relevant | 0 | 0 | The text is a general review of the drug's efficacy and safety profile, containing no information regarding gene variants or genotypes affecting pharmacokinetics or pharmacodynamics. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | The paper is a cost-effectiveness analysis of HCV treatments and mentions IL-28B genotype only in the context of predicting treatment response for older interferon-based regimens, not regarding the pharmacokinetics or pharmacodynamics of dasabuvir. |
| PGx | Loo_2019 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of dasabuvir but does not investigate the impact of host gene variants on its pharmacokinetics or pharmacodynamics. |
| PGx | Mantry_2016 | not_relevant | 0 | 0 | The text is a general expert review of dasabuvir's clinical efficacy and safety, discussing drug interactions with CYP3A/2C9 inducers but not reporting pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| PGx | Mensing_2016 | not_relevant | 0 | 0 | The study reports population PK covariates such as age, weight, and CYP2C8 inhibitor use, but does not report the effect of specific gene variants or genotypes (e.g., CYP2C8 polymorphisms) on dasabuvir pharmacokinetics. |
| PGx | Mensing_2017 | not_relevant | 1 | 0 | The study analyzes population pharmacokinetics but reports only demographic and clinical covariates (e.g., age, weight), with no mention of genetic variants or pharmacogenomic effects on PK/PD. |
| PGx | Minaei_2015 | not_relevant | 0 | 0 | The paper is a general review of HCV treatments (Paritaprevir/Ombitasvir) and does not report on dasabuvir pharmacogenomics. |
| PGx | Persico_2018 | not_relevant | 0 | 0 | The study evaluates clinical efficacy (SVR) of DAA therapy in HCC patients and does not report pharmacogenomic associations with PK or PD parameters. |
| popPK | Polepally_2016 | relevant | 9 | 2 | The study presents a population pharmacokinetic analysis including dasabuvir clearance (CL/F), but specific numeric parameter values are not explicitly listed in the provided abstract text. |
| PGx | Polepally_2016 | not_relevant | 0 | 0 | The paper investigates the effect of co-medications on pharmacokinetics, not the effect of genetic variants/genotypes/phenotypes. |
| popPK | Polepally_2016_2 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of paritaprevir, where dasabuvir is only a co-administered drug. |
| popPK | Polepally_2017 | relevant | 8 | 2 | The paper reports results of a population PK model for dasabuvir, but specific numeric parameter estimates (CL, V, Q) are not listed in the provided text; only covariate relationships and relative AUC differences are described. |
| PGx | Polepally_2017 | not_relevant | 0 | 0 | The study evaluates the effect of renal impairment (creatinine clearance) on dasabuvir pharmacokinetics, not genetic variants. |
| popPK | Polepally_2017_2 | irrelevant | 0 | 0 | The study focuses on exposure-response analyses and bioequivalence of dasabuvir regimens without reporting quantitative population-pharmacokinetic parameter estimates (CL, V, Q, ka, etc.). |
| PGx | Polepally_2017_2 | not_relevant | 0 | 0 | The paper reports pharmacokinetic and pharmacodynamic comparisons between dosing regimens (QD vs BID) and food effects, but does not report any pharmacogenomic (genetic variant) effects on PK or PD parameters for dasabuvir. |
| PGx | Poordad_2014 | not_relevant | 0 | 0 | The paper is a phase 3 clinical trial evaluating the efficacy and safety of dasabuvir and other HCV drugs in patients with cirrhosis, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Ridruejo_2020 | not_relevant | 0 | 0 | The study assesses clinical efficacy and safety of antiviral drugs in CKD patients but does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Rivero-Juarez_2018 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction/differential effect of HCV regimens on cholesterol levels, not a pharmacogenomic effect (gene variant impact) on dasabuvir PK or PD. |
| PGx | San_2019 | not_relevant | 4 | 10 | The study investigates the metabolic effects of the CYP3A5*3 variant on asunaprevir, daclatasvir, and beclabuvir, but does not report findings for dasabuvir. |
| PGx | Schneider_2015 | not_relevant | 0 | 0 | The text discusses hepatitis C treatment and mentions dasabuvir but does not report pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Shen_2016 | not_relevant | 0 | 0 | The paper describes the mass balance and metabolism of paritaprevir, not dasabuvir, and does not report pharmacogenomic effects. |
| PGx | Shen_2016_2 | not_relevant | 0 | 0 | The paper describes the metabolism and disposition of ombitasvir, not dasabuvir, and does not report any pharmacogenomic effects. |
| PGx | Shen_2016_3 | not_relevant | 0 | 0 | The paper describes general human metabolism and disposition without investigating or reporting any gene variant or genotype effects on pharmacokinetic parameters. |
| PGx | Smith_2015 | not_relevant | 0 | 0 | The text does not report a pharmacogenomic effect (e.g., CYP2C8 variants) on dasabuvir PK; it only mentions CYP2C8 as a metabolic enzyme generally. |
| PGx | Stirnimann_2014 | not_relevant | 0 | 0 | The text is a review of Ombitasvir's development and clinical efficacy in Hepatitis C, containing no data on pharmacogenomic effects on Dasabuvir PK/PD. |
| PGx | Talal_2018 | not_relevant | 0 | 0 | The paper investigates the impact of ribavirin dosage on dasabuvir treatment efficacy/PK, not the impact of patient gene variants/genotypes. |
| PGx | Talavera_2017 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions and metabolic pathways for dasabuvir but does not report any effects of gene variants or genotypes on its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Toussaint-Miller_2015 | not_relevant | 0 | 0 | The paper is a clinical review of treatment considerations for special populations (e.g., renal, HIV) and does not report pharmacogenomic effects on dasabuvir PK/PD. |
| popPK | Uppal_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic and antiviral efficacy study using cell-based assays, reporting no pharmacokinetic parameters such as clearance or volume for dasabuvir. |
| PGx | Walker_2015 | not_relevant | 0 | 0 | The paper reports real-world effectiveness (SVR rates) of DAA regimens but does not investigate pharmacogenomic effects or report PK/PD parameter changes based on genetic variants. |
| popPK | Wisløff_2018 | irrelevant | 0 | 0 | The paper is an economic evaluation (cost-effectiveness analysis) of hepatitis C treatments and contains no pharmacokinetic parameter estimates for dasabuvir. |
| PGx | Wyles_2017 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (dasabuvir/darunavir) on PK parameters, not a pharmacogenomic effect (gene variant influence). |
| PGx | Younossi_2016 | not_relevant | 0 | 0 | The paper is an economic analysis of hepatitis C treatments and does not investigate pharmacogenomic effects on dasabuvir pharmacokinetics or pharmacodynamics. |
| PGx | Zeuzem_2014 | not_relevant | 0 | 0 | The paper is a clinical trial (SAPPHIRE-II) evaluating the efficacy and safety of dasabuvir, but it does not report pharmacogenomic analyses or genotype-specific effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Zha_2019 | not_relevant | 1 | 0 | The paper reports PK parameters for ritonavir and ribavirin in Asian vs. Western populations, but does not mention dasabuvir or any gene variant. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | The study investigates dasabuvir's drug-drug interaction (inhibition of APAP metabolism) in in-vitro systems, not the effect of a gene variant on dasabuvir's pharmacokinetics or pharmacodynamics. |
| PGx | Özdoğan_2020 | not_relevant | 0 | 0 | The study analyzes lipid and insulin changes in HCV patients without reporting any gene variants or pharmacogenomic data affecting the PK or PD of dasabuvir. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:22 UTC</sub>
