<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;Pibrentasvir&quot;}]"></div>

# Pibrentasvir

- **generic name:** Pibrentasvir
- **ATC codes:** `J05AP57`
- **DrugBank:** [DB13878](https://go.drugbank.com/drugs/DB13878) · **PubChem:** [CID 58031952](https://pubchem.ncbi.nlm.nih.gov/compound/58031952)
- **molar mass:** 1113.201 g/mol (C57H65F5N10O8) — DrugBank
- **groups:** approved, investigational

## About

Pibrentasvir is an antiviral drug used to treat hepatitis C virus infections. It is an approved medicine and is used in combination with other hepatitis C treatments.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q39048005](https://www.wikidata.org/wiki/Q39048005) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pibrentasvir | parent | 1113.2 | C57H65F5N10O8 | DrugBank | [58031952](https://pubchem.ncbi.nlm.nih.gov/compound/58031952) | Thakre_2026 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 90.42 | L/h | 2170 L/day | pediatric patients ≥3 to &lt;18 years with chronic HCV infection | 126 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Thakre_2026_reference](drugs/drug_pibrentasvir/Pibrentasvir_Thakre2026_reference.md) |
| ka | kabs | 0.3058 | 1/h | 7.34 1/day | pediatric patients ≥3 to &lt;18 years with chronic HCV infection | 126 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Thakre_2026_reference](drugs/drug_pibrentasvir/Pibrentasvir_Thakre2026_reference.md) |
| F | Fab | 0.0247 |  | 2.47 \documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\theta$$\end{document}θ | pediatric patients ≥3 to &lt;18 years with chronic HCV infection | 126 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Thakre_2026_reference](drugs/drug_pibrentasvir/Pibrentasvir_Thakre2026_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Vd left at base-class defaults</sub> | [Thakre_2026_reference](drugs/drug_pibrentasvir/Pibrentasvir_Thakre2026_reference.md) | held back | 1-compartment, oral | 7 (+2 cov.) | Thakre N et al., Population Pharmacokinetic Analysis of…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01637-1](https://doi.org/10.1007/s40262-026-01637-1) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ng_2017_HCV_replication](drugs/drug_pibrentasvir/pd_Ng_2017_HCV_replication.md) | HCV replication in replicon cells (luciferase reporter activity) ← pibrentasvir · direct sigmoid Emax (Hill) effect | — | Ng TI et al., Antimicrobial agents and ch… (2017) | [10.1128/AAC.02558-16](https://doi.org/10.1128/AAC.02558-16) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nguyen_2020_RLU](drugs/drug_pibrentasvir/pd_Nguyen_2020_RLU.md) | HCV replicon replication (luciferase activity) ← pibrentasvir · direct sigmoid Emax (Hill) effect | — | Nguyen D et al., Efficacy of NS5A inhibitors against unu…, Journal of hepatology (2020) | [10.1016/j.jhep.2020.05.029](https://doi.org/10.1016/j.jhep.2020.05.029) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Schnell_2018_EC50](drugs/drug_pibrentasvir/pd_Schnell_2018_EC50.md) | HCV replicon replication (luciferase reporter) inhibition by pibrentasvir in transient replicon assay ← pibrentasvir · direct sigmoid Emax (Hill) effect | — | Schnell G et al., Hepatitis C virus genetic diversity by…, PloS one (2018) | [10.1371/journal.pone.0205186](https://doi.org/10.1371/journal.pone.0205186) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pibrentasvir).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:24 | 2:23 | 1/0/0 | 3/0/0 | 0/0/0 | 171,460/6,476 | ollama / glm-5.3-flash | 4 | 1/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Suleiman_2020.pdf` | Suleiman AA et al., Population Pharmacokinetics of Glecapre…, Journal of clinical pharmac… (2020) | popPK | 9 | [10.1002/jcph.1524](https://doi.org/10.1002/jcph.1524) | [31515816](https://pubmed.ncbi.nlm.nih.gov/31515816) | Population PK (2-compartment model) of pibrentasvir in humans, but only exposure ratios (e.g., 21% higher AUC with cirrhosis) appear; CL/V/parameter estimates likely in tables/supplements not provided. |

<sub>queue written 2026-10-07T16:22:55.594296+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ng_2017 | irrelevant | 0 | 0 | In vitro antiviral activity/resistance study with EC50s only; no PK disposition parameters (CL, V, half-life, or PK model) for pibrentasvir. |
| popPK | Nguyen_2020 | irrelevant | 0 | 0 | In vitro replicon study of antiviral EC50 efficacy, not a PK study; no disposition parameters (CL, V, half-life) for pibrentasvir are reported. |
| popPK | Oberoi_2020 | irrelevant | 2 | 1 | This is a QT/ECG safety study; pibrentasvir is dosed but no PK disposition parameters (CL, V, half-life, population-PK model) are reported, only concentration-QTc relationships. |
| popPK | Schnell_2018 | irrelevant | 0 | 0 | This is an HCV genetic diversity/virology study; pibrentasvir is only the treatment drug and no PK parameters (CL, V, half-life, PK model) are reported. |
| popPK | Suleiman_2020 | relevant | 9 | 4 | Population PK (2-compartment model) of pibrentasvir in humans, but only exposure ratios (e.g., 21% higher AUC with cirrhosis) appear; CL/V/parameter estimates likely in tables/supplements not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:22 UTC</sub>
