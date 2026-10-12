<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;drotrecogin alfa (activated)&quot;}]"></div>

# drotrecogin alfa (activated)

- **generic name:** drotrecogin alfa (activated)
- **ATC codes:** `B01AD10`
- **DrugBank:** [DB00055](https://go.drugbank.com/drugs/DB00055) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Drotrecogin alfa (activated) was used to treat severe sepsis. It has been withdrawn from the market, including in the European Union, and is no longer available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412888](https://www.wikidata.org/wiki/Q412888) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 14:41 | 1:40 | 0/0/1 | 0/0/1 | 0/0/0 | 42,274/3,140 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 1/5 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">None</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: not captured</sub> | [Macias_2002_patients with severe sepsis](drugs/drug_drotrecogin_alfa_activated/DrotrecoginAlfaActivated_Macias2002_patients_with_severe_sep.md) | — | — (no model) | 0 | Macias WL et al., Pharmacokinetic-pharmacodynamic analysi…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.128148](https://doi.org/10.1067/mcp.2002.128148) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Dömötör_2003_Ca2_i](drugs/drug_drotrecogin_alfa_activated/pd_D_m_t_r_2003_Ca2_i.md) | intracellular calcium concentration ← APC · direct sigmoid Emax (Hill) effect | — | Dömötör E et al., Activated protein C alters cytosolic ca…, Blood (2003) | [10.1182/blood-2002-12-3680](https://doi.org/10.1182/blood-2002-12-3680) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=drotrecogin_alfa_activated).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F2 (unknown), F5 (inhibitor), F8 (inhibitor), PF4 (unknown), PROCR (unknown), PROS1 (unknown), SERPINA5 (unknown), SERPINB6 (unknown), SERPINE1 (unknown), THBD (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Macias_2002.pdf` | Macias WL et al., Pharmacokinetic-pharmacodynamic analysi…, Clinical pharmacology and t… (2002) | popPK | 10 | [10.1067/mcp.2002.128148](https://doi.org/10.1067/mcp.2002.128148) | [12386641](https://pubmed.ncbi.nlm.nih.gov/12386641) | The paper reports quantitative pharmacokinetic parameters (median plasma clearance and steady-state concentration) for drotrecogin alfa (activated) in humans. |

<sub>queue written 2026-10-05T14:39:45.225868+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Annane_2018 | not_relevant | 0 | 0 | The study investigates pharmacogenomic biomarkers for clinical response (mortality) to drotrecogin alfa, not for pharmacokinetic or pharmacodynamic parameters. |
| popPK | Bajzar_1996 | irrelevant | 0 | 0 | The study investigates the mechanism of activated protein C (drotrecogin alfa) on fibrinolysis in an in vitro plasma system and does not report pharmacokinetic parameters (CL, V, etc.) for the drug. |
| PGx | Bansal_2023 | not_relevant | 0 | 0 | The study investigates the metabolic effects of APC in irradiated rats and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Bansal_2024 | not_relevant | 0 | 0 | The paper studies the effect of a protein C variant on radiation-induced metabolic changes in mice, not the pharmacokinetics or pharmacodynamics of drotrecogin alfa activated. |
| PGx | Berg_2003 | not_relevant | 0 | 0 | The paper describes protein engineering of activated protein C to improve pharmacological properties, not the effect of human gene variants on the PK/PD of drotrecogin alfa. |
| PGx | Del_2009 | not_relevant | 0 | 0 | The paper discusses genetic risk factors for pediatric stroke but does not mention drotrecogin alfa activated or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Douxfils_2020 | not_relevant | 0 | 0 | The paper discusses oral contraceptives and venous thromboembolism risk, not drotrecogin alfa activated. |
| popPK | Dömötör_2003 | irrelevant | 0 | 0 | The study investigates the cellular mechanism of activated protein C (drotrecogin alfa) on calcium flux in endothelial cells and does not report pharmacokinetic parameters. |
| popPK | Favory_2013 | irrelevant | 0 | 0 | The study investigates the hemodynamic and vascular reactivity effects of activated protein C, not its pharmacokinetic disposition parameters (CL, V, etc.). |
| PGx | Gale_1997 | not_relevant | 0 | 0 | The paper studies a mutant form of activated protein C (S360A) and its interaction with Factor Va, not the pharmacogenomics of drotrecogin alfa (activated). |
| PGx | Gale_2006 | not_relevant | 0 | 0 | The paper studies engineered variants of coagulation factor VIII, not the pharmacogenomics of drotrecogin alfa (activated). |
| PGx | Incalcaterra_2004 | not_relevant | 0 | 0 | The paper discusses genetic risk factors for myocardial infarction and does not mention drotrecogin alfa activated or its pharmacokinetics/pharmacodynamics. |
| PGx | Iqbal_2003 | not_relevant | 0 | 0 | The paper discusses risk factors for venous thromboembolism associated with air travel and does not mention drotrecogin alfa activated or any pharmacogenomic effects on its PK/PD parameters. |
| PGx | Komitopoulou_2006 | not_relevant | 0 | 0 | The paper studies genetic variants in hemostasis genes in children with stroke and does not mention drotrecogin alfa activated or its pharmacokinetics/pharmacodynamics. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The paper investigates urinary metabolomics for predicting radiation-induced cardiac dysfunction in mice and does not report pharmacokinetic or pharmacodynamic parameters for drotrecogin alfa activated. |
| PD | Macias_2002 | not_relevant | 3 | 2 | The paper analyzes PD effects by C(ss) quartiles but explicitly states that no correlation was detected between concentration quartiles and biomarker effects, providing no numeric PD parameters or dose-response curve. |
| PGx | Nakhoul_2004 | not_relevant | 0 | 0 | The paper studies the effect of B-vitamins on homocysteine levels in relation to MTHFR genotype, not the pharmacokinetics or pharmacodynamics of drotrecogin alfa (activated). |
| PGx | Ocal_1997 | not_relevant | 0 | 0 | The paper investigates the association between MTHFR mutations and venous thrombosis risk, and does not mention drotrecogin alfa (activated) or its pharmacokinetic/pharmacodynamic parameters. |
| PGx | Reda_2026 | not_relevant | 0 | 0 | The paper studies the protein C pathway and does not mention drotrecogin alfa activated. |
| PGx | Rolla_2014 | not_relevant | 0 | 0 | The paper investigates the prothrombin G20210A polymorphism and its effect on routine coagulation assays, not the pharmacokinetics or pharmacodynamics of drotrecogin alfa (activated). |
| PGx | Seed_2004 | not_relevant | 0 | 0 | The paper discusses hormone-replacement therapy and cardiovascular risk factors, not drotrecogin alfa activated. |
| PGx | Shetty_2015 | not_relevant | 0 | 0 | The paper is a general review of novel therapeutic approaches for haemophilia and does not report pharmacogenomic effects on the PK/PD of drotrecogin alfa activated. |
| PGx | Sim_2025 | not_relevant | 0 | 0 | The paper studies antibody engineering to modulate APC activity, not the effect of human gene variants on the PK/PD of drotrecogin alfa activated. |
| PGx | Sinha_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of activated protein C variants in a mouse model of GVHD, not the effect of human genetic variants on the PK/PD of drotrecogin alfa (activated). |
| PGx | Tapon-Bretaudière_2000 | not_relevant | 0 | 0 | The text discusses laboratory testing for venous thromboembolism and genetic risk factors for thrombophilia, but does not mention drotrecogin alfa (activated) or its pharmacokinetics/pharmacodynamics. |
| PGx | Thielen_2024 | not_relevant | 0 | 0 | The paper investigates the therapeutic effect of an engineered variant (3K3A-aPC) on endothelial permeability, not the effect of a patient's genetic variant on the PK/PD of drotrecogin alfa activated. |
| PGx | Wan_2022 | not_relevant | 0 | 0 | The paper investigates the genetic determinants of thrombin generation and the role of kallikrein in the protein C pathway, but does not report pharmacokinetic or pharmacodynamic effects of drotrecogin alfa (activated protein C) modulated by gene variants. |
| popPK | Winn_1990 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of protein C on vascular relaxation in dog coronary arteries and does not report pharmacokinetic parameters for drotrecogin alfa activated. |
| PD | Winn_1990 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of activated protein C and thrombin, not drotrecogin alfa activated. |
| popPK | Yokota_2024 | irrelevant | 0 | 0 | The study investigates the effects of dienogest and combined oral contraceptives on protein S activity in endometriosis patients and does not involve drotrecogin alfa activated. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 14:39 UTC</sub>
