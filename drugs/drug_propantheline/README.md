<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;propantheline&quot;}]"></div>

# propantheline

- **generic name:** propantheline
- **ATC codes:** `A03AB05`, `A03CA34`
- **DrugBank:** [DB00782](https://go.drugbank.com/drugs/DB00782) · **PubChem:** [CID 4934](https://pubchem.ncbi.nlm.nih.gov/compound/4934)
- **molar mass:** 368.4892 g/mol (C23H30NO3) — DrugBank
- **groups:** approved

## About

Propantheline is an anticholinergic (antispasmodic) drug used for functional gastrointestinal disorders, such as stomach cramps and spasms. It is an approved medicine, though it is not authorised in the European Union and is now used relatively little, mainly as an antispasmodic for the digestive tract.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3275451](https://www.wikidata.org/wiki/Q3275451) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:00 | 1:58 | 0/0/1 | 1/0/0 | 0/0/0 | 69,225/2,306 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/4 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Vose_1979_reference](drugs/drug_propantheline/Propantheline_Vose1979_reference.md) | — | 1-compartment (no model) | 2 | Vose CW et al., Pharmacokinetics of propantheline bromi…, British journal of clinical… (1979) | [10.1111/j.1365-2125.1979.tb00902.x](https://doi.org/10.1111/j.1365-2125.1979.tb00902.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Sadraei_2013_ACh_response](drugs/drug_propantheline/pd_Sadraei_2013_ACh_response.md) | ileum contraction induced by acetylcholine (ACh) ← propantheline · direct sigmoid Emax (Hill) effect | — | Sadraei H et al., Antispasmodic effects of Prangos ferula…, Research in pharmaceutical… (2013) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=propantheline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 39 matched, 39 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vose_1979.pdf` | Vose CW et al., Pharmacokinetics of propantheline bromi…, British journal of clinical… (1979) | popPK | 10 | [10.1111/j.1365-2125.1979.tb00902.x](https://doi.org/10.1111/j.1365-2125.1979.tb00902.x) | [760746](https://pubmed.ncbi.nlm.nih.gov/760746) | The study reports quantitative pharmacokinetic parameters (clearance, half-lives) for propantheline in humans with all numeric values present in the text. |
| `Alberts_1995.pdf` | Alberts P, Classification of the presynaptic musca…, The Journal of pharmacology… (1995) | pd | 4 | not captured | [7616431](https://www.ncbi.nlm.nih.gov/pubmed/7616431) | metadata signals extractable PD data (EC50) |
| `Guay_2003.pdf` | Guay DR, Clinical pharmacokinetics of drugs used…, Clinical pharmacokinetics (2003) | pgx | 8 | [10.2165/00003088-200342140-00004](https://doi.org/10.2165/00003088-200342140-00004) | [14606931](https://www.ncbi.nlm.nih.gov/pubmed/14606931) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-04T13:00:00.661260+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aghazadeh-Habashi_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of meloxicam, using propantheline only as a tool to suppress the vagus nerve, and does not report PK parameters for propantheline itself. |
| popPK | Alberts_1995 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| popPK | Chiu_2008 | irrelevant | 0 | 0 | The study is an in-vitro/in-vivo ototoxicity screening assay measuring hair cell loss, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Dajani_1978 | irrelevant | 0 | 0 | The study reports pharmacodynamic efficacy (gastric secretion inhibition) and relative potency, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for propantheline. |
| popPK | Dajani_1979 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of propantheline on stress ulcer formation in rats and does not report any pharmacokinetic parameters. |
| PD | Dajani_1979 | not_relevant | 4 | 2 | The paper reports dose-dependent inhibition and relative potency ratios (10x, 44x) but does not provide specific numeric dose-response parameters (e.g., ED50, Emax) or concentration-effect curves in the provided text. |
| popPK | Dajani_1979_2 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of drug-induced diarrhea in mice using propantheline as an antidiarrheal agent, not its pharmacokinetics. |
| PD | Dajani_1979_2 | not_relevant | 2 | 1 | The paper describes qualitative dose-dependent effects and attenuation by propantheline but does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for propantheline. |
| popPK | DeVault_1987 | irrelevant | 0 | 0 | The study measures salivary flow and acid neutralization capacity, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Forrest_1982 | irrelevant | 0 | 0 | The paper is a review of paracetamol pharmacokinetics, and propantheline is only mentioned as a drug that delays paracetamol absorption, not as the subject of PK analysis. |
| popPK | Freijer_2007 | irrelevant | 0 | 0 | The study focuses on paracetamol absorption modeling, not propantheline. |
| PD | Freijer_2007 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic absorption modeling of paracetamol using the convection-dispersion equation and does not contain any data or analysis for propantheline or any pharmacodynamic (exposure-response) relationships. |
| popPK | Gibaldi_1975 | irrelevant | 1 | 0 | The study reports pharmacodynamic effects (salivary flow) rather than quantitative pharmacokinetic parameters (CL, V, ka) for propantheline. |
| PD | Gibaldi_1975 | not_relevant | 3 | 1 | The text describes qualitative dose-response observations (15mg vs 30mg) and food effects in 3 subjects but does not provide numeric concentration-effect data, Emax/EC50 parameters, or a quantitative PD model. |
| popPK | Gibiński_1979 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of trithiozine, with propantheline serving only as a comparator for gastric secretion suppression. |
| popPK | Guay_2003 | irrelevant | 1 | 0 | The paper is a review that mentions propantheline but provides no quantitative pharmacokinetic parameters for it in the provided text. |
| PGx | Guay_2003 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for tolterodine (CYP2D6/3A4) but only mentions propantheline in a general list of drugs without providing specific pharmacokinetic or pharmacodynamic data or genetic associations for it. |
| popPK | Hough_1981 | irrelevant | 0 | 0 | The study investigates in-vitro histamine H2-receptor antagonism and does not report pharmacokinetic parameters for propantheline. |
| PD | Hough_1981 | not_relevant | 2 | 1 | The text describes qualitative pharmacological effects (competitive vs. non-competitive inhibition) and relative potency but does not provide numeric PD parameters (e.g., Ki, IC50, Emax) or extractable concentration-effect curves. |
| popPK | Hu_2018 | irrelevant | 0 | 0 | The study focuses on machine learning models for digoxin dosage prediction and does not involve propantheline. |
| PD | Hu_2018 | not_relevant | 0 | 0 | The paper focuses on machine learning for digoxin dosage prediction and does not contain any pharmacodynamic or exposure-response analysis for propantheline. |
| popPK | Hughes_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cefpodoxime proxetil, using propantheline only as a gastric motility modifier/comparator. |
| popPK | Joel_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of etoposide, using propantheline only as a co-administered agent to modify gastric emptying, rather than as the subject drug. |
| popPK | Marathe_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin, using propantheline only as a co-administered agent to alter gastrointestinal motility, and does not report PK parameters for propantheline itself. |
| popPK | Martínez_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of droxicam, using propantheline only as a gastric emptying modifier, and does not report PK parameters for propantheline. |
| popPK | Melvin_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of zidovudine (AZT), using propantheline only as a co-administered GI motility inhibitor, and does not report PK parameters for propantheline itself. |
| popPK | Miyake_2025 | irrelevant | 0 | 0 | Propantheline is used only as a pretreatment agent (to induce diarrhea) to modify the physiological state of the dogs, while the pharmacokinetic parameters reported are for the subject drug dipyridamole. |
| popPK | Nakade_2008 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of digoxin, with propantheline mentioned only as a background comparator for anticholinergic effects. |
| popPK | Rigby_1983 | relevant | 8 | 0 | The study is a pharmacokinetic bioavailability comparison for propantheline, but the provided evidence contains only qualitative results and p-values, with no specific numeric PK parameters (e.g., CL, V, t1/2) listed. |
| PD | Rigby_1983 | not_relevant | 2 | 1 | The study compares bioavailability using pharmacodynamic endpoints (salivary flow, heart rate) but does not report a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Sadraei_2013 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of antispasmodic effects on rat ileum, not a pharmacokinetic study, and propantheline is used only as a comparator agent. |
| popPK | Sadraei_2014 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay on rat ileum where propantheline is used only as a reference comparator, and no pharmacokinetic parameters are reported. |
| popPK | Shukla_1992 | irrelevant | 1 | 0 | Propantheline is used as a co-administered agent to study the pharmacokinetics of cefprozil, not as the subject drug. |
| popPK | Singh-Franco_2005 | irrelevant | 0 | 0 | The paper is a review of trospium chloride, and propantheline is only mentioned as a search term or comparator, with no PK parameters reported for it. |
| popPK | Sánchez_1989 | irrelevant | 0 | 0 | Propantheline is used only as a gastric emptying modifier (comparator agent) to study the pharmacokinetics of droxicam, not as the subject drug. |
| popPK | Yarker_1995 | irrelevant | 0 | 0 | The paper is a review of oxybutynin, and propantheline is only mentioned as a comparator agent without any quantitative pharmacokinetic parameters provided. |
| PD | Yarker_1995 | not_relevant | 1 | 0 | The text is a qualitative review of oxybutynin that mentions propantheline only for comparative efficacy without providing any numeric PD parameters or exposure-response data. |
| popPK | Yu_1997 | irrelevant | 0 | 0 | The study focuses on clinical efficacy and pharmacodynamics (heart rate, blood pressure) in neurocardiogenic syncope, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Yu_1997 | not_relevant | 2 | 1 | The study reports clinical efficacy and hemodynamic changes (heart rate, blood pressure) before and after treatment, but it does not provide plasma concentration data or fit a pharmacodynamic model to derive numeric parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 13:00 UTC</sub>
