<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05B&quot;,&quot;href&quot;:&quot;atc/C05B.md&quot;},{&quot;label&quot;:&quot;pentosan polysulfate sodium&quot;}]"></div>

# pentosan polysulfate sodium

- **generic name:** pentosan polysulfate sodium
- **ATC codes:** `C05BA04`, `G04BX15`
- **DrugBank:** [DB00686](https://go.drugbank.com/drugs/DB00686) · **PubChem:** [CID 37720](https://pubchem.ncbi.nlm.nih.gov/compound/37720)
- **molar mass:** 602.497 g/mol (C10H18O21S4) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Pentosan polysulfate is a sulfated pentosyl polysaccharide with heparin-like properties.

**Indication.** For the relief of bladder pain or discomfort associated with interstitial cystitis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 10:09 | 1:52 | 0/0/0 | 0/0/0 | 0/0/0 | 2,102/206 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pentosan_polysulfate_sodium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: FGF1 (target), FGF2 (target), FGF4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 31 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dawes_1986.pdf` | Dawes J et al., Absorption of heparin, LMW heparin and…, Thrombosis research (1986) | popPK | 8 | [10.1016/0049-3848(86)90169-6](https://doi.org/10.1016/0049-3848(86)90169-6) | [2433788](https://pubmed.ncbi.nlm.nih.gov/2433788) | The study reports PK parameters (AUC, Tmax) for pentosan polysulfate, but specific numeric values are not present in the provided text. |
| `Dol_1986.pdf` | Dol F et al., Effect of pentosan polysulphate adminis…, Thrombosis and haemostasis (1986) | popPK | 8 | not captured | [2436330](https://pubmed.ncbi.nlm.nih.gov/2436330) | The study reports on the clearance of pentosan polysulfate sodium in humans, but the evidence only provides qualitative detection times (e.g., detectable at 8h) and lacks specific numeric PK parameter values like CL, V, or half-life. |
| `MacGregor_1985.pdf` | MacGregor IR et al., Metabolism of sodium pentosan polysulph…, Thrombosis and haemostasis (1985) | popPK | 8 | not captured | [2413564](https://pubmed.ncbi.nlm.nih.gov/2413564) | The study is a human PK study of pentosan polysulfate sodium reporting clearance and concentration-dose relationships, but specific numeric parameter values (e.g., CL, V, t1/2) are not explicitly listed in the provided text. |

<sub>queue written 2026-09-30T10:09:16.496883+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akiyama_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytoprotective activity, not a pharmacokinetic study, and pentosan polysulfate is used only as a comparator agent. |
| PD | Akiyama_2000 | not_relevant | 3 | 2 | The paper describes a qualitative cytoprotective effect of pentosan polysulfate in an in vitro assay but does not provide numeric PD parameters (e.g., IC50, Emax) or a quantitative dose-response curve for the drug. |
| popPK | Cadroy_1987 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Dawes_1986 | relevant | 8 | 2 | The study reports PK parameters (AUC, Tmax) for pentosan polysulfate, but specific numeric values are not present in the provided text. |
| popPK | Dellis_2014 | irrelevant | 0 | 0 | The paper is a review of intravesical treatments for bladder pain syndrome and does not report any quantitative pharmacokinetic parameters for pentosan polysulfate sodium. |
| PD | Dellis_2014 | not_relevant | 0 | 0 | The paper is a narrative review focusing on botulinum toxin for bladder pain syndrome and only qualitatively mentions pentosan polysulfate sodium without providing any pharmacodynamic data or numeric parameters. |
| popPK | Dieu_2022 | irrelevant | 0 | 0 | The paper is a cross-sectional ophthalmic imaging study describing retinopathy, not a pharmacokinetic study, and contains no PK parameters. |
| PD | Dieu_2022 | not_relevant | 1 | 0 | The paper is a cross-sectional imaging study describing the prevalence and spectrum of retinopathy in PPS users; it reports exposure metrics (dose/duration) and binary toxicity outcomes but does not provide a quantitative dose-response curve or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Dol_1986 | relevant | 8 | 2 | The study reports on the clearance of pentosan polysulfate sodium in humans, but the evidence only provides qualitative detection times (e.g., detectable at 8h) and lacks specific numeric PK parameter values like CL, V, or half-life. |
| popPK | Feo_2026 | irrelevant | 0 | 0 | The paper is a retrospective case series on clinical toxicity (maculopathy and colopathy) and does not report any pharmacokinetic parameters. |
| PD | Feo_2026 | not_relevant | 0 | 0 | The paper is a retrospective case series describing clinical associations and toxicity outcomes (maculopathy and colopathy) without reporting any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters. |
| popPK | Forloni_2013 | irrelevant | 0 | 0 | The paper is a review of therapy in prion diseases and mentions pentosan polysulfate only as a compound that reached clinical evaluation, without reporting any pharmacokinetic parameters or numeric values. |
| popPK | Fung_2026 | irrelevant | 0 | 0 | The paper is a clinical case series regarding retinal toxicity (maculopathy) and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Fung_2026 | not_relevant | 1 | 0 | The paper is a retrospective case series of 3 patients describing clinical toxicity and cumulative dose ranges, but it does not report any quantitative exposure-response relationship, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Gebska_2002 | irrelevant | 0 | 0 | The paper is a mechanistic study on cell death and heparin binding, using pentosan polysulfate only as a competitive inhibitor, and contains no pharmacokinetic parameters. |
| popPK | Goebeler_2016 | irrelevant | 0 | 0 | The study focuses on blinatumomab, and pentosan polysulfate is only a co-administered agent for neurotoxicity mitigation without PK parameters reported. |
| popPK | Hall_2025 | irrelevant | 0 | 0 | The paper is a clinical review of PPS maculopathy (retinal toxicity) and does not report any pharmacokinetic parameters or quantitative disposition data. |
| PD | Hall_2025 | not_relevant | 1 | 0 | The paper is a review discussing the qualitative dose-response relationship and causality of PPS maculopathy but does not provide numeric PD parameters or extractable concentration-effect data. |
| popPK | Honda_2018 | irrelevant | 0 | 0 | The paper focuses on the anti-prion activity of poly-L-histidine, with pentosan polysulfate mentioned only as a background comparator, and contains no pharmacokinetic data. |
| PD | Honda_2018 | not_relevant | 0 | 0 | The paper studies poly-L-histidine, not pentosan polysulfate sodium, and reports an IC50 for the wrong compound. |
| popPK | Leung_2021 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study on retinopathy risk factors and contains no pharmacokinetic parameters. |
| PD | Leung_2021 | not_relevant | 3 | 2 | The paper reports a retrospective association between cumulative dose/duration and the binary outcome of retinopathy, but it does not provide a quantitative exposure-response model, concentration-effect curve, or specific PD parameters (e.g., EC50, Emax). |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for osteoarthritis and dyslipidemia that does not report any pharmacokinetic parameters or disposition data for pentosan polysulfate sodium. |
| PD | Liu_2023 | not_relevant | 0 | 0 | The study is a clinical trial reporting efficacy outcomes (lipid levels, pain scores) without any pharmacokinetic data, exposure measurements, or dose-response modeling. |
| popPK | Ludwig_2020 | irrelevant | 0 | 0 | The study is a retrospective claims database analysis investigating the association between PPS use and maculopathy, reporting no pharmacokinetic parameters. |
| PD | Ludwig_2020 | not_relevant | 0 | 0 | The study is a retrospective claims analysis assessing the association between drug exposure and clinical outcomes (maculopathy) using Cox proportional hazards models, not a pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| popPK | MacGregor_1985 | relevant | 8 | 2 | The study is a human PK study of pentosan polysulfate sodium reporting clearance and concentration-dose relationships, but specific numeric parameter values (e.g., CL, V, t1/2) are not explicitly listed in the provided text. |
| popPK | MacGregor_2004 | irrelevant | 0 | 0 | The paper is a review of vCJD and blood transfusion safety, mentioning pentosan polysulfate only as a potential therapeutic agent without reporting any pharmacokinetic parameters. |
| popPK | Modi_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of warfarin, with pentosan polysulfate sodium serving only as a co-administered agent to test for interactions, rather than being the subject drug for PK parameter extraction. |
| PD | Modi_2005 | not_relevant | 0 | 0 | The study reports a lack of interaction (no change in PK or PD parameters like INR) but does not provide a concentration-effect curve, Emax, EC50, or any numeric PD model parameters for pentosan polysulfate sodium. |
| popPK | Nickel_2005 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for interstitial cystitis and does not report any pharmacokinetic parameters for pentosan polysulfate sodium. |
| PD | Nickel_2005 | not_relevant | 3 | 2 | The study reports dose-response data (300, 600, 900 mg) but concludes the response is not dose-dependent and does not provide concentration-effect data or fitted PD parameters (Emax, EC50). |
| popPK | Peters_1991 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Philip_2023 | irrelevant | 0 | 0 | The paper is a retrospective ophthalmology study on PPS maculopathy prevalence and dose-dependency, reporting no pharmacokinetic parameters. |
| popPK | Schwedler_1999 | irrelevant | 0 | 0 | The study is a mechanistic/toxicology investigation of pentosan polysulfate's effect on cyclosporine-induced nephropathy and does not report pharmacokinetic parameters for pentosan polysulfate. |
| popPK | Tao_2025 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of the risk of maculopathy (a safety/toxicity outcome) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper is a clinical ophthalmology study describing the prevalence and imaging findings of PPS-associated maculopathy, not a pharmacokinetic study reporting disposition parameters. |
| PD | Wang_2020 | not_relevant | 3 | 2 | The paper reports a qualitative association between cumulative dose and toxicity severity with threshold values (500g, 1500g) but does not provide a quantitative dose-response curve or numeric PD parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
