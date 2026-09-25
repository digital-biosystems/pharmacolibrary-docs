<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;ibopamine&quot;}]"></div>

# ibopamine

- **generic name:** ibopamine
- **ATC codes:** `C01CA16`, `S01FB03`
- **DrugBank:** [DB13316](https://go.drugbank.com/drugs/DB13316)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 18:19 | 5:51 | 0/0/0 | 0/0/0 | 0/0/0 | 71,747/5,372 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 55 matched, 57 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ventresca_1988.pdf` | Ventresca GP et al., Clinical pharmacokinetics of ibopamine…, Arzneimittel-Forschung (1988) | popPK | 10 | not captured | [2904270](https://pubmed.ncbi.nlm.nih.gov/2904270) | The paper is a clinical pharmacokinetic study of ibopamine, but the provided evidence is an abstract that describes the study design and qualitative findings without listing specific numeric parameter values. |
| `Gifford_1986.pdf` | Gifford R et al., Analysis of epinine and its metabolites…, Journal of chromatography (1986) | popPK | 8 | [10.1016/s0378-4347(00)83567-7](https://doi.org/10.1016/s0378-4347(00)83567-7) | [3771727](https://pubmed.ncbi.nlm.nih.gov/3771727) | The paper describes a pharmacokinetic study of ibopamine (as a prodrug of epinine) in humans, but the provided evidence contains only the abstract/methods description without any specific numeric PK parameter values. |
| `Bellotti_1996.pdf` | Bellotti G et al., [Acute effects of ibopamine on left ven…, Arquivos brasileiros de car… (1996) | pd | 4 | not captured | [9110439](https://www.ncbi.nlm.nih.gov/pubmed/9110439) | metadata signals extractable PD data (Emax) |
| `Buikema_1993.pdf` | Buikema H et al., Endothelium dependent relaxation in two…, Cardiovascular research (1993) | pd | 4 | [10.1093/cvr/27.12.2118](https://doi.org/10.1093/cvr/27.12.2118) | [8313417](https://www.ncbi.nlm.nih.gov/pubmed/8313417) | metadata signals extractable PD data (Emax) |
| `Buikema_1997.pdf` | Buikema H et al., Early pharmacologic intervention may pr…, Journal of cardiac failure (1997) | pd | 4 | [10.1016/s1071-9164(97)90046-4](https://doi.org/10.1016/s1071-9164(97)90046-4) | [9220312](https://www.ncbi.nlm.nih.gov/pubmed/9220312) | metadata signals extractable PD data (Emax) |
| `Huang_1996.pdf` | Huang J et al., [Comparison between kinetics of positiv…, Zhongguo yao li xue bao = A… (1996) | pd | 4 | not captured | [8737459](https://www.ncbi.nlm.nih.gov/pubmed/8737459) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-09-20T18:18:34.284409+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Azzollini_1988 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Bellotti_1996 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| PD | Bellotti_1996 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess an exposure-response relationship. |
| popPK | Borchard_1991 | irrelevant | 2 | 1 | The paper is a pharmacologic review describing mechanism of action and general plasma concentrations/half-life of the metabolite epinine, but it does not report quantitative compartmental PK parameters (CL, V, Q, ka) for ibopamine. |
| popPK | Buikema_1993 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Buikema_1997 | irrelevant | 0 | 0 | no_text gate: only 171 chars of text extracted (&lt; 400) |
| PD | Buikema_1997 | not_relevant | 0 | 0 | The paper reports qualitative changes in endothelial function (e.g., vasodilation) following treatment, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50) for ibopamine. |
| popPK | Douchamps_1988 | irrelevant | 2 | 0 | The study is a bioequivalence trial reporting relative bioavailability metrics (AUC, Cmax) rather than absolute pharmacokinetic disposition parameters (CL, V, ka) for ibopamine, and no numeric values are provided in the evidence. |
| popPK | Ferrini_1987 | irrelevant | 1 | 0 | The paper focuses on the pharmacological activity of ibopamine metabolites rather than reporting quantitative pharmacokinetic parameters for ibopamine itself. |
| PD | Ferrini_1987 | not_relevant | 1 | 0 | The paper discusses the lack of pharmacodynamic activity for ibopamine metabolites but does not provide numeric PD parameters or exposure-response curves for ibopamine itself. |
| popPK | Francis_1995 | irrelevant | 0 | 0 | The paper is a review of receptor systems and clinical potential in heart failure, containing no quantitative pharmacokinetic parameters for ibopamine. |
| popPK | Gifford_1986 | relevant | 8 | 0 | The paper describes a pharmacokinetic study of ibopamine (as a prodrug of epinine) in humans, but the provided evidence contains only the abstract/methods description without any specific numeric PK parameter values. |
| popPK | Henwood_1988 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties but the provided evidence contains no quantitative PK parameter values (CL, V, etc.) for ibopamine. |
| PD | Henwood_1988 | not_relevant | 2 | 0 | The text is a qualitative review summary describing general pharmacodynamic properties and clinical efficacy without providing specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Huang_1996 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | Huang_1996 | not_relevant | 0 | 0 | The provided text is only a title and lacks the full content required to verify the presence of numeric PD parameters or concentration-effect data. |
| popPK | Itoh_1991 | irrelevant | 2 | 0 | The text describes qualitative pharmacokinetic behavior (peak time, detection limit) but does not report quantitative disposition parameters (CL, V, ka) or a compartmental model for ibopamine. |
| popPK | Itoh_1992 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| popPK | Kasmer_1990 | irrelevant | 0 | 0 | The study focuses on renal function and diuretic effects of ibopamine, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Kawahara_1985 | irrelevant | 0 | 0 | The study is a mechanistic pharmacodynamic analysis of inotropic effects in isolated tissue, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kopia_1988 | irrelevant | 0 | 0 | The study is a hemodynamic/pharmacodynamic assessment in dogs and does not report pharmacokinetic parameters such as clearance, volume, or half-life for ibopamine. |
| popPK | Lodola_1986 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| popPK | Marchini_2003 | irrelevant | 0 | 0 | The study is a clinical ophthalmology trial assessing ocular effects (IOP, pupil size) of topical ibopamine, not a pharmacokinetic study reporting disposition parameters. |
| PD | Marchini_2003 | not_relevant | 3 | 2 | The study reports single-dose effects and a qualitative mention of a dose-response evaluation, but the provided text does not contain the specific numeric data points, curve fits, or PD parameters (Emax, EC50) required to derive an exposure-response relationship. |
| popPK | McLaren_2003 | irrelevant | 0 | 0 | The study measures aqueous humor flow and intraocular pressure (pharmacodynamics) rather than systemic pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Melloni_1981 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on ascitic liver cirrhosis reporting diuresis and creatinine clearance, not a pharmacokinetic study with disposition parameters for ibopamine. |
| popPK | Munger_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic/hemodynamic assessment of ibopamine co-administration, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Munger_1993 | not_relevant | 2 | 1 | The study reports qualitative hemodynamic changes (percent changes in cardiac index and SVR) at a single time point (30 minutes) for a fixed dose, but does not provide plasma concentration data or fit a concentration-effect model to derive numeric PD parameters like Emax or EC50. |
| popPK | Nichols_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of renal vascular effects in dogs, not a pharmacokinetic study, and reports no disposition parameters for ibopamine. |
| popPK | Ogawa_2014 | irrelevant | 2 | 0 | The paper is a review article that discusses ibopamine only as one of many drugs with altered exposure in heart failure, without providing specific quantitative PK parameter values (CL, V, etc.) for ibopamine. |
| popPK | Pocchiari_1986 | irrelevant | 2 | 0 | The study describes metabolism and qualitative plasma level timing (peaks) but does not report quantitative compartmental PK parameters (CL, V, ka) for ibopamine. |
| popPK | Pocchiari_1986_2 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Pouleur_1991 | irrelevant | 0 | 0 | The paper is a review discussing the therapeutic potential and general pharmacokinetic differences of ibopamine without reporting any quantitative disposition parameters or numeric values. |
| popPK | Rensma_1993 | irrelevant | 2 | 1 | The study reports only peak plasma concentrations (Cmax) for three subjects without deriving or reporting standard pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Salvadeo_1988 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |
| popPK | Schwinger_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of epinine (a metabolite) on isolated arteries, not a pharmacokinetic study of ibopamine. |
| popPK | Scott_1987 | irrelevant | 2 | 0 | The study reports only descriptive pharmacokinetic metrics (Cmax, AUC, tmax) for the metabolite epinine without providing specific numeric values or compartmental parameters (CL, V, ka) for ibopamine. |
| popPK | Siepmann_1995 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| popPK | Soldati_1993 | irrelevant | 2 | 0 | The study focuses on ocular pharmacodynamics and local metabolism (hydrolysis to epinine) in rabbits, without reporting systemic quantitative disposition parameters (CL, V, Q) for ibopamine. |
| popPK | Spencer_1993 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties but the provided evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.) for ibopamine. |
| PD | Spencer_1993 | not_relevant | 2 | 0 | The text is a qualitative review summarizing therapeutic use and general pharmacodynamic properties without providing specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling data. |
| popPK | Stefoni_1981 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects (diuresis, renal blood flow) but contains no quantitative pharmacokinetic parameters (CL, V, t1/2) for ibopamine. |
| popPK | Stefoni_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting changes in creatinine clearance, not a pharmacokinetic study reporting disposition parameters (CL, V, ka, etc.) for ibopamine. |
| popPK | Stefoni_1996 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for renal failure progression and does not report any pharmacokinetic parameters for ibopamine. |
| popPK | Taylor_1990 | irrelevant | 0 | 0 | The paper is a review of the efficacy and pharmacodynamics of ibopamine in heart failure and does not report quantitative pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Taylor_1990 | not_relevant | 1 | 0 | The text is a qualitative review of the mechanism and clinical efficacy of ibopamine without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Teisman_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasodilating effects on human arteries, not a pharmacokinetic study, and ibopamine is only mentioned as a comparator. |
| popPK | Ventresca_1988 | relevant | 10 | 0 | The paper is a clinical pharmacokinetic study of ibopamine, but the provided evidence is an abstract that describes the study design and qualitative findings without listing specific numeric parameter values. |
| popPK | Wehling_1990 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (blood pressure, diuresis, renal function) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.) for ibopamine. |
| popPK | Wehling_1990_2 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (blood pressure, diuresis, renal function) rather than quantitative pharmacokinetic parameters (CL, V, ka) for ibopamine. |
| popPK | de_1988 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| popPK | de_1989 | relevant | 8 | 2 | The study is a relevant PK/PD interaction study for ibopamine, but the evidence text only describes qualitative changes (reduction in Cmax/AUC) without providing specific numeric parameter values. |
| PD | de_1989 | not_relevant | 3 | 1 | The paper describes qualitative PD effects (cardiac performance) and PK changes but does not report numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model. |
| popPK | unknown_1994 | irrelevant | 0 | 0 | The provided evidence contains no mention of ibopamine or its pharmacokinetic parameters. |
| PD | unknown_1994 | not_relevant | 0 | 0 | The provided text is only a title and file description for a conference abstract collection, containing no specific data, models, or numeric parameters for ibopamine. |
| popPK | van_1992 | irrelevant | 0 | 0 | The paper is a review of dopaminergic agents' hemodynamic effects and does not report any pharmacokinetic parameters for ibopamine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
