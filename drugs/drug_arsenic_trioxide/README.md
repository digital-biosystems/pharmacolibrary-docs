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
| arsenic_trioxide | metabolite | 197.84 | As2O3 | DrugBank | [261004](https://pubchem.ncbi.nlm.nih.gov/compound/261004) | Hua_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:18 | 0:43 | 0/1/0 | 0/0/0 | 1/0/3 | 52,924/3,733 | einfracz / qwen3.8-27b | 12 | 3/9 | 12/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.211). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Hua_2011_reference](drugs/drug_arsenic_trioxide/ArsenicTrioxide_Hua2011_reference.md) | — | 2-compartment (no model) | 6 | Hua H et al., Pharmacokinetics of arsenic trioxide (A…, Asian Pacific journal of ca… (2011) | — |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 0.00).">in vitro</span> | **MT1A** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Hariani_2014](drugs/drug_arsenic_trioxide/pgx_Hariani_2014_MT1A_safety.md) | Hariani GD et al., Application of next generation sequenci…, BMC research notes (2014) | [10.1186/1756-0500-7-360](https://doi.org/10.1186/1756-0500-7-360) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 0.00).">in vitro</span> | **ABCC5** | `Q27` · CL/F | transport | [Hariani_2014](drugs/drug_arsenic_trioxide/pgx_Hariani_2014_ABCC5_Q27.md) | Hariani GD et al., Application of next generation sequenci…, BMC research notes (2014) | [10.1186/1756-0500-7-360](https://doi.org/10.1186/1756-0500-7-360) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 0.00).">in vitro</span> | **NQO1** | `Q321` · EC50 | metabolism | [Hariani_2014](drugs/drug_arsenic_trioxide/pgx_Hariani_2014_NQO1_Q321.md) | Hariani GD et al., Application of next generation sequenci…, BMC research notes (2014) | [10.1186/1756-0500-7-360](https://doi.org/10.1186/1756-0500-7-360) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **AS3MT** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Zheng_2021](drugs/drug_arsenic_trioxide/pgx_Zheng_2021_AS3MT_Q100.md) | Zheng Y et al., Importance of monitoring arsenic methyl…, Experimental hematology & o… (2021) | [10.1186/s40164-021-00205-6](https://doi.org/10.1186/s40164-021-00205-6) |

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
| `Hua_2011.pdf` | Hua H et al., Pharmacokinetics of arsenic trioxide (A…, Asian Pacific journal of ca… (2011) | popPK | 10 | not captured | [21517232](https://pubmed.ncbi.nlm.nih.gov/21517232) | The study reports quantitative two-compartment pharmacokinetic parameters (CL, V, T1/2) for arsenic trioxide in human patients with all values explicitly listed in the text. |
| `Qu_2011.pdf` | Qu FL et al., [Multicenter phase II clinical trial of…, Zhonghua zhong liu za zhi [… (2011) | popPK | 6 | not captured | [22340053](https://pubmed.ncbi.nlm.nih.gov/22340053) | The study reports a two-compartment model and plasma elimination half-life, but lacks explicit numerical values for clearance (CL), volume of distribution (V), and other core PK parameters in the provided text. |
| `Hwang_2004.pdf` | Hwang DR et al., Inhibition of hepatitis C virus replica…, Antimicrobial agents and ch… (2004) | pd | 4 | [10.1128/AAC.48.8.2876-2882.2004](https://doi.org/10.1128/AAC.48.8.2876-2882.2004) | [15273095](https://www.ncbi.nlm.nih.gov/pubmed/15273095) | metadata signals extractable PD data (EC50) |
| `El-Ghiaty_2022.pdf` | El-Ghiaty MA et al., Down-regulation of hepatic cytochromes…, Chemico-biological interact… (2022) | pgx | 7 | [10.1016/j.cbi.2022.110049](https://doi.org/10.1016/j.cbi.2022.110049) | [35872050](https://www.ncbi.nlm.nih.gov/pubmed/35872050) | metadata signals extractable PGX data (CYP1A, PK/PD-context) |

<sub>queue written 2026-10-15T04:17:49.412751+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Chen_2009 | not_relevant | 0 | 0 | The paper investigates cellular mechanisms of resistance in cancer cell lines rather than pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of arsenic trioxide in humans. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The study characterizes multidrug resistance to arsenic trioxide in a specific cell line due to drug selection rather than reporting pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Cubeddu_2016 | not_relevant | 2 | 0 | The paper is a review discussing arsenic trioxide as one of many drugs that disrupt ion channel trafficking, but it does not report specific pharmacogenomic interactions or quantified PK/PD parameter changes for arsenic trioxide. |
| PGx | Dawood_2018 | not_relevant | 0 | 0 | The study investigates gene expression and resistance phenotypes in cell lines, not genetic variants affecting PK/PD parameters in humans. |
| PGx | El-Ghiaty_2022 | not_relevant | 0 | 0 | The paper investigates how Arsenic Trioxide affects CYP1A enzymes (a drug-drug interaction/enzyme inhibition study), not how a genetic variant affects the pharmacokinetics or pharmacodynamics of Arsenic Trioxide. |
| PGx | El-Ghiaty_2023 | not_relevant | 0 | 0 | The study investigates the mechanism of action of arsenic trioxide on CYP1A enzymes in cell lines, not how a human genetic variant affects the drug's pharmacokinetics or pharmacodynamics. |
| PGx | El-Mahrouk_2026 | not_relevant | 0 | 0 | The study investigates sex-dependent effects of arsenic trioxide on CYP enzymes and transporters, but does not report the impact of genetic variants (pharmacogenomics) on PK/PD parameters. |
| PGx | Gana_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of synergistic toxicity involving arsenic trioxide and MRP1 modulators in cell lines, but does not report a pharmacogenomic effect (human gene variant association) on PK or PD parameters in humans. |
| PGx | Hariani_2014 | not_relevant | 5 | 3 | The paper reports a genetic association (MT1A SNP) with a pharmacodynamic endpoint (cytotoxicity) in cell lines, but it does not report a specific quantitative change in a PK or PD parameter (like IC50 value) attributable to the genotype difference. |
| popPK | Hwang_2004 | irrelevant | 0 | 0 | The study reports antiviral efficacy (EC50) in vitro, not pharmacokinetic parameters. |
| PGx | Jiang_2018 | not_relevant | 0 | 0 | The study investigates the mechanistic role of the ABCG2 transporter and NF-κB pathway in drug resistance in cell lines, but it does not report pharmacogenomic data (gene variants/genotypes) affecting PK/PD parameters in humans or specific genetic models. |
| PGx | Jin_2026 | not_relevant | 0 | 0 | The study investigates a pharmacodynamic drug-drug interaction (reversal of sorafenib resistance by arsenic trioxide) rather than a pharmacogenomic effect of a genetic variant on the PK/PD of arsenic trioxide. |
| PGx | Khodadadi_2025 | not_relevant | 0 | 0 | The paper studies drug-drug interaction and transporter targeting (ABCG2) in a single cell line, not a human pharmacogenomic association where a patient's genotype modifies a PK/PD parameter. |
| PGx | Kuroki_2009 | not_relevant | 0 | 0 | The paper investigates the antiviral mechanism of arsenic trioxide via glutathione modulation and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Lan_2023 | not_relevant | 2 | 0 | The paper is a review on infusion rates and mentions genetic polymorphism only in the context of other drugs (gemcitabine, methotrexate), providing no pharmacogenomic data or effect sizes for arsenic trioxide. |
| PGx | Ma_2012 | not_relevant | 0 | 0 | The paper investigates drug formulation (Polymers) and toxicity, containing no pharmacogenomic data or analysis of genetic variants affecting PK/PD. |
| popPK | Martins_2007 | irrelevant | 0 | 0 | The study investigates phototactic behavior in *Daphnia magna* as a bioindicator of toxicity, not pharmacokinetic disposition parameters for arsenic trioxide. |
| PGx | Moradzadeh_2019 | not_relevant | 0 | 0 | The paper studies the mechanisms of crocetin in leukemia and mentions arsenic trioxide only as a comparator control, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Nasr_2010 | not_relevant | 0 | 0 | The paper describes the mechanistic synergy of drug action in leukemia models but does not report how a specific gene variant alters pharmacokinetic or pharmacodynamic parameters. |
| PGx | Natsumoto_2025 | not_relevant | 0 | 0 | The study reports a PD effect of the drug (IFN-alpha suppression) in a disease model, but does not report a pharmacogenomic effect where a patient gene variant changes the drug's PK or PD parameters. |
| PGx | Ni_2021 | not_relevant | 3 | 5 | The study reports associations between AS3MT genotypes and arsenic metabolite ratios (MMA/DMA) and DNA damage markers, but does not report fitted pharmacokinetic parameters (e.g., AUC, Cmax) or standard pharmacodynamic effects (e.g., toxicity response) required for pharmacogenomic effect extraction. |
| popPK | Qu_2011 | relevant | 6 | 4 | The study reports a two-compartment model and plasma elimination half-life, but lacks explicit numerical values for clearance (CL), volume of distribution (V), and other core PK parameters in the provided text. |
| PGx | Rausch_2022 | not_relevant | 0 | 0 | The text is a general review of AML treatment guidelines and does not report any specific pharmacogenomic effects on the PK or PD of arsenic trioxide. |
| popPK | Seibert_2002 | irrelevant | 0 | 0 | The study is an in-vitro investigation of protein binding effects on nominal concentrations and does not report pharmacokinetic disposition parameters for arsenic trioxide. |
| PGx | Wang_2014 | not_relevant | 1 | 2 | The study examines the effect of CAR pathway inhibition (via CITCO or RNAi) on arsenic trioxide efficacy in cell lines, not the influence of specific genetic variants (pharmacogenomics) on PK or PD parameters in humans or defined genotypes. |
| PGx | Zhang_2014 | not_relevant | 3 | 6 | The study reports the effect of gene silencing on drug sensitivity (IC50) but focuses on the mechanistic link to transporters (ABCC1/ABCG2) rather than establishing a pharmacogenomic effect based on patient genotypes. |
| PGx | Zhou_2007 | not_relevant | 0 | 0 | The paper discusses the history and synergistic mechanism of ATRA and arsenic trioxide in APL treatment, but does not report specific pharmacogenomic variants affecting PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:17 UTC</sub>
