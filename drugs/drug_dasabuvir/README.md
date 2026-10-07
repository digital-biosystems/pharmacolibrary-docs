<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;dasabuvir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dasabuvir_Mensing2016_reference&quot;,&quot;label&quot;:&quot;Mensing_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-07 15:55 | 5:10 | 1/1/0 | 2/0/0 | 0/0/0 | 221,730/25,404 | ollama / glm-5.3-flash | 16 | 3/12 | 15/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Mensing_2016_reference](drugs/drug_dasabuvir/Dasabuvir_Mensing2016_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Mensing S et al., Population Pharmacokinetics of Paritapr…, The AAPS journal (2016) | [10.1208/s12248-015-9846-1](https://doi.org/10.1208/s12248-015-9846-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Mensing_2017_reference](drugs/drug_dasabuvir/Dasabuvir_Mensing2017_reference.md) | — | 1-compartment (no model) | 0 | Mensing S et al., Population pharmacokinetics of paritapr…, British journal of clinical… (2017) | [10.1111/bcp.13138](https://doi.org/10.1111/bcp.13138) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Polepally_2017_2_SVR12](drugs/drug_dasabuvir/pd_Polepally_2017_2_SVR12.md) | sustained virologic response at week 12 post-treatment ← dasabuvir · model not identified | — | Polepally AR et al., Application of Exposure-Response Analys…, The AAPS journal (2017) | [10.1208/s12248-017-0115-3](https://doi.org/10.1208/s12248-017-0115-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Uppal_2022_SARS_CoV_2_genome_copies_in_supernatant_B_1_617_2](drugs/drug_dasabuvir/pd_Uppal_2022_SARS_CoV_2_genome_copies_in_supernatant_B_1_617_2.md) | SARS-CoV-2 genome copies in supernatant (B.1.617.2) ← dasabuvir · inhibition effect | — | Uppal T et al., Screening of SARS-CoV-2 antivirals thro…, Cell insight (2022) | [10.1016/j.cellin.2022.100046](https://doi.org/10.1016/j.cellin.2022.100046) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Uppal_2022_SARS_CoV_2_genome_copies_in_supernatant_USA_WA1_2020](drugs/drug_dasabuvir/pd_Uppal_2022_SARS_CoV_2_genome_copies_in_supernatant_USA_WA1_2.md) | SARS-CoV-2 genome copies in supernatant (USA-WA1/2020) ← dasabuvir · inhibition effect | — | Uppal T et al., Screening of SARS-CoV-2 antivirals thro…, Cell insight (2022) | [10.1016/j.cellin.2022.100046](https://doi.org/10.1016/j.cellin.2022.100046) |

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
- **screened:** 2  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mensing_2017.pdf` | Mensing S et al., Population pharmacokinetics of paritapr…, British journal of clinical… (2017) | popPK | 10 | [10.1111/bcp.13138](https://doi.org/10.1111/bcp.13138) | [27662429](https://pubmed.ncbi.nlm.nih.gov/27662429) | Population PK model of dasabuvir in HCV patients, but numeric parameter estimates are not shown in the provided evidence (likely in tables/supplement not included). |
| `Gopalakrishnan_2018.pdf` | Gopalakrishnan S et al., Population Pharmacokinetics of Paritapr…, Clinical pharmacokinetics (2018) | popPK | 8 | [10.1007/s40262-018-0640-y](https://doi.org/10.1007/s40262-018-0640-y) | [29516428](https://pubmed.ncbi.nlm.nih.gov/29516428) | Population PK model of dasabuvir (two-compartment) in humans is described, but numeric parameter values are not present in the provided evidence. |
| `Polepally_2017.pdf` | Polepally AR et al., Effects of Mild and Moderate Renal Impa…, European journal of drug me… (2017) | popPK | 8 | [10.1007/s13318-016-0341-6](https://doi.org/10.1007/s13318-016-0341-6) | [27165046](https://pubmed.ncbi.nlm.nih.gov/27165046) | Population PK modeling of dasabuvir in HCV patients with covariate analysis, but specific numeric CL/V parameter values are not shown in the provided evidence (likely in tables/figures not included). |
| `Polepally_2016.pdf` | Polepally AR et al., Effect of co-medications on paritaprevi…, Antiviral therapy (2016) | popPK | 6 | [10.3851/IMP3079](https://doi.org/10.3851/IMP3079) | [27584548](https://pubmed.ncbi.nlm.nih.gov/27584548) | Population PK analysis includes dasabuvir as subject drug, but no numeric dasabuvir parameter values are shown in the evidence. |

<sub>queue written 2026-10-07T15:50:35.068530+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bacinschi_2022 | not_relevant | 0 | 0 | No gene variant/genotype (other than HCV genotype) related to dasabuvir PK/PD is reported; study examines glycemic outcomes, not pharmacogenomics. |
| PGx | Backman_2016 | not_relevant | 3 | 0 | Dasabuvir is only listed as a CYP2C8 substrate; no genotype effect on its PK/PD is reported. |
| popPK | Badri_2016 | irrelevant | 2 | 1 | The population PK model is for tacrolimus (and CSA troughs); dasabuvir is only part of the co-administered 3D regimen with no dasabuvir disposition parameters reported. |
| PGx | Burgess_2015 | not_relevant | 0 | 0 | Review of drug–drug interactions with DAAs; no pharmacogenomic variant effects on dasabuvir PK/PD reported. |
| PGx | Cheng_2015 | not_relevant | 0 | 0 | Review of PrOD efficacy/safety with no pharmacogenomic effects on dasabuvir PK/PD reported. |
| PGx | Chetty_2021 | not_relevant | 3 | 1 | Mentions clopidogrel increases dasabuvir exposure via CYP2C8 inhibition, but no gene variant effect on dasabuvir PK/PD parameters is reported. |
| PGx | Colombo_2015 | not_relevant | 0 | 0 | Commentary on HCV therapy access and cost; no pharmacogenomic PK/PD data for dasabuvir. |
| PGx | Doyle_2019 | not_relevant | 0 | 0 | No gene variant/genotype/pharmacogenomic effect on dasabuvir PK/PD is reported; only HCV genotype-based treatment allocation and metabolic outcomes. |
| PGx | Flisiak_2017 | not_relevant | 0 | 0 | Paper reports real-world SVR and safety rates for HCV regimens; no pharmacogenomic effects on dasabuvir PK/PD parameters. |
| PGx | Flisiak_2017_2 | not_relevant | 2 | 0 | Abstract of a review with no gene variant effects on dasabuvir PK/PD reported. |
| PGx | Fofiu_2019 | not_relevant | 0 | 0 | No pharmacogenomic data; paper reports only clinical efficacy (SVR12) of dasabuvir-containing regimen, no gene variant effects on PK/PD parameters. |
| PGx | Fuchs_2020 | not_relevant | 0 | 0 | Clinical trial of efficacy/safety only; no gene variant effects on dasabuvir PK/PD reported. |
| PGx | Gentile_2014 | not_relevant | 0 | 0 | Review of ombitasvir (not dasabuvir) with no pharmacogenomic effects on PK/PD parameters reported. |
| PGx | Gogela_2015 | not_relevant | 0 | 0 | Review only mentions dasabuvir approval; no gene variant effect on PK/PD parameters reported. |
| popPK | Gopalakrishnan_2018 | relevant | 8 | 3 | Population PK model of dasabuvir (two-compartment) in humans is described, but numeric parameter values are not present in the provided evidence. |
| PGx | Huang_2016 | not_relevant | 0 | 0 | Case report of shortened PROD therapy; no gene variant or pharmacogenomic effect on dasabuvir PK/PD reported. |
| PGx | Hunyady_2015 | not_relevant | 0 | 0 | Hungarian HCV treatment policy overview; no pharmacogenomic PK/PD data for dasabuvir. |
| PGx | Hunyady_2015_2 | not_relevant | 0 | 0 | Hungarian HCV treatment policy overview; no pharmacogenomic PK/PD data for dasabuvir. |
| PGx | Hussaini_2016 | not_relevant | 2 | 3 | Review of 3D regimen PK and drug interactions with no gene variant/genotype effect on dasabuvir PK/PD reported. |
| PGx | Hézode_2016 | not_relevant | 0 | 0 | Review discusses RBV use in DAA regimens; no gene variant effect on dasabuvir PK/PD reported. |
| PGx | Isakov_2018 | not_relevant | 0 | 0 | Clinical trial efficacy/safety report with no pharmacogenomic data on dasabuvir PK/PD. |
| PGx | Itkonen_2019 | not_relevant | 0 | 0 | Effects are drug-drug interactions (clopidogrel/ritonavir on dasabuvir PK), not pharmacogenomic (no gene variant/genotype/phenotype). |
| popPK | Kati_2015 | irrelevant | 0 | 0 | In vitro antiviral activity/resistance study with no PK parameters for dasabuvir. |
| popPK | King_2017 | irrelevant | 3 | 2 | Dasabuvir is only co-administered; PK parameters reported are for darunavir/ritonavir, with 3D exposures only compared qualitatively to historical data and no dasabuvir numeric values present. |
| PGx | King_2017_2 | not_relevant | 0 | 0 | Abstract covers drug-drug interactions only; no pharmacogenomic effects on dasabuvir PK/PD reported. |
| PGx | Klibanov_2015 | not_relevant | 0 | 0 | Review of efficacy/safety of dasabuvir regimen with no pharmacogenomic effects on PK or PD parameters reported. |
| PGx | Lalezari_2015 | not_relevant | 0 | 0 | Study evaluates drug-drug interactions with methadone/buprenorphine, not pharmacogenomic effects on dasabuvir PK/PD. |
| PGx | Lam_2016 | not_relevant | 0 | 0 | Review of Viekira regimen efficacy/safety with no pharmacogenomic effects on dasabuvir PK/PD reported. |
| PGx | Liu_2016 | not_relevant | 0 | 0 | Cost-effectiveness modeling study with no pharmacogenomic effects on dasabuvir PK/PD parameters. |
| PGx | Loo_2019 | not_relevant | 0 | 0 | Clinical efficacy/safety study of OBV/PTV/r + DSV; no pharmacogenomic effects on dasabuvir PK/PD parameters reported. |
| PGx | Mantry_2016 | not_relevant | 0 | 0 | Review of dasabuvir efficacy/safety with no gene variant effects on PK or PD parameters reported. |
| PGx | Mensing_2016 | not_relevant | 2 | 3 | Covariates reported (CYP2C8 inhibitor use, sex, ethnicity) are drug interactions/demographics, not gene variants or pharmacogenomic genotypes/phenotypes affecting dasabuvir PK. |
| popPK | Mensing_2017 | relevant | 10 | 3 | Population PK model of dasabuvir in HCV patients, but numeric parameter estimates are not shown in the provided evidence (likely in tables/supplement not included). |
| PGx | Mensing_2017 | not_relevant | 0 | 0 | Only demographic/clinical covariates (age, weight, cirrhosis, etc.) were tested; no gene variant/genotype/phenotype effects on dasabuvir PK are reported. |
| PGx | Minaei_2015 | not_relevant | 0 | 0 | Review abstract on HCV DAA regimen with no pharmacogenomic effects on dasabuvir PK/PD reported. |
| PGx | Persico_2018 | not_relevant | 0 | 0 | The paper reports HCV genotype effects on SVR (virologic outcome), not a human gene variant effect on dasabuvir PK/PD parameters. |
| popPK | Polepally_2016 | relevant | 6 | 3 | Population PK analysis includes dasabuvir as subject drug, but no numeric dasabuvir parameter values are shown in the evidence. |
| PGx | Polepally_2016 | not_relevant | 0 | 0 | The paper examines co-medication effects on dasabuvir PK, not gene variant/genotype/phenotype effects. |
| popPK | Polepally_2016_2 | irrelevant | 2 | 2 | This is a population-PK model of paritaprevir; dasabuvir appears only as a co-administered agent affecting paritaprevir bioavailability, with no dasabuvir disposition parameters reported. |
| popPK | Polepally_2017 | relevant | 8 | 4 | Population PK modeling of dasabuvir in HCV patients with covariate analysis, but specific numeric CL/V parameter values are not shown in the provided evidence (likely in tables/figures not included). |
| PGx | Polepally_2017 | not_relevant | 0 | 0 | Covariates are renal function, demographics, and race—not gene variants/genotypes—so no pharmacogenomic effect on dasabuvir PK is reported. |
| popPK | Polepally_2017_2 | irrelevant | 3 | 2 | Exposure-response/bioequivalence study reporting only Cmax/Ctrough exposure ratios, not disposition PK parameters (CL, V, half-life) for dasabuvir; no numeric parameter values in the evidence. |
| PGx | Polepally_2017_2 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on dasabuvir PK/PD are reported; only formulation, food, and exposure-response analyses. |
| PGx | Poordad_2014 | not_relevant | 0 | 0 | Phase 3 efficacy/safety trial with no pharmacogenomic or PK/PD parameter data for dasabuvir. |
| PGx | Ridruejo_2020 | not_relevant | 0 | 0 | Observational efficacy/safety study of DAAs in CKD with no pharmacogenomic effects on dasabuvir PK/PD parameters reported. |
| PGx | Rivero-Juarez_2018 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on dasabuvir PK/PD are reported; only regimen-based cholesterol changes. |
| PGx | San_2019 | not_relevant | 0 | 0 | The paper studies asunaprevir, daclatasvir, and beclabuvir, not dasabuvir; no dasabuvir PK/PD data are reported. |
| PGx | Schneider_2015 | not_relevant | 0 | 0 | Review overview of HCV therapy with no pharmacogenomic PK/PD data for dasabuvir. |
| PGx | Shen_2016 | not_relevant | 0 | 0 | Paper describes paritaprevir (not dasabuvir) metabolism/disposition with no pharmacogenomic effects on PK/PD parameters. |
| PGx | Shen_2016_2 | not_relevant | 0 | 0 | Paper describes ombitasvir (not dasabuvir) metabolism/disposition with no pharmacogenomic effects on PK/PD parameters. |
| PGx | Shen_2016_3 | not_relevant | 2 | 0 | Paper describes dasabuvir metabolism (CYP2C8/3A4) but reports no gene variant/genotype effect on PK/PD parameters. |
| PGx | Smith_2015 | not_relevant | 0 | 0 | Review of PrOD efficacy/safety; IL28B genotype mentioned only descriptively, no gene variant effect on dasabuvir PK/PD parameters reported. |
| PGx | Stirnimann_2014 | not_relevant | 0 | 0 | Review abstract on ombitasvir efficacy; no pharmacogenomic effect on dasabuvir PK/PD reported. |
| PGx | Talal_2018 | not_relevant | 0 | 0 | No gene variant/genotype/phenotype effects on dasabuvir PK/PD are reported; only RBV dosing effects on HCV RNA decline. |
| PGx | Talavera_2017 | not_relevant | 0 | 0 | Review of drug-drug interactions only; no gene variant/genotype effects on dasabuvir PK/PD reported. |
| PGx | Toussaint-Miller_2015 | not_relevant | 0 | 0 | Review of HCV treatment in special populations; no pharmacogenomic effect on dasabuvir PK/PD reported. |
| popPK | Uppal_2022 | irrelevant | 0 | 0 | In-vitro antiviral/RdRp inhibition study; dasabuvir is a test compound, no PK disposition parameters reported. |
| PGx | Walker_2015 | not_relevant | 0 | 0 | Real-world effectiveness study comparing SVR rates of DAA regimens; no gene variant/genotype (host pharmacogenomics) effects on dasabuvir PK/PD reported. |
| popPK | Wisløff_2018 | irrelevant | 0 | 0 | This is a health-economic cost-effectiveness evaluation of hepatitis C treatments; dasabuvir appears only as a treatment option with prices/ICERs, no PK parameters (CL, V, ka, half-life) are reported. |
| PGx | Wyles_2017 | not_relevant | 0 | 0 | No pharmacogenomic variant/genotype effect on dasabuvir PK/PD is reported; only drug-drug interaction with darunavir. |
| PGx | Younossi_2016 | not_relevant | 0 | 0 | Economic Markov model of HCV treatment costs; no pharmacogenomic PK/PD data for dasabuvir. |
| PGx | Zeuzem_2014 | not_relevant | 0 | 0 | Clinical efficacy trial with no pharmacogenomic analysis of PK/PD parameters for dasabuvir. |
| PGx | Zha_2019 | not_relevant | 0 | 0 | Supplementary material contains only ethics committee listings; no pharmacogenomic effects on dasabuvir PK/PD reported. |
| PGx | Zhang_2022 | not_relevant | 0 | 0 | This is a drug–drug interaction (dasabuvir inhibiting APAP glucuronidation) in vitro study, not a pharmacogenomic effect of a gene variant on dasabuvir PK/PD. |
| PGx | Özdoğan_2020 | not_relevant | 0 | 0 | Paper examines lipid/insulin changes during DAA treatment, with no gene variant/genotype effect on dasabuvir PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:50 UTC</sub>
