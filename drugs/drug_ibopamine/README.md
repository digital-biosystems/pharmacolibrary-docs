<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;ibopamine&quot;}]"></div>

# ibopamine

- **generic name:** ibopamine
- **ATC codes:** `C01CA16`, `S01FB03`
- **DrugBank:** [DB13316](https://go.drugbank.com/drugs/DB13316) · **PubChem:** not captured
- **molar mass:** 307.3847 g/mol (C17H25NO4) — DrugBank
- **groups:** experimental

## About

Ibopamine is a dopamine agonist that has been used as a cardiotonic agent for heart conditions and as a mydriatic eye drop to dilate the pupil. It is currently considered an experimental drug and does not appear to have an authorised marketing status in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5984366](https://www.wikidata.org/wiki/Q5984366) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 09:22 | 2:06 | 0/0/0 | 0/0/0 | 0/0/0 | 37,434/1,994 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/1 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 57 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ventresca_1988.pdf` | Ventresca GP et al., Clinical pharmacokinetics of ibopamine…, Arzneimittel-Forschung (1988) | popPK | 10 | not captured | [2904270](https://pubmed.ncbi.nlm.nih.gov/2904270) | The paper describes a clinical pharmacokinetic study of ibopamine and its active metabolite epinine, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| `Gifford_1986.pdf` | Gifford R et al., Analysis of epinine and its metabolites…, Journal of chromatography (1986) | popPK | 8 | [10.1016/s0378-4347(00)83567-7](https://doi.org/10.1016/s0378-4347(00)83567-7) | [3771727](https://pubmed.ncbi.nlm.nih.gov/3771727) | The paper describes a pharmacokinetic study of ibopamine (as a prodrug of epinine) in humans, but the provided evidence contains only methodological details and no quantitative parameter values. |
| `Soldati_1993.pdf` | Soldati L et al., Ocular pharmacokinetics and pharmacodyn…, Experimental eye research (1993) | popPK | 8 | [10.1006/exer.1993.1032](https://doi.org/10.1006/exer.1993.1032) | [8096462](https://pubmed.ncbi.nlm.nih.gov/8096462) | The study investigates ocular pharmacokinetics of ibopamine in rabbits, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| `Bellotti_1996.pdf` | Bellotti G et al., [Acute effects of ibopamine on left ven…, Arquivos brasileiros de car… (1996) | pd | 4 | not captured | [9110439](https://www.ncbi.nlm.nih.gov/pubmed/9110439) | metadata signals extractable PD data (Emax) |
| `Buikema_1993.pdf` | Buikema H et al., Endothelium dependent relaxation in two…, Cardiovascular research (1993) | pd | 4 | [10.1093/cvr/27.12.2118](https://doi.org/10.1093/cvr/27.12.2118) | [8313417](https://www.ncbi.nlm.nih.gov/pubmed/8313417) | metadata signals extractable PD data (Emax) |
| `Buikema_1997.pdf` | Buikema H et al., Early pharmacologic intervention may pr…, Journal of cardiac failure (1997) | pd | 4 | [10.1016/s1071-9164(97)90046-4](https://doi.org/10.1016/s1071-9164(97)90046-4) | [9220312](https://www.ncbi.nlm.nih.gov/pubmed/9220312) | metadata signals extractable PD data (Emax) |
| `Huang_1996.pdf` | Huang J et al., [Comparison between kinetics of positiv…, Zhongguo yao li xue bao = A… (1996) | pd | 4 | not captured | [8737459](https://www.ncbi.nlm.nih.gov/pubmed/8737459) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-06T09:22:38.275147+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Azzollini_1988 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Bellotti_1996 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| PD | Bellotti_1996 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess an exposure-response relationship. |
| popPK | Borchard_1991 | irrelevant | 2 | 1 | The paper is a pharmacologic review describing mechanism of action and receptor affinity, reporting only qualitative PK descriptors (half-life of metabolite, max concentration) without a compartmental model or quantitative disposition parameters (CL, V) for ibopamine. |
| popPK | Buikema_1993 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Buikema_1997 | irrelevant | 0 | 0 | no_text gate: only 171 chars of text extracted (&lt; 400) |
| PD | Buikema_1997 | not_relevant | 0 | 0 | The paper reports qualitative changes in endothelial function (e.g., vasodilation) following treatment, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) for ibopamine. |
| popPK | Douchamps_1988 | irrelevant | 2 | 0 | The study measures the metabolite epinine for bioequivalence (AUC, Cmax, tmax) but does not report compartmental PK parameters (CL, V, ka) or numeric values in the provided text. |
| popPK | Ferrini_1987 | irrelevant | 1 | 0 | The paper focuses on the pharmacological activity of ibopamine metabolites rather than reporting quantitative pharmacokinetic parameters for ibopamine itself. |
| PD | Ferrini_1987 | not_relevant | 1 | 0 | The paper discusses the lack of pharmacodynamic activity for ibopamine metabolites but does not provide numeric PD parameters or exposure-response curves for ibopamine itself. |
| popPK | Francis_1995 | irrelevant | 0 | 0 | The paper is a review of receptor systems and clinical trials in heart failure, containing no quantitative pharmacokinetic parameters for ibopamine. |
| popPK | Gifford_1986 | relevant | 8 | 0 | The paper describes a pharmacokinetic study of ibopamine (as a prodrug of epinine) in humans, but the provided evidence contains only methodological details and no quantitative parameter values. |
| popPK | Henwood_1988 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties but the provided evidence contains no quantitative PK parameter values (CL, V, etc.) for ibopamine. |
| PD | Henwood_1988 | not_relevant | 2 | 0 | The text is a qualitative review summary describing general pharmacodynamic properties and clinical efficacy without providing specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Huang_1996 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | Huang_1996 | not_relevant | 0 | 0 | The provided text is only a title and lacks the full content required to verify the presence of numeric PD parameters or concentration-effect data. |
| popPK | Itoh_1991 | irrelevant | 2 | 0 | The paper describes qualitative pharmacokinetic behavior (peak time, detection window) but does not report quantitative disposition parameters (CL, V, ka, t1/2) or a compartmental model. |
| popPK | Itoh_1992 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| popPK | Kasmer_1990 | irrelevant | 0 | 0 | The study evaluates renal function and diuretic effects of ibopamine, not its pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Kawahara_1985 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic analysis of inotropic effects in isolated tissue, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kopia_1988 | irrelevant | 0 | 0 | The study reports hemodynamic and pharmacodynamic effects (blood pressure, heart rate, contractility) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Lodola_1986 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| popPK | Marchini_2003 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamic effects (mydriasis, IOP, anterior segment geometry) of topical ibopamine, not its pharmacokinetic disposition parameters. |
| PD | Marchini_2003 | not_relevant | 3 | 2 | The study reports single-dose effects and a qualitative mention of a dose-response evaluation, but the provided text does not contain the specific numeric data points, curve fits, or PD parameters (Emax, EC50) required to derive an exposure-response relationship. |
| popPK | McLaren_2003 | irrelevant | 0 | 0 | The study measures aqueous humor flow and intraocular pressure (pharmacodynamics) rather than systemic pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Melloni_1981 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting therapeutic outcomes (diuresis, weight loss) rather than pharmacokinetic parameters. |
| popPK | Munger_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic/hemodynamic assessment of ibopamine co-administration, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Munger_1993 | not_relevant | 2 | 1 | The study reports qualitative hemodynamic changes (percent changes in cardiac index and SVR) at a single time point (30 minutes) for a fixed dose, but does not provide plasma concentration data or fit a concentration-effect model to derive numeric PD parameters like Emax or EC50. |
| popPK | Nichols_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of renal vascular dopamine receptor effects in dogs, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ogawa_2014 | irrelevant | 2 | 0 | This is a review article that mentions ibopamine only in a list of drugs with increased exposure in heart failure, without providing specific quantitative PK parameter values (CL, V, etc.) for ibopamine. |
| popPK | Pocchiari_1986 | irrelevant | 2 | 0 | The study describes qualitative metabolism and time-course observations (peaks, detection limits) but does not report quantitative compartmental PK parameters (CL, V, ka) for ibopamine or its metabolite. |
| popPK | Pocchiari_1986_2 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Pouleur_1991 | irrelevant | 1 | 0 | The paper is a review discussing the therapeutic potential of ibopamine in heart failure and mentions it has different pharmacokinetics than levodopa, but it does not report any quantitative PK parameters (CL, V, etc.) for ibopamine. |
| popPK | Rensma_1993 | relevant | 4 | 2 | The study reports peak plasma concentrations (Cmax) for ibopamine and its metabolite in humans, but lacks quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Salvadeo_1988 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |
| popPK | Schwinger_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of the metabolite epinine on isolated human renal arteries, reporting no pharmacokinetic parameters for ibopamine. |
| popPK | Scott_1987 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| popPK | Siepmann_1995 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| popPK | Soldati_1993 | relevant | 8 | 0 | The study investigates ocular pharmacokinetics of ibopamine in rabbits, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| popPK | Spencer_1993 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties but the provided evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.) for ibopamine. |
| PD | Spencer_1993 | not_relevant | 2 | 0 | The text is a qualitative review summarizing therapeutic use and general pharmacodynamic properties without providing specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling data. |
| popPK | Stefoni_1981 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (urinary excretion, renal function) but contains no quantitative pharmacokinetic parameters (CL, V, t1/2) for ibopamine. |
| popPK | Stefoni_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting changes in creatinine clearance, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for ibopamine. |
| popPK | Stefoni_1996 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for renal failure progression and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for ibopamine. |
| popPK | Taylor_1990 | irrelevant | 0 | 0 | The paper is a review of the efficacy and pharmacodynamics of ibopamine in heart failure and does not report quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Taylor_1990 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanism and clinical efficacy of ibopamine without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Teisman_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor-mediated vasodilation, not a pharmacokinetic study reporting disposition parameters for ibopamine. |
| popPK | Ventresca_1988 | relevant | 10 | 0 | The paper describes a clinical pharmacokinetic study of ibopamine and its active metabolite epinine, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| popPK | Wehling_1990 | irrelevant | 0 | 0 | The study reports hemodynamic and renal functional effects (blood pressure, urinary flow, creatinine clearance) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for ibopamine. |
| popPK | Wehling_1990_2 | irrelevant | 0 | 0 | The study reports hemodynamic and renal effects (blood pressure, urinary flow, creatinine clearance) but does not report pharmacokinetic disposition parameters (CL, V, ka, t1/2) for ibopamine. |
| popPK | de_1988 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| popPK | de_1989 | relevant | 8 | 2 | The study is a relevant PK/PD interaction study for ibopamine, but the evidence text only describes qualitative changes (reduction in Cmax/AUC) without providing specific numeric parameter values. |
| PD | de_1989 | not_relevant | 3 | 1 | The paper describes qualitative PD effects (cardiac performance) and PK changes but does not report numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | unknown_1994 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| PD | unknown_1994 | not_relevant | 0 | 0 | The provided text is only a title and file description for a conference abstract collection, containing no specific data, models, or numeric parameters for ibopamine. |
| popPK | van_1992 | irrelevant | 0 | 0 | The paper is a review of hemodynamic and clinical effects of dopaminergic agents, not a pharmacokinetic study reporting quantitative disposition parameters for ibopamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
