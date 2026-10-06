<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;xamoterol&quot;}]"></div>

# xamoterol

- **generic name:** xamoterol
- **ATC codes:** `C01CX07`
- **DrugBank:** [DB13781](https://go.drugbank.com/drugs/DB13781) · **PubChem:** [CID 155774](https://pubchem.ncbi.nlm.nih.gov/compound/155774)
- **molar mass:** 339.392 g/mol (C16H25N3O5) — DrugBank
- **groups:** approved

## About

Xamoterol is a beta-1 adrenergic receptor agonist used as a cardiac stimulant in heart conditions. It has been approved as a medicine, though it is not widely used today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4021708](https://www.wikidata.org/wiki/Q4021708) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:18 | 2:13 | 0/0/0 | 0/0/0 | 0/0/0 | 54,593/2,341 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=xamoterol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ADRB1 (partial agonist), ADRB3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 71 matched, 75 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bastain_1988.pdf` | Bastain W et al., Pharmacokinetics of xamoterol after int…, European journal of clinica… (1988) | popPK | 10 | [10.1007/BF01046704](https://doi.org/10.1007/BF01046704) | [2904884](https://pubmed.ncbi.nlm.nih.gov/2904884) | The abstract explicitly reports quantitative PK parameters (CL, Vss, t1/2) for xamoterol in humans. |
| `Scott_1988.pdf` | Scott AK et al., The effect of age and cardiac failure o…, British journal of clinical… (1988) | popPK | 10 | [10.1111/j.1365-2125.1988.tb03287.x](https://doi.org/10.1111/j.1365-2125.1988.tb03287.x) | [2896012](https://pubmed.ncbi.nlm.nih.gov/2896012) | The abstract provides specific quantitative pharmacokinetic parameters including elimination half-life and renal clearance for xamoterol in human subjects. |
| `Sorensen_1988.pdf` | Sorensen EV et al., Pharmacokinetics of xamoterol after int…, European journal of clinica… (1988) | popPK | 10 | [10.1007/BF00609250](https://doi.org/10.1007/BF00609250) | [2903827](https://pubmed.ncbi.nlm.nih.gov/2903827) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for xamoterol in humans with specific numeric values provided in the text. |
| `Nicholls_1989.pdf` | Nicholls DP et al., The pharmacokinetics of xamoterol in li…, British journal of clinical… (1989) | popPK | 9 | [10.1111/j.1365-2125.1989.tb03566.x](https://doi.org/10.1111/j.1365-2125.1989.tb03566.x) | [2532923](https://pubmed.ncbi.nlm.nih.gov/2532923) | The study reports quantitative PK parameters for xamoterol in humans, including bioavailability, half-life, and renal clearance percentages, with specific numeric values provided in the abstract. |
| `Bellantuono_2008.pdf` | Bellantuono V et al., The adrenergic receptor subtypes presen…, Comparative biochemistry an… (2008) | pd | 5 | [10.1016/j.cbpc.2008.05.001](https://doi.org/10.1016/j.cbpc.2008.05.001) | [18544474](https://www.ncbi.nlm.nih.gov/pubmed/18544474) | metadata signals extractable PD data (EC50) |
| `Molajo_1987.pdf` | Molajo AO et al., The effects and dose-response relations…, British journal of clinical… (1987) | pd | 5 | [10.1111/j.1365-2125.1987.tb03183.x](https://doi.org/10.1111/j.1365-2125.1987.tb03183.x) | [2889460](https://www.ncbi.nlm.nih.gov/pubmed/2889460) | metadata signals extractable PD data (EC50) |
| `Abrahamsson_1989.pdf` | Abrahamsson T, Characterization of the beta 1-adrenoce…, European journal of pharmac… (1989) | pd | 4 | [10.1016/0014-2999(89)90238-0](https://doi.org/10.1016/0014-2999(89)90238-0) | [2568935](https://www.ncbi.nlm.nih.gov/pubmed/2568935) | metadata signals extractable PD data (EC50) |
| `Deighton_1992.pdf` | Deighton NM et al., Characterization of the beta adrenocept…, The Journal of pharmacology… (1992) | pd | 4 | not captured | [1354251](https://www.ncbi.nlm.nih.gov/pubmed/1354251) | metadata signals extractable PD data (Emax) |
| `Skeberdis_1997.pdf` | Skeberdis VA et al., Pharmacological characterization of the…, British journal of pharmaco… (1997) | pd | 4 | [10.1038/sj.bjp.0701268](https://doi.org/10.1038/sj.bjp.0701268) | [9257904](https://www.ncbi.nlm.nih.gov/pubmed/9257904) | metadata signals extractable PD data (EC50) |
| `Vigholt-Sørensen_1991.pdf` | Vigholt-Sørensen E et al., Comparative effects of beta-adrenocepto…, Pharmacology & toxicology (1991) | pd | 4 | [10.1111/j.1600-0773.1991.tb01309.x](https://doi.org/10.1111/j.1600-0773.1991.tb01309.x) | [1687080](https://www.ncbi.nlm.nih.gov/pubmed/1687080) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T10:17:52.350503+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abrahamsson_1989 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| popPK | Baker_2011 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of cardiovascular effects (heart rate and vascular conductance) in rats, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Bellantuono_2008 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| PD | Bellantuono_2008 | not_relevant | 0 | 0 | The paper focuses on the identification of adrenergic receptor subtypes in frog skin and does not report any pharmacodynamic or exposure-response data for xamoterol. |
| popPK | Bøtker_1993 | irrelevant | 0 | 0 | The study focuses on renal physiology (sodium excretion, GFR) rather than pharmacokinetic disposition parameters (CL, V, t1/2) of xamoterol. |
| popPK | Deighton_1992 | irrelevant | 0 | 0 | no_text gate: only 183 chars of text extracted (&lt; 400) |
| popPK | Fischer_1990 | irrelevant | 0 | 0 | The study reports haemodynamic and metabolic effects (cardiac output, blood glucose) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| PD | Furlong_1988 | not_relevant | 2 | 0 | The text is a qualitative review summarizing general pharmacodynamic properties and clinical outcomes without providing specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling data. |
| popPK | Hashimoto_1986 | irrelevant | 2 | 0 | The study reports cardiovascular effects and AUC but does not provide specific quantitative disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Hashimoto_1988 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding xamoterol pharmacokinetics. |
| popPK | Hicks_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of beta-adrenoceptor potency and selectivity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | James_1990 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects (systolic time intervals) and only mentions qualitative plasma concentration trends (peak time, linearity) without reporting quantitative PK parameters like clearance or volume. |
| popPK | Kullmer_1988 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (physical performance, cardiocirculatory, metabolic) and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Marlow_1990 | irrelevant | 2 | 0 | The study reports pharmacodynamic (inotropic) responses and plasma concentrations, but does not provide quantitative pharmacokinetic disposition parameters such as clearance, volume of distribution, or half-life. |
| popPK | Marten_1984 | irrelevant | 2 | 0 | The study reports qualitative metabolic pathways and absorption percentages but lacks quantitative compartmental PK parameters (CL, V, ka) for xamoterol. |
| popPK | McCormick_1988 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of metabolism using isolated rat hepatocytes and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for xamoterol. |
| PD | McMurray_1990 | not_relevant | 1 | 0 | The text is a general review of heart failure treatment in the elderly that mentions xamoterol as a therapeutic option but provides no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Molajo_1987 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Mulder_1987 | irrelevant | 2 | 0 | The study focuses on metabolic pathways (glucuronidation) and reports qualitative findings and an extraction ratio, but lacks quantitative disposition parameters like clearance, volume, or half-life values for xamoterol. |
| PD | Ng_1994 | not_relevant | 2 | 1 | The study reports qualitative changes in hemodynamic variables (HR, CO, MBP) for fixed doses but does not provide plasma concentration data or fit a concentration-effect model, making numeric PD parameters like Emax or EC50 unextractable. |
| popPK | Okabayashi_2021 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of sIgA secretion where xamoterol is used only as a beta-1 agonist comparator, with no pharmacokinetic parameters reported. |
| popPK | Persson_2002 | irrelevant | 0 | 0 | The study measures neurohormonal markers (e.g., N-ANF, NPY) in heart failure patients and does not report pharmacokinetic parameters for xamoterol. |
| popPK | Pouleur_1987 | irrelevant | 0 | 0 | The study assesses hemodynamic dose-response (inotropic effects) of xamoterol, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Pouleur_1990 | irrelevant | 0 | 0 | The study evaluates hemodynamic effects (left ventricular function) rather than pharmacokinetic disposition parameters. |
| popPK | Rousseau_1984 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting hemodynamic and functional improvements, with no pharmacokinetic parameters (CL, V, t1/2) reported. |
| popPK | Rousseau_1985 | irrelevant | 0 | 0 | The study reports hemodynamic and functional outcomes (LV pressure, volume, inotropy) rather than pharmacokinetic parameters (CL, V, t1/2). |
| PD | Rousseau_1985 | not_relevant | 2 | 1 | The paper reports clinical efficacy (changes in LV function) at a fixed dose but does not provide plasma concentration data or a concentration-effect relationship, making it impossible to derive PD parameters like Emax or EC50. |
| popPK | Shaffer_1993 | irrelevant | 0 | 0 | The study is a hemodynamic/pharmacodynamic investigation in dogs where xamoterol is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Shaffer_1993 | not_relevant | 3 | 1 | The paper describes qualitative dose-dependent effects and a dextral shift for xamoterol but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve in the provided text. |
| popPK | Simonsen_1990 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| popPK | Skeberdis_1997 | irrelevant | 0 | 0 | no_text gate: only 160 chars of text extracted (&lt; 400) |
| PD | Skeberdis_1997 | not_relevant | 0 | 0 | The paper focuses on the pharmacological characterization of beta-adrenoceptors in frog ventricular myocytes and does not mention xamoterol or report any exposure-response or dose-response data for it. |
| popPK | Stark_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenylyl cyclase VI in rat myocytes using xamoterol as a pharmacological probe, not a pharmacokinetic study. |
| PD | Sørensen_1990 | not_relevant | 3 | 1 | The paper investigates dose-activity relationships in isolated atria but only provides qualitative comparisons of maximal responses and time-to-effect; it does not report specific numeric PD parameters (e.g., EC50, Emax values) or extractable concentration-effect curves for xamoterol. |
| popPK | Takashio_1990 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of pulmonary vascular resistance and pressor responses in an isolated dog lung model, reporting no pharmacokinetic parameters for xamoterol. |
| popPK | Takeda_2002 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of beta-adrenoceptor subtypes in monkey bladder smooth muscle, not a pharmacokinetic study of xamoterol. |
| popPK | Tangø_1985 | irrelevant | 0 | 0 | The study reports hemodynamic effects (heart rate, blood pressure, cardiac output) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| PD | Torrente_2023 | not_relevant | 1 | 0 | The paper reports qualitative effects of xamoterol (increased neuroinflammation/degeneration) at a single fixed dose (3 mg/kg) but provides no concentration-effect data, dose-response curve, or numeric PD parameters (Emax, EC50, etc.). |
| popPK | Vigholt-Sørensen_1991 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Vigholt-Sørensen_1991 | not_relevant | 0 | 0 | The paper studies beta-adrenoceptor partial agonists on isolated rat atrium and does not mention xamoterol or report any exposure-response or dose-response data for it. |
| popPK | Willette_1998 | irrelevant | 0 | 0 | The study evaluates the intrinsic sympathomimetic activity of bucindolol and carvedilol in rats, mentioning xamoterol only as a background example of a drug with ISA, without reporting any pharmacokinetic parameters for xamoterol. |
| popPK | Yabana_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor agonism/antagonism in guinea-pig tissues, not a pharmacokinetic study, and xamoterol is used only as a comparator. |
| popPK | Zech_1989 | irrelevant | 0 | 0 | The study examines renal physiology and blood pressure effects, not pharmacokinetic disposition parameters. |
| popPK | unknown_1988 | irrelevant | 0 | 0 | no_text gate: only 117 chars of text extracted (&lt; 400) |
| PD | unknown_1988 | not_relevant | 0 | 0 | The provided text is only a header for a conference proceedings and does not contain the abstract or data for xamoterol. |
| popPK | unknown_1991 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PD | unknown_1991 | not_relevant | 0 | 0 | The provided text is only a citation header for a conference abstract collection and contains no scientific content, data, or PD parameters for xamoterol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
