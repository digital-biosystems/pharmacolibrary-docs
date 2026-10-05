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
| 2026-10-01 15:52 | 1:02 | 0/0/0 | 0/1/1 | 0/0/0 | 25,963/1,048 | ollama / glm-5.3-flash | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [McNeil_1986_percentage_of_reduction_in_postexercise_heart_rate](drugs/drug_bevantolol/pd_McNeil_1986_percentage_of_reduction_in_postexercise_heart_ra.md) | percentage of reduction in postexercise heart rate ← bevantolol · direct log-linear effect | — | McNeil JJ et al., Pharmacokinetics and concentration--eff…, Journal of cardiovascular p… (1986) | [10.1097/00005344-198611000-00016](https://doi.org/10.1097/00005344-198611000-00016) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">rabbit</span> | [Liu_1993_HR](drugs/drug_bevantolol/pd_Liu_1993_HR.md) | heart rate ← bevantolol · delayed effect through an effect compartment | — | Liu XQ et al., Plasma bevantolol concentration and hea…, Zhongguo yao li xue bao = A… (1993) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bevantolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRB1 (target), ADRB2 (target), DRD2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `McNeil_1986.pdf` | McNeil JJ et al., Pharmacokinetics and concentration--eff…, Journal of cardiovascular p… (1986) | popPK | 10 | [10.1097/00005344-198611000-00016](https://doi.org/10.1097/00005344-198611000-00016) | [2434747](https://pubmed.ncbi.nlm.nih.gov/2434747) | The study reports quantitative PK parameters for bevantolol including half-life (1.9 h), volume of distribution (62 L), and bioavailability (57%) directly in the text. |
| `Latts_1986.pdf` | Latts JR, Clinical pharmacokinetics and metabolis…, Angiology (1986) | popPK | 8 | [10.1177/000331978603700313](https://doi.org/10.1177/000331978603700313) | [2871781](https://pubmed.ncbi.nlm.nih.gov/2871781) | The paper reports key pharmacokinetic parameters for bevantolol, including bioavailability, half-life, and absorption characteristics, but lacks specific numeric values for clearance (CL) or volume of distribution (V). |
| `Selen_1986.pdf` | Selen A et al., Comparative single dose and steady-stat…, European journal of clinica… (1986) | popPK | 8 | [10.1007/BF00608218](https://doi.org/10.1007/BF00608218) | [2876899](https://pubmed.ncbi.nlm.nih.gov/2876899) | The paper reports quantitative PK parameters (Cmax, tmax, half-life) for bevantolol, but lacks explicit clearance (CL) or volume (V) values. |
| `Solimon_1986.pdf` | Solimon M et al., Renal hemodynamics and pharmacokinetics…, The American journal of car… (1986) | popPK | 8 | [10.1016/0002-9149(86)90593-x](https://doi.org/10.1016/0002-9149(86)90593-x) | [2878596](https://pubmed.ncbi.nlm.nih.gov/2878596) | The study reports pharmacokinetic parameters (half-life, clearance) for bevantolol, but the specific numeric values are not present in the provided text, only qualitative comparisons to healthy subjects. |
| `Vermeij_1986.pdf` | Vermeij P et al., Pharmacokinetic parameters of bevantolo…, European journal of clinica… (1986) | popPK | 8 | [10.1007/BF00541549](https://doi.org/10.1007/BF00541549) | [2874033](https://pubmed.ncbi.nlm.nih.gov/2874033) | The study reports PK parameters for bevantolol, but only the half-life is explicitly provided in the text, while other quantitative disposition parameters (CL, V) are not present in the evidence. |
| `Omura_1996.pdf` | Omura T et al., Ca(2+)-antagonistic action of bevantolo…, Brain research (1996) | pd | 4 | [10.1016/0006-8993(95)01052-1](https://doi.org/10.1016/0006-8993(95)01052-1) | [8822369](https://www.ncbi.nlm.nih.gov/pubmed/8822369) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-01T15:52:35.669237+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dukes_1985 | irrelevant | 1 | 0 | The paper is a pharmacological and electrophysiological study in animals and isolated tissues, not a pharmacokinetic study, and the only PK-related value (half-life) is a cited reference to unpublished human data rather than original quantitative disposition parameters. |
| popPK | Frishman_1988 | irrelevant | 1 | 0 | The paper is a review article summarizing pharmacodynamic and pharmacokinetic properties without providing original quantitative disposition parameter values. |
| PD | Frishman_1988 | not_relevant | 2 | 0 | The text is a qualitative review summary that mentions pharmacodynamic properties but does not provide specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Lammers_1985 | irrelevant | 0 | 0 | The study investigates ventilatory effects and cardioequipotency, not pharmacokinetic disposition parameters. |
| PD | Lammers_1985 | not_relevant | 3 | 2 | The study reports qualitative dose-response effects of fixed doses on ventilatory parameters but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| popPK | Liu_1993 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (Keo, EC50) and qualitative PK observations, but does not provide quantitative disposition parameters (CL, V, t1/2) for bevantolol. |
| popPK | Löfdahl_1984 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of beta-adrenoceptor selectivity in asthmatics and does not report any quantitative pharmacokinetic parameters for bevantolol. |
| popPK | Mackay_1981 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchial beta blockade and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for bevantolol. |
| popPK | Malinowska_2003 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of receptor antagonism in rats and does not report any pharmacokinetic parameters for bevantolol. |
| PD | Malinowska_2003 | not_relevant | 3 | 2 | The paper reports qualitative pharmacological effects and a single dose-shift factor for bupranolol, but provides no numeric PD parameters (Emax, EC50, etc.) or extractable concentration-effect curves for bevantolol. |
| popPK | Okawa_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure outcomes, not a pharmacokinetic study with quantitative disposition parameters. |
| PD | Okawa_1986 | not_relevant | 3 | 2 | The text describes a dose-response study but only provides qualitative conclusions (effective at 200-400 mg/day) without reporting specific numeric PD parameters (e.g., Emax, EC50) or detailed effect-vs-dose data points in the provided excerpt. |
| popPK | Omura_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel antagonism, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Solimon_1986 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (half-life, clearance) for bevantolol, but the specific numeric values are not present in the provided text, only qualitative comparisons to healthy subjects. |
| popPK | Vermeij_1986 | relevant | 8 | 2 | The study reports PK parameters for bevantolol, but only the half-life is explicitly provided in the text, while other quantitative disposition parameters (CL, V) are not present in the evidence. |
| popPK | Wong_2016 | irrelevant | 0 | 0 | This is a systematic review of blood pressure efficacy, not a pharmacokinetic study, and it does not report any PK parameters for bevantolol. |
| PD | Wong_2016 | not_relevant | 2 | 1 | The paper is a systematic review and meta-analysis that reports average treatment effects (mean differences) rather than a pharmacodynamic model or specific concentration/dose-response parameters (like Emax or EC50) for bevantolol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
