<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05B&quot;,&quot;href&quot;:&quot;atc/C05B.md&quot;},{&quot;label&quot;:&quot;pentosan polysulfate sodium&quot;}]"></div>

# pentosan polysulfate sodium

- **generic name:** pentosan polysulfate sodium
- **ATC codes:** `C05BA04`, `G04BX15`
- **DrugBank:** [DB00686](https://go.drugbank.com/drugs/DB00686) · **PubChem:** [CID 37720](https://pubchem.ncbi.nlm.nih.gov/compound/37720)
- **molar mass:** 602.497 g/mol (C10H18O21S4) — DrugBank
- **groups:** approved, investigational

## About

Pentosan polysulfate sodium is a heparin-like drug used as an anticoagulant and, in urology, to treat bladder conditions such as interstitial cystitis. It is an approved medicine, used mainly in urological care, and is also being studied for other conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7165276](https://www.wikidata.org/wiki/Q7165276) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pentosan_polysulfate_sodium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: FGF1 (target), FGF2 (target), FGF4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:40 | 0:46 | 0/0/0 | 0/0/0 | 0/0/0 | 19,453/1,074 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 26 matched, 31 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dol_1986.pdf` | Dol F et al., Effect of pentosan polysulphate adminis…, Thrombosis and haemostasis (1986) | popPK | 8 | not captured | [2436330](https://pubmed.ncbi.nlm.nih.gov/2436330) | The study reports the clearance of pentosan polysulfate in humans and provides qualitative time-course data (detectability at 6-8h) but lacks specific numeric PK parameter values (CL, V, t1/2) in the provided text. |
| `MacGregor_1985.pdf` | MacGregor IR et al., Metabolism of sodium pentosan polysulph…, Thrombosis and haemostasis (1985) | popPK | 8 | not captured | [2413564](https://pubmed.ncbi.nlm.nih.gov/2413564) | The study reports pharmacokinetic parameters (clearance, peak plasma concentration) for pentosan polysulfate sodium in humans, but specific numeric values are not provided in the text evidence. |

<sub>queue written 2026-10-06T21:39:52.842086+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akiyama_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytoprotective activity, not a pharmacokinetic study, and pentosan polysulfate is used only as a comparator agent. |
| PD | Akiyama_2000 | not_relevant | 3 | 2 | The paper describes a qualitative cytoprotective effect of pentosan polysulfate in an in vitro assay but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative dose-response curve for the drug. |
| popPK | Cadroy_1987 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Dawes_1986 | irrelevant | 2 | 0 | The study reports qualitative trends in absorption and clearance for pentosan polysulfate but does not provide specific quantitative PK parameters (CL, V, ka, t1/2) in the evidence. |
| popPK | Dellis_2014 | irrelevant | 0 | 0 | The paper is a review of intravesical treatments for bladder pain syndrome and does not report any quantitative pharmacokinetic parameters for pentosan polysulfate sodium. |
| PD | Dellis_2014 | not_relevant | 0 | 0 | The paper is a narrative review focusing on botulinum toxin for bladder pain syndrome and only qualitatively mentions pentosan polysulfate sodium without providing any pharmacodynamic data or numeric parameters. |
| popPK | Dieu_2022 | irrelevant | 0 | 0 | The paper is a cross-sectional ophthalmic imaging study describing retinopathy, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Dieu_2022 | not_relevant | 1 | 0 | The paper is a cross-sectional imaging study describing the prevalence and spectrum of retinopathy in PPS users; it reports exposure metrics (dose/duration) and binary toxicity outcomes but does not provide a quantitative dose-response curve or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Dol_1986 | relevant | 8 | 2 | The study reports the clearance of pentosan polysulfate in humans and provides qualitative time-course data (detectability at 6-8h) but lacks specific numeric PK parameter values (CL, V, t1/2) in the provided text. |
| popPK | Feo_2026 | irrelevant | 0 | 0 | The paper is a retrospective case series on clinical toxicity (maculopathy and colopathy) and does not report any pharmacokinetic parameters. |
| PD | Feo_2026 | not_relevant | 0 | 0 | The paper is a retrospective case series describing clinical associations and toxicity outcomes (maculopathy and colopathy) without reporting any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters. |
| popPK | Forloni_2013 | irrelevant | 0 | 0 | The paper is a review of therapy in prion diseases and mentions pentosan polysulfate only as a compound that reached clinical evaluation, without reporting any pharmacokinetic parameters. |
| popPK | Fung_2026 | irrelevant | 0 | 0 | The paper is a clinical case series regarding retinal toxicity (maculopathy) and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Fung_2026 | not_relevant | 1 | 0 | The paper is a retrospective case series of 3 patients describing clinical toxicity and cumulative dose ranges, but it does not report any quantitative exposure-response relationship, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Gebska_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of heparin binding to apoptotic cells, using pentosan polysulfate only as a competitive inhibitor, and reports no pharmacokinetic parameters. |
| popPK | Goebeler_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of blinatumomab, and pentosan polysulfate is only mentioned as a co-administered agent in a small subset of patients without any PK data reported for it. |
| popPK | Hall_2025 | irrelevant | 0 | 0 | The paper is a clinical review of PPS maculopathy (retinal toxicity) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Hall_2025 | not_relevant | 1 | 0 | The paper is a review discussing the qualitative dose-response relationship and causality of PPS maculopathy but does not provide numeric PD parameters or extractable concentration-effect data. |
| popPK | Honda_2018 | irrelevant | 0 | 0 | The paper focuses on the anti-prion activity of poly-L-histidine, with pentosan polysulfate mentioned only as a background comparator, and contains no pharmacokinetic data. |
| PD | Honda_2018 | not_relevant | 0 | 0 | The paper studies poly-L-histidine, not pentosan polysulfate sodium, and reports an IC50 for the wrong compound. |
| popPK | Leung_2021 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study on retinopathy risk factors and contains no pharmacokinetic parameters. |
| PD | Leung_2021 | not_relevant | 3 | 2 | The paper reports a retrospective association between cumulative dose/duration and the binary outcome of retinopathy, but it does not provide a quantitative exposure-response model, concentration-effect curve, or specific PD parameters (e.g., EC50, Emax). |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for osteoarthritis and dyslipidemia that does not report any pharmacokinetic parameters or disposition data for pentosan polysulfate sodium. |
| PD | Liu_2023 | not_relevant | 0 | 0 | The study is a clinical trial reporting efficacy outcomes (lipid levels, pain scores) without any pharmacokinetic data, exposure measurements, or dose-response modeling. |
| popPK | Ludwig_2020 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of maculopathy risk and does not report any pharmacokinetic parameters for pentosan polysulfate sodium. |
| PD | Ludwig_2020 | not_relevant | 0 | 0 | The study is a retrospective claims analysis assessing the association between drug exposure and clinical outcomes (maculopathy) using Cox proportional hazards models, not a pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| popPK | MacGregor_1985 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (clearance, peak plasma concentration) for pentosan polysulfate sodium in humans, but specific numeric values are not provided in the text evidence. |
| popPK | MacGregor_2004 | irrelevant | 0 | 0 | The paper is a review of vCJD and blood transfusion safety, mentioning pentosan polysulfate only as a potential therapeutic agent without providing any pharmacokinetic data. |
| popPK | Modi_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of warfarin, with pentosan polysulfate sodium acting only as a co-administered agent to test for interactions, not as the subject drug. |
| PD | Modi_2005 | not_relevant | 0 | 0 | The study reports a lack of interaction (no change in PK or PD parameters like INR) but does not provide a concentration-effect curve, Emax, EC50, or any numeric PD model parameters for pentosan polysulfate sodium. |
| popPK | Nickel_2005 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for interstitial cystitis and does not report any pharmacokinetic parameters for pentosan polysulfate sodium. |
| PD | Nickel_2005 | not_relevant | 3 | 2 | The study reports dose-response data (300, 600, 900 mg) but concludes the response is not dose-dependent and does not provide concentration-effect data or fitted PD parameters (Emax, EC50). |
| popPK | Peters_1991 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Philip_2023 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of PPS maculopathy prevalence and dose-dependency, reporting no pharmacokinetic parameters. |
| popPK | Schwedler_1999 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of pentosan polysulfate's effect on cyclosporine-induced nephropathy, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for pentosan polysulfate. |
| popPK | Tao_2025 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of the risk of maculopathy (a safety/toxicity outcome) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study describing the prevalence and imaging findings of PPS-associated maculopathy, not a pharmacokinetic study reporting disposition parameters. |
| PD | Wang_2020 | not_relevant | 3 | 2 | The paper reports a qualitative association between cumulative dose and toxicity severity with threshold values (500g, 1500g) but does not provide a quantitative dose-response curve or numeric PD parameters like Emax or EC50. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
