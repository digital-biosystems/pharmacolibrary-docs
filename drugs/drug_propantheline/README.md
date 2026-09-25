<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;propantheline&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Propantheline_Vose1979_reference&quot;,&quot;label&quot;:&quot;Vose_1979_reference&quot;,&quot;href&quot;:&quot;drugs/drug_propantheline/Propantheline_Vose1979_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# propantheline

- **generic name:** propantheline
- **ATC codes:** `A03AB05`, `A03CA34`
- **DrugBank:** [DB00782](https://go.drugbank.com/drugs/DB00782)
- **groups:** approved

## About

**Description.** A muscarinic antagonist used as an antispasmodic, in rhinitis, in urinary incontinence, and in the treatment of ulcers. At high doses it has nicotinic effects resulting in neuromuscular blocking.

**Indication.** For the treatment of enuresis. It has also been used for hyperhidrosis, and cramps or spasms of the stomach, intestines or bladder.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 09:43 | 9:46 | 0/0/1 | 2/1/0 | 0/0/0 | 154,225/20,128 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 2/4 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Vose_1979_reference](drugs/drug_propantheline/Propantheline_Vose1979_reference.md) | Vose CW et al., Pharmacokinetics of propantheline bromi…, British journal of clinical… (1979) | [10.1111/j.1365-2125.1979.tb00902.x](https://doi.org/10.1111/j.1365-2125.1979.tb00902.x) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Sadraei_2013](drugs/drug_propantheline/pd_Sadraei_2013_ileum_contraction.md) | Sadraei H et al., Antispasmodic effects of Prangos ferula…, Research in pharmaceutical… (2013) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Sadraei_2014](drugs/drug_propantheline/pd_Sadraei_2014_tension_development.md) | Sadraei H et al., Antispasmodic activity of isovanillin a…, Research in pharmaceutical… (2014) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Chiu_2008](drugs/drug_propantheline/pd_Chiu_2008_hair_cell_survival.md) | Chiu LL et al., Using the zebrafish lateral line to scr…, Journal of the Association… (2008) | [10.1007/s10162-008-0118-y](https://doi.org/10.1007/s10162-008-0118-y) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Chiu_2008](drugs/drug_propantheline/pd_Chiu_2008_unknown.md) | Chiu LL et al., Using the zebrafish lateral line to scr…, Journal of the Association… (2008) | [10.1007/s10162-008-0118-y](https://doi.org/10.1007/s10162-008-0118-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=propantheline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…Approximately 70% of the dose is excreted in the urine, mostly as metabolites.…”</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 39 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vose_1979.pdf` | Vose CW et al., Pharmacokinetics of propantheline bromi…, British journal of clinical… (1979) | popPK | 10 | [10.1111/j.1365-2125.1979.tb00902.x](https://doi.org/10.1111/j.1365-2125.1979.tb00902.x) | [760746](https://pubmed.ncbi.nlm.nih.gov/760746) | The paper reports quantitative pharmacokinetic parameters for propantheline, including total plasma clearance (79.2 l h-1), renal clearance (11.5 l h-1), and multi-compartment half-lives, all of which are explicitly present in the text. |
| `Alberts_1995.pdf` | Alberts P, Classification of the presynaptic musca…, The Journal of pharmacology… (1995) | pd | 4 | not captured | [7616431](https://www.ncbi.nlm.nih.gov/pubmed/7616431) | metadata signals extractable PD data (EC50) |
| `Guay_2003.pdf` | Guay DR, Clinical pharmacokinetics of drugs used…, Clinical pharmacokinetics (2003) | pgx | 8 | [10.2165/00003088-200342140-00004](https://doi.org/10.2165/00003088-200342140-00004) | [14606931](https://www.ncbi.nlm.nih.gov/pubmed/14606931) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-09-18T09:37:57.040484+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aghazadeh-Habashi_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of meloxicam, using propantheline only as a tool to induce vagal suppression, and does not report PK parameters for propantheline. |
| popPK | Alberts_1995 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| popPK | Chiu_2008 | irrelevant | 0 | 0 | The paper is an in-vitro/in-vivo ototoxicity screening study using zebrafish and mouse utricles, not a pharmacokinetic study, and reports no disposition parameters for propantheline. |
| popPK | Dajani_1978 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic efficacy (gastric secretion inhibition) and relative potency, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life for propantheline. |
| popPK | Dajani_1979 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of propantheline on stress ulcer formation in rats and does not report any pharmacokinetic parameters. |
| PD | Dajani_1979 | not_relevant | 4 | 2 | The paper reports dose-dependent inhibition and relative potency ratios (10x, 44x) but does not provide specific numeric dose-response parameters (e.g., ED50, Emax) or concentration-effect curves in the provided text. |
| popPK | Dajani_1979_2 | irrelevant | 0 | 0 | The study is a pharmacological investigation of diarrhea mechanisms in mice where propantheline is used as an antidiarrheal agent, not a pharmacokinetic study reporting disposition parameters. |
| PD | Dajani_1979_2 | not_relevant | 2 | 1 | The paper describes qualitative dose-dependent effects and attenuation by propantheline but does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for propantheline. |
| popPK | DeVault_1987 | irrelevant | 0 | 0 | The study investigates the effect of propantheline on salivary flow and acid neutralization, not its pharmacokinetic disposition parameters. |
| popPK | Forrest_1982 | irrelevant | 0 | 0 | The paper is a review of paracetamol pharmacokinetics, and propantheline is only mentioned as a co-administered agent that delays paracetamol absorption, with no PK parameters reported for propantheline itself. |
| popPK | Freijer_2007 | irrelevant | 1 | 0 | The study focuses on paracetamol as the subject drug, with propantheline used only as a co-administered agent to delay gastric emptying, and no specific PK parameters for propantheline are reported. |
| PD | Freijer_2007 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic absorption modeling of paracetamol using the convection-dispersion equation and does not contain any data or analysis for propantheline or any pharmacodynamic (exposure-response) relationships. |
| popPK | Gibaldi_1975 | irrelevant | 2 | 0 | The study reports pharmacodynamic effects (salivary flow) rather than quantitative pharmacokinetic parameters (CL, V, ka) for propantheline. |
| PD | Gibaldi_1975 | not_relevant | 3 | 1 | The text describes qualitative dose-response observations (15mg vs 30mg) and food effects in 3 subjects but does not provide numeric concentration-effect data, Emax/EC50 parameters, or a quantitative PD model. |
| popPK | Gibiński_1979 | irrelevant | 0 | 0 | The study focuses on trithiozine, with propantheline serving only as a comparator for gastric secretion properties, and no quantitative PK parameters for propantheline are reported. |
| popPK | Guay_2003 | irrelevant | 1 | 0 | The paper is a review that mentions propantheline only as one of several drugs, but provides no quantitative pharmacokinetic parameters for it in the provided text. |
| PGx | Guay_2003 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for tolterodine (CYP2D6/3A4) but only mentions propantheline in a general list of drugs without providing specific pharmacokinetic or pharmacodynamic data or genetic associations for it. |
| popPK | Hough_1981 | irrelevant | 0 | 0 | The paper investigates the pharmacological mechanism (H2-receptor antagonism) of propantheline in vitro and does not report any pharmacokinetic parameters. |
| PD | Hough_1981 | not_relevant | 2 | 1 | The text describes qualitative pharmacological effects (competitive vs. non-competitive inhibition) and relative potency but does not provide numeric PD parameters (e.g., Ki, IC50, Emax) or extractable concentration-effect curves. |
| popPK | Hu_2018 | irrelevant | 0 | 0 | The study focuses on machine learning models for digoxin dosage prediction and does not involve propantheline or report its pharmacokinetic parameters. |
| PD | Hu_2018 | not_relevant | 0 | 0 | The paper focuses on machine learning for digoxin dosage prediction and does not contain any pharmacodynamic or exposure-response analysis for propantheline. |
| popPK | Hughes_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefpodoxime proxetil, using propantheline only as a gastric motility modifier/comparator, not as the subject drug. |
| popPK | Joel_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of etoposide, with propantheline used only as a co-administered agent to modify gastric emptying, and no PK parameters for propantheline itself are reported. |
| popPK | Marathe_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin, using propantheline only as a co-administered agent to alter gastrointestinal motility, and does not report PK parameters for propantheline itself. |
| popPK | Martínez_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of droxicam, using propantheline only as a gastric emptying modifier, and does not report PK parameters for propantheline. |
| popPK | Melvin_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of zidovudine (AZT), with propantheline used only as a co-administered GI motility inhibitor, not as the subject drug. |
| popPK | Miyake_2025 | irrelevant | 1 | 0 | Propantheline is used only as a pretreatment agent to modify animal physiology, not as the subject drug for PK parameter estimation. |
| popPK | Nakade_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of digoxin, with propantheline mentioned only as a background comparator for anticholinergic effects, and no PK parameters for propantheline are reported. |
| popPK | Rigby_1983 | relevant | 8 | 0 | The study is a pharmacokinetic bioavailability comparison for propantheline, but the provided evidence contains only qualitative results and p-values, with no specific numeric PK parameters (e.g., CL, V, t1/2) listed. |
| PD | Rigby_1983 | not_relevant | 2 | 1 | The study compares bioavailability using pharmacodynamic endpoints (salivary flow, heart rate) but does not report a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Sadraei_2013 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of antispasmodic effects on rat ileum, not a pharmacokinetic study, and propantheline is used only as a comparator agent. |
| popPK | Sadraei_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay on rat ileum where propantheline is used only as a reference comparator, and no pharmacokinetic parameters are reported. |
| popPK | Shukla_1992 | irrelevant | 1 | 0 | Propantheline is used as a co-administered agent to study the pharmacokinetics of cefprozil, not as the subject drug. |
| popPK | Singh-Franco_2005 | irrelevant | 0 | 0 | The paper is a review of trospium chloride, and propantheline is only mentioned as a search term or comparator without any reported pharmacokinetic parameters. |
| popPK | Sánchez_1989 | irrelevant | 0 | 0 | Propantheline is used only as a gastric emptying modifier (comparator agent) to study the pharmacokinetics of droxicam, not as the subject drug. |
| popPK | Yarker_1995 | irrelevant | 0 | 0 | The paper is a review of oxybutynin, and propantheline is only mentioned as a comparator agent without any quantitative pharmacokinetic parameters provided. |
| PD | Yarker_1995 | not_relevant | 1 | 0 | The text is a qualitative review of oxybutynin that mentions propantheline only for comparative efficacy without providing any numeric PD parameters or exposure-response data. |
| popPK | Yu_1997 | irrelevant | 0 | 0 | The study focuses on clinical efficacy and pharmacodynamics (heart rate, blood pressure) in neurocardiogenic syncope, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Yu_1997 | not_relevant | 2 | 1 | The study reports clinical efficacy and hemodynamic changes (heart rate, blood pressure) before and after treatment, but it does not provide plasma concentration data or fit a pharmacodynamic model to derive numeric parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 09:38 UTC</sub>
