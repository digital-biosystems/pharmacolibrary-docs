<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05B&quot;,&quot;href&quot;:&quot;atc/C05B.md&quot;},{&quot;label&quot;:&quot;Pentosan polysulfate&quot;}]"></div>

# Pentosan polysulfate

- **generic name:** Pentosan polysulfate
- **ATC codes:** `C05BA04`, `G04BX15`
- **DrugBank:** [DB00686](https://go.drugbank.com/drugs/DB00686) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Pentosan polysulfate is a urological drug used to treat interstitial cystitis, and is also applied topically as a vasoprotective agent. It is an approved medicine, and is also being studied for other uses; it is additionally known as a treatment for joint disease in animals.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72500089](https://www.wikidata.org/wiki/Q72500089) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:39 | 1:41 | 0/0/0 | 0/0/1 | 0/0/0 | 40,085/1,666 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). Primary extraction retained.">cross-check: disputed</span> | [Philip_2023_PPS_maculopathy](drugs/drug_pentosan_polysulfate/pd_Philip_2023_PPS_maculopathy.md) | PPS-maculopathy ← pentosan polysulfate sodium · categorical (graded) response model | — | Philip AM et al., Prevalence and Dose Dependency Analysis…, Ophthalmic epidemiology (2023) | [10.1080/09286586.2022.2031227](https://doi.org/10.1080/09286586.2022.2031227) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 37 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Dawes_1986.pdf` | Dawes J et al., Absorption of heparin, LMW heparin and…, Thrombosis research (1986) | popPK | 8 | [10.1016/0049-3848(86)90169-6](https://doi.org/10.1016/0049-3848(86)90169-6) | [2433788](https://pubmed.ncbi.nlm.nih.gov/2433788) | The study reports qualitative PK patterns (absorption efficiency, clearance trends) for pentosan polysulfate in humans, but specific numeric parameter values (CL, V, ka) are not present in the provided text. |
| `MacGregor_1985.pdf` | MacGregor IR et al., Metabolism of sodium pentosan polysulph…, Thrombosis and haemostasis (1985) | popPK | 8 | not captured | [2413564](https://pubmed.ncbi.nlm.nih.gov/2413564) | The study reports pharmacokinetic parameters (clearance, peak plasma concentration) for pentosan polysulfate in humans, but specific numeric values are not provided in the text evidence. |
| `Becker_2003.pdf` | Becker M et al., Inhibition of PMN-elastase activity by…, Thrombosis and haemostasis (2003) | pd | 4 | not captured | [12719790](https://www.ncbi.nlm.nih.gov/pubmed/12719790) | metadata signals extractable PD data (IC50) |
| `Clark_1997.pdf` | Clark DL et al., Saccharide anions as inhibitors of the…, Glycoconjugate journal (1997) | pd | 4 | [10.1023/a:1018551518610](https://doi.org/10.1023/a:1018551518610) | [9249145](https://www.ncbi.nlm.nih.gov/pubmed/9249145) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T21:38:45.527495+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akiyama_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytoprotective activity, not a pharmacokinetic study, and pentosan polysulfate is used only as a comparator agent. |
| popPK | Andrei_1992 | irrelevant | 0 | 0 | The paper is an in-vitro virology study evaluating antiviral activity (IC50) and does not report any pharmacokinetic parameters for pentosan polysulfate. |
| popPK | Becker_2003 | irrelevant | 0 | 0 | no_text gate: only 68 chars of text extracted (&lt; 400) |
| PD | Becker_2003 | not_relevant | 0 | 0 | The paper focuses on semisynthetic glucan sulfates and does not report pharmacodynamic or exposure-response data for Pentosan polysulfate. |
| popPK | Cadroy_1987 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Clark_1997 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on antimalarial activity and does not report any pharmacokinetic parameters for pentosan polysulfate. |
| popPK | Dawes_1986 | relevant | 8 | 2 | The study reports qualitative PK patterns (absorption efficiency, clearance trends) for pentosan polysulfate in humans, but specific numeric parameter values (CL, V, ka) are not present in the provided text. |
| popPK | Dol_1986 | irrelevant | 4 | 0 | The study describes a bioassay for PPS and mentions clearance studies in humans, but no quantitative PK parameter values (CL, V, t1/2) are provided in the evidence. |
| popPK | Forloni_2013 | irrelevant | 0 | 0 | The paper is a review of therapy in prion diseases and mentions pentosan polysulfate only as a compound that reached clinical evaluation, without reporting any pharmacokinetic parameters. |
| popPK | Gebska_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of heparin binding to apoptotic cells, using pentosan polysulfate only as a competitive inhibitor, and reports no pharmacokinetic parameters. |
| popPK | Goebeler_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and efficacy of blinatumomab, with pentosan polysulfate used only as a co-administered agent for cytokine mitigation without reporting its PK parameters. |
| PD | Goebeler_2016 | not_relevant | 0 | 0 | The paper focuses on Blinatumomab; Pentosan polysulfate is only mentioned as a co-administered agent for a small subset of patients to mitigate neurologic events, with no PD or exposure-response analysis reported for it. |
| popPK | Hall_2025 | irrelevant | 0 | 0 | The paper is a clinical review of PPS maculopathy (retinal toxicity) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Hall_2025 | not_relevant | 2 | 0 | The paper is a review discussing the qualitative dose-response relationship and causality of PPS maculopathy but does not provide numeric PD parameters or extractable concentration-effect data. |
| popPK | Honda_2018 | irrelevant | 0 | 0 | The paper focuses on the anti-prion activity of poly-L-histidine, with pentosan polysulfate mentioned only as a background comparator, and contains no pharmacokinetic data. |
| PD | Honda_2018 | not_relevant | 0 | 0 | The paper studies Poly-L-histidine, not Pentosan polysulfate, and only mentions the latter as a previous example without providing specific PD parameters for it. |
| popPK | Kim_2012 | irrelevant | 0 | 0 | The study is an in-vitro virology assay examining the antiviral activity of p-KG03, with pentosan polysulfate used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Kim_2012 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity for p-KG03 and only mentions pentosan polysulfate as a comparator without providing specific numeric PD parameters or dose-response data for it. |
| popPK | Lee_2006 | irrelevant | 0 | 0 | The study evaluates the antiviral efficacy of pentosan polysulfate in vitro and in vivo, but does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Ludwig_2020 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of maculopathy risk and does not report any pharmacokinetic parameters for pentosan polysulfate. |
| PD | Ludwig_2020 | not_relevant | 0 | 0 | The study is a retrospective claims analysis assessing the association between drug exposure and clinical outcomes (maculopathy) using Cox models, not a pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| popPK | MacGregor_1985 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (clearance, peak plasma concentration) for pentosan polysulfate in humans, but specific numeric values are not provided in the text evidence. |
| popPK | MacGregor_2004 | irrelevant | 0 | 0 | The paper is a review of vCJD transmission risks and mentions pentosan polysulfate only as a potential therapeutic agent in clinical trials, without reporting any pharmacokinetic parameters. |
| popPK | Modi_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of warfarin, with pentosan polysulfate acting only as a co-administered agent to test for interactions, not as the subject drug. |
| PD | Modi_2005 | not_relevant | 0 | 0 | The study reports a lack of interaction (no change in PK or PD parameters like INR) but does not provide a concentration-effect curve, Emax, EC50, or any numeric PD model parameters for pentosan polysulfate. |
| popPK | Nakashima_1990 | irrelevant | 0 | 0 | The paper reports in-vitro antiviral activity (IC50 values) of pentosan polysulfate, not pharmacokinetic disposition parameters. |
| popPK | Peters_1991 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Philip_2023 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of PPS maculopathy prevalence and dose-dependency, reporting no pharmacokinetic parameters. |
| popPK | Schamhart_1997 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell adhesion and proliferation, not a pharmacokinetic study, and contains no PK parameters for pentosan polysulfate. |
| popPK | Schwedler_1999 | irrelevant | 0 | 0 | The study is a pharmacodynamic/toxicology investigation of pentosan polysulfate's effect on cyclosporine-induced nephropathy in rats, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for pentosan polysulfate. |
| popPK | Tao_2025 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of the risk of maculopathy (a safety/toxicity outcome) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Teruya_2009 | not_relevant | 0 | 0 | The paper discusses the therapeutic efficacy of pentosan polysulfate in prion diseases but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Zhang_1999 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral activity study of pentosan polysulfate against HHV-7 and does not report any pharmacokinetic parameters. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| PD | Zhang_2022 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| popPK | Zugmaier_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of angiogenesis inhibition and does not report any pharmacokinetic parameters for pentosan polysulfate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
