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
| metoprolol | parent | 267.364 | C15H25NO3 | DrugBank | [4171](https://pubchem.ncbi.nlm.nih.gov/compound/4171) | Höcht_2006, Kir_2025, Taguchi_2004 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:32 | 2:49 | 0/3/1 | 2/1/0 | 0/0/0 | 157,280/13,366 | einfracz / qwen3.8-27b | 14 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: disputed 1/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Höcht_2006_reference](drugs/drug_metoprolol/Metoprolol_Hcht2006_reference.md) | — | 1-compartment (no model) | 1 | Höcht C et al., Pharmacokinetic-pharmacodynamic (PK-PD)…, Naunyn-Schmiedeberg's archi… (2006) | [10.1007/s00210-006-0078-x](https://doi.org/10.1007/s00210-006-0078-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.846), gpt-oss:120b (not confirmed, agreement 0.105). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bortolotti_1989_reference](drugs/drug_metoprolol/Metoprolol_Bortolotti1989_reference.md) | — | 1-compartment (no model) | 0 | Bortolotti A et al., Pharmacokinetic and pharmacodynamic mod…, European journal of drug me… (1989) | [10.1007/BF03190855](https://doi.org/10.1007/BF03190855) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Kir_2025_reference](drugs/drug_metoprolol/Metoprolol_Kir2025_reference.md) | — | 1-compartment (no model) | 5 | Kir F et al., Minimal Physiologically-Based Pharmacok…, European journal of drug me… (2025) | [10.1007/s13318-025-00943-6](https://doi.org/10.1007/s13318-025-00943-6) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.875), gpt-oss:120b (partly confirmed, agreement 0.875). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Taguchi_2004_reference](drugs/drug_metoprolol/Metoprolol_Taguchi2004_reference.md) | — | 1-compartment (no model) | 4 | Taguchi M et al., Nonlinear mixed effects model analysis…, Biological & pharmaceutical… (2004) | [10.1248/bpb.27.1642](https://doi.org/10.1248/bpb.27.1642) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rabbit</span> | [Bortolotti_1989_HR](drugs/drug_metoprolol/pd_Bortolotti_1989_HR.md) | heart rate fall ← metoprolol · delayed effect through an effect compartment | — | Bortolotti A et al., Pharmacokinetic and pharmacodynamic mod…, European journal of drug me… (1989) | [10.1007/BF03190855](https://doi.org/10.1007/BF03190855) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Di_2008_BP](drugs/drug_metoprolol/pd_Di_2008_BP.md) | blood pressure ← metoprolol · delayed effect through an effect compartment | — | Di Verniero CA et al., In vitro and in vivo pharmacodynamic pr…, Journal of cardiovascular p… (2008) | [10.1097/FJC.0b013e3181730306](https://doi.org/10.1097/FJC.0b013e3181730306) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Di_2008_HR](drugs/drug_metoprolol/pd_Di_2008_HR.md) | heart rate ← metoprolol · delayed effect through an effect compartment | — | Di Verniero CA et al., In vitro and in vivo pharmacodynamic pr…, Journal of cardiovascular p… (2008) | [10.1097/FJC.0b013e3181730306](https://doi.org/10.1097/FJC.0b013e3181730306) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Höcht_2006_blood_pressure_change](drugs/drug_metoprolol/pd_H_cht_2006_blood_pressure_change.md) | blood pressure change ← metoprolol unbound plasma concentrations · delayed effect through an effect compartment | — | Höcht C et al., Pharmacokinetic-pharmacodynamic (PK-PD)…, Naunyn-Schmiedeberg's archi… (2006) | [10.1007/s00210-006-0078-x](https://doi.org/10.1007/s00210-006-0078-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Höcht_2006_heart_rate_change](drugs/drug_metoprolol/pd_H_cht_2006_heart_rate_change.md) | heart rate change ← metoprolol unbound plasma concentrations · delayed effect through an effect compartment | — | Höcht C et al., Pharmacokinetic-pharmacodynamic (PK-PD)…, Naunyn-Schmiedeberg's archi… (2006) | [10.1007/s00210-006-0078-x](https://doi.org/10.1007/s00210-006-0078-x) |

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
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 104 matched, 20 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_11 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bortolotti_1989.pdf` | Bortolotti A et al., Pharmacokinetic and pharmacodynamic mod…, European journal of drug me… (1989) | popPK | 10 | [10.1007/BF03190855](https://doi.org/10.1007/BF03190855) | [2591419](https://pubmed.ncbi.nlm.nih.gov/2591419) | The study reports quantitative pharmacokinetic parameters (CL, V, t1/2, AUC) for metoprolol in rabbits with clear numeric values provided in the text. |
| `De_2017.pdf` | De Thaye E et al., Pharmacokinetic analysis of modified-re…, European journal of pharmac… (2017) | popPK | 10 | [10.1016/j.ejps.2016.10.039](https://doi.org/10.1016/j.ejps.2016.10.039) | [27816630](https://pubmed.ncbi.nlm.nih.gov/27816630) | The study performs a population PK analysis of metoprolol in dogs and rabbits, but the specific numeric parameter values are not present in the provided evidence. |
| `Isbister_2016.pdf` | Isbister GK et al., Zero-order metoprolol pharmacokinetics…, Clinical toxicology (Philad… (2016) | popPK | 10 | [10.1080/15563650.2016.1209768](https://doi.org/10.1080/15563650.2016.1209768) | [27442605](https://pubmed.ncbi.nlm.nih.gov/27442605) | The paper reports specific quantitative pharmacokinetic parameters (Volume 63.4 L, Vm 9.57 mg/h, Km 1.97 mg/L) for metoprolol derived from a one-compartment model in a human case. |
| `Luethy_2022.pdf` | Luethy D et al., Pharmacokinetics and pharmacodynamics o…, Journal of veterinary pharm… (2022) | popPK | 10 | [10.1111/jvp.13037](https://doi.org/10.1111/jvp.13037) | [34913168](https://pubmed.ncbi.nlm.nih.gov/34913168) | Study reports quantitative PK parameters (CL, V, t1/2, F) for metoprolol in horses derived from a 3-compartment model. |
| `Höcht_2004.pdf` | Höcht C et al., Pharmacokinetic-pharmacodynamic propert…, Naunyn-Schmiedeberg's archi… (2004) | popPK | 9 | [10.1007/s00210-004-0945-2](https://doi.org/10.1007/s00210-004-0945-2) | [15300360](https://pubmed.ncbi.nlm.nih.gov/15300360) | The study describes a pharmacokinetic-pharmacodynamic model for metoprolol in rats, but the specific numeric PK parameter values (CL, V, etc.) are not provided in the text, only qualitative statements that no differences were found. |
| `Höcht_2006.pdf` | Höcht C et al., Pharmacokinetic-pharmacodynamic (PK-PD)…, Naunyn-Schmiedeberg's archi… (2006) | popPK | 9 | [10.1007/s00210-006-0078-x](https://doi.org/10.1007/s00210-006-0078-x) | [16733693](https://pubmed.ncbi.nlm.nih.gov/16733693) | The study reports quantitative PK parameters, specifically the volume of distribution (Vd), for metoprolol in rats, though other parameters like clearance or half-life are not explicitly listed in the evidence. |
| `Yin_1997_2.pdf` | Yin XX et al., [Pharmacokinetic-pharmacodynamic modeli…, Yao xue xue bao = Acta phar… (1997) | popPK | 9 | not captured | [11596322](https://pubmed.ncbi.nlm.nih.gov/11596322) | The study reports quantitative PK parameters (two-compartment model, Vd/F, CLs/F, AUC) for metoprolol enantiomers in dogs, but the specific numeric values for clearance and volume are described qualitatively as being observed rather than explicitly listed in the provided text. |
| `Höcht_2005.pdf` | Höcht C et al., Applicability of microdialysis as a tec…, Journal of pharmacological… (2005) | popPK | 8 | [10.1016/j.vascn.2005.01.002](https://doi.org/10.1016/j.vascn.2005.01.002) | [16125622](https://pubmed.ncbi.nlm.nih.gov/16125622) | The study describes a PK-PD model for metoprolol in rats, but the specific numeric PK parameter values (CL, V, etc.) are not listed in the provided evidence text. |
| `Yin_1997.pdf` | Yin XX et al., Pharmacokinetic-pharmacodynamic modelin…, Zhongguo yao li xue bao = A… (1997) | popPK | 8 | not captured | [10072957](https://pubmed.ncbi.nlm.nih.gov/10072957) | The study is a PK-PD modeling study of metoprolol in rats, but the provided evidence contains only qualitative descriptions of the model fit and stereo-selective differences without any specific numeric parameter values. |
| `Zhao_2016.pdf` | Zhao S et al., Synchronous delivery of felodipine and…, Drug development and indust… (2016) | popPK | 8 | [10.3109/03639045.2016.1171332](https://doi.org/10.3109/03639045.2016.1171332) | [27074758](https://pubmed.ncbi.nlm.nih.gov/27074758) | The study is a PK study in dogs, but the abstract reports qualitative trends (lower Cmax, longer tmax) without specific numeric parameter values. |
| `Ritchie_1998.pdf` | Ritchie RH et al., Myocardial effect compartment modeling…, Journal of pharmaceutical s… (1998) | popPK | 7 | [10.1021/js9702776](https://doi.org/10.1021/js9702776) | [9519150](https://pubmed.ncbi.nlm.nih.gov/9519150) | The study reports a compartmental PK model (1-compartment) for metoprolol but provides no specific numeric parameter values (CL, V, ka, etc.) in the evidence, referencing only the qualitative model structure and effect compartment analysis. |

<sub>queue written 2026-10-15T03:29:41.606780+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bundkirchen_2001 | irrelevant | 0 | 0 | The study investigates the effects of beta-blockers on cardiac calcium sensitivity in vitro and does not report any pharmacokinetic parameters for metoprolol. |
| PD | Bundkirchen_2001 | not_relevant | 0 | 0 | The study investigates direct pharmacological effects on cardiac muscle mechanics (Ca2+ sensitivity) in isolated preparations, not the systemic pharmacodynamic exposure-response relationship of the drug in vivo. |
| popPK | De_2017 | relevant | 10 | 0 | The study performs a population PK analysis of metoprolol in dogs and rabbits, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Di_2008 | relevant | 4 | 0 | The study involves PK-PD modeling of metoprolol in rats, but specific quantitative PK parameters (CL, Vd, t1/2) are not provided in the text. |
| popPK | Fukao_2014 | irrelevant | 3 | 0 | The study uses in vitro LS180 cells for the primary mechanism investigation and the in vivo PK values are only described qualitatively (correlations) without providing specific numeric parameters in the evidence. |
| popPK | Ghazi_2022 | irrelevant | 0 | 0 | The study is a clinical cohort assessing blood pressure response to antihypertensives, not a pharmacokinetic study, and reports no PK parameters for metoprolol. |
| popPK | Höcht_2004 | relevant | 9 | 1 | The study describes a pharmacokinetic-pharmacodynamic model for metoprolol in rats, but the specific numeric PK parameter values (CL, V, etc.) are not provided in the text, only qualitative statements that no differences were found. |
| popPK | Höcht_2005 | relevant | 8 | 2 | The study describes a PK-PD model for metoprolol in rats, but the specific numeric PK parameter values (CL, V, etc.) are not listed in the provided evidence text. |
| popPK | Jankovic_2014 | irrelevant | 2 | 0 | This is a narrative review of β1-blockers that mentions metoprolol but provides no original quantitative PK parameter values in the extracted text. |
| popPK | Momčilović_2019 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of bisoprolol, not metoprolol. |
| popPK | Qian_2024 | irrelevant | 4 | 1 | The study reports only relative changes in PK parameters (AUC/t1/2) rather than absolute quantitative values, and specific numeric data are not present in the provided evidence. |
| popPK | Ritchie_1998 | relevant | 7 | 1 | The study reports a compartmental PK model (1-compartment) for metoprolol but provides no specific numeric parameter values (CL, V, ka, etc.) in the evidence, referencing only the qualitative model structure and effect compartment analysis. |
| popPK | Yin_1997 | relevant | 8 | 0 | The study is a PK-PD modeling study of metoprolol in rats, but the provided evidence contains only qualitative descriptions of the model fit and stereo-selective differences without any specific numeric parameter values. |
| popPK | Yin_1997_2 | relevant | 9 | 4 | The study reports quantitative PK parameters (two-compartment model, Vd/F, CLs/F, AUC) for metoprolol enantiomers in dogs, but the specific numeric values for clearance and volume are described qualitatively as being observed rather than explicitly listed in the provided text. |
| popPK | Zhao_2016 | irrelevant | 8 | 0 | The study is a PK study in dogs, but the abstract reports qualitative trends (lower Cmax, longer tmax) without specific numeric parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:29 UTC</sub>
