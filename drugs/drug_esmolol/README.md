<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;esmolol&quot;}]"></div>

# esmolol

- **generic name:** esmolol
- **ATC codes:** `C07AB09`
- **DrugBank:** [DB00187](https://go.drugbank.com/drugs/DB00187) · **PubChem:** [CID 59768](https://pubchem.ncbi.nlm.nih.gov/compound/59768)
- **molar mass:** 295.374 g/mol (C16H25NO4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Esmolol is a selective beta blocker used for heart-related conditions such as high blood pressure, angina, myocardial infarction, and certain fast heart rhythms. It is an approved medicine, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418139](https://www.wikidata.org/wiki/Q418139) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:56 | 2:06 | 0/0/0 | 0/0/0 | 0/0/0 | 96,279/1,492 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 21/3 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=esmolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| excretion | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 80 matched, 72 returned
- **screened:** 15  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grémain_2021.pdf` | Grémain V et al., Massive suicidal ingestion of caffeine:…, Clinical toxicology (Philad… (2021) | pd | 5 | [10.1080/15563650.2021.1891243](https://doi.org/10.1080/15563650.2021.1891243) | [33688777](https://www.ncbi.nlm.nih.gov/pubmed/33688777) | metadata signals extractable PD data (sigmoid) |
| `Haidar_1997.pdf` | Haidar SH et al., The pharmacokinetics and electroencepha…, Pharmaceutical research (1997) | pd | 5 | [10.1023/a:1012156502624](https://doi.org/10.1023/a:1012156502624) | [9453074](https://www.ncbi.nlm.nih.gov/pubmed/9453074) | metadata signals extractable PD data (sigmoid) |
| `Deng_2006.pdf` | Deng CY et al., Esmolol inhibits Na+ current in rat ven…, Methods and findings in exp… (2006) | pd | 4 | [10.1358/mf.2006.28.10.1037498](https://doi.org/10.1358/mf.2006.28.10.1037498) | [17235414](https://www.ncbi.nlm.nih.gov/pubmed/17235414) | metadata signals extractable PD data (IC50) |
| `Sidi_2008.pdf` | Sidi A et al., Administration of milrinone before isch…, Acta anaesthesiologica Scan… (2008) | pd | 4 | [10.1111/j.1399-6576.2007.01554.x](https://doi.org/10.1111/j.1399-6576.2007.01554.x) | [18269389](https://www.ncbi.nlm.nih.gov/pubmed/18269389) | metadata signals extractable PD data (Emax) |
| `Tanahashi_2009.pdf` | Tanahashi S et al., Comparative effects of ultra-short-acti…, European journal of anaesth… (2009) | pd | 4 | [10.1097/EJA.0b013e32831ac268](https://doi.org/10.1097/EJA.0b013e32831ac268) | [19237982](https://www.ncbi.nlm.nih.gov/pubmed/19237982) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T01:54:48.851696+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adeli_2012 | irrelevant | 0 | 0 | The study is a mechanistic toxicology investigation of mitochondrial function in rats, not a pharmacokinetic study, and reports no disposition parameters for esmolol. |
| PD | Adeli_2012 | not_relevant | 2 | 1 | The paper mentions a dose-response curve for esmolol to select a lethal dose (LD50), but it does not report the curve, numeric PD parameters (EC50, Emax), or concentration-effect data; the study focuses on mitochondrial biomarkers after a single fixed overdose. |
| popPK | Ahmet_1999 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of ONO-1101 in dogs, with esmolol mentioned only as background context without any PK data provided. |
| PD | Ahmet_1999 | not_relevant | 2 | 1 | The study investigates a different drug (ONO-1101) and only provides qualitative descriptions of effects and a single concentration time-point, lacking any quantitative exposure-response or dose-response modeling for esmolol. |
| popPK | Arnalich-Montiel_2014 | irrelevant | 0 | 0 | The study focuses on coronary artery remodeling and oxidative stress biomarkers in rats, reporting no pharmacokinetic parameters such as clearance, volume, or half-life for esmolol. |
| PD | Arnalich-Montiel_2014 | not_relevant | 2 | 1 | The study reports group-level mean effects of a single fixed infusion rate on vascular remodeling and oxidative stress biomarkers, but does not provide concentration-effect data, dose-response curves for esmolol, or numeric PD parameters (e.g., EC50, Emax) for the drug itself. |
| popPK | Benfield_1987_2 | irrelevant | 2 | 0 | The paper is a preliminary review that summarizes pharmacokinetic properties qualitatively (mentioning a half-life of ~9 mins) but does not report original quantitative disposition parameters like clearance, volume, or compartmental model values. |
| PD | Benfield_1987_2 | not_relevant | 2 | 0 | The text is a qualitative review summarizing general pharmacokinetic properties and clinical efficacy without providing specific numeric PD parameters or concentration-effect data. |
| popPK | Blanski_1988 | irrelevant | 1 | 0 | The text is a clinical review describing pharmacodynamic effects and general pharmacokinetic features (esterase metabolism) without reporting any quantitative PK parameters (CL, V, t1/2) for esmolol. |
| PD | Blanski_1988 | not_relevant | 1 | 0 | The text is a qualitative review describing general pharmacodynamic actions and clinical indications without providing specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Blau_1992 | not_relevant | 0 | 0 | The study compares the efficacy of esmolol and sodium nitroprusside in a clinical setting but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Bodor_2000 | irrelevant | 1 | 0 | The paper is a review of soft drug design principles that mentions esmolol only as an example of a marketed drug, without providing original quantitative pharmacokinetic parameter values. |
| PD | Bodor_2000 | not_relevant | 1 | 0 | The text is a review of soft drug design principles and only qualitatively mentions esmolol as an example without providing specific numeric PD parameters or exposure-response data. |
| popPK | Chang_1994 | irrelevant | 0 | 0 | The study focuses on neuromuscular pharmacodynamics (interaction with succinylcholine) in rats and does not report any quantitative pharmacokinetic parameters for esmolol. |
| popPK | Chao_2014 | irrelevant | 1 | 0 | The study is a clinical quality improvement review of dosing protocols and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for esmolol. |
| PD | Chao_2014 | not_relevant | 2 | 0 | The study describes a small-n (n=8) clinical evaluation of dosing and protocol adherence but does not report numeric concentration-effect data, dose-response curves, or specific PD parameters (e.g., Emax, EC50) in the provided text. |
| popPK | Dan_2022 | irrelevant | 0 | 0 | The paper is a clinical review discussing rate control strategies in atrial fibrillation and does not report any quantitative pharmacokinetic parameters for esmolol. |
| PD | Dan_2022 | not_relevant | 1 | 0 | The text is a qualitative review discussing the clinical utility of esmolol and landiolol for rate control without providing any numeric pharmacodynamic parameters or exposure-response data. |
| popPK | Deng_2006 | irrelevant | 0 | 0 | no_text gate: only 56 chars of text extracted (&lt; 400) |
| popPK | Ede_1997 | irrelevant | 1 | 0 | This is a pharmacodynamic cardioplegia efficacy study in isolated hearts and pigs; no PK disposition parameters (CL, V, half-life, model) are reported. |
| popPK | Fan_1991 | irrelevant | 1 | 0 | The paper describes an analytical method (HPLC assay) for measuring esmolol concentrations and does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PD | Fan_1991 | not_relevant | 0 | 0 | The paper describes a validation of an HPLC assay for esmolol and does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| PGx | Fletcher_2024 | not_relevant | 0 | 0 | The paper is a narrative review on managing arrhythmias in cardiogenic shock and does not report pharmacogenomic effects on esmolol PK/PD parameters. |
| popPK | Floria_2024 | irrelevant | 0 | 0 | The paper is a review of landiolol, not esmolol, and esmolol is only mentioned as a comparator without providing quantitative PK parameters for it. |
| PD | Floria_2024 | not_relevant | 1 | 0 | The paper is a review of landiolol and only qualitatively mentions esmolol as a comparator without providing any numeric PD parameters or exposure-response data for esmolol. |
| popPK | Ghallab_2024 | irrelevant | 0 | 0 | The paper is a review of landiolol, with esmolol serving only as a comparator, and no quantitative PK parameters for esmolol are provided. |
| PD | Ghallab_2024 | not_relevant | 1 | 0 | The paper is a state-of-the-art review of landiolol that qualitatively compares it to esmolol but does not report specific numeric PD parameters or exposure-response data for esmolol. |
| popPK | Gorczynski_1984 | irrelevant | 0 | 0 | The study focuses on hemodynamic and pharmacodynamic effects (heart rate, blood pressure) in dogs and does not report quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Gorczynski_1984 | not_relevant | 4 | 2 | The paper describes qualitative dose-dependent effects and parallel shifts in isoproterenol dose-response curves but does not provide numeric PD parameters (e.g., EC50, Emax) or specific concentration-effect data in the text. |
| popPK | Goyagi_2012 | irrelevant | 1 | 0 | This is a dose-response neuroprotection study in rats with no PK parameters (CL, V, half-life, or model) reported. |
| popPK | Greenberg_2002 | irrelevant | 0 | 0 | The study is a hemodynamic/echocardiographic assessment of myocardial contractility where esmolol is used only as a negative inotropic agent, with no pharmacokinetic parameters reported. |
| PD | Greenberg_2002 | not_relevant | 2 | 1 | The study uses esmolol only to create a low-inotropy state for validating an echocardiographic index against peak elastance; it does not model or report a concentration-effect or dose-response relationship for esmolol itself. |
| popPK | Grémain_2021 | irrelevant | 0 | 0 | no_text gate: only 129 chars of text extracted (&lt; 400) |
| PD | Grémain_2021 | not_relevant | 0 | 0 | The paper focuses on caffeine toxicity, not esmolol, and does not report any PD parameters for esmolol. |
| popPK | Gökçe_2026 | irrelevant | 0 | 0 | The study is an in vitro/in silico investigation of enzyme inhibition (PON1) and does not report pharmacokinetic disposition parameters for esmolol. |
| popPK | Haidar_1997 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| PD | Haidar_1997 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics and EEG response of remifentanil, with esmolol only mentioned as a co-administered agent; no exposure-response or dose-response analysis for esmolol is reported. |
| popPK | Jackman_2002 | irrelevant | 1 | 0 | The study focuses on a different drug (D140S.HCl) with esmolol serving only as a comparator, and no quantitative PK parameters for esmolol are provided. |
| PD | Jackman_2002 | not_relevant | 2 | 1 | The paper compares the pharmacodynamic half-life and relative potency of a new compound to esmolol but does not provide a concentration-effect curve or numeric PD parameters (Emax, EC50) for esmolol itself. |
| popPK | Kim_1998 | irrelevant | 0 | 0 | The study focuses on neuromuscular interactions and cholinesterase activity, reporting no pharmacokinetic parameters (CL, V, etc.) for esmolol. |
| popPK | Kim_2015 | irrelevant | 1 | 0 | This is a clinical inflammatory-response dose-response study with cytokine/CRP outcomes; no PK parameters (CL, V, half-life, model) for esmolol are reported. |
| popPK | Krumpl_2017 | relevant | 8 | 4 | The study reports PK parameters for esmolol, but only provides half-life and Tmax values, lacking the comprehensive quantitative disposition parameters (CL, V, Q) typically required for population-PK extraction. |
| popPK | Krumpl_2018 | relevant | 9 | 2 | The study reports PK parameters for esmolol, but only the half-life (6.9 minutes) is explicitly provided in the text, while clearance and volume of distribution are described qualitatively without numeric values. |
| PD | Krumpl_2018 | not_relevant | 4 | 2 | The abstract describes qualitative PD comparisons (heart rate reduction) and PK parameters but does not provide numeric PD parameters (e.g., EC50, Emax) or specific concentration-effect data points in the provided text. |
| popPK | Krumpl_2022 | irrelevant | 0 | 0 | The study focuses on hemodynamic effects and blood pressure recovery rather than pharmacokinetic parameters, and no quantitative PK data for esmolol is present in the provided evidence. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The study investigates the volume kinetics of Ringer's lactate infusion in sheep, using esmolol only as a vasoactive drug to modulate fluid distribution, rather than measuring esmolol's own pharmacokinetic parameters. |
| popPK | Louizos_2007 | irrelevant | 0 | 0 | The study is a clinical trial assessing hemodynamic effects (blood pressure and heart rate) rather than pharmacokinetic disposition parameters. |
| popPK | Lönn_1994 | irrelevant | 0 | 0 | The study is a hemodynamic/physiological experiment in pigs where esmolol is used as a therapeutic agent, and no pharmacokinetic parameters (CL, V, etc.) are reported. |
| PD | Lönn_1994 | not_relevant | 2 | 0 | The text mentions dose-response curves and interindividual differences but provides no numeric PD parameters, concentration-effect data, or specific hemodynamic values to derive a relationship. |
| popPK | Miller_1991 | irrelevant | 2 | 3 | The study is a clinical trial of esmolol's hemodynamic effects, not a pharmacokinetic study, and the PK parameters mentioned (t1/2, Vd) are cited from other sources rather than derived from this study's data. |
| PGx | PMID38951961_2024 | not_relevant | 0 | 0 | The paper focuses on metoprolol and general beta-blockers, explicitly stating insufficient evidence for other beta-blockers, and does not report specific pharmacogenomic effects for esmolol. |
| popPK | Petersen_2024 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of dolasetron and its metabolite hydrodolasetron, not esmolol. |
| PD | Petersen_2024 | not_relevant | 0 | 0 | The text describes dolasetron mesylate (ANZEMET), not esmolol, and contains no pharmacodynamic or exposure-response data. |
| popPK | Polsky_2020 | irrelevant | 0 | 0 | The study investigates analytical interference with sodium measurements, not the pharmacokinetics of esmolol. |
| PD | Polsky_2020 | not_relevant | 2 | 1 | The paper describes an analytical interference (pseudohypernatremia) rather than a pharmacodynamic effect, and while it mentions a dose-response trend, it does not provide extractable numeric PD parameters like Emax or EC50. |
| popPK | Quintana-Villamandos_2016 | irrelevant | 0 | 0 | The study is a pharmacodynamic/vascular remodeling study in rats that does not report quantitative pharmacokinetic parameters (CL, V, etc.) for esmolol. |
| PD | Quintana-Villamandos_2016 | not_relevant | 2 | 1 | The study reports a single fixed dose of esmolol and qualitative changes in vascular remodeling and 5-HT response curves, but does not provide a concentration-effect or dose-response analysis for esmolol itself with numeric PD parameters. |
| popPK | Quon_1986 | irrelevant | 4 | 2 | Dog PK study but only half-life (~15 min) reported without CL/V or model parameters, and no numeric concentration values in the evidence. |
| popPK | Rose_2004 | irrelevant | 0 | 0 | The paper is a clinical review on blood pressure management in neurological emergencies and does not report any pharmacokinetic parameters for esmolol. |
| PD | Rose_2004 | not_relevant | 1 | 0 | The text is a clinical review discussing blood pressure management guidelines and drug selection criteria, mentioning esmolol only as a suitable agent without providing any specific pharmacodynamic data, dose-response curves, or numeric PD parameters. |
| popPK | Shaffer_1988 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamics and receptor potency of the metabolite ASL-8123, not the population pharmacokinetic parameters (CL, V, etc.) of esmolol. |
| PGx | Shi_2025 | not_relevant | 0 | 0 | The paper discusses shared genetic architecture for stroke and CAD and mentions esmolol only as a drug with a high pathway-pairing score, without reporting any specific pharmacogenomic effect on its PK or PD parameters. |
| popPK | Sidi_2006 | irrelevant | 0 | 0 | Esmolol is used as a beta-blocker to establish a physiological state (baseline heart rate reduction) in a hemodynamic study of milrinone and dobutamine, with no pharmacokinetic parameters reported. |
| PD | Sidi_2006 | not_relevant | 2 | 1 | The study uses esmolol only as a fixed-dose background beta-blockade to establish a physiological state, rather than analyzing its dose-response or concentration-effect relationship; the PD analysis focuses on the inotropic agents milrinone and dobutamine. |
| popPK | Sidi_2008 | irrelevant | 0 | 0 | no_text gate: only 140 chars of text extracted (&lt; 400) |
| PD | Sidi_2008 | not_relevant | 0 | 0 | The paper focuses on milrinone and does not report a pharmacodynamic or exposure-response relationship for esmolol. |
| popPK | Sidorova_2022 | irrelevant | 0 | 0 | The study is an in-vitro investigation of the anticancer activity (cell viability, apoptosis) of beta-blockers, not a pharmacokinetic study reporting disposition parameters for esmolol. |
| popPK | Sintetos_1987_2 | irrelevant | 2 | 0 | The study reports only peak plasma concentrations and pharmacodynamic effects (PR interval) without providing quantitative disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Tanahashi_2009 | irrelevant | 0 | 0 | no_text gate: only 132 chars of text extracted (&lt; 400) |
| PD | Tanahashi_2009 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of beta-blockers on sodium channels in rat neurons and does not report pharmacokinetic or pharmacodynamic exposure-response relationships for esmolol in a clinical or systemic context. |
| popPK | Tednes_2024 | irrelevant | 0 | 0 | The paper is a clinical review of supraventricular tachycardia management and does not report original quantitative pharmacokinetic parameters for esmolol. |
| PD | Tednes_2024 | not_relevant | 1 | 0 | The paper is a narrative review of treatment options for PSVT and does not report original pharmacodynamic data, exposure-response models, or numeric PD parameters for esmolol. |
| popPK | Tobias_1990 | irrelevant | 1 | 0 | The study focuses on pulmonary reactivity and hemodynamic effects (heart rate, blood pressure) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for esmolol. |
| PGx | Ulici_2017 | not_relevant | 0 | 0 | The study compares two adjunct vasodilators (clevidipine vs. sodium nitroprusside) for blood pressure control and does not investigate any gene variants or pharmacogenomic effects on esmolol's PK or PD. |
| popPK | Vogel_2002 | irrelevant | 0 | 0 | The study uses esmolol as a pharmacological tool to modulate contractility in a hemodynamic study, not to characterize esmolol's pharmacokinetics. |
| PD | Vogel_2002 | not_relevant | 2 | 1 | The study uses esmolol only as a qualitative pharmacological challenge to validate an imaging index (IVA) against pressure-volume relations, without reporting plasma concentrations, dose-response curves, or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Vogel_2003 | irrelevant | 0 | 0 | The study uses esmolol as a pharmacological tool to modulate contractility in a hemodynamic study, not to characterize its pharmacokinetic parameters. |
| PD | Vogel_2003 | not_relevant | 2 | 1 | The study uses esmolol only as a qualitative agent to modulate contractility for validation purposes and does not report plasma concentrations, dose-response curves, or numeric PD parameters (e.g., EC50, Emax) for esmolol. |
| popPK | Volz-Zang_1994_2 | irrelevant | 2 | 0 | The study reports pharmacodynamic parameters (EC50, receptor occupancy) and qualitative PK observations (half-life description, metabolite concentration) but lacks quantitative disposition parameters (CL, V, ka) for esmolol. |
| popPK | Wang_1999 | irrelevant | 1 | 0 | This is a clinical efficacy/dose-response study of bolus esmolol with only hemodynamic outcomes; no PK parameters (CL, V, half-life) are reported. |
| popPK | Wang_2014 | irrelevant | 1 | 0 | This is a PK study of landiolol, not esmolol; esmolol is only mentioned as a comparator and no esmolol parameter values are present. |
| popPK | Wiest_2012_2 | irrelevant | 2 | 1 | The paper is a review article that summarizes findings from other studies rather than reporting original quantitative population pharmacokinetic parameters or compartmental models for esmolol. |
| PD | Wiest_2012_2 | not_relevant | 2 | 1 | The text is a narrative review summarizing clinical efficacy and general PK properties (half-life, clearance) but does not report specific numeric PD parameters (e.g., EC50, Emax) or an extractable concentration-effect curve. |
| popPK | Wong_2016 | irrelevant | 0 | 0 | This is a systematic review of blood pressure efficacy for beta-blockers, not a pharmacokinetic study, and it does not report any PK parameters for esmolol. |
| PD | Wong_2016 | not_relevant | 2 | 1 | The paper is a systematic review and meta-analysis that reports average treatment effects (mean differences) rather than a pharmacodynamic model or individual-level concentration/dose-response curve with specific PD parameters (e.g., Emax, EC50) for esmolol. |
| popPK | Yamakage_2009 | irrelevant | 0 | 0 | This is a pharmacodynamic safety/efficacy study of esmolol on airway hyperreactivity with no PK parameters or numeric disposition values reported. |
| popPK | Zhou_2013 | irrelevant | 0 | 0 | The study uses esmolol as a pharmacological agent to induce hemodynamic changes in pigs to validate echocardiographic measures of ventricular function, rather than measuring esmolol's pharmacokinetic parameters. |
| PD | Zhou_2013 | not_relevant | 2 | 1 | The study uses esmolol only to induce a low-inotropy state for comparison with dobutamine and ischemia; it reports correlations between rotational mechanics and hemodynamic indices (e.g., Emax) but does not provide a concentration-effect or dose-response model with numeric PD parameters for esmolol. |
| popPK | Zhu_2017_2 | irrelevant | 0 | 0 | The paper is a systematic review of analgesic efficacy that explicitly states no studies were found for esmolol, and it contains no pharmacokinetic parameters. |
| PD | Zhu_2017_2 | not_relevant | 0 | 0 | The paper is a systematic review that explicitly states no studies were found for esmolol in pediatric surgical patients, and it does not report any pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
