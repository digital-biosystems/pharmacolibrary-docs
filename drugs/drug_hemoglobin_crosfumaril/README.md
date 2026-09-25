<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05A&quot;,&quot;href&quot;:&quot;atc/B05A.md&quot;},{&quot;label&quot;:&quot;hemoglobin crosfumaril&quot;}]"></div>

# hemoglobin crosfumaril

- **generic name:** hemoglobin crosfumaril
- **ATC codes:** `B05AA08`
- **DrugBank:** [DB13864](https://go.drugbank.com/drugs/DB13864)
- **groups:** experimental

## About

**Description.** Hemoglobin in which the alpha-subunit are cross-linked intramolecularly.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 07:09 | 3:20 | 0/0/0 | 0/0/0 | 0/0/0 | 50,135/3,728 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 23 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Palaparthy_2001.pdf` | Palaparthy R et al., Pharmacokinetics of diaspirin cross-lin…, The Journal of pharmacy and… (2001) | popPK | 10 | [10.1211/0022357011775370](https://doi.org/10.1211/0022357011775370) | [11273013](https://pubmed.ncbi.nlm.nih.gov/11273013) | The study reports quantitative pharmacokinetic parameters (clearance and half-life) for diaspirin cross-linked hemoglobin (hemoglobin_crosfumaril) in a rat model, with all numeric values explicitly present in the text. |
| `dAlmeida_1998.pdf` | d'Almeida MS et al., Influence of sepsis on the plasma elimi…, Artificial cells, blood sub… (1998) | popPK | 9 | [10.3109/10731199809117458](https://doi.org/10.3109/10731199809117458) | [9635120](https://pubmed.ncbi.nlm.nih.gov/9635120) | The study reports quantitative pharmacokinetic parameters (half-life and volume of distribution) for diaspirin crosslinked hemoglobin (a hemoglobin crosfumaril analog) in rats, with specific numeric values provided in the text. |
| `OHara_2001.pdf` | O'Hara JF et al., Hemoglobin and methemoglobin concentrat…, Anesthesia and analgesia (2001) | popPK | 8 | [10.1097/00000539-200101000-00009](https://doi.org/10.1097/00000539-200101000-00009) | [11133598](https://pubmed.ncbi.nlm.nih.gov/11133598) | The study reports quantitative pharmacokinetic parameters (peak plasma concentration and half-life) for diaspirin cross-linked hemoglobin (DCLHb), which is the specific formulation of hemoglobin crosfumaril. |
| `Swan_1995.pdf` | Swan SK et al., Pharmacologic profile of diaspirin cros…, American journal of kidney… (1995) | popPK | 8 | [10.1016/0272-6386(95)90056-x](https://doi.org/10.1016/0272-6386(95)90056-x) | [7503066](https://pubmed.ncbi.nlm.nih.gov/7503066) | The study reports quantitative pharmacokinetic parameters (terminal half-life and AUC) for diaspirin cross-linked hemoglobin (DCLHb), which is the specific formulation of hemoglobin_crosfumaril, with values clearly present in the abstract text. |

<sub>queue written 2026-09-19T07:09:00.473346+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barve_1997 | irrelevant | 0 | 0 | The study investigates hemodynamic effects (blood pressure, flow, resistance) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for hemoglobin_crosfumaril. |
| popPK | Bloomfield_2004 | irrelevant | 2 | 0 | The study reports pharmacodynamic and safety data (hemoglobin levels, blood pressure) but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka) or a compartmental model for the drug. |
| PD | Bloomfield_2004 | not_relevant | 2 | 1 | The paper reports group-level mean changes in hemodynamic and biochemical variables over time following a single dose, but it does not provide individual subject data, concentration-effect curves, or fitted PD parameters (e.g., Emax, EC50) to derive a quantitative exposure-response relationship. |
| popPK | Bowes_1994 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy trial in rabbits evaluating neurological outcomes, not a pharmacokinetic study reporting quantitative disposition parameters for hemoglobin_crosfumaril. |
| popPK | Buehler_2006 | irrelevant | 0 | 0 | The paper focuses on the chemical characterization and molecular structure of a hemoglobin-based oxygen carrier, not on the pharmacokinetic parameters of hemoglobin_crosfumaril. |
| popPK | Burhop_1992 | irrelevant | 0 | 0 | The study focuses on cardiopulmonary and immunologic responses (inflammation markers) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Erhart_2000 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic interaction between DCLHb and nitrovasodilators on blood pressure, not the pharmacokinetic disposition parameters of hemoglobin_crosfumaril. |
| PD | Erhart_2000 | not_relevant | 4 | 2 | The study reports a qualitative dose-response effect of DCLHb on the potency of other drugs (nitrovasodilators) but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for hemoglobin crosfumaril itself. |
| popPK | Ferrera_2002 | irrelevant | 0 | 0 | The study focuses on the hemodynamic effects (mean arterial pressure) of DCLHb in swine and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Ledvina_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular contractions, not a pharmacokinetic study, and reports no disposition parameters for hemoglobin_crosfumaril. |
| popPK | Nelson_1992 | irrelevant | 2 | 0 | The paper describes the synthesis and general physiological tolerance of a hemoglobin derivative (GP-DCLHb) but does not report quantitative pharmacokinetic parameters (CL, V, ka) for hemoglobin_crosfumaril. |
| popPK | Piper_1998 | irrelevant | 0 | 0 | The study focuses on hemodynamic effects (ICP, CPP, CBF) of diaspirin cross-linked hemoglobin in a brain injury model and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Przybelski_1996 | irrelevant | 2 | 1 | The study evaluates diaspirin cross-linked hemoglobin (DCLHb), which is a different drug from hemoglobin_crosfumaril (HbVF), and only reports half-life without a compartmental model or clearance/volume parameters. |
| PD | Przybelski_1996 | not_relevant | 3 | 1 | The study reports qualitative dose-related effects (LDH-5, blood pressure) and PK parameters (half-life) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Qi_2016 | irrelevant | 0 | 0 | The paper describes the chemical synthesis and characterization of a modified hemoglobin polymer, not a pharmacokinetic study reporting quantitative disposition parameters for hemoglobin_crosfumaril. |
| popPK | Remy_1999 | irrelevant | 0 | 0 | The paper is a general review of red blood cell substitutes and does not report specific quantitative pharmacokinetic parameters for hemoglobin_crosfumaril. |
| popPK | Ritchie_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasoactive effects on arterial rings, not a pharmacokinetic study, and does not report any disposition parameters for hemoglobin_crosfumaril. |
| popPK | Rogers_1995 | irrelevant | 0 | 0 | The paper focuses on in-vitro oxygen binding and redox kinetics of hemoglobin derivatives, not on pharmacokinetic disposition parameters (CL, V, etc.) for hemoglobin_crosfumaril. |
| popPK | Rémy_1999 | irrelevant | 0 | 0 | The paper is a review of red cell substitutes and does not report quantitative pharmacokinetic parameters for hemoglobin_crosfumaril. |
| popPK | Schubert_2002 | irrelevant | 0 | 0 | The study is a clinical safety trial of diaspirin crosslinked hemoglobin (DCLHb), not hemoglobin_crosfumaril, and does not report pharmacokinetic parameters. |
| popPK | Sloan_2015 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting trauma management outcomes (GCS, fluid volumes) and does not contain any pharmacokinetic parameters for hemoglobin_crosfumaril. |
| popPK | Standl_2001 | irrelevant | 0 | 0 | The paper is a general review of hemoglobin-based oxygen carriers and does not report specific quantitative pharmacokinetic parameters for hemoglobin_crosfumaril. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
