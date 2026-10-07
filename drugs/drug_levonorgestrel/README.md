<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03A&quot;,&quot;href&quot;:&quot;atc/G03A.md&quot;},{&quot;label&quot;:&quot;levonorgestrel&quot;}]"></div>

# levonorgestrel

- **generic name:** levonorgestrel
- **ATC codes:** `G03AA07`, `G03AB03`, `G03AC03`, `G03AD01`, `G03FA11`, `G03FB09`
- **DrugBank:** [DB00367](https://go.drugbank.com/drugs/DB00367) · **PubChem:** [CID 13109](https://pubchem.ncbi.nlm.nih.gov/compound/13109)
- **molar mass:** 312.4458 g/mol (C21H28O2) — DrugBank
- **groups:** approved, investigational

## About

Levonorgestrel is a progestogen used for hormonal contraception, including emergency contraception, and also to treat endometriosis and adenomyosis. It is widely used worldwide and is included on the WHO essential medicines list.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416950](https://www.wikidata.org/wiki/Q416950) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:33 | 8:47 | 0/1/0 | 1/0/0 | 1/0/2 | 251,482/10,063 | einfracz / qwen3.8-27b | 16 | 1/15 | 16/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Naqvi_1984_reference](drugs/drug_levonorgestrel/Levonorgestrel_Naqvi1984_reference.md) | — | 1-compartment (no model) | 0 | Naqvi RH et al., Pharmacokinetics of levonorgestrel in t…, Contraception (1984) | [10.1016/0010-7824(84)90081-7](https://doi.org/10.1016/0010-7824(84)90081-7) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Markiewicz_1994_AP](drugs/drug_levonorgestrel/pd_Markiewicz_1994_AP.md) | alkaline phosphatase (AP) activity biomarker turnover ← levonorgestrel | — | Markiewicz L et al., Estrogenic and progestagenic activities…, The Journal of steroid bioc… (1994) | [10.1016/0960-0760(94)90254-2](https://doi.org/10.1016/0960-0760(94)90254-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Markiewicz_1994_AP_2](drugs/drug_levonorgestrel/pd_Markiewicz_1994_AP_2.md) | alkaline phosphatase (AP) activity biomarker turnover ← levonorgestrel | — | Markiewicz L et al., Estrogenic and progestagenic activities…, The Journal of steroid bioc… (1994) | [10.1016/0960-0760(94)90254-2](https://doi.org/10.1016/0960-0760(94)90254-2) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **UGT1A1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Agyemang_2023](drugs/drug_levonorgestrel/pgx_Agyemang_2023_UGT1A1_safety.md) | Agyemang N et al., Pharmacogenetic interactions of efavire…, Pharmacogenetics and genomi… (2023) | [10.1097/FPC.0000000000000501](https://doi.org/10.1097/FPC.0000000000000501) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2B6** | `Q19` · AUCt | metabolism | [Agyemang_2023](drugs/drug_levonorgestrel/pgx_Agyemang_2023_CYP2B6_Q19.md) | Agyemang N et al., Pharmacogenetic interactions of efavire…, Pharmacogenetics and genomi… (2023) | [10.1097/FPC.0000000000000501](https://doi.org/10.1097/FPC.0000000000000501) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **NAT2** | `Q19` · AUCt | metabolism | [Agyemang_2023](drugs/drug_levonorgestrel/pgx_Agyemang_2023_NAT2_Q19.md) | Agyemang N et al., Pharmacogenetic interactions of efavire…, Pharmacogenetics and genomi… (2023) | [10.1097/FPC.0000000000000501](https://doi.org/10.1097/FPC.0000000000000501) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=levonorgestrel) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` metabolism, `CYP3A4` substrate, `CYP3A5` substrate, `NAT2` metabolism, `UGT1A1` safety_allele | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate, `NAT2` metabolism, `UGT1A1` safety_allele | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | liver | `SRD5A1` inhibitor | DrugBank actor |
| — | prostate gland | `AR` binder, `SRD5A1` inhibitor | DrugBank actor |
| — | skin | `SRD5A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (other/unknown), NR3C1 (binder), PGR (modulator), SHBG (binder), SHBG (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 371 matched, 114 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hofmann_2020.pdf` | Hofmann BM et al., Comparative pharmacokinetic analysis of…, The European journal of con… (2020) | popPK | 10 | [10.1080/13625187.2020.1815008](https://doi.org/10.1080/13625187.2020.1815008) | [33006493](https://pubmed.ncbi.nlm.nih.gov/33006493) | This is a population pharmacokinetic study of levonorgestrel, but the provided text only contains relative exposure comparisons (folds) and qualitative statements, lacking specific numeric PK parameter values (CL, V, ka, etc.). |
| `Jensen_2023.pdf` | Jensen JT et al., Extended use of levonorgestrel-releasin…, Contraception (2023) | popPK | 10 | [10.1016/j.contraception.2023.109954](https://doi.org/10.1016/j.contraception.2023.109954) | [36634730](https://pubmed.ncbi.nlm.nih.gov/36634730) | The paper reports a population PK model for levonorgestrel with specific exposure (concentration) values in the abstract, but the core PK parameters (CL, V) are not explicitly listed in the provided text. |
| `Luo_2019.pdf` | Luo D et al., Altered pharmacokinetics of combined or…, Contraception (2019) | popPK | 10 | [10.1016/j.contraception.2018.12.009](https://doi.org/10.1016/j.contraception.2018.12.009) | [30684471](https://pubmed.ncbi.nlm.nih.gov/30684471) | The paper is a population PK study of levonorgestrel, but the provided evidence contains only statistical trends and p-values, with specific numeric parameter values likely in tables or figures not included. |
| `Reinecke_2017.pdf` | Reinecke I et al., Model-Based Dose Selection for Intravag…, Journal of clinical pharmac… (2017) | popPK | 10 | [10.1002/jcph.846](https://doi.org/10.1002/jcph.846) | [27925651](https://pubmed.ncbi.nlm.nih.gov/27925651) | The paper describes a population PK analysis for levonorgestrel, but no specific quantitative parameter values (CL, V, etc.) are present in the provided evidence text. |
| `Reinecke_2018.pdf` | Reinecke I et al., An Integrated Population Pharmacokineti…, Journal of clinical pharmac… (2018) | popPK | 10 | [10.1002/jcph.1288](https://doi.org/10.1002/jcph.1288) | [30207604](https://pubmed.ncbi.nlm.nih.gov/30207604) | The paper describes an integrated population PK analysis for levonorgestrel, but the abstract provided does not list specific numeric parameter values (CL, V, etc.), which are likely in the main text or tables not included in the evidence. |
| `Naqvi_1984.pdf` | Naqvi RH et al., Pharmacokinetics of levonorgestrel in t…, Contraception (1984) | popPK | 9 | [10.1016/0010-7824(84)90081-7](https://doi.org/10.1016/0010-7824(84)90081-7) | [6434231](https://pubmed.ncbi.nlm.nih.gov/6434231) | The paper reports quantitative PK parameters (half-lives) from a compartmental model for levonorgestrel in rats. |
| `Madhavan_1981.pdf` | Madhavan Nair K et al., The rabbit as an animal model to study…, Contraception (1981) | popPK | 8 | [10.1016/0010-7824(81)90117-7](https://doi.org/10.1016/0010-7824(81)90117-7) | [7471747](https://pubmed.ncbi.nlm.nih.gov/7471747) | The study reports a compartmental model and qualitative agreement of half-lives, MCR, and Vd with human data, but specific numeric values for these parameters are not provided in the text. |

<sub>queue written 2026-10-07T08:31:26.459358+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abel_2008 | not_relevant | 0 | 0 | The study investigates drug-drug interactions with maraviroc in a mixed-phenotype population and does not report genotype-stratified PK/PD results for levonorgestrel. |
| popPK | Cano-Nicolau_2016 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study using zebrafish and cell lines to investigate endocrine disruption, not a pharmacokinetic study, and it contains no disposition parameters (CL, V, etc.). |
| PGx | Chen_2013 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (vortioxetine with oral contraceptives) and does not report on pharmacogenomic effects of gene variants on levonorgestrel. |
| PGx | Cherala_2014 | not_relevant | 0 | 0 | The study examines the effect of the drug levonorgestrel on CYP2C9 activity (a drug-drug interaction), rather than the effect of a genetic variant on the PK/PD of levonorgestrel. |
| PGx | Cicali_2021 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (CYP3A4 inhibitors/inducers) and physiological factors (BMI), reporting no pharmacogenomic effects of genetic variants on levonorgestrel PK. |
| PGx | Cicali_2022 | not_relevant | 0 | 0 | The paper focuses on CYP3A4-mediated drug-drug interactions (DDIs) and physiologically-based pharmacokinetic modeling, not on genetic variants affecting levonorgestrel pharmacokinetics. |
| popPK | Czarny_2019 | irrelevant | 0 | 0 | This is an in-vitro ecotoxicology study measuring the effect of levonorgestrel on algal growth, not a pharmacokinetic study of levonorgestrel disposition in an organism. |
| popPK | Darwish_2014 | irrelevant | 1 | 0 | The study focuses on the population pharmacokinetic model for ethinyl estradiol (EE), not levonorgestrel, and no numerical PK parameters for levonorgestrel are reported in the evidence. |
| PGx | Edelman_2012 | not_relevant | 0 | 0 | The paper studies the effect of the drug (COC) on CYP3A4 activity (midazolam clearance) in obese women, but does not report on genetic variants or genotypes affecting levonorgestrel PK/PD. |
| PGx | Falcão_2013 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (eslicarbazepine) rather than the effect of a gene variant or genotype. |
| PGx | Fallah_2012 | not_relevant | 0 | 0 | The paper compares the effects of oral contraceptives on metabolic markers (leptin, adiponectin, lipids) between two groups but does not measure the pharmacokinetic (e.g., plasma concentrations) or pharmacodynamic parameters of levonorgestrel itself. |
| popPK | Fotherby_1990 | irrelevant | 3 | 0 | The paper is a review discussing problems in pharmacokinetic analysis and lacks specific quantitative parameter values in the provided evidence. |
| PGx | Frey_2016 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction between riociguat and levonorgestrel, not a pharmacogenomic effect. |
| popPK | García_2024 | irrelevant | 2 | 0 | The paper focuses on developing novel analytical mathematical solutions for convolution in PK models, using levonorgestrel only as a theoretical application case to demonstrate the method, without reporting original quantitative population or compartmental PK parameter values for levonorgestrel. |
| PGx | Hatorp_2003 | not_relevant | 0 | 0 | The study investigates drug-drug interactions on the pharmacokinetics of repaglinide, not pharmacogenomic effects on levonorgestrel. |
| popPK | Higgins_2016 | irrelevant | 0 | 0 | The study evaluates sexual function and satisfaction outcomes in users of levonorgestrel contraceptives but does not report any pharmacokinetic parameters. |
| PGx | Hoehndorf_2012 | not_relevant | 0 | 0 | The paper suggests a drug-disease association (levonorgestrel and cystic fibrosis) using network analysis but does not report specific pharmacokinetic or pharmacodynamic parameters affected by genetic variants. |
| popPK | Hofmann_2020 | relevant | 10 | 2 | This is a population pharmacokinetic study of levonorgestrel, but the provided text only contains relative exposure comparisons (folds) and qualitative statements, lacking specific numeric PK parameter values (CL, V, ka, etc.). |
| PGx | Huth_2024 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions between icenticaftor and levonorgestrel, and does not investigate gene variants or genotypes. |
| PGx | Hézode_2019 | not_relevant | 0 | 0 | The study evaluates the safety and efficacy of HCV antivirals (elbasvir/grazoprevir) in women taking oral contraceptives, but it does not report any gene variants, genotypes, or pharmacogenomic effects on the PK/PD of levonorgestrel. |
| popPK | Jeng_1992 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study regarding cell proliferation and does not report pharmacokinetic disposition parameters for levonorgestrel. |
| popPK | Jensen_2023 | relevant | 10 | 3 | The paper reports a population PK model for levonorgestrel with specific exposure (concentration) values in the abstract, but the core PK parameters (CL, V) are not explicitly listed in the provided text. |
| popPK | Jensen_2023_2 | irrelevant | 1 | 0 | The paper describes a method for monitoring protocol compliance via concentration measurements and does not report pharmacokinetic parameters (CL, V, half-life) for levonorgestrel. |
| PGx | Laine_1999 | not_relevant | 0 | 0 | The study examines the effect of a drug (HRT/levonorgestrel) on the pharmacokinetics of tacrine (drug-drug interaction), not the effect of a gene variant or genotype on levonorgestrel. |
| PGx | Le_2021 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions with CYP3A4 inducers, not pharmacogenomic effects of genetic variants on levonorgestrel pharmacokinetics. |
| PGx | Lingineni_2022 | not_relevant | 0 | 0 | The paper investigates the impact of drug-drug interactions (CYP3A4 inducers) and obesity on levonorgestrel exposure, but does not report pharmacogenomic effects (gene variants/genotypes). |
| popPK | Lundeen_2001 | irrelevant | 0 | 0 | The study is a mechanistic investigation of gene expression (C3 mRNA) in rat uterine tissue, not a pharmacokinetic study, and contains no PK parameters for levonorgestrel. |
| popPK | Luo_2019 | relevant | 10 | 2 | The paper is a population PK study of levonorgestrel, but the provided evidence contains only statistical trends and p-values, with specific numeric parameter values likely in tables or figures not included. |
| popPK | Madhavan_1981 | relevant | 8 | 2 | The study reports a compartmental model and qualitative agreement of half-lives, MCR, and Vd with human data, but specific numeric values for these parameters are not provided in the text. |
| PGx | Malhotra_2009 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving fesoterodine; while it mentions CYP2D6 metabolizer status for fesoterodine's metabolite (5-HMT), it does not report any pharmacogenomic effect on the PK or PD parameters of levonorgestrel. |
| popPK | Markiewicz_1994 | irrelevant | 0 | 0 | The study reports in vitro receptor binding potency (EC50, efficacy) rather than in vivo pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Mazzarino_2018 | not_relevant | 0 | 0 | The paper focuses on the metabolic profile of SR9009, not the pharmacokinetics or pharmacodynamics of levonorgestrel. |
| PGx | McGready_2003 | not_relevant | 0 | 0 | The study investigates the effect of pregnancy and oral contraceptives (containing levonorgestrel) on the metabolism of proguanil, not the effect of a genetic variant on levonorgestrel's PK/PD. |
| PGx | Natale_2016 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (netupitant increasing levonorgestrel exposure), not a pharmacogenomic effect involving a gene variant. |
| PGx | Niculescu_2020 | not_relevant | 0 | 0 | The paper uses levonorgestrel as an example of a drug identified in bioinformatic drug repurposing analyses for Alzheimer's disease; it does not report pharmacokinetic or pharmacodynamic parameters or genetic variants affecting the drug's response. |
| PGx | Palovaara_2003 | not_relevant | 1 | 1 | The paper investigates the effect of hormone pretreatment on CYP2B6 activity using bupropion as a probe substrate, not the effect of a gene variant on levonorgestrel pharmacokinetics. |
| PGx | Palovaara_2003_2 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (OCs affecting omeprazole PK) and does not report pharmacogenomic effects on levonorgestrel PK/PD. |
| PGx | Pinter_2003 | not_relevant | 0 | 0 | The study investigates the effect of VDR genotype on bone metabolism markers, not on the pharmacokinetic or pharmacodynamic parameters of levonorgestrel itself. |
| PGx | Porsová-Dutoit_2006 | not_relevant | 0 | 0 | The text is a general review of male hormonal contraception principles and methods, containing no data on gene variants or genotypes affecting levonorgestrel pharmacokinetics or pharmacodynamics. |
| PGx | Purohit_2025 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions of ritlecitinib, not the effect of gene variants or genotypes on levonorgestrel pharmacokinetics. |
| popPK | Reinecke_2017 | relevant | 10 | 0 | The paper describes a population PK analysis for levonorgestrel, but no specific quantitative parameter values (CL, V, etc.) are present in the provided evidence text. |
| popPK | Reinecke_2018 | relevant | 10 | 3 | The paper describes an integrated population PK analysis for levonorgestrel, but the abstract provided does not list specific numeric parameter values (CL, V, etc.), which are likely in the main text or tables not included in the evidence. |
| PGx | Roberts_2021 | not_relevant | 0 | 0 | The paper assesses a drug-drug interaction (pharmacokinetic) involving dolutegravir, not a gene variant/genotype. |
| PGx | Rordorf_2005 | not_relevant | 0 | 0 | The paper reports the pharmacokinetics of lumiracoxib, not levonorgestrel. |
| PGx | Sabo_2015 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (faldaprevir) affecting pharmacokinetics, not a pharmacogenomic effect (gene variant/genotype) on levonorgestrel. |
| popPK | Schlachter_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for atogepant, not levonorgestrel, which is only mentioned as a concomitant medication. |
| PGx | Sechaud_2024 | not_relevant | 0 | 0 | The study reports pharmacokinetic interactions between midostaurin and levonorgestrel (drug-drug interaction), not the effect of a gene variant/genotype (pharmacogenomic effect) on levonorgestrel parameters. |
| PGx | Shi_2020 | not_relevant | 0 | 0 | The paper studies fertility control in Brandt's voles and does not report pharmacogenomic effects of gene variants on levonorgestrel's PK or PD. |
| popPK | Stanczyk_2022 | relevant | 9 | 3 | The paper describes a population pharmacokinetic model for levonorgestrel and reports simulated non-compartmental parameters (AUC, Cmax), but the specific model structural parameters (clearance, volume, rate constants) are referenced in supplementary tables not provided in the evidence. |
| PGx | Stanczyk_2024_2 | not_relevant | 2 | 0 | The provided abstract describes a review of progestogen metabolism and mentions that the review discusses how genetic polymorphisms alter metabolism, but it does not report a specific pharmacogenomic effect on a PK or PD parameter for levonorgestrel in the text itself. |
| PGx | Sunaga_2021 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (CYP3A4-inducing medications) rather than a pharmacogenomic effect of a specific genetic variant. |
| popPK | Toulitsis_2024 | relevant | 5 | 2 | The paper reports absorption duration and input rate estimates for levonorgestrel from a bioequivalence study re-analysis, but key disposition parameters (CL, V) are not explicitly provided as final values in the text. |
| popPK | Vieira_2019 | irrelevant | 2 | 0 | The study reports raw concentration measurements and qualitative trends for an LNG-IUD but does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for levonorgestrel. |
| popPK | Young_2025 | irrelevant | 0 | 0 | The study is an immunological trial examining HIV co-receptor expression in response to hormonal contraception and does not report pharmacokinetic parameters (CL, V, etc.) for levonorgestrel. |
| popPK | de_2020 | irrelevant | 4 | 3 | Levonorgestrel is used as a probe drug to assess ibrutinib interactions, not as the primary subject for population PK modeling, and while relative GMRs are present, standalone absolute PK parameter values are in Table 3 (not fully provided in text). |
| PGx | de_2020 | not_relevant | 0 | 0 | The study investigates the effect of ibrutinib (a drug) on the pharmacokinetics of levonorgestrel, not the effect of a genetic variant or genotype. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:31 UTC</sub>
