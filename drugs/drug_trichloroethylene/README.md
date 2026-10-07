<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;trichloroethylene&quot;}]"></div>

# trichloroethylene

- **generic name:** trichloroethylene
- **ATC codes:** `N01AB05`
- **DrugBank:** [DB13323](https://go.drugbank.com/drugs/DB13323) · **PubChem:** not captured
- **molar mass:** 131.388 g/mol (C2HCl3) — DrugBank
- **groups:** approved

## About

Trichloroethylene is a chlorinated hydrocarbon that has been used as an inhalational general anaesthetic. It is an approved drug, though it is also classified as a carcinogen and toxicant, so its use is limited.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407936](https://www.wikidata.org/wiki/Q407936) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trichloroethylene | parent | 131.388 | C2HCl3 | DrugBank | — | Kim_2009 |
| dichloroacetic acid | metabolite | — (mass units only) | — | — | — | — |
| S-(1,2-dichlorovinyl)-L-cysteine | metabolite | — (mass units only) | — | — | — | — |
| S-(1,2-dichlorovinyl)glutathione | metabolite | — (mass units only) | — | — | — | — |
| trichloroacetic acid | metabolite | 163.378 | C2HCl3O2 | PubChem | [6421](https://pubchem.ncbi.nlm.nih.gov/compound/6421) | Kim_2009 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:10 | 5:45 | 0/2/0 | 1/0/0 | 0/0/0 | 102,571/7,277 | einfracz / qwen3.8-27b | 7 | 4/3 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [DSouza_1985_reference](drugs/drug_trichloroethylene/Trichloroethylene_DSouza1985_reference.md) | — | 1-compartment (no model) | 0 | D'Souza RW et al., Oral and intravenous trichloroethylene…, Journal of toxicology and e… (1985) | [10.1080/15287398509530688](https://doi.org/10.1080/15287398509530688) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Kim_2009_reference](drugs/drug_trichloroethylene/Trichloroethylene_Kim2009_reference.md) | — | general linear (no model) | 3 | Kim S et al., Pharmacokinetic analysis of trichloroet…, Toxicology and applied phar… (2009) | [10.1016/j.taap.2009.04.019](https://doi.org/10.1016/j.taap.2009.04.019) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nie_2020_growth_of_Synechocystis_sp_PCC6803](drugs/drug_trichloroethylene/pd_Nie_2020_growth_of_Synechocystis_sp_PCC6803.md) | growth of Synechocystis sp. PCC6803 ← trichloroethylene · inhibition effect | — | Nie Z et al., Biogenic FeS promotes dechlorination an…, Bioprocess and biosystems e… (2020) | [10.1007/s00449-020-02369-7](https://doi.org/10.1007/s00449-020-02369-7) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 71 matched, 54 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DSouza_1985.pdf` | D'Souza RW et al., Oral and intravenous trichloroethylene…, Journal of toxicology and e… (1985) | popPK | 10 | [10.1080/15287398509530688](https://doi.org/10.1080/15287398509530688) | [4046066](https://pubmed.ncbi.nlm.nih.gov/4046066) | The study reports quantitative pharmacokinetic parameters (Vc, Vbeta, CLT, t1/2) for trichloroethylene in rats within the provided text. |
| `Fisher_1989.pdf` | Fisher JW et al., Physiologically based pharmacokinetic m…, Toxicology and applied phar… (1989) | popPK | 10 | [10.1016/0041-008x(89)90149-x](https://doi.org/10.1016/0041-008x(89)90149-x) | [2749729](https://pubmed.ncbi.nlm.nih.gov/2749729) | The study reports specific quantitative parameters including partition coefficients, Vmax, Km, absorption rate constant (ka), and volume of distribution for trichloroethylene and its metabolite in pregnant rats. |
| `Fisher_1991.pdf` | Fisher JW et al., Physiologically based pharmacokinetic m…, Toxicology and applied phar… (1991) | popPK | 10 | [10.1016/0041-008x(91)90167-d](https://doi.org/10.1016/0041-008x(91)90167-d) | [2068722](https://pubmed.ncbi.nlm.nih.gov/2068722) | The paper reports a physiologically based pharmacokinetic model for trichloroethylene in rats and mice, with specific numeric values for blood/air partition coefficients, Vmax, and Km provided in the evidence text. |
| `Kim_2009.pdf` | Kim S et al., Pharmacokinetic analysis of trichloroet…, Toxicology and applied phar… (2009) | popPK | 10 | [10.1016/j.taap.2009.04.019](https://doi.org/10.1016/j.taap.2009.04.019) | [19409406](https://pubmed.ncbi.nlm.nih.gov/19409406) | The study reports specific pharmacokinetic parameters (bioavailability, half-life, clearance) for trichloroethylene and its metabolites in mice, with values explicitly listed in the abstract. |
| `Lee_1996.pdf` | Lee KM et al., Characterization of presystemic elimina…, Toxicology and applied phar… (1996) | popPK | 9 | [10.1006/taap.1996.0165](https://doi.org/10.1006/taap.1996.0165) | [8806842](https://pubmed.ncbi.nlm.nih.gov/8806842) | The study is a PK analysis in rats with a compartmental model, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| `Luo_2018.pdf` | Luo YS et al., Comparative analysis of metabolism of t…, Toxicology (2018) | popPK | 9 | [10.1016/j.tox.2018.07.012](https://doi.org/10.1016/j.tox.2018.07.012) | [30053492](https://pubmed.ncbi.nlm.nih.gov/30053492) | The paper describes a quantitative multi-compartment toxicokinetic model for trichloroethylene in mice, but specific numeric parameter values (CL, V, Q) are not listed in the provided evidence. |
| `Staats_1991.pdf` | Staats DA et al., Gastrointestinal absorption of xenobiot…, Drug metabolism and disposi… (1991) | popPK | 8 | not captured | [1673388](https://pubmed.ncbi.nlm.nih.gov/1673388) | The study reports a PK model for trichloroethylene in rats with specific rate constant values (KAS, KAD, KT) described in text, but exact numeric values are not explicitly listed in the provided evidence snippet. |
| `Filser_1992.pdf` | Filser JG, The closed chamber technique--uptake, e…, Archives of toxicology (1992) | popPK | 7 | [10.1007/BF02307263](https://doi.org/10.1007/BF02307263) | [1580790](https://pubmed.ncbi.nlm.nih.gov/1580790) | The paper describes the application of the closed chamber technique to trichloroethylene, indicating a pharmacokinetic study, but no specific numeric parameter values (CL, V, etc.) are provided in the evidence. |
| `el-Masri_1996.pdf` | el-Masri HA et al., Physiologically based pharmacodynamic m…, Toxicology and applied phar… (1996) | popPK | 5 | [10.1006/taap.1996.0268](https://doi.org/10.1006/taap.1996.0268) | [8917684](https://pubmed.ncbi.nlm.nih.gov/8917684) | The paper describes a PBPD model and mentions PBPK modeling but does not provide quantitative disposition parameters (CL, V, etc.) for trichloroethylene in the evidence. |
| `McDaniel_2004.pdf` | McDaniel TV et al., Effects of chlorinated solvents on four…, Archives of environmental c… (2004) | pd | 5 | [10.1007/s00244-004-3015-3](https://doi.org/10.1007/s00244-004-3015-3) | [15346783](https://www.ncbi.nlm.nih.gov/pubmed/15346783) | metadata signals extractable PD data (EC50) |
| `Byczkowski_1999.pdf` | Byczkowski JZ et al., A biologically based pharmacodynamic mo…, Journal of biochemical and… (1999) | pd | 4 | [10.1002/(sici)1099-0461(1999)13:3/4&lt;205::aid-jbt11&gt;3.0.co;2-b](https://doi.org/10.1002/(sici)1099-0461(1999)13:3/4<205::aid-jbt11>3.0.co;2-b) | [10098906](https://www.ncbi.nlm.nih.gov/pubmed/10098906) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Kumar_2009.pdf` | Kumar M et al., Study of genetic polymorphism in solven…, Journal of environmental bi… (2009) | pgx | 8 | not captured | [20136049](https://www.ncbi.nlm.nih.gov/pubmed/20136049) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |
| `Liu_2021.pdf` | Liu Z et al., Maternal trichloroethylene exposure and…, Reproductive toxicology (El… (2021) | pgx | 8 | [10.1016/j.reprotox.2021.09.010](https://doi.org/10.1016/j.reprotox.2021.09.010) | [34555461](https://www.ncbi.nlm.nih.gov/pubmed/34555461) | metadata signals extractable PGX data (NAT2, PK/PD-context) |
| `Wang_2020.pdf` | Wang H et al., Increased risk of occupational trichlor…, Environmental research (2020) | pgx | 8 | [10.1016/j.envres.2020.109972](https://doi.org/10.1016/j.envres.2020.109972) | [32758551](https://www.ncbi.nlm.nih.gov/pubmed/32758551) | metadata signals extractable PGX data (HLA-B*13, PK/PD-context) |
| `Liao_2016.pdf` | Liao RY et al., [Toxic effect of trichloroethylene on l…, Zhonghua lao dong wei sheng… (2016) | pgx | 7 | [10.3760/cma.j.issn.1001-9391.2016.06.005](https://doi.org/10.3760/cma.j.issn.1001-9391.2016.06.005) | [27514549](https://www.ncbi.nlm.nih.gov/pubmed/27514549) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kim_2006.pdf` | Kim D et al., Comparative metabolism and disposition…, Drug metabolism and disposi… (2006) | pgx | 5 | [10.1124/dmd.106.010538](https://doi.org/10.1124/dmd.106.010538) | [16959879](https://www.ncbi.nlm.nih.gov/pubmed/16959879) | metadata signals extractable PGX data (Cyp2e1) |

<sub>queue written 2026-10-07T05:09:40.958382+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Barton_1996 | not_relevant | 1 | 0 | The paper is a conceptual review of risk assessment strategies that mentions genetic polymorphisms as a source of PK variability for TCE but does not report specific gene variant data or quantitative effects on PK/PD parameters. |
| PGx | Bartosiewicz_2001 | not_relevant | 0 | 0 | The paper reports general gene expression changes in mice due to TCE exposure but does not investigate how specific gene variants affect TCE pharmacokinetics or pharmacodynamics. |
| PGx | Bernasconi_2009 | not_relevant | 0 | 0 | The paper discusses the general organic chemical mechanism of nucleophilic vinylic substitution and mentions trichloroethylene only as an example where glutathione reacts with it to form mutagenic intermediates, without reporting any pharmacogenomic effects on PK or PD parameters. |
| PGx | Bronley-DeLancey_2006 | not_relevant | 2 | 5 | The study examined TCE metabolite kinetics in hepatocytes but explicitly reported no correlation between genotype and metabolic parameters. |
| popPK | Byczkowski_1999 | irrelevant | 1 | 0 | The study is an in vitro biologically based pharmacodynamic model of lipid peroxidation, not a study reporting pharmacokinetic disposition parameters (CL, V, etc.) for trichloroethylene. |
| popPK | Filser_1992 | relevant | 7 | 0 | The paper describes the application of the closed chamber technique to trichloroethylene, indicating a pharmacokinetic study, but no specific numeric parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Fort_1991 | irrelevant | 0 | 0 | The study is a developmental toxicity assay (FETAX) in Xenopus laevis and does not report pharmacokinetic parameters such as clearance or volume for trichloroethylene. |
| popPK | Fort_1993 | irrelevant | 0 | 0 | The study is an in-vitro embryotoxicity assay (FETAX) in Xenopus and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Fort_2001 | irrelevant | 0 | 0 | The study is an in vitro developmental toxicity assay using rat liver microsomes to optimize a metabolic activation system, and it reports no pharmacokinetic parameters (CL, V, Q, ka) for trichloroethylene. |
| popPK | Friesen_2015 | irrelevant | 0 | 0 | The paper reports historical occupational air concentrations of trichloroethylene, not pharmacokinetic disposition parameters. |
| PGx | Haigler_1992 | not_relevant | 0 | 0 | The paper describes bacterial biodegradation of trichloroethylene, not human pharmacogenomics or PK/PD parameters. |
| PGx | Kim_2006 | not_relevant | 7 | 5 | The study reports pharmacogenomic differences in TCE metabolism (excretion rates) in mice, but it lacks quantitative fitted effect sizes (e.g., specific PK parameter values like AUC or CL) and focuses on general excretion percentages rather than defining a specific pharmacogenomic model parameter. |
| PGx | Kumar_2009 | not_relevant | 0 | 0 | The study evaluates the genotoxic potential of TCE using biomarkers (chromosomal aberrations, micronuclei) rather than measuring PK/PD parameters for drug response. |
| PGx | Lash_1999 | not_relevant | 2 | 10 | The paper reports a sex difference in trichloroethylene metabolism but does not identify a specific gene variant or genotype as the cause, only suggesting a possible polymorphism. |
| PGx | Lash_2014 | not_relevant | 5 | 1 | The paper is a review of TCE metabolism that discusses genetic polymorphisms and inter-strain variability qualitatively, but it does not report specific quantitative pharmacogenomic effect sizes for PK parameters. |
| popPK | Lee_1996 | relevant | 9 | 2 | The study is a PK analysis in rats with a compartmental model, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| PGx | Li_2006 | not_relevant | 0 | 0 | The study reports association with disease susceptibility (dermatitis), not a change in a PK or PD parameter. |
| PGx | Li_2008 | not_relevant | 2 | 0 | The paper describes a PBPK model for DCA kinetics but only mentions that GSTzeta polymorphisms might explain variability without reporting any actual pharmacogenomic data, fitted parameters, or effects. |
| PGx | Liao_2016 | not_relevant | 4 | 8 | The paper investigates the impact of CYP3A4 gene defect on trichloroethylene toxicity (viability/gene expression), which is a toxicological/PD outcome, but does not report on the pharmacokinetic (absorption/distribution/metabolism/excretion) parameters of the chemical itself. |
| PGx | Lipscomb_1997 | not_relevant | 2 | 2 | The paper reports interindividual variability in trichloroethylene metabolism linked to CYP2E1 expression, but it does not link specific gene variants or genotypes to the pharmacokinetic parameter. |
| PGx | Liu_2021 | not_relevant | 2 | 5 | The study reports an association between gene variants and disease risk (CHD) in the context of TCE exposure, but it does not report changes in pharmacokinetic or pharmacodynamic parameters of trichloroethylene itself. |
| popPK | Lock_2006 | irrelevant | 0 | 0 | The study focuses on gene expression and toxicity mechanisms of a trichloroethylene metabolite in vitro, without reporting any pharmacokinetic parameters (CL, V, etc.) for trichloroethylene. |
| popPK | Lukavský_2011 | irrelevant | 0 | 0 | The study investigates the toxicology of trichloroethylene on algae and cyanobacteria (EC50 values), not its pharmacokinetics. |
| popPK | Luo_2018 | relevant | 9 | 2 | The paper describes a quantitative multi-compartment toxicokinetic model for trichloroethylene in mice, but specific numeric parameter values (CL, V, Q) are not listed in the provided evidence. |
| popPK | McDaniel_2004 | irrelevant | 0 | 0 | The study is a toxicology/ecology paper assessing teratogenic effects on amphibians and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Moore_2010 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic association with a toxicity endpoint (renal cancer risk), not an effect on a PK or PD parameter. |
| PGx | Moreno_2009 | not_relevant | 0 | 0 | The paper investigates bioremediation of trichloroethylene contaminated soil using vermicompost and microbial ecology, focusing on enzyme activities and bacterial diversity, but contains no information on pharmacokinetics, pharmacodynamics, or pharmacogenomics (human gene variants). |
| PGx | Nakajima_2000 | not_relevant | 0 | 0 | The paper is a general review of genetic polymorphisms in drug-metabolizing enzymes and does not report specific pharmacokinetic or pharmacodynamic data for trichloroethylene. |
| PGx | Nakajima_2003 | not_relevant | 2 | 2 | The paper discusses NAT2 genotype as a susceptibility factor for toxicity (PD adverse events) but does not report specific quantitative changes in PK/PD parameters or a fitted effect size. |
| PGx | Neafsey_2009 | not_relevant | 2 | 5 | The paper reviews CYP2E1 polymorphisms and their general impact on enzyme function for various toxicants, but it concludes that evidence is insufficient to model a population distribution and does not report specific quantitative PK/PD effect sizes for trichloroethylene. |
| popPK | Nie_2020 | irrelevant | 0 | 0 | The paper studies the chemical dechlorination of trichloroethylene by iron sulfide in an environmental/biochemical context, not pharmacokinetics. |
| popPK | Pederson_2001 | irrelevant | 0 | 0 | The study is an environmental chemical transport model validation, not a pharmacokinetic study of trichloroethylene disposition in a biological subject. |
| PGx | Plewka_2000 | not_relevant | 0 | 0 | The study investigates environmental toxicology (drug-drug interaction of APAP and TRI in rats) and reports changes in enzyme levels, but contains no genetic variants or pharmacogenomic data. |
| PGx | Ramdhan_2010 | not_relevant | 4 | 8 | The paper focuses on pharmacodynamic outcomes (liver injury/steatosis) and does not quantify specific PK parameters like AUC or clearance as a primary result, nor does it report a fitted effect size (theta). |
| popPK | Staats_1991 | relevant | 8 | 2 | The study reports a PK model for trichloroethylene in rats with specific rate constant values (KAS, KAD, KT) described in text, but exact numeric values are not explicitly listed in the provided evidence snippet. |
| PGx | Su_2023 | not_relevant | 0 | 0 | The study investigates pharmacological modulation of TCE metabolite toxicity using NAC and AOAA in cell lines, not the effect of gene variants/genotypes on PK/PD parameters. |
| PGx | Venkatratnam_2018 | not_relevant | 2 | 2 | The paper analyzes genetic influence on transcriptomic (gene expression) responses to trichloroethylene, which is a toxicological effect, not a change in the pharmacokinetic or pharmacodynamic parameter of TCE as a drug. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper reports a gene-disease association (HLA genotype and hypersensitivity risk) and dose-response of toxicity, not a pharmacogenomic effect on a pharmacokinetic (e.g. clearance) or pharmacodynamic (e.g. Emax) parameter of the drug itself. |
| PGx | Watanabe_2011 | not_relevant | 4 | 2 | The paper discusses pharmacogenomic associations with hypersensitivity risk (PD toxicity), but does not report fitted quantitative changes in standard PK/PD parameters like clearance or AUC. |
| PGx | Xu_2012 | not_relevant | 0 | 0 | The study examines TCE-induced changes in gene expression in vitro and does not investigate how genetic variants affect TCE pharmacokinetics or pharmacodynamics. |
| PGx | Xu_2016 | not_relevant | 1 | 10 | The paper reports changes in gene expression in response to TCE exposure, not how specific genetic variants affect TCE pharmacokinetics or pharmacodynamics. |
| popPK | Yang_1995 | irrelevant | 0 | 0 | The paper is a commentary describing ongoing research projects and explicitly states that detailed presentation of data is avoided, containing no quantitative PK parameters. |
| PGx | Yoo_2015 | not_relevant | 5 | 10 | The paper demonstrates that PPARα genotype alters the toxicokinetics (metabolite levels) of an environmental contaminant, trichloroethylene, not a therapeutic drug. |
| popPK | el-Masri_1996 | irrelevant | 5 | 0 | The paper describes a PBPD model and mentions PBPK modeling but does not provide quantitative disposition parameters (CL, V, etc.) for trichloroethylene in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:09 UTC</sub>
