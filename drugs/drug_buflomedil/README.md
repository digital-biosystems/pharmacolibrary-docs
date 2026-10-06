<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C04A&quot;,&quot;href&quot;:&quot;atc/C04A.md&quot;},{&quot;label&quot;:&quot;buflomedil&quot;}]"></div>

# buflomedil

- **generic name:** buflomedil
- **ATC codes:** `C04AX20`
- **DrugBank:** [DB13510](https://go.drugbank.com/drugs/DB13510) · **PubChem:** not captured
- **molar mass:** 307.39 g/mol (C17H25NO4) — DrugBank
- **groups:** experimental

## About

Buflomedil is a vasodilator that was used to improve blood flow in peripheral vascular disorders. It is currently classed as an experimental compound, and its marketing status in major regions is unclear from the available information.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417862](https://www.wikidata.org/wiki/Q417862) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| buflomedil | parent | 307.39 | C17H25NO4 | DrugBank | — | Rey_1984 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:54 | 3:26 | 0/0/1 | 0/0/0 | 0/0/0 | 27,594/4,332 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Rey_1984_reference](drugs/drug_buflomedil/Buflomedil_Rey1984_reference.md) | — | 1-compartment (no model) | 2 | Rey E et al., Pharmacokinetics of buflomedil after in…, International journal of cl… (1984) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 40 matched, 39 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gundert-Remy_1981.pdf` | Gundert-Remy U et al., The clinical pharmacokinetics of buflom…, European journal of clinica… (1981) | popPK | 10 | [10.1007/BF00542100](https://doi.org/10.1007/BF00542100) | [7286057](https://pubmed.ncbi.nlm.nih.gov/7286057) | The study reports quantitative pharmacokinetic parameters (half-life, volume of distribution, bioavailability) for buflomedil in humans. |
| `Rey_1984.pdf` | Rey E et al., Pharmacokinetics of buflomedil after in…, International journal of cl… (1984) | popPK | 10 | not captured | [6526539](https://pubmed.ncbi.nlm.nih.gov/6526539) | The study reports quantitative pharmacokinetic parameters (half-life, total clearance) for buflomedil in humans, with specific numeric values provided in the abstract. |
| `Bourguignon_2012.pdf` | Bourguignon L et al., The value of population pharmacokinetic…, Fundamental & clinical phar… (2012) | popPK | 9 | [10.1111/j.1472-8206.2011.01000.x](https://doi.org/10.1111/j.1472-8206.2011.01000.x) | [22004557](https://pubmed.ncbi.nlm.nih.gov/22004557) | The paper describes a population PK study of buflomedil in humans using a three-compartment model, but the specific numeric parameter values (CL, V, Q, etc.) are not listed in the provided abstract text. |
| `Rey_1980.pdf` | Rey E et al., Pharmacokinetics of buflomedil after in…, International journal of cl… (1980) | popPK | 9 | not captured | [7203720](https://pubmed.ncbi.nlm.nih.gov/7203720) | The study reports quantitative pharmacokinetic parameters (clearance and half-life) for buflomedil in humans, with specific numeric values provided in the text. |
| `Zecca_1989.pdf` | Zecca L et al., Pharmacokinetics of buflomedil after va…, Arzneimittel-Forschung (1989) | popPK | 9 | not captured | [2751740](https://pubmed.ncbi.nlm.nih.gov/2751740) | The study reports pharmacokinetic parameters for buflomedil in humans, but the specific numeric values are not present in the provided evidence text. |
| `Rey_1986.pdf` | Rey E et al., Buflomedil kinetics in patients with li…, International journal of cl… (1986) | popPK | 8 | not captured | [3759277](https://pubmed.ncbi.nlm.nih.gov/3759277) | The study reports pharmacokinetic parameters for buflomedil in humans, but the specific numeric values are not present in the provided evidence. |
| `de_1992.pdf` | de Bernardi di Valserra M et al., Pharmacokinetics of a sustained release…, Arzneimittel-Forschung (1992) | popPK | 8 | not captured | [1530676](https://pubmed.ncbi.nlm.nih.gov/1530676) | The study reports quantitative PK parameters (Cmax, Tmax, steady-state levels, urinary excretion) for buflomedil in humans, but lacks explicit clearance or volume of distribution values. |
| `Tyagi_2019.pdf` | Tyagi V et al., Topical iontophoresis of buflomedil hyd…, International journal of ph… (2019) | pd | 4 | [10.1016/j.ijpharm.2019.118610](https://doi.org/10.1016/j.ijpharm.2019.118610) | [31415875](https://www.ncbi.nlm.nih.gov/pubmed/31415875) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T19:52:57.983038+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bourguignon_2012 | relevant | 9 | 2 | The paper describes a population PK study of buflomedil in humans using a three-compartment model, but the specific numeric parameter values (CL, V, Q, etc.) are not listed in the provided abstract text. |
| PD | Bourguignon_2012 | not_relevant | 0 | 0 | The paper focuses exclusively on population pharmacokinetics (PK) and Monte Carlo simulation for safety/toxicity risk assessment, without reporting any pharmacodynamic (PD) model, concentration-effect relationship, or numeric PD parameters. |
| PD | Briguglio_2005 | not_relevant | 1 | 0 | The study reports qualitative neuroprotective effects and biomarker changes at a single dose (10 mg/kg) without providing concentration-effect data, dose-response curves, or numeric PD parameters. |
| PD | Bucolo_2012 | not_relevant | 0 | 0 | The paper is a safety review of adverse drug reactions and overdose cases, containing no pharmacodynamic modeling, concentration-effect analysis, or numeric PD parameters. |
| PD | Chiffoleau_2000 | not_relevant | 0 | 0 | The text is a case report of an adverse event due to accidental double dosing and does not contain any pharmacodynamic modeling, concentration-effect analysis, or numeric PD parameters. |
| PD | Clissold_1987 | not_relevant | 2 | 0 | The text is a qualitative review summarizing therapeutic efficacy and general pharmacodynamic properties without providing specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect data. |
| popPK | Ding_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of eperisone, using buflomedil only as an internal standard for the analytical method. |
| popPK | Ding_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of trimetazidine, using buflomedil only as an internal standard. |
| popPK | Dubourg_1981 | irrelevant | 2 | 1 | The paper is a review that provides only a qualitative overview and a rough half-life range (2-3 hours) without reporting quantitative compartmental PK parameters (CL, V, Q) or population models. |
| PD | Fort_1982 | not_relevant | 1 | 0 | The text describes a qualitative toxicology study with dose levels and observed adverse effects, but it does not report any numeric pharmacodynamic parameters (e.g., EC50, Emax) or quantitative exposure-response relationships. |
| PD | Fort_1993 | not_relevant | 0 | 0 | The paper is a chronic toxicity study reporting qualitative safety observations and a no-observed-adverse-effect level (NOAEL), but it does not provide any pharmacodynamic modeling, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Gundert-Remy_1983 | irrelevant | 0 | 0 | no_text gate: only 41 chars of text extracted (&lt; 400) |
| PD | Labs_2000 | not_relevant | 3 | 2 | The study reports qualitative changes in hemodynamic parameters after a single fixed dose (200 mg) infusion but does not provide plasma concentration data or fit a dose-response model to derive numeric PD parameters like Emax or EC50. |
| PD | Martínez-Sierra_1992 | not_relevant | 1 | 0 | The text is a qualitative case report of intoxication that mentions a specific dose (50 mg/kg) causing seizures but provides no concentration-effect data, curve, or numeric PD parameters. |
| PD | Maurel_1995 | not_relevant | 2 | 1 | The study reports a clinical dose-response (600 mg vs placebo) with temperature changes, but lacks concentration data or formal PK/PD modeling parameters (Emax, EC50). |
| popPK | Mo_2025 | irrelevant | 0 | 0 | The paper describes an analytical method (ECL sensor) for detecting buflomedil in mouse plasma but does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| PD | Nowak_2002 | not_relevant | 2 | 1 | The study reports qualitative findings (non-significant effects) on RBC rheology and enzyme activity at two concentrations, but provides no numeric PD parameters, dose-response curves, or quantitative effect values to derive a relationship. |
| popPK | Rey_1986 | relevant | 8 | 0 | The study reports pharmacokinetic parameters for buflomedil in humans, but the specific numeric values are not present in the provided evidence. |
| popPK | Rey_1996 | relevant | 4 | 5 | The study reports dialysis clearance and steady-state concentrations (Cmin/Cmax) for buflomedil in humans, but lacks standard compartmental PK parameters like total clearance, volume of distribution, or half-life. |
| PD | Rey_1996 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (dialysis clearance, Cmin, Cmax) and does not measure or report any pharmacodynamic effects or exposure-response relationships. |
| popPK | Salerno_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy study assessing therapeutic outcomes and blood flow, not a pharmacokinetic study reporting disposition parameters. |
| PD | Scheffler_1990 | not_relevant | 1 | 0 | The paper describes qualitative observations of blood flow changes and redistribution phenomena following intra-arterial infusion but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for buflomedil. |
| PD | Szombathelyi_1991 | not_relevant | 3 | 2 | The paper reports qualitative dose-response comparisons and specific dose effects in animal models but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve for buflomedil. |
| popPK | Tyagi_2019 | irrelevant | 0 | 0 | no_text gate: only 148 chars of text extracted (&lt; 400) |
| PD | Tyagi_2019 | not_relevant | 0 | 0 | The paper focuses on PK (bioavailability) and safety of topical iontophoresis, with no reported concentration-effect or dose-response analysis for buflomedil. |
| popPK | Wei_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of eperisone hydrochloride, using buflomedil only as an internal standard for the assay. |
| PD | Zaccara_2020 | not_relevant | 1 | 0 | The paper is a qualitative review of cardiovascular drugs' effects on seizures, mentioning buflomedil only as proconvulsant without providing any numeric PD parameters or exposure-response data. |
| popPK | Zecca_1989 | relevant | 9 | 0 | The study reports pharmacokinetic parameters for buflomedil in humans, but the specific numeric values are not present in the provided evidence text. |
| PD | Zecca_1989 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (absorption, plasma levels, excretion) and contains no pharmacodynamic or exposure-response data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 19:53 UTC</sub>
