<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;metolazone&quot;}]"></div>

# metolazone

- **generic name:** metolazone
- **ATC codes:** `C03BA08`, `C03EA12`
- **DrugBank:** [DB00524](https://go.drugbank.com/drugs/DB00524) · **PubChem:** [CID 4170](https://pubchem.ncbi.nlm.nih.gov/compound/4170)
- **molar mass:** 365.835 g/mol (C16H16ClN3O3S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** A quinazoline-sulfonamide that is considered a thiazide-like diuretic which is long-acting so useful in chronic renal failure. It also tends to lower blood pressure and increase potassium loss.

**Indication.** For the treatment of hypertension, alone or in combination with other antihypertensive drugs of a different class.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 07:40 | 1:17 | 0/0/0 | 0/0/0 | 0/0/0 | 6,009/419 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 4/1 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metolazone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…oral administration…”</sub> | prose |
| metabolism | bile duct | <sub>“…Undergoes enterohepatic recycling…”</sub> | prose |
| metabolism | kidney | <sub>“…70-95% is excreted unchanged in urine via glomerular filtration and active tubular secreti…”</sub> | prose |
| excretion | kidney | <sub>“…excreted in the unconverted form in the urine…”</sub> | prose |

<sub>Actors without a tissue in the table: SLC12A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 50 matched, 48 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dubey_2015_2.pdf` | Dubey R et al., Simultaneous Determination and Pharmaco…, Journal of chromatographic… (2015) | popPK | 8 | [10.1093/chromsci/bmv047](https://doi.org/10.1093/chromsci/bmv047) | [25947361](https://pubmed.ncbi.nlm.nih.gov/25947361) | The paper describes a pharmacokinetic study of metolazone in rats, but the provided evidence contains only methodological details and lacks the specific numeric PK parameter values (e.g., CL, V, t1/2). |
| `Luo_1991.pdf` | Luo H et al., Inhibition of binding of [3H]metolazone…, Biochemical pharmacology (1991) | pd | 4 | [10.1016/0006-2952(91)90179-9](https://doi.org/10.1016/0006-2952(91)90179-9) | [2043163](https://www.ncbi.nlm.nih.gov/pubmed/2043163) | metadata signals extractable PD data (IC50) |
| `Nair_2015.pdf` | Nair DG et al., Interactions of some commonly used drug…, Journal of biomolecular str… (2015) | pd | 4 | [10.1080/07391102.2014.923329](https://doi.org/10.1080/07391102.2014.923329) | [24819365](https://www.ncbi.nlm.nih.gov/pubmed/24819365) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T07:40:22.440093+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Banerjee_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on PXR activation and does not report pharmacokinetic parameters for metolazone. |
| PGx | Banerjee_2014 | not_relevant | 0 | 0 | The paper reports that metolazone acts as a ligand to activate PXR and induce CYP3A4/MDR1, but it does not report how a human gene variant or genotype alters the PK or PD of metolazone. |
| popPK | Brater_1985 | irrelevant | 0 | 0 | The paper is a review of diuretic resistance mechanisms and does not report quantitative pharmacokinetic parameters for metolazone. |
| PD | Brater_1985 | not_relevant | 1 | 0 | The text is a qualitative review of mechanisms of diuretic resistance and mentions metolazone only as a therapeutic strategy, without providing any numeric PD parameters or exposure-response data. |
| popPK | Brater_1985_2 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic mechanisms of diuresis (natriuresis/chloruresis) and does not report any pharmacokinetic parameters for metolazone. |
| popPK | Chan_2012 | irrelevant | 0 | 0 | The paper is a clinical review of antihypertensive efficacy in renal disease and does not report any pharmacokinetic parameters for metolazone. |
| popPK | Dargie_1972 | irrelevant | 0 | 0 | The study reports clinical efficacy (urine flow, sodium excretion) in renal failure patients but does not provide any pharmacokinetic disposition parameters (CL, V, t1/2) for metolazone. |
| popPK | Dubey_2015 | irrelevant | 0 | 0 | Metolazone is used only as an internal standard for the analysis of other drugs (losartan, ramipril, hydrochlorothiazide), not as the subject of the pharmacokinetic study. |
| PD | Dubey_2015 | not_relevant | 0 | 0 | The paper describes a PK method and reports plasma concentrations, but contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters for metolazone or any other drug. |
| popPK | Dubey_2015_2 | relevant | 8 | 0 | The paper describes a pharmacokinetic study of metolazone in rats, but the provided evidence contains only methodological details and lacks the specific numeric PK parameter values (e.g., CL, V, t1/2). |
| popPK | Eades_1998 | irrelevant | 0 | 0 | The paper is a review of loop diuretics (furosemide and bumetanide) in pediatric patients, and metolazone is only mentioned as a co-administered agent for resistance, with no PK parameters reported for it. |
| PD | Eades_1998 | not_relevant | 1 | 0 | The text is a review of loop diuretics (furosemide/bumetanide) that only qualitatively mentions metolazone as a co-administration strategy for resistance, without providing any numeric PD parameters or exposure-response data for metolazone. |
| popPK | Gehr_1991 | irrelevant | 2 | 0 | The study reports only urinary excretion percentages and qualitative pharmacodynamic observations, lacking quantitative compartmental PK parameters (CL, V, ka) for metolazone. |
| PD | Gehr_1991 | not_relevant | 3 | 1 | The paper mentions a dose-response relationship and hysteresis qualitatively but does not provide numeric PD parameters (Emax, EC50) or extractable concentration-effect curves. |
| popPK | Hu_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of GMDTC in rats, using metolazone only as an internal standard for the LC-MS/MS method. |
| popPK | Jeynes_2023 | irrelevant | 0 | 0 | The paper is an NLP evaluation of biomedical relationship datasets and does not contain any pharmacokinetic data for metolazone. |
| PD | Jeynes_2023 | not_relevant | 0 | 0 | The paper is a computational study evaluating NLP methods for extracting chemical-gene relationships from text and contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters for metolazone. |
| popPK | Kempson_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of renal brush border membrane transport and does not report pharmacokinetic disposition parameters for metolazone. |
| popPK | Lukeman_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding (IC50, Kd) and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Luo_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding inhibition, not a pharmacokinetic study reporting disposition parameters for metolazone. |
| popPK | Marone_1985 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of furosemide, with metolazone serving only as a co-administered agent to test for interactions, and no PK parameters for metolazone are reported. |
| PD | Marone_1985 | not_relevant | 2 | 1 | The study reports qualitative changes in diuresis and electrolyte excretion (P-values) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve for metolazone. |
| popPK | Materson_1983 | irrelevant | 0 | 0 | The paper is a mechanistic review of diuretic sites of action and contains no pharmacokinetic parameters or quantitative disposition data for metolazone. |
| PD | Materson_1983 | not_relevant | 1 | 0 | The text is a qualitative review of diuretic mechanisms and sites of action, mentioning metolazone only in the context of efficacy at low GFR without providing any numeric PD parameters or exposure-response data. |
| popPK | McInnes_1983 | irrelevant | 0 | 0 | The study focuses on dose-response relationships for electrolyte effects (pharmacodynamics) of spironolactone and metolazone, not pharmacokinetic parameters. |
| PD | McInnes_1983 | not_relevant | 4 | 2 | The paper reports dose-response trends for spironolactone (not metolazone) and metolazone is only a fixed co-administered agent; no numeric PD parameters (Emax, EC50, slope) are provided in the text. |
| popPK | Morimoto_1978 | irrelevant | 0 | 0 | The study reports renal clearance of markers (PAH, creatinine) and urinary excretion data, but does not report pharmacokinetic parameters (CL, V, ka, t1/2) for metolazone itself. |
| popPK | Nair_2015 | irrelevant | 0 | 0 | The study investigates off-target thrombin inhibition (mechanistic/pharmacodynamic) and reports Ki/IC50 values, not pharmacokinetic disposition parameters for metolazone. |
| PD | Nair_2015 | not_relevant | 0 | 0 | The paper discusses drug interactions with human alpha-thrombin but does not report any pharmacodynamic or exposure-response data for metolazone. |
| popPK | Odlind_1987 | relevant | 4 | 5 | The study reports renal clearance values for metolazone in humans, but lacks a compartmental model, volume of distribution, or half-life, making it a partial PK study. |
| popPK | Plata_2002 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of renal transporters where metolazone is only mentioned as a non-inhibitory agent, with no pharmacokinetic parameters reported. |
| PD | Plata_2002 | not_relevant | 0 | 0 | The paper explicitly states that metolazone did not affect the function of the Na+-K+-2Cl- cotransporter, and no PD parameters for metolazone are reported. |
| popPK | Puschett_1979 | irrelevant | 0 | 0 | The study focuses on renal hemodynamics and electrolyte excretion in dogs, not on the pharmacokinetic disposition parameters (CL, V, t1/2) of metolazone. |
| popPK | Puschett_1981 | irrelevant | 0 | 0 | The paper is a review of diuretic mechanisms of action and does not report any pharmacokinetic parameters for metolazone. |
| popPK | Reams_1989 | irrelevant | 0 | 0 | The study evaluates renal function (GFR, RPF) in hypertensive patients and does not report pharmacokinetic parameters for metolazone. |
| popPK | Ripley_1994 | irrelevant | 2 | 0 | The study reports urinary excretion data and pharmacodynamic effects but does not provide quantitative disposition parameters (CL, V, ka, t1/2) or a compartmental model for metolazone. |
| popPK | Segar_1992 | irrelevant | 0 | 0 | The study is a clinical pharmacodynamic trial assessing diuretic efficacy and tolerance, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for metolazone. |
| popPK | Sica_1996 | irrelevant | 1 | 0 | The paper is a review of diuretic combinations and pharmacokinetic principles without reporting original quantitative PK parameter values for metolazone. |
| PD | Sica_1996 | not_relevant | 2 | 0 | The text is a review article discussing the rationale and clinical use of diuretic combinations, including metolazone, but it does not present original data, specific numeric PD parameters, or extractable concentration-effect curves. |
| popPK | Sica_2003 | irrelevant | 2 | 0 | The text is a clinical review discussing the qualitative pharmacokinetic profile (slow absorption, large Vd, high renal clearance) without providing any quantitative numeric parameter values. |
| popPK | Spahr_2001 | irrelevant | 0 | 0 | The study focuses on a furosemide-induced natriuresis test for diagnosing refractory ascites, and metolazone is only mentioned as part of the background definition of diuretic resistance, with no pharmacokinetic parameters reported. |
| popPK | Tilstone_1974 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| popPK | Volz_2009 | irrelevant | 0 | 0 | The paper is a clinical review on the use of diuretics in heart failure and does not report any pharmacokinetic parameters for metolazone. |
| PD | Volz_2009 | not_relevant | 1 | 0 | The text is a clinical review discussing the management of heart failure with diuretics and mentions metolazone only as a combination therapy option, without providing any pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| popPK | Wise_2018 | irrelevant | 0 | 0 | The study is a clinical efficacy assessment of diuresis and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for metolazone. |
| popPK | Wu_2020 | irrelevant | 0 | 0 | The paper is a review of in silico ADMET prediction methods and only lists metolazone as an example in a table without providing original quantitative PK parameter values. |
| PD | Wu_2020 | not_relevant | 0 | 0 | The paper is a review of computational approaches for ADMET prediction and does not contain any specific pharmacodynamic or exposure-response data for metolazone. |
| popPK | Yukimura_1979 | irrelevant | 1 | 0 | The study investigates the mechanism of diuretic action (renal physiology) in dogs and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life for metolazone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
