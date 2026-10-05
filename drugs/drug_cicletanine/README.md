<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;cicletanine&quot;}]"></div>

# cicletanine

- **generic name:** cicletanine
- **ATC codes:** `C03BX03`
- **DrugBank:** [DB12766](https://go.drugbank.com/drugs/DB12766) · **PubChem:** [CID 54910](https://pubchem.ncbi.nlm.nih.gov/compound/54910)
- **molar mass:** 261.71 g/mol (C14H12ClNO2) — DrugBank
- **groups:** investigational

## About

Cicletanine is a diuretic that has also been described as an antihypertensive and antiarrhythmic agent. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5119443](https://www.wikidata.org/wiki/Q5119443) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 07:28 | 2:48 | 0/0/0 | 0/0/0 | 0/0/0 | 1,642/110 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 51 matched, 51 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Pruñonosa_1992.pdf` | Pruñonosa J et al., Pharmacokinetic study of cicletanine in…, International journal of cl… (1992) | popPK | 10 | not captured | [1526688](https://pubmed.ncbi.nlm.nih.gov/1526688) | The study reports quantitative pharmacokinetic parameters (half-life, oral and renal clearance) for cicletanine in healthy volunteers with values explicitly present in the text. |
| `Ferry_1988.pdf` | Ferry N et al., Influence of renal insufficiency on the…, British journal of clinical… (1988) | popPK | 9 | [10.1111/j.1365-2125.1988.tb03314.x](https://doi.org/10.1111/j.1365-2125.1988.tb03314.x) | [3358898](https://pubmed.ncbi.nlm.nih.gov/3358898) | The abstract reports specific quantitative pharmacokinetic parameters for cicletanine, including apparent elimination half-life (7 h, 31 h) and renal clearance (0.4 ml/min). |
| `Fredj_1988.pdf` | Fredj G, Clinical pharmacokinetics of cicletanin…, Drugs under experimental an… (1988) | popPK | 9 | not captured | [3416722](https://pubmed.ncbi.nlm.nih.gov/3416722) | The text explicitly reports quantitative pharmacokinetic parameters for cicletanine, including volume of distribution (37 l), time to Cmax (0.65 h), and elimination half-life (6-8 h). |
| `Jungers_1988.pdf` | Jungers P, Pharmacokinetics of cicletanine in pati…, Drugs under experimental an… (1988) | popPK | 9 | not captured | [3416723](https://pubmed.ncbi.nlm.nih.gov/3416723) | The paper is a relevant PK study for cicletanine, but the provided evidence contains only qualitative descriptions of parameter changes without specific numeric values for clearance, volume, or half-life. |
| `Garay_1992.pdf` | Garay RP et al., Cicletanine sulfate: inhibition of anio…, Naunyn-Schmiedeberg's archi… (1992) | pd | 5 | [10.1007/BF00167580](https://doi.org/10.1007/BF00167580) | [1328892](https://www.ncbi.nlm.nih.gov/pubmed/1328892) | metadata signals extractable PD data (IC50) |
| `Garay_1995.pdf` | Garay RP et al., Evidence for (+)-cicletanine sulfate as…, European journal of pharmac… (1995) | pd | 5 | [10.1016/0014-2999(94)00731-l](https://doi.org/10.1016/0014-2999(94)00731-l) | [7768271](https://www.ncbi.nlm.nih.gov/pubmed/7768271) | metadata signals extractable PD data (IC50) |
| `Bagrov_1998.pdf` | Bagrov AY et al., Vasorelaxant effects of cicletanine and…, American journal of hyperte… (1998) | pd | 4 | [10.1016/s0895-7061(98)00151-4](https://doi.org/10.1016/s0895-7061(98)00151-4) | [9832185](https://www.ncbi.nlm.nih.gov/pubmed/9832185) | metadata signals extractable PD data (EC50) |
| `Chamiot-Clerc_1999.pdf` | Chamiot-Clerc P et al., [Mechanism of action of cicletanine on…, Archives des maladies du co… (1999) | pd | 4 | not captured | [10486659](https://www.ncbi.nlm.nih.gov/pubmed/10486659) | metadata signals extractable PD data (EC50) |
| `Deitmer_1992.pdf` | Deitmer P et al., Comparison of the relaxing effects of c…, Journal of cardiovascular p… (1992) | pd | 4 | not captured | [1383629](https://www.ncbi.nlm.nih.gov/pubmed/1383629) | metadata signals extractable PD data (EC50) |
| `Monroy_1999.pdf` | Monroy A et al., [Lack of effect of cicletanine and its…, Archives des maladies du co… (1999) | pd | 4 | not captured | [10486654](https://www.ncbi.nlm.nih.gov/pubmed/10486654) | metadata signals extractable PD data (IC50) |
| `Noack_1993.pdf` | Noack T et al., Effects of cicletanine on whole-cell cu…, British journal of pharmaco… (1993) | pd | 4 | [10.1111/j.1476-5381.1993.tb13547.x](https://doi.org/10.1111/j.1476-5381.1993.tb13547.x) | [7684299](https://www.ncbi.nlm.nih.gov/pubmed/7684299) | metadata signals extractable PD data (IC50) |
| `Rosati_1989.pdf` | Rosati C et al., [Ionic perturbations produced by a non-…, Archives des maladies du co… (1989) | pd | 4 | not captured | [2514667](https://www.ncbi.nlm.nih.gov/pubmed/2514667) | metadata signals extractable PD data (IC50) |
| `Vargas_1998.pdf` | Vargas F et al., Inhibition by (-)-cicletanine of the va…, American journal of hyperte… (1998) | pd | 4 | [10.1016/s0895-7061(97)00407-x](https://doi.org/10.1016/s0895-7061(97)00407-x) | [9633794](https://www.ncbi.nlm.nih.gov/pubmed/9633794) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T07:28:13.925508+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ando_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of blood pressure and renal hemodynamics in rats, not a pharmacokinetic study, and reports no disposition parameters for cicletanine. |
| popPK | Auguet_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of vascular contraction in isolated rat aorta and does not report any pharmacokinetic parameters for cicletanine. |
| popPK | Bagrov_1998 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| popPK | Bagrov_2000 | irrelevant | 0 | 0 | The study is a mechanistic investigation of vascular tone and enzyme activity in isolated tissues, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Bukoski_1993 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects (vasodilation and antiproliferation) of cicletanine in vitro and in animal tissues, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Calder_1993 | irrelevant | 0 | 0 | The study investigates the mechanism of action (ion channel involvement) of cicletanine in guinea pig vessels, not its pharmacokinetic disposition parameters. |
| popPK | Calder_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasorelaxant actions in isolated arteries, not a pharmacokinetic study, and reports no disposition parameters for cicletanine. |
| popPK | Chamiot-Clerc_1999 | irrelevant | 0 | 0 | no_text gate: only 167 chars of text extracted (&lt; 400) |
| PD | Chamiot-Clerc_1999 | not_relevant | 0 | 0 | The paper describes the mechanism of action on vascular smooth muscle under normoxic/hypoxic conditions but does not report a quantitative exposure-response or dose-response relationship with numeric PD parameters. |
| popPK | Collinge_1987 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects (diuresis, uric acid levels) of cicletanine and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Damase-Michel_1989 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of antihypertensive effects and sympathetic tone in dogs, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for cicletanine. |
| popPK | Deitmer_1992 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| popPK | Duran_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic/renal function assessment in rats and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for cicletanine. |
| popPK | Fanous_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion exchange in cultured cells, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Fedorova_2003 | irrelevant | 0 | 0 | The study is a mechanistic investigation of PKC and Na/K-ATPase sensitivity, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for cicletanine. |
| PD | Fedorova_2003 | not_relevant | 3 | 2 | The paper reports a single-dose effect on blood pressure and changes in IC50 for a downstream target (Na/K-ATPase sensitivity to MBG), but does not provide a concentration-effect curve or numeric PD parameters (Emax, EC50) for cicletanine itself. |
| popPK | Fodor_1988 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and tolerance studies for hypertension, containing no pharmacokinetic parameters or disposition data for cicletanine. |
| PD | Fodor_1988 | not_relevant | 3 | 2 | The text describes a dose-response relationship qualitatively (identifying 50 mg as the minimum therapeutic dose) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Garay_1992 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | Garay_1992 | not_relevant | 0 | 0 | The paper describes the mechanism of action (inhibition of anion transport) and qualitative natriuretic activity, but does not provide numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for cicletanine. |
| popPK | Garay_1995 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Garay_1995 | not_relevant | 0 | 0 | The paper focuses on the identification of an active metabolite and its natriuretic activity, but does not report a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) for cicletanine. |
| popPK | Greven_1995 | irrelevant | 0 | 0 | The study investigates the renal physiological effects (diuretic/saluretic action) of cicletanine in rats, not its pharmacokinetic disposition parameters. |
| popPK | Greven_1995_2 | irrelevant | 0 | 0 | The study focuses on renal physiology (kidney function, diuresis, micropuncture) rather than the pharmacokinetic disposition parameters (CL, V, ka) of cicletanine. |
| popPK | Guinot_1989 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on dose-response and blood pressure reduction, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Jouve_1988 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on cardiac arrhythmias in dogs and does not report any pharmacokinetic parameters for cicletanine. |
| PD | Jouve_1988 | not_relevant | 2 | 1 | The paper reports qualitative improvements in clinical endpoints (ST elevation, VT incidence) and survival analysis via Cox model, but does not provide numeric concentration-effect or dose-response parameters (e.g., EC50, Emax) for cicletanine. |
| popPK | Jungers_1988 | relevant | 9 | 2 | The paper is a relevant PK study for cicletanine, but the provided evidence contains only qualitative descriptions of parameter changes without specific numeric values for clearance, volume, or half-life. |
| popPK | Lize_1987 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| popPK | Lonchampt_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium efflux and receptor binding, reporting no pharmacokinetic parameters. |
| popPK | Marche_1988 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on phosphoinositide metabolism and does not report any pharmacokinetic parameters for cicletanine. |
| PGx | Menard_2000 | not_relevant | 0 | 0 | The study investigates enzyme induction and inhibition in rat hepatocytes/microsomes, not human pharmacogenomic variants affecting PK/PD. |
| popPK | Monroy_1999 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PD | Monroy_1999 | not_relevant | 0 | 0 | The paper reports a lack of effect on a specific receptor in Xenopus oocytes, which is a functional pharmacology study, not a pharmacokinetic/pharmacodynamic (PK/PD) or exposure-response analysis in humans or animals with numeric PD parameters like Emax or EC50 in a clinical context. |
| popPK | Noack_1993 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| popPK | Rosati_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ionic perturbations and does not report pharmacokinetic parameters for cicletanine. |
| popPK | Rosati_1989_2 | irrelevant | 0 | 0 | no_text gate: only 173 chars of text extracted (&lt; 400) |
| PD | Rosati_1989_2 | not_relevant | 0 | 0 | The paper describes a mechanistic cellular study on sodium ion content and calcium pathways, not a pharmacokinetic/pharmacodynamic exposure-response or dose-response analysis with numeric PD parameters. |
| PGx | Silver_1990 | not_relevant | 0 | 0 | The paper describes the mechanism of action of cicletanine in animal models but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Tarrade_1988 | irrelevant | 0 | 0 | The paper is a clinical efficacy and tolerance overview reporting blood pressure changes, not a pharmacokinetic study with disposition parameters. |
| PD | Tarrade_1988 | not_relevant | 3 | 2 | The paper describes a qualitative dose-response relationship that disappears over time and provides mean blood pressure reductions at fixed doses, but it does not report specific numeric PD parameters (like Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Tsunoda_1993 | irrelevant | 0 | 0 | The study focuses on renal physiology and prostanoid excretion rather than pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Valdivielso_1998 | irrelevant | 0 | 0 | The study focuses on renal physiology (cGMP production, MAP, creatinine clearance) and in-vitro mechanisms, not pharmacokinetic disposition parameters like CL, V, or ka. |
| popPK | Vargas_1998 | irrelevant | 0 | 0 | The study reports pharmacodynamic parameters (Ki, IC50) for vascular reactivity, not pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
