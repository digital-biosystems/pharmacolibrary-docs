<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02A&quot;,&quot;href&quot;:&quot;atc/B02A.md&quot;},{&quot;label&quot;:&quot;alfa1 antitrypsin&quot;}]"></div>

# alfa1 antitrypsin

- **generic name:** alfa1 antitrypsin
- **ATC codes:** `B02AB02`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 14:35 | 1:23 | 0/0/0 | 0/0/0 | 0/0/0 | 14,640/814 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 3/3 | 5/2 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 8 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2023.pdf` | Li Z et al., Evaluation of body weight-based dosing,…, Pulmonary pharmacology & th… (2023) | popPK | 10 | [10.1016/j.pupt.2023.102265](https://doi.org/10.1016/j.pupt.2023.102265) | [37923165](https://pubmed.ncbi.nlm.nih.gov/37923165) | The paper describes a population PK model for alfa1-antitrypsin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |

<sub>queue written 2026-09-16T14:35:51.922932+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amiot_2015 | irrelevant | 0 | 0 | The paper is a review of protein-losing enteropathy where alpha-1 antitrypsin is used as a diagnostic marker (fecal clearance) rather than as a subject drug for pharmacokinetic modeling. |
| popPK | Amitani_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme effects on epithelium where alpha-1-antitrypsin is used only as a neutralizing agent, with no pharmacokinetic parameters reported. |
| popPK | Bai_1991 | irrelevant | 0 | 0 | The study uses alpha-1-antitrypsin as a diagnostic marker for intestinal protein loss (clearance test) rather than reporting pharmacokinetic disposition parameters for the drug alfa1-antitrypsin. |
| popPK | Barker_2025 | irrelevant | 0 | 0 | The paper is a clinical review of non-cystic fibrosis bronchiectasis and does not report any pharmacokinetic parameters for alfa1-antitrypsin. |
| popPK | Chiarla_1988 | irrelevant | 0 | 0 | The study focuses on branched-chain amino acid TPN therapy and measures alpha-1-antitrypsin only as a hepatic acute-phase protein marker, not as a subject drug for pharmacokinetic parameter estimation. |
| popPK | De_2024 | irrelevant | 0 | 0 | The paper focuses on the mechanism of ER-phagy and protein misfolding in ER storage disorders, not on the pharmacokinetics of alfa1-antitrypsin. |
| popPK | Duarte_1994 | irrelevant | 2 | 2 | The study measures fecal loss and clearance of alpha-1-antitrypsin as a biomarker for intestinal permeability in children, rather than characterizing the systemic pharmacokinetic disposition (e.g., plasma clearance, volume of distribution) of the drug alfa1-antitrypsin. |
| popPK | Florent_1981 | irrelevant | 1 | 0 | The paper uses alpha-1-antitrypsin as a diagnostic marker for protein-losing enteropathy rather than studying its pharmacokinetic disposition parameters (CL, V, t1/2) as a subject drug. |
| popPK | Grill_1983 | irrelevant | 2 | 0 | The study reports qualitative findings and statistical comparisons of intestinal clearance but does not provide specific numeric PK parameter values (e.g., CL in L/day, V, t1/2) in the evidence. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses the myth of iodine allergy in nuclear medicine and does not contain any pharmacodynamic or exposure-response data for alpha-1 antitrypsin. |
| popPK | Hogg_2004 | irrelevant | 0 | 0 | The paper is a pathophysiology review of COPD and does not report any pharmacokinetic parameters for alfa1 antitrypsin. |
| popPK | Karbach_1985 | irrelevant | 0 | 0 | The study uses alpha-1-antitrypsin as a diagnostic marker for intestinal protein loss in Crohn's disease, not as a subject drug for pharmacokinetic parameter estimation. |
| popPK | Kaslik_1999 | irrelevant | 0 | 0 | The paper is a structural/biochemical NMR study of the interaction between alpha1-proteinase inhibitor and trypsin, not a pharmacokinetic study of the drug alfa1-antitrypsin. |
| PD | Kaslik_1999 | not_relevant | 0 | 0 | The paper reports structural and biochemical properties (pKa, NMR signal characteristics) of a trypsin inhibitor complex, not a pharmacodynamic exposure-response or dose-response relationship for the drug. |
| popPK | Li_2023 | relevant | 10 | 0 | The paper describes a population PK model for alfa1-antitrypsin, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Lin_2018 | irrelevant | 0 | 0 | The paper is a case report on ginseng-induced liver injury where alpha-1 antitrypsin is only mentioned as a normal diagnostic serology test, not as a subject drug for PK analysis. |
| popPK | Lu_2025 | irrelevant | 0 | 0 | The study is a mechanistic investigation of pioglitazone's effect on protein accumulation in AATD models, not a pharmacokinetic study of alfa1-antitrypsin, and reports no PK parameters. |
| popPK | Molmenti_1993 | irrelevant | 0 | 0 | The paper is a mechanistic study on the tissue expression of alpha-1-antitrypsin mRNA in enterocytes and Paneth cells, containing no pharmacokinetic parameters. |
| popPK | Parfenov_2017 | irrelevant | 0 | 0 | The paper discusses protein-losing enteropathy and uses fecal alpha-1-antitrypsin clearance as a diagnostic marker for protein loss, not as a pharmacokinetic study of the drug alfa1_antitrypsin. |
| popPK | Quigley_1987 | irrelevant | 0 | 0 | The study evaluates faecal alpha-1-antitrypsin as a diagnostic marker for intestinal protein loss, not as a pharmacokinetic subject drug, and does not report PK parameters like clearance or volume. |
| popPK | Sanges_2022 | irrelevant | 0 | 0 | The provided text describes immunological data (CD4 T cell subsets) in CVID/PLE patients and contains no pharmacokinetic parameters or mention of alfa1_antitrypsin. |
| popPK | Sharma_2024 | irrelevant | 0 | 0 | The paper is a materials science study on the hemocompatibility of magnetic nanoparticles, where alpha-1 antitrypsin is only mentioned as a plasma protein adsorbing to the surface, not as a drug subject to pharmacokinetic analysis. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 7 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a conference tag (EANM'17) and contains no information regarding alfa1_antitrypsin, pharmacodynamics, or exposure-response relationships. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 68 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of alfa1_antitrypsin pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
