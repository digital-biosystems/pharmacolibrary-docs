<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Paritaprevir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Paritaprevir_Mensing2016_reference&quot;,&quot;label&quot;:&quot;Mensing_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_paritaprevir/Paritaprevir_Mensing2016_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Paritaprevir

- **generic name:** Paritaprevir
- **ATC codes:** `J05AP52`, `J05AP53`
- **DrugBank:** [DB09297](https://go.drugbank.com/drugs/DB09297) · **PubChem:** [CID 68498031](https://pubchem.ncbi.nlm.nih.gov/compound/68498031)
- **molar mass:** 765.89 g/mol (C40H43N7O7S) — DrugBank
- **groups:** approved

## About

Paritaprevir is an antiviral drug used to treat hepatitis C virus infections. It is an approved medicine and has been included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q16824572](https://www.wikidata.org/wiki/Q16824572) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| paritaprevir | parent | 765.89 | C40H43N7O7S | DrugBank | [68498031](https://pubchem.ncbi.nlm.nih.gov/compound/68498031) | Mensing_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:24 | 10:41 | 1/0/0 | 3/0/1 | 0/0/0 | 263,563/28,037 | ollama / glm-5.3-flash | 12 | 1/10 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Mensing_2016_reference](drugs/drug_paritaprevir/Paritaprevir_Mensing2016_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Mensing S et al., Population Pharmacokinetics of Paritapr…, The AAPS journal (2016) | [10.1208/s12248-015-9846-1](https://doi.org/10.1208/s12248-015-9846-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gammeltoft_2021_residual_infectivity](drugs/drug_paritaprevir/pd_Gammeltoft_2021_residual_infectivity.md) | percent residual infectivity (SARS-CoV-2 spike protein-positive cells relative to infected nontreated controls) ← paritaprevir · direct sigmoid Emax (Hill) effect | — | Gammeltoft KA et al., Hepatitis C Virus Protease Inhibitors S…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02680-20](https://doi.org/10.1128/AAC.02680-20) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gopalakrishnan_2016_Peripheral_edema](drugs/drug_paritaprevir/pd_Gopalakrishnan_2016_Peripheral_edema.md) | Peripheral edema ≥ grade 1 ← paritaprevir · direct linear effect | — | Gopalakrishnan S et al., Exposure-Response Relationship for Ombi…, Advances in therapy (2016) | [10.1007/s12325-016-0320-y](https://doi.org/10.1007/s12325-016-0320-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Gopalakrishnan_2016_Total_bilirubin_elevation](drugs/drug_paritaprevir/pd_Gopalakrishnan_2016_Total_bilirubin_elevation.md) | Total bilirubin elevation ≥ grade 2 ← paritaprevir · direct linear effect | — | Gopalakrishnan S et al., Exposure-Response Relationship for Ombi…, Advances in therapy (2016) | [10.1007/s12325-016-0320-y](https://doi.org/10.1007/s12325-016-0320-y) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Polepally_2017_2_SVR12](drugs/drug_paritaprevir/pd_Polepally_2017_2_SVR12.md) | sustained virologic response at week 12 post-treatment ← paritaprevir · model not identified | — | Polepally AR et al., Application of Exposure-Response Analys…, The AAPS journal (2017) | [10.1208/s12248-017-0115-3](https://doi.org/10.1208/s12248-017-0115-3) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Khatri_2016_SVR12](drugs/drug_paritaprevir/pd_Khatri_2016_SVR12.md) | Sustained virologic response at 12 weeks after treatment (SVR12) ← paritaprevir · categorical (graded) response model | — | Khatri A et al., Exposure-Efficacy Analyses of Ombitasvi…, Clinical drug investigation (2016) | [10.1007/s40261-016-0407-x](https://doi.org/10.1007/s40261-016-0407-x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=paritaprevir) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor/substrate, `SLCO1B3` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 297 matched, 69 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gopalakrishnan_2017.pdf` | Gopalakrishnan SM et al., Population Pharmacokinetics of Paritapr…, Clinical pharmacokinetics (2017) | popPK | 10 | [10.1007/s40262-016-0423-2](https://doi.org/10.1007/s40262-016-0423-2) | [27314261](https://pubmed.ncbi.nlm.nih.gov/27314261) | Population PK models for paritaprevir in Japanese HCV patients, but numeric parameter values (CL, V, ka) are not shown in the abstract/evidence provided. |
| `Gopalakrishnan_2018.pdf` | Gopalakrishnan S et al., Population Pharmacokinetics of Paritapr…, Clinical pharmacokinetics (2018) | popPK | 10 | [10.1007/s40262-018-0640-y](https://doi.org/10.1007/s40262-018-0640-y) | [29516428](https://pubmed.ncbi.nlm.nih.gov/29516428) | Population PK model of paritaprevir in humans, but numeric parameter estimates are not shown in the provided evidence (likely in tables/figures not included). |
| `Mensing_2017.pdf` | Mensing S et al., Population pharmacokinetics of paritapr…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13138](https://doi.org/10.1111/bcp.13138) | [27662429](https://pubmed.ncbi.nlm.nih.gov/27662429) | Population PK model of paritaprevir in humans, but numeric parameter estimates are not shown in the provided evidence (likely in tables/supplement not included). |
| `Polepally_2016.pdf` | Polepally AR et al., Dose- and Formulation-Dependent Non-Lin…, Clinical pharmacokinetics (2016) | popPK | 10 | [10.1007/s40262-016-0385-4](https://doi.org/10.1007/s40262-016-0385-4) | [27000758](https://pubmed.ncbi.nlm.nih.gov/27000758) | Population PK model of paritaprevir in healthy volunteers, but numeric parameter estimates (CL, V, ka) are not shown in the provided evidence, likely in tables/supplementary material. |
| `Polepally_2017.pdf` | Polepally AR et al., Effects of Mild and Moderate Renal Impa…, European journal of drug me… (2017) | popPK | 8 | [10.1007/s13318-016-0341-6](https://doi.org/10.1007/s13318-016-0341-6) | [27165046](https://pubmed.ncbi.nlm.nih.gov/27165046) | Population PK modeling includes paritaprevir AUC in HCV patients, but the numeric parameter values (AUCs, model estimates) are not shown in the provided evidence text and likely reside in tables/supplements. |
| `Polepally_2016_2.pdf` | Polepally AR et al., Effect of co-medications on paritaprevi…, Antiviral therapy (2016) | popPK | 7 | [10.3851/IMP3079](https://doi.org/10.3851/IMP3079) | [27584548](https://pubmed.ncbi.nlm.nih.gov/27584548) | Population PK analysis of paritaprevir CL/F in HCV patients, but specific numeric parameter values (AUC ratios, CL/F estimates) are not shown in the abstract text. |
| `Gopalakrishnan_2016.pdf` | Gopalakrishnan S et al., Exposure-Response Relationship for Ombi…, Advances in therapy (2016) | pd | 5 | [10.1007/s12325-016-0320-y](https://doi.org/10.1007/s12325-016-0320-y) | [27084721](https://www.ncbi.nlm.nih.gov/pubmed/27084721) | metadata signals extractable PD data (Exposure-Response) |
| `Khatri_2016.pdf` | Khatri A et al., Exposure-Efficacy Analyses of Ombitasvi…, Clinical drug investigation (2016) | pd | 5 | [10.1007/s40261-016-0407-x](https://doi.org/10.1007/s40261-016-0407-x) | [27153823](https://www.ncbi.nlm.nih.gov/pubmed/27153823) | metadata signals extractable PD data (exposure-response) |
| `King_2017.pdf` | King JR et al., Pharmacokinetic Evaluation of Darunavir…, Antimicrobial agents and ch… (2017) | pd | 5 | [10.1128/AAC.02135-16](https://doi.org/10.1128/AAC.02135-16) | [27919899](https://www.ncbi.nlm.nih.gov/pubmed/27919899) | metadata signals extractable PD data (EC50) |
| `Shen_2016.pdf` | Shen J et al., Metabolism and Disposition of Hepatitis…, Drug metabolism and disposi… (2016) | pgx | 8 | [10.1124/dmd.115.067512](https://doi.org/10.1124/dmd.115.067512) | [27179126](https://www.ncbi.nlm.nih.gov/pubmed/27179126) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Alam_2017.pdf` | Alam N et al., Mechanism of in-vitro inhibition of UGT…, The Journal of pharmacy and… (2017) | pgx | 7 | [10.1111/jphp.12821](https://doi.org/10.1111/jphp.12821) | [28990653](https://www.ncbi.nlm.nih.gov/pubmed/28990653) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Talavera_2017.pdf` | Talavera Pons S et al., Managing drug-drug interactions with ne…, British journal of clinical… (2017) | pgx | 7 | [10.1111/bcp.13095](https://doi.org/10.1111/bcp.13095) | [27530469](https://www.ncbi.nlm.nih.gov/pubmed/27530469) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T18:19:15.157066+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alam_2017 | not_relevant | 2 | 5 | In-vitro enzyme inhibition study of paritaprevir on UGT1A1; no gene variant/genotype effect on paritaprevir PK/PD reported. |
| PGx | Asselah_2015 | not_relevant | 0 | 0 | Review of HCV genotype 4 treatments with no pharmacogenomic effects on paritaprevir PK/PD reported. |
| PGx | Atsukawa_2017 | not_relevant | 2 | 3 | Reports NS5A resistance substitutions (L31, Y93) linked to virologic response, not a gene variant effect on paritaprevir PK/PD parameters. |
| popPK | Badri_2016 | irrelevant | 2 | 0 | The population PK model is for tacrolimus (and CSA troughs); paritaprevir is only part of the co-administered 3D regimen with no PK parameters for it. |
| PGx | Burgess_2015 | not_relevant | 0 | 0 | Review of drug–drug interactions with DAAs; no gene variant/genotype effects on paritaprevir PK/PD reported. |
| PGx | Cheng_2015 | not_relevant | 0 | 0 | Abstract of a review on PrOD efficacy/safety; no pharmacogenomic effects on PK/PD parameters reported. |
| PGx | Elmowafy_2019 | not_relevant | 0 | 0 | No pharmacogenomic data; only HCV viral genotype and clinical efficacy/safety reported. |
| PGx | Fofiu_2019 | not_relevant | 0 | 0 | No pharmacogenomic analysis or PK/PD parameter data for paritaprevir is reported; only SVR12 efficacy outcomes. |
| PGx | Fuchs_2020 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on paritaprevir PK or PD parameters are reported; only HCV genotype and viral resistance substitutions are discussed. |
| popPK | Gammeltoft_2021 | irrelevant | 0 | 0 | In-vitro antiviral potency study (EC50/CC50) of HCV protease inhibitors against SARS-CoV-2; no PK disposition parameters for paritaprevir. |
| popPK | Gopalakrishnan_2016 | irrelevant | 3 | 2 | This is an exposure-response safety analysis; no quantitative PK disposition parameters (CL, V, half-life) for paritaprevir are reported, only exposure metrics referenced without numeric values. |
| popPK | Gopalakrishnan_2017 | relevant | 10 | 3 | Population PK models for paritaprevir in Japanese HCV patients, but numeric parameter values (CL, V, ka) are not shown in the abstract/evidence provided. |
| PGx | Gopalakrishnan_2017 | not_relevant | 0 | 0 | Covariates are clinical (cirrhosis, sex, renal function); no gene variant/genotype effects on paritaprevir PK reported. |
| popPK | Gopalakrishnan_2018 | relevant | 10 | 3 | Population PK model of paritaprevir in humans, but numeric parameter estimates are not shown in the provided evidence (likely in tables/figures not included). |
| PGx | Huang_2016 | not_relevant | 0 | 0 | Case report of shortened PROD therapy; no gene variant/genotype effect on paritaprevir PK/PD reported. |
| PGx | Hunyady_2015 | not_relevant | 0 | 0 | Hungarian HCV treatment policy overview; no pharmacogenomic PK/PD data for paritaprevir. |
| PGx | Hunyady_2015_2 | not_relevant | 0 | 0 | Hungarian HCV treatment policy overview; no pharmacogenomic PK/PD data for paritaprevir. |
| PGx | Hussaini_2016 | not_relevant | 0 | 0 | Review of clinical trials and drug–drug interactions; no host gene variant/genotype effects on paritaprevir PK/PD reported. |
| PGx | Hézode_2016 | not_relevant | 0 | 0 | Review of ribavirin use in HCV regimens; no gene variant effects on paritaprevir PK/PD reported. |
| PGx | Isakov_2018 | not_relevant | 0 | 0 | Trial reports only SVR and safety outcomes; no pharmacogenomic effects on paritaprevir PK/PD parameters. |
| PGx | Kan_2017 | not_relevant | 2 | 3 | Paper reports viral resistance variants affecting SVR and lipid changes, not a gene variant effect on paritaprevir PK/PD parameters. |
| popPK | King_2017 | irrelevant | 3 | 2 | Paritaprevir is only a co-administered component; reported PK parameters are for darunavir/ritonavir, and 3D exposures are only compared qualitatively to historical data with no paritaprevir parameter values present. |
| PGx | King_2017_2 | not_relevant | 0 | 0 | Abstract describes drug-drug interaction studies only; no pharmacogenomic effects on paritaprevir PK/PD reported. |
| PGx | Klibanov_2015 | not_relevant | 0 | 0 | Narrative review of efficacy/safety only; no gene variant effects on paritaprevir PK/PD reported. |
| PGx | Lalezari_2015 | not_relevant | 0 | 0 | The study examines drug-drug interactions with methadone/buprenorphine, not pharmacogenomic effects on paritaprevir PK/PD. |
| PGx | Lam_2016 | not_relevant | 0 | 0 | Narrative review of Viekira efficacy/safety with no pharmacogenomic effects on paritaprevir PK/PD reported. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | Cost-effectiveness model of HCV regimens; IL-28B genotype affects SVR only for older interferon regimens, no pharmacogenomic effect on paritaprevir PK/PD parameters. |
| PGx | Loo_2019 | not_relevant | 0 | 0 | Real-world efficacy/safety study of OBV/PTV/r+DSV; no host gene variant effects on paritaprevir PK/PD parameters reported. |
| PGx | Maghrabi_2019 | not_relevant | 0 | 0 | No pharmacogenomic analysis; only clinical efficacy/safety of DAAs in transplant recipients. |
| PGx | Mensing_2016 | not_relevant | 3 | 5 | CYP2C8 inhibitor use (a drug interaction, not a gene variant/genotype/phenotype) affected paritaprevir CL/F; no pharmacogenomic variant effects are reported. |
| popPK | Mensing_2017 | relevant | 10 | 3 | Population PK model of paritaprevir in humans, but numeric parameter estimates are not shown in the provided evidence (likely in tables/supplement not included). |
| PGx | Mensing_2017 | not_relevant | 0 | 0 | Covariates are demographic/clinical only; no gene variant/genotype/phenotype effects on paritaprevir PK reported. |
| PGx | Minaei_2015 | not_relevant | 0 | 0 | Review abstract mentions PK/PD of paritaprevir but no gene variant effects on PK/PD parameters. |
| popPK | Pham_2019 | irrelevant | 0 | 0 | In-vitro virology study of HCV resistance (EC50 assays), no pharmacokinetic disposition parameters for paritaprevir. |
| PGx | Pineda_2018 | not_relevant | 0 | 0 | The paper reports efficacy/safety of PrOD in HIV/HCV coinfection with no pharmacogenomic effects on paritaprevir PK/PD parameters. |
| popPK | Polepally_2016 | relevant | 10 | 3 | Population PK model of paritaprevir in healthy volunteers, but numeric parameter estimates (CL, V, ka) are not shown in the provided evidence, likely in tables/supplementary material. |
| popPK | Polepally_2016_2 | relevant | 7 | 3 | Population PK analysis of paritaprevir CL/F in HCV patients, but specific numeric parameter values (AUC ratios, CL/F estimates) are not shown in the abstract text. |
| PGx | Polepally_2016_2 | not_relevant | 0 | 0 | The paper examines co-medication effects on paritaprevir PK, not gene variant/genotype/phenotype effects. |
| popPK | Polepally_2017 | relevant | 8 | 4 | Population PK modeling includes paritaprevir AUC in HCV patients, but the numeric parameter values (AUCs, model estimates) are not shown in the provided evidence text and likely reside in tables/supplements. |
| PGx | Polepally_2017 | not_relevant | 0 | 0 | Covariates studied are renal function, age, sex, weight, cirrhosis, race—no gene variant/genotype effects on paritaprevir PK. |
| popPK | Polepally_2017_2 | irrelevant | 3 | 2 | Exposure-response/bioequivalence study; only relative exposure ratios (Cmax, Ctrough % differences) are mentioned, no disposition PK parameters (CL, V, half-life) for paritaprevir. |
| PGx | Polepally_2017_2 | not_relevant | 0 | 0 | No gene variant/genotype effects on paritaprevir PK/PD are reported; only bioequivalence and exposure-response analyses. |
| popPK | Poordad_2016 | irrelevant | 3 | 1 | Clinical efficacy/safety study; PK was non-compartmental but no numeric paritaprevir disposition parameters appear in the text (troughs only in a figure, "data on file"). |
| PGx | Rivero-Juarez_2018 | not_relevant | 0 | 0 | Study compares cholesterol changes between HCV regimens; no gene variant/genotype effect on paritaprevir PK/PD reported. |
| PGx | Schneider_2015 | not_relevant | 0 | 0 | Review overview of HCV treatment regimens with no pharmacogenomic PK/PD data for paritaprevir. |
| PGx | Shen_2016 | not_relevant | 0 | 0 | Paper concerns dasabuvir metabolism, not paritaprevir pharmacogenomics. |
| PGx | Shen_2016_2 | not_relevant | 0 | 0 | Mass balance/metabolism study of ombitasvir with no gene variant effects on paritaprevir PK/PD reported. |
| PGx | Smith_2015 | not_relevant | 2 | 3 | IL28B genotype affects SVR (PD efficacy outcome) but no gene variant alters a PK parameter of paritaprevir; no fitted effect sizes reported. |
| PGx | Talal_2018 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on paritaprevir PK/PD are reported; only RBV dosing effects on HCV RNA decline. |
| PGx | Talavera_2017 | not_relevant | 0 | 0 | Review of DDI management with DAAs; no pharmacogenomic effects on paritaprevir PK/PD reported. |
| PGx | Toussaint-Miller_2015 | not_relevant | 0 | 0 | Review abstract on HCV treatment populations; no gene variant effects on paritaprevir PK/PD reported. |
| popPK | Wisløff_2018 | irrelevant | 0 | 0 | This is a health-economic cost-effectiveness evaluation of hepatitis C treatments; paritaprevir appears only as a treatment option with efficacy/cost data, no PK parameters. |
| PGx | Younossi_2016 | not_relevant | 0 | 0 | Economic modeling study of HCV treatment costs; no pharmacogenomic effects on paritaprevir PK/PD parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:19 UTC</sub>
