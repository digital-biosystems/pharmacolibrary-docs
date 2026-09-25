<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03B&quot;,&quot;href&quot;:&quot;atc/A03B.md&quot;},{&quot;label&quot;:&quot;methylatropine&quot;}]"></div>

# methylatropine

- **generic name:** methylatropine
- **ATC codes:** `A03BB02`
- **DrugBank:** [DB13833](https://go.drugbank.com/drugs/DB13833)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 11:26 | 6:33 | 0/0/0 | 1/0/0 | 0/0/0 | 127,094/5,816 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.115). The first reading is what the record holds.">cross-check: disputed</span> | [Julien_2017](drugs/drug_methylatropine/pd_Julien_2017_mean_arterial_pressure.md) | Julien C et al., Renal sympathetic nerve activity and va…, Physiological reports (2017) | [10.14814/phy2.13139](https://doi.org/10.14814/phy2.13139) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 68 matched, 47 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alberts_1995.pdf` | Alberts P, Classification of the presynaptic musca…, The Journal of pharmacology… (1995) | pd | 4 | not captured | [7616431](https://www.ncbi.nlm.nih.gov/pubmed/7616431) | metadata signals extractable PD data (EC50) |
| `Black_1985.pdf` | Black JW et al., The isolated stomach preparation of the…, British journal of pharmaco… (1985) | pd | 4 | [10.1111/j.1476-5381.1985.tb08933.x](https://doi.org/10.1111/j.1476-5381.1985.tb08933.x) | [2415196](https://www.ncbi.nlm.nih.gov/pubmed/2415196) | metadata signals extractable PD data (concentration-effect) |
| `Durant_1991.pdf` | Durant PA et al., Pharmacological analysis of agonist-ant…, British journal of pharmaco… (1991) | pd | 4 | [10.1111/j.1476-5381.1991.tb12399.x](https://doi.org/10.1111/j.1476-5381.1991.tb12399.x) | [1786508](https://www.ncbi.nlm.nih.gov/pubmed/1786508) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-09-18T11:24:45.886629+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahrén_1981 | not_relevant | 0 | 0 | The paper studies the effects of cholecystokinin variants on insulin secretion and uses methylatropine only as a pharmacological blocker to demonstrate receptor dependence, not as the subject of a pharmacogenomic study. |
| popPK | Alberts_1995 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| popPK | Aquilonius_1975 | irrelevant | 2 | 0 | The study investigates the elimination mechanisms of methylatropine from the spinal subarachnoid space in rabbits but does not report standard systemic pharmacokinetic parameters (CL, V, t1/2) or population-PK model values. |
| popPK | Baratti_1984 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice where methylatropine is used only as a comparator agent to distinguish muscarinic receptor subtypes, with no pharmacokinetic parameters reported. |
| PD | Baratti_1984 | not_relevant | 0 | 0 | The paper reports behavioral dose-response data for naloxone, atropine, and oxotremorine, but methylatropine is only used as a negative control (0.5 mg/kg) to rule out muscarinic involvement; no concentration-effect or dose-response curve or numeric PD parameters are reported for methylatropine. |
| popPK | Black_1985 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Black_1985 | not_relevant | 0 | 0 | The paper describes a physiological preparation for pharmacological analysis but does not report specific PD or exposure-response data for methylatropine. |
| popPK | Brezenoff_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of soman and the protective effects of atropine/methylatropine, reporting no pharmacokinetic parameters for methylatropine. |
| PD | Brezenoff_1984 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for soman, but explicitly states that methylatropine did not prevent the pressor response, providing no PD parameters or exposure-response data for methylatropine. |
| popPK | Dawe_2006 | irrelevant | 0 | 0 | The study is a neurophysiological investigation of atropine and methylatropine effects on hippocampal activity, reporting no pharmacokinetic parameters. |
| popPK | Durant_1991 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| PD | Durant_1991 | not_relevant | 0 | 0 | The paper focuses on agonist-antagonist interactions at muscarinic receptors in a bladder assay and does not report pharmacokinetic or pharmacodynamic exposure-response data for methylatropine. |
| popPK | Faiman_1991 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study where methylatropine is used only as a control agent to rule out muscarinic involvement, and no pharmacokinetic parameters are reported. |
| PD | Faiman_1991 | not_relevant | 0 | 0 | Methylatropine is used only as a negative control to rule out muscarinic involvement; no dose-response or concentration-effect data for methylatropine is reported. |
| popPK | Gomez_2025 | irrelevant | 0 | 0 | The paper is a study on cocaine chemogenetics and does not involve methylatropine or report any pharmacokinetic parameters for it. |
| PD | Gomez_2025 | not_relevant | 0 | 0 | The paper focuses on cocaine chemogenetics and does not report a pharmacodynamic or exposure-response relationship for methylatropine, which is only mentioned as a control compound in a binding assay. |
| popPK | Gothóni_1981 | irrelevant | 0 | 0 | The study focuses on tremor quantification in rats using physostigmine, with methylatropine serving only as a pharmacological antagonist/probe without any pharmacokinetic parameter reporting. |
| PD | Gothóni_1981 | not_relevant | 1 | 0 | The paper describes a device for measuring tremor and reports a dose-response for physostigmine, but only provides a qualitative observation that methylatropine tended to potentiate the effect, without reporting numeric PD parameters or a quantitative concentration-effect relationship for methylatropine. |
| popPK | Gower_1987 | irrelevant | 0 | 0 | The study is a pharmacological investigation of yawning and analgesia in rats, not a pharmacokinetic study, and methylatropine is used only as a comparator antagonist without any PK parameters reported. |
| PD | Gower_1987 | not_relevant | 3 | 2 | The paper reports qualitative dose-response observations and antagonist inhibition for methylatropine but does not provide numeric PD parameters (e.g., ED50, Ki, or concentration-effect curve data) for methylatropine itself. |
| popPK | Haigh_1980 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study using methylatropine as a competitive antagonist, not a pharmacokinetic study reporting disposition parameters. |
| PD | Haigh_1980 | not_relevant | 3 | 2 | The paper describes a qualitative shift in the methylatropinium inhibition curve in the presence of chlorpromazine but does not provide numeric PD parameters (e.g., Ki, IC50) or a full concentration-effect dataset for methylatropine itself. |
| popPK | Hedner_1983 | irrelevant | 0 | 0 | The study investigates the respiratory effects of TRH in rats, using methylatropine only as a pretreatment agent, and reports no pharmacokinetic parameters for methylatropine. |
| PD | Hedner_1983 | not_relevant | 0 | 0 | The paper studies the respiratory effects of TRH and its analogues; methylatropine is only mentioned as a pretreatment agent to potentiate TRH effects, with no dose-response or concentration-effect analysis or numeric PD parameters reported for methylatropine. |
| popPK | Huangfu_1997 | irrelevant | 0 | 0 | The study is a neurophysiological investigation of cholinergic receptors in rats where methylatropine is used as a pharmacological antagonist, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Julien_2017 | irrelevant | 0 | 0 | Methylatropine is used only as a cardiac autonomic blocker (co-administered with atenolol) to isolate vascular responses, and the study reports no pharmacokinetic parameters for it. |
| popPK | Kopf_1995 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice where methylatropine is used as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Kopf_1995 | not_relevant | 0 | 0 | The paper reports a qualitative lack of effect for methylatropine in a behavioral interaction study and does not provide any concentration-effect data, dose-response curve, or numeric PD parameters for methylatropine. |
| popPK | Kopf_1999 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice where methylatropine is used only as a peripheral control agent, with no pharmacokinetic parameters reported. |
| PD | Kopf_1999 | not_relevant | 0 | 0 | The paper reports a dose-response relationship for insulin, not methylatropine; methylatropine is only used as a negative control to demonstrate lack of peripheral interaction, with no PD parameters or concentration-effect analysis provided for it. |
| popPK | Lahlou_2005 | irrelevant | 0 | 0 | Methylatropine is used only as a pharmacological pretreatment agent to block muscarinic receptors, and no pharmacokinetic parameters for methylatropine are reported. |
| PD | Lahlou_2005 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of Aniba canelilla essential oil (EOAC), not methylatropine; methylatropine is used only as a pretreatment agent to characterize the mechanism of EOAC. |
| popPK | Lahlou_2007 | irrelevant | 0 | 0 | Methylatropine is used only as a pharmacological blocker to investigate the cardiovascular effects of a different compound (Labd-8), and no pharmacokinetic parameters are reported. |
| PD | Lahlou_2007 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of Labd-8, not methylatropine; methylatropine is used only as a qualitative pharmacological tool to block vagal effects. |
| popPK | Lehmann_1985 | irrelevant | 0 | 0 | Methylatropine is used only as a tool for vagal blockade in a pharmacodynamic study of gallopamil and propranolol, with no PK parameters reported. |
| PD | Lehmann_1985 | not_relevant | 1 | 0 | The paper focuses on the interaction between gallopamil and propranolol, mentioning methylatropine only as a condition for vagal blockade without providing specific numeric PD parameters or concentration-effect curves for methylatropine itself. |
| popPK | Lönnerholm_1975 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of heart rate and salivary secretion, reporting no pharmacokinetic parameters such as clearance, volume, or half-life for methylatropine. |
| popPK | Malarkey_1989 | irrelevant | 0 | 0 | The study is a toxicology experiment examining the protective effects of methylatropine on anguidine lethality in rats, not a pharmacokinetic study reporting disposition parameters. |
| PD | Malarkey_1989 | not_relevant | 2 | 1 | The paper reports a qualitative observation of protection over a dose range (2.5-20 mg/kg) but explicitly states there was "no clear dose response" and provides no numeric PD parameters or concentration-effect data. |
| popPK | Martin_1992 | irrelevant | 0 | 0 | The study is a neuropharmacological investigation of receptor subtypes using methylatropine as a tool compound, and it does not report any pharmacokinetic parameters. |
| popPK | Patil_2004 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological analysis of drug antagonism (IC50/KB ratios) on intraocular muscles, not a pharmacokinetic study reporting disposition parameters like clearance or volume for methylatropine. |
| popPK | Quock_1986 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of microwave effects on drug distribution across the blood-brain barrier, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Quock_1986 | not_relevant | 3 | 1 | The paper describes a qualitative shift in dose-response curves due to microwave irradiation but does not provide numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect data for methylatropine itself. |
| popPK | Ringdahl_1984 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology paper on muscarinic receptor alkylation where methylatropine is used only as a protective antagonist, with no pharmacokinetic parameters reported. |
| PD | Ringdahl_1984 | not_relevant | 1 | 0 | The paper focuses on the irreversible alkylation of receptors by BM 123 and BM 130; methylatropine is only mentioned qualitatively as a protective antagonist (20 nM) without providing a dose-response curve or numeric PD parameters for methylatropine itself. |
| popPK | Schmeller_1995 | irrelevant | 0 | 0 | The paper reports in-vitro receptor binding affinities (IC50) rather than pharmacokinetic disposition parameters for methylatropine. |
| popPK | Vickroy_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of muscarinic receptors in rat hippocampus, not a pharmacokinetic study, and methylatropine is used only as a pharmacological antagonist. |
| popPK | Wahlström_1976 | irrelevant | 0 | 0 | Methylatropine is used only as a peripheral blocker/comparator in a pharmacodynamic study of pilocarpine and hexobarbital, with no PK parameters reported. |
| PD | Wahlström_1976 | not_relevant | 2 | 1 | The paper describes a qualitative dose-response interaction between pilocarpine and hexobarbital thresholds, but methylatropine is used only as a fixed-dose control (2 mg/kg) to block peripheral effects, and no numeric PD parameters or concentration-effect curves for methylatropine are reported. |
| popPK | Wess_1984 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of antimuscarinic potency (receptor binding/antagonism) and does not report pharmacokinetic disposition parameters for methylatropine. |
| popPK | de_1981 | irrelevant | 0 | 0 | The study investigates the cardiovascular effects of physostigmine in cats, using N-methylatropine only as a pharmacological antagonist to block muscarinic effects, with no pharmacokinetic parameters reported for methylatropine. |
| PD | de_1981 | not_relevant | 2 | 1 | The paper focuses on the dose-response of physostigmine; N-methylatropine is used only as a qualitative antagonist to test mechanisms, with no numeric PD parameters or concentration-effect curve reported for it. |
| popPK | de_2013 | irrelevant | 0 | 0 | Methylatropine is used only as a pharmacological tool to block vagal effects, and no pharmacokinetic parameters for methylatropine are reported. |
| PD | de_2013 | not_relevant | 0 | 0 | The paper reports dose-response data for the essential oil of Croton zehntneri (EOCZ), not for methylatropine; methylatropine is used only as a pharmacological tool to block vagal effects. |
| popPK | de_2015 | irrelevant | 0 | 0 | The study investigates the cardiovascular effects of a diterpene, using methylatropine only as a pharmacological probe to block muscarinic receptors, and does not report any pharmacokinetic parameters for methylatropine. |
| PD | de_2015 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of labd-8, not methylatropine; methylatropine is used only as a qualitative pharmacological tool to block tachycardia, with no exposure-response or dose-response analysis performed for it. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
