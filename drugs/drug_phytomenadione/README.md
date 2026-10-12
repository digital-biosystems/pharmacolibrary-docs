<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;phytomenadione&quot;}]"></div>

# phytomenadione

- **generic name:** phytomenadione
- **ATC codes:** `B02BA01`
- **DrugBank:** [DB01022](https://go.drugbank.com/drugs/DB01022) · **PubChem:** [CID 5284607](https://pubchem.ncbi.nlm.nih.gov/compound/5284607)
- **molar mass:** 450.6957 g/mol (C31H46O2) — DrugBank
- **groups:** approved, investigational

## About

Phytomenadione (vitamin K) is used to treat or prevent bleeding problems caused by vitamin K deficiency, such as haemorrhagic disease of newborns and excessive anticoagulant effects. It is an approved medicine and appears on the WHO list of essential medicines, so it is widely available worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q186093](https://www.wikidata.org/wiki/Q186093) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 19:23 | 2:52 | 0/1/0 | 0/0/0 | 0/0/3 | 90,276/3,163 | ollama / qwen3.8:27b-mtp-q8_0 | 13 | 5/8 | 12/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Novotny_2010_reference](drugs/drug_phytomenadione/Phytomenadione_Novotny2010_reference.md) | — | 1-compartment (no model) | 1 | Novotny JA et al., Vitamin K absorption and kinetics in hu…, The British journal of nutr… (2010) | [10.1017/S0007114510001182](https://doi.org/10.1017/S0007114510001182) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **ABCC6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Marinova_2013](drugs/drug_phytomenadione/pgx_Marinova_2013_ABCC6_Q100.md) | Marinova M et al., VKORC1-dependent pharmacokinetics of in…, European journal of clinica… (2013) | [10.1007/s00228-012-1362-y](https://doi.org/10.1007/s00228-012-1362-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP4F2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Marinova_2013](drugs/drug_phytomenadione/pgx_Marinova_2013_CYP4F2_Q100.md) | Marinova M et al., VKORC1-dependent pharmacokinetics of in…, European journal of clinica… (2013) | [10.1007/s00228-012-1362-y](https://doi.org/10.1007/s00228-012-1362-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **VKORC1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Marinova_2013](drugs/drug_phytomenadione/pgx_Marinova_2013_VKORC1_Q100.md) | Marinova M et al., VKORC1-dependent pharmacokinetics of in…, European journal of clinica… (2013) | [10.1007/s00228-012-1362-y](https://doi.org/10.1007/s00228-012-1362-y) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 44 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Mi_2026.pdf` | Mi YN et al., Constant-Speed Intravenous Infusion Mod…, Current drug metabolism (2026) | popPK | 10 | [10.2174/0113892002447026260402063559](https://doi.org/10.2174/0113892002447026260402063559) | [42003058](https://pubmed.ncbi.nlm.nih.gov/42003058) | The study reports quantitative pharmacokinetic parameters (t1/2, CL, Vd) for phylloquinone (phytomenadione) in rats, with all numeric values explicitly provided in the text. |
| `Reddi_1995.pdf` | Reddi K et al., Interleukin 6 production by lipopolysac…, Cytokine (1995) | pd | 4 | [10.1006/cyto.1995.0034](https://doi.org/10.1006/cyto.1995.0034) | [7640347](https://www.ncbi.nlm.nih.gov/pubmed/7640347) | metadata signals extractable PD data (IC50) |
| `Alade_2024.pdf` | Alade AN et al., Cytochrome P450 Family 4F2 and 4F11 Hap…, ACS pharmacology & translat… (2024) | pgx | 5 | [10.1021/acsptsci.3c00287](https://doi.org/10.1021/acsptsci.3c00287) | [38481683](https://www.ncbi.nlm.nih.gov/pubmed/38481683) | metadata signals extractable PGX data (CYP4F2) |
| `Edson_2013.pdf` | Edson KZ et al., Cytochrome P450-dependent catabolism of…, Biochemistry (2013) | pgx | 5 | [10.1021/bi401208m](https://doi.org/10.1021/bi401208m) | [24138531](https://www.ncbi.nlm.nih.gov/pubmed/24138531) | metadata signals extractable PGX data (CYP4F2) |

<sub>queue written 2026-10-05T19:21:05.748377+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Adams_2005 | not_relevant | 2 | 0 | The text is a narrative review summarizing the role of Vitamin K in bone health and arterial calcification; it mentions dose-response studies qualitatively but does not provide specific numeric PD parameters, concentration-effect curves, or model fits for phytomenadione. |
| PGx | Alade_2024 | not_relevant | 0 | 0 | The study focuses on phylloquinone (Vitamin K1) metabolism, whereas the query specifically asks about phytomenadione (Vitamin K2). |
| PGx | Crosier_2009 | not_relevant | 0 | 0 | The study examines baseline vitamin K status (phylloquinone levels) in a general population, not the pharmacokinetics or pharmacodynamics of phytomenadione administration. |
| PGx | Dashti_2014 | not_relevant | 0 | 0 | The study investigates genetic associations with circulating phylloquinone (vitamin K) levels in the general population, not the pharmacokinetics or pharmacodynamics of phytomenadione as a therapeutic drug. |
| PGx | Edson_2013 | not_relevant | 5 | 2 | The paper studies MK4 (menaquinone-4) metabolism, not phytomenadione (vitamin K1), and reports in vitro/correlative data rather than a fitted pharmacokinetic effect size for the specific drug. |
| PD | Ghavami_2026 | not_relevant | 2 | 1 | The paper reports in vitro IC50 values and in vivo tumor volume outcomes, but does not provide a concentration-effect or dose-response curve, nor does it link exposure to effect with numeric PD parameters (e.g., Emax, EC50 in vivo, slope) for phytomenadione. |
| PD | Haghighat_2025 | not_relevant | 2 | 1 | The paper is a meta-analysis of epidemiological data on dietary intake and fracture risk, not a pharmacodynamic study of phytomenadione exposure or dose-response with numeric PD parameters like Emax or EC50. |
| PD | Hao_2017 | not_relevant | 2 | 1 | The paper is a meta-analysis of epidemiological studies examining the association between dietary intake and fracture risk, not a pharmacodynamic study measuring drug concentration or dose-response in a biological system with PD parameters like Emax or EC50. |
| PGx | Holden_2010 | not_relevant | 2 | 5 | The paper reports an association between Apolipoprotein E genotype and PIVKA-II levels, but does not report a pharmacogenomic effect on the PK/PD of phytomenadione (Vitamin K1) administration. |
| popPK | Hollinger_1993 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for brodifacoum, not phytomenadione, which is only mentioned as a treatment agent. |
| PD | Jadhav_2022 | not_relevant | 2 | 0 | The paper is a synthetic review discussing mechanisms and clinical trials but does not present original data or specific numeric PD parameters (Emax, EC50) for phytomenadione. |
| PD | Kim_1999 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, data, or analysis regarding phytomenadione or pharmacodynamics. |
| PGx | Kohlmeier_1996 | not_relevant | 5 | 2 | The paper discusses phylloquinone (Vitamin K1), not phytomenadione (Vitamin K2), and reports qualitative associations with ApoE variants rather than fitted pharmacokinetic effect sizes. |
| PGx | Margier_2021 | not_relevant | 5 | 8 | The study investigates the role of the ABCB1 transporter in vitamin K (phytomenadione) absorption using cell lines and knockout mice, but it does not report a pharmacogenomic effect based on human genetic variants or genotypes. |
| popPK | Mateu-Fabregat_2026 | irrelevant | 0 | 0 | The paper is an epidemiological study on the association between dietary phylloquinone intake and neurodevelopmental outcomes, not a pharmacokinetic study. |
| PGx | Newman_2002 | not_relevant | 2 | 5 | The paper studies the cellular uptake mechanism of phylloquinone (vitamin K1) and the role of apoE isoforms, but it does not report a pharmacokinetic or pharmacodynamic effect of a gene variant on the drug phytomenadione (vitamin K3). |
| PGx | Reboul_2023 | not_relevant | 0 | 0 | The paper is a review of transport proteins for fat-soluble vitamins and does not report pharmacogenomic effects on phytomenadione PK/PD parameters. |
| PD | Schlagheck_1997 | not_relevant | 0 | 0 | The paper studies the dose-response of olestra on nutrient absorption, not the pharmacodynamics of phytomenadione itself. |
| PD | Shearer_1976 | not_relevant | 0 | 0 | The paper investigates the dose-response relationship between warfarin and phylloquinone metabolism, not the pharmacodynamic effect of phytomenadione (vitamin K1) itself. |
| PD | Shetty_1989 | not_relevant | 1 | 0 | The text is a qualitative review of warfarin pharmacokinetics and mentions phytomenadione only in the context of overdose management duration, without providing any numeric PD parameters or exposure-response data. |
| PGx | Sogabe_2007 | not_relevant | 0 | 0 | The study investigates the pharmacodynamics of Vitamin K (specifically MK-7) and osteocalcin carboxylation, not the pharmacokinetics or pharmacodynamics of the drug phytomenadione (Vitamin K1). |
| popPK | Solis-Trapala_2015 | irrelevant | 0 | 0 | The study is a cross-sectional analysis of bone metabolism and body composition where phylloquinone is used as a biomarker, not a pharmacokinetic study reporting disposition parameters. |
| PD | Truong_2012 | not_relevant | 0 | 0 | The paper is a clinical case report regarding the management of warfarin therapy during travel; it mentions phytonadione only as a contingency plan that was not used, and contains no pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| PD | Wang_2021 | not_relevant | 0 | 0 | The paper is an epidemiological cohort study analyzing dietary intake quintiles and cancer risk, not a pharmacodynamic study of phytomenadione (vitamin K1) exposure-response or dose-response with numeric PD parameters. |
| PD | White_2017 | not_relevant | 0 | 0 | The paper models the dose-response relationship for soybean oil (a food matrix component) on the bioavailability of phylloquinone, not the pharmacodynamic or exposure-response relationship of the drug phytomenadione itself. |
| popPK | Xue_2023 | irrelevant | 0 | 0 | The study focuses on warfarin pharmacokinetics and the relationship between vitamin K concentrations and warfarin variability, rather than reporting quantitative disposition parameters (CL, V, etc.) for phytomenadione itself. |
| PD | Xue_2023 | not_relevant | 4 | 2 | The paper investigates the effect of vitamin K (phytomenadione) on warfarin PK/PD parameters (like EC50) but does not report a direct concentration-effect relationship or numeric PD parameters for phytomenadione itself. |
| PD | Yu_2021 | not_relevant | 0 | 0 | The paper is an epidemiological study assessing dietary intake and cancer risk using hazard ratios, not a pharmacodynamic study measuring drug concentration or dose-response relationships for phytomenadione. |
| PD | Zhang_2024 | not_relevant | 1 | 0 | The paper is a general clinical review of Vitamin K2 that qualitatively discusses the need for dose-response research but does not report any specific numeric PD parameters or exposure-response models for phytomenadione. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 16 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The provided text is only a conference title and contains no data, analysis, or parameters regarding phytomenadione pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 19:21 UTC</sub>
