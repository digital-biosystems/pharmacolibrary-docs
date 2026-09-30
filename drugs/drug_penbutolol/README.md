<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;penbutolol&quot;}]"></div>

# penbutolol

- **generic name:** penbutolol
- **ATC codes:** `C07AA23`, `C07CA23`
- **DrugBank:** [DB01359](https://go.drugbank.com/drugs/DB01359) · **PubChem:** [CID 37464](https://pubchem.ncbi.nlm.nih.gov/compound/37464)
- **molar mass:** 291.4284 g/mol (C18H29NO2) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

**Description.** Penbutolol is a drug in the beta-blocker class used to treat hypertension. Penbutolol binds both beta-1 and beta-2 adrenergic receptors, rendering it a non-selective beta-blocker. Penbutolol can act as a partial agonist at beta adrenergic receptors, since it is a sympathomimetric drug. Penbutolol also demonstrates high binding affinity to the 5-hydroxytryptamine receptor 1A with antagonistic effects. This binding characteristic of penbutolol is being investigated for its implications in Antidepressant Therapy. Penbutolol is contraindicated in patients with cardiogenic shock, sinus bradycardia, second and third degree atrioventricular conduction block, bronchial asthma, and those with known hypersensitivity.

**Indication.** Penbutolol is indicated in the treatment of mild to moderate arterial hypertension. It may be used alone or in combination with other antihypertensive agents, especially thiazide-type diuretics.Penbutolol is contraindicated in patients with cardiogenic shock, sinus bradycardia, second and third degree atrioventricular conduction block, bronchial asthma, and those with known hypersensitivity.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 05:24 | 12:31 | 0/0/0 | 0/0/0 | 0/0/0 | 31,425/2,855 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=penbutolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ORM1` other/unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| excretion | kidney | <sub>“…The metabolites are excreted principally in the urine.…”</sub> | prose |

<sub>Actors without a tissue in the table: ADRB1 (partial agonist), ADRB1 (target), ADRB2 (partial agonist), ADRB2 (target), HTR1A (target), HTR1B (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Aguirre_1996.pdf` | Aguirre C et al., Pharmacokinetics and pharmacodynamics o…, Research communications in… (1996) | popPK | 9 | not captured | [8733828](https://pubmed.ncbi.nlm.nih.gov/8733828) | The paper is a relevant PK/PD study for penbutolol, but the abstract only describes trends (reduced/increased) without providing specific numeric parameter values. |
| `Vedin_1983.pdf` | Vedin JA et al., Pharmacodynamic and pharmacokinetic stu…, European journal of clinica… (1983) | popPK | 9 | [10.1007/BF00542123](https://doi.org/10.1007/BF00542123) | [6653649](https://pubmed.ncbi.nlm.nih.gov/6653649) | The study reports quantitative pharmacokinetic parameters (half-life and volume of distribution) for penbutolol in humans, with values explicitly stated in the text. |
| `Brockmeier_1988.pdf` | Brockmeier D et al., Penbutolol: pharmacokinetics, effect on…, European journal of clinica… (1988) | popPK | 8 | [10.1007/BF00637597](https://doi.org/10.1007/BF00637597) | [2906875](https://pubmed.ncbi.nlm.nih.gov/2906875) | The study reports quantitative PK parameters for penbutolol (Cmax, Tmax, half-life) in the text, but lacks explicit clearance or volume values. |
| `Wellstein_1985.pdf` | Wellstein A et al., Penbutolol: beta-adrenoceptor interacti…, European journal of clinica… (1985) | pd | 5 | [10.1007/BF00544083](https://doi.org/10.1007/BF00544083) | [3000796](https://www.ncbi.nlm.nih.gov/pubmed/3000796) | metadata signals extractable PD data (IC50) |
| `Grobecker_1976.pdf` | Grobecker H et al., [Specific and non-specific effects of b…, Klinische Wochenschrift (1976) | pd | 4 | [10.1007/BF01614295](https://doi.org/10.1007/BF01614295) | [8664](https://www.ncbi.nlm.nih.gov/pubmed/8664) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-29T05:23:29.936483+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aguirre_1996 | relevant | 9 | 0 | The paper is a relevant PK/PD study for penbutolol, but the abstract only describes trends (reduced/increased) without providing specific numeric parameter values. |
| popPK | Cizmáriková_2002 | irrelevant | 0 | 0 | The paper is a review of beta-blockers without original quantitative pharmacokinetic parameter values for penbutolol. |
| PD | Cizmáriková_2002 | not_relevant | 1 | 0 | The text is a qualitative review of enantiomer effects and does not provide specific numeric PD parameters or concentration-effect data for penbutolol. |
| popPK | Grobecker_1976 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Grobecker_1976 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess PD relationships. |
| popPK | Heel_1981 | irrelevant | 0 | 0 | The paper is a preliminary review of pharmacological properties and therapeutic efficacy, not a primary pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Heel_1981 | not_relevant | 2 | 0 | The text is a qualitative review describing general pharmacological properties (e.g., narrow dose-response range, 24-hour duration) without providing specific numeric PD parameters, concentration-effect curves, or quantitative exposure-response data. |
| popPK | Kulkarni_1977 | irrelevant | 0 | 0 | The study is a pharmacodynamic potency assay comparing beta-blocking effects, not a pharmacokinetic study reporting disposition parameters for penbutolol. |
| PD | Kulkarni_1977 | not_relevant | 4 | 2 | The paper describes a dose-response assay and mentions obtaining a relationship, but the provided text does not contain specific numeric PD parameters (like EC50, Emax, or potency ratios) or data points to derive them. |
| popPK | Martin_1985 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice investigating receptor plasticity, not a pharmacokinetic study, and penbutolol is used only as a behavioral probe without any PK parameter reporting. |
| popPK | Martínez_1990 | irrelevant | 2 | 0 | The study focuses on the mechanism of protein binding and central effect in mice rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for penbutolol. |
| PD | Martínez_1990 | not_relevant | 2 | 1 | The paper reports a qualitative decrease in central effect and brain uptake in diseased animals but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) for penbutolol. |
| popPK | Mutschler_1984 | irrelevant | 2 | 0 | The study focuses on drug-drug interactions and reports qualitative changes in metabolite levels rather than quantitative disposition parameters (CL, V, etc.) for penbutolol. |
| PD | Mutschler_1984 | not_relevant | 1 | 0 | The paper reports qualitative findings that pharmacodynamic effects (inhibition of tachycardia) were not affected by co-administration, but provides no numeric PD parameters or concentration-effect curves. |
| popPK | Müller_1979 | irrelevant | 2 | 0 | The paper discusses pharmacokinetics qualitatively but provides no quantitative disposition parameters (CL, V, ka, etc.) for penbutolol in the evidence. |
| popPK | Schlicker_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of anpirtoline, and penbutolol is only used as a receptor antagonist in binding assays, not as the subject of a pharmacokinetic analysis. |
| PD | Schlicker_1992 | not_relevant | 0 | 0 | The paper studies anpirtoline, not penbutolol; penbutolol is only mentioned as a 5-HT1B antagonist used to block anpirtoline's effects, with no PD parameters reported for penbutolol itself. |
| popPK | Schoenberger_1989 | irrelevant | 0 | 0 | The paper is a clinical efficacy study evaluating blood pressure response and does not report any pharmacokinetic parameters for penbutolol. |
| popPK | Sharma_1978 | irrelevant | 0 | 0 | The study reports comparative potency and pharmacodynamic effects (heart rate) but contains no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Silke_1983 | irrelevant | 2 | 0 | The study reports plasma concentrations and haemodynamic effects but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Silke_1984 | irrelevant | 1 | 0 | The study is a comparative haemodynamic dose-response analysis that does not report quantitative pharmacokinetic parameters (e.g., clearance, volume) for penbutolol. |
| PD | Silke_1984 | not_relevant | 3 | 2 | The study reports qualitative comparative haemodynamic effects of fixed doses but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (e.g., EC50, Emax) for penbutolol. |
| popPK | Sánchez_1995 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice focusing on serotonergic mechanisms, with no pharmacokinetic parameters reported for penbutolol. |
| popPK | Sánchez_1997 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice using penbutolol as a probe drug to assess receptor involvement, with no pharmacokinetic parameters reported. |
| popPK | Wellstein_1985 | irrelevant | 2 | 0 | The study focuses on in-vitro receptor binding and qualitative plasma concentration profiles without reporting quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Wong_2014 | irrelevant | 0 | 0 | The paper is a systematic review of blood pressure efficacy, not a pharmacokinetic study, and contains no PK parameters for penbutolol. |
| PD | Wong_2014 | not_relevant | 2 | 1 | The paper is a systematic review that concludes there is no convincing dose-response relationship for blood pressure and provides only aggregate mean differences, lacking specific numeric PD parameters (e.g., Emax, EC50) or individual concentration-effect data for penbutolol. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
