<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin (beef)&quot;}]"></div>

# insulin (beef)

- **generic name:** insulin (beef)
- **ATC codes:** `A10AB02`, `A10AC02`, `A10AD02`, `A10AE02`
- **DrugBank:** [DB09456](https://go.drugbank.com/drugs/DB09456)
- **groups:** approved

## About

**Description.** Insulin beef has been discontinued in the US and Canada since 2017.[L10827]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-14 14:36 | 0:38 | 0/0/0 | 0/0/0 | 0/0/0 | 1,276/326 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 0/0 | 11/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=insulin_beef) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IDE (substrate), IGF1R (activator), INSR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 45 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ince_1983.pdf` | Ince BW, Effects of temperature and dose level o…, General and comparative end… (1983) | popPK | 9 | [10.1016/0016-6480(83)90141-7](https://doi.org/10.1016/0016-6480(83)90141-7) | [6341164](https://pubmed.ncbi.nlm.nih.gov/6341164) | The study reports quantitative PK parameters (MCR, Vdist) for bovine insulin in eels, but the specific numeric values are not present in the provided abstract text. |
| `Gray_1984.pdf` | Gray RS et al., A comparison of the biological actions…, Diabete & metabolisme (1984) | popPK | 8 | not captured | [6386558](https://pubmed.ncbi.nlm.nih.gov/6386558) | The study reports pharmacokinetic parameters (metabolic clearance rates) for beef insulin, but the specific numeric values are not present in the provided evidence text. |
| `Gray_1985.pdf` | Gray RS et al., Influence of insulin antibodies on phar…, British medical journal (Cl… (1985) | popPK | 8 | [10.1136/bmj.290.6483.1687](https://doi.org/10.1136/bmj.290.6483.1687) | [3924216](https://pubmed.ncbi.nlm.nih.gov/3924216) | The study reports pharmacokinetic parameters (clearance, distribution space, half-life) for beef insulin, but the specific numeric values are not present in the provided abstract text. |

<sub>queue written 2026-09-14T14:36:42.903466+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alassaf_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on Drosophila glial insulin resistance and neuronal debris clearance, not a pharmacokinetic study of insulin_beef. |
| popPK | Bergman_2022 | irrelevant | 0 | 0 | The paper is a review of insulin clearance physiology and does not report quantitative pharmacokinetic parameters for the specific drug insulin_beef. |
| popPK | Binder_1984 | irrelevant | 1 | 0 | The paper is a qualitative review of insulin pharmacokinetics principles without reporting any quantitative disposition parameters or specific numeric values for insulin_beef. |
| popPK | Bosello_1990 | irrelevant | 0 | 0 | The study focuses on hepatic insulin clearance in obese subjects using endogenous insulin/C-peptide ratios, not the pharmacokinetic parameters of the specific drug insulin_beef. |
| popPK | Chung_2014 | irrelevant | 0 | 0 | The study focuses on an endogenous insulin-like molecule in blue crabs and uses bovine insulin only as a functional probe, not as the subject drug for PK parameter estimation. |
| popPK | Cockram_1985 | irrelevant | 2 | 2 | The study focuses on chemically modified analogs (pheA14 and pheA19) rather than native insulin_beef, and only reports half-disappearance times without a compartmental model or volume parameters. |
| popPK | Deck_2017 | irrelevant | 0 | 0 | The study investigates glucose transporter expression and glycogen content in fish following insulin administration, not the pharmacokinetic disposition parameters (CL, V, etc.) of insulin_beef. |
| popPK | Dyer_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of quinine, not insulin_beef. |
| popPK | Grasso_2007 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study characterizing proteolytic fragments of bovine insulin using mass spectrometry, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Gray_1984 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (metabolic clearance rates) for beef insulin, but the specific numeric values are not present in the provided evidence text. |
| popPK | Gray_1985 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (clearance, distribution space, half-life) for beef insulin, but the specific numeric values are not present in the provided abstract text. |
| popPK | Home_1983 | irrelevant | 2 | 0 | The study focuses on human, porcine, and bovine insulin, with beef insulin only mentioned as a comparator without specific quantitative PK parameters reported for it. |
| popPK | Huber_2020 | irrelevant | 2 | 0 | The study measures whole-body insulin clearance in humans using endogenous insulin, not the specific pharmacokinetic parameters of the drug insulin_beef. |
| popPK | Ince_1982 | irrelevant | 1 | 0 | The study focuses on bovine insulin in rainbow trout (animal model) rather than human population PK, and no quantitative parameter values are present in the provided evidence. |
| popPK | Ince_1983 | relevant | 9 | 2 | The study reports quantitative PK parameters (MCR, Vdist) for bovine insulin in eels, but the specific numeric values are not present in the provided abstract text. |
| popPK | Kaplan_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for veligrotug (an anti-IGF-1R antibody), not insulin_beef. |
| popPK | Kulesh_2022 | irrelevant | 0 | 0 | The study focuses on insulin aspart, not insulin_beef, and does not report parameters for the target drug. |
| popPK | Lahtela_1986 | irrelevant | 0 | 0 | The study investigates the effect of enzyme inducers/inhibitors on insulin-mediated glucose metabolism (MCRg) rather than reporting pharmacokinetic disposition parameters (CL, V, ka) for insulin_beef itself. |
| popPK | Larkins_1983 | irrelevant | 0 | 0 | The paper is a review discussing human insulin and mentions beef insulin only in the context of immunogenicity, without reporting any quantitative pharmacokinetic parameters for insulin_beef. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper studies a novel oral cyclic peptide (COX52-69) and does not report pharmacokinetic parameters for insulin_beef. |
| popPK | Mansell_2017 | irrelevant | 0 | 0 | The study focuses on insulin aspart, not insulin_beef, and does not report parameters for the target drug. |
| popPK | Marmentini_2021 | irrelevant | 2 | 0 | The study uses insulin as a pharmacological agent in tolerance tests and measures its clearance via c-peptide ratios, but does not report standard PK parameters (CL, V, ka) for insulin_beef as a subject drug. |
| popPK | McCall_2007 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of creatine, not insulin_beef, and insulin is only mentioned as a co-administered agent to enhance creatine uptake. |
| popPK | McCarthy_1978 | irrelevant | 0 | 0 | The study investigates the clearance of fructose and glucose, not insulin_beef, and does not report pharmacokinetic parameters for the target drug. |
| popPK | McHugh_2022 | irrelevant | 2 | 0 | The study focuses on the identifiability of hepatic clearance parameters in a metabolic model using generic insulin, not the specific pharmacokinetic disposition parameters (CL, V, etc.) of the drug insulin_beef. |
| popPK | McNeff_1999 | irrelevant | 0 | 0 | The paper describes a chromatographic purification method for removing endotoxins from insulin, not a pharmacokinetic study of insulin disposition. |
| popPK | Meijer_2021 | irrelevant | 2 | 2 | The study measures tissue-specific clearance rates in rats using a radiolabeled tracer, but does not report standard population PK parameters (CL, V, ka) or a compartmental model for insulin_beef. |
| popPK | Najjar_2019 | irrelevant | 0 | 0 | The paper is a review of the mechanisms of hepatic insulin clearance and does not report quantitative pharmacokinetic parameters for insulin_beef. |
| popPK | Nishimura_2021 | irrelevant | 0 | 0 | The study focuses on insulin icodec, not insulin_beef, and does not report PK parameters for the target drug. |
| popPK | Petrov_2022 | irrelevant | 0 | 0 | The study focuses on biphasic insulin aspart 30, not insulin_beef. |
| popPK | Piccinini_2020 | irrelevant | 0 | 0 | The paper is a review of methods for measuring insulin clearance and does not report original quantitative PK parameters for insulin_beef. |
| popPK | Pontiroli_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glucagon, not insulin_beef. |
| popPK | Ramakrishnan_2016 | irrelevant | 0 | 0 | The study focuses on the mechanism of insulin clearance regulation by fenofibrate in mice and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for insulin_beef. |
| popPK | Ramezani_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on amyloid fibrillation inhibition, not a pharmacokinetic study, and reports no disposition parameters for insulin_beef. |
| popPK | Renauld_2003 | irrelevant | 2 | 0 | The study measures insulin distribution space and clearance qualitatively (stating they were "not affected") but does not report specific quantitative PK parameter values for insulin_beef. |
| popPK | Reske-Kunz_1984 | irrelevant | 0 | 0 | The paper studies immunology (IL-2 receptor dynamics on T cells) and does not report pharmacokinetic parameters for insulin_beef. |
| popPK | Sambol_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin, not insulin_beef. |
| popPK | Scheidegger_1990 | irrelevant | 0 | 0 | The text is a general discussion/review of factors influencing insulin pharmacokinetics without reporting any specific quantitative disposition parameters or numeric values for insulin_beef. |
| popPK | Siddik_1987 | irrelevant | 1 | 2 | The study focuses on carboplatin and cisplatin, with insulin mentioned only as a comparator for clearance values, not as the subject drug. |
| popPK | Sodoyez_1984 | irrelevant | 2 | 0 | The study uses 123I-insulin as a diagnostic imaging tracer to assess antibody effects on bioavailability, reporting qualitative scintigraphic observations and binding capacities rather than quantitative compartmental PK parameters (CL, V, ka) for insulin_beef. |
| popPK | Su_2022 | irrelevant | 0 | 0 | The study investigates insulin-like peptides in shrimp and uses bovine insulin as a probe, but does not report pharmacokinetic parameters for insulin_beef. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper focuses on a computational model for glucose-responsive insulin (MK-2640) and regular human insulin, not insulin_beef. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a narrative review on real-world evidence and adherence for insulin and biosimilars, containing no pharmacokinetic parameters or specific data for insulin_beef. |
| PD | Yang_2025 | not_relevant | 1 | 0 | The paper is a narrative review on real-world evidence, adherence, and cost-effectiveness of insulin and biosimilars; it does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
