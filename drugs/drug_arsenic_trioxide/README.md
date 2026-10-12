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

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

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
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.211). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hua_2011_reference](drugs/drug_arsenic_trioxide/ArsenicTrioxide_Hua2011_reference.md) | — | 1-compartment (no model) | 7 | Hua H et al., Pharmacokinetics of arsenic trioxide (A…, Asian Pacific journal of ca… (2011) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 0.00).">in vitro</span> | **MT1A** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Hariani_2014](drugs/drug_arsenic_trioxide/pgx_Hariani_2014_MT1A_safety.md) | Hariani GD et al., Application of next generation sequenci…, BMC research notes (2014) | [10.1186/1756-0500-7-360](https://doi.org/10.1186/1756-0500-7-360) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 0.00).">in vitro</span> | **ABCC5** | `Q321` · EC50 | transport | [Hariani_2014](drugs/drug_arsenic_trioxide/pgx_Hariani_2014_ABCC5_Q321.md) | Hariani GD et al., Application of next generation sequenci…, BMC research notes (2014) | [10.1186/1756-0500-7-360](https://doi.org/10.1186/1756-0500-7-360) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 0.00).">in vitro</span> | **NQO1** | `Q321` · EC50 | metabolism | [Hariani_2014](drugs/drug_arsenic_trioxide/pgx_Hariani_2014_NQO1_Q321.md) | Hariani GD et al., Application of next generation sequenci…, BMC research notes (2014) | [10.1186/1756-0500-7-360](https://doi.org/10.1186/1756-0500-7-360) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **AS3MT** | `Q22` · CL | metabolism | [Zheng_2021](drugs/drug_arsenic_trioxide/pgx_Zheng_2021_AS3MT_Q22.md) | Zheng Y et al., Importance of monitoring arsenic methyl…, Experimental hematology & o… (2021) | [10.1186/s40164-021-00205-6](https://doi.org/10.1186/s40164-021-00205-6) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=arsenic_trioxide).

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
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 38 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
