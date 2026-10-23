<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;metoprolol&quot;}]"></div>

# metoprolol

- **generic name:** metoprolol
- **ATC codes:** `C07AB02`, `C07BB02`, `C07BB52`, `C07CB02`, `C07FB02`, `C07FB13`, `C07FX03`, `C07FX05`
- **DrugBank:** [DB00264](https://go.drugbank.com/drugs/DB00264) · **PubChem:** [CID 4171](https://pubchem.ncbi.nlm.nih.gov/compound/4171)
- **molar mass:** 267.3639 g/mol (C15H25NO3) — DrugBank
- **groups:** approved, investigational

## About

Metoprolol is a selective beta blocker used for heart conditions such as high blood pressure, angina, arrhythmias, heart failure, and after myocardial infarction. It is widely used worldwide and appears on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409468](https://www.wikidata.org/wiki/Q409468) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| metoprolol | parent | 267.364 | C15H25NO3 | DrugBank | [4171](https://pubchem.ncbi.nlm.nih.gov/compound/4171) | Bortolotti_1989, Höcht_2006, Kir_2025, Taguchi_2004 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | — | L/h | 29.7 | routinely treated Japanese patients | &gt;=34 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Taguchi_2004_reference](drugs/drug_metoprolol/Metoprolol_Taguchi2004_reference.md) |
| V | V | 3.4 | L | 3.4 l | spontaneously hypertensive rats and Wistar Kyoto rats |  | rat | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Höcht_2006_reference](drugs/drug_metoprolol/Metoprolol_Hcht2006_reference.md) |
| V | V/F | — | L | 17.1 | routinely treated Japanese patients | &gt;=34 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Taguchi_2004_reference](drugs/drug_metoprolol/Metoprolol_Taguchi2004_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Höcht_2006_reference](drugs/drug_metoprolol/Metoprolol_Hcht2006_reference.md) | — | 1-compartment (no model) | 1 | Höcht C et al., Pharmacokinetic-pharmacodynamic (PK-PD)…, Naunyn-Schmiedeberg's archi… (2006) | [10.1007/s00210-006-0078-x](https://doi.org/10.1007/s00210-006-0078-x) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27, Q76 — no SI value to build from</sub> | [Taguchi_2004_reference](drugs/drug_metoprolol/Metoprolol_Taguchi2004_reference.md) | — | 1-compartment (no model) | 3 | Taguchi M et al., Nonlinear mixed effects model analysis…, Biological & pharmaceutical… (2004) | [10.1248/bpb.27.1642](https://doi.org/10.1248/bpb.27.1642) |
| <span class="pk-rf" hidden data-species="rabbit" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Bortolotti_1989_reference](drugs/drug_metoprolol/Metoprolol_Bortolotti1989_reference.md) | — | 1-compartment (no model) | 6 | Bortolotti A et al., Pharmacokinetic and pharmacodynamic mod…, European journal of drug me… (1989) | [10.1007/BF03190855](https://doi.org/10.1007/BF03190855) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Kir_2025_reference](drugs/drug_metoprolol/Metoprolol_Kir2025_reference.md) | — | 1-compartment (no model) | 7 | Kir F et al., Minimal Physiologically-Based Pharmacok…, European journal of drug me… (2025) | [10.1007/s13318-025-00943-6](https://doi.org/10.1007/s13318-025-00943-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Bortolotti_1989_HR](drugs/drug_metoprolol/pd_Bortolotti_1989_HR.md) | heart rate ← metoprolol · delayed effect through an effect compartment | — | Bortolotti A et al., Pharmacokinetic and pharmacodynamic mod…, European journal of drug me… (1989) | [10.1007/BF03190855](https://doi.org/10.1007/BF03190855) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Di_2008_BP](drugs/drug_metoprolol/pd_Di_2008_BP.md) | blood pressure ← metoprolol · delayed effect through an effect compartment | — | Di Verniero CA et al., In vitro and in vivo pharmacodynamic pr…, Journal of cardiovascular p… (2008) | [10.1097/FJC.0b013e3181730306](https://doi.org/10.1097/FJC.0b013e3181730306) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Di_2008_HR](drugs/drug_metoprolol/pd_Di_2008_HR.md) | heart rate ← metoprolol · delayed effect through an effect compartment | — | Di Verniero CA et al., In vitro and in vivo pharmacodynamic pr…, Journal of cardiovascular p… (2008) | [10.1097/FJC.0b013e3181730306](https://doi.org/10.1097/FJC.0b013e3181730306) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Höcht_2004_HR](drugs/drug_metoprolol/pd_H_cht_2004_HR.md) | heart rate ← metoprolol · delayed effect through an effect compartment | — | Höcht C et al., Pharmacokinetic-pharmacodynamic propert…, Naunyn-Schmiedeberg's archi… (2004) | [10.1007/s00210-004-0945-2](https://doi.org/10.1007/s00210-004-0945-2) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Höcht_2004_MAP](drugs/drug_metoprolol/pd_H_cht_2004_MAP.md) | mean arterial pressure ← metoprolol · delayed effect through an effect compartment | — | Höcht C et al., Pharmacokinetic-pharmacodynamic propert…, Naunyn-Schmiedeberg's archi… (2004) | [10.1007/s00210-004-0945-2](https://doi.org/10.1007/s00210-004-0945-2) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Höcht_2005_HR](drugs/drug_metoprolol/pd_H_cht_2005_HR.md) | heart rate ← metoprolol · direct Emax (saturable) effect | — | Höcht C et al., Applicability of microdialysis as a tec…, Journal of pharmacological… (2005) | [10.1016/j.vascn.2005.01.002](https://doi.org/10.1016/j.vascn.2005.01.002) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Höcht_2005_MAP](drugs/drug_metoprolol/pd_H_cht_2005_MAP.md) | mean arterial pressure ← metoprolol · delayed effect through an effect compartment | — | Höcht C et al., Applicability of microdialysis as a tec…, Journal of pharmacological… (2005) | [10.1016/j.vascn.2005.01.002](https://doi.org/10.1016/j.vascn.2005.01.002) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Höcht_2006_BP](drugs/drug_metoprolol/pd_H_cht_2006_BP.md) | blood pressure change ← metoprolol · delayed effect through an effect compartment | — | Höcht C et al., Pharmacokinetic-pharmacodynamic (PK-PD)…, Naunyn-Schmiedeberg's archi… (2006) | [10.1007/s00210-006-0078-x](https://doi.org/10.1007/s00210-006-0078-x) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ritchie_1998_HR](drugs/drug_metoprolol/pd_Ritchie_1998_HR.md) | spontaneous heart rate ← metoprolol · delayed effect through an effect compartment | — | Ritchie RH et al., Myocardial effect compartment modeling…, Journal of pharmaceutical s… (1998) | [10.1021/js9702776](https://doi.org/10.1021/js9702776) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ritchie_1998_PR](drugs/drug_metoprolol/pd_Ritchie_1998_PR.md) | electrocardiographic PR interval ← metoprolol · delayed effect through an effect compartment | — | Ritchie RH et al., Myocardial effect compartment modeling…, Journal of pharmaceutical s… (1998) | [10.1021/js9702776](https://doi.org/10.1021/js9702776) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Ritchie_1998_dP_dt](drugs/drug_metoprolol/pd_Ritchie_1998_dP_dt.md) | contractile index peak positive rate of left ventricular pressure rise ← metoprolol · delayed effect through an effect compartment | — | Ritchie RH et al., Myocardial effect compartment modeling…, Journal of pharmaceutical s… (1998) | [10.1021/js9702776](https://doi.org/10.1021/js9702776) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Höcht_2006_HR](drugs/drug_metoprolol/pd_H_cht_2006_HR.md) | heart rate ← metoprolol · delayed effect through an effect compartment | — | Höcht C et al., Pharmacokinetic-pharmacodynamic (PK-PD)…, Naunyn-Schmiedeberg's archi… (2006) | [10.1007/s00210-006-0078-x](https://doi.org/10.1007/s00210-006-0078-x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=metoprolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (inhibitor), ADRB1 (target), ADRB2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:24 | 17:38 | 2/2/0 | 6/0/0 | 0/0/0 | 217,467/65,047 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 2/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 104 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 4  ·  extracted 0  ·  needs review 2  ·  rejected 2  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full-text requests

_13 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bortolotti_1989.pdf` | Bortolotti A et al., Pharmacokinetic and pharmacodynamic mod…, European journal of drug me… (1989) | popPK | 10 | [10.1007/BF03190855](https://doi.org/10.1007/BF03190855) | [2591419](https://pubmed.ncbi.nlm.nih.gov/2591419) | The study reports quantitative pharmacokinetic parameters (clearance, half-life, MRT, AUC, k10) for metoprolol in rabbits with specific numeric values provided in the text. |
| `De_2017.pdf` | De Thaye E et al., Pharmacokinetic analysis of modified-re…, European journal of pharmac… (2017) | popPK | 10 | [10.1016/j.ejps.2016.10.039](https://doi.org/10.1016/j.ejps.2016.10.039) | [27816630](https://pubmed.ncbi.nlm.nih.gov/27816630) | The study reports a population PK model for metoprolol in dogs and rabbits, but the specific numeric parameter values are not present in the provided evidence text. |
| `Luethy_2022.pdf` | Luethy D et al., Pharmacokinetics and pharmacodynamics o…, Journal of veterinary pharm… (2022) | popPK | 10 | [10.1111/jvp.13037](https://doi.org/10.1111/jvp.13037) | [34913168](https://pubmed.ncbi.nlm.nih.gov/34913168) | The study reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for metoprolol in horses with specific numeric values provided in the text. |
| `Höcht_2006.pdf` | Höcht C et al., Pharmacokinetic-pharmacodynamic (PK-PD)…, Naunyn-Schmiedeberg's archi… (2006) | popPK | 9 | [10.1007/s00210-006-0078-x](https://doi.org/10.1007/s00210-006-0078-x) | [16733693](https://pubmed.ncbi.nlm.nih.gov/16733693) | The study reports quantitative PK parameters (Volume of Distribution) for metoprolol in rats, with specific numeric values provided in the abstract. |
| `Isbister_2016.pdf` | Isbister GK et al., Zero-order metoprolol pharmacokinetics…, Clinical toxicology (Philad… (2016) | popPK | 9 | [10.1080/15563650.2016.1209768](https://doi.org/10.1080/15563650.2016.1209768) | [27442605](https://pubmed.ncbi.nlm.nih.gov/27442605) | The paper reports specific quantitative pharmacokinetic parameters (V, Vm, Km, half-life) for metoprolol derived from a compartmental model in a human case. |
| `Qian_2024.pdf` | Qian J et al., Study on genotype and phenotype of nove…, The pharmacogenomics journal (2024) | popPK | 9 | [10.1038/s41397-024-00332-3](https://doi.org/10.1038/s41397-024-00332-3) | [38637522](https://pubmed.ncbi.nlm.nih.gov/38637522) | The study reports quantitative PK parameters (AUC, t1/2) for metoprolol in humans, but specific numeric values are not present in the provided text, only relative changes (2-3 times). |
| `Yin_1997.pdf` | Yin XX et al., Pharmacokinetic-pharmacodynamic modelin…, Zhongguo yao li xue bao = A… (1997) | popPK | 9 |  | [10072957](https://pubmed.ncbi.nlm.nih.gov/10072957) | The study reports a two-compartment PK model for metoprolol stereoisomers in rats, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Yin_1997_2.pdf` | Yin XX et al., [Pharmacokinetic-pharmacodynamic modeli…, Yao xue xue bao = Acta phar… (1997) | popPK | 9 |  | [11596322](https://pubmed.ncbi.nlm.nih.gov/11596322) | The study reports a two-compartment PK model for metoprolol enantiomers in dogs, but specific numeric values for clearance (CL), volume (V), and rate constants are not explicitly listed in the provided text, only qualitative descriptions and PD parameters. |
| `Fukao_2014.pdf` | Fukao M et al., Variability of bioavailability and inte…, Drug metabolism and pharmac… (2014) | popPK | 8 | [10.2133/dmpk.dmpk-13-rg-057](https://doi.org/10.2133/dmpk.dmpk-13-rg-057) | [24025984](https://pubmed.ncbi.nlm.nih.gov/24025984) | The study reports a population PK model for metoprolol in humans, but the specific numeric parameter values are not present in the provided evidence. |
| `Höcht_2004.pdf` | Höcht C et al., Pharmacokinetic-pharmacodynamic propert…, Naunyn-Schmiedeberg's archi… (2004) | popPK | 8 | [10.1007/s00210-004-0945-2](https://doi.org/10.1007/s00210-004-0945-2) | [15300360](https://pubmed.ncbi.nlm.nih.gov/15300360) | The study reports a PK-PD model for metoprolol in rats, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence, only qualitative statements and PD values. |
| `Höcht_2005.pdf` | Höcht C et al., Applicability of microdialysis as a tec…, Journal of pharmacological… (2005) | popPK | 8 | [10.1016/j.vascn.2005.01.002](https://doi.org/10.1016/j.vascn.2005.01.002) | [16125622](https://pubmed.ncbi.nlm.nih.gov/16125622) | The study reports PK-PD modeling of metoprolol in rats, but specific quantitative PK parameter values (CL, V, etc.) are not explicitly listed in the provided text, only qualitative descriptions and PD parameters. |
| `Ritchie_1998.pdf` | Ritchie RH et al., Myocardial effect compartment modeling…, Journal of pharmaceutical s… (1998) | popPK | 8 | [10.1021/js9702776](https://doi.org/10.1021/js9702776) | [9519150](https://pubmed.ncbi.nlm.nih.gov/9519150) | The study reports a compartmental model for metoprolol myocardial uptake, but specific numeric parameter values (clearance, volume, rate constants) are not explicitly listed in the provided text. |
| `Zhao_2016.pdf` | Zhao S et al., Synchronous delivery of felodipine and…, Drug development and indust… (2016) | popPK | 8 | [10.3109/03639045.2016.1171332](https://doi.org/10.3109/03639045.2016.1171332) | [27074758](https://pubmed.ncbi.nlm.nih.gov/27074758) | The study reports pharmacokinetic parameters for metoprolol in beagle dogs, but the specific numeric values are not present in the provided evidence text. |

<sub>queue written 2026-10-07 00:07 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bundkirchen_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiac calcium sensitivity and does not report any pharmacokinetic parameters for metoprolol. |
| PD | Bundkirchen_2001 | not_relevant | 0 | 0 | The study investigates direct pharmacological effects on cardiac muscle mechanics (Ca2+ sensitivity) in isolated preparations, not the systemic pharmacodynamic exposure-response relationship of the drug in vivo. |
| popPK | De_2017 | relevant | 10 | 0 | The study reports a population PK model for metoprolol in dogs and rabbits, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Di_2008 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (PD) and receptor binding, and while it mentions PK, no quantitative PK parameters (CL, V, t1/2) are reported in the evidence. |
| popPK | Fukao_2014 | relevant | 8 | 0 | The study reports a population PK model for metoprolol in humans, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Ghazi_2022 | irrelevant | 0 | 0 | The study is a clinical cohort analysis of blood pressure response to antihypertensive treatment and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for metoprolol. |
| popPK | Höcht_2004 | relevant | 8 | 0 | The study reports a PK-PD model for metoprolol in rats, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence, only qualitative statements and PD values. |
| popPK | Höcht_2005 | relevant | 8 | 2 | The study reports PK-PD modeling of metoprolol in rats, but specific quantitative PK parameter values (CL, V, etc.) are not explicitly listed in the provided text, only qualitative descriptions and PD parameters. |
| popPK | Jankovic_2014 | irrelevant | 2 | 0 | The paper is a review of pharmacokinetics of beta-blockers and does not report original quantitative parameter values for metoprolol in the provided evidence. |
| popPK | Momčilović_2019 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of bisoprolol, not metoprolol. |
| popPK | Qian_2024 | relevant | 9 | 2 | The study reports quantitative PK parameters (AUC, t1/2) for metoprolol in humans, but specific numeric values are not present in the provided text, only relative changes (2-3 times). |
| popPK | Ritchie_1998 | relevant | 8 | 2 | The study reports a compartmental model for metoprolol myocardial uptake, but specific numeric parameter values (clearance, volume, rate constants) are not explicitly listed in the provided text. |
| popPK | Yin_1997 | relevant | 9 | 2 | The study reports a two-compartment PK model for metoprolol stereoisomers in rats, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Yin_1997_2 | relevant | 9 | 2 | The study reports a two-compartment PK model for metoprolol enantiomers in dogs, but specific numeric values for clearance (CL), volume (V), and rate constants are not explicitly listed in the provided text, only qualitative descriptions and PD parameters. |
| popPK | Zhao_2016 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for metoprolol in beagle dogs, but the specific numeric values are not present in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmetoprolol%5D&body=Drug%3A%20metoprolol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_metoprolol/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 00:08 UTC</sub>
