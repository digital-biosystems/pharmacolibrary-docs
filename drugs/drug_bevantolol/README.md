<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;bevantolol&quot;}]"></div>

# bevantolol

- **generic name:** bevantolol
- **ATC codes:** `C07AB06`, `C07BB06`
- **DrugBank:** [DB01295](https://go.drugbank.com/drugs/DB01295) · **PubChem:** [CID 2372](https://pubchem.ncbi.nlm.nih.gov/compound/2372)
- **molar mass:** 345.4327 g/mol (C20H27NO4) — DrugBank
- **groups:** investigational

## About

Bevantolol is a selective beta-blocker developed for cardiovascular conditions such as high blood pressure and angina. It is not an approved medicine and remains investigational, with no marketing authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1956953](https://www.wikidata.org/wiki/Q1956953) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:10 | 0:28 | 0/0/0 | 0/1/0 | 0/0/0 | 41,829/1,492 | einfracz / qwen3.8-27b | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rabbit</span> | [Liu_1993_HR](drugs/drug_bevantolol/pd_Liu_1993_HR.md) | heart rate ← bevantolol · delayed effect through an effect compartment | — | Liu XQ et al., Plasma bevantolol concentration and hea…, Zhongguo yao li xue bao = A… (1993) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bevantolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRB1 (target), ADRB2 (target), DRD2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `McNeil_1986.pdf` | McNeil JJ et al., Pharmacokinetics and concentration--eff…, Journal of cardiovascular p… (1986) | popPK | 8 | [10.1097/00005344-198611000-00016](https://doi.org/10.1097/00005344-198611000-00016) | [2434747](https://pubmed.ncbi.nlm.nih.gov/2434747) | Reports PK parameters for bevantolol in humans (t1/2, Vd, bioavailability) but does not explicitly state the clearance (CL) or absorption rate constant (ka) values. |
| `Selen_1986.pdf` | Selen A et al., Comparative single dose and steady-stat…, European journal of clinica… (1986) | popPK | 8 | [10.1007/BF00608218](https://doi.org/10.1007/BF00608218) | [2876899](https://pubmed.ncbi.nlm.nih.gov/2876899) | The paper reports specific quantitative PK parameters for bevantolol, including Cmax, Tmax, and elimination half-lives for both young and elderly human subjects. |
| `Solimon_1986.pdf` | Solimon M et al., Renal hemodynamics and pharmacokinetics…, The American journal of car… (1986) | popPK | 6 | [10.1016/0002-9149(86)90593-x](https://doi.org/10.1016/0002-9149(86)90593-x) | [2878596](https://pubmed.ncbi.nlm.nih.gov/2878596) | The paper is a clinical PK study of bevantolol in humans reporting half-life and clearance, but specific numeric parameter values are not present in the provided abstract text (only relative comparisons to healthy subjects). |
| `Liu_1993.pdf` | Liu XQ et al., Plasma bevantolol concentration and hea…, Zhongguo yao li xue bao = A… (1993) | popPK | 5 | not captured | [7901961](https://pubmed.ncbi.nlm.nih.gov/7901961) | The study reports pharmacokinetic parameters but the specific numeric values for CL, V, or half-life are not present in the evidence, only pharmacodynamic (Ke0, EC50) values. |
| `Vermeij_1986.pdf` | Vermeij P et al., Pharmacokinetic parameters of bevantolo…, European journal of clinica… (1986) | popPK | 5 | [10.1007/BF00541549](https://doi.org/10.1007/BF00541549) | [2874033](https://pubmed.ncbi.nlm.nih.gov/2874033) | The abstract reports a serum half-life and qualitative availability, but lacks the required quantitative volume of distribution or compartmental model parameters (CL, V, Q) for a full PK description. |
| `Omura_1996.pdf` | Omura T et al., Ca(2+)-antagonistic action of bevantolo…, Brain research (1996) | pd | 4 | [10.1016/0006-8993(95)01052-1](https://doi.org/10.1016/0006-8993(95)01052-1) | [8822369](https://www.ncbi.nlm.nih.gov/pubmed/8822369) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-14T20:10:39.632539+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dukes_1985 | irrelevant | 1 | 1 | The study is a pharmacological and electrophysiological investigation in pithed rats and isolated tissues, lacking a compartmental or population PK model; the only PK value (half-life) is a quoted human value in the introduction, not a measured parameter of the study. |
| popPK | Frishman_1988 | irrelevant | 1 | 0 | The paper is a review article summarizing pharmacodynamic and pharmacokinetic properties without providing original quantitative disposition parameter values. |
| PD | Frishman_1988 | not_relevant | 2 | 0 | The text is a qualitative review summary that mentions pharmacodynamic properties but does not provide specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Lammers_1985 | irrelevant | 0 | 0 | The study focuses on the ventilatory and cardiovascular effects (pharmacodynamics) of bevantolol in asthma patients, reporting no pharmacokinetic parameters such as clearance or volume. |
| PD | Lammers_1985 | not_relevant | 3 | 2 | The study reports qualitative dose-response effects of fixed doses on ventilatory parameters but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| popPK | Latts_1986 | irrelevant | 2 | 1 | The paper reports general PK characteristics (bioavailability, half-life, absorption) but lacks the specific quantitative disposition parameters (CL, V, Q, ka) required for a population pharmacokinetic model. |
| popPK | Liu_1993 | irrelevant | 5 | 0 | The study reports pharmacokinetic parameters but the specific numeric values for CL, V, or half-life are not present in the evidence, only pharmacodynamic (Ke0, EC50) values. |
| popPK | Löfdahl_1984 | irrelevant | 0 | 0 | The study reports pharmacodynamic outcomes (FEV1, heart rate, terbutaline dose-response) and selectivity, but provides no quantitative pharmacokinetic parameters (CL, V, t1/2, ka) for bevantolol. |
| popPK | Mackay_1981 | irrelevant | 0 | 0 | The study measures bronchial beta blockade (functional pharmacodynamic response) rather than quantitative pharmacokinetic parameters like clearance or volume. |
| popPK | Malinowska_2003 | irrelevant | 0 | 0 | This is a pharmacodynamic study in rats investigating receptor binding and heart rate effects, not a pharmacokinetic study reporting disposition parameters for bevantolol. |
| PD | Malinowska_2003 | not_relevant | 3 | 2 | The paper reports qualitative pharmacological effects and a single dose-shift factor for bupranolol, but provides no numeric PD parameters (Emax, EC50, etc.) or extractable concentration-effect curves for bevantolol. |
| popPK | Okawa_1986 | irrelevant | 0 | 0 | The study focuses on antihypertensive efficacy and dose response in patients, reporting blood pressure outcomes rather than pharmacokinetic parameters. |
| PD | Okawa_1986 | not_relevant | 3 | 2 | The text describes a dose-response study but only provides qualitative conclusions (effective at 200-400 mg/day) without reporting specific numeric PD parameters (e.g., Emax, EC50) or detailed effect-vs-dose data points in the provided excerpt. |
| popPK | Omura_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel antagonism, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Solimon_1986 | relevant | 6 | 0 | The paper is a clinical PK study of bevantolol in humans reporting half-life and clearance, but specific numeric parameter values are not present in the provided abstract text (only relative comparisons to healthy subjects). |
| popPK | Vermeij_1986 | relevant | 5 | 2 | The abstract reports a serum half-life and qualitative availability, but lacks the required quantitative volume of distribution or compartmental model parameters (CL, V, Q) for a full PK description. |
| popPK | Wong_2016 | irrelevant | 0 | 0 | This is a systematic review of blood pressure lowering efficacy (clinical outcome) rather than a pharmacokinetic study, and it does not report quantitative PK parameters (CL, V, etc.) for bevantolol. |
| PD | Wong_2016 | not_relevant | 2 | 1 | The paper is a systematic review and meta-analysis that reports average treatment effects (mean differences) rather than a pharmacodynamic model or specific concentration/dose-response parameters (like Emax or EC50) for bevantolol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
