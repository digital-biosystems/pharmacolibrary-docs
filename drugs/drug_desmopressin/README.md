<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01B&quot;,&quot;href&quot;:&quot;atc/H01B.md&quot;},{&quot;label&quot;:&quot;desmopressin&quot;}]"></div>

# desmopressin

- **generic name:** desmopressin
- **ATC codes:** `H01BA02`
- **DrugBank:** [DB00035](https://go.drugbank.com/drugs/DB00035) · **PubChem:** not captured
- **molar mass:** 1069.22 g/mol (C46H64N14O12S2) — DrugBank
- **groups:** approved, investigational

## About

Desmopressin, a synthetic vasopressin analogue, is used to treat diabetes insipidus, bedwetting, hemophilia A, von Willebrand disease, and high blood urea levels. It is an approved medicine, appears on the WHO essential medicines list, and is widely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q241006](https://www.wikidata.org/wiki/Q241006) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| desmopressin | parent | 1069.22 | C46H64N14O12S2 | DrugBank | — | Michelet_2016 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL/F | 4892 | L/h | 4892 L/h | children with nocturnal enuresis | &gt;$0 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Michelet_2016_reference](drugs/drug_desmopressin/Desmopressin_Michelet2016_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Michelet_2016_reference](drugs/drug_desmopressin/Desmopressin_Michelet2016_reference.md) | — | 1-compartment (no model) | 1 | Michelet R et al., Effects of Food and Pharmaceutical Form…, Clinical pharmacokinetics (2016) | [10.1007/s40262-016-0393-4](https://doi.org/10.1007/s40262-016-0393-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Callréus_2002_Uosm](drugs/drug_desmopressin/pd_Callr_us_2002_Uosm.md) | urine osmolarity ← desmopressin · indirect response — drug inhibits the loss of urine osmolarity | — | Callréus T et al., The influence of lithium on the antidiu…, The Journal of pharmacy and… (2002) | [10.1211/002235702320402134](https://doi.org/10.1211/002235702320402134) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Odeberg_2004_urine_osmolality](drugs/drug_desmopressin/pd_Odeberg_2004_urine_osmolality.md) | urine osmolality ← desmopressin · indirect response — drug inhibits the production of urine osmolality | — | Odeberg JM et al., A pharmacokinetic and pharmacodynamic s…, The Journal of pharmacy and… (2004) | [10.1211/0022357044535](https://doi.org/10.1211/0022357044535) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Heijdra_2022_2_VWF_Act](drugs/drug_desmopressin/pd_Heijdra_2022_2_VWF_Act.md) | Von Willebrand factor activity ← desmopressin · indirect response — drug inhibits the loss of Von Willebrand factor activity | — | Heijdra JM et al., Quantification of the relationship betw…, Haemophilia : the official… (2022) | [10.1111/hae.14582](https://doi.org/10.1111/hae.14582) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Callréus_1999_Uosm](drugs/drug_desmopressin/pd_Callr_us_1999_Uosm.md) | urine osmolarity ← desmopressin · indirect response — drug inhibits the loss of urine osmolarity | — | Callréus T et al., Indirect-response modeling of desmopres…, Journal of pharmacokinetics… (1999) | [10.1023/a:1023238514015](https://doi.org/10.1023/a:1023238514015) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Michelet_2020_osmolality](drugs/drug_desmopressin/pd_Michelet_2020_osmolality.md) | osmolality ← dDAVP · indirect response — drug inhibits the loss of osmolality | — | Michelet R et al., An Integrated Paediatric Population PK/…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00798-6](https://doi.org/10.1007/s40262-019-00798-6) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Michelet_2020_produced_urine_volume](drugs/drug_desmopressin/pd_Michelet_2020_produced_urine_volume.md) | produced urine volume ← dDAVP · indirect response — drug inhibits the loss of produced urine volume | — | Michelet R et al., An Integrated Paediatric Population PK/…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00798-6](https://doi.org/10.1007/s40262-019-00798-6) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:11 | 2:52 | 0/0/1 | 2/2/1 | 0/0/0 | 260,214/20,099 | einfracz / qwen3.8-27b | 6 | 1/5 | 5/1 | 0 |

## Coverage

- **PubMed hits:** 38 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Callréus_1999.pdf` | Callréus T et al., Indirect-response modeling of desmopres…, Journal of pharmacokinetics… (1999) | popPK | 10 | [10.1023/a:1023238514015](https://doi.org/10.1023/a:1023238514015) | [10948696](https://pubmed.ncbi.nlm.nih.gov/10948696) | The study reports quantitative PK parameters (CL, Vc, Vss, t1/2) for desmopressin in humans with values explicitly listed in the abstract. |
| `Dossche_2021.pdf` | Dossche L et al., Desmopressin oral lyophilisate in young…, Archives of disease in chil… (2021) | popPK | 10 | [10.1136/archdischild-2019-318225](https://doi.org/10.1136/archdischild-2019-318225) | [32737054](https://pubmed.ncbi.nlm.nih.gov/32737054) | The paper describes a pharmacokinetic study of desmopressin with relevant parameters (CL/F, Vd/F), but the specific numeric values are not present in the provided abstract text, only the covariate relationships and qualitative findings. |
| `Guillet_2025.pdf` | Guillet B et al., F8 gene variants influence the response…, Blood (2025) | popPK | 10 | [10.1182/blood.2025029829](https://doi.org/10.1182/blood.2025029829) | [40845131](https://pubmed.ncbi.nlm.nih.gov/40845131) | The study reports a population PK/PD model for Factor VIII (the target compound released by Desmopressin) with specific numeric values for clearance, AUC, and half-life-related metrics in the abstract. |
| `Michelet_2020.pdf` | Michelet R et al., An Integrated Paediatric Population PK/…, Clinical pharmacokinetics (2020) | popPK | 10 | [10.1007/s40262-019-00798-6](https://doi.org/10.1007/s40262-019-00798-6) | [31347012](https://pubmed.ncbi.nlm.nih.gov/31347012) | The paper describes a population PK/PD model for desmopressin in children, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/text evidence. |
| `Odeberg_2004.pdf` | Odeberg JM et al., A pharmacokinetic and pharmacodynamic s…, The Journal of pharmacy and… (2004) | popPK | 9 | [10.1211/0022357044535](https://doi.org/10.1211/0022357044535) | [15525445](https://pubmed.ncbi.nlm.nih.gov/15525445) | The paper is a PK/PD study of desmopressin in humans reporting two-compartmental analysis parameters, but no specific numeric values (CL, V, etc.) are present in the provided evidence text. |
| `Heijdra_2022_2.pdf` | Heijdra JM et al., Quantification of the relationship betw…, Haemophilia : the official… (2022) | popPK | 8 | [10.1111/hae.14582](https://doi.org/10.1111/hae.14582) | [35526239](https://pubmed.ncbi.nlm.nih.gov/35526239) | The study describes a population PK model for desmopressin in humans, but specific quantitative PK parameter estimates (CL, V, etc.) are not present in the provided text, focusing instead on PD parameters and simulation outcomes. |

<sub>queue written 2026-10-07T09:09:27.678990+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aldasoro_1997 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring vascular relaxation and receptor mechanisms, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Callréus_2002 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects (antidiuresis) and interaction with lithium, without reporting quantitative pharmacokinetic parameters like clearance or volume for desmopressin. |
| popPK | Dossche_2021 | relevant | 10 | 2 | The paper describes a pharmacokinetic study of desmopressin with relevant parameters (CL/F, Vd/F), but the specific numeric values are not present in the provided abstract text, only the covariate relationships and qualitative findings. |
| popPK | Heijdra_2017 | irrelevant | 2 | 0 | The paper is a review of von Willebrand disease management that discusses desmopressin's mechanism and general use, but it does not report quantitative pharmacokinetic disposition parameters (e.g., clearance, volume, half-life) for desmopressin itself. |
| popPK | Heijdra_2022 | irrelevant | 2 | 0 | This is a study protocol for a future trial to validate PK models, and it does not report original quantitative PK parameter values for desmopressin itself (it models VWF/FVIII response); any existing model parameters are in unpublished or referenced external sources. |
| popPK | Heijdra_2022_2 | relevant | 8 | 2 | The study describes a population PK model for desmopressin in humans, but specific quantitative PK parameter estimates (CL, V, etc.) are not present in the provided text, focusing instead on PD parameters and simulation outcomes. |
| popPK | Juul_2013 | irrelevant | 1 | 0 | The study reports PK/PD delay and effect variability but lacks quantitative compartmental PK parameters (clearance, volume, half-life) for desmopressin. |
| popPK | Michelet_2018 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic parameters (IC50, urine osmolality) and qualitative PK/PD modeling, without reporting specific numeric PK disposition parameters (CL, V, t1/2) for desmopressin. |
| popPK | Michelet_2020 | relevant | 10 | 2 | The paper describes a population PK/PD model for desmopressin in children, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/text evidence. |
| popPK | Odeberg_2004 | relevant | 9 | 0 | The paper is a PK/PD study of desmopressin in humans reporting two-compartmental analysis parameters, but no specific numeric values (CL, V, etc.) are present in the provided evidence text. |
| popPK | Patel_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacological activity of a new peptide (METx) using desmopressin only as a comparator in receptor binding assays, with no pharmacokinetic parameters reported. |
| popPK | Preijers_2019 | irrelevant | 2 | 0 | The paper is a review of dosing strategies and PK models but does not present original quantitative PK parameter values for desmopressin in the provided text. |
| popPK | Preijers_2021 | relevant | 5 | 0 | This is a review that discusses population PK models for desmopressin (measuring FVIII response) but does not provide the numeric desmopressin parameter values in the text, which are likely in the excluded supplementary material. |
| popPK | Yen_2025 | irrelevant | 3 | 0 | The study applies an existing PK/PD model to simulate dosing recommendations but does not report original quantitative PK parameter estimates (e.g., CL, V, ka) for desmopressin itself. |
| popPK | de_2020 | irrelevant | 3 | 2 | The study models the PK of von Willebrand factor (VWF), a biomarker/probe, not the disposition parameters (CL, V, t1/2) of the drug desmopressin itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 09:09 UTC</sub>
