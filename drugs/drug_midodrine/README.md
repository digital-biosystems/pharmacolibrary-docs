<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;midodrine&quot;}]"></div>

# midodrine

- **generic name:** midodrine
- **ATC codes:** `C01CA17`
- **DrugBank:** [DB00211](https://go.drugbank.com/drugs/DB00211) · **PubChem:** [CID 4195](https://pubchem.ncbi.nlm.nih.gov/compound/4195)
- **molar mass:** 254.2823 g/mol (C12H18N2O4) — DrugBank
- **groups:** approved, investigational

## About

Midodrine is a peripheral alpha-1 agonist used to treat orthostatic hypotension and dysautonomia, and has also been used for urinary incontinence. It is an approved medicine, though not authorised in the European Union, and is used fairly narrowly for low blood pressure on standing.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415051](https://www.wikidata.org/wiki/Q415051) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 08:37 | 2:35 | 0/0/0 | 0/0/0 | 0/0/0 | 83,672/2,841 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 3/8 | 9/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=midodrine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 46 matched, 55 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ali_2016.pdf` | Ali A et al., Comparative Clinical Pharmacokinetics o…, Clinical drug investigation (2016) | popPK | 10 | [10.1007/s40261-015-0359-6](https://doi.org/10.1007/s40261-015-0359-6) | [26597181](https://pubmed.ncbi.nlm.nih.gov/26597181) | The study reports quantitative pharmacokinetic parameters for midodrine, but the specific numeric values are not present in the provided evidence text. |
| `Zachariah_1986.pdf` | Zachariah PK et al., Pharmacodynamics of midodrine, an antih…, Clinical pharmacology and t… (1986) | popPK | 10 | [10.1038/clpt.1986.101](https://doi.org/10.1038/clpt.1986.101) | [2421958](https://pubmed.ncbi.nlm.nih.gov/2421958) | The abstract explicitly reports quantitative pharmacokinetic parameters (distribution volume, plasma clearance, and half-life) for the active metabolite of midodrine in human patients. |
| `Blowey_1996.pdf` | Blowey DL et al., Midodrine efficacy and pharmacokinetics…, American journal of kidney… (1996) | popPK | 8 | [10.1016/s0272-6386(96)90142-0](https://doi.org/10.1016/s0272-6386(96)90142-0) | [8712208](https://pubmed.ncbi.nlm.nih.gov/8712208) | The paper reports pharmacokinetic characteristics for midodrine and its metabolite in a human patient, but the specific numeric values are not present in the provided evidence text. |
| `Wright_1998.pdf` | Wright RA et al., A double-blind, dose-response study of…, Neurology (1998) | popPK | 8 | [10.1212/wnl.51.1.120](https://doi.org/10.1212/wnl.51.1.120) | [9674789](https://pubmed.ncbi.nlm.nih.gov/9674789) | The study reports the half-life of the active metabolite desglymidodrine (approx 4 hours) but lacks other quantitative PK parameters like clearance or volume of distribution in the provided text. |
| `Demir_2019.pdf` | Demir Y, The behaviour of some antihypertension…, The Journal of pharmacy and… (2019) | pd | 4 | [10.1111/jphp.13144](https://doi.org/10.1111/jphp.13144) | [31347707](https://www.ncbi.nlm.nih.gov/pubmed/31347707) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T08:37:34.771209+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akimoto_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP450 isoforms involved in the metabolism of midodrine's metabolite, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, t1/2) for midodrine. |
| PGx | Akimoto_2004 | not_relevant | 2 | 0 | The paper describes in vitro CYP enzyme activities for midodrine's metabolite but does not report in vivo pharmacokinetic or pharmacodynamic parameters linked to specific genotypes. |
| PD | Al-Shaer_2010 | not_relevant | 0 | 0 | The paper reports an in vitro IC50 value for midodrine as part of a QSAR study, but does not report a pharmacodynamic (exposure-response) relationship, dose-response curve, or PK/PD model. |
| popPK | Alessandria_2009 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of midodrine in preventing hepatorenal syndrome recurrence and does not report any pharmacokinetic parameters. |
| popPK | Ali_2014 | irrelevant | 0 | 0 | The study is a clinical trial assessing therapeutic efficacy (body weight, abdominal girth) and does not report pharmacokinetic parameters. |
| popPK | Ali_2016 | relevant | 10 | 0 | The study reports quantitative pharmacokinetic parameters for midodrine, but the specific numeric values are not present in the provided evidence text. |
| popPK | Altenbach_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and receptor binding of a novel compound (ABT-866), using midodrine only as a comparator agent without reporting its pharmacokinetic parameters. |
| PD | Altenbach_2002 | not_relevant | 3 | 2 | The paper reports in vitro pharmacological parameters (EC50, pA2) for a novel compound (ABT-866) and compares its in vivo selectivity to midodrine, but it does not report a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response relationship for midodrine itself. |
| popPK | Benge_2020 | irrelevant | 0 | 0 | The paper is a clinical case report regarding licorice-induced hypokalemia where midodrine is only mentioned as a prescribed medication, with no pharmacokinetic data provided. |
| popPK | Biaggioni_2014 | irrelevant | 0 | 0 | The paper is a clinical review of orthostatic hypotension management and does not report quantitative pharmacokinetic parameters for midodrine. |
| popPK | Blowey_1996 | relevant | 8 | 2 | The paper reports pharmacokinetic characteristics for midodrine and its metabolite in a human patient, but the specific numeric values are not present in the provided evidence text. |
| popPK | Brändle_1977 | irrelevant | 0 | 0 | The study investigates the metabolic effects of midodrine (glucose, lipids) rather than its pharmacokinetic disposition parameters. |
| PGx | Cheshire_2019 | not_relevant | 0 | 0 | The paper is a general review of pharmacotherapy for orthostatic hypotension and does not report specific pharmacogenomic effects on midodrine PK/PD parameters. |
| popPK | Cruz_2000 | irrelevant | 2 | 0 | The paper is a review of clinical use and mechanism, lacking original quantitative pharmacokinetic parameter values (CL, V, etc.) for midodrine. |
| popPK | Davoudi-Monfared_2021 | irrelevant | 0 | 0 | The study assesses the clinical effect of midodrine on lactate clearance in septic shock patients and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for midodrine. |
| PD | Demir_2019 | not_relevant | 0 | 0 | The paper focuses on the effect of antihypertensive drugs on paraoxonase-1 activity and does not report any pharmacodynamic or exposure-response analysis for midodrine. |
| popPK | Doole_2026 | irrelevant | 0 | 0 | The study is an in-vitro investigation of tablet disintegration and dissolution, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Emms_2018 | irrelevant | 0 | 0 | The paper describes analytical interference of midodrine's metabolite with metanephrine assays, not the pharmacokinetic disposition parameters of midodrine. |
| popPK | Gutman_2017 | irrelevant | 0 | 0 | The paper is a clinical review discussing the therapeutic use of midodrine for hypotension and does not report any quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Hanafy_2016 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of midodrine in refractory ascites and does not report any pharmacokinetic parameters. |
| popPK | Harada_1998 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects (vasoconstriction) of amezinium and midodrine, not their pharmacokinetic parameters. |
| PD | Harada_1998 | not_relevant | 0 | 0 | The paper studies the effect of Amezinium Metilsulfate on noradrenaline-induced vasoconstriction, not the pharmacodynamics of midodrine. |
| PD | Karwa_2009 | not_relevant | 1 | 0 | The paper is a narrative review that explicitly excludes pharmacokinetic/pharmacodynamic studies and does not report any numeric PD parameters or concentration-effect relationships. |
| PD | Kulkarni_2023 | not_relevant | 0 | 0 | The paper is a review of terlipressin in HRS-AKI and does not report any pharmacodynamic or exposure-response data for midodrine. |
| popPK | Lamarre-Cliche_2008 | irrelevant | 2 | 0 | The study measures plasma concentrations of the metabolite desglymidodrine (DGM) but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) or a compartmental model in the provided text. |
| popPK | Leduc_2015 | irrelevant | 1 | 1 | The study is a clinical efficacy trial for anejaculation that reports only a single plasma concentration of the metabolite desglymidodrine, without deriving any pharmacokinetic parameters (CL, V, ka, t1/2) or compartmental models. |
| popPK | Lee_2020 | irrelevant | 0 | 0 | The study investigates the metabolic and functional effects of midodrine as an alpha-1 adrenergic agonist in cells and rats, but does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Lee_2022 | irrelevant | 0 | 0 | The study investigates the therapeutic mechanism of midodrine on cataracts in rats (pharmacodynamics) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper is a metabolomic study in rats where midodrine is identified as a differentially abundant metabolite (likely a false positive or environmental contaminant) rather than being dosed for pharmacokinetic analysis. |
| popPK | Malmborg_2013 | irrelevant | 2 | 0 | The paper is a methodological study on PBPK modeling for prodrugs where midodrine is used as a validation case, but no specific quantitative PK parameter values (CL, V, etc.) for midodrine are provided in the text. |
| popPK | McClellan_1998 | irrelevant | 0 | 0 | The paper is a therapeutic review of midodrine's clinical efficacy and safety, containing no quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Mukhtar_2015 | not_relevant | 1 | 0 | The text is a qualitative review advocating for midodrine use in older adults and does not report any numeric pharmacodynamic parameters, exposure-response data, or dose-effect curves. |
| popPK | Nagi_2023 | irrelevant | 0 | 0 | The study reports chemical degradation kinetics (stability) of midodrine, not pharmacokinetic disposition parameters (CL, V, ka) in a biological system. |
| popPK | Pack_2026 | irrelevant | 0 | 0 | The paper is a case report on octreotide for intradialytic hypotension where midodrine is only a co-administered comparator, and the PK parameters provided (half-life, clearance) are for octreotide, not midodrine. |
| popPK | Patel_2017 | irrelevant | 0 | 0 | The study evaluates the therapeutic efficacy of midodrine on serum sodium and electrolyte-free water clearance in cirrhosis, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Perazella_2003 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety review of midodrine for dialysis hypotension and does not report quantitative pharmacokinetic parameters. |
| PD | Pittner_1976 | not_relevant | 2 | 1 | The paper describes qualitative pharmacodynamic actions and receptor mechanisms but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters like Emax or EC50. |
| popPK | Ruiz_2022 | irrelevant | 0 | 0 | The paper is a clinical case report regarding a complication of enteral nutrition where midodrine is only mentioned as a co-administered vasopressor, with no pharmacokinetic data provided. |
| popPK | Salerno_2015 | irrelevant | 0 | 0 | The paper is a meta-analysis of albumin dosing in hepatorenal syndrome where midodrine is only a comparator vasoconstrictor, with no PK parameters reported. |
| PD | Salerno_2015 | not_relevant | 0 | 0 | The paper analyzes the dose-response relationship for albumin, not midodrine, and reports no PD parameters for midodrine. |
| popPK | Tsuda_2006 | irrelevant | 2 | 0 | The study focuses on the transport mechanism (PEPT1) and in-vitro/in-intestine absorption characteristics rather than reporting quantitative systemic pharmacokinetic parameters (CL, V, t1/2) for midodrine. |
| popPK | Vaidyanathan_2007 | irrelevant | 0 | 0 | The paper is a case report on urologic adverse effects of midodrine and contains no pharmacokinetic parameters or quantitative disposition data. |
| popPK | Wecht_2010 | irrelevant | 0 | 0 | The study reports hemodynamic outcomes (MAP, MFV) rather than pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Wong_2017 | irrelevant | 2 | 2 | This is a clinical case report describing toxicity and providing only single-point concentrations and a qualitative half-life estimate, rather than a quantitative population pharmacokinetic model with parameters like CL or V. |
| popPK | Wright_1998 | relevant | 8 | 2 | The study reports the half-life of the active metabolite desglymidodrine (approx 4 hours) but lacks other quantitative PK parameters like clearance or volume of distribution in the provided text. |
| PD | Zachariah_1986 | not_relevant | 2 | 1 | The text reports qualitative observations (statistically significant heart rate increase, non-significant BP change) and PK parameters, but provides no numeric PD parameters (Emax, EC50) or quantitative concentration-effect relationship. |
| popPK | Zhao_2026 | irrelevant | 0 | 0 | The paper is a review of nitric oxide mechanisms in liver disease where midodrine is mentioned only as a therapeutic agent affecting NO levels, with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
