<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;arsenic trioxide&quot;}]"></div>

# arsenic trioxide

- **generic name:** arsenic trioxide
- **ATC codes:** `L01XX27`
- **DrugBank:** [DB01169](https://go.drugbank.com/drugs/DB01169) · **PubChem:** [CID 261004](https://pubchem.ncbi.nlm.nih.gov/compound/261004)
- **molar mass:** 197.84 g/mol (As2O3) — DrugBank
- **groups:** approved, investigational

## About

Arsenic trioxide is an anticancer drug used to treat acute promyelocytic leukemia. It is an approved medicine, with authorised products available in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7739](https://www.wikidata.org/wiki/Q7739) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| arsenic_trioxide (arsenic trioxide) | metabolite | 197.84 | As2O3 | DrugBank | [261004](https://pubchem.ncbi.nlm.nih.gov/compound/261004) | Hua_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:13 | 6:51 | 0/1/0 | 0/0/0 | 1/0/3 | 87,969/3,772 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 3/9 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hua_2011_reference](drugs/drug_arsenic_trioxide/ArsenicTrioxide_Hua2011_reference.md) | — | 1-compartment (no model) | 7 | Hua H et al., Pharmacokinetics of arsenic trioxide (A…, Asian Pacific journal of ca… (2011) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **MT1A** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Hariani_2014](drugs/drug_arsenic_trioxide/pgx_Hariani_2014_MT1A_safety.md) | Hariani GD et al., Application of next generation sequenci…, BMC research notes (2014) | [10.1186/1756-0500-7-360](https://doi.org/10.1186/1756-0500-7-360) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCC5** | `Q321` · EC50 | transport | [Hariani_2014](drugs/drug_arsenic_trioxide/pgx_Hariani_2014_ABCC5_Q321.md) | Hariani GD et al., Application of next generation sequenci…, BMC research notes (2014) | [10.1186/1756-0500-7-360](https://doi.org/10.1186/1756-0500-7-360) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **NQO1** | `Q321` · EC50 | metabolism | [Hariani_2014](drugs/drug_arsenic_trioxide/pgx_Hariani_2014_NQO1_Q321.md) | Hariani GD et al., Application of next generation sequenci…, BMC research notes (2014) | [10.1186/1756-0500-7-360](https://doi.org/10.1186/1756-0500-7-360) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **AS3MT** | `Q22` · CL | metabolism | [Zheng_2021](drugs/drug_arsenic_trioxide/pgx_Zheng_2021_AS3MT_Q22.md) | Zheng Y et al., Importance of monitoring arsenic methyl…, Experimental hematology & o… (2021) | [10.1186/s40164-021-00205-6](https://doi.org/10.1186/s40164-021-00205-6) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=arsenic_trioxide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor, `NQO1` metabolism | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | `ABCC2` inducer | DrugBank actor |
| excretion | liver | `ABCC2` inducer | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC5 (transport), AKT1 (inducer), AS3MT (metabolism), CCND1 (target), CDKN1A (activator), IKBKB (inducer), JUN (inducer), MAPK1 (inducer), MAPK3 (inducer), MT1A (safety_allele), PML (degradation), TXNRD1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 38 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hua_2011.pdf` | Hua H et al., Pharmacokinetics of arsenic trioxide (A…, Asian Pacific journal of ca… (2011) | popPK | 10 | not captured | [21517232](https://pubmed.ncbi.nlm.nih.gov/21517232) | The paper reports quantitative two-compartment pharmacokinetic parameters (CL, Vd, half-lives) for arsenic trioxide in human patients with values explicitly listed in the abstract. |
| `Qu_2011.pdf` | Qu FL et al., [Multicenter phase II clinical trial of…, Zhonghua zhong liu za zhi [… (2011) | popPK | 8 | not captured | [22340053](https://pubmed.ncbi.nlm.nih.gov/22340053) | The study reports a two-compartment model and plasma elimination half-life for arsenic trioxide in humans, but lacks specific numeric values for clearance (CL) or volume of distribution (V). |
| `Hwang_2004.pdf` | Hwang DR et al., Inhibition of hepatitis C virus replica…, Antimicrobial agents and ch… (2004) | pd | 4 | [10.1128/AAC.48.8.2876-2882.2004](https://doi.org/10.1128/AAC.48.8.2876-2882.2004) | [15273095](https://www.ncbi.nlm.nih.gov/pubmed/15273095) | metadata signals extractable PD data (EC50) |
| `El-Ghiaty_2022.pdf` | El-Ghiaty MA et al., Down-regulation of hepatic cytochromes…, Chemico-biological interact… (2022) | pgx | 7 | [10.1016/j.cbi.2022.110049](https://doi.org/10.1016/j.cbi.2022.110049) | [35872050](https://www.ncbi.nlm.nih.gov/pubmed/35872050) | metadata signals extractable PGX data (CYP1A, PK/PD-context) |

<sub>queue written 2026-10-07T23:11:04.311149+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chen_2009 | not_relevant | 0 | 0 | The paper investigates mechanisms of drug resistance in cell lines (ABC transporters, p53) but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters in humans. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The study investigates acquired multidrug resistance in cell lines, not the effect of a specific gene variant/genotype on PK/PD parameters. |
| PGx | Cubeddu_2016 | not_relevant | 0 | 0 | The paper discusses arsenic trioxide's mechanism of action (channel trafficking) and general pharmacogenomic risk factors for arrhythmias, but does not report specific gene variants altering PK/PD parameters of arsenic trioxide. |
| PGx | Dawood_2018 | not_relevant | 2 | 5 | The paper investigates the molecular mechanisms of action and cellular resistance to arsenic trioxide (PD/cytotoxicity) but does not report pharmacokinetic parameters or specific pharmacogenomic effects on PK/PD metrics in a clinical or population pharmacology context. |
| PGx | El-Ghiaty_2022 | not_relevant | 0 | 0 | The study investigates the effect of arsenic trioxide on CYP1A1/1A2 expression, not the effect of a genetic variant on arsenic trioxide pharmacokinetics or pharmacodynamics. |
| PGx | El-Ghiaty_2023 | not_relevant | 0 | 0 | The paper investigates the effect of arsenic trioxide on CYP1A enzyme expression in cell lines, not the effect of a gene variant on the PK/PD of arsenic trioxide. |
| PGx | El-Mahrouk_2026 | not_relevant | 0 | 0 | The study investigates sex-specific modulation of enzymes in mice, not the effect of human gene variants/genotypes on arsenic trioxide PK/PD parameters. |
| PGx | Gana_2019 | not_relevant | 0 | 0 | The paper investigates the effect of MRP1 expression levels (a protein phenotype) on drug sensitivity, but does not report a specific gene variant or genotype associated with changes in arsenic trioxide PK/PD parameters. |
| PGx | Hariani_2014 | not_relevant | 5 | 2 | The paper reports a genetic association with a cytotoxicity phenotype (cell viability) in cell lines, not a pharmacokinetic or pharmacodynamic parameter in humans. |
| popPK | Hwang_2004 | irrelevant | 0 | 0 | The study reports antiviral efficacy (EC50) and mechanism of action in vitro, not pharmacokinetic disposition parameters. |
| PGx | Jiang_2018 | not_relevant | 0 | 0 | The study investigates the mechanism of drug resistance via the NF-kB/ABCG2 pathway in cell lines but does not report a pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| PGx | Jin_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of sorafenib resistance in hepatocellular carcinoma and the role of arsenic trioxide as an inhibitor of 14-3-3η, but it does not report pharmacogenomic effects on the PK or PD parameters of arsenic trioxide itself. |
| PGx | Khodadadi_2025 | not_relevant | 0 | 0 | The paper investigates the combinatorial cytotoxicity of melphalan and arsenic trioxide in cell lines and does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Kuroki_2009 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of arsenic trioxide on HCV replication and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Lan_2023 | not_relevant | 0 | 0 | The paper is a review on infusion rates and does not report pharmacogenomic effects on PK/PD parameters for arsenic trioxide. |
| PGx | Ma_2012 | not_relevant | 0 | 0 | The paper investigates formulation and delivery properties of arsenic trioxide in rats, not the influence of genetic variants on its pharmacokinetics or pharmacodynamics. |
| popPK | Martins_2007 | irrelevant | 0 | 0 | The study is a toxicological/behavioral assay in Daphnia magna, not a pharmacokinetic study, and reports no disposition parameters for arsenic trioxide. |
| PGx | Moradzadeh_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of crocetin in leukemia cells and compares it to arsenic trioxide, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of arsenic trioxide. |
| PGx | Nasr_2010 | not_relevant | 0 | 0 | The paper describes the mechanism of action of arsenic trioxide in APL but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Natsumoto_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of arsenic trioxide in an iPSC model of interferonopathy, not the effect of a gene variant on its pharmacokinetics or pharmacodynamics. |
| PGx | Ni_2021 | not_relevant | 4 | 5 | The study reports associations between AS3MT genotypes and arsenic metabolite ratios (PK-like) and DNA damage (PD-like) in an occupational exposure context, but does not report a fitted pharmacokinetic or pharmacodynamic effect size for arsenic trioxide as a therapeutic drug. |
| popPK | Qu_2011 | relevant | 8 | 4 | The study reports a two-compartment model and plasma elimination half-life for arsenic trioxide in humans, but lacks specific numeric values for clearance (CL) or volume of distribution (V). |
| PGx | Rausch_2022 | not_relevant | 0 | 0 | The text is a general clinical update on AML treatment guidelines and does not report any pharmacogenomic studies or specific PK/PD parameter changes for arsenic trioxide. |
| popPK | Seibert_2002 | irrelevant | 0 | 0 | The study is an in-vitro investigation of protein binding effects on chemical potency, not a pharmacokinetic study reporting disposition parameters for arsenic trioxide. |
| PGx | Wang_2014 | not_relevant | 0 | 0 | The paper investigates the effect of CAR pathway inhibition on drug resistance mechanisms (MDR1) and cytotoxicity, but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| PGx | Zhang_2014 | not_relevant | 0 | 0 | The study investigates the effect of SATB1 silencing on cell sensitivity to arsenic trioxide in a single cell line, which is a mechanistic/cell biology study, not a pharmacogenomic study of human genetic variants affecting PK/PD parameters. |
| PGx | Zhou_2007 | not_relevant | 0 | 0 | The paper is a review of the history and mechanism of ATRA and arsenic trioxide in APL, focusing on the PML-RARalpha fusion protein, but does not report pharmacogenomic effects of gene variants on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 23:11 UTC</sub>
