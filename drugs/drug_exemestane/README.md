<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;exemestane&quot;}]"></div>

# exemestane

- **generic name:** exemestane
- **ATC codes:** `L02BG06`
- **DrugBank:** [DB00990](https://go.drugbank.com/drugs/DB00990) · **PubChem:** [CID 60198](https://pubchem.ncbi.nlm.nih.gov/compound/60198)
- **molar mass:** 296.4034 g/mol (C20H24O2) — DrugBank
- **groups:** approved, investigational

## About

Exemestane is an aromatase inhibitor used to treat breast cancer, including invasive ductal carcinoma. It is an approved medicine and remains in use as an anticancer endocrine therapy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418819](https://www.wikidata.org/wiki/Q418819) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| exemestane | parent | 296.403 | C20H24O2 | DrugBank | [60198](https://pubchem.ncbi.nlm.nih.gov/compound/60198) | Valle_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:13 | 8:41 | 0/1/0 | 0/0/1 | 1/0/9 | 87,683/4,557 | einfracz / qwen3.8-27b | 11 | 1/10 | 10/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Valle_2005_reference](drugs/drug_exemestane/Exemestane_Valle2005_reference.md) | — | 1-compartment (no model) | 2 | Valle M et al., A predictive model for exemestane pharm…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02335.x](https://doi.org/10.1111/j.1365-2125.2005.02335.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Valle_2005_E1S](drugs/drug_exemestane/pd_Valle_2005_E1S.md) | plasma estrone sulphate (E1S) concentrations ← exemestane · indirect response — drug inhibits the production of plasma estrone sulphate (E1S) concentrations | — | Valle M et al., A predictive model for exemestane pharm…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02335.x](https://doi.org/10.1111/j.1365-2125.2005.02335.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Peterson_2017](drugs/drug_exemestane/pgx_Peterson_2017_CYP2C9_safety.md) | Peterson A et al., In vitro metabolism of exemestane by he…, Pharmacology research & per… (2017) | [10.1002/prp2.314](https://doi.org/10.1002/prp2.314) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **GPR160** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Cairns_2021](drugs/drug_exemestane/pgx_Cairns_2021_GPR160_Q100.md) | Cairns J et al., Interaction Between SNP Genotype and Ef…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2311](https://doi.org/10.1002/cpt.2311) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **LY75** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Cairns_2021](drugs/drug_exemestane/pgx_Cairns_2021_LY75_Q100.md) | Cairns J et al., Interaction Between SNP Genotype and Ef…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2311](https://doi.org/10.1002/cpt.2311) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Hertz_2017](drugs/drug_exemestane/pgx_Hertz_2017_CYP3A4_Q100.md) | Hertz DL et al., Polymorphisms in drug-metabolizing enzy…, The pharmacogenomics journal (2017) | [10.1038/tpj.2016.60](https://doi.org/10.1038/tpj.2016.60) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **UGT2B17** | `Q27` · CL/F | metabolism | [Luo_2018](drugs/drug_exemestane/pgx_Luo_2018_UGT2B17_Q27.md) | Luo S et al., Role of the UGT2B17 deletion in exemest…, The pharmacogenomics journal (2018) | [10.1038/tpj.2017.18](https://doi.org/10.1038/tpj.2017.18) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP1A2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Peterson_2017](drugs/drug_exemestane/pgx_Peterson_2017_CYP1A2_Q100.md) | Peterson A et al., In vitro metabolism of exemestane by he…, Pharmacology research & per… (2017) | [10.1002/prp2.314](https://doi.org/10.1002/prp2.314) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Peterson_2017](drugs/drug_exemestane/pgx_Peterson_2017_CYP2C19_Q100.md) | Peterson A et al., In vitro metabolism of exemestane by he…, Pharmacology research & per… (2017) | [10.1002/prp2.314](https://doi.org/10.1002/prp2.314) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2C8** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Peterson_2017](drugs/drug_exemestane/pgx_Peterson_2017_CYP2C8_Q100.md) | Peterson A et al., In vitro metabolism of exemestane by he…, Pharmacology research & per… (2017) | [10.1002/prp2.314](https://doi.org/10.1002/prp2.314) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Peterson_2017](drugs/drug_exemestane/pgx_Peterson_2017_CYP2D6_Q100.md) | Peterson A et al., In vitro metabolism of exemestane by he…, Pharmacology research & per… (2017) | [10.1002/prp2.314](https://doi.org/10.1002/prp2.314) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **CYP3A4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Peterson_2017](drugs/drug_exemestane/pgx_Peterson_2017_CYP3A4_Q100.md) | Peterson A et al., In vitro metabolism of exemestane by he…, Pharmacology research & per… (2017) | [10.1002/prp2.314](https://doi.org/10.1002/prp2.314) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=exemestane) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` formation | paper PGx gene |
| metabolism | liver | `CYP1A2` formation, `CYP2C19` formation, `CYP2C8` formation, `CYP2C9` safety_allele, `CYP2D6` formation, `CYP3A4` metabolism/substrate, `UGT2B17` metabolism | DrugBank actor |
| metabolism | small intestine | `CYP3A4` metabolism/substrate, `UGT2B17` metabolism | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: GPR160 (target), LY75 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 82 matched, 46 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_11 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Valle_2005.pdf` | Valle M et al., A predictive model for exemestane pharm…, British journal of clinical… (2005) | popPK | 10 | [10.1111/j.1365-2125.2005.02335.x](https://doi.org/10.1111/j.1365-2125.2005.02335.x) | [15752382](https://pubmed.ncbi.nlm.nih.gov/15752382) | The paper reports quantitative population PK parameters (compartmental rate constants and absorption rates) for exemestane directly in the text. |
| `Abubakar_2014.pdf` | Abubakar MB et al., The influence of genetic polymorphisms…, Pharmacogenetics and genomi… (2014) | pgx | 8 | [10.1097/FPC.0000000000000092](https://doi.org/10.1097/FPC.0000000000000092) | [25203739](https://www.ncbi.nlm.nih.gov/pubmed/25203739) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Chen_2016.pdf` | Chen SM et al., Impact of UGT2B17 Gene Deletion on the…, Journal of clinical pharmac… (2016) | pgx | 8 | [10.1002/jcph.673](https://doi.org/10.1002/jcph.673) | [26608382](https://www.ncbi.nlm.nih.gov/pubmed/26608382) | metadata signals extractable PGX data (UGT2B17, PK/PD-context) |
| `Desta_2011.pdf` | Desta Z et al., Plasma letrozole concentrations in post…, Clinical pharmacology and t… (2011) | pgx | 8 | [10.1038/clpt.2011.174](https://doi.org/10.1038/clpt.2011.174) | [21975350](https://www.ncbi.nlm.nih.gov/pubmed/21975350) | metadata signals extractable PGX data (CYP2A6, PK/PD-context) |
| `Hertz_2021.pdf` | Hertz DL et al., Genome-wide association study of letroz…, Pharmacogenetics and genomi… (2021) | pgx | 8 | [10.1097/FPC.0000000000000429](https://doi.org/10.1097/FPC.0000000000000429) | [34096894](https://www.ncbi.nlm.nih.gov/pubmed/34096894) | metadata signals extractable PGX data (CYP2A6, PK/PD-context) |
| `Kamdem_2019.pdf` | Kamdem LK et al., Exemestane may be less detrimental than…, Breast cancer research and… (2019) | pgx | 8 | [10.1007/s10549-019-05158-3](https://doi.org/10.1007/s10549-019-05158-3) | [30747308](https://www.ncbi.nlm.nih.gov/pubmed/30747308) | metadata signals extractable PGX data (UGT2B17, PK/PD-context) |
| `Kamdem_2011.pdf` | Kamdem LK et al., In vitro cytochrome P450-mediated metab…, Drug metabolism and disposi… (2011) | pgx | 7 | [10.1124/dmd.110.032276](https://doi.org/10.1124/dmd.110.032276) | [20876785](https://www.ncbi.nlm.nih.gov/pubmed/20876785) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Schwartzberg_2017.pdf` | Schwartzberg LS et al., A Phase I/Ib Study of Enzalutamide Alon…, Clinical cancer research :… (2017) | pgx | 7 | [10.1158/1078-0432.CCR-16-2339](https://doi.org/10.1158/1078-0432.CCR-16-2339) | [28280092](https://www.ncbi.nlm.nih.gov/pubmed/28280092) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ventura_2012.pdf` | Ventura V et al., In vitro evaluation of the interaction…, Drug metabolism and disposi… (2012) | pgx | 7 | [10.1124/dmd.111.044271](https://doi.org/10.1124/dmd.111.044271) | [22451700](https://www.ncbi.nlm.nih.gov/pubmed/22451700) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Ho_2020.pdf` | Ho V et al., Variation in the UGT2B17 genotype, exem…, Breast cancer research and… (2020) | pgx | 5 | [10.1007/s10549-020-05812-1](https://doi.org/10.1007/s10549-020-05812-1) | [32715442](https://www.ncbi.nlm.nih.gov/pubmed/32715442) | metadata signals extractable PGX data (UGT2B17) |
| `Santa-Maria_2016.pdf` | Santa-Maria CA et al., Association of Variants in Candidate Ge…, Clinical cancer research :… (2016) | pgx | 5 | [10.1158/1078-0432.CCR-15-1213](https://doi.org/10.1158/1078-0432.CCR-15-1213) | [26463708](https://www.ncbi.nlm.nih.gov/pubmed/26463708) | metadata signals extractable PGX data (CYP19A1) |

<sub>queue written 2026-10-06T22:12:52.275514+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abubakar_2014 | not_relevant | 2 | 2 | The paper is a review focused primarily on the pharmacogenomics of anastrozole, and while it mentions exemestane as a class-mate, it does not report specific PK/PD pharmacogenomic effect data for exemestane. |
| PGx | Cairns_2020 | not_relevant | 2 | 2 | The paper reports a pharmacogenomic effect on pharmacodynamic parameters (estrogen levels/cancer outcome) specifically for anastrozole, but explicitly states that the CSMD1 SNP and its associated mechanisms do not affect the sensitivity or expression patterns for exemestane. |
| PGx | Cairns_2021 | not_relevant | 5 | 2 | The study reports gene-drug interactions affecting clinical efficacy (survival/recurrence), but does not report changes in specific pharmacokinetic or pharmacodynamic parameters like plasma estradiol levels or drug concentration. |
| PGx | Clark_2017 | not_relevant | 0 | 0 | The text only mentions PGE2 urine levels and subject numbers, with no information on exemestane or pharmacogenomic effects. |
| PGx | Desta_2011 | not_relevant | 0 | 0 | The paper analyzes letrozole pharmacokinetics and CYP2A6, not exemestane. |
| PGx | Detlefsen_2022 | not_relevant | 2 | 5 | The paper discusses the impact of AKR1C3 variants on the reduction of exemestane to 17β-dihydroexemestane, but it focuses primarily on the functional characterization of AKR1C3 variants rather than explicitly reporting a change in the PK or PD parameters of exemestane itself. |
| popPK | Ghosh_2012 | irrelevant | 0 | 0 | This is a structure-based drug design and mechanistic study focusing on in vitro enzymatic inhibition (IC50) and cell proliferation (EC50), not a pharmacokinetic study reporting disposition parameters for exemestane. |
| PGx | Hertz_2017_2 | not_relevant | 2 | 0 | The text describes a review summarizing associations for aromatase inhibitors generally, but does not present specific quantitative pharmacogenomic data or fitted effect sizes for exemestane. |
| PGx | Hertz_2021 | not_relevant | 1 | 0 | The paper focuses on letrozole pharmacokinetics and CYP2A6 variants, not pharmacogenomic effects on exemestane. |
| PGx | Ho_2020 | not_relevant | 6 | 4 | The paper reports associations between genotype and adverse clinical symptoms (PD outcomes/toxicity) rather than a direct quantitative change in a pharmacokinetic parameter (e.g., AUC, Cmax) or a primary pharmacodynamic effect. |
| PGx | Houtsma_2021 | not_relevant | 0 | 10 | The paper reports a prognostic marker for survival outcomes (DFS/OS) rather than a pharmacogenomic effect on specific PK or PD parameters of exemestane. |
| PGx | Ingle_2013 | not_relevant | 2 | 2 | The paper discusses pharmacogenomics of exemestane in the context of a trial (MA.27) but reports genetic associations with adverse events (musculoskeletal) and mechanisms in vitro; it does not report a specific pharmacokinetic or pharmacodynamic parameter change (e.g., hormone suppression levels) directly linked to exemestane exposure, but rather focuses on general AI/SERM pharmacogenomics and specifically details mechanisms related to inflammation rather than drug exposure or standard PD biomarkers for exemestane itself. |
| PGx | Kadakia_2016 | not_relevant | 1 | 0 | The paper analyzes patient-reported outcomes and predictors of discontinuation, but does not report a specific gene variant affecting the pharmacokinetic or pharmacodynamic parameters of exemestane. |
| PGx | Kamdem_2011 | not_relevant | 0 | 0 | The paper describes in vitro metabolism of exemestane but does not report a specific genetic variant or genotype affecting pharmacokinetic or pharmacodynamic parameters. |
| PGx | Kamdem_2019 | not_relevant | 3 | 5 | The paper investigates the pharmacodynamic effect on a secondary endpoint (bone mineral density/bone health) rather than the primary PK parameters of exemestane, and the specific gene-drug interaction trend was not statistically significant. |
| PGx | Makhlin_2022 | not_relevant | 2 | 3 | The paper reports pharmacodynamic effects of ruxolitinib (target inhibition) and associations between IL-6 genotypes and estrogen levels/responses, but does not report pharmacogenomic effects on the PK/PD parameters of exemestane. |
| popPK | McCormack_2008 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for fulvestrant, while exemestane serves only as the comparator arm in the trial. |
| PGx | Muhammad_2016 | not_relevant | 1 | 2 | The paper is a general review of metabolism and toxicity of chemopreventive drugs and mentions genetic polymorphism only in broad terms without reporting specific pharmacogenomic effects on PK/PD parameters for exemestane. |
| PGx | Niravath_2018 | not_relevant | 4 | 5 | The study reports an association between VDR genotype and arthralgia risk/cytokine levels (clinical PD/safety), not a pharmacokinetic or direct pharmacodynamic parameter of exemestane itself. |
| PGx | Pascual_2017 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on everolimus pharmacokinetics and toxicity, but not on exemestane. |
| PGx | Santa-Maria_2016 | not_relevant | 0 | 0 | The paper investigates the association of gene variants with lipid profiles, which is a metabolic side effect or PD biomarker for toxicity, not a standard PK/PD parameter of the drug exemestane itself (e.g., clearance, AUC, tumor response). |
| PGx | Santa-Maria_2018 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of zoledronic acid to reduce musculoskeletal symptoms and reports no pharmacogenomic data or PK/PD effects for exemestane. |
| PGx | Schwartzberg_2017 | not_relevant | 0 | 0 | The paper describes a pharmacokinetic drug-drug interaction (induction by enzalutamide), not a pharmacogenomic effect of a gene variant on exemestane. |
| popPK | Sheng_2019 | irrelevant | 0 | 0 | The study evaluates musculoskeletal symptoms and carpal tunnel syndrome, reporting no pharmacokinetic parameters for exemestane. |
| PGx | Sheng_2019 | not_relevant | 0 | 0 | The paper assesses clinical symptoms (Carpal Tunnel Syndrome) and sensory outcomes (2-point discrimination) but does not report on pharmacokinetic parameters or genotype-based pharmacodynamic changes. |
| PGx | Untch_2010 | not_relevant | 0 | 0 | The text is a general review of clinical practice guidelines for adjuvant endocrine therapy and does not report specific pharmacogenomic effects on PK or PD parameters. |
| PGx | Ventura_2012 | not_relevant | 0 | 0 | The paper evaluates the interaction potential of irosustat, not exemestane. |
| PGx | Zhu_2015 | not_relevant | 2 | 0 | The paper discusses a computational method for drug repurposing based on gene modules and general drug sensitivity, without reporting specific genetic variants or genotypes that alter the pharmacokinetic or pharmacodynamic parameters of exemestane. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:12 UTC</sub>
