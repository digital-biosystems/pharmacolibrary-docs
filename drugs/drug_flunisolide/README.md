<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;flunisolide&quot;}]"></div>

# flunisolide

- **generic name:** flunisolide
- **ATC codes:** `R01AD04`, `R03BA03`
- **DrugBank:** [DB00180](https://go.drugbank.com/drugs/DB00180) · **PubChem:** [CID 82153](https://pubchem.ncbi.nlm.nih.gov/compound/82153)
- **molar mass:** 434.4977 g/mol (C24H31FO6) — DrugBank
- **groups:** approved

## About

Flunisolide is a corticosteroid used to treat allergic rhinitis and other obstructive airway conditions such as asthma. It is an approved drug, available as nasal and inhaled preparations, though not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3746835](https://www.wikidata.org/wiki/Q3746835) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 12:19 | 4:12 | 0/0/0 | 1/3/0 | 0/0/0 | 61,362/4,696 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dirks_2008_AP_1](drugs/drug_flunisolide/pd_Dirks_2008_AP_1.md) | Transrepression of AP-1 ← flunisolide · direct sigmoid Emax (Hill) effect | — | Dirks NL et al., Transrepression and transactivation pot…, Die Pharmazie (2008) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dirks_2008_GRE](drugs/drug_flunisolide/pd_Dirks_2008_GRE.md) | Transactivation via GRE ← flunisolide · direct sigmoid Emax (Hill) effect | — | Dirks NL et al., Transrepression and transactivation pot…, Die Pharmazie (2008) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dirks_2008_NF_jB](drugs/drug_flunisolide/pd_Dirks_2008_NF_jB.md) | Transrepression of NF-jB ← flunisolide · direct sigmoid Emax (Hill) effect | — | Dirks NL et al., Transrepression and transactivation pot…, Die Pharmazie (2008) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Derendorf_2000_CCS](drugs/drug_flunisolide/pd_Derendorf_2000_CCS.md) | cumulative suppression of endogenous cortisol release ← flunisolide · direct Emax (saturable) effect | — | Derendorf H et al., Optimized therapeutic ratio of inhaled…, Die Pharmazie (2000) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Krishnaswami_2000_CCS](drugs/drug_flunisolide/pd_Krishnaswami_2000_CCS.md) | cumulative cortisol suppression ← flunisolide · direct Emax (saturable) effect | — | Krishnaswami S et al., An interactive algorithm for the assess…, AAPS pharmSci (2000) | [10.1208/ps020322](https://doi.org/10.1208/ps020322) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Meibohm_1999_CCS](drugs/drug_flunisolide/pd_Meibohm_1999_CCS.md) | cumulative cortisol suppression (endogenous cortisol release) ← flunisolide · indirect response — drug inhibits the production of cumulative cortisol suppression (endogenous cortisol release) | — | Meibohm B et al., A pharmacokinetic/pharmacodynamic appro…, Journal of pharmacokinetics… (1999) | [10.1023/a:1020670421957](https://doi.org/10.1023/a:1020670421957) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=flunisolide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: NR3C1 (target), SERPINA6 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 36 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Möllmann_1997.pdf` | Möllmann H et al., Pharmacokinetic/pharmacodynamic evaluat…, Journal of clinical pharmac… (1997) | popPK | 8 | [10.1002/j.1552-4604.1997.tb04263.x](https://doi.org/10.1002/j.1552-4604.1997.tb04263.x) | [9505980](https://pubmed.ncbi.nlm.nih.gov/9505980) | Human PK/PD study of flunisolide after inhalation with a compartmental/PK-PD model, but only Cmax and half-life values appear in the abstract; CL/V and model parameters are not shown in the provided evidence. |
| `Derendorf_2000.pdf` | Derendorf H et al., Optimized therapeutic ratio of inhaled…, Die Pharmazie (2000) | pd | 5 | not captured | [10756545](https://www.ncbi.nlm.nih.gov/pubmed/10756545) | metadata signals extractable PD data (PK/PD) |
| `Krishnaswami_2000.pdf` | Krishnaswami S et al., An interactive algorithm for the assess…, AAPS pharmSci (2000) | pd | 5 | [10.1208/ps020322](https://doi.org/10.1208/ps020322) | [11741238](https://www.ncbi.nlm.nih.gov/pubmed/11741238) | metadata signals extractable PD data (PK/PD) |
| `Meibohm_1999.pdf` | Meibohm B et al., A pharmacokinetic/pharmacodynamic appro…, Journal of pharmacokinetics… (1999) | pd | 5 | [10.1023/a:1020670421957](https://doi.org/10.1023/a:1020670421957) | [10567952](https://www.ncbi.nlm.nih.gov/pubmed/10567952) | metadata signals extractable PD data (PK/PD) |
| `Hagan_1998.pdf` | Hagan JB et al., Inhibition of interleukin-5 mediated eo…, Clinical and experimental a… (1998) | pd | 4 | [10.1046/j.1365-2222.1998.00363.x](https://doi.org/10.1046/j.1365-2222.1998.00363.x) | [9756205](https://www.ncbi.nlm.nih.gov/pubmed/9756205) | metadata signals extractable PD data (IC50) |
| `Moore_2013.pdf` | Moore CD et al., Metabolic pathways of inhaled glucocort…, Drug metabolism and disposi… (2013) | pgx | 7 | [10.1124/dmd.112.046318](https://doi.org/10.1124/dmd.112.046318) | [23143891](https://www.ncbi.nlm.nih.gov/pubmed/23143891) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-13T12:18:40.168707+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bousquet_2002 | irrelevant | 0 | 0 | This is a meta-analysis of clinical efficacy (dose-response) for inhaled corticosteroids and does not report any pharmacokinetic parameters for flunisolide. |
| popPK | Brogden_1984 | irrelevant | 0 | 0 | The paper is a review of beclomethasone dipropionate, and flunisolide is only mentioned as a comparator agent without any pharmacokinetic data. |
| popPK | Bryson_1992 | irrelevant | 0 | 0 | The paper is a review of fluticasone propionate, where flunisolide is mentioned only as a comparator drug, and no PK parameters for flunisolide are reported. |
| popPK | Clissold_1984 | irrelevant | 0 | 0 | The paper is a review of budesonide where flunisolide is mentioned only as a comparator, and no pharmacokinetic parameters for flunisolide are reported. |
| popPK | Derendorf_1997 | irrelevant | 2 | 0 | The paper is a review discussing qualitative PK properties and cortisol suppression without providing specific numeric disposition parameters for flunisolide. |
| popPK | Derendorf_1998 | irrelevant | 0 | 0 | The paper is a review discussing general properties and comparative qualitative traits of inhaled corticosteroids without providing specific quantitative PK parameters or original data for flunisolide. |
| popPK | Derendorf_2000 | irrelevant | 3 | 1 | PK/PD modeling of cortisol suppression for flunisolide, but no numeric disposition parameters (CL, V, ka) are reported in the evidence. |
| popPK | Dirks_2008 | irrelevant | 0 | 0 | In vitro reporter-gene potency (EC50) study in A549 cells; no PK disposition parameters for flunisolide. |
| popPK | Fan_2013 | irrelevant | 0 | 0 | The paper is a review of HPA axis suppression studies and does not report pharmacokinetic parameters for flunisolide. |
| popPK | Gaeta_2022 | irrelevant | 0 | 0 | The paper is a narrative review on drug dosing in pediatric obesity that does not mention flunisolide or provide any pharmacokinetic parameters for it. |
| popPK | Hagan_1998 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of eosinophil viability, not a pharmacokinetic study, and flunisolide is only a comparator agent. |
| popPK | Hochhaus_1990 | irrelevant | 0 | 0 | The study measures binding affinities (receptor pharmacodynamics) in an in-vitro setting, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Kantar_2007 | irrelevant | 2 | 3 | The paper is a clinical efficacy review of nebulized flunisolide in pediatric asthma; it reports general PK parameters (half-life, Vd) in the introduction but focuses on efficacy, not original PK modeling. |
| popPK | Kelly_1998 | irrelevant | 1 | 0 | A narrative review comparing inhaled corticosteroids with no quantitative PK parameters for flunisolide reported. |
| popPK | Krishnaswami_2000 | irrelevant | 4 | 2 | A PK/PD simulation tool using flunisolide parameters from prior studies; no numeric PK values for flunisolide are present in the evidence. |
| popPK | Mager_2003 | irrelevant | 0 | 0 | The study reports in-vitro immunosuppressive potency (IC50) rather than pharmacokinetic disposition parameters for flunisolide. |
| popPK | Martin_2002 | irrelevant | 2 | 0 | The study measures systemic cortisol suppression to compare bioavailability and potency, but does not report pharmacokinetic parameters (CL, V, half-life) or plasma concentration-time data for flunisolide itself. |
| popPK | McCubbin_1995 | irrelevant | 0 | 0 | The study assesses relative potency via pharmacodynamic endpoints (airway response and urinary cortisol) rather than pharmacokinetic disposition parameters. |
| popPK | Meibohm_1997 | irrelevant | 0 | 0 | The study is a modeling/simulation analysis using parameters from previous trials and does not report original quantitative PK parameter values for flunisolide in the evidence provided. |
| popPK | Meibohm_1999 | irrelevant | 4 | 2 | PK/PD modeling of flunisolide is mentioned but no numeric disposition parameters (CL, V, ka) appear in the evidence; values live in prior studies/supplementary sources. |
| PGx | Moore_2013 | not_relevant | 4 | 3 | The paper reports enzyme specificity (CYP3A4 vs CYP3A5/7) rather than a pharmacogenomic effect of a human genetic variant on a PK/PD parameter. |
| popPK | Pontremoli_2018 | irrelevant | 0 | 0 | The study is an in-vitro spectroscopic investigation of protein binding affinity (Ka/Kd) and does not report pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| popPK | Shafazand_2004 | irrelevant | 0 | 0 | The text is a review of the reformulation of flunisolide HFA and contains no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Spahn_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study comparing glucocorticoid potency via lymphocyte inhibition and receptor binding, reporting no pharmacokinetic disposition parameters (CL, V, t1/2, etc.) for flunisolide. |
| popPK | Staresinic_2000 | irrelevant | 0 | 0 | The paper is a review of fluticasone propionate where flunisolide is only mentioned as a comparator, with no PK data reported. |
| popPK | Thorsson_1997 | irrelevant | 0 | 0 | The study investigates fluticasone propionate, a different drug, not flunisolide. |
| popPK | Vlachou_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amlodipine, irbesartan, and hydrochlorothiazide; flunisolide is only mentioned in a passing citation regarding PBPK software capabilities. |
| popPK | Weber_2013 | irrelevant | 4 | 1 | A simulation tool paper for inhaled corticosteroids including flunisolide, but no numeric PK parameter values for flunisolide appear in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
