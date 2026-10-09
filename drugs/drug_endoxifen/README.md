<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Endoxifen&quot;}]"></div>

# Endoxifen

- **generic name:** Endoxifen
- **ATC codes:** not captured
- **DrugBank:** [DB31662](https://go.drugbank.com/drugs/DB31662) · **PubChem:** not captured
- **groups:** investigational

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Z-endoxifen (endoxifen) | parent | 373.496 | C25H27NO2 | PubChem | [10090750](https://pubchem.ncbi.nlm.nih.gov/compound/10090750) | Koubek_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 06:44 | 23:32 | 0/2/0 | 0/1/1 | 0/0/2 | 471,872/14,073 | einfracz / qwen3.8-27b | 30 | 3/21 | 30/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Dilli_2022_reference](drugs/drug_endoxifen/Endoxifen_Dilli2022_reference.md) | — | parent + metabolite (no model) | 0 | Dilli Batcha JS et al., Factors Influencing Pharmacokinetics of…, Biology (2022) | [10.3390/biology12010051](https://doi.org/10.3390/biology12010051) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Koubek_2022_reference](drugs/drug_endoxifen/Endoxifen_Koubek2022_reference.md) | — | 2-compartment (no model) | 3 | Koubek EJ et al., Population Pharmacokinetics of Z-Endoxi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.2053](https://doi.org/10.1002/jcph.2053) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sanchez-Spitman_2020_RFSt](drugs/drug_endoxifen/pd_Sanchez_Spitman_2020_RFSt.md) | relapse-free survival ← endoxifen · time-to-event model | — | Sanchez-Spitman AB et al., Exposure-response analysis of endoxifen…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04089-x](https://doi.org/10.1007/s00280-020-04089-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sanchez-Spitman_2020_probability_of_relapse](drugs/drug_endoxifen/pd_Sanchez_Spitman_2020_probability_of_relapse.md) | probability of relapse ← endoxifen · categorical (graded) response model | — | Sanchez-Spitman AB et al., Exposure-response analysis of endoxifen…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04089-x](https://doi.org/10.1007/s00280-020-04089-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sanchez-Spitman_2020_probability_of_tamoxifen_discontinuation](drugs/drug_endoxifen/pd_Sanchez_Spitman_2020_probability_of_tamoxifen_discontinuatio.md) | probability of tamoxifen discontinuation ← endoxifen · categorical (graded) response model | — | Sanchez-Spitman AB et al., Exposure-response analysis of endoxifen…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04089-x](https://doi.org/10.1007/s00280-020-04089-x) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Groenland_2019_2_exposure_response_relationships](drugs/drug_endoxifen/pd_Groenland_2019_2_exposure_response_relationships.md) | exposure-response relationships ← endoxifen · model not identified | — | Groenland SL et al., Individualized dosing of oral targeted…, European journal of clinica… (2019) | [10.1007/s00228-019-02704-2](https://doi.org/10.1007/s00228-019-02704-2) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q88` · AUC | formation | [Hussaarts_2019](drugs/drug_endoxifen/pgx_Hussaarts_2019_CYP2D6_Q88.md) | Hussaarts KGAM et al., Impact of Curcumin (with or without Pip…, Cancers (2019) | [10.3390/cancers11030403](https://doi.org/10.3390/cancers11030403) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q305` · kfm | formation | [Irarrázaval_2016](drugs/drug_endoxifen/pgx_Irarr_zaval_2016_CYP2D6_Q305.md) | Irarrázaval O ME et al., [Antidepressants agents in breast cance…, Revista medica de Chile (2016) | [10.4067/S0034-98872016001000013](https://doi.org/10.4067/S0034-98872016001000013) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=endoxifen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` formation | paper PGx gene |
| metabolism | liver | `CYP2D6` formation | paper PGx gene |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 528 matched, 94 returned
- **screened:** 13  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_19 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Koubek_2022.pdf` | Koubek EJ et al., Population Pharmacokinetics of Z-Endoxi…, Journal of clinical pharmac… (2022) | popPK | 10 | [10.1002/jcph.2053](https://doi.org/10.1002/jcph.2053) | [35358345](https://pubmed.ncbi.nlm.nih.gov/35358345) | The study explicitly reports quantitative population pharmacokinetic parameters (clearance, volumes of distribution) for Z-endoxifen in patients with advanced solid tumors. |
| `ter_2014.pdf` | ter Heine R et al., Population pharmacokinetic modelling to…, British journal of clinical… (2014) | popPK | 10 | [10.1111/bcp.12388](https://doi.org/10.1111/bcp.12388) | [24697814](https://pubmed.ncbi.nlm.nih.gov/24697814) | This is a population pharmacokinetic modeling study for endoxifen in humans, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract or evidence snippet. |
| `Puszkiel_2021.pdf` | Puszkiel A et al., Model-Based Quantification of Impact of…, Clinical pharmacology and t… (2021) | popPK | 9 | [10.1002/cpt.2077](https://doi.org/10.1002/cpt.2077) | [33047329](https://pubmed.ncbi.nlm.nih.gov/33047329) | The paper develops a population pharmacokinetic model for tamoxifen and its metabolites including endoxifen, but specific quantitative parameter values (like CL or V) are not explicitly listed in the provided text, only qualitative relative changes. |
| `Yuan_2017.pdf` | Yuan S et al., A Pharmacokinetic-Pharmacodynamic Model…, Drug metabolism letters (2017) | popPK | 7 | [10.2174/1872312811666170815160751](https://doi.org/10.2174/1872312811666170815160751) | [28814243](https://pubmed.ncbi.nlm.nih.gov/28814243) | The study reports a compartmental PK model for endoxifen with specific numeric rate constants (k42, k34), but lacks standard derived parameters like CL, V, or half-life in the provided evidence. |
| `Chae_2015.pdf` | Chae YJ et al., Endoxifen, the active metabolite of tam…, European journal of pharmac… (2015) | pd | 4 | [10.1016/j.ejphar.2015.01.048](https://doi.org/10.1016/j.ejphar.2015.01.048) | [25680947](https://www.ncbi.nlm.nih.gov/pubmed/25680947) | metadata signals extractable PD data (IC50) |
| `Yong_2020.pdf` | Yong YF et al., Liquid chromatography-tandem mass spect…, Journal of chromatography.… (2020) | pd | 4 | [10.1016/j.jchromb.2020.122148](https://doi.org/10.1016/j.jchromb.2020.122148) | [32416571](https://www.ncbi.nlm.nih.gov/pubmed/32416571) | metadata signals extractable PD data (IC50) |
| `de_2017.pdf` | de Vries Schultink AH et al., An Antiestrogenic Activity Score for ta…, Breast cancer research and… (2017) | pd | 4 | [10.1007/s10549-016-4083-6](https://doi.org/10.1007/s10549-016-4083-6) | [28005246](https://www.ncbi.nlm.nih.gov/pubmed/28005246) | metadata signals extractable PD data (IC50) |
| `Agema_2023.pdf` | Agema BC et al., Toward model-informed precision dosing…, Biomedicine & pharmacothera… (2023) | pgx | 8 | [10.1016/j.biopha.2023.114369](https://doi.org/10.1016/j.biopha.2023.114369) | [36753957](https://www.ncbi.nlm.nih.gov/pubmed/36753957) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Binkhorst_2015.pdf` | Binkhorst L et al., Individualization of tamoxifen therapy:…, Cancer treatment reviews (2015) | pgx | 8 | [10.1016/j.ctrv.2015.01.002](https://doi.org/10.1016/j.ctrv.2015.01.002) | [25618289](https://www.ncbi.nlm.nih.gov/pubmed/25618289) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Brauch_2009.pdf` | Brauch H et al., Pharmacogenomics of tamoxifen therapy, Clinical chemistry (2009) | pgx | 8 | [10.1373/clinchem.2008.121756](https://doi.org/10.1373/clinchem.2008.121756) | [19574470](https://www.ncbi.nlm.nih.gov/pubmed/19574470) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Del_2012.pdf` | Del Re M et al., Pharmacogenetics of anti-estrogen treat…, Cancer treatment reviews (2012) | pgx | 8 | [10.1016/j.ctrv.2011.08.003](https://doi.org/10.1016/j.ctrv.2011.08.003) | [21917382](https://www.ncbi.nlm.nih.gov/pubmed/21917382) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Johansson_2016.pdf` | Johansson H et al., A pooled analysis of CYP2D6 genotype in…, Breast cancer research and… (2016) | pgx | 8 | [10.1007/s10549-016-3932-7](https://doi.org/10.1007/s10549-016-3932-7) | [27484880](https://www.ncbi.nlm.nih.gov/pubmed/27484880) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kiyotani_2012.pdf` | Kiyotani K et al., Pharmacogenomics of tamoxifen: roles of…, Drug metabolism and pharmac… (2012) | pgx | 8 | [10.2133/dmpk.dmpk-11-rv-084](https://doi.org/10.2133/dmpk.dmpk-11-rv-084) | [22041137](https://www.ncbi.nlm.nih.gov/pubmed/22041137) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Sanchez-Spitman_2019.pdf` | Sanchez-Spitman AB et al., Clinical pharmacokinetics and pharmacog…, Expert review of clinical p… (2019) | pgx | 8 | [10.1080/17512433.2019.1610390](https://doi.org/10.1080/17512433.2019.1610390) | [31008668](https://www.ncbi.nlm.nih.gov/pubmed/31008668) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Slanař_2021.pdf` | Slanař O et al., Recent advances in the personalized tre…, Expert opinion on drug meta… (2021) | pgx | 8 | [10.1080/17425255.2021.1865310](https://doi.org/10.1080/17425255.2021.1865310) | [33320718](https://www.ncbi.nlm.nih.gov/pubmed/33320718) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Xiong_2016.pdf` | Xiong W et al., [Advances in the research of pharmacoge…, Yao xue xue bao = Acta phar… (2016) | pgx | 8 | not captured | [29924509](https://www.ncbi.nlm.nih.gov/pubmed/29924509) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ximenez_2020.pdf` | Ximenez JP et al., Post-marketing assessment of generic ta…, Basic & clinical pharmacolo… (2020) | pgx | 7 | [10.1111/bcpt.13368](https://doi.org/10.1111/bcpt.13368) | [31758654](https://www.ncbi.nlm.nih.gov/pubmed/31758654) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Beverage_2007.pdf` | Beverage JN et al., CYP2D6 polymorphisms and the impact on…, Journal of pharmaceutical s… (2007) | pgx | 5 | [10.1002/jps.20892](https://doi.org/10.1002/jps.20892) | [17518364](https://www.ncbi.nlm.nih.gov/pubmed/17518364) | metadata signals extractable PGX data (CYP2D6) |
| `Higgins_2011.pdf` | Higgins MJ et al., Pharmacogenetics of endocrine therapy f…, Annual review of medicine (2011) | pgx | 5 | [10.1146/annurev-med-070909-182545](https://doi.org/10.1146/annurev-med-070909-182545) | [21226615](https://www.ncbi.nlm.nih.gov/pubmed/21226615) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-09T06:39:53.500133+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agema_2023 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PGx | Beverage_2007 | not_relevant | 5 | 1 | The text is a review summary stating a general association (PMs have lower levels) but provides no specific fitted effect size or quantitative PK data for endoxifen. |
| PGx | Binkhorst_2015 | not_relevant | 6 | 3 | The provided text is a discussion summary that mentions the influence of variants on endoxifen but lacks specific data, fitted effect sizes, or quantitative results. |
| PGx | Binkhorst_2016 | not_relevant | 2 | 1 | The paper investigates the effect of drug-drug interaction (SSRI inhibition) on PK, but does not stratify by or report specific pharmacogenomic variants (e.g., CYP2D6 genotype). |
| PGx | Brauch_2009 | not_relevant | 3 | 0 | The text is a summary or review introduction describing the role of CYP2D6 in tamoxifen metabolism and clinical outcomes (recurrence rates), but it does not report specific quantitative changes in PK/PD parameters of endoxifen. |
| popPK | Centanni_2024 | irrelevant | 2 | 0 | The paper is a simulation study comparing pharmacogenetic testing and TDM; while it mentions a model for endoxifen (tamoxifen's metabolite), it does not report original quantitative PK parameters for endoxifen, and the numeric values in the text pertain to other drugs like tacrolimus and 5-FU. |
| popPK | Choi_2026 | irrelevant | 0 | 0 | This is a narrative review of pharmacometric methods in special populations that mentions endoxifen only briefly in the context of tamoxifen dosing, without reporting original quantitative PK parameters for endoxifen. |
| PGx | Del_2012 | not_relevant | 6 | 2 | The text is a general review discussing the concept of CYP2D6 affecting endoxifen levels but does not report specific quantitative pharmacokinetic or pharmacodynamic data from a study. |
| PGx | Dürrbeck_2016 | not_relevant | 2 | 0 | The paper discusses the drug-drug interaction between terbinafine and tamoxifen (via CYP2D6 inhibition affecting endoxifen levels) but does not report pharmacogenomic effects of genetic variants on endoxifen PK/PD. |
| popPK | Frederiksen_2021 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of tedatioxetine and its metabolite Lu AA37208, not endoxifen. |
| PGx | Fujita_2006 | not_relevant | 1 | 0 | The paper is a general review of CYPs in anticancer therapy and mentions endoxifen only as a qualitative example of CYP2D6 metabolism without reporting specific study data or quantitative effects. |
| PGx | Hansten_2018 | not_relevant | 4 | 2 | The paper is a review discussing drug-drug interactions (DDIs) involving CYP2D6 inhibitors and enzyme inducers, rather than reporting primary pharmacogenomic (genotype-specific) effects on PK/PD parameters. |
| PGx | Higgins_2011 | not_relevant | 2 | 0 | The paper discusses the association between CYP2D6 genotype and clinical breast cancer outcomes, but does not report specific pharmacokinetic (e.g., AUC, Cmax) or pharmacodynamic parameter changes of endoxifen. |
| PGx | Irarrázaval_2016 | not_relevant | 5 | 2 | This is a review of antidepressant selection guidelines, not a study reporting a specific quantitative pharmacokinetic/pharmacodynamic effect size for a genetic variant on endoxifen. |
| PGx | Jayaraman_2021 | not_relevant | 2 | 0 | The text is a review summarizing general pharmacology and clinical efficacy of endoxifen, mentioning its origin from CYP2D6 but reporting no specific pharmacogenomic analysis linking genotypes to PK/PD parameters. |
| PGx | Kiyotani_2012 | not_relevant | 3 | 0 | The text is an introductory abstract for a review summarizing the role of polymorphisms, but it does not report specific experimental results, fitted effect sizes, or detailed PK/PD parameter changes for endoxifen within the provided text. |
| popPK | Luijendijk_2025 | irrelevant | 0 | 0 | The study investigates the association between drug exposure and cognitive function in breast cancer patients, reporting no pharmacokinetic disposition parameters (CL, V, ka, etc.) for endoxifen. |
| PGx | Maximov_2014 | not_relevant | 4 | 3 | The study reports that endoxifen contributes to gene expression blockade (PD), but it does not demonstrate that the CYP2D6 genotype directly changes a specific PK or PD parameter magnitude; rather, it uses clinical metabolite levels to simulate effects. |
| popPK | Mc_2024 | irrelevant | 2 | 2 | The study focuses on exposure-response and pharmacometrics (simulations of TDM trials) rather than reporting intrinsic pharmacokinetic parameters (CL, V, ka) for endoxifen. |
| PGx | Mc_2024 | not_relevant | 0 | 0 | The paper focuses on therapeutic drug monitoring and clinical trial feasibility based on endoxifen exposure, without reporting any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Montenegro_2011 | irrelevant | 0 | 0 | The study is an in vitro mechanistic pharmacology investigation of vasorelaxation in rat aortic rings, reporting no pharmacokinetic disposition parameters. |
| popPK | Mueller-Schoell_2020 | irrelevant | 0 | 0 | The evidence text describes a pharmacometric model of the parent drug tamoxifen and its effect on endoxifen levels, but does not report quantitative PK parameters (CL, V, Q, ka) specifically for endoxifen as the subject drug in a way that fits the standard extraction criteria for endoxifen disposition (usually requiring endoxifen dosing or specific endoxifen PK modeling details not present in this abstract). |
| PGx | Mueller-Schoell_2020 | not_relevant | 4 | 2 | The paper reports the impact of CYP2D6 phenotype on PK, but the specific quantitative effect size (theta) for the genotype is not provided in the text, and the primary focus is on obesity/weight. |
| popPK | Mueller-Schoell_2021 | relevant | 5 | 2 | This is a simulation study using a pre-existing PK model for endoxifen; while it describes the model structure and reports simulated concentrations/targets, it does not report the specific numeric parameter estimates (CL, V, Q) within the provided text, referring instead to previous publications and supplementary tables. |
| popPK | Mueller-Schoell_2021_2 | irrelevant | 5 | 0 | The paper uses a previously published population PK model for endoxifen (reference [12]) for simulations to assess target attainment, but does not report the quantitative parameter values (CL, V, etc.) for endoxifen itself in the provided text. |
| popPK | Nakamura_2018 | irrelevant | 5 | 1 | The paper simulates tamoxifen PK to predict clinical trial outcomes, mentioning endoxifen levels but not reporting quantitative disposition parameters (CL, V, etc.) for endoxifen itself. |
| popPK | Oturkar_2024 | irrelevant | 2 | 1 | The paper reports a population PK model for tamoxifen, and endoxifen is only a metabolite mentioned as part of that model, with specific PK parameters (like clearance) not directly reported or extracted for endoxifen itself in the provided evidence. |
| popPK | Perry_2020 | irrelevant | 0 | 0 | The paper is a general review of PBPK modeling applications and does not report specific quantitative PK parameters for endoxifen. |
| popPK | Puszkiel_2021 | relevant | 9 | 2 | The paper develops a population pharmacokinetic model for tamoxifen and its metabolites including endoxifen, but specific quantitative parameter values (like CL or V) are not explicitly listed in the provided text, only qualitative relative changes. |
| popPK | Remmel_2026 | irrelevant | 0 | 0 | This is a mechanistic and transcriptomic review of endoxifen's potential in DMD, containing no quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| PGx | Ribeiro_2014 | not_relevant | 3 | 2 | The paper discusses CYP2D6 variants affecting tamoxifen metabolism generally but does not report a specific quantitative pharmacogenomic effect on a PK or PD parameter of endoxifen. |
| PGx | Sanchez-Spitman_2019_2 | not_relevant | 0 | 0 | The study examines the association between CYP2D6 genotypes and clinical outcomes (relapse-free survival), not the effect of genotypes on the PK/PD parameter (endoxifen concentration itself). |
| popPK | Sanchez-Spitman_2020 | irrelevant | 1 | 0 | The study is an exposure-response analysis of endoxifen concentrations versus clinical outcome (survival) and does not report quantitative pharmacokinetic disposition parameters (e.g., clearance, volume, half-life) or a compartmental/population-PK model. |
| PGx | Sanchez-Spitman_2021 | not_relevant | 1 | 5 | The study explicitly reports that CYP2C19 genotypes had no significant effect on endoxifen concentrations, although it does show a significant CYP2D6 effect. |
| PGx | Sideras_2010 | not_relevant | 2 | 1 | The text describes the biological pathway of CYP2D6-mediated endoxifen formation, but it does not report or quantify the specific pharmacogenomic effect of a gene variant/genotype on a pharmacokinetic parameter of endoxifen in this specific paper. |
| PGx | Slanař_2021 | not_relevant | 2 | 0 | The text is a review abstract discussing the general importance of CYP2D6 and endoxifen levels but does not report specific experimental results or fitted effect sizes of genetic variants on PK/PD parameters. |
| popPK | Somogyi_2012 | irrelevant | 0 | 0 | no_text gate: only 18 chars of text extracted (&lt; 400) |
| popPK | Størset_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of risperidone and its metabolite 9-hydroxyrisperidone, not endoxifen. |
| popPK | Wali_2026 | irrelevant | 0 | 0 | The paper is a review of the gut microbiome in breast cancer and does not report any pharmacokinetic parameters for endoxifen. |
| PGx | Wu_2011 | not_relevant | 0 | 0 | The study investigates the mechanism of action involving ERbeta expression, not the effect of a patient's pharmacogenomic variant (like CYP2D6 genotype) on drug PK or PD parameters. |
| PGx | Ximenez_2020 | not_relevant | 1 | 1 | The paper is a post-marketing assessment of generic tamoxifen and does not report pharmacogenomic effects on endoxifen PK/PD parameters. |
| PGx | Xiong_2016 | not_relevant | 0 | 0 | The text is a general review introduction summarizing associations between CYP2D6/3A4 and tamoxifen metabolites without reporting specific quantitative pharmacokinetic or pharmacodynamic data for endoxifen. |
| PGx | Zhang_2015 | not_relevant | 1 | 0 | The paper reports preclinical PK improvements of a new prodrug (ZB483) in mice but does not report quantitative pharmacogenomic effects of CYP2D6 variants on endoxifen parameters. |
| popPK | ter_2014 | relevant | 10 | 2 | This is a population pharmacokinetic modeling study for endoxifen in humans, but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract or evidence snippet. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 06:39 UTC</sub>
